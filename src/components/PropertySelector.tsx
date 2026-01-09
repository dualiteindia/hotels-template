import { motion } from "framer-motion";
import { transition } from "../lib/utils";

// Indian Context Data
const properties = [
  {
    id: 1,
    name: "The Green",
    location: "Bandra Kurla Complex, Mumbai",
    status: "Available from 400 sq.m.",
    color: "bg-brand-green",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/CFp2HUamNRnKG45QU2GFNdYDgk.avif",
    textColor: "text-white"
  },
  {
    id: 2,
    name: "The Pink",
    location: "Aerocity, New Delhi",
    status: "Fully Booked",
    color: "bg-brand-pink",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/deq2eR5qHdsS8PueXsBfYhVQxss.avif",
    textColor: "text-black"
  },
  {
    id: 3,
    name: "The Yellow",
    location: "Indiranagar, Bangalore",
    status: "Available from 207 sq.m.",
    color: "bg-brand-yellow",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/eZr7r3hZ3SfMITm089bWmMYDVk.avif",
    textColor: "text-black"
  },
  {
    id: 4,
    name: "The Red",
    location: "Jubilee Hills, Hyderabad",
    status: "Inquire for Waitlist",
    color: "bg-brand-red",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/hotels/KKYjmUA62hs6qFhvp1gzyFBmrBE.avif",
    textColor: "text-white"
  }
];

export const PropertySelector = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-brand-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto">
        {properties.map((prop, index) => (
          <PropertyCard key={prop.id} property={prop} index={index} />
        ))}
      </div>
    </section>
  );
};

const PropertyCard = ({ property, index }: { property: typeof properties[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ ...transition, delay: index * 0.1 }}
            className="flex flex-col h-full group cursor-pointer"
        >
            {/* Colored Container Frame */}
            <div className={`relative w-full aspect-[3/4] ${property.color} overflow-hidden mb-5`}>
                {/* Inner Image with Padding */}
                <div className="absolute inset-0 w-full h-full p-6 md:p-8 flex items-end justify-center">
                    <motion.div 
                        className="w-full h-full relative overflow-hidden shadow-2xl"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                    >
                        <img 
                            src={property.image} 
                            alt={property.name}
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="space-y-1 px-1 border-t border-black/5 pt-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold tracking-tight">{property.name}</h3>
                    <div className={`w-2 h-2 rounded-full ${property.color}`} />
                </div>
                <p className="text-sm text-neutral-800 font-medium">{property.location}</p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">{property.status}</p>
            </div>
        </motion.div>
    )
}
