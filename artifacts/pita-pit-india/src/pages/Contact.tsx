import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    // No backend - just toast
    console.log("Contact form data:", data);
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! We'll get back to you soon.",
      duration: 5000,
    });
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Contact Us</h1>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 max-w-6xl mx-auto">
            
            {/* Left Col - Locations */}
            <div className="w-full lg:w-5/12 space-y-8">
              <ScrollReveal delay={100}>
                <h2 className="font-serif text-2xl font-bold mb-6">Our Locations</h2>
                
                <div className="space-y-6">
                  {/* Delhi NCR */}
                  <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                    <h3 className="font-bold text-lg mb-4 text-primary">Delhi NCR</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 mr-3 shrink-0 text-accent" />
                        <span>[CLIENT: Add outlet address — Delhi NCR]</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 mr-3 text-accent" />
                        <span>[CLIENT: Add outlet phone number — Delhi NCR]</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 mr-3 shrink-0 text-accent" />
                        <span>[CLIENT: Add opening hours — Delhi NCR]</span>
                      </div>
                    </div>
                  </div>

                  {/* Chandigarh */}
                  <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                    <h3 className="font-bold text-lg mb-4 text-primary">Chandigarh</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 mr-3 shrink-0 text-accent" />
                        <span>[CLIENT: Add outlet address — Chandigarh]</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 mr-3 text-accent" />
                        <span>[CLIENT: Add outlet phone number — Chandigarh]</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 mr-3 shrink-0 text-accent" />
                        <span>[CLIENT: Add opening hours — Chandigarh]</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/50 p-6 rounded-2xl border border-border">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-accent" />
                      <a href="mailto:info@pitapitindia.com" className="font-medium text-foreground hover:text-accent transition-colors">
                        info@pitapitindia.com
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Col - Form & Map */}
            <div className="w-full lg:w-7/12 space-y-12">
              <ScrollReveal delay={200}>
                <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border">
                  <h2 className="font-serif text-3xl font-bold mb-6">Send a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" className="bg-background" {...field} />
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
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your@email.com" className="bg-background" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" className="bg-background" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="How can we help you?" 
                                className="bg-background min-h-[150px] resize-y" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 text-lg">
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="w-full h-[300px] bg-secondary/80 rounded-3xl border border-border flex flex-col items-center justify-center text-center p-6 shadow-inner">
                  <MapPin className="w-10 h-10 text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground font-medium">Interactive map coming soon</p>
                  <p className="text-sm text-muted-foreground/70 mt-2">[CLIENT: embed Google Maps here]</p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
