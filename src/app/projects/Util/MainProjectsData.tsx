// src/app/projects/Util/MainProjectsData.tsx
import type { StaticImageData } from "next/image";


export interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  link?: string;
}

export const mainprojects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    image: "/assets/project1.png",
    link: "https://example.com"
  },
  {
    title: "E-Commerce Platform",
    description: "A scalable e-commerce platform with Stripe integration.",
    image: "/assets/project2.png",
    link: "https://github.com/MichealAkoh/vestvale-newcopy"
  },
  {
    title: "Task Manager App",
    description: "A Kanban-style task manager app with drag-and-drop functionality.",
    image: "/assets/project3.png",
    link: "https://github.com/AkohMicheal/AkohFlow"
  },
  {
    title: "A Blog Platform",
    description: "A blog platform with user authentication and markdown support.",
    image: "/assets/project4.png",
    link: "https://github.com/AkohMicheal/Responsive-Landing-Page"
  },
  {
    title: "Learning Management System",
    description: "A learning management system with course creation and user management.",
    image: "/assets/project5.png",
    link: "https://github.com/MichealAkoh/glowsville"
  },
  {
    title: "Company Website",
    description: "A responsive company website with a modern design.",
    image: "/assets/project6.png",
    link: "https://github.com/MichealAkoh/goalquest-copy"
  },
   {
    title: "FastApi Project",
    description: "A FastAPI project with user authentication and RESTful API and Docker support for CI/CD.",
    image: "/assets/project6.png",
    link: "https://github.com/AkohMicheal/fastapi-realworld-example-app"
  }
];
