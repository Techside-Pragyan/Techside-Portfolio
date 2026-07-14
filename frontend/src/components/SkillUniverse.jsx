import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics, useSphere, usePlane } from '@react-three/cannon';
import { Environment, Text, Float } from '@react-three/drei';

// A single interactive skill node
function SkillNode({ position, label, color }) {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position,
    args: [1],
    linearDamping: 0.5,
    angularDamping: 0.5,
  }));

  const handleClick = () => {
    // Give it a little bounce on click
    api.applyImpulse([0, 5, 0], [0, 0, 0]);
  };

  return (
    <mesh ref={ref} onClick={handleClick} castShadow receiveShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} envMapIntensity={1} />
      <Text
        position={[0, 0, 1.1]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {label}
      </Text>
    </mesh>
  );
}

// Invisible boundaries so spheres don't fall forever
function Boundaries() {
  // Floor
  usePlane(() => ({ position: [0, -5, 0], rotation: [-Math.PI / 2, 0, 0] }));
  // Ceiling
  usePlane(() => ({ position: [0, 5, 0], rotation: [Math.PI / 2, 0, 0] }));
  // Walls
  usePlane(() => ({ position: [-5, 0, 0], rotation: [0, Math.PI / 2, 0] }));
  usePlane(() => ({ position: [5, 0, 0], rotation: [0, -Math.PI / 2, 0] }));
  usePlane(() => ({ position: [0, 0, -5], rotation: [0, 0, 0] }));
  usePlane(() => ({ position: [0, 0, 5], rotation: [0, Math.PI, 0] }));
  
  return null;
}

export default function SkillUniverse() {
  const skills = [
    { label: 'React', color: '#61dafb', position: [-2, 2, 0] },
    { label: 'Python', color: '#ffd43b', position: [2, 1, 0] },
    { label: 'MongoDB', color: '#47a248', position: [0, 3, -1] },
    { label: 'Node.js', color: '#339933', position: [-1, -1, 1] },
    { label: 'Express', color: '#ffffff', position: [1, -2, 0] },
    { label: 'C++', color: '#00599c', position: [0, 0, 2] },
  ];

  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
      <Environment preset="city" />
      
      <Physics gravity={[0, 0, 0]}>
        <Boundaries />
        {skills.map((skill, index) => (
          <SkillNode key={index} {...skill} />
        ))}
      </Physics>
      
      {/* Rotate the whole scene slowly to feel like a universe */}
      {/* OrbitControls could also be added here for dragging */}
    </Canvas>
  );
}
