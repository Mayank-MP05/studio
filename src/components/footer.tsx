
import { socialLinks } from '@/lib/data';
import { Github, Linkedin, Twitter, Code, FileText, Mail, Phone, Book, FileCode } from 'lucide-react';
import { Button } from './ui/button';

const socialIcons: { [key: string]: React.ReactNode } = {
  GitHub: <Github className="size-5" />,
  LinkedIn: <Linkedin className="size-5" />,
  Twitter: <Twitter className="size-5" />,
  Code: <Code className="size-5" />,
  Resume: <FileText className="size-5" />,
  Mail: <Mail className="size-5" />,
  Phone: <Phone className="size-5" />,
  Book: <Book className="size-5" />,
  FileCode: <FileCode className="size-5" />,
};

export function Footer() {
  return (
    <footer className="bg-background lg:hidden pb-16">
      <ul className="flex items-center justify-center gap-4" aria-label="Social media">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="block p-2 text-muted-foreground hover:text-foreground" aria-label={link.name}>
              {socialIcons[link.icon as keyof typeof socialIcons]}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
