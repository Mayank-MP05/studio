"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/80 backdrop-blur-lg"
          : "bg-background/0"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center justify-center text-xl font-bold font-headline text-primary dark:text-primary-foreground tracking-tighter"
        >
          <div className="size-8 bg-primary dark:bg-primary-foreground text-primary-foreground dark:text-primary rounded-md flex items-center justify-center mr-2">
            B
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2"
            >
              <span className="text-accent">{`0${link.id}.`}</span>
              {link.name}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
