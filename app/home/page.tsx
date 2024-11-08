// app/pages/Homepage.tsx
"use client"; // Ensure this is a client component

import React from 'react';
import Card from '../components/card'; // Assuming Card is your card component
import cardsData from '../cardData.json';
import { useRouter } from 'next/navigation'; // Import from next/navigation
import Three from '../components/three/threeDObject'; // Import your first 3D model
// import ThreeModel2 from '../components/three/Model2'; // Import your second 3D model
// import ThreeModel3 from '../components/three/Model3'; // Import your third 3D model
// import ThreeModel4 from '../components/three/Model4'; // Import your fourth 3D model

const HomePage: React.FC = () => {
  const router = useRouter(); // Initialize the useRouter from next/navigation

  const getCardById = (id: number) => cardsData.find(card => card.id === id);

  // Click handler for navigating to a specific link
  const handleCardClick = (link?: string) => {
    if (link) {
      router.push(link); // Navigate to the provided link
    }
  };

  return (
    <div className="flex flex-col justify-around items-center">
      <div className="card-container">
        <Card cardData={getCardById(1)} className='' ThreeModel={Three} />
      </div>
      <div className="card-container hover:bg-opacity-10 cursor-pointer" onClick={() => handleCardClick(getCardById(2)?.link)}>
        <Card cardData={getCardById(2)} className='' />
        {/* <Card cardData={getCardById(2)} className='' ThreeModel={ThreeModel2} /> */}
      </div>
      <div className="card-container hover:bg-opacity-90 cursor-pointer">
        <Card cardData={getCardById(3)} className=''  />
      </div>
      <div className="card-container hover:bg-opacity-90 cursor-pointer">
        <Card cardData={getCardById(4)} className=''  />
      </div>
    </div>
  );
};

export default HomePage;
