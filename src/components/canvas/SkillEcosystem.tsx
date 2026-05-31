"use client";
import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, RigidBody, RapierRigidBody } from '@react-three/rapier';
import { Environment, Html, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { 
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, 
  SiOpencv, SiFastapi, SiPostgresql, SiDocker, SiGit, SiGithub, SiLinux 
} from 'react-icons/si';
import { BrainCircuit, Cpu, Bot, Blocks } from 'lucide-react';

// Selected minimal skills list as requested
const skills = [
  { id: 1, name: 'Python', icon: <SiPython size={60} /> },
  { id: 2, name: 'TensorFlow', icon: <SiTensorflow size={60} /> },
  { id: 3, name: 'PyTorch', icon: <SiPytorch size={60} /> },
  { id: 4, name: 'Scikit-Learn', icon: <SiScikitlearn size={60} /> },
  { id: 5, name: 'Pandas', icon: <SiPandas size={60} /> },
  { id: 6, name: 'NumPy', icon: <SiNumpy size={60} /> },
  { id: 7, name: 'OpenCV', icon: <SiOpencv size={60} /> },
  { id: 8, name: 'LangChain', icon: <Blocks size={60} /> },
  { id: 9, name: 'FastAPI', icon: <SiFastapi size={60} /> },
  { id: 10, name: 'SQL', icon: <SiPostgresql size={60} /> },
  { id: 11, name: 'Docker', icon: <SiDocker size={60} /> },
  { id: 12, name: 'Git', icon: <SiGit size={60} /> },
  { id: 13, name: 'GitHub', icon: <SiGithub size={60} /> },
  { id: 14, name: 'Linux', icon: <SiLinux size={60} /> },
  { id: 15, name: 'Machine Learning', icon: <BrainCircuit size={60} /> },
  { id: 16, name: 'Deep Learning', icon: <Cpu size={60} /> },
  { id: 17, name: 'NLP', icon: <Bot size={60} /> },
  { id: 18, name: 'Generative AI', icon: <SparklesIcon /> },
  { id: 19, name: 'Hugging Face', icon: <EmojiIcon /> }
];

// Fallback minimal icons
function SparklesIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
  );
}

function EmojiIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
  );
}

function SkillSphere({ data, radius }: any) {
  const body = useRef<RapierRigidBody>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  // Random starting position scattered around the center
  const initialPos = useMemo(() => {
    const r = 5 + Math.random() * 5;
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    return [
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    ];
  }, []);

  useFrame((state) => {
    if (!body.current) return;
    
    const pos = body.current.translation();
    const vec = new THREE.Vector3(-pos.x, -pos.y, -pos.z);
    
    // Very gentle cluster gravity
    vec.normalize().multiplyScalar(0.015);
    
    // Organic noise drift
    vec.x += (Math.sin(state.clock.elapsedTime * 0.5 + data.id) * 0.005);
    vec.y += (Math.cos(state.clock.elapsedTime * 0.4 + data.id) * 0.005);
    vec.z += (Math.sin(state.clock.elapsedTime * 0.6 + data.id) * 0.005);

    body.current.applyImpulse(vec, true);
  });

  return (
    <RigidBody 
      ref={body} 
      position={initialPos as [number, number, number]} 
      colliders="ball" 
      restitution={0.6} // Soft bounce
      linearDamping={0.8} // High damping for slow drifting
      angularDamping={0.8} // Slow rotation
      friction={0.2}
    >
      <Sphere args={[radius, 64, 64]} castShadow receiveShadow>
        <meshPhysicalMaterial 
          ref={materialRef}
          color="#ffffff" 
          roughness={0.1} 
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
        
        {/* Render logo tightly mapped to front of sphere */}
        <Html transform position={[0, 0, radius + 0.01]} scale={0.3} pointerEvents="none" zIndexRange={[0, 0]}>
          <div className="text-black flex flex-col items-center justify-center pointer-events-none opacity-80 mix-blend-multiply">
            {data.icon}
          </div>
        </Html>
      </Sphere>
    </RigidBody>
  );
}

function PointerFollower() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    // Tiny subtle cinematic camera drift based on mouse
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 1.5, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 1.5, 0.02);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function SkillEcosystem() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displaySkills = isMobile ? skills.slice(0, 10) : skills;

  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 22], fov: 35 }} shadows dpr={[1, 2]}>
        <color attach="background" args={['transparent']} />
        
        {/* Premium Studio Lighting */}
        <ambientLight intensity={0.4} color="#ffffff" />
        <directionalLight position={[10, 20, 10]} intensity={2.5} castShadow color="#ffffff" shadow-bias={-0.0001} />
        <directionalLight position={[-15, 0, -10]} intensity={1.5} color="#e0f2fe" />
        <directionalLight position={[0, -10, 5]} intensity={0.8} color="#ffffff" />
        <spotLight position={[0, 15, 0]} intensity={2} angle={0.5} penumbra={1} color="#ffffff" />

        <Environment preset="studio" />

        <PointerFollower />

        <Physics gravity={[0, 0, 0]}>
          {displaySkills.map((skill, index) => {
            // Mix of slightly larger central spheres and smaller peripheral spheres
            const radius = index < 6 ? 1.4 : 1.1;
            return <SkillSphere key={skill.id} data={skill} radius={radius} />;
          })}
        </Physics>
      </Canvas>
    </div>
  );
}
