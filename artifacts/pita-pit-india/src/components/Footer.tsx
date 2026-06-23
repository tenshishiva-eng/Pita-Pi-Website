import React from "react";
import { Link } from "wouter";
import { Instagram, Facebook, Twitter, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold tracking-tight">PITA PIT</h3>
            <p className="text-primary-foreground/80 max-w-xs">
              Fresh thinking. Healthy eating. Bringing the world's best wraps to North & East India.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                {/* [CLIENT: add real URL] */}
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                {/* [CLIENT: add real URL] */}
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                {/* [CLIENT: add real URL] */}
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Locations</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 shrink-0 text-accent" />
                <span>Delhi NCR</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 shrink-0 text-accent" />
                <span>Chandigarh</span>
              </li>
              <li className="flex items-start mt-4">
                <span className="inline-block bg-accent/20 text-accent px-2 py-1 rounded text-xs font-medium mr-2">Coming Soon</span>
              </li>
              <li className="ml-7 opacity-70">Ambala</li>
              <li className="ml-7 opacity-70">Karnal</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/franchise" className="hover:text-white transition-colors">Franchise</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <a href="mailto:info@pitapitindia.com" className="hover:text-white transition-colors">info@pitapitindia.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="inline-flex items-center font-medium text-accent hover:text-accent/80 transition-colors">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Pita Pit India (North & East). All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
