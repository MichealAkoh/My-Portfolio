// src/components/projects/projectsData.ts
import Project1 from "../../../public/assets/project1.png";
import Project2 from "../../../public/assets/project2.png";
import Project3 from "../../../public/assets/project3.png";
import Project4 from "../../../public/assets/project4.png";
import Project5 from "../../../public/assets/project5.png";
import Project6 from "../../../public/assets/project6.png";
import type { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    image: Project1,
    link: "https://github.com/MichealAkoh/My-Portfolio"
  },
  {
    title: "E-Commerce Platform",
    description: "A scalable e-commerce platform with Stripe integration.",
    image: Project2,
    link: "https://github.com/MichealAkoh/vestvale-newcopy"
  },
  {
    title: "Task Manager App",
    description: "A Kanban-style task manager app with drag-and-drop functionality.",
    image: Project3,
    link: "https://github.com/AkohMicheal/AkohFlow"
  },
  {
    title: "A Blog Platform",
    description: "A blog platform with user authentication and markdown support.",
    image: Project4,
    link: "https://github.com/AkohMicheal/Responsive-Landing-Page"
  },
  {
    title: "Learning Management System",
    description: "A learning management system with course creation and user management.",
    image: Project5,
    link: "https://github.com/MichealAkoh/glowsville"
  },
  {
    title: "Company Website",
    description: "A responsive company website with a modern design.",
    image: Project6,
    link: "https://github.com/MichealAkoh/goalquest-copy"
  }
];
