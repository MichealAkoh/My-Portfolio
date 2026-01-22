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
        width={200}
        height={200}
        className="rounded-full shadow-lg"
      />
    </div>
  );
};

export default HeroImage;
