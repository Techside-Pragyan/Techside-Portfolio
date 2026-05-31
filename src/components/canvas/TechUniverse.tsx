"use client";
import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Html, PresentationControls, Environment, Box } from '@react-three/drei';
import * as THREE from 'three';
import { 
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, 
  SiPandas, SiNumpy, SiPostgresql, SiMongodb, SiFastapi, 
  SiFlask, SiReact, SiNextdotjs, SiNodedotjs, SiGit, 
  SiGithub, SiDocker, SiLinux 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { BrainCircuit } from 'lucide-react';

const techs = [
  { id: 1, icon: <SiPython size={24} />, name: 'Python', category: 'Language', level: 'Expert', color: '#3776AB' },
  { id: 2, icon: <BrainCircuit size={24} />, name: 'Machine Learning', category: 'Domain', level: 'Advanced', color: '#10b981' },
  { id: 3, icon: <SiTensorflow size={24} />, name: 'TensorFlow', category: 'Framework', level: 'Advanced', color: '#FF6F00' },
  { id: 4, icon: <SiPytorch size={24} />, name: 'PyTorch', category: 'Framework', level: 'Advanced', color: '#EE4C2C' },
  { id: 5, icon: <SiScikitlearn size={24} />, name: 'Scikit-Learn', category: 'Library', level: 'Expert', color: '#F7931E' },
  { id: 6, icon: <SiOpencv size={24} />, name: 'OpenCV', category: 'Library', level: 'Intermediate', color: '#5C3EE8' },
  { id: 7, icon: <SiPandas size={24} />, name: 'Pandas', category: 'Library', level: 'Expert', color: '#150458' },
  { id: 8, icon: <SiNumpy size={24} />, name: 'NumPy', category: 'Library', level: 'Expert', color: '#013243' },
  { id: 9, icon: <SiPostgresql size={24} />, name: 'SQL', category: 'Database', level: 'Advanced', color: '#4169E1' },
  { id: 10, icon: <SiMongodb size={24} />, name: 'MongoDB', category: 'Database', level: 'Intermediate', color: '#47A248' },
  { id: 11, icon: <SiFastapi size={24} />, name: 'FastAPI', category: 'Backend', level: 'Advanced', color: '#009688' },
  { id: 12, icon: <SiFlask size={24} />, name: 'Flask', category: 'Backend', level: 'Intermediate', color: '#000000' },
  { id: 13, icon: <SiReact size={24} />, name: 'React', category: 'Frontend', level: 'Expert', color: '#61DAFB' },
  { id: 14, icon: <SiNextdotjs size={24} />, name: 'Next.js', category: 'Frontend', level: 'Advanced', color: '#000000' },
  { id: 15, icon: <SiNodedotjs size={24} />, name: 'Node.js', category: 'Backend', level: 'Advanced', color: '#339933' },
  { id: 16, icon: <SiGit size={24} />, name: 'Git', category: 'Tools', level: 'Expert', color: '#F05032' },
  { id: 17, icon: <SiGithub size={24} />, name: 'GitHub', category: 'Tools', level: 'Expert', color: '#181717' },
  { id: 18, icon: <SiDocker size={24} />, name: 'Docker', category: 'DevOps', level: 'Intermediate', color: '#2496ED' },
  { id: 19, icon: <SiLinux size={24} />, name: 'Linux', category: 'OS', level: 'Advanced', color: '#FCC624' },
  { id: 20, icon: <FaAws size={24} />, name: 'AWS', category: 'Cloud', level: 'Intermediate', color: '#232F3E' },
];

function Centerpiece() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <Box ref={meshRef} args={[2, 2, 2]} castShadow receiveShadow>
      <meshStandardMaterial 
        color="#0a0a0a" 
        roughness={0.2} 
        metalness={0.9}
        envMapIntensity={2}
      />
      
      {/* Inner glowing core */}
      <mesh>
        <boxGeometry args={[1.9, 1.9, 1.9]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.1} />
      </mesh>
    </Box>
  );
}

function OrbitalNode({ data, radius, angle, speed, activeNode, setActiveNode }: any) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const isActive = activeNode === data.id;

  // Calculate spherical distribution
  const yOffset = Math.sin(angle * 3) * 2; 

  useFrame((state) => {
    if (!groupRef.current) return;

    if (!isActive) {
      // Orbital movement
      const t = state.clock.getElapsedTime() * speed;
      const x = Math.cos(angle + t) * radius;
      const z = Math.sin(angle + t) * radius;
      
      groupRef.current.position.lerp(new THREE.Vector3(x, yOffset + Math.sin(t*2)*0.5, z), 0.05);
      
      // Make nodes always face the camera
      groupRef.current.quaternion.copy(state.camera.quaternion);
    } else {
      // Bring active node toward the camera
      const cameraForward = new THREE.Vector3();
      state.camera.getWorldDirection(cameraForward);
      const targetPos = state.camera.position.clone().add(cameraForward.multiplyScalar(4));
      
      groupRef.current.position.lerp(targetPos, 0.08);
      groupRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'default'; }}
      onClick={(e) => { 
        e.stopPropagation(); 
        setActiveNode(isActive ? null : data.id); 
      }}
    >
      <Html center zIndexRange={[100, 0]} transform={false}>
        <div 
          className={`transition-all duration-500 ease-out flex flex-col items-center justify-center
            ${isActive ? 'scale-150 z-50' : hovered ? 'scale-125 z-40' : 'scale-100 z-10'}`}
          style={{ 
            opacity: activeNode && !isActive ? 0.2 : 1,
            pointerEvents: activeNode && !isActive ? 'none' : 'auto'
          }}
        >
          {/* Glassmorphic Node */}
          <div 
            className="relative flex items-center justify-center w-16 h-16 rounded-full glass-card border border-white/20 shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden group backdrop-blur-xl"
            style={{ 
              boxShadow: (hovered || isActive) ? `0 0 40px ${data.color}80` : `0 0 20px ${data.color}40`,
              borderColor: (hovered || isActive) ? data.color : 'rgba(255,255,255,0.2)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <div className="relative z-10 text-white" style={{ color: data.color === '#000000' ? '#ffffff' : data.color }}>
              {data.icon}
            </div>
          </div>

          {/* Details Panel (Shows on hover or active) */}
          <div 
            className={`absolute top-full mt-4 flex flex-col items-center transition-all duration-300
              ${(hovered || isActive) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 flex flex-col items-center min-w-[120px] shadow-2xl">
              <span className="text-white font-bold text-sm whitespace-nowrap mb-1">{data.name}</span>
              <span className="text-primary text-[10px] font-mono uppercase tracking-wider">{data.category}</span>
              <div className="w-full h-[1px] bg-white/10 my-1"></div>
              <span className="text-white/60 text-[10px] uppercase tracking-widest">{data.level}</span>
            </div>
          </div>

        </div>
      </Html>
    </group>
  );
}

function Scene() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Distribute nodes evenly in orbits
  const nodes = useMemo(() => {
    return techs.map((tech, i) => {
      // 2 rings of orbit
      const ring = i % 2 === 0 ? 1 : 2;
      const radius = ring === 1 ? 4 : 6.5;
      const angle = (i / 10) * Math.PI * 2;
      const speed = ring === 1 ? 0.2 : -0.15; // inner ring rotates one way, outer the other
      return { ...tech, radius, angle, speed };
    });
  }, []);

  // Background pointer parallax
  const { camera, pointer } = useThree();
  useFrame(() => {
    if (!activeNode) {
      // Subtle camera movement based on mouse
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 2, 0.02);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 2 + 5, 0.02);
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <color attach="background" args={['#020205']} />
      
      {/* Deep Space Environment */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <ambientLight intensity={0.2} color="#ffffff" />
      <directionalLight position={[10, 20, 10]} intensity={2} color="#4c1d95" />
      <directionalLight position={[-10, -20, -10]} intensity={2} color="#3b82f6" />
      <pointLight position={[0, 0, 0]} intensity={1} color="#3b82f6" distance={10} />

      {/* Global Controls */}
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={true}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
      >
        <group>
          {/* Central Platform */}
          <Centerpiece />

          {/* Orbital Nodes */}
          {nodes.map((node) => (
            <OrbitalNode 
              key={node.id} 
              data={node} 
              radius={node.radius} 
              angle={node.angle} 
              speed={node.speed} 
              activeNode={activeNode}
              setActiveNode={setActiveNode}
            />
          ))}
        </group>
      </PresentationControls>
    </>
  );
}

export default function TechUniverse() {
  return (
    <div className="w-full h-full absolute inset-0 cursor-crosshair">
      <Canvas camera={{ position: [0, 5, 12], fov: 45 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
