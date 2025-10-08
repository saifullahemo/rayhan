"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Snowfall from "react-snowfall";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const mountainRef = useRef<HTMLImageElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=1000",
        scrub: true,
      },
    });

    tl.to(mountainRef.current, { y: -100, scale: 1.05 }, 0)
      .to(fogRef.current, { y: -30 }, 0)
      .to(logoRef.current, { y: -80, opacity: 0.2 }, 0);
  }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.hero',
  //       start: 'top top',
  //       end: '+=1000',
  //       scrub: true,
  //     },
  //   });

  //   tl.to(mountainRef.current, { y: -100, scale: 1.05 }, 0)
  //     .to(fogRef.current, { y: -50, opacity: 0.7 }, 0)
  //     .to(logoRef.current, { y: -80, opacity: 0.2 }, 0);
  // }, []);

  return (
    <section className="hero relative w-full h-screen overflow-hidden bg-[#f5f9ff] text-blue-900">
      <Snowfall snowflakeCount={150} />

      <div
        ref={fogRef}
        className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
      >
        <div className="fog-layer absolute w-[200%] h-full bg-[url('/fog.jpg')] bg-repeat-x opacity-60 animate-fog-move" />
      </div>

      <img
        ref={mountainRef}
        src="/mountain.jpg"
        alt="Mountain"
        className="absolute bottom-0 w-full h-full object-cover object-bottom z-0"
      />

      <div
        ref={logoRef}
        className="relative z-20 flex flex-col items-center justify-center h-full"
      >
        <img src="/logo.svg" alt="Montfort Logo" className="w-24 h-24 mb-4" />
        <h1 className="text-5xl md:text-7xl font-light tracking-widest">
          MONTFORT
        </h1>
        <p className="mt-6 text-sm uppercase tracking-wider">
          Scroll down to discover
        </p>
      </div>
    </section>
  );
}
