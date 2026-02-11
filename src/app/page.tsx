

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
import { ThemeToggle } from '@/components/theme-toggle';
import { Spotlight } from '@/components/spotlight';

const socialIcons: { [key: string]: React.ReactNode } = {
  Github: <Github className="size-5" />,
  Linkedin: <Linkedin className="size-5" />,
  Twitter: <Twitter className="size-5" />,
  Code: <Code className="size-5" />,
  FileText: <FileText className="size-5" />,
  Mail: <Mail className="size-5" />,
  Phone: <Phone className="size-5" />,
  Book: <Book className="size-5" />,
  FileCode: <FileCode className="size-5" />,
};

export default function Home() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image');
  
  return (
    <Spotlight>
    <div className="flex flex-col min-h-dvh bg-background font-body text-foreground">
      <SiteHeader />
      <div className="hidden lg:block fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <div className="flex-1">
        <div className="container mx-auto px-6 sm:px-12 md:px-24">
          <main className="lg:flex">
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight font-headline">
                  Mayank Pachpande
                </h1>
                <h2 className="mt-3 text-lg font-medium text-primary tracking-tight font-headline">
                  Software Development Engineer 2
                </h2>
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
                    <li>
                      Frontend-focused Full-Stack Engineer with 3+ years of experience building scalable, high-performance web applications serving 50k+ daily users. 
                      I specialize in React, TypeScript, and modern frontend architecture — designing reusable component systems, optimizing rendering performance, 
                      and translating complex product workflows into intuitive, accessible user experiences. 
                      Strong foundation in backend systems (Node.js, Java, AWS) enabling end-to-end ownership of production systems.
                    </li>
                    <li>
                      Interested in financial markets, startups, product thinking, and building systems that blend performance with great user experience.
                    </li>
                  </ul>
                </div>
              </section>

              <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-primary lg:sr-only">Experience</h2>
                </div>
                <div>
                  <ol className="group/list">
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2" aria-label="2025 to Present">Jul 2025 — Present</header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-primary">
                            <div>
                                <span className="inline-block font-medium text-primary">Software Engineer 2 · Wint Wealth</span>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-muted-foreground">Bengaluru, Karnataka, India</p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2" aria-label="2022 to 2025">Apr 2024 — Jul 2025</header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-primary">
                            <div>
                                <span className="inline-block font-medium text-primary">Software Engineer 2 · Fibe.India (Formerly EarlySalary)</span>
                            </div>
                          </h3>
                          <div className="mt-2 text-sm leading-normal text-muted-foreground">
                            <ul className="list-disc space-y-2 pl-4">
                                <li>Spearheaded end-to-end development of a loan platform (LAMF), building scalable microservices using Java, Spring Boot, and AWS, while collaborating across teams to deliver business-critical features.</li>
                                <li>Led the design of a document generation engine using dynamic templates to streamline workflows and reduce dependency on manual interventions.</li>
                                <li>Built secure, modular frontend interfaces for banking journeys using React and Redux, delivering smooth user experiences and improving feature reliability.</li>
                                <li>Owned core services from design to production with a strong focus on system design, observability, and deployment automation.</li>
                                <li>Contributed to engineering culture through code reviews, architecture discussions, and mentoring junior developers in scalable backend practices.</li>
                            </ul>
                          </div>
                           <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                <li className="mr-1.5 mt-2">
                                <Badge variant="secondary" className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">React.js</Badge>
                                </li>
                                <li className="mr-1.5 mt-2">
                                <Badge variant="secondary" className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">Next.js</Badge>
                                </li>
                                <li className="mr-1.5 mt-2">
                                <Badge variant="secondary" className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">Java</Badge>
                                </li>
                                <li className="mr-1.5 mt-2">
                                <Badge variant="secondary" className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">Spring Boot</Badge>
                                </li>
                                 <li className="mr-1.5 mt-2">
                                <Badge variant="secondary" className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">AWS</Badge>
                                </li>
                            </ul>
                        </div>
                      </div>
                    </li>
                     <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2" aria-label="2022 to 2024">Jun 2022 — Apr 2024</header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-primary">
                            <div>
                                <span className="inline-block font-medium text-primary">Software Engineer · Fibe.India</span>
                            </div>
                          </h3>
                           <div className="mt-2 text-sm leading-normal text-muted-foreground">
                            <ul className="list-disc space-y-2 pl-4">
                                <li>Developed and maintained backend services using Spring Boot and MySQL.</li>
                                <li>Collaborated with cross-functional teams to deliver features in fast-paced release cycles, enabling consistent delivery and quick feedback loops.</li>
                                <li>Wrote comprehensive unit and integration tests to improve code reliability and reduce regressions during scale.</li>
                            </ul>
                          </div>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                <li className="mr-1.5 mt-2">
                                <Badge variant="secondary" className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">React.js</Badge>
                                </li>
                                <li className="mr-1.5 mt-2">
                                <Badge variant="secondary" className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">Next.js</Badge>
                                </li>
                                <li className="mr-1.5 mt-2">
                                <Badge variant="secondary" className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">Java</Badge>
                                </li>
                                <li className="mr-1.5 mt-2">
                                <Badge variant="secondary" className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">Spring Boot</Badge>
                                </li>
                                 <li className="mr-1.5 mt-2">
                                <Badge variant="secondary" className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">MySQL</Badge>
                                </li>
                            </ul>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>

              <section id="highlights" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Highlights">
                 <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-primary lg:sr-only">Highlights</h2>
                </div>
                <ol className="group/list space-y-12">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
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
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
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
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
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
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
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
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:col-span-8">
                          <h3>
                            <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-accent group/link text-base">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block"></span>
                                <span>{project.emoji} {project.title} <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" /></span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-muted-foreground">{project.description}</p>
                           {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:text-accent">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </a>
                          )}
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
                      </div>
                    </li>
                  ))}
                  </ul>
                  <div className="mt-12">
                    <a href="https://github.com/Mayank-MP05" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-medium leading-tight text-primary font-semibold text-primary group">
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
                <p className="font-mono text-sm text-accent dark:text-accent">What’s Next?</p>
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
    </Spotlight>
  );
}
