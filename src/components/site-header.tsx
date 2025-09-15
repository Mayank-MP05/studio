
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { ThemeToggle } from "./theme-toggle";

const emojis = ['👋', '👨‍💻', '🚀', '⚡️', '💡'];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.querySelector(link.href));
      let current = "";
      sections.forEach(section => {
        if (section && window.scrollY >= (section as HTMLElement).offsetTop - 100) {
          current = section.id;
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);

    const emojiInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
        setIsAnimating(false);
      }, 500); // half of interval for fade out
    }, 3000);


    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(emojiInterval);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-shadow duration-300 backdrop-blur-xl lg:hidden",
        isScrolled ? "shadow-lg bg-background/80" : ""
      )}
    >
      <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-6">
        <a
          href="/"
          className="flex items-center justify-center text-xl font-bold font-headline text-primary tracking-tighter"
        >
          <div className="size-8 bg-accent text-primary-foreground rounded-md flex items-center justify-center mr-2 font-mono text-lg">
            <span
                className={cn(
                  "transition-all duration-500",
                  isAnimating ? "opacity-0 scale-50" : "opacity-100 scale-100"
                )}
              >
                {emojis[currentEmojiIndex]}
              </span>
          </div>
          <span className="hidden sm:inline">Mayank_MP5</span>
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-accent lg:hidden">
                <Menu className="size-7" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[75vw] bg-background/95 backdrop-blur-xl">
              <nav className="flex flex-col items-center justify-center h-full">
                <ol className="list-[auto] list-inside text-center space-y-8">
                  {navLinks.map((link, i) => (
                    <li key={link.id} className="text-lg text-primary font-mono marker:text-accent marker:mr-2">
                      <SheetClose asChild>
                        <a
                          href={link.href}
                          className="hover:text-accent transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ol>
                <Button asChild size="lg" variant="outline" className="font-mono text-sm border-accent text-accent hover:bg-accent/10 hover:text-accent mt-12">
                  <a href="https://drive.google.com/drive/folders/1auC70rGIj5GXUvxJmCDl8_6NskvOeJlK?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    
