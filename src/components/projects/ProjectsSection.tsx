// src/components/projects/ProjectsSection.tsx
import React from "react";
import { projects } from "./ProjectsData";
import ProjectCard from "./ProjectsCard";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projectsection" className="relative bg-white rounded-xl shadow-sm p-6 mt-8 overflow-hidden section-spacing">
      <div className="relative z-10">
        <p className="text-green-600 font-semibold">• Projects</p>
        <h2 className="text-3xl font-bold mb-6">Some of My Work</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
