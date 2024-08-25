import { Briefcase, GraduationCap } from "lucide-react";

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
