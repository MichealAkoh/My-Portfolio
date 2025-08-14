// src/components/experience/ExperienceSection.tsx
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "./ExperienceData";

const ExperienceSection: React.FC = () => {
  return (
    <section className="relative bg-white rounded-xl shadow-sm p-6 mt-8 overflow-hidden section-spacing">
      <div className="relative z-10">
        <p className="text-green-600 font-semibold">• Experience</p>
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
