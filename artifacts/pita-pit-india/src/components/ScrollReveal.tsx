import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right";
  delay?: number;
}

export function ScrollReveal({
  children,
  className,
  animation = "slide-up",
  delay = 0,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade":
        return "opacity-0 transition-opacity duration-700 ease-out";
      case "slide-up":
        return "opacity-0 translate-y-8 transition-all duration-700 ease-out";
      case "slide-left":
        return "opacity-0 translate-x-8 transition-all duration-700 ease-out";
      case "slide-right":
        return "opacity-0 -translate-x-8 transition-all duration-700 ease-out";
      default:
        return "";
    }
  };

  const getVisibleClass = () => {
    switch (animation) {
      case "fade":
        return "opacity-100";
      case "slide-up":
      case "slide-left":
      case "slide-right":
        return "opacity-100 translate-y-0 translate-x-0";
      default:
        return "";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        getAnimationClass(),
        isVisible ? getVisibleClass() : "",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
