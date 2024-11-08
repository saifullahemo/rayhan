// components/ThreeModel.js
import React, { useRef, useEffect } from 'react';
import { extend, useFrame, useThree, Canvas } from '@react-three/fiber';
import * as THREE from 'three';

extend({ THREE });

const ThreeModel = () => {
  const mesh = useRef();

  const useCustomAnimation = (callback) => {
    const { clock } = useThree();

    useFrame(() => {
      if (callback) {
        callback(clock.elapsedTime);
      }
    });
  };

  useCustomAnimation((time) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
      mesh.current.material.uniforms.time.value = time;
    }
  });

  useEffect(() => {
    const { current } = mesh;

    const vertexShader = `
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      uniform float seed;

      const uint ieeeMantissa = 0x007FFFFFu;
      const uint ieeeOne = 0x3F800000u;

      uint hash(uint x) {
        x += (x << 10u);
        x ^= (x >> 6u);
        x += (x << 3u);
        x ^= (x >> 11u);
        x += (x << 15u);
        return x;
      }

      uint hash(uvec2 v) { return hash(v.x ^ hash(v.y)); }

      float hashNoise(vec2 xy) {
        uint m = hash(floatBitsToUint(xy));
        m &= ieeeMantissa;
        m |= ieeeOne;
        return uintBitsToFloat(m) - 1.0;
      }

      float pseudoRandom(float lower, float delta, in vec2 xy) {
        return lower + delta * hashNoise(xy);
      }

      vec3 pseudoRandomVec3(float lower, float upper, int index) {
        float delta = upper - lower;
        float x = pseudoRandom(lower, delta, vec2(index, 0));
        float y = pseudoRandom(lower, delta, vec2(index, 1));
        float z = pseudoRandom(lower, delta, vec2(index, 2));
        return vec3(x, y, z);
      }

      out vec3 vColor;

      void main() {
        const float scale = 1.0 / 64.0;
        vec3 position = pseudoRandomVec3(-1.0, +1.0, gl_VertexID / 3) + scale * pseudoRandomVec3(-1.0, +1.0, gl_VertexID);
        vec3 color = pseudoRandomVec3(0.25, 1.0, gl_VertexID / 3);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vColor = color;
      }
    `;

    const fragmentShader = `
      precision mediump float;

      in vec3 vColor;
      out vec4 fColor;

      void main() {
        fColor = vec4(vColor, 1);
      }
    `;


    const material = new THREE.RawShaderMaterial({
      uniforms: {
        seed: { value: 42 },
        time: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      glslVersion: THREE.GLSL3,
    });

    const triangleCount = 10000;
    const vertexCountPerTriangle = 3;
    const vertexCount = triangleCount * vertexCountPerTriangle;

    const geometry = new THREE.BufferGeometry();
    geometry.setDrawRange(0, vertexCount);

    const vertices = new Float32Array(vertexCount * 3);

    for (let i = 0; i < vertexCount; i++) {
      const scale = 1.0 / 64.0;
      const position = [
        pseudoRandom(-1.0, +1.0, i / 3) + scale * pseudoRandom(-1.0, +1.0, i),
        pseudoRandom(-1.0, +1.0, i / 3) + scale * pseudoRandom(-1.0, +1.0, i),
        pseudoRandom(-1.0, +1.0, i / 3) + scale * pseudoRandom(-1.0, +1.0, i),
      ];

      position.forEach((val, j) => {
        vertices[i * 3 + j] = val;
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    current.material = material;
    current.geometry = geometry;
  }, []);

  const hash = (x) => {
    x += x << 10;
    x ^= x >> 6;
    x += x << 3;
    x ^= x >> 11;
    x += x << 15;
    return x;
  };

  const hashNoise = (xy) => {
    let m = hash(new Float32Array(xy.buffer))[0];

    const ieeeMantissa = 0x007FFFFF;
    const ieeeOne = 0x3F800000;

    m &= ieeeMantissa;
    m |= ieeeOne;

    return new Float32Array(new Uint32Array([m]).buffer)[0] - 1.0;
  };

  const pseudoRandom = (lower, delta, xy) => {
    return lower + delta * hashNoise(xy);
  };

  const pseudoRandomVec3 = (lower, upper, index) => {
    const delta = upper - lower;
    const x = pseudoRandom(lower, delta, new Float32Array([index, 0]));
    const y = pseudoRandom(lower, delta, new Float32Array([index, 1]));
    const z = pseudoRandom(lower, delta, new Float32Array([index, 2]));
    return new THREE.Vector3(x, y, z);
  };

  return <mesh ref={mesh} />;
};

const App = () => {
  return (
    <Canvas>
      <ThreeModel />
    </Canvas>
  );
};

export default App;
