'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Html } from '@react-three/drei';
import { Suspense, useRef, useState, useEffect } from 'react';
import FogLayer from './FogLayer';
import Interactive from './InteractiveScene';
import { EffectComposer, DepthOfField, Bloom, Vignette } from '@react-three/postprocessing';
import { useFrame } from '@react-three/fiber';

function Hotspot({ position, onClick, label }: { position: [number, number, number]; onClick?: () => void; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <mesh
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color={hovered ? 'orange' : 'red'} />
      {hovered && (
        <Html distanceFactor={10}>
          <div style={{ background: 'white', padding: '4px 8px', borderRadius: '4px', color: 'black' }}>
            {label}
          </div>
        </Html>
      )}
    </mesh>
  );
}

function MountainModel({ rotationY, onHotspotClick }: { rotationY: number; onHotspotClick?: (label: string) => void }) {
  const { scene } = useGLTF('/models/mountain.glb');
  const [hovered, setHovered] = useState(false);
  const ref = useRef<any>();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += hovered ? 0.002 : 0.001; // slow rotation, faster on hover
    }
  });

  return (
    <group ref={ref} rotation={[0, rotationY, 0]}>
      <primitive
        object={scene}
        scale={10}
        position={[0, -10, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
      {/* Example hotspots */}
      <Hotspot position={[5, 0, 0]} onClick={() => onHotspotClick && onHotspotClick('Peak')} label="Mountain Peak" />
      {/* <Hotspot position={[-5, -5, 2]} onClick={() => onHotspotClick && onHotspotClick('Cave')} label="Hidden Cave" /> */}
    </group>
  );
}

export default function Mountains() {
  const [rotationY, setRotationY] = useState(0);
  const [info, setInfo] = useState<string | null>(null);
  const groupRef = useRef<any>(null);
  const fogRef = useRef<any>(null);

  // Prevent page scroll when wheel is used over the canvas to enable zooming the mountain
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Scroll handler to move the mountain group down and fade fog/clouds
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);

      if (groupRef.current) {
        groupRef.current.position.y = -progress * 30; // move down up to 30 units
      }
      if (fogRef.current) {
        fogRef.current.material.opacity = 1 - progress; // fade out fog
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleHotspotClick = (label: string) => {
    setInfo(`You clicked on: ${label}`);
  };

  return (
    <>
      <Canvas camera={{ position: [0, 10, 40], fov: 35 }} onWheel={handleWheel}>
        {/* Lighting */}
        {/* <ambientLight intensity={0.15} color="#a0a0a0" />
        <directionalLight position={[20, 30, 10]} intensity={0.6} color="#d0d0d0" />
        <directionalLight position={[-20, -10, -10]} intensity={0.1} color="#607080" /> */}
        <Environment preset="sunset" />

        {/* Scene */}
        <Suspense fallback={null}>
          <Interactive>
            <group ref={groupRef}>
              <MountainModel rotationY={rotationY} onHotspotClick={handleHotspotClick} />
              {/* <group position={[30, 0, 0]}>
                <MountainModel rotationY={rotationY} onHotspotClick={handleHotspotClick} />
              </group> */}
            </group>
            <FogLayer />
          </Interactive>
        </Suspense>

        {/* Post-processing Effects */}
        <EffectComposer>
          <DepthOfField focusDistance={0.02} focalLength={0.05} bokehScale={4} />
          <Bloom intensity={0.6} luminanceThreshold={0.2} luminanceSmoothing={0.1} />
          <Vignette eskil={false} offset={0.4} darkness={0.6} />
        </EffectComposer>

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={20}
          maxDistance={50}
          minPolarAngle={Math.PI / 4}  // limit vertical rotation
          maxPolarAngle={Math.PI / 2}  // limit vertical rotation
          maxAzimuthAngle={Math.PI / 4} // limit horizontal rotation
          minAzimuthAngle={-Math.PI / 4} // limit horizontal rotation
        />
      </Canvas>
      {info && (
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            pointerEvents: 'none',
          }}
        >
          {info}
        </div>
      )}
    </>
  );
}
