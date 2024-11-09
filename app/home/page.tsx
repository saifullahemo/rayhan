// app/pages/HomePage.tsx
"use client";

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Card from "../components/card";
import cardsData from "../cardData.json";
import { useRouter } from "next/navigation";
import Three from "../components/three/threeDObject";
import Cube from "../components/three/cube";
import Character from "../components/three/character";

const HomePage: React.FC = () => {
  const router = useRouter();

  const getCardById = (id: number) => cardsData.find((card) => card.id === id);

  const handleCardClick = (link?: string) => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div className="flex flex-col justify-around items-center">
      {[1, 2, 3, 4].map((id) => (
        <motion.div
          key={id}
          className="card-container"
          onClick={() => handleCardClick(getCardById(id)?.link)}
          initial={{ opacity: 0, y: 50 }} // Start below and transparent
          animate={{ opacity: 1, y: 0 }} // Animate to visible and in position
          transition={{ duration: 0.6, delay: id * 0.2 }} // Delay each card for a nice sequence
        >
          <Card
  cardData={getCardById(id) || { id: 0, headline: "", subHeaderTop: "", subHeaderBottom: "", color: "", textColor: "", link: "" }}
  className=""
  ThreeModel={
    (id === 2 ? Cube : id === 3 ? Three : id === 4 ? Character : undefined) as React.ComponentType<{ opacity: number; }> | undefined
  }
/>

        </motion.div>
      ))}
    </div>
  );
};

export default HomePage;
