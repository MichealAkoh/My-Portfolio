// src/components/about/AboutSection.tsx
import React from "react";
import AboutCard from "./AboutCard";
import { aboutItems } from "./AboutData";

const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-white rounded-xl shadow-sm p-6 mt-8 overflow-hidden section-spacing">
      <div className="relative z-10">
        <p className="text-green-600 font-semibold">• About Me</p>
        <h2 className="text-3xl font-bold mb-6">Get to Know Me</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {aboutItems.map((item, idx) => (
            <AboutCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
