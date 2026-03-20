"use client";

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const Avatar3D = dynamic(() => import('./Avatar3D'), { ssr: false });

/**
 * Skeleton shown while the 3D canvas is deferred.
 * Holds layout space so there's no CLS when the canvas mounts.
 */
const AvatarSkeleton: React.FC = () => (
    <div
        className="avatar-canvas flex items-center justify-center"
        aria-hidden="true"
    >
        <div
            style={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(var(--accent-rgb), 0.1), rgba(var(--accent-rgb), 0.04))',
                border: '1px solid var(--border)',
                animation: 'pulse-skeleton 2s ease-in-out infinite',
            }}
        />
    </div>
);

/**
 * Defers Three.js/R3F mount until the browser is idle (or after 2s timeout).
 * This prevents WebGL shader compilation from blocking the main thread during
 * initial page load, dramatically reducing TBT and TTI.
 */
const Avatar3DClient: React.FC = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const load = () => setMounted(true);

        if ('requestIdleCallback' in window) {
            const id = (window as Window & typeof globalThis & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(load, { timeout: 2000 });
            return () => (window as Window & typeof globalThis & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(id);
        }
        const id = setTimeout(load, 1500);
        return () => clearTimeout(id);
    }, []);

    if (!mounted) return <AvatarSkeleton />;
    return <Avatar3D />;
};

export default Avatar3DClient;
