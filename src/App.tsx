import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { PropertySelector } from "./components/PropertySelector";
import { BrandStory } from "./components/BrandStory";
import { WhySection } from "./components/WhySection";
import { LocationSection } from "./components/LocationSection";
import { VideoSection } from "./components/VideoSection";
import { AmenitiesSection } from "./components/AmenitiesSection";
import { ImageStripSection } from "./components/ImageStripSection";
import { ContactSection } from "./components/ContactSection";
import { AccessSection } from "./components/AccessSection";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";

function App() {
  return (
    <main className="w-full min-h-screen bg-brand-bg selection:bg-brand-yellow selection:text-black cursor-none">
      <CustomCursor />
      <Navigation />
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="availability">
        <PropertySelector />
      </div>
      
      <div id="about">
        <BrandStory />
      </div>
      
      <WhySection />
      
      <div id="building">
        <LocationSection />
      </div>
      
      <VideoSection />
      
      <div id="amenities">
        <AmenitiesSection />
      </div>
      
      <ImageStripSection />
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <div id="access">
        <AccessSection />
      </div>
      
      <Footer />
    </main>
  );
}

export default App;
