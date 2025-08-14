// src/components/about/AboutCard.tsx
import React from "react";
import { AboutItem } from "./AboutData";

interface AboutCardProps {
  item: AboutItem;
}

const AboutCard: React.FC<AboutCardProps> = ({ item }) => {
  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p className="mt-2 text-gray-700">{item.description}</p>
    </div>
  );
};

export default AboutCard;
