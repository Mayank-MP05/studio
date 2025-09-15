export const navLinks = [
  { id: 1, name: "About", href: "#about" },
  { id: 2, name: "Projects", href: "#projects" },
  { id: 3, name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/bchiang7" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/brittany-chiang/" },
  { name: "Twitter", url: "https://twitter.com/bchiang7" },
];

export const skills = [
  { name: "JavaScript (ES6+)" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Tailwind CSS" },
];

export const projects = [
  {
    title: "Spotify Profile",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your listening history.",
    image: "project-spotify",
    tech: ["React", "Styled Components", "Express", "Spotify API"],
    liveUrl: "https://spotify-profile.herokuapp.com/",
    githubUrl: "https://github.com/bchiang7/spotify-profile",
  },
  {
    title: "Personal Website V4",
    description: "My fourth iteration of my personal website built with Gatsby and hosted on Netlify. I designed and built this version to be a single page application with a clean, modern aesthetic.",
    image: "project-v4",
    tech: ["Gatsby", "React", "GraphQL"],
    liveUrl: "https://v4.brittanychiang.com/",
    githubUrl: "https://github.com/bchiang7/v4",
  },
  {
    title: "Halcyon Theme",
    description: "A minimal, dark blue theme for VS Code, Sublime Text, iTerm, and more. I was inspired by the color palette of the macOS Mojave wallpaper and wanted a theme that was easy on the eyes.",
    image: "project-halcyon",
    tech: ["VS Code", "Sublime Text", "iTerm2"],
    liveUrl: "https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode",
    githubUrl: "https://github.com/bchiang7/halcyon-vscode",
  },
];
