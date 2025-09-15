"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Spotlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: -1, y: -1 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={cn('group relative', className)}
      style={
        {
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      {children}
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
           style={{
            background: `radial-gradient(600px at var(--mouse-x) var(--mouse-y), rgba(29, 78, 216, 0.15), transparent 80%)`
           }}
      ></div>
    </div>
  );
}
