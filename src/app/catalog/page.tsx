'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import CourseCard from '@/components/CourseCard';
import ContinueExploring, { ContinueExploringItem } from '@/components/ContinueExploring';

const relatedItems: ContinueExploringItem[] = [
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
  {
    title: 'The Future of Institutional Philanthropy Board',
    description: 'Collaborative research board analyzing trends in high-net-worth impact investing and distribution models.',
    href: '/community-networking-hub-desktop-refined',
    type: 'community',
    categoryOrDiscipline: 'Active',
  },
];

const courses = [
  {
    title: 'The Architecture of Generational Wealth',
    description: 'A comprehensive study of capital preservation, asset diversification, and the psychology of lasting legacy.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC-YqLehH_UwELWHn4Vc8_kQihVsjQicNfmofe98xjNXSaS1ALIEdCDPxdp9dkPk2tzlsTxcyP4W3cIbTaQR0P0_q_Ken9E_qI1q2tr1Nft0O9s7HGKuxqIUiRP8Mof9CkY8AooidSa3okPfDGJLIvQIF3qj8sy_p4KWjWajlGTqZiXiF1M9qY4oulO5s3r0m1buOBcR7s0kD2ypgXLeb8XbCFZiHFPbtxTk_O4SzkAViL9F-Vuv2-lFzK0ylskMLCGcRQdtOSSVk',
    badgeText: 'CERTIFICATION PATH',
    rating: 4.9,
    duration: '12 Weeks',
  },
  {
    title: 'Holistic Health Systems: The Core Pillar',
    description: 'Mastering the biological and psychological frameworks for peak performance and long-term vitality.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDD7qQj-SNPsOz2pepOZRYANRqG2bbX7iJOS3UhwCk9m7sLNGUwQKUUX3C5_uAvoDTBB-b844wCsNcK1bZoL8oSm0Vs5y99MMz74nGk6kKipHn38Y_2V8c9fRO5n9o2Rx8f7a5s0bl6Q8qdswe05v-Hn5gY70pGsr9ffvYAXkwk7IOTUio3vZbsyJxbDz13vgtVKClTCJT9nfqzOkxbMfJHalxs3emrpnIMgLySLwatBI7gXGwNYueEGe-w3MSHJCR_W_ofAerm6w',
    badgeText: 'MASTERCLASS',
    rating: 5.0,
    duration: '8 Hours',
  },
  {
    title: 'Strategic Leadership in Complex Ecosystems',
    description: 'Navigating high-stakes institutional environments with ethical clarity and decisive strategic action.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJRoVLUR5g9fNqenbPDGtO8BXasLzaoCD966cbnzrv1e-Jxt_41fNHy646U2MbOhaJU7RwP25oNSAzhKXQMrlRQqQRkUo_Bo5H7ZygSlluytjzgDDV1BB5tTccz1jgyuK-nnPNEPrGj79U6ZI2vsraaWTHb62cOCIS6Y8Bm0ogZoA0wyt1Iz3ncWUXzwxFKX_Ugo2Iee7OEBrNg_cNG5_xD3_e5bJ-twsIwLqDqSVGW78F5SegCu0TDCoV9TDgCvCpKAMyy1gssVc',
    badgeText: 'EXECUTIVE PROGRAM',
    rating: 4.8,
    duration: '6 Months',
  },
  {
    title: 'Foundations of Institutional Philanthropy',
    description: 'Structured approaches to establishing enduring charitable foundations and legacy impact structures.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAajzGxdEjGyeF4Iw5cNQ4OvonLuCKZ5V85JvdUvbgnXrD4nVGn6gcrgPfkdBIRNYU-JFn8rbIjoD_M77QCa0PNi8jqIXuqbfTHhH-_Rxntv0Z27f146NSmC_m9u3aj_nzge-L_D5X7riAe74IuLPnZAzM2LCzrSRfCE602m2ygkCQzrNhe9S-Fi7Ws4of6avmqezCubBXboUMGq-36HWn6Y_u1A09Wg-7ptfWnl1z0N_LxNTzbHIKBbU5R6qnxN0iAb2adHGrmCdM',
    badgeText: 'LEGACY FELLOWSHIP',
    rating: 5.0,
    duration: 'Cohort Based',
  },
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Academic Catalog"
        pageTitle="Academic Catalog"
        supportingDescription="Deepening human understanding through rigorous scholarly investigation and practical wisdom for wealth, health, and leadership."
      />

      {/* Main Catalog Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start mt-unit-lg">
        {/* Left Aside Filter Sidebar */}
        <aside className="md:col-span-3 sticky top-32 space-y-unit-xl hidden md:block bg-white border border-outline-variant/30 p-unit-lg rounded-xl">
          <div>
            <h3 className="font-label-lg text-label-lg text-primary mb-unit-md border-b border-outline-variant/10 pb-2">Learning Path</h3>
            <ul className="space-y-unit-sm">
              <li><a className="font-body-sm text-body-sm text-secondary font-semibold" href="#">All Disciplines</a></li>
              <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1 block" href="#">Strategic Wisdom</a></li>
              <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1 block" href="#">Wealth Architecture</a></li>
              <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1 block" href="#">Holistic Wellness</a></li>
              <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1 block" href="#">Legacy Building</a></li>
            </ul>
          </div>
          <div className="pt-4 border-t border-outline-variant/10">
            <h3 className="font-label-lg text-label-lg text-primary mb-unit-md">Certification</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-label-md font-label-md rounded-full border border-outline-variant/15">Foundation</span>
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-label-md font-label-md rounded-full border border-outline-variant/15">Executive</span>
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-label-md font-label-md rounded-full border border-outline-variant/15">Legacy</span>
            </div>
          </div>
        </aside>

        {/* Right Course Grid */}
        <div className="md:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {courses.map((course, idx) => (
            <CourseCard
              key={idx}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              badgeText={course.badgeText}
              rating={course.rating}
              duration={course.duration}
              href="#"
            />
          ))}
        </div>
      </div>

      {/* Member benefits section */}
      <section className="mt-unit-2xl bg-primary text-on-primary p-unit-2xl grid md:grid-cols-2 gap-gutter items-center overflow-hidden relative rounded-xl premium-shadow">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent-gold opacity-10 rounded-full blur-3xl"></div>
        <div>
          <span className="font-label-md text-label-md text-accent-gold tracking-widest uppercase">Member Benefits</span>
          <h2 className="font-headline-md text-headline-md mt-unit-sm text-white">Access the Wisdom Archives</h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mt-unit-md mb-unit-xl opacity-90 leading-relaxed">
            Join an elite community of scholars and practitioners dedicated to better wisdom, better health, and better wealth.
          </p>
          <ul className="diamond-list space-y-4 mb-unit-xl font-body-md text-body-md text-primary-fixed-dim">
            <li className="diamond-bullet">Quarterly Academic Journal Access</li>
            <li className="diamond-bullet">Exclusive Monthly Live Q&amp;A with Dr. Ayuba</li>
            <li className="diamond-bullet">Archival Case Study Library</li>
            <li className="diamond-bullet">Preferential Rates for Institutional Events</li>
          </ul>
          <button className="bg-accent-gold text-black px-unit-2xl py-4 font-label-lg text-label-lg rounded-lg hover:brightness-110 transition-all font-bold">
            START YOUR JOURNEY
          </button>
        </div>
        <div className="hidden md:block">
          <img
            alt="Dr. Ayuba Portrait"
            className="w-full max-w-sm mx-auto shadow-2xl border-4 border-white/10 rounded-xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfvOUt0aD8HKMpEK7MPVTHz53rirv2RPzX-lPzTFl6aExZeoItAhGGlJeiGezA4FBw-BXTULM7QeDEIwxFjH4mV15ai4Ee3gW7biJdW7b6wVdxqRSCQnUuAyY_i0lgaGwKkooezva2phFLatjP5iSsdZjwem77WbG613k-DmAR4Rh549tMCwJpK7zmeOVEcgAE7sSjp4zcLXygtmDJIeubnXX9jgEHRdtTmcnU7Q0nmMFIx9f7Giui82hWAtQrFfZCa9OjhPEEgxs"
          />
        </div>
      </section>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
