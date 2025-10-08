"use client";
import React, { useEffect, useRef } from "react";
import { initFluidSimulation } from "./initFluid";

export default function FluidSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cleanup = initFluidSimulation(canvasRef.current);
    return cleanup; // stop animation on unmount
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // keep it behind hero content
        backgroundColor: "white",
      }}
    />
  );
}
