import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Smartphone,
  Flame,
  Layers,
  Code2,
  GitBranch,
  PenTool,
  Store,
  Database,
} from 'lucide-react';

// const coreSkills = [
//   { name: 'Flutter / FlutterFlow', pct: 95, color: 'from-[var(--neon-blue)] to-[var(--neon-purple)]' },
//   { name: 'Dart', pct: 95, color: 'from-sky-400 to-cyan-600' },
//   { name: 'Firebase', pct: 95, color: 'from-[var(--neon-pink)] to-[var(--neon-purple)]' },
//   { name: 'REST APIs', pct: 98, color: 'from-[var(--accent-green)] to-[var(--neon-blue)]' },
//   {
//     name: 'State management (GetX, Riverpod)',
//     pct: 92,
//     color: 'from-[var(--neon-purple)] to-[var(--neon-pink)]',
//   },
//   { name: 'MVVM & scalable UI', pct: 98, color: 'from-[var(--neon-blue)] to-[var(--accent-green)]' },
// ];

const coreSkills = [
  {
    name: 'Flutter / FlutterFlow',
    pct: 95,
    color: 'from-cyan-400/80 to-sky-600/80',
  },
  {
    name: 'Dart',
    pct: 95,
    color: 'from-cyan-400/80 to-sky-600/80',
  },
  {
    name: 'Firebase',
    pct: 95,
    color: 'from-cyan-400/80 to-sky-600/80',
  },
  {
    name: 'REST APIs',
    pct: 98,
    color: 'from-cyan-400/80 to-sky-600/80',
  },
  {
    name: 'State management (GetX, Riverpod)',
    pct: 92,
    color: 'from-cyan-400/80 to-sky-600/80',
  },
  {
    name: 'MVVM & scalable UI',
    pct: 98,
    color: 'from-cyan-400/80 to-sky-600/80',
  },
];
// const coreSkills = [
//   {
//     name: 'Flutter / FlutterFlow',
//     pct: 95,
//     color: 'from-gray-400/70 to-gray-600/70',
//   },
//   {
//     name: 'Dart',
//     pct: 95,
//     color: 'from-gray-300/70 to-gray-500/70',
//   },
//   {
//     name: 'Firebase',
//     pct: 95,
//     color: 'from-gray-500/70 to-gray-700/70',
//   },
//   {
//     name: 'REST APIs',
//     pct: 98,
//     color: 'from-gray-400/70 to-gray-700/70',
//   },
//   {
//     name: 'State management (GetX, Riverpod)',
//     pct: 92,
//     color: 'from-gray-300/70 to-gray-600/70',
//   },
//   {
//     name: 'MVVM & scalable UI',
//     pct: 98,
//     color: 'from-gray-500/70 to-gray-800/70',
//   },
// ];

const extraSkills = [
  { Icon: Code2, label: 'Dart' },
  { Icon: Database, label: 'Supabase' },
  { Icon: GitBranch, label: 'Git & collaboration' },
  { Icon: PenTool, label: 'UI/UX handoff' },
  { Icon: Store, label: 'Play & App Store' },
];

function ProgressRow({ name, pct, color, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="mb-6 last:mb-0"
    >
<div className="mb-2 flex justify-between font-sora text-sm text-white/70">        <span>{name}</span>
        <span className="font-jetbrains text-[var(--neon-blue)]">{pct}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-[var(--bg-primary)] ring-1 ring-[var(--glass-border)]">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color} shadow-[0_0_10px_rgba(0,200,240,0.22)]`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 1.4, delay: 0.15 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <Element name="skills" className="relative">
      <section
        id="skills"
        className="relative scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--neon-purple)] opacity-[0.08] blur-[90px]" />

        <div className="relative z-[2] mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center font-orbitron text-3xl font-bold md:text-4xl"
          >
            Tech Stack & <span className="text-[var(--neon-blue)]">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-2xl text-center font-sora text-[var(--text-secondary)]"
          >
            Flutter, FlutterFlow, Firebase, and APIs—plus the soft skills that keep projects on track.
          </motion.p>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl border border-[var(--glass-border)] p-8"
            >
              <h3 className="mb-8 flex items-center gap-2 font-orbitron text-lg text-[var(--neon-blue)]">
                <Layers className="h-5 w-5" />
                Development skills
              </h3>
              {coreSkills.map((s, i) => (
                <ProgressRow key={s.name} {...s} index={i} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel rounded-3xl border border-[var(--glass-border)] p-8"
            >
              <h3 className="mb-8 flex items-center gap-2 font-orbitron text-lg text-[var(--neon-pink)]">
                <Flame className="h-5 w-5" />
                Personal &amp; collaboration
              </h3>
              <div className="mb-8 flex flex-wrap gap-2">
                {[
                  'Leadership',
                  'Client communication',
                  'Project management',
                  'Time management',
                  'Logical thinking',
                  'Adaptability',
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-[var(--glass-border)] bg-[var(--bg-primary)]/50 px-3 py-1.5 font-sora text-xs text-[var(--text-secondary)]"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <h4 className="mb-4 font-jetbrains text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                Also using
              </h4>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {extraSkills.map(({ Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                      boxShadow: '0 0 24px rgba(123, 47, 255, 0.35)',
                    }}
                    className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/50 p-6 text-center"
                  >
                    <Icon className="h-8 w-8 text-[var(--neon-purple)]" />
                    <span className="font-sora text-xs text-[var(--text-secondary)] sm:text-sm">
                      {label}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, boxShadow: '0 0 18px rgba(0, 200, 240, 0.14)' }}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/50 p-6 text-center sm:col-span-2 lg:col-span-1"
                >
                  <Smartphone className="h-8 w-8 text-[var(--neon-blue)]" />
                  <span className="font-sora text-sm text-[var(--text-secondary)]">
                    Android &amp; iOS
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Element>
  );
}
