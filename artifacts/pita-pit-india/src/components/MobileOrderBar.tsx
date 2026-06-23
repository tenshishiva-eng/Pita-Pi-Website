import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function MobileOrderBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background border-t z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <Link href="/contact" className="block w-full">
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold text-lg shadow-sm h-14">
          Find Outlet to Order
        </Button>
      </Link>
    </div>
  );
}
