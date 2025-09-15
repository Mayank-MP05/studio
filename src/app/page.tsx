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
import { projects, navLinks, socialLinks } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight, Github, Linkedin, Twitter, Code, ExternalLink } from 'lucide-react';

const socialIcons: { [key: string]: React.ReactNode } = {
  GitHub: <Github className="size-5" />,
  LinkedIn: <Linkedin className="size-5" />,
  Twitter: <Twitter className="size-5" />,
  Code: <Code className="size-5" />,
};

export default function Home() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image');
  
  return (
    <div className="flex flex-col min-h-dvh bg-background font-body text-foreground">
      <SiteHeader />
      <div className="flex-1">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-16">
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight font-headline">
                  Brittany Chiang
                </h1>
                <h2 className="mt-3 text-lg font-medium text-primary tracking-tight font-headline">
                  Lead Engineer at Upstatement
                </h2>
                <p className="mt-4 max-w-xs text-muted-foreground">
                  I build pixel-perfect, engaging, and accessible digital experiences.
                </p>
                <nav className="hidden lg:block mt-12">
                  <ul className="w-max">
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <a href={link.href} className="group flex items-center py-3">
                          <span className="mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground"></span>
                          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
                            {link.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center gap-4 mt-8 lg:mt-0">
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
              <section id="about" className="pt-24 lg:pt-0 pb-20 md:pb-24 scroll-mt-24">
                <div className="flex items-center mb-8 lg:hidden">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-primary mr-4">About</h2>
                  <div className="h-px flex-grow bg-border"></div>
                </div>
                <div className="space-y-4 text-muted-foreground text-base">
                  <p>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an <a href="#" className="font-medium text-primary hover:text-accent">advertising agency</a>, a <a href="#" className="font-medium text-primary hover:text-accent">start-up</a>, a <a href="#" className="font-medium text-primary hover:text-accent">huge corporation</a>, and a <a href="#" className="font-medium text-primary hover:text-accent">student-led design studio</a>.</p>
                  <p>My main focus these days is building products and leading projects for our clients at <a href="#" className="font-medium text-primary hover:text-accent">Upstatement</a>. In my free time I've also released an <a href="#" className="font-medium text-primary hover:text-accent">online video course</a> that covers everything you need to know to build a web app with the Spotify API.</p>
                  <p>When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.</p>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="py-20 md:py-24 scroll-mt-24">
                 <div className="flex items-center mb-8 lg:hidden">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-primary mr-4">Projects</h2>
                  <div className="h-px flex-grow bg-border"></div>
                </div>
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="flex flex-col sm:flex-row gap-6 group/card p-6 rounded-lg transition-all duration-300 ease-in-out hover:!bg-background/40 hover:shadow-lg mb-4 bg-transparent border-none shadow-none"
                  >
                    <div className="sm:w-1/4 mt-1">
                      {PlaceHolderImages.find(p => p.id === project.image) && (
                        <Image
                           src={PlaceHolderImages.find(p => p.id === project.image)!.imageUrl}
                           alt={PlaceHolderImages.find(p => p.id === project.image)!.description}
                           width={200}
                           height={112}
                           className="rounded border-2 border-border/20 transition group-hover/card:border-accent w-full sm:w-auto"
                           data-ai-hint={PlaceHolderImages.find(p => p.id === project.image)!.imageHint}
                        />
                      )}
                    </div>
                    <div className="sm:w-3/4">
                      <CardHeader className="p-0">
                        <CardTitle className="font-medium text-lg text-primary group-hover/card:text-accent">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            {project.title} <ArrowUpRight className="inline-block ml-1 size-4 transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5" />
                          </a>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 mt-2">
                        <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="p-0 mt-4 flex items-center flex-wrap gap-2">
                          <a href={project.githubUrl} className="text-muted-foreground hover:text-accent mr-4">
                            <Github className="size-5" />
                          </a>
                          <a href={project.liveUrl} className="text-muted-foreground hover:text-accent mr-4">
                             <ExternalLink className="size-5" />
                          </a>
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent font-medium text-sm">
                              {tech}
                            </Badge>
                          ))}
                      </CardFooter>
                    </div>
                  </Card>
                ))}
                <div className="mt-12">
                  <a href="#" className="font-medium text-primary hover:text-accent group">
                    View Full Project Archive <ArrowUpRight className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ml-1" />
                  </a>
                </div>
              </section>
                {/* Contact Section */}
              <section id="contact" className="py-20 md:py-24 text-center scroll-mt-24">
                <p className="font-mono text-sm text-accent">04. What’s Next?</p>
                <h2 className="text-5xl font-bold text-primary mt-4">Get In Touch</h2>
                <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                    Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" variant="outline" className="font-mono text-sm border-accent text-accent hover:bg-accent/10 hover:text-accent">
                        <a href="mailto:brittany.chiang@gmail.com">Say Hello</a>
                    </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
