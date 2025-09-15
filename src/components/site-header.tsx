"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";


export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-shadow duration-300 lg:hidden",
        isScrolled ? "shadow-lg bg-background/80 backdrop-blur-lg" : ""
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center justify-center text-xl font-bold font-headline text-primary tracking-tighter"
        >
          <div className="size-8 bg-accent text-primary-foreground rounded-md flex items-center justify-center mr-2 font-mono text-lg">
            B
          </div>
        </a>
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-accent">
                <Menu className="size-7" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[75vw] bg-background">
              <nav className="flex flex-col items-center justify-center h-full">
                <ol className="list-[auto] list-inside text-center space-y-8">
                  {navLinks.map((link, i) => (
                    <li key={link.id} className="text-lg text-primary font-mono marker:text-accent marker:mr-2">
                      <SheetClose asChild>
                        <a
                          href={link.href}
                          className="hover:text-accent transition-colors"
                        >
                          {link.name}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ol>
                <Button asChild size="lg" variant="outline" className="font-mono text-sm border-accent text-accent hover:bg-accent/10 hover:text-accent mt-12">
                  <a href="/resume.pdf" target="_blank">Resume</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
