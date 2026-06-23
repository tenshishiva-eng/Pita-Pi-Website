import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getImageOverride, slugify } from "@/lib/imageStore";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  imageQuery: string;
  isVeg: boolean;
}

export function MenuCard({ name, description, price, imageQuery, isVeg }: MenuCardProps) {
  const key = slugify(name);
  const imgSrc = getImageOverride(key) ?? `https://picsum.photos/seed/${imageQuery.replace(/,/g, '-')}/600/400`;

  return (
    <div className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm flex items-center">
          <div
            className={`w-2.5 h-2.5 rounded-full ${isVeg ? "bg-[#16a34a]" : "bg-[#dc2626]"}`}
            aria-label={isVeg ? "Vegetarian" : "Non-vegetarian"}
            title={isVeg ? "Vegetarian" : "Non-vegetarian"}
          />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="font-serif font-semibold text-lg leading-tight text-foreground">{name}</h3>
          <span className="font-medium text-primary whitespace-nowrap">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm flex-grow mb-6">{description}</p>
        <Link href="/contact" className="mt-auto">
          <Button variant="outline" className="w-full rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
            Order Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
