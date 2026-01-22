// src/components/projects/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import { Project } from "./ProjectsData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden bg-gray-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>

        {/* Description: flex-grow pushes the tags/link to the bottom */}
        <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-gray-600 bg-gray-200 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link Section */}
        {project.link && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 group/link"
            >
              View Project
              {/* Animated Arrow Icon */}
              <svg
                className="w-4 h-4 ml-1 transition-transform transform group-hover/link:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
