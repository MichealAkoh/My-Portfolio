// src/components/experience/experienceData.ts
export interface ExperienceItem {
  title: string;
  company: string;
  date?: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer Intern",
    company: "Lampnet Technologies",
    date: "June 2025 - Present",
    description:
      "Architecting responsive user interfaces using Tailwind CSS and Bootstrap. Collaborating closely with backend teams to streamline API integration and troubleshoot complex data flows. Additionally tasked with authoring technical documentation and educational course materials to support client deliverables.",
  },
  {
    title: "DevOps Infrastructure Intern",
    company: "Bincom Solutions Academy",
    date: "May 2025",
    description:
      "Provisioned and managed cloud infrastructure exclusively within the AWS ecosystem. Configured EC2 instances and S3 buckets for scalable application hosting while implementing IAM policies for secure access control. Monitored server health and automated deployment workflows using AWS tools.",
  },
  {
    title: "Full Stack Developer",
    company: "Growvine Investments Limited",
    date: "2023 - 2025",
    description:
      "Spearheading the development of scalable web applications using React, Node.js, and PostgreSQL. Established CI/CD pipelines via Docker to automate deployment and reduce downtime. Currently managing the central analytics dashboard, focusing on data visualization and system optimization.",
  },
];
