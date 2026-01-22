// src/components/hero/HeroText.tsx
import React from "react";
import Link from "next/link";

const HeroText: React.FC = () => {
  return (
    <div className="text-center md:text-left">
      <p className="text-green-600 font-semibold">• Welcome</p>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Hi, I&apos;m <span className="text-green-600">Micheal Akoh</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed">
        An engineering-focused{" "}
        <span className="inline-block px-2 py-1 text-green-700 bg-green-100 font-mono text-sm rounded-md border border-green-200">
          &lt;Full-Stack /&gt;
        </span>{" "}
        developer who doesn&apos;t just write code, but builds solutions. I specialize in turning complex requirements into intuitive, user-friendly applications.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
        <Link href="/projects">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            View Projects
          </button>
        </Link>
        <Link href="#contactsection" scroll={true}>
          <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
