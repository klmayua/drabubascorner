'use client';

import React, { useState, useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
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
    title: 'Strategic Leadership in Complex Ecosystems',
    description: 'Navigating high-stakes institutional environments with ethical clarity and decisive strategic action.',
    href: '/catalog',
    type: 'course',
    categoryOrDiscipline: 'EXECUTIVE PROGRAM',
    duration: '6 Months',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJRoVLUR5g9fNqenbPDGtO8BXasLzaoCD966cbnzrv1e-Jxt_41fNHy646U2MbOhaJU7RwP25oNSAzhKXQMrlRQqQRkUo_Bo5H7ZygSlluytjzgDDV1BB5tTccz1jgyuK-nnPNEPrGj79U6ZI2vsraaWTHb62cOCIS6Y8Bm0ogZoA0wyt1Iz3ncWUXzwxFKX_Ugo2Iee7OEBrNg_cNG5_xD3_e5bJ-twsIwLqDqSVGW78F5SegCu0TDCoV9TDgCvCpKAMyy1gssVc',
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
  
  // Interactive Calculator State
  const [duration, setDuration] = useState<1 | 3 | 5>(1);
  const [durationPrice, setDurationPrice] = useState<number>(1500);
  const [personnel, setPersonnel] = useState<'solo' | 'team'>('solo');
  const [hasReport, setHasReport] = useState<boolean>(false);
  const [hasLecture, setHasLecture] = useState<boolean>(false);

  const durationDetails = {
    1: { label: 'Base Engagement (1 Day)', desc: 'Intensive Strategy Audit', price: 1500 },
    3: { label: 'Base Engagement (3 Days)', desc: 'Framework Development', price: 4000 },
    5: { label: 'Base Engagement (5 Days)', desc: 'Full Implementation Roadmap', price: 6500 },
  };

  const updateDuration = (days: 1 | 3 | 5, price: number) => {
    setDuration(days);
    setDurationPrice(price);
  };

  const totalPrice = durationPrice + (personnel === 'team' ? 2500 : 0) + (hasReport ? 850 : 0) + (hasLecture ? 1200 : 0);

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Institutional Advisory"
        pageTitle="Strategic Advisory &amp; Intellectual Capital"
        supportingDescription="Deploying decade-long research frameworks and high-level academic insights to navigate complex organizational challenges and institutional transformations."
      />

      {/* Hero Section & Dr. Ayuba Portrait */}
      <section className="grid grid-cols-12 gap-gutter mb-unit-2xl items-end mt-unit-lg">
        <div className="col-span-12 lg:col-span-7 pb-unit-lg">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-unit-xl leading-relaxed">
            Welcome to Dr. Ayuba's strategic engagement platform. Below you can configure an advisory session tailored to your organization's specific challenges in leadership, wealth preservation, or wellness frameworks.
          </p>
          <div className="flex gap-unit-md mt-6">
            <div className="flex items-center gap-unit-sm text-primary">
              <span className="material-symbols-outlined text-accent-gold" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-label-md text-label-md uppercase tracking-widest">Global Accreditation</span>
            </div>
            <div className="w-px h-6 bg-outline-variant/30"></div>
            <div className="flex items-center gap-unit-sm text-primary">
              <span className="material-symbols-outlined text-accent-gold" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
              <span className="font-label-md text-label-md uppercase tracking-widest">Archival Precision</span>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden border border-primary/5 shadow-sm">
            <img alt="Dr. Ayuba" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDow-J05RIYQsUk-5reYu_iB_YPZnt1hBTcCBy2Tyuf_KpJLpj9vD0c4BQ9hLeUd3wpv3S1WjuAspyDa6EmCWZg9PuFzDBlee2L8lFvzvQwZmrQlp34Gc7HBlotPEL9CuPbX48-njn9IOb2xSBMhDBr6auTFLR0LgeFz3XxubUeHTzVNo7h1mUDTgdJwz8TUiJYgywk7MTBlBsVWDKqsxQoi6hvk20RraVpXuE7gvYXxl2RSXBhUpYupZXjKPtEQhYrnwuZiBdqhhY" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-unit-lg border border-outline-variant/30 shadow-lg max-w-[240px] rounded-xl">
            <p className="font-headline-sm text-headline-sm text-primary italic mb-1 leading-snug">"Precision in thought, excellence in action."</p>
            <p className="font-label-md text-label-md text-outline uppercase tracking-wider">— Dr. Ayuba</p>
          </div>
        </div>
      </section>

      {/* Engagement Configuration & Calculator */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Left: Options Column */}
        <div className="col-span-12 lg:col-span-8 space-y-unit-xl">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-2">Configure Your Engagement</h2>
            <div className="h-1 w-24 bg-accent-gold"></div>
          </div>

          {/* 1. Engagement Duration */}
          <div className="bg-white p-unit-xl border border-outline-variant/30 rounded-xl premium-shadow">
            <label className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant block mb-unit-lg">1. Engagement Duration</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-md">
              <button
                onClick={() => updateDuration(1, 1500)}
                className={`border p-unit-lg text-left hover:border-accent-gold transition-all group rounded-xl ${
                  duration === 1 ? 'border-accent-gold bg-surface-container-low' : 'border-outline-variant/30 bg-transparent'
                }`}
              >
                <span className="font-headline-sm text-headline-sm block group-hover:text-accent-gold text-primary">1 Day</span>
                <span className="font-body-sm text-body-sm text-outline">Intensive Strategy Audit</span>
              </button>
              <button
                onClick={() => updateDuration(3, 4000)}
                className={`border p-unit-lg text-left hover:border-accent-gold transition-all group rounded-xl ${
                  duration === 3 ? 'border-accent-gold bg-surface-container-low' : 'border-outline-variant/30 bg-transparent'
                }`}
              >
                <span className="font-headline-sm text-headline-sm block group-hover:text-accent-gold text-primary">3 Days</span>
                <span className="font-body-sm text-body-sm text-outline">Framework Development</span>
              </button>
              <button
                onClick={() => updateDuration(5, 6500)}
                className={`border p-unit-lg text-left hover:border-accent-gold transition-all group rounded-xl ${
                  duration === 5 ? 'border-accent-gold bg-surface-container-low' : 'border-outline-variant/30 bg-transparent'
                }`}
              >
                <span className="font-headline-sm text-headline-sm block group-hover:text-accent-gold text-primary">5 Days</span>
                <span className="font-body-sm text-body-sm text-outline">Full Implementation Roadmap</span>
              </button>
            </div>
          </div>

          {/* 2. Personnel Deployment */}
          <div className="bg-white p-unit-xl border border-outline-variant/30 rounded-xl premium-shadow">
            <label className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant block mb-unit-lg">2. Personnel Deployment</label>
            <div className="space-y-unit-md">
              <label
                onClick={() => setPersonnel('solo')}
                className={`flex items-center p-unit-lg border hover:bg-surface transition-all cursor-pointer rounded-xl ${
                  personnel === 'solo' ? 'border-accent-gold bg-surface-container-low' : 'border-outline-variant/30'
                }`}
              >
                <input
                  type="radio"
                  name="personnel"
                  checked={personnel === 'solo'}
                  onChange={() => {}}
                  className="w-5 h-5 text-primary focus:ring-accent-gold border-outline-variant/30 mr-unit-lg"
                />
                <div>
                  <span className="font-label-lg text-label-lg block text-primary font-bold">Lead Scholar Solo (Dr. Ayuba)</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Direct advisory with focused, high-level interaction.</span>
                </div>
                <div className="ml-auto text-right shrink-0">
                  <span className="font-label-lg text-label-lg text-on-surface-variant">Base Rate</span>
                </div>
              </label>
              
              <label
                onClick={() => setPersonnel('team')}
                className={`flex items-center p-unit-lg border hover:bg-surface transition-all cursor-pointer rounded-xl ${
                  personnel === 'team' ? 'border-accent-gold bg-surface-container-low' : 'border-outline-variant/30'
                }`}
              >
                <input
                  type="radio"
                  name="personnel"
                  checked={personnel === 'team'}
                  onChange={() => {}}
                  className="w-5 h-5 text-primary focus:ring-accent-gold border-outline-variant/30 mr-unit-lg"
                />
                <div>
                  <span className="font-label-lg text-label-lg block text-primary font-bold">Associate Research Team Deployment</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Includes 2 Senior Researchers and data analytics support.</span>
                </div>
                <div className="ml-auto text-right shrink-0">
                  <span className="font-label-lg text-label-lg text-on-surface-variant font-bold text-secondary">+ $2,500</span>
                </div>
              </label>
            </div>
          </div>

          {/* 3. Add-on Services */}
          <div className="bg-white p-unit-xl border border-outline-variant/30 rounded-xl premium-shadow">
            <label className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant block mb-unit-lg">3. Archival &amp; Supplementary Services</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-md">
              <div
                onClick={() => setHasReport(!hasReport)}
                className={`flex items-start gap-unit-md p-unit-lg border hover:bg-surface transition-all cursor-pointer rounded-xl ${
                  hasReport ? 'border-accent-gold bg-surface-container-low' : 'border-outline-variant/30'
                }`}
              >
                <div className="mt-1">
                  <span className={`material-symbols-outlined transition-colors ${hasReport ? 'text-primary' : 'text-on-surface-variant'}`}>description</span>
                </div>
                <div className="flex-grow">
                  <span className="font-label-lg text-label-lg block font-bold text-primary">Bound Strategy Report</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Physical archival volume and digital master copy.</span>
                </div>
                <div className="font-label-md text-label-md text-secondary font-bold shrink-0">$850</div>
              </div>

              <div
                onClick={() => setHasLecture(!hasLecture)}
                className={`flex items-start gap-unit-md p-unit-lg border hover:bg-surface transition-all cursor-pointer rounded-xl ${
                  hasLecture ? 'border-accent-gold bg-surface-container-low' : 'border-outline-variant/30'
                }`}
              >
                <div className="mt-1">
                  <span className={`material-symbols-outlined transition-colors ${hasLecture ? 'text-primary' : 'text-on-surface-variant'}`}>history_edu</span>
                </div>
                <div className="flex-grow">
                  <span className="font-label-lg text-label-lg block font-bold text-primary">On-site Executive Lecture</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">90-minute keynote for stakeholders.</span>
                </div>
                <div className="font-label-md text-label-md text-secondary font-bold shrink-0">$1,200</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Investment Summary Card */}
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 h-fit mt-6 lg:mt-0">
          <div className="bg-primary text-on-primary p-unit-xl border border-primary/20 rounded-xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 blur-3xl -mr-16 -mt-16"></div>
            <h3 className="font-label-lg text-label-lg text-white uppercase tracking-widest mb-unit-lg border-b border-white/10 pb-4">Investment Summary</h3>
            <div className="space-y-unit-md mb-unit-xl">
              <div className="flex justify-between items-center opacity-85 text-primary-fixed-dim">
                <span className="font-body-sm text-body-sm">{durationDetails[duration].label}</span>
                <span className="font-label-lg text-label-lg">${durationDetails[duration].price}</span>
              </div>
              {personnel === 'team' && (
                <div className="flex justify-between items-center opacity-85 text-primary-fixed-dim">
                  <span className="font-body-sm text-body-sm">Team Deployment addon</span>
                  <span className="font-label-lg text-label-lg">$2,500</span>
                </div>
              )}
              {hasReport && (
                <div className="flex justify-between items-center opacity-85 text-primary-fixed-dim">
                  <span className="font-body-sm text-body-sm">Bound Strategy Report</span>
                  <span className="font-label-lg text-label-lg">$850</span>
                </div>
              )}
              {hasLecture && (
                <div className="flex justify-between items-center opacity-85 text-primary-fixed-dim">
                  <span className="font-body-sm text-body-sm">On-site Executive Lecture</span>
                  <span className="font-label-lg text-label-lg">$1,200</span>
                </div>
              )}
            </div>
            
            <div className="border-t border-white/20 pt-unit-lg mb-unit-xl">
              <div className="flex justify-between items-end">
                <div>
                  <span className="font-label-md text-label-md uppercase tracking-widest text-primary-fixed-dim/60 block">Total Investment</span>
                  <span className="text-display-lg font-display-xl text-white">${totalPrice.toLocaleString()}</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-label-sm text-label-md italic text-primary-fixed-dim/60">Excl. VAT</span>
                </div>
              </div>
            </div>

            <div className="space-y-unit-md">
              <button className="w-full bg-accent-gold text-black font-bold py-unit-lg font-label-lg text-label-lg uppercase tracking-widest hover:brightness-110 transition-all rounded-lg">
                Book Engagement
              </button>
              <button className="w-full border border-white/30 py-unit-lg font-label-lg text-label-lg uppercase tracking-widest hover:bg-white/10 transition-colors rounded-lg flex items-center justify-center gap-unit-sm text-white">
                <span className="material-symbols-outlined text-sm">chat_bubble</span>
                Chat with Management
              </button>
            </div>
            <p className="mt-unit-lg font-body-sm text-body-sm text-primary-fixed-dim/60 text-center leading-relaxed">
              Secure SSL academic encryption enabled. <br/>Terms of Service apply.
            </p>
          </div>
          
          <div className="mt-unit-xl p-unit-lg bg-surface-container-low border border-outline-variant/30 rounded-xl">
            <h4 className="font-label-lg text-label-lg uppercase tracking-widest text-primary mb-unit-md border-b border-outline-variant/10 pb-2">Key Deliverables</h4>
            <ul className="space-y-unit-sm text-on-surface-variant font-body-sm text-body-sm">
              <li className="diamond-bullet">Bespoke Strategic Roadmap</li>
              <li className="diamond-bullet">Archival Policy Review</li>
              <li className="diamond-bullet">Resource Optimization Audit</li>
              <li className="diamond-bullet">Stakeholder Alignment Framework</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
