// src/components/projects/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import { Project } from "./ProjectsData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="mt-2 text-gray-700">{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-green-600 hover:underline"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
