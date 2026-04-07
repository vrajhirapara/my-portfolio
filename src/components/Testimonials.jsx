import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Consistently strong Flutter delivery—clean architecture, clear handoffs, and attention to what users actually complain about in production.',
    name: 'Engineering lead',
    company: 'Product team',
  },
  {
    quote:
      'Great partner on complex flows: fintech linking, marketplace logistics, and AI features—all without sacrificing app performance.',
    name: 'Product manager',
    company: 'Mobile squad',
  },
  {
    quote:
      'Communicates well with design and backend, ships on time, and cares about store quality and long-term maintainability.',
    name: 'Tech lead',
    company: 'Cross-functional team',
  },
  {
    quote:
      'FlutterFlow speed when it fits, Flutter depth when it matters—that balance saved us weeks on our roadmap.',
    name: 'Founder',
    company: 'Early-stage startup',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--neon-purple)] opacity-[0.07] blur-[90px]" />

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-[2] mb-12 text-center font-orbitron text-3xl font-bold md:text-4xl"
      >
        Collaboration <span className="text-[var(--neon-pink)]">Notes</span>
      </motion.h2>
      <p className="relative z-[2] mx-auto mb-10 max-w-2xl text-center font-sora text-sm text-[var(--text-secondary)]">
        The kind of feedback I optimize for when building with product, design, and backend teams.
      </p>

      <div className="relative z-[2] mx-auto max-w-7xl">
        <div className="relative mask-linear-fade overflow-hidden py-2">
          <motion.div
            className="flex w-max gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 42,
                ease: 'linear',
              },
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <article
                key={`${t.name}-${i}`}
                className="glass-panel relative w-[min(100vw-3rem,380px)] shrink-0 rounded-2xl border border-[var(--glass-border)] p-6"
              >
                <Quote className="absolute right-5 top-5 h-10 w-10 text-[var(--neon-blue)] opacity-20" />
                <p className="relative z-[1] font-sora text-sm leading-relaxed text-[var(--text-secondary)]">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] font-orbitron text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-orbitron text-sm text-[var(--text-primary)]">{t.name}</p>
                    <p className="font-jetbrains text-xs text-[var(--neon-blue)]">{t.company}</p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .mask-linear-fade {
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
      `}</style>
    </section>
  );
}
