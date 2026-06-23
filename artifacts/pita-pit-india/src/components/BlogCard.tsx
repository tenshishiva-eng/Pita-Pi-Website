import React from "react";
import { Link } from "wouter";

interface BlogCardProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
  imageQuery: string;
}

export function BlogCard({ title, date, category, excerpt, slug, imageQuery }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="h-full flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={`https://picsum.photos/seed/${imageQuery.replace(/,/g, '-')}/600/400`} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-xs font-medium text-foreground">
            {category}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="text-sm text-muted-foreground mb-3">{date}</div>
          <h3 className="font-serif font-bold text-xl leading-snug text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">{excerpt}</p>
          <div className="mt-auto flex items-center text-accent font-medium text-sm">
            Read more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
