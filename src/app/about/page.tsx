'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import ContinueExploring, { ContinueExploringItem } from '@/components/ContinueExploring';

const relatedItems: ContinueExploringItem[] = [
  {
    title: 'The Research Archive',
    description: 'Deep dives into corporate governance, stoic logic, and executive stress response protocols.',
    href: '/editorial',
    type: 'article',
    categoryOrDiscipline: 'Research',
    duration: '12 Min Read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkdeztzdSpdvgqJQ-SCj_OW_jTDVJeSn-U634ES1rjty4dN8wbn5fKQYSDC_BVZrkSTTggDLPbMvXuzNCwmZ342mb84kOr1Cs-eg0dSqNCPpGMIQXUBp_4IeT8KPVvWyJRW6AAu3clrd_u6dgkr6gTNzOP099utAJNbSX94isCMRdLHaj1wAysAxO7JEXX_iWi83qxKA65fNoTrE2Y40cz3V3wEjOUsLgxEUPtp9z4ktTa-gqu--6AtHq2DXZreZDDy-FLcl4bwDY',
  },
  {
    title: 'Video Lecture Archive',
    description: 'Scholarly presentations and video discussions on transgenerational capital and health logic.',
    href: '/video-archive',
    type: 'video',
    categoryOrDiscipline: 'Wisdom',
    duration: '42 mins',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk56jy9HjwLtDwdS7kEiwHZ7CLuhbVjyj0kyRSiaTHgg86FwkyNZrPE57kLokRTcw5uMzIgnn4xvJoBTPVL9PJ9uo7LboVee5ab6WHfW42HjTxj63SRL_g3DID6hwL8hy8esAhCoKerkrdYYF8Onl5t9WMU9BhvimsmOGl7v0gb3jArJTfgd2tAnYi4Bj_-fk3b4y8dFPnxlDxb_ARNfdpcxGfjqa1v_jHZyn-UHQc7tABP422M2Ts26xs0wOg_heinnce_KD-psc',
  },
  {
    title: 'Academic Catalog',
    description: 'Rigorous certification programs and masterclasses in wealth architecture and holistic wellness.',
    href: '/catalog',
    type: 'course',
    categoryOrDiscipline: 'Certification',
    duration: '12 Weeks',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC-YqLehH_UwELWHn4Vc8_kQihVsjQicNfmofe98xjNXSaS1ALIEdCDPxdp9dkPk2tzlsTxcyP4W3cIbTaQR0P0_q_Ken9E_qI1q2tr1Nft0O9s7HGKuxqIUiRP8Mof9CkY8AooidSa3okPfDGJLIvQIF3qj8sy_p4KWjWajlGTqZiXiF1M9qY4oulO5s3r0m1buOBcR7s0kD2ypgXLeb8XbCFZiHFPbtxTk_O4SzkAViL9F-Vuv2-lFzK0ylskMLCGcRQdtOSSVk',
  },
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Biography & Vision"
        pageTitle="The Architect of Institutional Excellence"
        supportingDescription="Understanding the background, philosophy, and mandate guiding Dr. Ayuba's Corner."
      />

      {/* Hero Section / Portrait Anchor */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start mb-unit-2xl">
        <div className="md:col-span-5 relative group">
          <div className="aspect-[0.78] overflow-hidden bg-surface-container border border-primary/10">
            <img
              alt="Portrait of Dr. Ayuba"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-150 ease-in-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCORAmHqjpWvGp9m9SqFMTGo0BINXTw8aZwHCnVT0Xoq4VbxBlj5kZCLCT46SQcHaa28SnaYkRzCVTIWrlPawXtDdfvgU-x-3XUraeYqUYHl01bLiSguM3NxAHdYC0EMHjfr_Ketr0rl3n-IGB2H9VsSbA3jRxNcaXPDIcAubYUXRKr0a5cGrxmxmHqBIe8AOmc5QRTqle6FApalJdz4Ixx7yU5IDliY4SgxtERqG55BMh9ij2Trxgz6V1qBFzq-qjxT0GfJP_097s"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-accent transition-transform group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none"></div>
        </div>
        <div className="md:col-span-7 pb-unit-md md:pl-8 mt-6 md:mt-0">
          <blockquote className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl italic mb-6 border-l-4 border-accent-gold pl-4">
            "Integrity is the bedrock upon which the edifice of knowledge is built. Without it, our scholarly pursuits are merely vanity."
          </blockquote>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
            Dr. Ayuba stands as a guiding voice in the intersection of legacy asset management, strategic wellness, and philosophical inquiry. Over the past three decades, his focus on rigor, stability, and character has helped establish institutional structures that persist across generations.
          </p>
        </div>
      </section>

      {/* Academic Foundations & Institutional Mandate (Bento Style) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-unit-2xl">
        {/* Academic Foundations */}
        <div className="bg-surface-container-lowest p-unit-xl border border-primary/5 flex flex-col justify-between rounded-xl">
          <div>
            <div className="flex items-center gap-unit-sm mb-unit-lg">
              <div className="w-12 h-[1px] bg-accent-gold"></div>
              <h2 className="font-headline-md text-headline-md text-accent-gold">Academic Foundations</h2>
            </div>
            <div className="space-y-unit-md">
              <div className="flex gap-unit-md">
                <span className="text-accent-gold font-bold">01.</span>
                <p className="font-body-md text-body-md text-on-surface-variant">Three decades of rigorous scholarly inquiry into institutional governance and ethical leadership frameworks.</p>
              </div>
              <div className="flex gap-unit-md">
                <span className="text-accent-gold font-bold">02.</span>
                <p className="font-body-md text-body-md text-on-surface-variant">Author of over 40 peer-reviewed monographs detailing the intersection of traditional values and modern administration.</p>
              </div>
              <div className="flex gap-unit-md">
                <span className="text-accent-gold font-bold">03.</span>
                <p className="font-body-md text-body-md text-on-surface-variant">Chair Emeritus of the International Board for Scholarly Standards, focusing on global archival preservation.</p>
              </div>
            </div>
          </div>
          <div className="mt-unit-xl">
            <button className="bg-primary text-on-primary px-unit-lg py-unit-sm font-label-lg text-label-lg hover:opacity-90 transition-opacity">View Full Curriculum Vitae</button>
          </div>
        </div>

        {/* Institutional Mandate */}
        <div className="bg-primary text-on-primary p-unit-xl flex flex-col justify-center relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg height="100%" width="100%">
              <rect fill="url(#pattern-dots)" height="100%" width="100%"></rect>
            </svg>
            <defs>
              <pattern height="20" id="pattern-dots" patternUnits="userSpaceOnUse" width="20" x="0" y="0">
                <circle cx="2" cy="2" fill="white" r="1"></circle>
              </pattern>
            </defs>
          </div>
          <h2 className="font-headline-md text-headline-md mb-unit-lg relative z-10 text-white">Institutional Mandate</h2>
          <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed mb-unit-lg relative z-10">
            Our mandate transcends mere instruction. We are charged with the guardianship of intellectual legacy. We provide the structural integrity required for institutions to flourish in an era of rapid transformation, ensuring that the pillars of meritocracy, transparency, and scholarly rigor remain unyielding.
          </p>
          <ul className="space-y-unit-sm relative z-10">
            <li className="flex items-center gap-unit-sm">
              <span className="w-2 h-2 rotate-45 bg-tertiary-fixed-dim"></span>
              <span className="font-label-md text-label-md tracking-wider text-white">ETHICAL GOVERNANCE</span>
            </li>
            <li className="flex items-center gap-unit-sm">
              <span className="w-2 h-2 rotate-45 bg-tertiary-fixed-dim"></span>
              <span className="font-label-md text-label-md tracking-wider text-white">CULTURAL PRESERVATION</span>
            </li>
            <li className="flex items-center gap-unit-sm">
              <span className="w-2 h-2 rotate-45 bg-tertiary-fixed-dim"></span>
              <span className="font-label-md text-label-md tracking-wider text-white">STRATEGIC EXCELLENCE</span>
            </li>
          </ul>
        </div>
      </section>

      {/* The Manifesto (Editorial Style) */}
      <section className="max-w-4xl mx-auto py-unit-2xl border-t border-outline-variant/30">
        <div className="text-center mb-unit-xl">
          <h2 className="font-display-lg text-display-lg text-primary">The Manifesto</h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mt-unit-sm"></div>
        </div>
        <article className="font-headline-sm text-headline-sm text-on-surface leading-relaxed space-y-unit-xl italic">
          <p className="first-letter:text-7xl first-letter:font-display-lg first-letter:mr-3 first-letter:float-left first-letter:text-accent-gold">
            We believe that the future is not a destination we reach, but a structure we build with the stones of our past. 
            In a world obsessed with the ephemeral, we choose the enduring. We advocate for the reclamation of depth, 
            the celebration of nuance, and the absolute necessity of institutional character.
          </p>
          <p>
            Scholarly pursuit is not a solitary endeavor; it is a sacred contract between the seeker and the source. 
            We reject the simplification of complex truths and the commodification of wisdom. Excellence is not a standard 
            to be met, but a discipline to be lived—every hour, every lecture, every archive opened.
          </p>
          <p>
            The Corner stands as a lighthouse for the intellectually homeless. Here, we do not just store data; we cultivate 
            discernment. Our mission is to ensure that when history looks back, it finds a record of unwavering commitment 
            to the highest ideals of human civilization.
          </p>
          <div className="pt-unit-xl text-center">
            <p className="font-label-lg text-label-lg text-accent-gold tracking-[0.4em] uppercase">— Dr. Ayuba</p>
          </div>
        </article>
      </section>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
