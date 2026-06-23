import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
}

export function TestimonialCard({ name, location, quote }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col h-full">
      <div className="flex text-[#F59E0B] mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 fill-current" />
        ))}
      </div>
      <blockquote className="text-lg text-foreground mb-8 flex-grow leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-serif font-bold text-xl mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{location}</div>
        </div>
      </div>
    </div>
  );
}
