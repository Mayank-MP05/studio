
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
import { ArrowUpRight, Github, Linkedin, Twitter, Code, ExternalLink, FileText, Mail, Phone, Book, FileCode, Star, Trophy, Award, PenTool } from 'lucide-react';

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

export default function Home() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image');
  
  return (
    <div className="flex flex-col min-h-dvh bg-background font-body text-foreground">
      <SiteHeader />
      <div className="flex-1">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <main className="lg:flex">
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight font-headline">
                  Mayank Pachpande
                </h1>
                <h2 className="mt-3 text-lg font-medium text-primary tracking-tight font-headline">
                  Software Development Engineer
                </h2>
                <div className="mt-4 max-w-xs text-muted-foreground space-y-2">
                    <p><a href="/projects" className="font-medium text-primary hover:text-accent">Projects 🤩</a></p>
                    <p><a href="/explore" className="font-medium text-primary hover:text-accent">Explore 🧐</a></p>
                </div>
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
              <ul className="flex items-center gap-4 mt-8 lg:mt-0" aria-label="Social media">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground" aria-label={link.name}>
                      {socialIcons[link.icon as keyof typeof socialIcons]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-24 lg:w-1/2 lg:py-24">
              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-primary lg:sr-only">About</h2>
                </div>
                <div>
                    <ul className="list-none space-y-4 text-muted-foreground">
                        <li>⇒ Experienced Javascript❤️ SDE Developer, With experience of working in a FinTech startup</li>
                        <li>⇒ Interested in Full Stack Developement and Startups</li>
                        <li>⇒ Worked mostly on Web Dev and Machine Learning Projects</li>
                        <li>⇒ Hobbies - Coding, Video Editing, Memes</li>
                    </ul>
                </div>
              </section>

              <section id="highlights" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Highlights">
                 <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-primary lg:sr-only">Highlights</h2>
                </div>
                <ol className="group/list space-y-12">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2" aria-label="Toycathon 2021">🏆 Toycathon 2021</header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-primary">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-accent group/link text-base" href="https://github.com/Mayank-MP05/molequilizer" target="_blank" rel="noreferrer noopener" aria-label="Chemical Reaction Balancer Project (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block"></span>
                              <span>Chemical Reaction Balancer Project <Star className="inline-block h-4 w-4" /></span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-muted-foreground">Our project was selected in Toycathon 2021.</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2" aria-label="Competitive Coding">👨‍💻 Competitive Coding</header>
                      <div className="z-10 sm:col-span-6">
                         <h3 className="font-medium leading-snug text-primary">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-accent group/link text-base" href="https://www.codechef.com/rankings/START2C?order=asc&search=MAYANK&sortBy=rank" target="_blank" rel="noreferrer noopener" aria-label="Codechef Starters 2021 (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block"></span>
                              <span>Codechef Starters 2021 - Rank 87/6338 <Trophy className="inline-block h-4 w-4" /></span>
                            </a>
                          </div>
                          <div>
                             <a className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-accent group/link text-base" href="https://www.codechef.com/rankings/ICM2021B?order=asc&search=mayank&sortBy=rank" target="_blank" rel="noreferrer noopener" aria-label="International Coding Marathon (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block"></span>
                              <span>International Coding Marathon - Rank 124 <Trophy className="inline-block h-4 w-4" /></span>
                            </a>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                     <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2" aria-label="Machine Learning">🤖 Machine Learning</header>
                      <div className="z-10 sm:col-span-6">
                         <h3 className="font-medium leading-snug text-primary">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-accent group/link text-base" href="https://www.hackerearth.com/challenges/competitive/hackerearth-machine-learning-challenge-predict-customer-churn/leaderboard/predict-the-churn-risk-rate-11-fb7a760d/page/4/" target="_blank" rel="noreferrer noopener" aria-label="How NOT to lose a customer (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block"></span>
                              <span>How NOT to lose a customer - Rank - 172 / 12242 <Award className="inline-block h-4 w-4" /></span>
                            </a>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </li>
                   <li className="mb-12">
                     <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2" aria-label="Published Article">📜 Published Article</header>
                      <div className="z-10 sm:col-span-6">
                         <h3 className="font-medium leading-snug text-primary">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-accent group/link text-base" href="https://javascript.plainenglish.io/how-to-build-a-real-time-multiuser-drawing-app-using-node-and-socket-io-bdebc5df916" target="_blank" rel="noreferrer noopener" aria-label="JS in Plain English (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block"></span>
                              <span>Tutorial article published in "JS in Plain English" <PenTool className="inline-block h-4 w-4" /></span>
                            </a>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Projects Section */}
              <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected Projects">
                 <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-primary lg:sr-only">Projects</h2>
                </div>
                <div>
                  <ul className="group/list">
                  {projects.map((project, index) => (
                    <li key={index} className="mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-accent group/link text-base">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block"></span>
                                <span>{project.title} <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" /></span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-muted-foreground">{project.description}</p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {project.tech.map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <Badge variant="secondary" className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">
                                  {tech}
                                </Badge>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {PlaceHolderImages.find(p => p.id === project.image) && (
                          <Image
                             src={PlaceHolderImages.find(p => p.id === project.image)!.imageUrl}
                             alt={PlaceHolderImages.find(p => p.id === project.image)!.description}
                             width={200}
                             height={48}
                             className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                             data-ai-hint={PlaceHolderImages.find(p => p.id === project.image)!.imageHint}
                          />
                        )}
                      </div>
                    </li>
                  ))}
                  </ul>
                  <div className="mt-12">
                    <a href="#" className="inline-flex items-center font-medium leading-tight text-primary font-semibold text-primary group">
                      <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">View Full Project </span>
                        <span className="whitespace-nowrap">
                          <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">Archive</span>
                          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </section>
                {/* Contact Section */}
              <section id="contact" className="py-20 md:py-24 text-center scroll-mt-24">
                <p className="font-mono text-sm text-accent">What’s Next?</p>
                <h2 className="text-5xl font-bold text-primary mt-4">Get In Touch</h2>
                <div className="mt-8 flex justify-center space-x-4">
                  <Button asChild size="lg" variant="outline" className="font-mono text-sm border-accent text-accent hover:bg-accent/10 hover:text-accent">
                      <a href="mailto:mayank5pande@gmail.com">Email</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="font-mono text-sm border-accent text-accent hover:bg-accent/10 hover:text-accent">
                      <a href="https://www.linkedin.com/in/mayank-mp5/">LinkedIn</a>
                  </Button>
                   <Button asChild size="lg" variant="outline" className="font-mono text-sm border-accent text-accent hover:bg-accent/10 hover:text-accent">
                      <a href="https://github.com/Mayank-MP05">Github</a>
                  </Button>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
