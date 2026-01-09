#!/bin/bash

# ==========================================
# CONFIGURATION
# ==========================================
# Directory to search (defaults to current folder '.' if not provided)
SEARCH_DIR="${1:-.}"
# Output CSV filename
OUTPUT_FILE="dropbox_links.csv"
# Directory to save downloaded files
ASSETS_DIR="./assets"

# ==========================================
# SETUP
# ==========================================

# Check if search directory exists
if [ ! -d "$SEARCH_DIR" ]; then
    echo "Error: Directory '$SEARCH_DIR' does not exist."
    exit 1
fi

# Create assets directory if it doesn't exist
if [ ! -d "$ASSETS_DIR" ]; then
    echo "Creating assets folder..."
    mkdir -p "$ASSETS_DIR"
fi

echo "-----------------------------------------------------"
echo "Phase 1: Searching for links in: $SEARCH_DIR"
echo "-----------------------------------------------------"

# Create a temporary file to hold the raw links
TEMP_LINKS=$(mktemp)

# 1. Search for links and save to temp file
# We use the same grep logic as before
grep -r -o -I -h "https://www\.dropbox\.com/[a-zA-Z0-9/._?=&%-]*" "$SEARCH_DIR" | sort | uniq > "$TEMP_LINKS"

# Count results
TOTAL_LINKS=$(wc -l < "$TEMP_LINKS" | xargs) # xargs trims whitespace

if [ "$TOTAL_LINKS" -eq 0 ]; then
    echo "No Dropbox links found."
    rm "$TEMP_LINKS"
    exit 0
fi

echo "Found $TOTAL_LINKS unique links."
echo "Saving list to $OUTPUT_FILE..."

# 2. Create the CSV (Header + Content)
echo "Dropbox URL" > "$OUTPUT_FILE"
cat "$TEMP_LINKS" >> "$OUTPUT_FILE"

echo "-----------------------------------------------------"
echo "Phase 2: Downloading files to '$ASSETS_DIR'"
echo "-----------------------------------------------------"

# 3. Iterate through links and download
COUNTER=1
while IFS= read -r url; do
    # A. EXTRACT FILENAME
    # 1. Remove the query string (everything after the '?')
    base_url="${url%%\?*}"
    # 2. Get the filename from the end of the path
    filename=$(basename "$base_url")
    
    # If filename is empty (rare case), give it a generic name
    if [ -z "$filename" ] || [ "$filename" == "/" ]; then
        filename="dropbox_file_$COUNTER"
    fi

    # B. PREPARE DOWNLOAD URL
    # Dropbox links usually point to a preview page. 
    # To download the file, we need to ensure 'dl=1' is set.
    
    download_url="$url"
    
    # Check if URL already has query params
    if [[ "$download_url" == *"?"* ]]; then
        # If it has dl=0, replace it with dl=1
        if [[ "$download_url" == *"dl=0"* ]]; then
            download_url="${download_url/dl=0/dl=1}"
        # If it doesn't have dl=1 and doesn't have raw=1, append &dl=1
        elif [[ "$download_url" != *"dl=1"* && "$download_url" != *"raw=1"* ]]; then
            download_url="${download_url}&dl=1"
        fi
    else
        # If no query params, append ?dl=1
        download_url="${download_url}?dl=1"
    fi

    # C. DOWNLOAD
    echo "[$COUNTER/$TOTAL_LINKS] Downloading: $filename"
    
    # curl flags: 
    # -L (Follow redirects), -s (Silent/no progress bar), -o (Output file)
    curl -L -s -o "$ASSETS_DIR/$filename" "$download_url"

    ((COUNTER++))

done < "$TEMP_LINKS"

# Cleanup
rm "$TEMP_LINKS"

echo "-----------------------------------------------------"
echo "Process Complete."
echo "CSV saved to: $OUTPUT_FILE"
echo "Files saved to: $ASSETS_DIR/"
echo "-----------------------------------------------------"