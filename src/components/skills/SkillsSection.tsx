// src/components/skills/SkillsSection.tsx
import React from "react";
import SkillsIcons from "./SkillsIcons";
import SkillsList from "./SkillsList";
import { skillIcons, skillDetails } from "./SkillsData";

const SkillsSection: React.FC = () => {
  return (
    <section className="relative bg-white rounded-xl shadow-sm p-6 mt-8 overflow-hidden section-spacing">
      <div className="relative z-10">
        <p className="text-green-600 font-semibold">• Skills</p>
        <h2 className="text-3xl font-bold mb-6">What I Can Do</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillsIcons icons={skillIcons} />
          <SkillsList skills={skillDetails} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
