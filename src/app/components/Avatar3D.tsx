"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── Full duck with proper wings ─── */
const Duck: React.FC = () => {
    const rootRef    = useRef<THREE.Group>(null!);
    const bodyRef    = useRef<THREE.Mesh>(null!);
    const headRef    = useRef<THREE.Group>(null!);
    const wingLRef   = useRef<THREE.Mesh>(null!);
    const wingRRef   = useRef<THREE.Mesh>(null!);
    const legLRef    = useRef<THREE.Group>(null!);
    const legRRef    = useRef<THREE.Group>(null!);
    const tailRef    = useRef<THREE.Mesh>(null!);
    const note1Ref   = useRef<THREE.Mesh>(null!);
    const note2Ref   = useRef<THREE.Mesh>(null!);
    const note3Ref   = useRef<THREE.Mesh>(null!);

    const matBody      = useMemo(() => new THREE.MeshStandardMaterial({ color: '#facc15', roughness: 0.45, metalness: 0.0 }), []);
    const matBelly     = useMemo(() => new THREE.MeshStandardMaterial({ color: '#fde68a', roughness: 0.5,  metalness: 0.0 }), []);
    const matOrange    = useMemo(() => new THREE.MeshStandardMaterial({ color: '#f97316', roughness: 0.4,  metalness: 0.1 }), []);
    const matDark      = useMemo(() => new THREE.MeshStandardMaterial({ color: '#0f172a', roughness: 0.3,  metalness: 0.2 }), []);
    const matWhite     = useMemo(() => new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.5,  metalness: 0.0 }), []);
    const matTeal      = useMemo(() => new THREE.MeshStandardMaterial({ color: '#0d9488', roughness: 0.3,  metalness: 0.4, emissive: '#0d9488', emissiveIntensity: 0.2 }), []);
    const matWing      = useMemo(() => new THREE.MeshStandardMaterial({ color: '#eab308', roughness: 0.5,  metalness: 0.0 }), []);
    const matNote      = useMemo(() => new THREE.MeshStandardMaterial({ color: '#f43f5e', roughness: 0.3,  metalness: 0.1, emissive: '#f43f5e', emissiveIntensity: 0.4, transparent: true, opacity: 0.85 }), []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const beatFast = Math.sin(t * 5);   // ~150 BPM
        const beatOff  = Math.sin(t * 5 + Math.PI);

        /* whole-duck bounce */
        if (rootRef.current) {
            rootRef.current.position.y = beatFast * 0.09;
            rootRef.current.rotation.y = Math.sin(t * 1.5) * 0.2;   // slow look-around
            rootRef.current.rotation.z = Math.sin(t * 2.5) * 0.05;  // side sway
        }

        /* body squish */
        if (bodyRef.current) {
            const s = 1 + Math.max(0, beatFast) * 0.05;
            bodyRef.current.scale.y = 1 / s;
            bodyRef.current.scale.x = s;
            bodyRef.current.scale.z = s;
        }

        /* head nod */
        if (headRef.current) {
            headRef.current.rotation.x = Math.sin(t * 5) * 0.1;
            headRef.current.rotation.z = Math.sin(t * 3) * 0.07;
        }

        /* wing flap */
        if (wingLRef.current) wingLRef.current.rotation.z =  0.4 + Math.sin(t * 10) * 0.55;
        if (wingRRef.current) wingRRef.current.rotation.z = -0.4 - Math.sin(t * 10 + Math.PI) * 0.55;

        /* leg tap */
        if (legLRef.current) legLRef.current.rotation.x =  Math.max(0, beatFast)  * 0.45;
        if (legRRef.current) legRRef.current.rotation.x =  Math.max(0, beatOff)   * 0.45;

        /* tail wag */
        if (tailRef.current) tailRef.current.rotation.y = Math.sin(t * 7) * 0.4;

        /* floating notes */
        const notes = [note1Ref, note2Ref, note3Ref];
        notes.forEach((r, i) => {
            if (!r.current) return;
            r.current.position.y = 0.12 + Math.sin(t * 2.5 + i * 2.0) * 0.14;
            r.current.position.x = (i - 1) * 0.28 + Math.sin(t * 1.2 + i) * 0.06;
            (r.current.material as THREE.MeshStandardMaterial).opacity = 0.55 + Math.sin(t * 3 + i * 1.5) * 0.4;
        });
    });

    return (
        <group ref={rootRef}>
            {/* ── Legs ── */}
            <group ref={legLRef} position={[-0.2, -0.78, 0]}>
                <mesh material={matOrange}><capsuleGeometry args={[0.07, 0.22, 6, 8]} /></mesh>
                <mesh position={[0, -0.21, 0.1]} rotation={[0.3, 0, 0]} material={matOrange}><boxGeometry args={[0.16, 0.05, 0.24]} /></mesh>
            </group>
            <group ref={legRRef} position={[0.2, -0.78, 0]}>
                <mesh material={matOrange}><capsuleGeometry args={[0.07, 0.22, 6, 8]} /></mesh>
                <mesh position={[0, -0.21, 0.1]} rotation={[0.3, 0, 0]} material={matOrange}><boxGeometry args={[0.16, 0.05, 0.24]} /></mesh>
            </group>

            {/* ── Body ── */}
            <mesh ref={bodyRef} position={[0, 0, 0]} material={matBody}>
                <sphereGeometry args={[0.65, 40, 28]} />
            </mesh>
            {/* Belly */}
            <mesh position={[0, -0.12, 0.46]} material={matBelly} scale={[0.9, 0.9, 0.4]}>
                <sphereGeometry args={[0.38, 24, 18]} />
            </mesh>

            {/* ── Tail ── */}
            <mesh ref={tailRef} position={[0, 0.18, -0.56]} rotation={[-0.55, 0, 0]} material={matTeal}>
                <coneGeometry args={[0.16, 0.34, 8]} />
            </mesh>

            {/* ── Wings (scaled spheres = ellipsoids) ── */}
            <mesh ref={wingLRef} position={[-0.62, 0.06, 0]} scale={[0.22, 0.42, 0.14]} rotation={[0.1, 0.2, 0.4]} material={matWing}>
                <sphereGeometry args={[1, 22, 14]} />
            </mesh>
            <mesh ref={wingRRef} position={[0.62, 0.06, 0]} scale={[0.22, 0.42, 0.14]} rotation={[0.1, -0.2, -0.4]} material={matWing}>
                <sphereGeometry args={[1, 22, 14]} />
            </mesh>

            {/* ── Neck ── */}
            <mesh position={[0, 0.7, 0.12]} material={matBody} scale={[1, 1, 0.9]}>
                <capsuleGeometry args={[0.22, 0.14, 8, 12]} />
            </mesh>

            {/* ── Head ── */}
            <group ref={headRef} position={[0, 1.0, 0.08]}>
                <mesh material={matBody}>
                    <sphereGeometry args={[0.34, 36, 26]} />
                </mesh>

                {/* Teal iridescent cap on head */}
                <mesh position={[0, 0.18, -0.02]} scale={[1.02, 0.6, 1.02]} material={matTeal}>
                    <sphereGeometry args={[0.34, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
                </mesh>

                {/* Cheeks */}
                <mesh position={[-0.24, -0.02, 0.22]} material={matOrange} scale={[0.55, 0.4, 0.3]}>
                    <sphereGeometry args={[0.14, 12, 10]} />
                </mesh>
                <mesh position={[0.24, -0.02, 0.22]} material={matOrange} scale={[0.55, 0.4, 0.3]}>
                    <sphereGeometry args={[0.14, 12, 10]} />
                </mesh>

                {/* Eyes */}
                <mesh position={[-0.15, 0.07, 0.28]} material={matDark}>
                    <sphereGeometry args={[0.065, 14, 14]} />
                </mesh>
                <mesh position={[0.15, 0.07, 0.28]} material={matDark}>
                    <sphereGeometry args={[0.065, 14, 14]} />
                </mesh>
                {/* Eye shines */}
                <mesh position={[-0.12, 0.1, 0.34]} material={matWhite}>
                    <sphereGeometry args={[0.025, 8, 8]} />
                </mesh>
                <mesh position={[0.18, 0.1, 0.34]} material={matWhite}>
                    <sphereGeometry args={[0.025, 8, 8]} />
                </mesh>

                {/* Beak upper */}
                <mesh position={[0, -0.04, 0.36]} rotation={[0.2, 0, 0]} material={matOrange} scale={[1, 0.65, 1]}>
                    <boxGeometry args={[0.24, 0.14, 0.22]} />
                </mesh>
                {/* Beak lower (smiling pose) */}
                <mesh position={[0, -0.11, 0.35]} rotation={[-0.1, 0, 0]} material={matOrange} scale={[1, 0.5, 1]}>
                    <boxGeometry args={[0.2, 0.1, 0.18]} />
                </mesh>

                {/* Tiny hat / bowtie on neck joint */}
                <mesh position={[0, -0.26, 0.18]} material={matTeal} scale={[1, 0.4, 0.5]}>
                    <cylinderGeometry args={[0.15, 0.19, 0.12, 12]} />
                </mesh>
            </group>

            {/* ── Floating music notes above head ── */}
            <mesh ref={note1Ref} position={[-0.28, 1.55, 0]} material={matNote}>
                <sphereGeometry args={[0.07, 10, 10]} />
            </mesh>
            <mesh ref={note2Ref} position={[0, 1.7, 0]} material={matNote}>
                <sphereGeometry args={[0.055, 10, 10]} />
            </mesh>
            <mesh ref={note3Ref} position={[0.28, 1.55, 0]} material={matNote}>
                <sphereGeometry args={[0.07, 10, 10]} />
            </mesh>
        </group>
    );
};

/* ─── Canvas wrapper ─── */
const Avatar3D: React.FC = () => {
    return (
        <div className="avatar-canvas">
            <Canvas
                camera={{ position: [0, 0.3, 3.8], fov: 42 }}
                style={{ background: 'transparent' }}
                dpr={[1, 1.5]}
            >
                <ambientLight intensity={0.7} />
                <directionalLight position={[4, 6, 5]} intensity={0.9} />
                <directionalLight position={[-3, 2, 3]} intensity={0.3} color="#fde68a" />
                <pointLight position={[0, 3, 2]} intensity={0.3} color="#5eead4" />
                <Duck />
            </Canvas>
        </div>
    );
};

export default Avatar3D;
