import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed = 1, distort = 0.4, scale = 1 }) {
  const mesh = useRef();
  
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.7}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function AnimatedTorus({ position, color, speed = 1, scale = 1 }) {
  const mesh = useRef();
  
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={mesh} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
        <MeshWobbleMaterial
          color={color}
          transparent
          opacity={0.6}
          factor={0.3}
          speed={1}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function AnimatedOctahedron({ position, color, speed = 1, scale = 1 }) {
  const mesh = useRef();
  
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.25 * speed;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh} position={position} scale={scale}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.5}
          roughness={0.1}
          metalness={0.9}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 100 }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  const ref = useRef();
  
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#06b6d4"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#a855f7" />
      
      {/* Main shapes */}
      <AnimatedSphere 
        position={[-3, 1, -2]} 
        color="#06b6d4" 
        scale={1.2}
        speed={0.8}
      />
      <AnimatedTorus 
        position={[3, -1, -3]} 
        color="#a855f7" 
        scale={0.8}
        speed={1.2}
      />
      <AnimatedOctahedron 
        position={[0, 2, -4]} 
        color="#22d3ee" 
        scale={1.5}
        speed={0.6}
      />
      <AnimatedSphere 
        position={[4, 2, -5]} 
        color="#c084fc" 
        scale={0.6}
        speed={1.5}
        distort={0.6}
      />
      <AnimatedTorus 
        position={[-4, -2, -4]} 
        color="#06b6d4" 
        scale={0.5}
        speed={0.9}
      />
      
      {/* Background particles */}
      <Particles count={150} />
    </>
  );
}

export default function FloatingShapes({ className = '' }) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-transparent to-dark-900" />
    </div>
  );
}
