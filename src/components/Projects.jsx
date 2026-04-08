import { useMemo, useState } from 'react';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  ExternalLink,
  Landmark,
  Store,
  Home,
  FileSpreadsheet,
  Sparkles,
  Clapperboard,
} from 'lucide-react';

const filters = ['All', 'Finance', 'Marketplace', 'Business', 'AI & Media', 'POS'];

const projects = [
  {
    title: 'Mojek Money',
    subtitle: 'Finance Tracker',
    cat: 'Finance',
    desc:
      'Account Aggregator–powered personal finance: unified banking, cards, and investments, transaction intelligence, net worth, and secure OTP linking.',
    tags: ['Flutter', 'Account Aggregator', 'Firebase'],
    gradient: 'from-emerald-500/40 via-cyan-600/40 to-blue-500/40',
    Icon: Landmark,
    image: '/mojek-money.png',
    imageAlt: 'Mojek Money app: credit cards, rewards, cashback, and spending insights',
    links: [
      {
        label: 'Play Store',
        href: 'https://play.google.com/store/apps/details?id=money.mojek.finance_manager_tracker&hl=en_IN',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/in/app/mojek-money-finance-tracker/id6468569182',
      },
    ],
  },
  {
    title: 'Wosul Kiosk',
    subtitle: 'Point of Sale',
    cat: 'POS',
    desc:
      'Cloud POS with inventory, sales, and branch sync—cashier terminals, mobile, barcode, drawers, printers, subscriptions, and marketplace ops.',
    tags: ['Flutter', 'Cloud POS', 'Multi-branch'],
    gradient: 'from-violet-500/40 via-purple-600/40 to-fuchsia-500/40',
    Icon: Store,
    image: '/wosul-pos.png',
    imageAlt: 'Wosul handheld POS terminal showing Arabic product catalog and cart UI',
    links: [],
  },
  {
    title: 'Rentworthy',
    subtitle: 'Peer-to-peer rentals',
    cat: 'Marketplace',
    desc:
      'List, browse, and rent items with verification, listing approval, and pickup or delivery logistics—built with product and ops.',
    tags: ['Flutter', 'Marketplace', 'Logistics'],
    gradient: 'from-sky-500/40 via-indigo-600/40 to-violet-500/40',
    Icon: Home,
    image: '/rentworthy-mockup.png',
    imageAlt: 'Rentworthy mobile app: splash screen and browse listings UI',
    links: [{ label: 'Website', href: 'https://www.rentworthy.us/' }],
  },
  {
    title: 'Acounta',
    subtitle: 'Practice management',
    cat: 'Business',
    desc:
      'Documents, invoicing, tasks, client portal, e-signatures, time tracking, unified comms, AI document tagging, and role-based workflows.',
    tags: ['Flutter', 'Firebase', 'AI automation'],
    gradient: 'from-amber-500/40 via-orange-600/40 to-rose-500/40',
    Icon: FileSpreadsheet,
    image: '/acounta.png',
    imageAlt: 'Acounta app: dashboard, action items, document upload, and client workflows',
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.acconta.app' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/acounta/id6497225542' },
    ],
  },
  {
    title: 'Viral My Post',
    subtitle: 'AI captions & hashtags',
    cat: 'AI & Media',
    desc:
      'AI caption and hashtag engine for photos with prompts, multi-platform formats, and a fast inference pipeline integrated into Flutter.',
    tags: ['Flutter', 'AI', 'Social'],
    gradient: 'from-pink-500/40 via-fuchsia-600/40 to-cyan-500/40',
    Icon: Sparkles,
    image: '/viral-my-post.png',
    imageAlt: 'Viral My Post: AI-generated caption, hashtags, and copy for a photo',
    links: [
      {
        label: 'Play Store',
        href: 'https://play.google.com/store/apps/details?id=io.flutterflow.viralmypost',
      },
    ],
  },
  {
    title: 'Voops AI',
    subtitle: 'AI content creation',
    cat: 'AI & Media',
    desc:
      'AI video and image generation, faceless video, avatars, dubbing, subtitles, localization, and mobile integration with generation backends.',
    tags: ['Flutter', 'AI video', 'APIs'],
    gradient: 'from-cyan-500/40 via-blue-600/40 to-indigo-500/40',
    Icon: Clapperboard,
    image: '/voops-ai.png',
    imageAlt: 'Voops AI: AI influencer profile with image and video generation and gallery',
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.voops.ai' },
      { label: 'Web', href: 'https://voops.ai/' },
    ],
  },
];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.cat === active);
  }, [active]);

  return (
    <Element name="projects" className="relative">
      <section
        id="projects"
        className="relative scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute bottom-20 left-1/3 h-56 w-56 rounded-full bg-[var(--neon-pink)] opacity-[0.06] blur-[80px]" />

        <div className="relative z-[2] mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center font-orbitron text-3xl font-bold md:text-4xl"
          >
            Featured <span className="text-[var(--neon-purple)]">Projects</span>
          </motion.h2>

          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <motion.button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`rounded-full border px-5 py-2 font-jetbrains text-xs uppercase tracking-wider transition-all ${
                  active === f
                    ? 'border-[var(--neon-blue)] bg-[var(--neon-blue)]/12 text-[var(--neon-blue)] shadow-[0_0_16px_rgba(0,200,240,0.14)]'
                    : 'border-[var(--glass-border)] bg-[var(--glass)] text-[var(--text-secondary)] hover:border-[var(--neon-purple)]/50'
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>

          <motion.div layout className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => {
                const ProjectIcon = p.Icon;
                return (
                  <motion.div
                    key={p.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Tilt
                      tiltMaxAngleX={12}
                      tiltMaxAngleY={12}
                      scale={1.02}
                      transitionSpeed={400}
                      className="h-full"
                    >
                      <motion.article
                        className="group relative h-full overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--bg-secondary)]/80 shadow-xl backdrop-blur-md transition-shadow duration-300 hover:border-[var(--neon-blue)]/40 hover:shadow-[0_0_32px_rgba(0,200,240,0.08)]"
                        whileHover={{ y: -6 }}
                      >
                        <div
                          className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${p.gradient}`}
                        >
                          {p.image ? (
                            <>
                              <img
                                src={p.image}
                                alt={p.imageAlt ?? ''}
                                className="absolute inset-0 h-full w-full object-cover object-top"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/70 via-transparent to-black/25" />
                            </>
                          ) : (
                            <>
                              <ProjectIcon className="h-16 w-16 text-white/50" strokeWidth={1.25} />
                              <div className="absolute inset-0 bg-[var(--bg-primary)]/20" />
                            </>
                          )}
                          <span className="absolute left-4 top-4 z-[1] rounded-full border border-white/20 bg-black/30 px-3 py-1 font-jetbrains text-[10px] uppercase tracking-wider text-white backdrop-blur-sm">
                            {p.cat}
                          </span>
                        </div>
                        <div className="relative z-[1] p-6">
                          <h3 className="font-orbitron text-xl font-semibold text-[var(--text-primary)]">
                            {p.title}
                          </h3>
                          <p className="mt-0.5 font-jetbrains text-xs uppercase tracking-wider text-[var(--neon-purple)]">
                            {p.subtitle}
                          </p>
                          <p className="mt-2 font-sora text-sm leading-relaxed text-[var(--text-secondary)]">
                            {p.desc}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {p.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-md border border-[var(--glass-border)] bg-[var(--glass)] px-2 py-0.5 font-jetbrains text-[10px] text-[var(--neon-blue)]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {p.links.length > 0 ? (
                              p.links.map(({ label, href }) => (
                                <motion.a
                                  key={label + href}
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] px-3 py-2 font-jetbrains text-[10px] uppercase tracking-wider text-[var(--text-secondary)]"
                                  whileHover={{
                                    color: 'var(--neon-blue)',
                                    borderColor: 'rgba(0,200,240,0.38)',
                                  }}
                                >
                                  <ExternalLink className="h-3.5 w-3.5" />
                                  {label}
                                </motion.a>
                              ))
                            ) : (
                              <span className="font-jetbrains text-[10px] uppercase tracking-wider text-[var(--text-secondary)]/70">
                                Internal / B2B product
                              </span>
                            )}
                          </div>
                        </div>
                        <motion.div
                          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--bg-primary)]/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          initial={false}
                        >
                          {/* <span className="font-orbitron text-sm font-bold tracking-widest text-[var(--neon-blue)]">
                            {p.links.length ? 'Open links below' : 'Case study'}
                          </span> */}
                        </motion.div>
                        <motion.div
                          className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 translate-y-full bg-gradient-to-t from-[var(--neon-blue)]/5 to-transparent opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                          aria-hidden
                        />
                      </motion.article>
                    </Tilt>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Element>
  );
}
