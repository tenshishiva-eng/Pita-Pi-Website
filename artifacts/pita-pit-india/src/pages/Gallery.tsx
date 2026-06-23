import React, { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { X } from "lucide-react";

// /* [CLIENT: Replace with real photography] */
const galleryImages = [
  { query: "pita,wrap,food,fresh", alt: "Fresh Pita Wrap" },
  { query: "salad,bowl,colorful", alt: "Colorful Salad Bowl" },
  { query: "restaurant,interior,modern", alt: "Modern Restaurant Interior" },
  { query: "food,photography,healthy", alt: "Healthy Food Photography" },
  { query: "milkshake,drink,fresh", alt: "Fresh Milkshake" },
  { query: "falafel,plate", alt: "Falafel Plate" },
  { query: "wrap,sandwich,lunch", alt: "Lunch Wrap" },
  { query: "restaurant,counter,food", alt: "Restaurant Counter" },
  { query: "hummus,mediterranean", alt: "Hummus Dip" },
  { query: "salad,greens,fresh", alt: "Fresh Greens Salad" },
  { query: "food,table,spread", alt: "Food Table Spread" },
  { query: "pita,bread,fresh", alt: "Fresh Pita Bread" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">A Taste of Pita Pit</h1>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, index) => (
              <ScrollReveal key={index} delay={(index % 4) * 100} className="break-inside-avoid">
                <div 
                  className="relative rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(`https://picsum.photos/seed/${img.query.replace(/,/g, '-')}/800/1200`)}
                >
                  <img 
                    src={`https://picsum.photos/seed/${img.query.replace(/,/g, '-')}/600/800`} 
                    alt={img.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm transition-opacity duration-300">
                      View Image
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-black/20 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking the image itself
          />
        </div>
      )}
    </div>
  );
}
