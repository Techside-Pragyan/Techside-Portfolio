"use client";
import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, RigidBody, RapierRigidBody } from '@react-three/rapier';
import { Environment, Html, Sphere, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { 
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, 
  SiOpencv, SiFastapi, SiPostgresql, SiDocker, SiGit, SiGithub, SiLinux 
} from 'react-icons/si';
import { BrainCircuit, Cpu, Bot, Blocks } from 'lucide-react';

const skills = [
  { id: 1, name: 'Python', color: '#3776AB', icon: <SiPython size={40} /> },
  { id: 2, name: 'TensorFlow', color: '#FF6F00', icon: <SiTensorflow size={40} /> },
  { id: 3, name: 'PyTorch', color: '#EE4C2C', icon: <SiPytorch size={40} /> },
  { id: 4, name: 'Scikit-Learn', color: '#F7931E', icon: <SiScikitlearn size={40} /> },
  { id: 5, name: 'Pandas', color: '#150458', icon: <SiPandas size={40} /> },
  { id: 6, name: 'NumPy', color: '#013243', icon: <SiNumpy size={40} /> },
  { id: 7, name: 'OpenCV', color: '#5C3EE8', icon: <SiOpencv size={40} /> },
  { id: 8, name: 'LangChain', color: '#8b5cf6', icon: <Blocks size={40} /> },
  { id: 9, name: 'FastAPI', color: '#009688', icon: <SiFastapi size={40} /> },
  { id: 10, name: 'SQL', color: '#4169E1', icon: <SiPostgresql size={40} /> },
  { id: 11, name: 'Docker', color: '#2496ED', icon: <SiDocker size={40} /> },
  { id: 12, name: 'Git', color: '#F05032', icon: <SiGit size={40} /> },
  { id: 13, name: 'GitHub', color: '#ffffff', icon: <SiGithub size={40} /> },
  { id: 14, name: 'Linux', color: '#FCC624', icon: <SiLinux size={40} /> },
  { id: 15, name: 'Machine Learning', color: '#10b981', icon: <BrainCircuit size={40} /> },
  { id: 16, name: 'Deep Learning', color: '#ec4899', icon: <Cpu size={40} /> },
  { id: 17, name: 'NLP', color: '#6366f1', icon: <Bot size={40} /> },
];

function GlowingGlassSphere({ data, radius }: any) {
  const body = useRef<RapierRigidBody>(null);
  const [hovered, setHovered] = useState(false);

  // Random starting position scattered around the center
  const initialPos = useMemo(() => {
    const r = 6 + Math.random() * 4;
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
    
    // Gentle gravity pulling to center
    vec.normalize().multiplyScalar(0.02);
    
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
      restitution={0.9} 
      linearDamping={0.6} 
      angularDamping={0.6}
      friction={0.1}
    >
      <Sphere 
        args={[radius, 32, 32]}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'grab'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'default'; }}
        onPointerDown={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'grabbing';
          if (body.current) {
            // Give a playful toss when clicked
            body.current.applyImpulse({ x: (Math.random() - 0.5) * 5, y: 5, z: (Math.random() - 0.5) * 5 }, true);
          }
        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'grab';
        }}
      >
        {/* Cyberpunk Glowing Glass Material */}
        <meshPhysicalMaterial 
          color="#0f172a" 
          emissive={data.color}
          emissiveIntensity={hovered ? 1.5 : 0.4}
          roughness={0.1} 
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={hovered}
        />
        
        {/* Holographic Logo inside */}
        <Html center zIndexRange={[100, 0]} className="pointer-events-none">
          <div 
            className="flex flex-col items-center justify-center transition-all duration-300"
            style={{ 
              color: hovered ? '#ffffff' : data.color,
              filter: hovered ? `drop-shadow(0 0 15px ${data.color})` : 'none',
              transform: hovered ? 'scale(1.2)' : 'scale(1)'
            }}
          >
            {data.icon}
            <div className={`mt-2 font-bold text-xs uppercase tracking-widest bg-black/50 backdrop-blur-md px-2 py-1 rounded-md border transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} style={{ borderColor: data.color }}>
              {data.name}
            </div>
          </div>
        </Html>
      </Sphere>
    </RigidBody>
  );
}

function PointerFollower() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    // Cinematic camera drift based on mouse
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 3, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 3, 0.02);
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
    <div className="w-full h-full absolute inset-0 cursor-default">
      <Canvas camera={{ position: [0, 0, 25], fov: 40 }} dpr={[1, 2]}>
        <color attach="background" args={['transparent']} />
        
        {/* Space Atmosphere matching the rest of the site */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
        
        {/* Neon Cyber Lighting */}
        <ambientLight intensity={0.2} color="#ffffff" />
        <directionalLight position={[10, 20, 15]} intensity={2} color="#60a5fa" />
        <directionalLight position={[-10, -20, -15]} intensity={2} color="#8b5cf6" />
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#3b82f6" distance={30} />

        {/* Post Processing Neon Glow */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
        </EffectComposer>

        <Environment preset="city" />

        <PointerFollower />

        <Physics gravity={[0, 0, 0]}>
          {displaySkills.map((skill, index) => {
            const radius = index < 5 ? 1.6 : 1.3;
            return <GlowingGlassSphere key={skill.id} data={skill} radius={radius} />;
          })}
        </Physics>
      </Canvas>
    </div>
  );
}
