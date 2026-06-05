'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="w-full mt-auto bg-primary-container dark:bg-tertiary-container border-t border-outline-variant text-on-primary-container dark:text-tertiary-fixed py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
        
        {/* Brand Column */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-unit-md">
          <img
            alt="Institutional Logo Footer"
            className="h-10 w-auto object-contain brightness-0 invert opacity-60 self-start hover:scale-[1.02] transition-transform"
            src="/images/Dr_Abuba_Logo_Full-no_bg.png"
          />
          <p className="font-body-sm text-body-sm opacity-70 max-w-sm leading-relaxed">
            Advancing human excellence through a multi-disciplinary synthesis of classical wisdom, empirical health longevity research, and sovereign wealth architecture.
          </p>
        </div>

        {/* Directory Links Grid */}
        <div className="col-span-12 md:col-span-4 grid grid-cols-2 gap-gutter">
          <div className="flex flex-col gap-unit-sm">
            <h6 className="font-label-lg text-label-lg text-white uppercase tracking-wider mb-2">Navigation</h6>
            <Link href="/" className="font-body-sm text-body-sm opacity-70 hover:opacity-100 hover:text-white transition-all">
              Articles & Editorial
            </Link>
            <Link href="/about" className="font-body-sm text-body-sm opacity-70 hover:opacity-100 hover:text-white transition-all">
              Biography & Vision
            </Link>
            <Link href="/research-search" className="font-body-sm text-body-sm opacity-70 hover:opacity-100 hover:text-white transition-all">
              Research Library
            </Link>
            <Link href="/catalog" className="font-body-sm text-body-sm opacity-70 hover:opacity-100 hover:text-white transition-all">
              Courses Directory
            </Link>
            <Link href="/marketplace" className="font-body-sm text-body-sm opacity-70 hover:opacity-100 hover:text-white transition-all">
              Merchandise Store
            </Link>
          </div>
          <div className="flex flex-col gap-unit-sm">
            <h6 className="font-label-lg text-label-lg text-white uppercase tracking-wider mb-2">Institution</h6>
            <Link href="/dashboard" className="font-body-sm text-body-sm opacity-70 hover:opacity-100 hover:text-white transition-all">
              Member Dashboard
            </Link>
            <Link href="/partners" className="font-body-sm text-body-sm opacity-70 hover:opacity-100 hover:text-white transition-all">
              Academic Cohort
            </Link>
            <Link href="/speaking-consulting" className="font-body-sm text-body-sm opacity-70 hover:opacity-100 hover:text-white transition-all">
              Keynotes & Speaking
            </Link>
            <Link href="/calculator" className="font-body-sm text-body-sm opacity-70 hover:opacity-100 hover:text-white transition-all">
              Archival Calculators
            </Link>
            <Link href="/admin" className="font-body-sm text-body-sm opacity-70 hover:opacity-100 hover:text-white transition-all">
              Admin Console
            </Link>
          </div>
        </div>

        {/* Subscription Column */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-unit-md">
          <h6 className="font-label-lg text-label-lg text-white uppercase tracking-wider mb-2">The Weekly Dispatch</h6>
          <p className="font-body-sm text-body-sm opacity-70 leading-relaxed">
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
        </div>

        {/* Legal & Footer Bottom */}
        <div className="col-span-12 border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-unit-md">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="font-body-sm text-body-sm opacity-60">
              © {new Date().getFullYear()} Dr. Ayuba&apos;s Corner. All rights reserved. Intellectual Property of the Institution.
            </p>
            <div className="flex justify-center md:justify-start gap-4 text-xs opacity-60 mt-1">
              <Link href="/about" className="hover:underline">Privacy Policy</Link>
              <span>•</span>
              <Link href="/about" className="hover:underline">Terms of Service</Link>
              <span>•</span>
              <Link href="/about" className="hover:underline">Accessibility Standards</Link>
            </div>
          </div>
          
          <div className="flex gap-unit-md text-white">
            <a href="mailto:info@drabubascorner.edu" className="p-2 hover:bg-white/10 rounded-full transition-all" aria-label="Email Address">
              <span className="material-symbols-outlined block text-[20px]">mail</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-all" aria-label="LinkedIn Profile">
              <span className="material-symbols-outlined block text-[20px]">group</span>
            </a>
            <a href="https://drabubascorner.edu" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-all" aria-label="Institutional Network">
              <span className="material-symbols-outlined block text-[20px]">public</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
