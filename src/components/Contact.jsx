import { useState } from 'react';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Copy, Check } from 'lucide-react';
import { IconLinkedin } from './SocialBrandIcons';
import { gmailComposeUrl } from '../utils/gmailCompose';

const email = 'vrajmhirapara3@gmail.com';

function getWeb3FormsKey() {
  return (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim();
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setSendError('');
    setSent(false);

    const accessKey = getWeb3FormsKey();
    if (!accessKey) {
      setSendError(
        'Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to .env.local in the project root (same folder as package.json), then stop and restart the dev server. For a live site, add the same variable in your host’s settings and rebuild.'
      );
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[Portfolio] ${form.subject}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) {
        throw new Error(data.message || 'Could not send message. Try again or email directly.');
      }
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSendError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Element name="contact" className="relative">
      <section
        id="contact"
        className="relative scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--neon-blue)] opacity-[0.06] blur-[100px]" />
        <div className="pointer-events-none absolute left-1/3 top-20 h-64 w-64 rounded-full bg-[var(--neon-pink)] opacity-[0.05] blur-[80px]" />

        <div className="relative z-[2] mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center font-orbitron text-3xl font-bold md:text-4xl"
          >
            Let&apos;s <span className="text-[var(--neon-blue)]">Connect</span>
          </motion.h2>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-orbitron text-lg text-[var(--text-primary)]">Contact</h3>
                <p className="mt-2 font-sora text-[var(--text-secondary)]">
                  Open for Flutter &amp; FlutterFlow roles, contracts, and product teams building mobile apps.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--neon-blue)]" />
                <a
                  href={gmailComposeUrl(email)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jetbrains text-sm text-[var(--text-primary)] hover:text-[var(--neon-blue)]"
                >
                  {email}
                </a>
                <motion.button
                  type="button"
                  onClick={copyEmail}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--glass-border)] text-[var(--text-secondary)]"
                  whileHover={{ scale: 1.06, borderColor: 'rgba(0,200,240,0.32)' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Copy email"
                >
                  {copied ? <Check className="h-4 w-4 text-[var(--accent-green)]" /> : <Copy className="h-4 w-4" />}
                </motion.button>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--neon-purple)]" />
                <p className="font-sora text-[var(--text-secondary)]">India · Remote-friendly</p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-green)]/30 bg-[var(--accent-green)]/10 px-4 py-2">
                <motion.span
                  className="h-2 w-2 rounded-full bg-[var(--accent-green)]"
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-jetbrains text-xs uppercase tracking-wider text-[var(--accent-green)]">
                  Open to Work
                </span>
              </div>

              <div className="flex gap-3">
                {[
                  // { Icon: IconGithub, href: 'https://github.com/vraj-hirapara' },
                  { Icon: IconLinkedin, href: 'https://www.linkedin.com/in/vraj-hirapara' },
                  {
                    Icon: Mail,
                    href: gmailComposeUrl(email),
                  },
                ].map(({ Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    {...(href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--glass-border)] text-[var(--text-secondary)]"
                    whileHover={{ y: -3, color: 'var(--neon-blue)', boxShadow: '0 0 14px rgba(0,200,240,0.16)' }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={submit}
              className="glass-panel space-y-5 rounded-3xl border border-[var(--glass-border)] p-8"
            >
              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="mb-1.5 block font-jetbrains text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                    {field}
                  </label>
                  <input
                    id={field}
                    type={field === 'email' ? 'email' : 'text'}
                    required
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="input-neon w-full rounded-xl px-4 py-3 font-sora text-sm text-[var(--text-primary)]"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="mb-1.5 block font-jetbrains text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input-neon w-full resize-none rounded-xl px-4 py-3 font-sora text-sm text-[var(--text-primary)]"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] py-4 font-orbitron text-sm font-bold text-[var(--bg-primary)] shadow-neon disabled:opacity-70"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <motion.span
                    className="inline-block h-5 w-5 rounded-full border-2 border-[var(--bg-primary)] border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                  />
                ) : (
                  'Send Message'
                )}
              </motion.button>

              <AnimatePresence>
                {sendError && (
                  <motion.p
                    key="err"
                    role="alert"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center font-jetbrains text-sm text-red-400"
                  >
                    {sendError}
                  </motion.p>
                )}
                {sent && (
                  <motion.p
                    key="ok"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center font-jetbrains text-sm text-[var(--accent-green)]"
                  >
                    Message sent — I&apos;ll get back to you soon.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        </div>
      </section>
    </Element>
  );
}
