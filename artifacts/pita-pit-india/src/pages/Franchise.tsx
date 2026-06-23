import React from "react";
import { BrandPillars } from "@/components/BrandPillars";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";

const franchiseSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  city: z.string().min(2, "City of interest is required"),
  message: z.string().optional(),
});

export default function Franchise() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof franchiseSchema>>({
    resolver: zodResolver(franchiseSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof franchiseSchema>) => {
    // No actual backend - just show success
    console.log("Form data:", data);
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your interest. Our team will contact you shortly.",
      duration: 5000,
    });
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/restaurant-interior/1600/900')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent font-bold tracking-wider uppercase mb-4 block">Franchise Opportunity</span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Be Part of Something That's Good for Business and Good for People.
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-10">
                Join a proven model with 450+ stores globally, capitalizing on the growing demand for healthy, fast-casual dining in India.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg"
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Enquire Now
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <ScrollReveal>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop" alt="Pita Pit Leadership" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <ScrollReveal>
                <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Who We Are</h2>
                <div className="w-16 h-1 bg-accent mb-6 rounded-full"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pita Pit India (North & East) is led by master franchisee Sameer Lamba — a seasoned entrepreneur who brings operational depth, regional network, and genuine passion for the brand to every location he opens.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Under Sameer's leadership, the franchise has established strong footholds in Delhi NCR and Chandigarh, with Ambala and Karnal on the horizon.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <BrandPillars />

      {/* Ideal Traits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">We're Looking for the Right People</h2>
              <p className="text-lg text-muted-foreground">It takes a specific kind of drive to run a successful Pita Pit. Here's what we look for in our partners:</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Builder mentality", desc: "You want to create something, not just manage it." },
              { title: "Hard-working", desc: "You're not afraid to put in the hours, especially at the start." },
              { title: "People-oriented", desc: "You understand that the business lives or dies by the team you build." },
              { title: "Long-term thinker", desc: "You're playing the 5-year game, not the 3-month one." },
              { title: "Love of food", desc: "You genuinely care about what you're serving." },
              { title: "Serious about business, lighthearted about life", desc: "Because culture matters." }
            ].map((trait, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="bg-card p-8 rounded-2xl border border-border shadow-sm h-full hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-serif text-xl font-bold mb-2">{trait.title}</h3>
                  <p className="text-muted-foreground">{trait.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="enquiry-form" className="py-24 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ScrollReveal>
            <div className="bg-card p-8 md:p-12 rounded-3xl shadow-lg border border-border">
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Start Your Journey</h2>
                <p className="text-muted-foreground">Fill out the form below to receive our franchise information pack.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City of Interest</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Ambala" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us a bit about your background..." 
                            className="bg-background min-h-[120px] resize-y" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 text-lg">
                    Submit Enquiry
                  </Button>
                </form>
              </Form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
