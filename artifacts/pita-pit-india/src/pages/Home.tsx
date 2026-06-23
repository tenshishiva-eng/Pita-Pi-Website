import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MenuCard } from "@/components/MenuCard";
import { BrandPillars } from "@/components/BrandPillars";
import { BlogCard } from "@/components/BlogCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { getImageOverride } from "@/lib/imageStore";

const categories = [
  { name: "Pita Wraps", key: "cat-pita-wraps", imageQuery: "pita,wrap", defaultSrc: "/pita_wraps.jpg" },
  { name: "Salads", key: "cat-salads", imageQuery: "salad,fresh" },
  { name: "Rice Bowls", key: "cat-rice-bowls", imageQuery: "rice,bowl,healthy" },
  { name: "Sides", key: "cat-sides", imageQuery: "hummus,side,food" },
  { name: "Beverages", key: "cat-beverages", imageQuery: "milkshake,smoothie" },
  { name: "Desserts", key: "cat-desserts", imageQuery: "dessert,sweet" },
];

const bestsellers = [
  { name: "Chicken Club Pita Wrap", isVeg: false, description: "Grilled chicken, crispy bacon, fresh lettuce, tomato & club sauce", price: "₹349", imageQuery: "chicken,club,wrap" },
  { name: "Falafel Pita Wrap", isVeg: true, description: "Golden falafel, hummus, cucumber, red onion & tahini", price: "₹299", imageQuery: "falafel,pita" },
  { name: "Roasted Chicken Breast Pita Wrap", isVeg: false, description: "Herb-roasted chicken, roasted peppers, spinach & garlic aioli", price: "₹329", imageQuery: "roasted,chicken,wrap" },
  { name: "Chicken Crave Salad", isVeg: false, description: "Grilled chicken on a crisp mix of greens, corn, avocado & honey-mustard", price: "₹289", imageQuery: "chicken,salad" },
  { name: "Chicken Tikka Salad", isVeg: false, description: "Tandoor-kissed chicken tikka, kachumber salad & mint chutney drizzle", price: "₹299", imageQuery: "chicken,tikka,salad" },
  { name: "Veg Greek Salad", isVeg: true, description: "Crisp romaine, olives, cucumber, feta & classic Greek vinaigrette", price: "₹249", imageQuery: "greek,salad" },
  { name: "Classic Mango Milkshake", isVeg: true, description: "Thick, chilled Alphonso mango shake — pure summer in a cup", price: "₹179", imageQuery: "mango,milkshake" },
  { name: "Dark Chocolate Protein Shake", isVeg: true, description: "Belgian dark chocolate blended with whey protein & almond milk", price: "₹219", imageQuery: "chocolate,milkshake" },
];

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
];

const testimonials = [
  { name: "Priya S.", location: "Delhi NCR", quote: "The Falafel Pita is genuinely the best wrap I've had in Delhi. Fresh ingredients, not the kind of 'healthy' that tastes like cardboard." },
  { name: "Arjun M.", location: "Chandigarh", quote: "Finally a fast-food spot where I don't feel guilty after eating. The Chicken Tikka Salad is my go-to every week." },
  { name: "Naina R.", location: "Gurugram", quote: "Loved the customisation options — I built my own wrap exactly how I wanted it. The staff were friendly and the food came out fast." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={getImageOverride("hero-background") ?? "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1600&h=900&fit=crop"} 
            alt="Fresh Pita Pit Wrap" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <ScrollReveal animation="slide-up">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]">
                Healthy Habits,<br/>Happy Wraps
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="slide-up" delay={200}>
              <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium">
                Pitapit: Healthy on Your Terms
              </p>
            </ScrollReveal>
            <ScrollReveal animation="slide-up" delay={400} className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 rounded-full">
                  View Menu
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black text-lg px-8 h-14 rounded-full bg-transparent">
                  Find a Location
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Category Strip */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-6 gap-4 md:gap-6 hide-scrollbar snap-x">
            {categories.map((category, index) => (
              <Link key={index} href="/menu" className="snap-start shrink-0 w-64 md:w-auto group block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-2">
                  <img 
                    src={getImageOverride(category.key) ?? category.defaultSrc ?? `https://picsum.photos/seed/${category.imageQuery.replace(/,/g, '-')}/400/300`} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <h3 className="font-serif font-semibold text-lg text-center text-foreground group-hover:text-primary transition-colors">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Teaser */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">Crafted with Conviction</h2>
            <p className="text-lg md:text-2xl leading-relaxed text-primary-foreground/90 mb-10">
              Pita Pit was born in 1995 in Kingston, Ontario, when Nelson Lang rolled the very first pita with one simple conviction: fast food didn't have to mean bad food. Today, 450+ stores across four continents carry that same promise. In India, we're bringing it home — one fresh wrap at a time.
            </p>
            <Link href="/about">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full px-8 h-12">
                Read Our Story →
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Bestsellers</h2>
                <div className="w-16 h-1 bg-accent rounded-full"></div>
              </div>
              <Link href="/menu" className="hidden md:inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                View Full Menu →
              </Link>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bestsellers.map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <MenuCard {...item} />
              </ScrollReveal>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link href="/menu">
              <Button className="rounded-full bg-primary hover:bg-primary/90">View Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <BrandPillars />

      {/* Blog Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Latest from Pita Pit</h2>
                <div className="w-16 h-1 bg-accent rounded-full"></div>
              </div>
              <Link href="/blog" className="hidden md:inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                View All Articles →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <BlogCard {...post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Customers Say</h2>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"></div>
              {/* [CLIENT: Replace with real Google Reviews before launch] */}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 100} className="h-full">
                <TestimonialCard {...testimonial} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
