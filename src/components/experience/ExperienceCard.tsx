// src/components/experience/ExperienceCard.tsx
import React from "react";
import { ExperienceItem } from "./ExperienceData";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold">{experience.title}</h3>
      {experience.subtitle && (
        <p className="text-sm text-gray-500">{experience.subtitle}</p>
      )}
      <p className="mt-2 text-gray-700">{experience.description}</p>
    </div>
  );
};

export default ExperienceCard;
