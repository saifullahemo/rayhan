'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function InteractiveScene({ children }: { children: React.ReactNode }) {
  const group = useRef<any>();
  useFrame(({ clock }) => {
    if (group.current) {
      // Removed mouse position based rotation to avoid conflict with OrbitControls
      group.current.position.y = Math.sin(clock.elapsedTime * 0.2) * 0.3; // gentle up/down float
    }
  });
  return <group ref={group}>{children}</group>;
}
