"use client"; // Force Fast Refresh
import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Sphere, Line, Stars, Float, Icosahedron } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { 
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, 
  SiOpencv, SiFastapi, SiPostgresql, SiDocker, SiGit, SiGithub, SiLinux 
} from 'react-icons/si';
import { BrainCircuit, Cpu, Bot, Blocks } from 'lucide-react';

const skillsData = [
  { id: 1, name: 'Python', color: '#3b82f6', icon: <SiPython size={24} />, prof: '98%', exp: '4+ Years', projects: '15+' },
  { id: 2, name: 'TensorFlow', color: '#f59e0b', icon: <SiTensorflow size={24} />, prof: '92%', exp: '3+ Years', projects: '8+' },
  { id: 3, name: 'PyTorch', color: '#ef4444', icon: <SiPytorch size={24} />, prof: '90%', exp: '2+ Years', projects: '5+' },
  { id: 4, name: 'Scikit-Learn', color: '#f97316', icon: <SiScikitlearn size={24} />, prof: '95%', exp: '3+ Years', projects: '10+' },
  { id: 5, name: 'Pandas', color: '#8b5cf6', icon: <SiPandas size={24} />, prof: '96%', exp: '4+ Years', projects: '20+' },
  { id: 6, name: 'NumPy', color: '#0ea5e9', icon: <SiNumpy size={24} />, prof: '95%', exp: '4+ Years', projects: '20+' },
  { id: 7, name: 'OpenCV', color: '#10b981', icon: <SiOpencv size={24} />, prof: '85%', exp: '2+ Years', projects: '6+' },
  { id: 8, name: 'LangChain', color: '#d946ef', icon: <Blocks size={24} />, prof: '88%', exp: '1.5+ Years', projects: '4+' },
  { id: 9, name: 'FastAPI', color: '#14b8a6', icon: <SiFastapi size={24} />, prof: '92%', exp: '3+ Years', projects: '7+' },
  { id: 10, name: 'SQL', color: '#3b82f6', icon: <SiPostgresql size={24} />, prof: '95%', exp: '3+ Years', projects: '12+' },
  { id: 11, name: 'Docker', color: '#0ea5e9', icon: <SiDocker size={24} />, prof: '85%', exp: '2+ Years', projects: '5+' },
  { id: 12, name: 'Git', color: '#f43f5e', icon: <SiGit size={24} />, prof: '98%', exp: '4+ Years', projects: 'All' },
  { id: 13, name: 'GitHub', color: '#ffffff', icon: <SiGithub size={24} />, prof: '98%', exp: '4+ Years', projects: 'All' },
  { id: 14, name: 'Linux', color: '#eab308', icon: <SiLinux size={24} />, prof: '90%', exp: '4+ Years', projects: 'All' },
  { id: 15, name: 'Machine Learning', color: '#10b981', icon: <BrainCircuit size={24} />, prof: '95%', exp: '3+ Years', projects: '10+' },
  { id: 16, name: 'Deep Learning', color: '#ec4899', icon: <Cpu size={24} />, prof: '90%', exp: '2+ Years', projects: '6+' },
  { id: 17, name: 'NLP', color: '#8b5cf6', icon: <Bot size={24} />, prof: '88%', exp: '2+ Years', projects: '4+' },
];

function generateSpherePositions(count: number, radius: number) {
  const positions = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); 
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

function DataEdge({ p1, p2, isHovered, color, isDimmed }: any) {
  const lineRef = useRef<any>(null);
  
  useFrame((state) => {
    if (lineRef.current?.material) {
      lineRef.current.material.dashOffset -= isHovered ? 0.05 : 0.002;
    }
  });

  return (
    <Line
      ref={lineRef}
      points={[p1, p2]}
      color={isHovered ? color : '#334155'}
      lineWidth={isHovered ? 2.5 : 1}
      transparent
      opacity={isDimmed ? 0.05 : (isHovered ? 0.8 : 0.2)}
      dashed
      dashScale={isHovered ? 5 : 2}
      dashSize={isHovered ? 2 : 1}
      dashOffset={0}
    />
  );
}

function ComplexNode({ pos, skill, isHovered, isDimmed, setHoveredNode, setActiveSkill }: any) {
  const outerRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (outerRef.current) {
      outerRef.current.rotation.y += isHovered ? 0.05 : 0.01;
      outerRef.current.rotation.x += isHovered ? 0.05 : 0.01;
    }
  });

  return (
    <group 
      position={[pos.x, pos.y, pos.z]}
      onPointerOver={(e) => { e.stopPropagation(); setHoveredNode(); document.body.style.cursor = 'pointer'; }}
      onPointerOut={(e) => { e.stopPropagation(); setHoveredNode(null); document.body.style.cursor = 'default'; }}
      onClick={(e) => { e.stopPropagation(); setActiveSkill(skill); }}
    >
      <group ref={outerRef}>
        <Icosahedron args={[isHovered ? 0.7 : 0.4, 0]}>
          <meshBasicMaterial 
            color={isHovered ? skill.color : '#3b82f6'} 
            wireframe 
            transparent 
            opacity={isDimmed ? 0.05 : (isHovered ? 0.8 : 0.2)} 
          />
        </Icosahedron>
      </group>

      <Sphere args={[isHovered ? 0.4 : 0.2, 32, 32]}>
        <meshStandardMaterial 
          color={isHovered ? '#ffffff' : '#0f172a'}
          emissive={isHovered ? skill.color : '#1e3a8a'}
          emissiveIntensity={isHovered ? 3 : 0.5}
          transparent
          opacity={isDimmed ? 0.1 : 1}
        />
      </Sphere>

      <Html center zIndexRange={[100, 0]} className="pointer-events-none transition-all duration-500">
        <div 
          className="flex flex-col items-center gap-2 transition-all duration-500 ease-out"
          style={{ 
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(-40px) scale(1)' : 'translateY(0px) scale(0.5)',
          }}
        >
          <div 
            className="bg-[#050505]/90 backdrop-blur-2xl border px-5 py-3 rounded-2xl flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            style={{ 
              borderColor: `${skill.color}80`,
              boxShadow: `0 0 30px ${skill.color}30, inset 0 0 10px ${skill.color}20` 
            }}
          >
            <div style={{ color: skill.color }}>{skill.icon}</div>
            <span className="text-white font-black tracking-widest text-sm uppercase whitespace-nowrap">{skill.name}</span>
          </div>
        </div>
      </Html>
    </group>
  );
}

function NeuralNetwork({ setActiveSkill }: { setActiveSkill: (skill: any) => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const radius = 5.0;
  const positions = useMemo(() => generateSpherePositions(skillsData.length, radius), []);

  const edges = useMemo(() => {
    const lines = [];
    const maxDistance = radius * 1.6;
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

  const connectedNodes = useMemo(() => {
    if (hoveredNode === null) return [];
    const connected = [hoveredNode];
    edges.forEach(e => {
      if (e.source === hoveredNode) connected.push(e.target);
      if (e.target === hoveredNode) connected.push(e.source);
    });
    return connected;
  }, [hoveredNode, edges]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {edges.map((edge, idx) => {
        const isConnectedToHovered = hoveredNode !== null && (hoveredNode === edge.source || hoveredNode === edge.target);
        const isDimmed = hoveredNode !== null && !isConnectedToHovered;
        
        return (
          <DataEdge
            key={idx}
            p1={edge.p1}
            p2={edge.p2}
            isHovered={isConnectedToHovered}
            isDimmed={isDimmed}
            color={hoveredNode !== null ? skillsData[hoveredNode].color : '#ffffff'}
          />
        );
      })}

      {skillsData.map((skill, i) => {
        const isHovered = hoveredNode === i;
        const isDimmed = hoveredNode !== null && !connectedNodes.includes(i);
        
        return (
          <ComplexNode
            key={skill.id}
            pos={positions[i]}
            skill={skill}
            isHovered={isHovered}
            isDimmed={isDimmed}
            setHoveredNode={(val: any) => setHoveredNode(val !== undefined ? val : i)}
            setActiveSkill={setActiveSkill}
          />
        );
      })}
    </group>
  );
}

function PointerCamera() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 2.5, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 2.5, 0.03);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function SkillEcosystem({ setActiveSkill }: { setActiveSkill: (skill: any) => void }) {
  return (
    <div className="w-full h-full absolute inset-0 bg-transparent">
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={['#020205']} />
        
        <Stars radius={100} depth={50} count={5000} factor={5} saturation={1} fade speed={2} />
        
        <ambientLight intensity={0.2} color="#ffffff" />
        <directionalLight position={[10, 20, 10]} intensity={2} color="#60a5fa" />
        <directionalLight position={[-10, -20, -10]} intensity={1} color="#8b5cf6" />
        
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={2} />
        </EffectComposer>

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <NeuralNetwork setActiveSkill={setActiveSkill} />
        </Float>
        
        <PointerCamera />
      </Canvas>
    </div>
  );
}
