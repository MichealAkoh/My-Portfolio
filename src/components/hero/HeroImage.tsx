// src/components/hero/HeroImage.tsx
import React from "react";
import Image from "next/image";
import profileImage from "../../../public/assets/profile.jpg";

const HeroImage: React.FC = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <Image
        src={profileImage}
        alt="Profile picture"
        width={300}
        height={300}
        className="rounded-full shadow-lg border-4 border-white"
      />
    </div>
  );
};

export default HeroImage;
