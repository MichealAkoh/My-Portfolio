// src/components/experience/ExperienceCard.tsx
import React from "react";
import { ExperienceItem } from "./ExperienceData";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <article className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      {/* Header Section */}
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-900 leading-tight">
          {experience.title}
        </h3>

        {/* Flex container to separate Company and Date */}
        <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
          <span className="font-medium text-green-700">
            {experience.company}
          </span>
          <span className="text-gray-500 italic">{experience.date}</span>
        </div>
      </div>

      {/* Description Section */}
      <p className="text-gray-700 leading-relaxed text-sm">
        {experience.description}
      </p>
    </article>
  );
};

export default ExperienceCard;
