"use client";
import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Stars, Html, PresentationControls, Environment, 
  Icosahedron, Torus, Sparkles, Float
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
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
  { id: 12, icon: <SiFlask size={24} />, name: 'Flask', category: 'Backend', level: 'Intermediate', color: '#ffffff' },
  { id: 13, icon: <SiReact size={24} />, name: 'React', category: 'Frontend', level: 'Expert', color: '#61DAFB' },
  { id: 14, icon: <SiNextdotjs size={24} />, name: 'Next.js', category: 'Frontend', level: 'Advanced', color: '#ffffff' },
  { id: 15, icon: <SiNodedotjs size={24} />, name: 'Node.js', category: 'Backend', level: 'Advanced', color: '#339933' },
  { id: 16, icon: <SiGit size={24} />, name: 'Git', category: 'Tools', level: 'Expert', color: '#F05032' },
  { id: 17, icon: <SiGithub size={24} />, name: 'GitHub', category: 'Tools', level: 'Expert', color: '#ffffff' },
  { id: 18, icon: <SiDocker size={24} />, name: 'Docker', category: 'DevOps', level: 'Intermediate', color: '#2496ED' },
  { id: 19, icon: <SiLinux size={24} />, name: 'Linux', category: 'OS', level: 'Advanced', color: '#FCC624' },
  { id: 20, icon: <FaAws size={24} />, name: 'AWS', category: 'Cloud', level: 'Intermediate', color: '#FF9900' },
];

function GlowingCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      coreRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Outer Shell */}
      <Icosahedron ref={coreRef} args={[1.5, 1]} receiveShadow castShadow>
        <meshStandardMaterial 
          color="#0f172a" 
          roughness={0.1} 
          metalness={0.8}
          wireframe={false}
        />
      </Icosahedron>
      
      {/* Inner Energy Core */}
      <Icosahedron args={[1.4, 2]}>
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.3} toneMapped={false} />
      </Icosahedron>

      {/* Pulsing Aura */}
      <Sparkles count={100} scale={4} size={2} speed={0.4} color="#60a5fa" />
    </Float>
  );
}

function OrbitalRings() {
  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      {/* Inner Ring */}
      <Torus args={[4, 0.01, 16, 100]}>
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.2} toneMapped={false} />
      </Torus>
      {/* Outer Ring */}
      <Torus args={[6.5, 0.02, 16, 100]}>
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.15} toneMapped={false} />
      </Torus>
    </group>
  );
}

function OrbitalNode({ data, radius, angle, speed, activeNode, setActiveNode }: any) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const isActive = activeNode === data.id;

  // Wave motion for orbits
  const yOffset = Math.sin(angle * 4) * 1.5; 

  useFrame((state) => {
    if (!groupRef.current) return;

    if (!isActive) {
      const t = state.clock.getElapsedTime() * speed;
      const x = Math.cos(angle + t) * radius;
      const z = Math.sin(angle + t) * radius;
      
      // Orbit path with vertical bobbing
      groupRef.current.position.lerp(new THREE.Vector3(x, yOffset + Math.sin(t * 3) * 0.3, z), 0.05);
      
      // Billboard effect (always face camera)
      groupRef.current.quaternion.copy(state.camera.quaternion);
    } else {
      // Zoom toward camera
      const cameraForward = new THREE.Vector3();
      state.camera.getWorldDirection(cameraForward);
      const targetPos = state.camera.position.clone().add(cameraForward.multiplyScalar(3.5));
      
      groupRef.current.position.lerp(targetPos, 0.1);
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
          className={`transition-all duration-700 ease-out flex flex-col items-center justify-center
            ${isActive ? 'scale-150 z-50' : hovered ? 'scale-125 z-40' : 'scale-100 z-10'}`}
          style={{ 
            opacity: activeNode && !isActive ? 0.1 : 1,
            pointerEvents: activeNode && !isActive ? 'none' : 'auto'
          }}
        >
          {/* Hexagonal/Circular Premium Node */}
          <div 
            className="relative flex items-center justify-center w-16 h-16 rounded-2xl glass-card overflow-hidden group backdrop-blur-2xl transition-all duration-500"
            style={{ 
              boxShadow: (hovered || isActive) ? `0 0 40px ${data.color}80, inset 0 0 20px ${data.color}40` : `0 0 15px rgba(0,0,0,0.5)`,
              borderColor: (hovered || isActive) ? data.color : 'rgba(255,255,255,0.1)',
              borderWidth: (hovered || isActive) ? '2px' : '1px'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none opacity-50" />
            
            {/* Core Icon */}
            <div className="relative z-10 transition-transform duration-500" style={{ color: data.color }}>
              {data.icon}
            </div>
          </div>

          {/* Premium Info Panel */}
          <div 
            className={`absolute top-full mt-4 flex flex-col items-center transition-all duration-500
              ${(hovered || isActive) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          >
            <div className="bg-[#050505]/90 backdrop-blur-xl border rounded-xl p-3 flex flex-col items-center min-w-[140px] shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                 style={{ borderColor: `${data.color}40` }}>
              <span className="text-white font-bold text-sm whitespace-nowrap mb-1 drop-shadow-md">{data.name}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: data.color }}>
                {data.category}
              </span>
              <div className="w-full h-[1px] my-2" style={{ background: `linear-gradient(90deg, transparent, ${data.color}80, transparent)` }}></div>
              <div className="flex items-center gap-1.5">
                {/* Level indicator dots */}
                {[...Array(3)].map((_, i) => {
                  const filled = 
                    (data.level === 'Expert' && i < 3) || 
                    (data.level === 'Advanced' && i < 2) || 
                    (data.level === 'Intermediate' && i < 1);
                  return (
                    <div 
                      key={i} 
                      className="w-1.5 h-1.5 rounded-full" 
                      style={{ backgroundColor: filled ? data.color : 'rgba(255,255,255,0.2)', boxShadow: filled ? `0 0 8px ${data.color}` : 'none' }}
                    />
                  );
                })}
                <span className="text-white/70 text-[9px] uppercase tracking-widest ml-1">{data.level}</span>
              </div>
            </div>
          </div>

        </div>
      </Html>
    </group>
  );
}

function Scene() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = useMemo(() => {
    return techs.map((tech, i) => {
      const ring = i % 2 === 0 ? 1 : 2;
      const radius = ring === 1 ? 4 : 6.5;
      const angle = (i / 10) * Math.PI * 2;
      const speed = ring === 1 ? 0.15 : -0.1; 
      return { ...tech, radius, angle, speed };
    });
  }, []);

  const { camera, pointer } = useThree();
  useFrame(() => {
    if (!activeNode) {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 2.5, 0.03);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 2.5 + 4, 0.03);
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <color attach="background" args={['#020205']} />
      
      {/* Volumetric / Space Atmosphere */}
      <Stars radius={100} depth={50} count={6000} factor={5} saturation={1} fade speed={1.5} />
      
      {/* Cinematic Lighting */}
      <ambientLight intensity={0.1} color="#ffffff" />
      <directionalLight position={[10, 20, 10]} intensity={3} color="#60a5fa" />
      <directionalLight position={[-10, -20, -10]} intensity={2} color="#8b5cf6" />
      <pointLight position={[0, 0, 0]} intensity={2} color="#3b82f6" distance={15} />

      {/* Post Processing for Neon Glow */}
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
      </EffectComposer>

      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 3, Math.PI / 3]}
      >
        <group>
          {/* Sci-fi Core */}
          <GlowingCore />
          
          {/* Orbit Rings */}
          <OrbitalRings />

          {/* Floating Tech Nodes */}
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
      <Canvas camera={{ position: [0, 4, 14], fov: 45 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
