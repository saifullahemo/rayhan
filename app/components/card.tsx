// components/Card.tsx
"use client"; // Ensure this is a client component

import React, { useState } from "react";
import styles from "../color.module.css"; // Import your CSS module
import Three from "./three/threeDObject"; // Assuming you have 3D components

interface CardProps {
  cardData: {
    id: number;
    headline: string;
    subHeaderTop: string;
    subHeaderBottom: string;
    color: string;
    textColor: string;
    link?: string; // Optional link
  };
  className?: string; // Optional className for additional styles
  onClick?: () => void; // Function to handle clicks
}

const Card: React.FC<CardProps> = ({ cardData, className, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClass = styles[cardData.color] || ""; // Ensure fallback if class doesn't exist
  const textColorClass = styles[cardData.textColor] || ""; // Same as above

  return (
    <div
      onClick={onClick} // Use the onClick prop for handling clicks
      className={`${colorClass} ${textColorClass} border flex flex-col justify-between rounded-lg p-16 mb-16 shadow-md h-[45vh] w-[62vw] mx-4 relative overflow-hidden transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center">
        <div className="absolute top-0">
          <Three opacity={isHovered ? 1 : 0} />
        </div>
      </div>

      <div className="flex flex-col justify-between h-full">
        <p
          className={`${textColorClass} text-gray-700 mb-2 absolute bottom-36 font-semibold transition-all duration-300 transform ${
            isHovered ? "translate-y-1 opacity-100 top-6" : "translate-y-10 opacity-100"
          }`}
        >
          {cardData.subHeaderTop}
        </p>
        <h1
          className={`font-light leading-16 mb-2 ${textColorClass} text-gray-900 text-left transition-all ${
            isHovered ? "translate-y-10 opacity-100 !bg-transparent top-12" : "translate-y-full opacity-0"
          }`}
        >
          {cardData.headline}
        </h1>
        <div>
          <hr className={`mb-2 ${textColorClass}`} />
          <p className={`${textColorClass} text-gray-700 transition-all`}>
            {cardData.subHeaderBottom}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
