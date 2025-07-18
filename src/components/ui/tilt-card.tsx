'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import { motion, useSpring, useMotionTemplate, transform } from 'framer-motion';
import Image from 'next/image';
import { FrameState, TiltCardProps } from '@/lib/types';

/**
 * Enhanced TiltCard Component
 * 
 * A highly customizable 3D tilt card component that combines advanced animations
 * with modern React patterns and TypeScript support.
 * 
 * Features:
 * - Advanced spring animations with configurable parameters
 * - Dynamic shadow effects that follow mouse movement
 * - Fully reusable with extensive customization options
 * - TypeScript support for type safety
 * - Optimized for Next.js applications
 */
const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  src,
  alt = 'tilt-image',
  placeholder = 'empty',
  width,
  height,
  rotateIntensity = 15,
  transformIntensity = 30,
  springConfig = { stiffness: 400, damping: 30 },
  enableShadow = true,
  enableScale = true,
  style = {},
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState<FrameState>({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });

  // Motion values with spring animation
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const shadowX = useSpring(0, springConfig);
  const shadowY = useSpring(30, springConfig);
  const scale = useSpring(1, springConfig);

  // Dynamic shadow using motion template
  const filter = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.25))`;

  // Convert cursor position to transform values
  const convertCursorPosition = (e: MouseEvent<HTMLDivElement>): void => {
    if (!ref.current) return;

    const objectX = (e.nativeEvent.clientX - frame.left) / frame.width;
    const objectY = (e.nativeEvent.clientY - frame.top) / frame.height;

    // Rotation transforms
    rotateX.set(transform(objectY, [0, 1], [rotateIntensity, -rotateIntensity]));
    rotateY.set(transform(objectX, [0, 1], [-rotateIntensity, rotateIntensity]));
    
    // Translation transforms
    x.set(transform(objectX, [0, 1], [-transformIntensity, transformIntensity]));
    y.set(transform(objectY, [0, 1], [-transformIntensity, transformIntensity]));

    // Shadow effects
    if (enableShadow) {
      shadowX.set(transform(objectX, [0, 1], [20, -20]));
      shadowY.set(transform(objectY, [0, 1], [60, 20]));
    }

    // Scale effect
    if (enableScale) {
      scale.set(1.05);
    }
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>): void => {
    if (!ref.current) return;

    const currentElement = ref.current.getBoundingClientRect();
    setFrame({
      width: currentElement.width,
      height: currentElement.height,
      top: currentElement.top,
      left: currentElement.left
    });

    convertCursorPosition(e);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    convertCursorPosition(e);
  };

  const handleMouseLeave = (): void => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
    shadowX.set(0);
    shadowY.set(30);
    scale.set(1);
  };

  return (
    <div 
      className={`inline-block ${className}`}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width,
          height,
          rotateX,
          rotateY,
          scale: enableScale ? scale : 1,
          transformStyle: 'preserve-3d',
          cursor: 'pointer',
          ...style
        }}
        className="relative"
        {...props}
      >
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            x,
            y,
            filter: enableShadow ? filter : 'none',
            transform: 'translateZ(50px)',
          }}
          className="rounded-xl overflow-hidden"
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="rounded-xl shadow-lg"
              placeholder={placeholder}
              style={{
                transform: 'translateZ(50px)',
              }}
            />
          ) : (
            <div
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-xl"
              style={{
                width: '100%',
                height: '100%',
                transform: 'translateZ(50px)',
              }}
            >
              {children || 'Tilt Card'}
            </div>
          )}
        </motion.div>
        
        {/* Optional overlay for enhanced 3D effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 pointer-events-none"
          style={{
            transform: 'translateZ(75px)',
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default TiltCard;

