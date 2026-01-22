// src/components/projects/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import { Project } from "./MainProjectsData";

interface ProjectCardProps {
  mainprojects: Project;
}

const MainProjectCard: React.FC<ProjectCardProps> = ({ mainprojects }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <Image
        src={mainprojects.image}
        alt={mainprojects.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{mainprojects.title}</h3>
        <p className="mt-2 text-gray-700">{mainprojects.description}</p>
        {/* Tech Stack Tags */}
        {mainprojects.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {mainprojects.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-gray-600 bg-gray-200 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {mainprojects.link && (
          <a
            href={mainprojects.link}
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

export default MainProjectCard;
