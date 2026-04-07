import { Link } from 'react-scroll';

const quick = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--bg-secondary)]/80 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row md:justify-between md:items-start">
        <div className="text-center md:text-left">
          <p className="font-orbitron text-xl font-bold">
            <span className="text-[var(--text-primary)]">Vraj Hirapara</span>
          </p>
          <p className="mt-2 max-w-xs font-sora text-sm text-[var(--text-secondary)]">
            Flutter &amp; FlutterFlow · Surat, Gujarat · Cross-platform apps with polish.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {quick.map((q) => (
            <Link
              key={q.to}
              to={q.to}
              smooth
              duration={500}
              offset={-104}
              className="cursor-pointer font-sora text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--neon-blue)]"
            >
              {q.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* <p className="mx-auto mt-10 max-w-3xl text-center font-jetbrains text-xs text-[var(--text-secondary)]/80">
        Built with Flutter... I mean React 😄
      </p> */}
      <p className="mt-4 text-center font-sora text-xs text-[var(--text-secondary)]">
        © {new Date().getFullYear()} Vraj Hirapara. All rights reserved.
      </p>
    </footer>
  );
}
