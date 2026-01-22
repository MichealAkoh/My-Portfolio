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
  tags: string[];
  image: string | StaticImageData;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "LIT Learning Management System",
    description: "A comprehensive Learning Management System (LMS) engineered for the Lampnet Institute of Technology. Features include robust course creation tools, student administration, and a hybrid registration workflow for both online and offline training modules.",
    tags: ["Nodemon", "Mongoose", "Express", "Clarity", "EmailJS", "Socket.io", "Docker"],
    image: Project5,
    link: "https://institute.lampnets.com/"
  },
  {
    title: "Lampnet Corporate Portal",
    description: "Spearheaded the modernization of the company's legacy website to meet current industry UI/UX standards. The overhaul included updating core dependencies, optimizing call-to-action (CTA) logic, and restructuring the content strategy to better articulate service solutions.",
    tags: ["React", "Bootstrap CSS", "UI/UX Design", "Sanity", "Tanstack"],
    image: Project6,
    link: "https://lampnets.com/"
  },
  {
    title: "Vestvale Real Estate & Interiors",
    description: "A visually immersive, responsive web platform for a real estate and interior design firm. The site features a categorized product showcase for furniture and décor, optimized for high-resolution imagery and cross-device compatibility.",
    tags: ["NextJS", "Tailwind CSS", "GSAP", "Cloudinary"],
    image: Project4,
    link: "https://vestvaleestate.com/"
  },
 /*  {
    title: "Laptop City E-Commerce",
    description: "A scalable B2C e-commerce platform designed for consumer electronics. Integrated the Paystack payment gateway for secure local transactions and built a dynamic inventory system to manage a diverse catalog of gadgets and devices.",
    tags: ["React", "MUI", "Node.js", "Paystack API", "Web Vitals"],
    image: Project2,
    link: "https://www.laptopcity.com.ng/"
  },
  {
    title: "GloryVille Solutions",
    description: "A professional consultancy platform built for a business strategy firm serving MSMEs. Integrated Sanity CMS (Headless CMS) to power a dynamic 'Insights' blog, allowing the client to easily manage and publish market research articles.",
    tags: ["NextJS", "Tailwind CSS", "Sanity CMS", "Content API"],
    image: Project3,
    link: "https://www.gloryvillesolutions.com.ng/"
  }, */
];
