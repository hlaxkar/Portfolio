"use client";

import React, { useEffect, useRef, useState } from 'react';

const isElementClickable = (element: Element | null): boolean => {
    if (!element) return false;
    if (element.closest('a, button, [role="button"], input, textarea, select, summary, .clickable')) return true;
    const tagName = (element as HTMLElement).tagName?.toLowerCase();
    if (tagName === 'label') return true;
    return false;
};

const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement | null>(null);
    const ringRef = useRef<HTMLDivElement | null>(null);

    const targetXRef = useRef(0);
    const targetYRef = useRef(0);
    const dotXRef = useRef(0);
    const dotYRef = useRef(0);
    const ringXRef = useRef(0);
    const ringYRef = useRef(0);

    const [isVisible, setIsVisible] = useState(true);
    const [isHoveringClickable, setIsHoveringClickable] = useState(false);

    useEffect(() => {
        let animationFrameId = 0;

        const handleMouseMove = (event: MouseEvent) => {
            targetXRef.current = event.clientX;
            targetYRef.current = event.clientY;

            const target = event.target as Element | null;
            setIsHoveringClickable(isElementClickable(target));
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const handleTouchStart = () => setIsVisible(false);
        const handleTouchEnd = () => setIsVisible(false);

        const render = () => {
            // Dot follows tightly
            const dotLerp = 0.9;
            // dotXRef.current += (targetXRef.current - dotXRef.current) * dotLerp;
            // dotYRef.current += (targetYRef.current - dotYRef.current) * dotLerp;
            dotXRef.current = targetXRef.current;
            dotYRef.current = targetYRef.current;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${dotXRef.current - 2}px, ${dotYRef.current - 2}px, 0)`;
                dotRef.current.style.opacity = isVisible ? '1' : '0';
            }

            // Ring follows cursor — 0.9 = snappy (2 frames to catch up at 60fps)
            const ringLerp = 0.9;
            ringXRef.current += (targetXRef.current - ringXRef.current) * ringLerp;
            ringYRef.current += (targetYRef.current - ringYRef.current) * ringLerp;

            const ringScale = isHoveringClickable ? 1.6 : 1.0;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringXRef.current - 10}px, ${ringYRef.current - 10}px, 0) scale(${ringScale})`;
                ringRef.current.style.opacity = isVisible ? '1' : '0.7';
            }

            animationFrameId = window.requestAnimationFrame(render);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });

        animationFrameId = window.requestAnimationFrame(render);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isVisible, isHoveringClickable]);

    return (
        <div className="custom-cursor" aria-hidden="true">
            <div ref={dotRef} className="cursor-dot"></div>
            <div ref={ringRef} className="cursor-ring"></div>
        </div>
    );
};

export default CustomCursor;


