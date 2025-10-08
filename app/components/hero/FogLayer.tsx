'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import './FogShader';
import * as THREE from 'three';

function FogPlane({ depth, speed }: { depth: number; speed: number }) {
  const mat = useRef<any>(null!);
  useFrame((state) => {
    if (mat.current) mat.current.uTime += state.clock.getDelta() * speed;
  });

  return (
    <mesh position={[0, -5, -depth]}>
      <planeGeometry args={[200, 200, 200, 200]} />
      <fogMaterial ref={mat} transparent depthWrite={false} />
    </mesh>
  );
}

export default function FogLayer() {
  return (
    <>
      <FogPlane depth={5} speed={0.5} />
      <FogPlane depth={15} speed={0.3} />
      <FogPlane depth={30} speed={0.2} />
    </>
  );
}
