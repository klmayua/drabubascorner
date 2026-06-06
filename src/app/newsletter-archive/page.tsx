'use client';

import React, { useRef, useState } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import ContinueExploring, { ContinueExploringItem } from '@/components/ContinueExploring';

const relatedItems: ContinueExploringItem[] = [
  {
    title: 'The Weekly Dispatch',
    description: 'Subscribe to our primary publication on pediatric health, community leadership, and global institutional insights.',
    href: '/newsletter',
    type: 'article',
    categoryOrDiscipline: 'Publication',
    duration: 'Weekly Dispatch',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVqtbylBKqTq3doTt2mqAL2IVZ_NU4U6G3bRirWYzRZ4BHiic-NH1yYHsVaD0WlNBYP6lx4q_yrpdXRrRJf7pn-WdU6kvmTdJyb5zIIFV7yO57kp8jhKVsk6Z846jdIsqrDsm0gTUUFhizU4EuIyq3d7yALVCvUlSl-a2iv6TMQa2FNpOCgvuhfqZlxP4UxAYR4TzuA9cl3UFgV52StcgfGN6iBJOWaUJHPn9gq3FJOCdK7z1sjp0s-IlA7TAuFRR6q0jl3srtZgY',
  },
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
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'leadership' | 'health' | 'capital'>('all');

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Scholarly Communication"
        pageTitle="The Weekend Brief Archive"
        supportingDescription="Access deep-dives into geopolitical stability, healthcare systemic resilience, and the stewardship of legacy."
      />

      {/* Subscription Section: The Weekend Brief */}
      <section className="mb-unit-2xl mt-unit-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center bg-surface-container-low border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm">
          <div className="lg:col-span-7 p-unit-xl flex flex-col gap-unit-md">
            <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">The Weekend Brief</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              A curated editorial synthesized for the modern intellectual. Deep-dives into geopolitical stability, healthcare systemic resilience, and the stewardship of legacy.
            </p>
            {/* Institutional Email Verification */}
            <div className="mt-unit-lg max-w-xl">
              <label className="font-label-lg text-label-lg text-primary mb-2 block font-bold" htmlFor="email">Institutional Email Address</label>
              <form className="flex flex-col sm:flex-row gap-unit-sm" onSubmit={(e) => { e.preventDefault(); alert('Verification link sent to your institution.'); }}>
                <input
                  className="flex-1 bg-white border border-outline-variant px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary font-body-md rounded-lg"
                  id="email"
                  placeholder="e.g. j.doe@institution.edu"
                  required
                  type="email"
                />
                <button className="bg-primary text-on-primary px-8 py-3 font-label-lg text-label-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 rounded-lg font-bold" type="submit">
                  Subscribe <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </form>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-accent-gold">verified_user</span>
                Subscribers gain exclusive access to the quarterly Faculty Review.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 h-full relative min-h-[350px] lg:min-h-full">
            <div className="absolute inset-0 bg-primary opacity-5 z-10"></div>
            <div
              className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-80"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuvQJXtkSv9jCyDkcvaOrtNjxomgxjNxX06X-lgs7kT3iRYHpTansbDLnzDeSGtJkVhugBxX29ooZXKvLCtGFK9AP9S2zyQ6CXGuTFDaXeFnlZpAufuj7LxLW724ezIZFO-N13goqAjN7jZ70Y5MMFuuOzFqz0_bWfozAY_BoQ0UqAfyb801Kd9C0zsQo_ybrVkQHKPVU76VOKUVh1qbKki_0NCqUKkW-fY14HrV_7js0XdKDHGZw-bczeyYJZ2d4roxI1ivY0kFw')" }}
            ></div>
            <div className="absolute bottom-unit-lg right-unit-lg z-20 bg-white/90 backdrop-blur-sm p-unit-md border border-outline-variant rounded-lg">
              <p className="font-label-md text-label-md text-primary italic font-bold">"Knowledge is the only asset that increases when shared."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Filter / Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-unit-xl border-b border-outline-variant/10 pb-unit-md gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">The Editorial Archive</h2>
          <div className="w-24 h-1 bg-accent-gold rounded"></div>
        </div>
        <nav className="flex flex-wrap gap-unit-md">
          <button
            onClick={() => setActiveTab('all')}
            className={`font-label-lg text-label-lg font-bold pb-1 border-b-2 transition-all ${activeTab === 'all' ? 'text-primary border-accent-gold' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
          >
            All Briefs
          </button>
          <button
            onClick={() => setActiveTab('leadership')}
            className={`font-label-lg text-label-lg font-bold pb-1 border-b-2 transition-all ${activeTab === 'leadership' ? 'text-primary border-accent-gold' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
          >
            Leadership
          </button>
          <button
            onClick={() => setActiveTab('health')}
            className={`font-label-lg text-label-lg font-bold pb-1 border-b-2 transition-all ${activeTab === 'health' ? 'text-primary border-accent-gold' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
          >
            Public Health
          </button>
          <button
            onClick={() => setActiveTab('capital')}
            className={`font-label-lg text-label-lg font-bold pb-1 border-b-2 transition-all ${activeTab === 'capital' ? 'text-primary border-accent-gold' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
          >
            Capital Preservation
          </button>
        </nav>
      </div>

      {/* The Archive Grid */}
      <div className="grid grid-cols-12 gap-gutter mb-unit-2xl">
        {/* Featured Brief */}
        <article className="col-span-12 lg:col-span-8 border border-outline-variant/30 bg-white p-unit-xl rounded-xl hover:border-secondary transition-colors duration-150 group shadow-sm flex flex-col justify-between">
          <div className="flex flex-col md:flex-row gap-unit-xl">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-unit-sm mb-unit-md">
                  <span className="bg-primary-container text-on-primary-container px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rounded">Leadership</span>
                  <span className="text-on-surface-variant font-label-md text-label-md font-bold">June 12, 2024</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors mb-unit-md leading-tight">
                  The Institutional Architect: Building Systems That Outlast Individuals
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-unit-lg line-clamp-3 leading-relaxed">
                  Exploring the shift from charismatic leadership to systemic reliability in healthcare administration. This brief analyzes historical case studies of institutions that maintained excellence across century-long transitions.
                </p>
              </div>
              <a className="font-label-lg text-label-lg text-primary underline flex items-center gap-2 font-bold hover:text-secondary transition-colors" href="#">
                Read Full Brief <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            </div>
            <div className="w-full md:w-48 h-48 overflow-hidden rounded-lg border border-outline-variant/10 self-center">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-150"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUj1R_9Ba_u3-ypPX-2QxSroyzzpVy3mKI_KLk9uxDBMlEK1rv0IBdTdHu-Z3QeP3j2_BFCuahLLMp7VCnpw_aOot1EN-xkVf8pV3ULdFDT-S_ZZnjWO8gkVcus9q2xCsRAKApS5g5Cwwz91kxjxfmu6bjMzMV7cBKvpgWfGDRRANv5AOWL8lKfGgOpVb37UDIZWVNuWT5lC3Ne7vMoJwUqDnbeGehFXYxt-RjpxCGaJ07FPRQGjzi9H8hO3T8Fud-EYtKyEBW_pU"
                alt="Watch mechanisms"
              />
            </div>
          </div>
        </article>

        {/* Regular Card: Public Health */}
        <article className="col-span-12 md:col-span-6 lg:col-span-4 border border-outline-variant/30 bg-white p-unit-lg flex flex-col justify-between rounded-xl hover:border-secondary transition-colors duration-150 group shadow-sm">
          <div>
            <div className="flex items-center gap-unit-sm mb-unit-md">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rounded">Public Health</span>
              <span className="text-on-surface-variant font-label-md text-label-md font-bold">May 28, 2024</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-md leading-tight group-hover:text-secondary transition-colors">The Fragility of Urban Care Networks</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg leading-relaxed">
              An examination of supply chain vulnerabilities in metropolitan health centers and the proposed decentralization of critical medical assets.
            </p>
          </div>
          <div className="flex justify-between items-center pt-unit-md border-t border-outline-variant/30 mt-unit-md">
            <span className="font-label-md text-label-md italic text-outline">12 min read</span>
            <button className="text-primary hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-[20px]">bookmark</span>
            </button>
          </div>
        </article>

        {/* Regular Card: Capital Preservation */}
        <article className="col-span-12 md:col-span-6 lg:col-span-4 border border-outline-variant/30 bg-white p-unit-lg flex flex-col justify-between rounded-xl hover:border-secondary transition-colors duration-150 group shadow-sm">
          <div>
            <div className="flex items-center gap-unit-sm mb-unit-md">
              <span className="bg-tertiary-container text-on-tertiary-fixed px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rounded">Capital Preservation</span>
              <span className="text-on-surface-variant font-label-md text-label-md font-bold">May 15, 2024</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-md leading-tight group-hover:text-secondary transition-colors">The Multi-Generational Balance Sheet</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg leading-relaxed">
              Stewardship beyond the fiscal year. How top-tier institutions hedge against inflationary cycles while maintaining social impact objectives.
            </p>
          </div>
          <div className="flex justify-between items-center pt-unit-md border-t border-outline-variant/30 mt-unit-md">
            <span className="font-label-md text-label-md italic text-outline">18 min read</span>
            <button className="text-primary hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-[20px]">bookmark</span>
            </button>
          </div>
        </article>

        {/* Regular Card: Leadership */}
        <article className="col-span-12 md:col-span-6 lg:col-span-4 border border-outline-variant/30 bg-white p-unit-lg flex flex-col justify-between rounded-xl hover:border-secondary transition-colors duration-150 group shadow-sm">
          <div>
            <div className="flex items-center gap-unit-sm mb-unit-md">
              <span className="bg-primary-container text-on-primary-container px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rounded">Leadership</span>
              <span className="text-on-surface-variant font-label-md text-label-md font-bold">May 02, 2024</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-md leading-tight group-hover:text-secondary transition-colors">The Ethics of Algorithmic Care</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg leading-relaxed">
              When AI enters the clinical boardroom: Maintaining institutional values in the age of automated decision-making.
            </p>
          </div>
          <div className="flex justify-between items-center pt-unit-md border-t border-outline-variant/30 mt-unit-md">
            <span className="font-label-md text-label-md italic text-outline">15 min read</span>
            <button className="text-primary hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-[20px]">bookmark</span>
            </button>
          </div>
        </article>

        {/* Regular Card: Public Health */}
        <article className="col-span-12 md:col-span-6 lg:col-span-4 border border-outline-variant/30 bg-white p-unit-lg flex flex-col justify-between rounded-xl hover:border-secondary transition-colors duration-150 group shadow-sm">
          <div>
            <div className="flex items-center gap-unit-sm mb-unit-md">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-tighter rounded">Public Health</span>
              <span className="text-on-surface-variant font-label-md text-label-md font-bold">April 19, 2024</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-md leading-tight group-hover:text-secondary transition-colors">Post-Pandemic Resilience Models</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg leading-relaxed">
              A retrospective analysis of healthcare adaptability and the emergence of hybrid primary care clusters in emerging markets.
            </p>
          </div>
          <div className="flex justify-between items-center pt-unit-md border-t border-outline-variant/30 mt-unit-md">
            <span className="font-label-md text-label-md italic text-outline">10 min read</span>
            <button className="text-primary hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-[20px]">bookmark</span>
            </button>
          </div>
        </article>
      </div>

      {/* Pagination / Load More */}
      <div className="mt-unit-2xl flex flex-col items-center gap-unit-md mb-unit-2xl">
        <button className="border-2 border-primary text-primary px-unit-2xl py-unit-md font-label-lg text-label-lg hover:bg-primary hover:text-white transition-all duration-150 font-bold rounded-lg bg-transparent">
          Access Full Archives
        </button>
        <p className="font-body-sm text-body-sm text-on-surface-variant italic">Showing 5 of 142 briefings</p>
      </div>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
