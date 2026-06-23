import React from "react";
import { useParams, Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronLeft } from "lucide-react";

// Mock data store for blog posts
const blogPostData: Record<string, any> = {
  "pita-pit-ambala-karnal-expansion": {
    title: "Pita Pit Expands to Ambala & Karnal: What's Next for North India",
    date: "January 15, 2025",
    category: "Expansion",
    author: "Pita Pit India Team",
    imageQuery: "restaurant,expansion,food",
    content: [
      "Master franchisee Sameer Lamba confirms the brand's FY2025-26 push into Haryana, with new outlets in Ambala and Karnal set to open later this year. This marks a significant milestone in our strategy to bring healthy, customizable fast-casual dining to tier-2 cities that are showing massive shifts in consumer eating habits.",
      "The new locations will feature our updated 'Fresh Modern' interior design, creating bright, welcoming spaces that reflect the freshness of our food. Both Ambala and Karnal represent strategic hubs on the busy highway corridor, making them perfect locations for our brand.",
      "\"We're not just opening restaurants; we're answering a clear demand from consumers who are tired of choosing between 'fast' and 'healthy',\" says Lamba. \"These new markets are incredibly exciting for us, and we're committed to delivering the exact same quality and experience that our Delhi NCR and Chandigarh customers have come to expect.\"",
      "Recruitment for local teams has already begun, with a focus on hiring and training staff from the local communities to maintain our commitment to local economic development alongside brand expansion."
    ]
  },
  "sameer-lamba-master-franchisee": {
    title: "Sameer Lamba Named Master Franchisee for North & East India",
    date: "October 12, 2024",
    category: "Brand News",
    author: "Pita Pit India Team",
    imageQuery: "business,food,franchise",
    content: [
      "A seasoned entrepreneur and food-industry veteran, Sameer Lamba brings operational depth and regional know-how to the Pita Pit India story as he takes on the role of Master Franchisee for the North and East India territories.",
      "Lamba brings over a decade of experience in scaling retail and F&B concepts across the subcontinent. His vision aligns perfectly with Pita Pit's global ethos: bringing fresh, high-quality, customizable food to urban populations looking for better daily dining options.",
      "\"The potential for Pita Pit in this region is massive,\" Lamba noted during the signing ceremony. \"We're seeing a fundamental shift in how Indians eat. They want bold flavors, yes, but they also want transparency, freshness, and the ability to control exactly what goes into their meal. Pita Pit delivers on all fronts.\"",
      "The master franchise agreement outlines an aggressive yet sustainable growth plan over the next five years, starting with the consolidation of the Delhi NCR market and expanding rapidly into Punjab, Haryana, and eventually the eastern corridor."
    ]
  },
  "healthy-fast-food-india": {
    title: "Why Healthy Fast Food Is Finally Having Its Moment in India",
    date: "August 5, 2024",
    category: "Opinion",
    author: "Pita Pit India Team",
    imageQuery: "healthy,food,india",
    content: [
      "As urban India's dining habits shift, the demand for nutritious, fast, and affordable meals has never been stronger. For decades, 'fast food' in India meant deep-fried snacks or heavy curries served quickly. Today, the definition is being rewritten by a more health-conscious, traveled, and discerning consumer base.",
      "The change isn't just about calories; it's about quality of ingredients, preparation methods, and customization. Consumers are no longer satisfied with generic, mass-produced meals. They want to know where their food comes from, how it's made, and they want the power to adapt it to their specific dietary needs—whether that's high-protein, keto, vegan, or just simply balanced.",
      "This is where concepts like Pita Pit are thriving. By turning the preparation process into a transparent, collaborative experience between the customer and the 'pita roller', we're removing the mystery from fast food. You see the fresh vegetables, the grilled proteins, and the variety of sauces, and you build exactly what your body needs that day.",
      "The 'healthy eating' movement in India has moved past the fad stage and is now a permanent lifestyle shift. We are proud to be at the forefront, proving every day that fast, convenient food can also make you feel great."
    ]
  }
};

// Fallback content for unknown slugs
const fallbackPost = {
  title: "Article Not Found",
  date: "",
  category: "Unknown",
  author: "",
  imageQuery: "empty,plate",
  content: ["The article you are looking for does not exist or has been moved."]
};

export default function BlogPost() {
  const { slug } = useParams();
  
  // Safe cast and lookup
  const post = slug && blogPostData[slug] ? blogPostData[slug] : fallbackPost;

  return (
    <article className="flex flex-col min-h-[100dvh] bg-background">
      {/* Hero Image */}
      <div className="w-full h-[40vh] min-h-[300px] relative">
        <img 
          src={`https://picsum.photos/seed/${post.imageQuery.replace(/,/g, '-')}/1600/600`} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative -mt-32 z-10 pb-24">
        <div className="max-w-3xl mx-auto bg-card rounded-3xl shadow-xl border border-border p-8 md:p-12">
          
          <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary font-medium mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Blog
          </Link>

          <ScrollReveal>
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <span className="text-muted-foreground">{post.date}</span>
              </div>
              
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              {post.author && (
                <div className="flex items-center text-muted-foreground font-medium">
                  By {post.author}
                </div>
              )}
            </div>

            <div className="w-full h-px bg-border mb-8"></div>

            <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-accent hover:prose-a:text-accent/80 max-w-none">
              {post.content.map((paragraph: string, index: number) => (
                <p key={index} className="text-foreground/80 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </article>
  );
}
