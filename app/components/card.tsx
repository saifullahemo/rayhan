import React, { useState, useEffect } from "react";
import styles from "../color.module.css";
import { motion } from "framer-motion";

interface CardProps {
  cardData: {
    id: number;
    headline: string;
    subHeaderTop: string;
    subHeaderBottom: string;
    color: string;
    textColor: string;
    link?: string;
  };
  className?: string;
  onClick?: () => void;
  ThreeModel?: React.ComponentType<{ opacity: number }>;
  opacity?: number;
}

const Card: React.FC<CardProps> = ({ cardData, className, onClick, ThreeModel }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const colorClass = styles[cardData.color] || "";
  const textColorClass = styles[cardData.textColor] || "";

  // Detect screen size to determine if it's mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint (768px)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      onClick={onClick}
      className={`${colorClass} ${textColorClass} border flex flex-col justify-between rounded-lg p-8 md:p-16 mb-16 shadow-lg h-[30vh] w-[80vw] md:h-[45vh] md:w-[62vw] mx-2 md:mx-4 cursor-pointer relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10, boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)" }}
      style={{
        backgroundImage: `linear-gradient(135deg, #fffff 0%, #fffff 40%, #fffff 100%)`, // Gradient with a light coral accent
        backgroundSize: "cover",
        // borderColor: isHovered ? "#FFD700" : "transparent", // Gold accent border on hover
        borderWidth: "2px",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="flex justify-center relative">
        <motion.div
          className="absolute top-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 1 : isMobile ? 0.5 : 1 }} // Opacity based on mobile and hover state
          transition={{ duration: 0.3 }}
          style={{ zIndex: isMobile ? -1 : 1 }} // Set zIndex to be behind text on mobile
        >
          {ThreeModel && <ThreeModel opacity={isHovered ? 0.2 : 1} />} {/* Set opacity of 3D model */}
        </motion.div>
      </div>

      <div className="flex flex-col justify-between h-full">
        {/* Subheader Top */}
        <motion.p
          className={`${textColorClass} text-gray-700 mb-2 font-semibold transition-all duration-300 transform ${
            isHovered ? "translate-y-1" : "translate-y-10"
          }`}
          initial={{ y: isMobile ? 0 : 10, opacity: isMobile ? 1 : 0 }}
          animate={{ y: isHovered ? 0 : 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {cardData.subHeaderTop}
        </motion.p>

        {/* Headline */}
        <motion.h1
          className={`font-light leading-16 mb-2 ${textColorClass} text-gray-900 text-left text-lg md:text-6xl`}
          initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
          animate={{ opacity: isHovered ? 1 : isMobile ? 1 : 0, y: isHovered ? 0 : isMobile ? 0 : 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {cardData.headline}
        </motion.h1>

        <div>
          <hr className={`mb-2 ${textColorClass}`} />
          <motion.p
            className={`${textColorClass} text-gray-700 transition-all text-sm md:text-base`}
            initial={{ opacity: isMobile ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {cardData.subHeaderBottom}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
