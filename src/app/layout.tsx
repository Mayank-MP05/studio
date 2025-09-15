import type {Metadata} from 'next';
import { Inter, Space_Grotesk, Fira_Code } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code'});

export const metadata: Metadata = {
  title: 'Mayank Pachpande || Full Stack Developer - Enthusiast - Programmer || Software Development Portfolio',
  description: 'Software developer with 2+ years of experience working in a fast-paced startups. Having a strong background in full-stack development, and is proficient in a variety of programming languages and technologies like Javascript, Node, Express, MySQL, MongoDB, React, Next JS, AWS, EC2, S3, Codepipeline, Codebuild, Lambda.',
  keywords: "Mayank_MP5,Mayank_MP05,MP5,Mayank,Mayank Pachpande,Pachpande,mayank5pande,CSE portfolio,SDE,SDE Portfolio,Pune SDE Portfolio,Mayank Pachpande Portfolio,Mayank Pachpande Projects,Mayank,Pachpande,PCCOE,Pune",
  authors: [{ name: "Mayank Pachpande" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Mayank Pachpande || Full Stack Developer - Enthusiast - Programmer || Software Development Portfolio",
    description: "Software developer with 2+ years of experience working in a fast-paced startups. Having a strong background in full-stack development, and is proficient in a variety of programming languages and technologies like Javascript, Node, Express, MySQL, MongoDB, React, Next JS, AWS, EC2, S3, Codepipeline, Codebuild, Lambda.",
    images: ["https://media.licdn.com/dms/image/C4D03AQEXUmMi3jttZQ/profile-displayphoto-shrink_800_800/0/1659158229535?e=1691020800&v=beta&t=aISqwp9HJWnJ2qbADzgtKfAd6hmtS5CB6fhmt0sMeKA"],
    locale: "en_IN",
    url: "https://mayank5pande.com/",
    siteName: "Mayank Pachpande || Full Stack Developer - Enthusiast - Programmer || Software Development Portfolio",
  },
  metadataBase: new URL('https://mayank5pande.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: 'https://mayank-mp05.github.io/favicon.ico',
    apple: 'https://mayank-mp05.github.io/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
          <meta charSet="utf-8" />
       </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
