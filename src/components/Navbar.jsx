import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const linkBase =
  'relative cursor-pointer font-sora text-sm font-medium text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--neon-blue)]';

const NavLink = ({ to, label, onClick, mobile }) => (
  <Link
    to={to}
    spy
    smooth
    duration={600}
    offset={-104}
    activeClass="!text-[var(--neon-blue)] nav-active"
    onClick={onClick}
    className={`${linkBase} group relative inline-flex flex-col ${mobile ? 'py-3 text-lg' : ''}`}
  >
    <span className="relative z-10">{label}</span>
    <span className="nav-underline absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] transition-all duration-300 group-hover:w-full" />
  </Link>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-[9990] transition-all duration-300 ${
          scrolled ? 'border-b border-[var(--glass-border)] py-5' : 'py-8'
        }`}
      >
        <div
          className={`mx-auto flex min-h-[52px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:min-h-[56px] ${
            scrolled ? 'glass-panel rounded-2xl shadow-lg shadow-black/20' : ''
          }`}
        >
          <Link
            to="home"
            smooth
            duration={500}
            offset={-104}
            className="cursor-pointer font-orbitron text-lg font-bold tracking-tight md:text-xl"
          >
            <span className="text-[var(--text-primary)]">Vraj</span>
            <span className="text-[var(--neon-blue)] drop-shadow-[0_0_10px_rgba(0,200,240,0.4)]">
              .dev
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} label={item.label} />
            ))}
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--neon-blue)] md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9991] bg-black/70 backdrop-blur-sm md:hidden"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="fixed bottom-0 right-0 top-0 z-[9992] w-[min(100%,320px)] border-l border-[var(--glass-border)] bg-[var(--bg-secondary)]/95 p-6 shadow-[-12px_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-orbitron text-sm font-semibold text-[var(--neon-blue)]">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--glass-border)] text-[var(--text-primary)]"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col" aria-label="Mobile">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    label={item.label}
                    mobile
                    onClick={() => setOpen(false)}
                  />
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
