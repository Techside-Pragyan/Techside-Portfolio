"use client";
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Points, PointMaterial, Html, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// Random points generator for particle core
function randomInSphere(numPoints: number, radius: number) {
  const points = new Float32Array(numPoints * 3);
  for (let i = 0; i < numPoints; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
}

function ParticleCore() {
  const ref = useRef<THREE.Points>(null);
  const sphere = useMemo(() => randomInSphere(1500, 1.8), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#0ea5e9" size={0.015} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

function HolographicCore() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  const labels = [
    { text: "Machine Learning", position: [1.8, 1.2, 0] },
    { text: "Deep Learning", position: [-1.5, -1.2, 1] },
    { text: "Python", position: [0, 2, -1] },
    { text: "Generative AI", position: [-1.8, 0.8, -0.5] },
    { text: "Data Science", position: [1.2, -1.5, -0.8] },
    { text: "Full Stack", position: [0.5, 0.5, 2] },
  ];

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={meshRef}>
        {/* Outer Wireframe Icosahedron */}
        <Icosahedron args={[1.5, 1]} wireframe>
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} wireframe />
        </Icosahedron>
        
        {/* Inner Solid Icosahedron */}
        <Icosahedron args={[1.2, 0]}>
          <meshStandardMaterial 
            color="#0ea5e9" 
            emissive="#3b82f6"
            emissiveIntensity={0.5}
            transparent 
            opacity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </Icosahedron>

        {/* Floating Labels */}
        {labels.map((label, i) => (
          <Html 
            key={i} 
            position={new THREE.Vector3(...label.position)}
            center
            distanceFactor={10}
            zIndexRange={[100, 0]}
            className="pointer-events-none"
          >
            <div className="px-3 py-1 bg-black/50 border border-primary/40 backdrop-blur-md rounded-full whitespace-nowrap text-cyan-400 font-mono text-[10px] tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              {label.text}
            </div>
          </Html>
        ))}
      </group>
    </Float>
  );
}

export default function HeroObject() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none sm:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#3b82f6" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#8b5cf6" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#0ea5e9" distance={10} />
        
        <HolographicCore />
        <ParticleCore />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.8} 
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
