"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Stylized geometric avatar (no .glb needed) ─── */
const AvatarFigure: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null!);
    const materialAccent = useMemo(() => new THREE.MeshStandardMaterial({ color: '#0d9488', roughness: 0.3, metalness: 0.4 }), []);
    const materialLight = useMemo(() => new THREE.MeshStandardMaterial({ color: '#5eead4', roughness: 0.4, metalness: 0.2 }), []);
    const materialSkin = useMemo(() => new THREE.MeshStandardMaterial({ color: '#fcd9b8', roughness: 0.5, metalness: 0.1 }), []);

    useFrame((state) => {
        if (groupRef.current) {
            // Subtle mouse-tracking rotation
            const t = state.clock.getElapsedTime();
            groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.15;
            groupRef.current.rotation.x = Math.cos(t * 0.3) * 0.05;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
            <group ref={groupRef}>
                {/* Head */}
                <mesh position={[0, 1.6, 0]} material={materialSkin}>
                    <sphereGeometry args={[0.4, 32, 32]} />
                </mesh>

                {/* Body */}
                <mesh position={[0, 0.6, 0]} material={materialAccent}>
                    <capsuleGeometry args={[0.35, 0.8, 16, 32]} />
                </mesh>

                {/* Left arm */}
                <mesh position={[-0.55, 0.7, 0]} rotation={[0, 0, 0.3]} material={materialAccent}>
                    <capsuleGeometry args={[0.12, 0.6, 8, 16]} />
                </mesh>

                {/* Right arm — raised slightly (coding pose) */}
                <mesh position={[0.55, 0.85, 0]} rotation={[0, 0, -0.5]} material={materialAccent}>
                    <capsuleGeometry args={[0.12, 0.6, 8, 16]} />
                </mesh>

                {/* Left leg */}
                <mesh position={[-0.2, -0.3, 0]} material={materialLight}>
                    <capsuleGeometry args={[0.14, 0.6, 8, 16]} />
                </mesh>

                {/* Right leg */}
                <mesh position={[0.2, -0.3, 0]} material={materialLight}>
                    <capsuleGeometry args={[0.14, 0.6, 8, 16]} />
                </mesh>

                {/* Laptop / floating screen */}
                <mesh position={[0.5, 1.1, 0.3]} rotation={[0.2, -0.3, 0]}>
                    <boxGeometry args={[0.5, 0.35, 0.03]} />
                    <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.6} />
                </mesh>
                {/* Screen glow */}
                <mesh position={[0.5, 1.1, 0.32]} rotation={[0.2, -0.3, 0]}>
                    <planeGeometry args={[0.44, 0.28]} />
                    <meshStandardMaterial color="#5eead4" emissive="#5eead4" emissiveIntensity={0.3} roughness={0.1} />
                </mesh>

                {/* Floating code brackets around the character */}
                <FloatingBracket position={[-1, 1.8, -0.5]} rotation={[0, 0.3, 0.1]} />
                <FloatingBracket position={[1.1, 0.3, -0.3]} rotation={[0, -0.2, -0.1]} />
                <FloatingDot position={[-0.8, 0.2, 0.3]} />
                <FloatingDot position={[0.9, 1.6, 0.2]} />
            </group>
        </Float>
    );
};

const FloatingBracket: React.FC<{ position: [number, number, number]; rotation?: [number, number, number] }> = ({ position, rotation }) => {
    const ref = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 1.5 + position[0]) * 0.1;
        }
    });
    return (
        <mesh ref={ref} position={position} rotation={rotation}>
            <torusGeometry args={[0.15, 0.03, 8, 16, Math.PI]} />
            <meshStandardMaterial color="#5eead4" emissive="#5eead4" emissiveIntensity={0.4} transparent opacity={0.7} />
        </mesh>
    );
};

const FloatingDot: React.FC<{ position: [number, number, number] }> = ({ position }) => {
    const ref = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 2 + position[0] * 3) * 0.15;
        }
    });
    return (
        <mesh ref={ref} position={position}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={0.6} transparent opacity={0.8} />
        </mesh>
    );
};

const Avatar3D: React.FC = () => {
    return (
        <div className="avatar-canvas">
            <Canvas
                camera={{ position: [0, 0.8, 4], fov: 45 }}
                style={{ background: 'transparent' }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <directionalLight position={[-3, 3, 2]} intensity={0.3} color="#5eead4" />
                <AvatarFigure />
            </Canvas>
        </div>
    );
};

export default Avatar3D;
