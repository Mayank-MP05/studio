import { socialLinks } from '@/lib/data';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const socialIcons: { [key: string]: React.ReactNode } = {
  GitHub: <Github className="size-5" />,
  LinkedIn: <Linkedin className="size-5" />,
  Twitter: <Twitter className="size-5" />,
};

export function Footer() {
  return (
    <footer className="py-6 bg-background lg:hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:hidden">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="icon"
              asChild
              aria-label={link.name}
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {socialIcons[link.name]}
              </a>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Designed by Brittany Chiang. Reimagined in Firebase Studio.
        </p>
      </div>
    </footer>
  );
}
