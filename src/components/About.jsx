import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const bioParagraphs = [
  "Hi, I'm a passionate and results-driven mobile app developer specializing in Flutter and FlutterFlow. I create sleek, high-performance cross-platform applications that run seamlessly on both iOS and Android.",
  'With over 3 years of hands-on experience, I have a strong foundation in Dart, modern architectures like MVVM, and state management solutions such as GetX, Provider, and Riverpod. I build scalable applications with clean, maintainable code and reusable components.',
  'I work extensively with backend services including Firebase (Authentication, Firestore, FCM) and Supabase, and I integrate REST APIs with a focus on reliability, performance, and efficient error handling.',
  "I enjoy turning ideas into real-world products—whether it's building from scratch or enhancing existing applications. FlutterFlow helps me rapidly prototype and deliver polished UI, while Flutter gives me full control to fine-tune performance and user experience.",
];

function ScrollRevealName() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.35,
    rootMargin: '0px 0px -8% 0px',
  });

  return (
    <div ref={ref} className="mt-12 flex flex-col items-center gap-2">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)]"
      >
        Flutter &amp; FlutterFlow
      </motion.p>
      <motion.h3
        initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
        animate={
          inView
            ? { opacity: 1, y: 0, filter: 'blur(0px)' }
            : { opacity: 0, y: 28, filter: 'blur(8px)' }
        }
        transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="font-orbitron text-2xl font-bold tracking-wide text-[var(--text-primary)] sm:text-3xl md:text-4xl"
      >
        Vraj Hirapara
      </motion.h3>
    </div>
  );
}

export default function About() {
  return (
    <Element name="about" className="relative">
      <section
        id="about"
        className="relative scroll-mt-28 px-4 pb-24 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12"
      >
        <div className="pointer-events-none absolute left-1/4 top-20 h-48 w-48 rounded-full bg-[var(--neon-blue)] opacity-[0.045] blur-[80px]" />

        <div className="relative z-[2] mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center font-orbitron text-3xl font-bold text-[var(--text-primary)] md:text-4xl"
          >
            About <span className="text-[var(--neon-blue)]">Me</span>
          </motion.h2>

          <div className="space-y-5">
            {bioParagraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: 0.06 * i,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-sora text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <ScrollRevealName />
        </div>
      </section>
    </Element>
  );
}
