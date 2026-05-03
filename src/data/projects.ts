export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "u-sell-it",
    description: "A full-stack marketplace application built for peer-to-peer commerce. Features secure authentication and product management.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind"],
    link: "https://github.com/KingNeoIV/u-sell-it"
  },
  {
    title: "MultiGame v2.1",
    description: "My first end-to-end completed project. A standalone desktop multiplication game featuring a Python GUI and a C++ backend DLL for high-performance logic.",
    tags: ["Python", "C++", "Tkinter", "Inno Setup"],
    link: "https://github.com/KingNeoIV/MultiGame"
  },
  {
    title: "Space Cowboy: Galactic Run",
    description: "An action-packed game project focusing on responsive design and interactive gameplay mechanics.",
    tags: ["Game Dev", "TypeScript", "Vite"],
    link: "https://github.com/KingNeoIV/Space_Cowboy_-_Galactic_Run"
  },
  {
    title: "Personal Portfolio",
    description: "The 'Phase 2' evolution of my digital presence, built with a modern React/Vite stack.",
    tags: ["React", "Vite", "Tailwind"],
    link: "https://kingneoiv.github.io"
  }
];