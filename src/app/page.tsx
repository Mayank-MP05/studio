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
import { projects, skills, socialLinks } from '@/lib/data';
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
    <div className="flex flex-col min-h-dvh bg-background font-body">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <section
            id="home"
            className="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-12"
          >
            <div className="max-w-3xl">
              <p className="text-accent font-medium mb-4 text-lg">Hi, my name is</p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline font-bold text-primary dark:text-primary-foreground tracking-tighter">
                Brittany Chiang.
              </h1>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-muted-foreground mt-2">
                I build things for the web.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-foreground/80">
                I’m a software engineer specializing in building (and occasionally
                designing) exceptional digital experiences. Currently, I’m focused on
                building accessible, human-centered products.
              </p>
              <div className="mt-8 flex items-center gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
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
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 md:py-32">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 flex items-center gap-4">
              <span className="text-accent">01.</span> About Me
            </h2>
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3 space-y-6 text-lg text-foreground/80">
                <p>
                  Hello! I'm Brittany, a software engineer with a passion for creating beautiful and functional web applications. My journey into web development started back in college when I decided to build a custom website for a student organization — turns out hacking together a custom theme taught me a lot about HTML & CSS!
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                </p>
                <p>Here are a few technologies I've been working with recently:</p>
                <ul className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-2">
                       <span className="text-accent">▹</span>{skill.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2 relative group">
                {aboutImage && (
                  <>
                  <div className="absolute inset-0 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors z-0 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg relative z-10 group-hover:shadow-2xl transition-shadow"
                    data-ai-hint={aboutImage.imageHint}
                  />
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 md:py-32">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 flex items-center gap-4">
             <span className="text-accent">02.</span> Some Things I’ve Built
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => {
                const projectImage = PlaceHolderImages.find(
                  (img) => img.id === project.image
                );
                return (
                  <Card
                    key={index}
                    className="flex flex-col group overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <CardHeader>
                      {projectImage && (
                        <Image
                          src={projectImage.imageUrl}
                          alt={projectImage.description}
                          width={600}
                          height={400}
                          className="rounded-t-lg"
                          data-ai-hint={projectImage.imageHint}
                        />
                      )}
                      <CardTitle className="mt-4 font-headline text-2xl text-primary dark:text-primary-foreground">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                           <Github className="size-6 text-muted-foreground hover:text-accent transition-colors" />
                         </a>
                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live project">
                           <ArrowUpRight className="size-6 text-muted-foreground hover:text-accent transition-colors" />
                         </a>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 md:py-32 text-center">
             <h2 className="text-2xl md:text-3xl font-headline font-bold mb-4 flex items-center gap-4 justify-center">
               <span className="text-accent">03.</span> What’s Next?
            </h2>
            <h3 className="text-4xl md:text-6xl font-headline font-bold text-primary dark:text-primary-foreground mb-4">
              Get In Touch
            </h3>
            <p className="max-w-xl mx-auto text-lg text-foreground/80 mb-8">
              I’m currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you!
            </p>
            <Button size="lg" asChild className="font-bold text-lg">
              <a href="mailto:brittany.chiang@example.com">Say Hello</a>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
