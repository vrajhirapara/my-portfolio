import { motion, AnimatePresence } from 'framer-motion';

const LOGO_SRC = `${import.meta.env.BASE_URL}loading-brand-logo.png`;

export default function LoadingScreen({ show, onDone }) {
  return (
    <AnimatePresence onExitComplete={onDone}>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10001] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative flex flex-col items-center px-6">
            <motion.div
              className="absolute left-1/2 top-[42%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl md:h-52 md:w-52"
              animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img
              src={LOGO_SRC}
              alt="Vraj Hirapara"
              width={800}
              height={800}
              decoding="async"
              draggable={false}
              className="relative h-32 w-32 select-none object-contain drop-shadow-[0_0_28px_rgba(255,255,255,0.12)] md:h-40 md:w-40"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{
                opacity: 1,
                scale: [1, 1.04, 1],
                // rotate: [0, 360],
              }}
              transition={{
                opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
                rotate: { duration: 18, repeat: Infinity, ease: 'linear', delay: 0.15 },
              }}
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: [0.72, 1, 0.72],
                y: 0,
              }}
              transition={{
                opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
                y: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              }}
              className="relative mt-10 text-center font-jetbrains text-sm tracking-[0.35em] text-[var(--text-primary)] md:mt-12 md:text-base md:tracking-[0.4em]"
            >
              Vraj Hirapara
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
