// src/components/experience/experienceData.ts
export interface ExperienceItem {
  title: string;
  subtitle?: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer Intern",
    subtitle: "Lampnet Technologies • 06, 2025 - Present",
    description:
      "Developed high-performance UI components and maintained design systems with Tailwind CSS. Collaborated with UX designers to enhance user experience.",
  },
  {
    title: "Full Stack Developer",
    subtitle: "Growvine Investments Limited • 2024 - 2025",
    description:
      "Worked on modern web applications with React, Node.js, and PostgreSQL, implementing responsive designs and scalable APIs. Contributed to code reviews and team sprints. Managed deployment processes using Docker and CI/CD pipelines.",
  },
  {
    title: "Intern Developer",
    subtitle: "Startup Inc • 2023 - 2024",
    description:
      "Assisted in building MVP features and integrating third-party APIs. Gained experience in Agile methodologies and version control with Git. Developed unit tests to ensure code quality and reliability.",
  },
];
