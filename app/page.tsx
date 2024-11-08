// components/Card.tsx
import React from 'react';
import Homepage from './home/page'
import About from './about/page'
import { NextPage } from 'next';
import Three from "./components/three/threeDObject";

const SectionPage: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto my-24 p-16">
      <Homepage />
      {/* <About /> */}
    </section>
  );
};

export default SectionPage;


