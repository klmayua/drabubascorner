'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import CardBase from '@/components/CardBase';
import ContinueExploring, { ContinueExploringItem } from '@/components/ContinueExploring';

const relatedItems: ContinueExploringItem[] = [
  {
    title: 'Strategic Leadership in Complex Ecosystems',
    description: 'Navigating high-stakes institutional environments with ethical clarity and decisive strategic action.',
    href: '/catalog',
    type: 'course',
    categoryOrDiscipline: 'EXECUTIVE PROGRAM',
    duration: '6 Months',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJRoVLUR5g9fNqenbPDGtO8BXasLzaoCD966cbnzrv1e-Jxt_41fNHy646U2MbOhaJU7RwP25oNSAzhKXQMrlRQqQRkUo_Bo5H7ZygSlluytjzgDDV1BB5tTccz1jgyuK-nnPNEPrGj79U6ZI2vsraaWTHb62cOCIS6Y8Bm0ogZoA0wyt1Iz3ncWUXzwxFKX_Ugo2Iee7OEBrNg_cNG5_xD3_e5bJ-twsIwLqDqSVGW78F5SegCu0TDCoV9TDgCvCpKAMyy1gssVc',
  },
  {
    title: 'The Architect of Legacy: Governing Family Interests Across Generations',
    description: 'Dr. Ayuba explores the intersection of corporate governance and familial bonds within institutional structures.',
    href: '/editorial',
    type: 'article',
    categoryOrDiscipline: 'LEADERSHIP',
    duration: '12 MIN READ',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkdeztzdSpdvgqJQ-SCj_OW_jTDVJeSn-U634ES1rjty4dN8wbn5fKQYSDC_BVZrkSTTggDLPbMvXuzNCwmZ342mb84kOr1Cs-eg0dSqNCPpGMIQXUBp_4IeT8KPVvWyJRW6AAu3clrd_u6dgkr6gTNzOP099utAJNbSX94isCMRdLHaj1wAysAxO7JEXX_iWi83qxKA65fNoTrE2Y40cz3V3wEjOUsLgxEUPtp9z4ktTa-gqu--6AtHq2DXZreZDDy-FLcl4bwDY',
  },
  {
    title: 'The Ontology of Generative Wisdom',
    description: 'An in-depth exploration of archival wisdom and its application in modern health systems with Dr. Ayuba.',
    href: '/video-archive',
    type: 'video',
    categoryOrDiscipline: 'Wisdom',
    duration: '42:15',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk56jy9HjwLtDwdS7kEiwHZ7CLuhbVjyj0kyRSiaTHgg86FwkyNZrPE57kLokRTcw5uMzIgnn4xvJoBTPVL9PJ9uo7LboVee5ab6WHfW42HjTxj63SRL_g3DID6hwL8hy8esAhCoKerkrdYYF8Onl5t9WMU9BhvimsmOGl7v0gb3jArJTfgd2tAnYi4Bj_-fk3b4y8dFPnxlDxb_ARNfdpcxGfjqa1v_jHZyn-UHQc7tABP422M2Ts26xs0wOg_heinnce_KD-psc',
  },
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Academic Year 2024"
        pageTitle="The Institutional Event Registry"
        supportingDescription="A curated selection of high-authority scholarly engagements, professional certification cohorts, and private masterclasses designed for the elite academic community."
      />

      {/* Info Header Callout */}
      <div className="flex justify-end mb-unit-lg mt-unit-lg">
        <div className="p-unit-lg border-l-4 border-accent-gold bg-surface-container-low rounded-r-xl border border-outline-variant/30">
          <p className="font-label-md text-label-md uppercase text-outline mb-unit-xs">Next Major Event</p>
          <p className="font-headline-sm text-headline-sm text-primary font-bold">Sep 14, 2024</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Global Ethics Symposium</p>
        </div>
      </div>

      {/* Director's Note */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter bg-primary text-on-primary rounded-xl overflow-hidden items-stretch mb-unit-2xl">
        <div className="col-span-12 md:col-span-5 h-[300px] md:h-auto">
          <div
            className="w-full h-full bg-cover bg-center grayscale opacity-80"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXu Ak56jy9HjwLtDwdS7kEiwHZ7CLuhbVjyj0kyRSiaTHgg86FwkyNZrPE57kLokRTcw5uMzIgnn4xvJoBTPVL9PJ9uo7LboVee5ab6WHfW42HjTxj63SRL_g3DID6hwL8hy8esAhCoKerkrdYYF8Onl5t9WMU9BhvimsmOGl7v0gb3jArJTfgd2tAnYi4Bj_-fk3b4y8dFPnxlDxb_ARNfdpcxGfjqa1v_jHZyn-UHQc7tABP422M2Ts26xs0wOg_heinnce_KD-psc')" }}
          ></div>
        </div>
        <div className="col-span-12 md:col-span-7 p-unit-xl flex flex-col justify-center text-white">
          <div className="mb-unit-lg">
            <span className="material-symbols-outlined text-accent-gold text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-white mb-unit-md italic">A Note from the Director</h2>
          <div className="space-y-unit-md opacity-90 leading-relaxed font-body-md text-primary-fixed-dim">
            <p>
              Our mission remains constant: to provide a sanctuary for intellectual rigor and academic excellence. These masterclasses are not merely lectures; they are immersive experiences designed to challenge the established norms of scholarly discourse.
            </p>
            <p>
              As we open the registry for the upcoming semester, we invite you to join a cohort of peers dedicated to the pursuit of truth and the preservation of institutional knowledge.
            </p>
          </div>
          <div className="mt-unit-xl">
            <p className="font-headline-sm text-headline-sm text-white">Dr. Ayuba</p>
            <p className="font-label-md text-label-md uppercase tracking-widest text-accent-gold">Director of Institutional Research</p>
          </div>
        </div>
      </section>

      {/* Bento Grid: Upcoming Events */}
      <section className="space-y-unit-xl mb-unit-2xl">
        <div className="flex justify-between items-end pb-3 border-b border-outline-variant/10">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Scholarly Registry</h2>
            <p className="font-body-md text-on-surface-variant">Reserved for fellows and institutional members.</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-gutter">
          {/* Large Featured Event */}
          <CardBase className="col-span-12 md:col-span-8 p-unit-xl flex flex-col justify-between hover:border-accent-gold/50 transition-all">
            <div>
              <div className="flex justify-between items-start mb-unit-lg">
                <span className="bg-surface-container border border-outline-variant/30 text-secondary font-label-md text-label-md px-unit-md py-1 rounded-full">CERTIFICATION COHORT</span>
                <span className="font-label-lg text-label-lg text-primary">OCT 12 — DEC 20</span>
              </div>
              <h3 className="font-display-lg text-display-lg text-primary mb-unit-md leading-tight">Mastering Advanced Epistemology</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">A 10-week intensive program focusing on the historical foundations and modern applications of analytical philosophy.</p>
            </div>
            <div className="mt-unit-xl flex items-center justify-between">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center font-bold text-white text-xs">JB</div>
                <div className="w-12 h-12 rounded-full border-4 border-white bg-secondary flex items-center justify-center font-bold text-white text-xs">AM</div>
                <div className="w-12 h-12 rounded-full border-4 border-white bg-surface-container-high flex items-center justify-center font-bold text-primary text-xs">+8</div>
              </div>
              <button className="bg-primary text-on-primary px-unit-xl py-unit-md font-label-lg text-label-lg hover:bg-primary/95 transition-all rounded-lg uppercase tracking-widest">Register</button>
            </div>
          </CardBase>

          {/* Secondary Small Event 1 */}
          <CardBase className="col-span-12 md:col-span-4 p-unit-lg flex flex-col justify-between hover:border-accent-gold/50 transition-all">
            <div>
              <div className="flex justify-between items-start mb-unit-md">
                <span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">SYMPOSIUM</span>
                <span className="material-symbols-outlined text-secondary">verified</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-unit-sm">Digital Humanities Summit</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Exploring the intersection of classical study and modern computational analysis.</p>
            </div>
            <div className="pt-unit-lg border-t border-outline-variant/10 mt-unit-lg">
              <p className="font-label-lg text-label-lg text-primary font-bold">NOV 05, 2024</p>
              <a className="text-accent-gold font-label-md text-label-md uppercase tracking-wider flex items-center gap-1 mt-unit-sm hover:underline" href="/events">
                Event Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </CardBase>

          {/* Secondary Small Event 2 */}
          <CardBase className="col-span-12 md:col-span-4 p-unit-lg flex flex-col justify-between hover:border-accent-gold/50 transition-all">
            <div>
              <div className="flex justify-between items-start mb-unit-md">
                <span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">GUEST LECTURE</span>
                <span className="material-symbols-outlined text-secondary">school</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-unit-sm">Archive Management</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Preservation techniques for 19th-century manuscript collections and oral histories.</p>
            </div>
            <div className="pt-unit-lg border-t border-outline-variant/10 mt-unit-lg">
              <p className="font-label-lg text-label-lg text-primary font-bold">DEC 01, 2024</p>
              <a className="text-accent-gold font-label-md text-label-md uppercase tracking-wider flex items-center gap-1 mt-unit-sm hover:underline" href="/events">
                Event Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </CardBase>

          {/* Large Featured Event 2 */}
          <div className="col-span-12 md:col-span-8 relative group overflow-hidden bg-primary text-on-primary p-unit-xl flex flex-col justify-end rounded-xl premium-shadow h-full">
            <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsfPhjqa3giorJE4NuFSc3zYtknXjDCMPUNBjZgZuYhKEJ8rDXHfRzut_ULPQKiyj8nMaBV8Qj3PVyhju4Z0foU9MCdlnR9yCA9eoqxTJzXa7Fx9DFm8KRZ_Fcek90szN752xXaPR7gyKwsLbF3c0hdpLBzD-uWgTApVpYgNHX0VKsIUOo5Jne-wDYGQntpDJd_KJRKC5S8j8Wb4KcSWao2VahwTWtCdt2pW2O17NWZz2gVAHUXFbZMLnaeIFmBGMnC9xtjawn9Fo')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="relative z-10">
              <span className="font-label-md text-label-md text-accent-gold uppercase mb-unit-sm block font-bold">Global Annual Event</span>
              <h3 className="font-headline-lg text-headline-lg text-white mb-unit-md leading-tight">The International Scholarly Assembly</h3>
              <p className="font-body-md text-primary-fixed-dim max-w-lg mb-unit-lg leading-relaxed">Our flagship gathering of intellectuals, researchers, and institutional leaders from across the globe.</p>
              <button className="border-2 border-accent-gold text-accent-gold px-unit-lg py-unit-sm font-label-lg text-label-lg hover:bg-accent-gold hover:text-black transition-colors uppercase tracking-widest rounded-lg font-bold">Secure Your Invite</button>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Data Section */}
      <section className="py-unit-2xl border-t border-outline-variant/20 mb-unit-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
          <div>
            <p className="font-display-lg text-display-lg text-primary font-bold">42</p>
            <p className="font-label-md text-label-md uppercase text-outline">Active Fellowships</p>
          </div>
          <div>
            <p className="font-display-lg text-display-lg text-primary font-bold">128</p>
            <p className="font-label-md text-label-md uppercase text-outline">Global Chapters</p>
          </div>
          <div>
            <p className="font-display-lg text-display-lg text-primary font-bold">15k</p>
            <p className="font-label-md text-label-md uppercase text-outline">Digital Archives</p>
          </div>
          <div>
            <p className="font-display-lg text-display-lg text-primary font-bold">850+</p>
            <p className="font-label-md text-label-md uppercase text-outline">Certified Scholars</p>
          </div>
        </div>
      </section>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
