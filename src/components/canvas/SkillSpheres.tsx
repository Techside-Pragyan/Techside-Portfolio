"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  { name: 'AI / ML', color: '#3b82f6', position: [-3, 1.5, 0] as [number, number, number] },
  { name: 'Python', color: '#facc15', position: [3, 2, -1] as [number, number, number] },
  { name: 'TensorFlow', color: '#f97316', position: [0, 3, -2] as [number, number, number] },
  { name: 'OpenCV', color: '#10b981', position: [-2, -2, 1] as [number, number, number] },
  { name: 'SQL', color: '#8b5cf6', position: [2, -1.5, 2] as [number, number, number] },
];

function SkillSphere({ position, color, name }: { position: [number, number, number], color: string, name: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} />
      </mesh>
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.4}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000"
      >
        {name}
      </Text>
    </Float>
  );
}

export default function SkillSpheres() {
  return (
    <div className="w-full h-full min-h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        
        <group>
          {skills.map((skill, index) => (
            <SkillSphere key={index} position={skill.position} color={skill.color} name={skill.name} />
          ))}
        </group>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
