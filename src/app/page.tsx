import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/site-header';
import { Footer } from '@/components/footer';
import { projects, skills, socialLinks, navLinks } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import {
  FigmaIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from '@/components/icons';

const skillIcons: { [key: string]: React.ReactNode } = {
  React: <ReactIcon className="size-8" />,
  'Next.js': <NextjsIcon className="size-8" />,
  TypeScript: <TypescriptIcon className="size-8" />,
  'Node.js': <NodejsIcon className="size-8" />,
  'Tailwind CSS': <TailwindIcon className="size-8" />,
  Figma: <FigmaIcon className="size-8" />,
};

const socialIcons: { [key: string]: React.ReactNode } = {
  GitHub: <Github className="size-6" />,
  LinkedIn: <Linkedin className="size-6" />,
  Twitter: <Twitter className="size-6" />,
};

export default function Home() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image');
  
  return (
    <div className="flex flex-col min-h-dvh bg-background font-body dark:text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 min-h-screen">
            <div className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:h-screen lg:py-24">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-primary dark:text-primary-foreground tracking-tight">
                  Brittany Chiang
                </h1>
                <h2 className="mt-3 text-lg font-medium text-primary dark:text-primary-foreground">
                  Front End Engineer
                </h2>
                <p className="mt-4 max-w-xs text-muted-foreground">
                  I build accessible, pixel-perfect digital experiences for the web.
                </p>
              </div>
              <nav className="hidden lg:block">
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a href={link.href} className="group flex items-center py-3">
                        <span className="mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground"></span>
                        <span className="font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    aria-label={link.name}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {socialIcons[link.name]}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div className="lg:py-24">
              {/* About Section */}
              <section id="about" className="py-20 md:py-16 scroll-mt-24">
                <div className="space-y-6 text-foreground/80">
                  <p>
                    I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
                  </p>
                  <p>
                    Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
                  </p>
                  <p>
                    In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.
                  </p>
                  <p>In my spare time, I'm usually climbing, playing tennis, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.</p>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="py-20 md:py-16">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="flex flex-col sm:flex-row gap-6 group overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-2xl mb-12 bg-transparent border-none shadow-none"
                  >
                    <div className="sm:w-1/3">
                      {PlaceHolderImages.find(p => p.id === project.image) && (
                        <Image
                           src={PlaceHolderImages.find(p => p.id === project.image)!.imageUrl}
                           alt={PlaceHolderImages.find(p => p.id === project.image)!.description}
                           width={200}
                           height={112}
                           className="rounded border-2 border-border group-hover:border-accent transition-colors"
                           data-ai-hint={PlaceHolderImages.find(p => p.id === project.image)!.imageHint}
                        />
                      )}
                    </div>
                    <div className="sm:w-2/3">
                      <CardHeader className="p-0">
                        <CardTitle className="font-bold text-lg text-primary dark:text-primary-foreground group-hover:text-accent">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            {project.title} <ArrowUpRight className="inline-block ml-2 size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                          </a>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 mt-2">
                        <CardDescription>{project.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="p-0 mt-4 flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20">
                              {tech}
                            </Badge>
                          ))}
                      </CardFooter>
                    </div>
                  </Card>
                ))}
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}