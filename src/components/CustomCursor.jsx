import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

/**
 * No spring (instant follow), passive listeners, opacity as motion value
 * so mousemove never triggers React re-renders.
 */
export default function CustomCursor() {
  const [finePointer, setFinePointer] = useState(true);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const update = () => setFinePointer(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!finePointer) return undefined;
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      opacity.set(1);
    };
    const onLeave = () => opacity.set(0);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.body.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.removeEventListener('mouseleave', onLeave);
    };
  }, [finePointer, x, y, opacity]);

  if (!finePointer) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[10000] transform-gpu will-change-transform"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        opacity,
      }}
    >
      <div className="relative h-[14px] w-[14px]">
        <div className="absolute inset-0 rounded-full border border-[var(--neon-blue)] shadow-[0_0_10px_rgba(0,200,240,0.5),inset_0_0_0_1px_rgba(255,255,255,0.3)]" />
        <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </div>
    </motion.div>
  );
}
