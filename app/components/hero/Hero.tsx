'use client';
import Navigation from './Navigation';
import Logo from './Logo';
import Mountains from './Mountains';
import Clouds from './Clouds';
import ScrollIndicator from './ScrollIndicator';

console.log('Mountains component:', Mountains);

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-gray-100 overflow-hidden">
      <Navigation />
      {/* Animated Clouds */}
      <Clouds />
      
      {/* 3D Mountains */}
      <div className="absolute inset-0 z-0">
        <Mountains />
      </div>

      {/* Logo & Title */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <Logo />
        <h1 className="mt-4 text-4xl tracking-wide text-white font-light">
          MONTFORT
        </h1>
      </div> */}

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
