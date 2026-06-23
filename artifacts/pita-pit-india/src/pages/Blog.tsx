import React from "react";
import { BlogCard } from "@/components/BlogCard";
import { ScrollReveal } from "@/components/ScrollReveal";

const blogPosts = [
  {
    title: "Pita Pit Expands to Ambala & Karnal: What's Next for North India",
    date: "Jan 2025",
    category: "Expansion",
    excerpt: "Master franchisee Sameer Lamba confirms the brand's FY2025-26 push into Haryana, with new outlets in Ambala and Karnal set to open later this year.",
    slug: "pita-pit-ambala-karnal-expansion",
    imageQuery: "restaurant,expansion,food",
  },
  {
    title: "Sameer Lamba Named Master Franchisee for North & East India",
    date: "Oct 2024",
    category: "Brand News",
    excerpt: "A seasoned entrepreneur and food-industry veteran, Sameer Lamba brings operational depth and regional know-how to the Pita Pit India story.",
    slug: "sameer-lamba-master-franchisee",
    imageQuery: "business,food,franchise",
  },
  {
    title: "Why Healthy Fast Food Is Finally Having Its Moment in India",
    date: "Aug 2024",
    category: "Opinion",
    excerpt: "As urban India's dining habits shift, the demand for nutritious, fast, and affordable meals has never been stronger — and Pita Pit is here for it.",
    slug: "healthy-fast-food-india",
    imageQuery: "healthy,food,india",
  },
  // Adding a few more for the listing page
  {
    title: "The Anatomy of the Perfect Falafel",
    date: "Jun 2024",
    category: "Food",
    excerpt: "We break down what makes our falafel golden and crispy on the outside, and perfectly green and tender on the inside.",
    slug: "perfect-falafel",
    imageQuery: "falafel,cooking",
  },
  {
    title: "Building a Better Breakfast: New Morning Wraps",
    date: "Apr 2024",
    category: "Menu",
    excerpt: "Start your day with purpose. Introducing our new line of protein-packed morning wraps designed for early risers.",
    slug: "breakfast-wraps-launch",
    imageQuery: "breakfast,wrap,coffee",
  },
  {
    title: "Sustainability in Fast Casual: Our Packaging Promise",
    date: "Feb 2024",
    category: "Sustainability",
    excerpt: "Good food shouldn't cost the earth. Read about our transition to 100% compostable packaging across all North India outlets.",
    slug: "sustainable-packaging-promise",
    imageQuery: "eco,packaging,food",
  }
];

export default function Blog() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">The Pita Pit Blog</h1>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                News, opinions, and stories from the world of fresh thinking and healthy eating in India.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={(index % 3) * 100}>
                <BlogCard {...post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
