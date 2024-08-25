import beerBoutiqueImg from "@/assets/images/portfolio/2024/projects/beer-boutique.png";
import kryptoImg from "@/assets/images/portfolio/2024/projects/krypto-nft.png";
import chessImg from "@/assets/images/portfolio/2024/projects/chess.png";
import serverImg from "@/assets/images/portfolio/2024/projects/c-server.png";

import {
  Briefcase,
  GraduationCap,
  Layout,
  Server,
  type LucideIcon,
} from "lucide-react";
import type { ImageMetadata } from "astro";

export const sections = Object.freeze([
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
] as const);

export const experience = Object.freeze([
  {
    title: "Full-Stack Intern ",
    company: "CristalSoft",
    location: "Alba Iulia, România",
    description:
      "Developed an internal application focusing on customer relationship management (CRM) functionalities. I used React for the front end, PHP for the REST API powering the application, Docker for containerization and ease of deployment, and Apache for the web server configuration.",
    icon: Briefcase,
    date: "Jul. 2024 – Sep. 2024",
  },
  {
    title: "University",
    company: "TUCN",
    location: "Cluj-Napoca, România",
    description:
      "Studied C and Java, with a focus on OOP principles. Designed various digital circuits and implemented them on an FPGA board. And also did various projects involving databases, computer graphics, and lexer & parser design for the classes I took.",
    icon: GraduationCap,
    date: "2021-present",
  },
]);

export const projectData = Object.freeze({
  featured: [
    {
      title: "Beer Boutique",
      description:
        "Stylish and interactive mock beer pub website with a responsive user interface.",
      tags: [
        "React",
        "TypeScript",
        "React Router",
        "TailwindCSS",
        "GitHub Pages",
      ],
      githubLink: "https://github.com/CozmaRares/beer-pub",
      demoLink: "https://beerpub.raru.dev/",
      image: beerBoutiqueImg,
    },
    {
      title: "Krypto | NFT",
      description: "Responsive landing page for a fictitious NFT market.",
      tags: ["React", "TypeScript", "TailwindCSS", "GitHub Pages", "Figma"],
      githubLink: "https://github.com/CozmaRares/nft-landing",
      demoLink: "https://nft-landing.raru.dev/",
      image: kryptoImg,
    },
    {
      title: "Chess Online",
      description:
        "A chess game website featuring both multiplayer and local gameplay modes, with a custom-built chess engine. Emphasis was placed on server functionality rather than UI.",
      tags: [
        "Socket.IO",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Express.js",
        "AWS",
      ],
      githubLink: "https://github.com/CozmaRares/chess",
      image: chessImg,
    },
    {
      title: "HTTP Server",
      description:
        "An HTTP server with file-based routing for serving static content and custom routes for dynamic functionality.",
      tags: ["C", "Makefile", "Data Structures"],
      githubLink: "https://github.com/CozmaRares/c-server",
      image: serverImg,
    },
  ],
  other: [
    {
      title: "Pseudocode Interpreter",
      description:
        "An interpreter for a dynamic programming language based on pseudocode, featuring customizable error messages, function names, keywords, and primitive types.",
      tags: ["C++"],
      githubLink: "https://github.com/CozmaRares/psc-interpreter",
      icon: Server,
    },
    {
      title: "Sorting Algorithms Visualizer",
      description:
        "A sorting algorithms visualizer using p5.js for drawing, showcasing a range of algorithms from bubble sort to intro sort, bundled with Vite.",
      tags: [
        "JavaScript",
        "Vite",
        { text: "p5.js", link: "https://p5js.org/" },
      ],
      githubLink: "https://github.com/CozmaRares/sorting-algs-visualizer",
      icon: Layout,
    },
    {
      title: "Polynomial Calculator",
      description:
        "Polynomial calculator with a dedicated graphical interface through which the user can insert polynomials, select the mathematical operation to be performed and view the result.",
      tags: ["Java", "JUnit", "Java Swing"],
      githubLink: "https://github.com/CozmaRares/polynomial-calculator",
      icon: Server,
    },
    {
      title: "Queue Management",
      description:
        "An application that simulates queuing-based systems. It involves clients arriving, joining queues, waiting, getting served, and leaving. The application calculates key metrics such as average waiting time, average service time, and peak hour.",
      tags: ["Java", "Maven", "Threads"],
      githubLink: "https://github.com/CozmaRares/queue-management",
      icon: Server,
    },
    {
      title: "Orders Management",
      description:
        "An application for client order management in a warehouse, utilizing SurrealDB as the database, offering basic CRUD functionality.",
      tags: [
        "Java",
        "Reflection API",
        { text: "SurrealDB", link: "https://surrealdb.com/" },
      ],
      githubLink: "https://github.com/CozmaRares/orders-management",
      icon: Server,
    },
  ],
} satisfies {
  featured: FeaturedProjectType[];
  other: ProjectType[];
});

export type ProjectType = {
  title: string;
  description: string;
  tags: Array<string | { text: string; link: string }>;
  githubLink: string;
  icon: LucideIcon;
};

export type FeaturedProjectType = Prettify<
  Omit<ProjectType, "icon"> & { demoLink?: string; image: ImageMetadata }
>;

export type Prettify<T> = { [K in keyof T]: T[K] };
