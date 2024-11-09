import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { ConvexGeometry } from "three/addons/geometries/ConvexGeometry.js";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

interface SceneProps {
  opacity: number; // Specify type here
}

const Scene: React.FC<SceneProps> = ({ opacity }) => {
  const group = useRef<THREE.Group>();
  const camera = useRef<THREE.PerspectiveCamera>();
  const scene = useRef<THREE.Scene>();
  const renderer = useRef<THREE.WebGLRenderer>();
  const controls = useRef<OrbitControls>();
  // const canvasContainer = useRef<HTMLDivElement>();
  const canvasContainer = useRef<HTMLDivElement | null>(null); // Updated type


  useEffect(() => {
    const init = () => {
      scene.current = new THREE.Scene();

      renderer.current = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.current.setPixelRatio(window.devicePixelRatio);
      renderer.current.setSize(400, 400);
      canvasContainer.current?.appendChild(renderer.current.domElement);

      camera.current = new THREE.PerspectiveCamera(40, 1, 1, 1000);
      camera.current.position.set(15, 20, 30);
      scene.current.add(camera.current);

      controls.current = new OrbitControls(
        camera.current,
        renderer.current.domElement
      );
      controls.current.minDistance = 20;
      controls.current.maxDistance = 50;
      controls.current.maxPolarAngle = Math.PI / 2;
      controls.current.enableDamping = true;
      controls.current.dampingFactor = 0.25;
      controls.current.screenSpacePanning = false;
      controls.current.maxPolarAngle = Math.PI / 2;

      scene.current.add(new THREE.AmbientLight(0x666666));

      const light = new THREE.PointLight(0xffffff, 3, 0, 0);
      camera.current.add(light);

      const loader = new THREE.TextureLoader();
      const texture = loader.load("/texture/disc.png");
      texture.encoding = THREE.sRGBEncoding;

      group.current = new THREE.Group();
      scene.current.add(group.current);

      let dodecahedronGeometry: THREE.BufferGeometry =
        new THREE.DodecahedronGeometry(10);
      dodecahedronGeometry.deleteAttribute("normal");
      dodecahedronGeometry.deleteAttribute("uv");
      dodecahedronGeometry =
        BufferGeometryUtils.mergeVertices(dodecahedronGeometry);

      const vertices = [];
      const positionAttribute = dodecahedronGeometry.getAttribute("position");

      for (let i = 0; i < positionAttribute.count; i++) {
        const vertex = new THREE.Vector3();
        vertex.fromBufferAttribute(positionAttribute, i);
        vertices.push(vertex);
      }

      const pointsMaterial = new THREE.PointsMaterial({
        color: 0x666666,
        map: texture,
        size: 0,
        alphaTest: 0.5,
      });

      const pointsGeometry = new THREE.BufferGeometry().setFromPoints(vertices);

      const points = new THREE.Points(pointsGeometry, pointsMaterial);
      group.current.add(points);

      const meshMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        opacity: opacity, // Use opacity prop here
        side: THREE.DoubleSide,
        transparent: true,
      });

      const meshGeometry = new ConvexGeometry(vertices);

      const mesh = new THREE.Mesh(meshGeometry, meshMaterial);
      group.current.add(mesh);

      window.addEventListener("resize", onWindowResize);
    };

    const onWindowResize = () => {
      if (camera.current) {
        camera.current.aspect = 1;
        camera.current.updateProjectionMatrix();
      }
      if (renderer.current) {
        renderer.current.setSize(400, 400);
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (group.current) {
        group.current.rotation.y += 0.003;
      }
      render();
    };

    const render = () => {
      if (renderer.current && scene.current && camera.current) {
        renderer.current.render(scene.current, camera.current);
      }
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (canvasContainer.current && renderer.current) {
        canvasContainer.current.removeChild(renderer.current.domElement);
      }
    };
  }, [opacity]);

  return <div id="canvas-container" ref={canvasContainer}></div>;
};

export default Scene;
