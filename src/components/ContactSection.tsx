import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  Check,
  Copy,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [submittedMailto, setSubmittedMailto] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [githubNotice, setGithubNotice] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Clipboard fallback not critical
    }
  };

  const handleGithubClick = () => {
    if (PROFILE.githubUrl) {
      window.open(PROFILE.githubUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setGithubNotice(true);
    window.setTimeout(() => setGithubNotice(false), 4500);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');

    const trimmedName = name.trim();
    const trimmedEmail = senderEmail.trim();
    const trimmedSubject = subject.trim() || `Portfolio inquiry from ${trimmedName}`;
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setFormError('Please fill in your name, email address, and message.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    const bodyText = `Hi Anant,\n\n${trimmedMessage}\n\n---\nFrom: ${trimmedName} (${trimmedEmail})`;
    const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      trimmedSubject
    )}&body=${encodeURIComponent(bodyText)}`;

    setSubmittedMailto(mailtoHref);
    window.location.href = mailtoHref;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-20 border-t border-white/[0.06]"
    >
      <div className="space-y-2 mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[#a2e7ff]">
          Get in Touch
        </p>
        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#e0e2ed]"
        >
          Let&apos;s Connect &amp; Collaborate
        </h2>
        <p className="text-sm sm:text-base text-[#c9c4d8] max-w-2xl">
          Open to learning collaborations, AI/ML study groups, student projects, and software
          development opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Direct Channels */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 rounded-2xl bg-[#181b23] border border-white/[0.08] p-6 flex flex-col justify-between gap-6"
        >
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-[#e0e2ed]">Direct Channels</h3>

            {/* Email Card */}
            <div className="p-4 rounded-xl bg-[#1d2027] border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#272a32] flex items-center justify-center text-[#a2e7ff] shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#938ea1]">
                    Email
                  </p>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-sm font-medium text-[#e0e2ed] hover:text-[#a2e7ff] transition-colors break-all"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#272a32] hover:bg-[#32353d] text-xs font-medium text-[#e0e2ed] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#a2e7ff]" aria-hidden="true" />
                  <span>Email Me</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#0b0e15] hover:bg-[#272a32] border border-white/[0.07] text-xs font-mono text-[#c9c4d8] transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#a2e7ff]" aria-hidden="true" />
                      <span className="text-[#a2e7ff]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2.5">
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#1d2027] hover:bg-[#272a32] border border-white/[0.06] hover:border-[#00d2fd]/35 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#272a32] flex items-center justify-center text-[#a2e7ff] shrink-0">
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#e0e2ed]">LinkedIn</p>
                    <p className="font-mono text-xs text-[#938ea1] truncate">
                      {PROFILE.linkedinHandle}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#938ea1] shrink-0" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={handleGithubClick}
                className="w-full text-left flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#1d2027] hover:bg-[#272a32] border border-white/[0.06] hover:border-[#947dff]/35 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#272a32] flex items-center justify-center text-[#cabeff] shrink-0">
                    <Github className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#e0e2ed]">GitHub</p>
                    <p className="font-mono text-xs text-[#938ea1] truncate">
                      {PROFILE.githubUrl || 'Placeholder — Add your GitHub URL'}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#938ea1] shrink-0" aria-hidden="true" />
              </button>

              {githubNotice && (
                <p
                  role="status"
                  className="p-3 rounded-lg bg-[#0b0e15] border border-[#947dff]/40 font-mono text-xs text-[#cabeff]"
                >
                  Placeholder: Set <code className="text-[#a2e7ff]">githubUrl</code> in{' '}
                  <code className="text-[#a2e7ff]">src/data/portfolioData.ts</code> to activate your
                  GitHub link.
                </p>
              )}

              <button
                type="button"
                onClick={onOpenResume}
                className="w-full text-left flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#1d2027] hover:bg-[#272a32] border border-white/[0.06] hover:border-[#cabeff]/35 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#272a32] flex items-center justify-center text-[#e6deff] shrink-0">
                    <FileText className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#e0e2ed]">Resume / CV</p>
                    <p className="font-mono text-xs text-[#938ea1] truncate">
                      {PROFILE.resumeUrl ? 'Download PDF Resume' : 'Preview & Starter Download'}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#cabeff] shrink-0">Open</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06] text-xs text-[#938ea1]">
            <MapPin className="w-4 h-4 text-[#cabeff] shrink-0" aria-hidden="true" />
            <span>
              {PROFILE.university} · {PROFILE.hometown}
            </span>
          </div>
        </motion.div>

        {/* Right Column: Email Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 rounded-2xl bg-[#181b23] border border-white/[0.08] p-6"
        >
          <h3 className="text-base font-semibold text-[#e0e2ed] mb-1">Send a Direct Message</h3>
          <p className="text-xs text-[#938ea1] mb-5">
            Composes a pre-filled email directly to {PROFILE.email}.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs text-[#c9c4d8]"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Sharma"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0e15] border border-white/10 text-sm text-[#e0e2ed] placeholder:text-[#938ea1]/60 focus:outline-none focus:border-[#947dff] focus:ring-2 focus:ring-[#947dff]/30"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-xs text-[#c9c4d8]"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0e15] border border-white/10 text-sm text-[#e0e2ed] placeholder:text-[#938ea1]/60 focus:outline-none focus:border-[#947dff] focus:ring-2 focus:ring-[#947dff]/30"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-subject"
                className="block font-mono text-xs text-[#c9c4d8]"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Project collaboration or AI study group"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0e15] border border-white/10 text-sm text-[#e0e2ed] placeholder:text-[#938ea1]/60 focus:outline-none focus:border-[#947dff] focus:ring-2 focus:ring-[#947dff]/30"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="block font-mono text-xs text-[#c9c4d8]"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0e15] border border-white/10 text-sm text-[#e0e2ed] placeholder:text-[#938ea1]/60 focus:outline-none focus:border-[#947dff] focus:ring-2 focus:ring-[#947dff]/30 resize-y"
              />
            </div>

            {formError && (
              <p
                role="alert"
                className="p-3 rounded-lg bg-[#93000a]/30 border border-[#ffb4ab]/40 text-xs text-[#ffdad6]"
              >
                {formError}
              </p>
            )}

            {submittedMailto && (
              <div
                role="status"
                className="p-3.5 rounded-lg bg-[#0b0e15] border border-[#00d2fd]/40 text-xs text-[#c9c4d8] space-y-1.5"
              >
                <p className="text-[#a2e7ff] font-medium">
                  Email draft ready for your mail client.
                </p>
                <p>
                  If your mail app did not open automatically,{' '}
                  <a href={submittedMailto} className="text-[#cabeff] underline">
                    click here to open email draft
                  </a>{' '}
                  or email <span className="font-mono text-[#e0e2ed]">{PROFILE.email}</span>.
                </p>
              </div>
            )}

            <div className="flex items-center justify-between gap-3 pt-1">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#947dff] to-[#613de0] text-[#f5f7fa] text-sm font-medium shadow-[0_0_20px_-4px_rgba(124,92,252,0.45)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Send Message</span>
              </button>

              <span className="font-mono text-[11px] text-[#938ea1]">
                Direct mailto dispatch
              </span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
