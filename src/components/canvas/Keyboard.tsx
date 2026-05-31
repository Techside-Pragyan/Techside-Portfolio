"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Html, PresentationControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiMongodb, SiPytorch, SiScikitlearn, SiDocker,
  SiPython, SiTensorflow, SiOpencv, SiPostgresql,
  SiGit, SiAmazonwebservices, SiLinux, SiVite
} from 'react-icons/si';

const techs = [
  { icon: <SiReact size={24} />, name: 'React', color: '#61DAFB' },
  { icon: <SiNextdotjs size={24} />, name: 'Next.js', color: '#ffffff' },
  { icon: <SiTailwindcss size={24} />, name: 'Tailwind', color: '#06B6D4' },
  { icon: <SiNodedotjs size={24} />, name: 'Node.js', color: '#339933' },
  
  { icon: <SiPython size={24} />, name: 'Python', color: '#3776AB' },
  { icon: <SiTensorflow size={24} />, name: 'TensorFlow', color: '#FF6F00' },
  { icon: <SiPytorch size={24} />, name: 'PyTorch', color: '#EE4C2C' },
  { icon: <SiScikitlearn size={24} />, name: 'Scikit', color: '#F7931E' },
  
  { icon: <SiMongodb size={24} />, name: 'MongoDB', color: '#47A248' },
  { icon: <SiPostgresql size={24} />, name: 'SQL', color: '#4169E1' },
  { icon: <SiOpencv size={24} />, name: 'OpenCV', color: '#5C3EE8' },
  { icon: <SiDocker size={24} />, name: 'Docker', color: '#2496ED' },
  
  { icon: <SiGit size={24} />, name: 'Git', color: '#F05032' },
  { icon: <SiAmazonwebservices size={24} />, name: 'AWS', color: '#232F3E' },
  { icon: <SiLinux size={24} />, name: 'Linux', color: '#FCC624' },
  { icon: <SiVite size={24} />, name: 'Vite', color: '#646CFF' },
];

function Keycap({ position, color, icon, name }: { position: [number, number, number], color: string, icon: React.ReactNode, name: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [autoPress, setAutoPress] = useState(false);

  // Random auto-press effect like someone is typing
  useEffect(() => {
    const randomInterval = Math.random() * 10000 + 5000;
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setAutoPress(true);
        setTimeout(() => setAutoPress(false), 150);
      }
    }, randomInterval);
    return () => clearInterval(interval);
  }, []);

  const isDown = pressed || autoPress;

  useFrame((state, delta) => {
    if (meshRef.current) {
      const targetY = isDown ? position[1] - 0.2 : (hovered ? position[1] - 0.05 : position[1]);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, delta * 15);
    }
  });

  return (
    <group position={[position[0], 0, position[2]]}>
      <RoundedBox
        ref={meshRef}
        args={[1, 0.5, 1]} // Width, Height, Depth
        radius={0.1}
        smoothness={4}
        position={[0, position[1], 0]}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); setPressed(false); document.body.style.cursor = 'default'; }}
        onPointerDown={(e) => { e.stopPropagation(); setPressed(true); }}
        onPointerUp={(e) => { e.stopPropagation(); setPressed(false); }}
      >
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.1} />
        
        {/* Render React Icon using HTML on top of the keycap */}
        <Html
          transform
          position={[0, 0.26, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          occlude
          style={{
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            color: color === '#ffffff' ? '#000000' : '#ffffff',
          }}
        >
          <div className="flex flex-col items-center justify-center gap-1">
            {icon}
          </div>
        </Html>

        {hovered && (
          <Html position={[0, 0.8, 0]} center className="pointer-events-none">
            <div className="bg-black/80 backdrop-blur-md text-white text-[10px] font-mono px-2 py-1 rounded-md border border-white/20 whitespace-nowrap">
              {name}
            </div>
          </Html>
        )}
      </RoundedBox>
    </group>
  );
}

export default function Keyboard() {
  const rows = 4;
  const cols = 4;
  const spacing = 1.2;
  
  // Calculate starting offsets to center the grid
  const startX = -((cols - 1) * spacing) / 2;
  const startZ = -((rows - 1) * spacing) / 2;

  return (
    <div className="w-full h-[600px] lg:h-[700px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 8, 8], fov: 45 }} shadows>
        <color attach="background" args={['transparent']} />
        
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 15, 10]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color="#3b82f6" />
        
        <Environment preset="city" />

        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[-Math.PI / 6, Math.PI / 4, 0]}
          polar={[-Math.PI / 3, Math.PI / 8]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <group position={[0, -0.5, 0]}>
            {/* Keyboard Base */}
            <RoundedBox
              args={[cols * spacing + 0.6, 0.6, rows * spacing + 0.6]}
              radius={0.2}
              smoothness={4}
              position={[0, -0.3, 0]}
              receiveShadow
            >
              <meshStandardMaterial color="#111111" roughness={0.7} metalness={0.2} />
            </RoundedBox>

            {/* Keycaps */}
            {techs.map((tech, index) => {
              const row = Math.floor(index / cols);
              const col = index % cols;
              const x = startX + col * spacing;
              const z = startZ + row * spacing;
              
              return (
                <Keycap 
                  key={tech.name} 
                  position={[x, 0.25, z]} 
                  color={tech.color} 
                  icon={tech.icon}
                  name={tech.name}
                />
              );
            })}
          </group>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
