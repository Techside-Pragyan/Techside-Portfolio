"use client";
import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, RigidBody, BallCollider, InstancedRigidBodies, RapierRigidBody } from '@react-three/rapier';
import { Environment, Html, Sphere, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  { id: 1, name: 'Python', prof: '98%', exp: '4+ Years', projects: '12+', color: '#3776AB' },
  { id: 2, name: 'Machine Learning', prof: '95%', exp: '3+ Years', projects: '8+', color: '#10b981' },
  { id: 3, name: 'Deep Learning', prof: '90%', exp: '2+ Years', projects: '6+', color: '#ec4899' },
  { id: 4, name: 'TensorFlow', prof: '92%', exp: '3+ Years', projects: '7+', color: '#FF6F00' },
  { id: 5, name: 'PyTorch', prof: '90%', exp: '2+ Years', projects: '5+', color: '#EE4C2C' },
  { id: 6, name: 'Scikit-Learn', prof: '95%', exp: '3+ Years', projects: '9+', color: '#F7931E' },
  { id: 7, name: 'Pandas', prof: '96%', exp: '4+ Years', projects: '15+', color: '#150458' },
  { id: 8, name: 'NumPy', prof: '95%', exp: '4+ Years', projects: '15+', color: '#013243' },
  { id: 9, name: 'OpenCV', prof: '85%', exp: '2+ Years', projects: '4+', color: '#5C3EE8' },
  { id: 10, name: 'LangChain', prof: '88%', exp: '1+ Years', projects: '3+', color: '#000000' },
  { id: 11, name: 'Hugging Face', prof: '90%', exp: '2+ Years', projects: '5+', color: '#FFD21E' },
  { id: 12, name: 'FastAPI', prof: '92%', exp: '3+ Years', projects: '6+', color: '#009688' },
  { id: 13, name: 'SQL', prof: '95%', exp: '3+ Years', projects: '10+', color: '#4169E1' },
  { id: 14, name: 'Git', prof: '98%', exp: '4+ Years', projects: '20+', color: '#F05032' },
  { id: 15, name: 'GitHub', prof: '98%', exp: '4+ Years', projects: '20+', color: '#181717' },
  { id: 16, name: 'Docker', prof: '85%', exp: '2+ Years', projects: '5+', color: '#2496ED' },
  { id: 17, name: 'Linux', prof: '90%', exp: '4+ Years', projects: 'All', color: '#FCC624' },
  { id: 18, name: 'Data Science', prof: '94%', exp: '3+ Years', projects: '10+', color: '#3b82f6' },
  { id: 19, name: 'NLP', prof: '88%', exp: '2+ Years', projects: '4+', color: '#8b5cf6' },
  { id: 20, name: 'Generative AI', prof: '92%', exp: '1.5+ Years', projects: '5+', color: '#06b6d4' },
];

function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <RigidBody type="kinematicPosition" colliders="hull" position={[0, 0, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={meshRef} args={[1.5, 32, 32]}>
          <meshStandardMaterial 
            color="#000000" 
            emissive="#3b82f6" 
            emissiveIntensity={0.5} 
            roughness={0.1} 
            metalness={0.8} 
            wireframe 
          />
        </Sphere>
        <Html center zIndexRange={[100, 0]} className="pointer-events-none">
          <div className="text-white font-black text-xl text-center whitespace-nowrap drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
            AI/ML Engineer
          </div>
        </Html>
        <Sparkles count={50} scale={3} size={2} color="#60a5fa" />
      </Float>
    </RigidBody>
  );
}

function SkillNode({ data, setActiveSkill }: any) {
  const body = useRef<RapierRigidBody>(null);
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();

  // Random initial position in a sphere around the center
  const initialPos = useMemo(() => {
    const phi = Math.acos(-1 + (2 * Math.random()));
    const theta = Math.sqrt(20 * Math.PI) * phi;
    const r = 4 + Math.random() * 3;
    return [
      r * Math.cos(theta) * Math.sin(phi),
      r * Math.sin(theta) * Math.sin(phi),
      r * Math.cos(phi)
    ];
  }, []);

  useFrame((state) => {
    if (!body.current) return;
    
    // Apply gravitational pull towards the center [0,0,0]
    const pos = body.current.translation();
    const vec = new THREE.Vector3(-pos.x, -pos.y, -pos.z);
    
    // Calculate distance to center
    const distance = vec.length();
    
    // Normalize and scale force (stronger pull if further away, push away if too close)
    if (distance > 3) {
      vec.normalize().multiplyScalar(0.2); // Pull
    } else {
      vec.normalize().multiplyScalar(-0.5); // Repel
    }

    // Add a tiny bit of noise for organic movement
    vec.x += (Math.random() - 0.5) * 0.1;
    vec.y += (Math.random() - 0.5) * 0.1;
    vec.z += (Math.random() - 0.5) * 0.1;

    body.current.applyImpulse(vec, true);
  });

  return (
    <RigidBody 
      ref={body} 
      position={initialPos as [number, number, number]} 
      colliders="ball" 
      restitution={0.8} // Bounciness
      linearDamping={0.5} 
      angularDamping={0.5}
      friction={0.2}
    >
      <Sphere 
        args={[0.8, 32, 32]} 
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'grab'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'default'; }}
        onPointerDown={(e) => { 
          e.stopPropagation(); 
          document.body.style.cursor = 'grabbing';
          setActiveSkill(data);
          
          // Apply a physical "toss" upwards/forward when clicked
          if (body.current) {
            body.current.applyImpulse({ x: 0, y: 5, z: 2 }, true);
          }
        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'grab';
        }}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial 
          color="#ffffff" 
          roughness={0.1} 
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive={hovered ? data.color : '#000000'}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
        
        {/* Render text on the sphere */}
        <Html center zIndexRange={[100, 0]} className="pointer-events-none transition-all duration-300" style={{ opacity: hovered ? 1 : 0.8 }}>
          <div 
            className="px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 backdrop-blur-md"
            style={{ 
              backgroundColor: hovered ? `${data.color}30` : 'rgba(255,255,255,0.1)',
              color: hovered ? '#ffffff' : '#e5e7eb',
              border: `1px solid ${hovered ? data.color : 'rgba(255,255,255,0.2)'}`,
              boxShadow: hovered ? `0 0 20px ${data.color}80` : 'none',
              transform: hovered ? 'scale(1.2)' : 'scale(1)'
            }}
          >
            {data.name}
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
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 4, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 4, 0.02);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function SkillEcosystem({ setActiveSkill }: { setActiveSkill: (skill: any) => void }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Limit spheres on mobile to maintain 60 FPS
  const displaySkills = isMobile ? skills.slice(0, 12) : skills;

  return (
    <div className="w-full h-full absolute inset-0 cursor-default">
      <Canvas camera={{ position: [0, 0, 18], fov: 40 }} shadows dpr={[1, 2]}>
        <color attach="background" args={['transparent']} />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 20, 15]} intensity={2.5} castShadow color="#ffffff" />
        <directionalLight position={[-10, -20, -15]} intensity={1} color="#60a5fa" />
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#3b82f6" distance={20} />

        <Environment preset="city" />

        <PointerFollower />

        <Physics gravity={[0, 0, 0]}>
          <CentralCore />
          {displaySkills.map((skill) => (
            <SkillNode key={skill.id} data={skill} setActiveSkill={setActiveSkill} />
          ))}
        </Physics>
      </Canvas>
    </div>
  );
}
