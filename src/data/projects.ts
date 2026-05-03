export interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  link: string;
  download?: string;
  youtubeId?: string; // Updated from 'video' to 'youtubeId'
  screenshots?: string[];
  challenges?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    title: "u-sell-it",
    description: "A full-stack marketplace application built for peer-to-peer commerce.",
    fullDescription: "A comprehensive marketplace platform designed for local trade. It features a robust authentication system, real-time listing updates, and a responsive UI built with React and Node.js.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind"],
    link: "https://github.com/KingNeoIV/u-sell-it",
    youtubeId: "HmZ9OHvABJw", // Updated to YouTube ID
    screenshots: [
      "/u-sell-itpre1.png",
      "/u-sell-itpre2.png",
      "/u-sell-itpre3.png",
      "/u-sell-itpre4.png",
      "/u-sell-itpre5.png"
    ],
    challenges: [
      "Implemented secure JWT authentication logic for user safety.",
      "Optimized dynamic marketplace listings for fast performance.",
      "Handled complex state management for user listing dashboards."
    ],
    features: ["User Auth System", "Real-time Search", "Dynamic Listing Management"]
  },
  {
    title: "MultiGame v2.1",
    description: "Desktop multiplication game with a Python GUI and C++ backend logic.",
    fullDescription: "My first end-to-end completed project. A standalone desktop application where I utilized a C++ DLL for high-speed performance logic, interfaced with a Python Tkinter GUI.",
    tags: ["Python", "C++", "Tkinter", "Inno Setup"],
    link: "https://github.com/KingNeoIV/MultiGame",
    download: "/MultiGame.exe",
    screenshots: ["/MultiGamePre1.png", "/MultiGamePre2.png"],
    challenges: [
      "Integrating a C++ DLL with a Python frontend for the first time.",
      "Creating a professional installer using Inno Setup for easy distribution."
    ],
    features: ["Standalone Installer", "C++ Logic Backend", "Custom UI Feedback"]
  },
  {
    title: "Space Cowboy: Galactic Run",
    description: "An action-packed game focusing on responsive design and interactive mechanics.",
    fullDescription: "A high-energy runner game where players dodge obstacles. This project focuses on object-oriented programming hierarchies and responsive input handling.",
    tags: ["Game Dev", "TypeScript", "Vite"],
    link: "https://github.com/KingNeoIV/Space_Cowboy_-_Galactic_Run",
    youtubeId: "BLHtp4koWAQ", // Updated to YouTube ID
    screenshots: [
      "/spaceCowboypre1.png",
      "/spaceCowboypre2.png",
      "/spaceCowboypre3.png",
      "/spaceCowboypre4.png",
      "/spaceCowboypre5.png"
    ],
    challenges: [
      "Optimizing collision detection for smooth 60fps gameplay.",
      "Implementing custom damage scaling for asteroid impacts."
    ],
    features: ["Responsive Controls", "Dynamic Difficulty Scaling", "High-Score Tracking"]
  },
  {
    title: "Portfolio v1 (Legacy)",
    description: "The original foundation of my digital presence, developed as a CS50 project and later upgraded with custom JavaScript.",
    fullDescription: "This legacy version served as the blueprint for my current portfolio. While the screenshots below show the original design, the live URL now hosts the upgraded React/Tailwind version you are currently viewing.",
    tags: ["HTML", "JavaScript", "CSS"], 
    link: "https://kingneoiv.github.io", 
    screenshots: [
      "/homepageScreenshot.png",
      "/aboutMeScreenshot.png",
      "/myProjectScreenshot.png",
      "/cs50prev1.png",
      "/cs50prev2.png",
      "/cs50prev3.png",
      "/cs50prev4.png"
    ],
    challenges: [
      "Building a multi-page feel using static HTML and CSS.",
      "Refining UI/UX layouts without the help of modern utility frameworks.",
      "Managing project assets and data manually before transitioning to TypeScript."
    ],
    features: ["Responsive Design", "Legacy Project Gallery", "Vanilla JS Implementation"]
  }
];