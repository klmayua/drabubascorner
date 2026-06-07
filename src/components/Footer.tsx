'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Globe, Radio, ChevronDown, ChevronUp } from 'lucide-react';
import { PUBLIC_LINKS } from '@/config/navigation.config';

// Custom brand icons in Lucide-matching SVG format
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isInstOpen, setIsInstOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="w-full mt-auto bg-[#0B2341] border-t border-[rgba(255,255,255,0.08)] text-white/80 pt-20 pb-[60px] transition-all duration-150">
      <div className="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
        
        {/* Column 1: Brand & Logo (30% width ratio) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-unit-md">
          <img
            alt="Institutional Logo Footer"
            className="h-10 w-auto object-contain brightness-0 invert opacity-80 self-start hover:translate-y-[-1px] transition-transform"
            src="/images/Dr_Abuba_Logo_Full-no_bg.png"
          />
          <p className="font-body-sm text-body-sm text-white/80 leading-relaxed max-w-sm">
            Advancing human excellence through a multi-disciplinary synthesis of classical wisdom, empirical health longevity research, and sovereign wealth architecture.
          </p>
        </div>

        {/* Column 2: Navigation Links (20% width ratio) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-2 flex flex-col border-b border-white/5 md:border-b-0 pb-4 md:pb-0">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="flex justify-between items-center w-full text-left md:pointer-events-none focus:outline-none focus:ring-0 select-none bg-transparent border-none p-0 cursor-pointer"
          >
            <h6 className="font-label-lg text-label-lg text-white font-semibold uppercase tracking-wider mb-2">Navigation</h6>
            <span className="md:hidden text-white/60">
              {isNavOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </button>
          <div className={`flex-col gap-unit-xs mt-2 md:mt-0 ${isNavOpen ? 'flex animate-fade-in-up' : 'hidden md:flex'}`}>
            {PUBLIC_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-body-sm text-body-sm text-white/80 hover:text-white transition-all py-1 md:py-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Institution Links (20% width ratio) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-2 flex flex-col border-b border-white/5 md:border-b-0 pb-4 md:pb-0">
          <button
            onClick={() => setIsInstOpen(!isInstOpen)}
            className="flex justify-between items-center w-full text-left md:pointer-events-none focus:outline-none focus:ring-0 select-none bg-transparent border-none p-0 cursor-pointer"
          >
            <h6 className="font-label-lg text-label-lg text-white font-semibold uppercase tracking-wider mb-2">Institution</h6>
            <span className="md:hidden text-white/60">
              {isInstOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </button>
          <div className={`flex-col gap-unit-xs mt-2 md:mt-0 ${isInstOpen ? 'flex animate-fade-in-up' : 'hidden md:flex'}`}>
            <Link href="/dashboard" className="font-body-sm text-body-sm text-white/80 hover:text-white transition-all py-1 md:py-0">
              Member Dashboard
            </Link>
            <Link href="/library" className="font-body-sm text-body-sm text-white/80 hover:text-white transition-all py-1 md:py-0">
              Research Library
            </Link>
            <Link href="/partners" className="font-body-sm text-body-sm text-white/80 hover:text-white transition-all py-1 md:py-0">
              Academic Cohort
            </Link>
            <Link href="/speaking-consulting" className="font-body-sm text-body-sm text-white/80 hover:text-white transition-all py-1 md:py-0">
              Speaking
            </Link>
            <Link href="/library" className="font-body-sm text-body-sm text-white/80 hover:text-white transition-all py-1 md:py-0">
              Resources
            </Link>
            <Link href="mailto:info@drabubascorner.edu" className="font-body-sm text-body-sm text-white/80 hover:text-white transition-all py-1 md:py-0">
              Contact
            </Link>
          </div>
        </div>

        {/* Column 4: Newsletter Signup (30% width ratio) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-unit-md">
          <h6 className="font-label-lg text-label-lg text-white font-semibold uppercase tracking-wider mb-2">The Weekly Dispatch</h6>
          <p className="font-body-sm text-body-sm text-white/80 leading-relaxed">
            Subscribe to receive periodic updates on research papers, wellness protocols, and exclusive lecture invitations.
          </p>
          
          {isSubscribed ? (
            <div className="p-3 border border-secondary bg-secondary/15 rounded text-white text-sm font-label-lg text-center animate-fade-in-up">
              ✓ Subscribed! Verification email simulated.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Institutional email address"
                className="flex-grow bg-white/10 border border-white/20 px-4 py-3 text-body-sm text-white placeholder-white/40 focus:ring-1 focus:ring-secondary/40 outline-none"
              />
              <button
                type="submit"
                className="bg-secondary text-white px-4 hover:bg-opacity-95 font-label-lg text-label-lg uppercase tracking-widest transition-opacity"
              >
                Join
              </button>
            </form>
          )}
          <p className="text-[10px] text-white/60 uppercase tracking-tighter">Your privacy is an institutional priority. Unsubscribe at any time.</p>
        </div>

        {/* Centered Social Row (Centered, below main content, above copyright) */}
        <div className="col-span-12 flex justify-center items-center gap-6 my-8 border-t border-[rgba(255,255,255,0.08)] pt-8">
          <a href="mailto:info@drabubascorner.edu" className="p-2 hover:bg-white/10 rounded-full transition-all hover:translate-y-[-1px] opacity-75 hover:opacity-100" aria-label="Email Address">
            <Mail className="w-5 h-5 text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-all hover:translate-y-[-1px] opacity-75 hover:opacity-100" aria-label="LinkedIn Profile">
            <LinkedinIcon className="w-5 h-5 text-white" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-all hover:translate-y-[-1px] opacity-75 hover:opacity-100" aria-label="YouTube Channel">
            <YoutubeIcon className="w-5 h-5 text-white" />
          </a>
          <a href="/podcast" className="p-2 hover:bg-white/10 rounded-full transition-all hover:translate-y-[-1px] opacity-75 hover:opacity-100" aria-label="Podcast Archive">
            <Radio className="w-5 h-5 text-white" />
          </a>
          <a href="https://drabubascorner.edu" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-all hover:translate-y-[-1px] opacity-75 hover:opacity-100" aria-label="Institutional Network">
            <Globe className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Copyright & Legal Bar */}
        <div className="col-span-12 border-t border-[rgba(255,255,255,0.08)] pt-8 flex flex-col md:flex-row justify-between items-center gap-unit-md text-white/60">
          <div className="text-center md:text-left">
            <p className="font-body-sm text-body-sm">
              © {new Date().getFullYear()} Dr. Ayuba&apos;s Corner. All rights reserved. Intellectual Property of the Institution.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/60">
            <Link href="/about" className="hover:underline hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:underline hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/about" className="hover:underline hover:text-white transition-colors">Accessibility Standards</Link>
          </div>
          
          <div className="flex gap-4">
            <a href="mailto:info@drabubascorner.edu" className="p-1 hover:bg-white/10 rounded-full transition-all hover:translate-y-[-1px] opacity-75 hover:opacity-100" aria-label="Email Address">
              <Mail className="w-4 h-4 text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-1 hover:bg-white/10 rounded-full transition-all hover:translate-y-[-1px] opacity-75 hover:opacity-100" aria-label="LinkedIn Profile">
              <LinkedinIcon className="w-4 h-4 text-white" />
            </a>
            <a href="https://drabubascorner.edu" target="_blank" rel="noreferrer" className="p-1 hover:bg-white/10 rounded-full transition-all hover:translate-y-[-1px] opacity-75 hover:opacity-100" aria-label="Institutional Network">
              <Globe className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
