// src/components/skills/SkillsList.tsx
import React from "react";

interface SkillsListProps {
  skills: { label: string; items: string[] }[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  return (
    <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
      {skills.map((skill, idx) => (
        <li key={idx}>
          <strong>{skill.label}:</strong> {skill.items.join(", ")}
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
