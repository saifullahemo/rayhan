// components/Cube.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CubeProps {
  rotationSpeedX?: number;
  rotationSpeedY?: number;
  scale?: number; // New scale prop for cube size
}


const Cube: React.FC<CubeProps> = ({ rotationSpeedX = 0.01, rotationSpeedY = 0.01, scale = 1 }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.scale.set(scale, scale, scale); // Apply the scale here
    scene.add(cube);


    
    const planeGeometry = new THREE.PlaneGeometry(5, 5);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1.5;
    plane.receiveShadow = true;
    scene.add(plane);

    // Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Increase to full white
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Brighter directional light
directionalLight.position.set(3, 3, 3);
directionalLight.castShadow = true;
scene.add(directionalLight);


    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += rotationSpeedX;
      cube.rotation.y += rotationSpeedY;

      if (mountRef.current) {
        const { clientWidth, clientHeight } = mountRef.current;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [rotationSpeedX, rotationSpeedY, scale]);

  return (
    <div ref={mountRef} style={{ width: '500px', height: '500px' }} />
  );
};

export default Cube;
