import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const InteractiveCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Snappy smooth spring dynamics
  const springConfig = { stiffness: 600, damping: 35, mass: 0.15 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const ringConfig = { stiffness: 350, damping: 28, mass: 0.3 };
  const ringX = useSpring(mouseX, ringConfig);
  const ringY = useSpring(mouseY, ringConfig);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('[data-cursor]') as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute('data-cursor') || '';
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* Precision Crimson Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#C83E3D] rounded-full pointer-events-none z-[9999] shadow-[0_0_8px_#C83E3D]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Sleek Translucent Glass Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full border border-[#C83E3D]/40 backdrop-blur-[2px] bg-[#C83E3D]/10 transition-colors duration-200"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? Math.max(76, cursorText.length * 8.5 + 18) : 38) : 26,
          height: isHovered ? 30 : 26,
          borderColor: isHovered ? '#C83E3D' : 'rgba(200, 62, 61, 0.4)',
          backgroundColor: isHovered ? 'rgba(200, 62, 61, 0.85)' : 'rgba(200, 62, 61, 0.1)',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 28 }}
      >
        {isHovered && cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="font-mono-editorial text-[9px] font-bold uppercase tracking-widest text-[#FFFFFF] px-2"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
