export interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  link: string;
  liveUrl?: string;
  hideRepo?: boolean;
  download?: string;
  youtubeId?: string;
  screenshots?: string[];
  challenges?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    title: "PulseCheck",
    description:
      "A live SaaS product for monitoring cron jobs, backups, and scheduled tasks, get instant alerts the moment something stops running.",
    fullDescription:
      "PulseCheck is a full-stack monitoring platform built and shipped under my company, NeoIV Tech Solutions. It watches scheduled jobs " +
      "via simple HTTP pings, and emails you the instant a job misses its check-in window. Built end to end with a React/TypeScript frontend, " +
      "a FastAPI backend, and Stripe-powered billing, and deployed live at pulsecheck.digital.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Stripe"],
    link: "https://pulsecheck.digital",
    liveUrl: "https://pulsecheck.digital",
    hideRepo: true,
    screenshots: [
      "/pulsechecklandingpage.png",
      "/pulsecheckdashboard.png",
      "/pulsecheckhowitworks.png",
      "/pulsecheckmonitors.png",
      "/pulsecheckurl.png",
    ],
    challenges: [
      "Designing a reliable ping-based heartbeat system that accurately detects missed check-ins without false alarms.",
      "Building instant email alerting that fires the moment a job goes silent, not just on a slow polling cycle.",
      "Integrating Stripe billing to support a free tier alongside paid plans, without adding friction to onboarding.",
    ],
    features: [
      "No-Agent HTTP Ping Monitoring",
      "Instant Email Alerts",
      "Free Tier + Stripe Billing",
      "Live Production SaaS",
    ],
  },
  {
    title: "Toro Welding & Fabrication",
    description:
      "A business website for a local welding and fabrication company, built to showcase their work and drive calls from the Coastal Bend area.",
    fullDescription:
      "A client site built for my uncle's welding business, Toro Welding & Fabrication, serving Ingleside, TX and the surrounding Coastal Bend."+ 
      " Designed to convert visitors into calls, with a featured work gallery, service capabilities breakdown, and a live Instagram feed pulling"+ 
      " in recent job photos.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://toro-welding.com/",
    liveUrl: "https://toro-welding.com/",
    hideRepo: true,
    screenshots: [
      "/toro-weldinglandingpage.png",
      "/toro-weldingindustry.png",
      "/toro-weldingfeatured.png",
      "/toro-weldingshowcase.png",
      "/toro-weldinglatest.png",
      "/toro-weldingcontact.png",
    ],
    challenges: [
      "Structuring a services showcase (Structural, Mobile Ops, Industrial, Custom Builds) that's easy for a non-technical client to update.",
      "Building a live-feeling Instagram feed section to keep the site looking active without manual upkeep.",
    ],
    features: [
      "Featured Work Gallery",
      "Industrial Capabilities Breakdown",
      "Live Instagram Feed",
      "Click-to-Call Contact",
    ],
  },
  {
    title: "u-sell-it",
    description:
      "A full-stack marketplace application built for peer-to-peer commerce.",
    fullDescription:
      "A comprehensive marketplace platform designed for local trade. It features a robust authentication system, real-time listing updates," +
      "and a responsive UI built with React and Node.js.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind"],
    link: "https://github.com/KingNeoIV/u-sell-it",
    youtubeId: "HmZ9OHvABJw",
    screenshots: [
      "/u-sell-itpre1.png",
      "/u-sell-itpre2.png",
      "/u-sell-itpre3.png",
      "/u-sell-itpre4.png",
      "/u-sell-itpre5.png",
    ],
    challenges: [
      "Implemented secure JWT authentication logic for user safety.",
      "Optimized dynamic marketplace listings for fast performance.",
      "Handled complex state management for user listing dashboards.",
    ],
    features: [
      "User Auth System",
      "Real-time Search",
      "Dynamic Listing Management",
    ],
  },
  {
    title: "MultiGame v2.1",
    description:
      "Desktop multiplication game with a Python GUI and C++ backend logic.",
    fullDescription:
      "My first end-to-end completed project. A standalone desktop application where I utilized a C++ DLL for high-speed performance logic, interfaced with a Python Tkinter GUI.",
    tags: ["Python", "C++", "Tkinter", "Inno Setup"],
    link: "https://github.com/KingNeoIV/MultiGame",
    download: "/MultiGame.exe",
    screenshots: ["/MultiGamePre1.png", "/MultiGamePre2.png"],
    challenges: [
      "Integrating a C++ DLL with a Python frontend for the first time.",
      "Creating a professional installer using Inno Setup for easy distribution.",
    ],
    features: [
      "Standalone Installer",
      "C++ Logic Backend",
      "Custom UI Feedback",
    ],
  },
  {
    title: "Space Cowboy: Galactic Run",
    description:
      "An action-packed game focusing on responsive design and interactive mechanics.",
    fullDescription:
      "A high-energy runner game where players dodge obstacles. This project focuses on object-oriented programming hierarchies and responsive input handling.",
    tags: ["Game Dev", "TypeScript", "Vite"],
    link: "https://github.com/KingNeoIV/Space_Cowboy_-_Galactic_Run",
    youtubeId: "BLHtp4koWAQ",
    screenshots: [
      "/spaceCowboypre1.png",
      "/spaceCowboypre2.png",
      "/spaceCowboypre3.png",
      "/spaceCowboypre4.png",
      "/spaceCowboypre5.png",
    ],
    challenges: [
      "Optimizing collision detection for smooth 60fps gameplay.",
      "Implementing custom damage scaling for asteroid impacts.",
    ],
    features: [
      "Responsive Controls",
      "Dynamic Difficulty Scaling",
      "High-Score Tracking",
    ],
  },
  {
    title: "Portfolio v1 (Legacy)",
    description:
      "The original foundation of my digital presence, developed as a CS50 project and later upgraded with custom JavaScript.",
    fullDescription:
      "This legacy version served as the blueprint for my current portfolio. While the screenshots below show the original design, the live URL now hosts the upgraded React/Tailwind version you are currently viewing.",
    tags: ["HTML", "JavaScript", "CSS"],
    link: "https://github.com/KingNeoIV/KingNeoIV.github.io",
    screenshots: [
      "/homepageScreenshot.png",
      "/aboutMeScreenshot.png",
      "/myProjectScreenshot.png",
      "/cs50prev1.png",
      "/cs50prev2.png",
      "/cs50prev3.png",
      "/cs50prev4.png",
    ],
    challenges: [
      "Building a multi-page feel using static HTML and CSS.",
      "Refining UI/UX layouts without the help of modern utility frameworks.",
      "Managing project assets and data manually before transitioning to TypeScript.",
    ],
    features: [
      "Responsive Design",
      "Legacy Project Gallery",
      "Vanilla JS Implementation",
    ],
  },
];
