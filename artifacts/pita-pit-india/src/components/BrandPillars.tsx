import React from "react";
import { Heart, Sliders, Zap, Leaf, Smile, Globe } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const pillars = [
  {
    icon: Heart,
    title: "Crave-Able",
    description: "Food people genuinely dream about",
  },
  {
    icon: Sliders,
    title: "Customisable",
    description: "Have it your way, build your own",
  },
  {
    icon: Zap,
    title: "Fast & Convenient",
    description: "Built for on-the-go life",
  },
  {
    icon: Leaf,
    title: "Healthy",
    description: "Guilt-free dining, genuinely",
  },
  {
    icon: Smile,
    title: "Fun & Friendly",
    description: "Life's too short to take too seriously",
  },
  {
    icon: Globe,
    title: "Eco Friendly",
    description: "Because we live on this planet too",
  },
];

export function BrandPillars() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Why Pita Pit?</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={index} delay={index * 100} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 transition-transform hover:scale-110 duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
