import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[9999] h-1 w-full origin-left bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-pink)] shadow-[0_0_8px_rgba(0,200,240,0.25)]"
      style={{ scaleX }}
    />
  );
}
