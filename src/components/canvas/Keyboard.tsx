"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Html, PresentationControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { 
  SiJavascript, SiTypescript, SiHtml5, SiCss, SiReact, SiVuedotjs,
  SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiSass, SiWordpress,
  SiPython, SiDjango, SiPostgresql, SiMongodb, SiRedis, SiPrisma,
  SiGit, SiDocker, SiVercel, SiFigma, SiLinux, SiVite, SiAmazonaws
} from 'react-icons/si';

const techs = [
  // Row 1
  { icon: <SiJavascript size={22} />, name: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiTypescript size={22} />, name: 'TypeScript', color: '#3178C6' },
  { icon: <SiHtml5 size={22} />, name: 'HTML5', color: '#E34F26' },
  { icon: <SiCss size={22} />, name: 'CSS3', color: '#1572B6' },
  { icon: <SiReact size={22} />, name: 'React', color: '#61DAFB' },
  { icon: <SiVuedotjs size={22} />, name: 'Vue', color: '#4FC08D' },
  // Row 2
  { icon: <SiNextdotjs size={22} />, name: 'Next.js', color: '#000000' },
  { icon: <SiNodedotjs size={22} />, name: 'Node.js', color: '#339933' },
  { icon: <SiExpress size={22} />, name: 'Express', color: '#333333' },
  { icon: <SiTailwindcss size={22} />, name: 'Tailwind', color: '#06B6D4' },
  { icon: <SiSass size={22} />, name: 'Sass', color: '#CC6699' },
  { icon: <SiWordpress size={22} />, name: 'WordPress', color: '#21759B' },
  // Row 3
  { icon: <SiPython size={22} />, name: 'Python', color: '#3776AB' },
  { icon: <SiDjango size={22} />, name: 'Django', color: '#092E20' },
  { icon: <SiPostgresql size={22} />, name: 'PostgreSQL', color: '#4169E1' },
  { icon: <SiMongodb size={22} />, name: 'MongoDB', color: '#47A248' },
  { icon: <SiRedis size={22} />, name: 'Redis', color: '#DC382D' },
  { icon: <SiPrisma size={22} />, name: 'Prisma', color: '#2D3748' },
  // Row 4
  { icon: <SiGit size={22} />, name: 'Git', color: '#F05032' },
  { icon: <SiDocker size={22} />, name: 'Docker', color: '#2496ED' },
  { icon: <SiVercel size={22} />, name: 'Vercel', color: '#000000' },
  { icon: <SiFigma size={22} />, name: 'Figma', color: '#F24E1E' },
  { icon: <SiLinux size={22} />, name: 'Linux', color: '#FCC624' },
  { icon: <SiVite size={22} />, name: 'Vite', color: '#646CFF' },
];

function Keycap({ position, color, icon, name }: { position: [number, number, number], color: string, icon: React.ReactNode, name: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [autoPress, setAutoPress] = useState(false);

  // Ghost typing effect
  useEffect(() => {
    const randomInterval = Math.random() * 8000 + 4000;
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        setAutoPress(true);
        setTimeout(() => setAutoPress(false), 120);
      }
    }, randomInterval);
    return () => clearInterval(interval);
  }, []);

  const isDown = pressed || autoPress;

  useFrame((state, delta) => {
    if (meshRef.current) {
      // position[1] is the base height. We push it down by 0.15 when pressed.
      const targetY = isDown ? position[1] - 0.15 : position[1];
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, delta * 20);
    }
  });

  const isLightColor = ['#F7DF1E', '#FCC624', '#61DAFB'].includes(color);
  const iconColor = isLightColor ? '#000000' : '#ffffff';

  return (
    <group position={[position[0], 0, position[2]]}>
      <RoundedBox
        ref={meshRef}
        args={[0.95, 0.4, 0.95]} // Keycap dimensions
        radius={0.15}
        smoothness={4}
        position={[0, position[1], 0]}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); setPressed(false); document.body.style.cursor = 'default'; }}
        onPointerDown={(e) => { e.stopPropagation(); setPressed(true); }}
        onPointerUp={(e) => { e.stopPropagation(); setPressed(false); }}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial 
          color={color} 
          roughness={0.4} 
          metalness={0.1} 
        />
        
        {/* Render React Icon perfectly on the top face */}
        <Html
          transform
          position={[0, 0.201, 0]} // Just above the top face (0.4 / 2)
          rotation={[-Math.PI / 2, 0, 0]}
          occlude="blending"
          style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            color: iconColor,
          }}
        >
          {icon}
        </Html>

        {hovered && (
          <Html position={[0, 0.6, 0]} center className="pointer-events-none z-50">
            <div className="bg-[#111] backdrop-blur-md text-white text-[10px] font-mono px-3 py-1.5 rounded-lg border border-white/10 shadow-xl whitespace-nowrap">
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
  const cols = 6;
  const spacing = 1.05; // Gap between keys
  
  const startX = -((cols - 1) * spacing) / 2;
  const startZ = -((rows - 1) * spacing) / 2;

  return (
    <div className="w-full h-[600px] lg:h-[700px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 8, 10], fov: 35 }} shadows dpr={[1, 2]}>
        <color attach="background" args={['transparent']} />
        
        {/* Soft studio lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1.2} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#ffffff" />
        
        <Environment preset="city" />

        {/* This creates the exact isometric angle and allows slight dragging */}
        <PresentationControls
          global
          rotation={[-Math.PI / 6, Math.PI / 4, 0]}
          polar={[-Math.PI / 4, Math.PI / 6]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <group position={[0, -0.2, 0]}>
            {/* Keyboard Base Plate */}
            <RoundedBox
              args={[cols * spacing + 0.5, 0.4, rows * spacing + 0.5]}
              radius={0.15}
              smoothness={4}
              position={[0, -0.2, 0]}
              receiveShadow
              castShadow
            >
              <meshStandardMaterial color="#1a1a1a" roughness={0.8} metalness={0.2} />
            </RoundedBox>

            {/* Keycaps Grid */}
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

        {/* Soft shadow on the floor */}
        <ContactShadows position={[0, -0.8, 0]} opacity={0.4} scale={15} blur={2} far={4} />
      </Canvas>
    </div>
  );
}
