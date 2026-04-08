import { useRef } from 'react';
import { Element } from 'react-scroll';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail } from 'lucide-react';
import { IconGithub, IconLinkedin } from './SocialBrandIcons';
import { Link } from 'react-scroll';
import { gmailComposeUrl } from '../utils/gmailCompose';

const FLUTTER_LOGO_HERO_SRC = `${import.meta.env.BASE_URL}flutter-logo-hero.png`;

const titleWords = 'Flutter & FlutterFlow That Ships'.split(' ');

const social = [
  // { Icon: IconGithub, href: 'https://github.com/vraj-hirapara', label: 'GitHub' },
  { Icon: IconLinkedin, href: 'https://www.linkedin.com/in/vraj-hirapara', label: 'LinkedIn' },
  { Icon: Mail, href: gmailComposeUrl('vrajmhirapara3@gmail.com'), label: 'Email' },
];

const chipVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 1.2 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const chips = ['Flutter', 'Dart', 'Firebase', 'FlutterFlow'];

export default function Hero() {
  const wrapRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(my, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(smoothY, [-120, 120], [14, -14]);
  const rotateY = useTransform(smoothX, [-120, 120], [-14, 14]);

  const onMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) / 4);
    my.set((e.clientY - (r.top + r.height / 2)) / 4);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <Element name="home" className="relative">
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-4 pb-8 pt-32 sm:px-6 sm:pb-10 lg:px-8"
      >
        <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[var(--neon-purple)] opacity-[0.11] blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-[var(--neon-blue)] opacity-[0.1] blur-[100px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--neon-pink)] opacity-[0.08] blur-[90px]" />

        <div className="relative z-[2] mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center gap-1 font-jetbrains text-xs uppercase tracking-[0.2em] text-[var(--neon-blue)] sm:text-sm"
            >
              <TypeAnimation
                sequence={['Flutter & FlutterFlow Developer', 2800, '', 600]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
              />
              <span className="animate-blink-cursor inline-block h-4 w-0.5 bg-[var(--neon-blue)] align-middle shadow-[0_0_8px_var(--neon-blue)]" />
            </motion.div>

            <motion.h1
              className="font-orbitron text-3xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl"
              animate={{
                textShadow: [
                  '0 0 20px rgba(0,200,240,0.18), 0 0 40px rgba(107,36,232,0.12)',
                  '0 0 28px rgba(230,40,106,0.14), 0 0 48px rgba(0,200,240,0.16)',
                  '0 0 20px rgba(0,200,240,0.18), 0 0 40px rgba(107,36,232,0.12)',
                ],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {titleWords.map((word, i) => (
                <motion.span
                  key={word + i}
                  className="mr-[0.2em] inline-block"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.07,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-6 max-w-xl font-sora text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
            >
              I craft high-performance cross-platform apps with pixel-perfect UI, Firebase and API
              integrations, and scalable architecture—from idea to Play Store and App Store.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="projects" smooth duration={600} offset={-104}>
                <motion.span
                  className="relative inline-flex cursor-pointer overflow-hidden rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-8 py-3.5 font-orbitron text-sm font-semibold text-[var(--bg-primary)] shadow-neon"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="pointer-events-none absolute inset-0 bg-white/20"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ x: '100%', opacity: 0.3 }}
                    transition={{ duration: 0.6 }}
                  />
                  View My Work
                </motion.span>
              </Link>
              <motion.a
                href={gmailComposeUrl('vrajmhirapara3@gmail.com', { subject: 'Resume request' })}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-[var(--neon-blue)] px-8 py-3.5 font-orbitron text-sm font-semibold text-[var(--neon-blue)]"
                whileHover={{
                  scale: 1.03,
                  backgroundColor: 'rgba(0, 200, 240, 0.08)',
                  boxShadow: '0 0 22px rgba(0,200,240,0.22)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                Request Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15 }}
              className="mt-10 flex gap-4"
            >
              {social.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--text-secondary)]"
                  whileHover={{
                    y: -4,
                    color: 'var(--neon-blue)',
                    borderColor: 'rgba(0,200,240,0.35)',
                    boxShadow: '0 0 16px rgba(0,200,240,0.2)',
                  }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div
            ref={wrapRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="relative mx-auto flex min-h-[420px] w-full max-w-md items-center justify-center lg:mx-0 lg:max-w-none"
          >
            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1200 }}
              className="relative z-[2]"
            >
              <div className="relative">
                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[var(--neon-blue)]/18 via-[var(--neon-purple)]/12 to-[var(--neon-pink)]/14 blur-2xl" />
                <div className="relative rounded-[2.25rem] border-2 border-[var(--glass-border)] bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-primary)] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.75)]">
                  <div className="overflow-hidden rounded-[2rem] bg-[var(--bg-secondary)]">
                    <div className="flex h-[420px] w-[220px] flex-col items-center justify-center gap-6 bg-gradient-to-b from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[#000000] px-4 sm:h-[460px] sm:w-[240px]">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <motion.img
                          src={FLUTTER_LOGO_HERO_SRC}
                          alt="Flutter"
                          width={256}
                          height={256}
                          decoding="async"
                          draggable={false}
                          className="h-28 w-28 select-none object-contain sm:h-32 sm:w-32"
                          animate={{
                            filter: [
                              'drop-shadow(0 0 12px rgba(0,200,240,0.35)) drop-shadow(0 0 22px rgba(66,165,245,0.2))',
                              'drop-shadow(0 0 16px rgba(66,165,245,0.4)) drop-shadow(0 0 26px rgba(25,118,210,0.22))',
                              'drop-shadow(0 0 12px rgba(0,200,240,0.35)) drop-shadow(0 0 22px rgba(66,165,245,0.2))',
                            ],
                          }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      </motion.div>
                      <p className="text-center font-jetbrains text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                        Flutter · Dart · Widgets
                      </p>
                      <div className="flex gap-2">
                        <span className="h-1.5 w-8 rounded-full bg-[var(--neon-blue)]/40" />
                        <span className="h-1.5 w-8 rounded-full bg-[var(--neon-purple)]/40" />
                        <span className="h-1.5 w-8 rounded-full bg-[var(--neon-pink)]/40" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-3 h-5 w-16 -translate-x-1/2 rounded-full bg-black/80" />
                </div>
              </div>
            </motion.div>

            {chips.map((c, i) => (
              <motion.span
                key={c}
                custom={i}
                variants={chipVariants}
                initial="initial"
                animate="animate"
                className="absolute z-[3] rounded-full border border-[var(--glass-border)] bg-[var(--glass)] px-3 py-1.5 font-jetbrains text-[10px] font-medium uppercase tracking-wider text-[var(--neon-blue)] shadow-lg backdrop-blur-md sm:text-xs"
                style={{
                  top: i === 0 ? '8%' : i === 1 ? '12%' : i === 2 ? '72%' : '78%',
                  left: i === 0 ? '-4%' : i === 1 ? '88%' : i === 2 ? '-8%' : '82%',
                }}
                whileHover={{ scale: 1.08, boxShadow: '0 0 16px rgba(0,200,240,0.2)' }}
              >
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}
