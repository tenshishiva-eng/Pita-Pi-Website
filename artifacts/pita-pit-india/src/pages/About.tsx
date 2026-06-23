import React from "react";
import { BrandPillars } from "@/components/BrandPillars";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 max-w-4xl">
              Fresh Thinking.<br/>Healthy Eating.<br/><span className="text-accent">Since 1995.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6">
              <ScrollReveal delay={100}>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  It started with a single pita in Kingston, Ontario, in 1995. Nelson Lang had a simple but radical idea: fast food could be fresh, healthy, and genuinely delicious — not a compromise, but a choice people would be proud to make. He hand-rolled that first pita himself, and the concept was born.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  By 1997, the model had proven itself — Pita Pit began franchising across Canada. By 1999, the US had caught on. By 2008, the brand's first international store opened in New Zealand, proving that fresh thinking travels well. Today, 450+ Pita Pit stores span North America, Europe, Asia, the Middle East, and Asia-Pacific.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  In India, Pita Pit has found a home in the north and east — led by master franchisee Sameer Lamba, with current locations across Delhi NCR and Chandigarh and active expansion underway into Ambala and Karnal as part of a wider FY2025-26 push. We believe India is ready for this kind of food: bold in flavour, honest in ingredients, and built for modern, on-the-go life.
                </p>
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <ScrollReveal animation="slide-left">
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=800&fit=crop" 
                    alt="Pita Pit Team" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Journey</h2>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {[
                { year: "1995", title: "Founded in Kingston, Ontario, Canada", desc: "Nelson Lang rolls the first pita" },
                { year: "1997", title: "Franchising begins", desc: "Expanding across Canada" },
                { year: "1999", title: "US expansion launches", desc: "Bringing the concept south" },
                { year: "2008", title: "Going Global", desc: "First international store opens in New Zealand" },
                { year: "Today", title: "Global Presence", desc: "450+ stores globally across North America, Europe, Asia, Middle East & Asia-Pacific" },
                { year: "India Now", title: "North & East India", desc: "Delhi NCR + Chandigarh, expanding to Ambala & Karnal (FY2025-26)" },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100} className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-row pl-12 md:pl-0`}>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground border-4 border-secondary flex items-center justify-center md:-translate-x-1/2 z-10"></div>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-sm border border-border inline-block w-full">
                      <span className="text-accent font-bold text-lg mb-1 block">{item.year}</span>
                      <h3 className="font-serif font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <BrandPillars />

      {/* Stat Strip */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <ScrollReveal delay={0}>
              <div className="font-serif text-6xl md:text-7xl font-bold text-accent mb-4">30+</div>
              <div className="text-xl font-medium">Years of Fresh Thinking</div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="font-serif text-6xl md:text-7xl font-bold text-accent mb-4">450+</div>
              <div className="text-xl font-medium">Stores Worldwide</div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="font-serif text-6xl md:text-7xl font-bold text-accent mb-4">60+</div>
              <div className="text-xl font-medium">Fillings & Toppings to Mix and Match</div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
