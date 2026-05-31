"use client";
import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Html, Sphere, Line, Stars, Float } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { 
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, 
  SiOpencv, SiFastapi, SiPostgresql, SiDocker, SiGit, SiGithub, SiLinux 
} from 'react-icons/si';
import { BrainCircuit, Cpu, Bot, Blocks } from 'lucide-react';

const skillsData = [
  { id: 1, name: 'Python', color: '#3b82f6', icon: <SiPython size={20} /> },
  { id: 2, name: 'TensorFlow', color: '#f59e0b', icon: <SiTensorflow size={20} /> },
  { id: 3, name: 'PyTorch', color: '#ef4444', icon: <SiPytorch size={20} /> },
  { id: 4, name: 'Scikit-Learn', color: '#f97316', icon: <SiScikitlearn size={20} /> },
  { id: 5, name: 'Pandas', color: '#8b5cf6', icon: <SiPandas size={20} /> },
  { id: 6, name: 'NumPy', color: '#0ea5e9', icon: <SiNumpy size={20} /> },
  { id: 7, name: 'OpenCV', color: '#10b981', icon: <SiOpencv size={20} /> },
  { id: 8, name: 'LangChain', color: '#d946ef', icon: <Blocks size={20} /> },
  { id: 9, name: 'FastAPI', color: '#14b8a6', icon: <SiFastapi size={20} /> },
  { id: 10, name: 'SQL', color: '#3b82f6', icon: <SiPostgresql size={20} /> },
  { id: 11, name: 'Docker', color: '#0ea5e9', icon: <SiDocker size={20} /> },
  { id: 12, name: 'Git', color: '#f43f5e', icon: <SiGit size={20} /> },
  { id: 13, name: 'GitHub', color: '#ffffff', icon: <SiGithub size={20} /> },
  { id: 14, name: 'Linux', color: '#eab308', icon: <SiLinux size={20} /> },
  { id: 15, name: 'Machine Learning', color: '#10b981', icon: <BrainCircuit size={20} /> },
  { id: 16, name: 'Deep Learning', color: '#ec4899', icon: <Cpu size={20} /> },
  { id: 17, name: 'NLP', color: '#8b5cf6', icon: <Bot size={20} /> },
];

// Generate 3D positions using Fibonacci sphere distribution for perfect spacing
function generateSpherePositions(count: number, radius: number) {
  const positions = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; 
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    positions.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }
  return positions;
}

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Distribute skills evenly on a 3D sphere
  const radius = 6;
  const positions = useMemo(() => generateSpherePositions(skillsData.length, radius), []);

  // Compute connections (edges) between nodes that are close to each other
  const edges = useMemo(() => {
    const lines = [];
    const maxDistance = radius * 1.5;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dist = positions[i].distanceTo(positions[j]);
        if (dist < maxDistance) {
          lines.push({ source: i, target: j, p1: positions[i], p2: positions[j] });
        }
      }
    }
    return lines;
  }, [positions, radius]);

  useFrame((state) => {
    if (groupRef.current) {
      // Slowly rotate the entire network
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Draw Edges */}
      {edges.map((edge, idx) => {
        const isHovered = hoveredNode === edge.source || hoveredNode === edge.target;
        const color = isHovered ? '#60a5fa' : '#334155';
        const opacity = isHovered ? 0.8 : 0.2;
        const lineWidth = isHovered ? 2 : 1;

        return (
          <Line
            key={idx}
            points={[edge.p1, edge.p2]}
            color={color}
            lineWidth={lineWidth}
            transparent
            opacity={opacity}
          />
        );
      })}

      {/* Draw Nodes */}
      {skillsData.map((skill, i) => {
        const pos = positions[i];
        const isHovered = hoveredNode === i;
        
        return (
          <group 
            key={skill.id} 
            position={[pos.x, pos.y, pos.z]}
            onPointerOver={(e) => { e.stopPropagation(); setHoveredNode(i); document.body.style.cursor = 'pointer'; }}
            onPointerOut={(e) => { e.stopPropagation(); setHoveredNode(null); document.body.style.cursor = 'default'; }}
          >
            {/* The glowing node sphere */}
            <Sphere args={[isHovered ? 0.5 : 0.3, 32, 32]}>
              <meshStandardMaterial 
                color={isHovered ? '#ffffff' : skill.color}
                emissive={skill.color}
                emissiveIntensity={isHovered ? 2 : 0.5}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>

            {/* Glowing Aura when hovered */}
            {isHovered && (
              <Sphere args={[0.8, 16, 16]}>
                <meshBasicMaterial color={skill.color} transparent opacity={0.2} wireframe />
              </Sphere>
            )}

            {/* Premium HTML Tooltip */}
            <Html center zIndexRange={[100, 0]} className="pointer-events-none transition-all duration-300">
              <div 
                className="flex items-center gap-2 transition-all duration-300"
                style={{ 
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'translateY(-30px) scale(1)' : 'translateY(0px) scale(0.5)',
                }}
              >
                <div 
                  className="bg-black/80 backdrop-blur-xl border px-4 py-2 rounded-xl flex items-center gap-3 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                  style={{ borderColor: `${skill.color}50` }}
                >
                  <div style={{ color: skill.color }}>{skill.icon}</div>
                  <span className="text-white font-bold tracking-wide whitespace-nowrap">{skill.name}</span>
                </div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

function PointerCamera() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 2, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 2, 0.05);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function SkillEcosystem() {
  return (
    <div className="w-full h-full absolute inset-0 bg-transparent">
      <Canvas camera={{ position: [0, 0, 16], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={['#020205']} />
        
        {/* Cinematic Deep Space Atmosphere */}
        <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade speed={1.5} />
        
        <ambientLight intensity={0.2} color="#ffffff" />
        <directionalLight position={[10, 20, 10]} intensity={2} color="#60a5fa" />
        <directionalLight position={[-10, -20, -10]} intensity={1} color="#8b5cf6" />
        
        {/* Post Processing for the Neon Network Edges */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
        </EffectComposer>

        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <NeuralNetwork />
        </Float>
        
        <PointerCamera />
      </Canvas>
    </div>
  );
}
