'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import CardBase from '@/components/CardBase';
import ContinueExploring, { ContinueExploringItem } from '@/components/ContinueExploring';

const relatedItems: ContinueExploringItem[] = [
  {
    title: 'The Architecture of Generational Wealth',
    description: 'A comprehensive study of capital preservation, asset diversification, and the psychology of lasting legacy.',
    href: '/catalog',
    type: 'course',
    categoryOrDiscipline: 'CERTIFICATION PATH',
    duration: '12 Weeks',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC-YqLehH_UwELWHn4Vc8_kQihVsjQicNfmofe98xjNXSaS1ALIEdCDPxdp9dkPk2tzlsTxcyP4W3cIbTaQR0P0_q_Ken9E_qI1q2tr1Nft0O9s7HGKuxqIUiRP8Mof9CkY8AooidSa3okPfDGJLIvQIF3qj8sy_p4KWjWajlGTqZiXiF1M9qY4oulO5s3r0m1buOBcR7s0kD2ypgXLeb8XbCFZiHFPbtxTk_O4SzkAViL9F-Vuv2-lFzK0ylskMLCGcRQdtOSSVk',
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
    title: 'Transgenerational Capital Strategies',
    description: 'Understanding the foundational principles of wealth preservation through institutional frameworks and strategic assets.',
    href: '/video-archive',
    type: 'video',
    categoryOrDiscipline: 'Wealth',
    duration: '32 mins',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuMTT9OGinnh_qwJG6Kl4fBTS-RKvAQg9aI0k49XXzvFKsrROWQb_8cdUQoZPuieRj9l0CT1agt4GPCphwPo5Wbe81VOIqcl959BSxotKreVYSBLoaIQejy9hR_LgANVFur_LRhrUXoc3LKoxOG7n0Ji1xsrgDEE4aXFH7O6jlEOuvd83EmPSZlCUJ_-Bq_q4PdFwJveV-VtvxxhANbkzEN0xla3ZQWi_FLnIGQPL2346ONbMX4KE4EnWlJ_VeMOZstTIPXPtzy_0',
  },
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Institutional Library"
        pageTitle="The Wisdom Archives"
        supportingDescription="Access peer-reviewed monographs, decadal reviews, and official policy frameworks preserved for scholarship."
      />

      {/* Search Bar Section */}
      <section className="relative z-10 mt-6">
        <div className="bg-white border border-outline-variant/30 p-unit-lg flex flex-col md:flex-row gap-unit-md items-center rounded-xl premium-shadow">
          <div className="flex-1 w-full relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full pl-12 pr-4 py-4 border border-outline-variant rounded-lg font-body-md text-body-md focus:ring-0 focus:border-primary outline-none transition-all" placeholder="Deep-search institutional archives by keyword, DOI, or author..." type="text" />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <select className="px-unit-lg py-4 border border-outline-variant rounded-lg font-label-lg text-label-lg bg-surface focus:border-primary outline-none min-w-[180px]">
              <option>All Categories</option>
              <option>Research Briefs</option>
              <option>White Papers</option>
              <option>Archival Reports</option>
            </select>
            <button className="bg-primary text-white px-unit-xl py-4 font-label-lg text-label-lg hover:bg-primary/90 transition-all rounded-lg">QUERY ARCHIVE</button>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-gutter mt-unit-xl items-start">
        {/* Left Column: Archive Feed (8 Columns) */}
        <div className="col-span-12 lg:col-span-8 space-y-unit-2xl">
          {/* Research Briefs Section */}
          <section className="space-y-unit-lg">
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-unit-sm">
              <h2 className="font-headline-md text-headline-md text-primary">Research Briefs</h2>
              <a className="font-label-lg text-label-lg text-accent-gold hover:underline transition-all" href="/library">View All Research Briefs</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-lg">
              {/* Card 1 */}
              <CardBase className="p-unit-lg flex flex-col justify-between hover:border-accent-gold/50 transition-all">
                <div>
                  <span className="text-secondary font-label-md text-label-md uppercase tracking-wider mb-2 block">EPISTEMOLOGY</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4 leading-tight">Epistemology of Financial Resilience in Emerging Markets</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">A rigorous inquiry into the structural foundations of fiscal stability within high-volatility economic landscapes.</p>
                </div>
                <div className="flex items-center justify-between pt-unit-md border-t border-outline-variant/10 mt-auto">
                  <button className="font-label-lg text-label-lg text-primary hover:text-accent-gold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">description</span> Abstract
                  </button>
                  <button className="bg-surface text-primary border border-primary px-4 py-2 font-label-lg text-label-lg hover:bg-primary hover:text-white transition-all flex items-center gap-2 rounded-lg">
                    <span className="material-symbols-outlined text-[18px]">download</span> PDF
                  </button>
                </div>
              </CardBase>

              {/* Card 2 */}
              <CardBase className="p-unit-lg flex flex-col justify-between hover:border-accent-gold/50 transition-all">
                <div>
                  <span className="text-secondary font-label-md text-label-md uppercase tracking-wider mb-2 block">MACROECONOMICS</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4 leading-tight">Post-Institutional Dynamics and Global Capital Flows</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">Examining the decentralization of institutional power and its impact on cross-border investment strategies.</p>
                </div>
                <div className="flex items-center justify-between pt-unit-md border-t border-outline-variant/10 mt-auto">
                  <button className="font-label-lg text-label-lg text-primary hover:text-accent-gold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">description</span> Abstract
                  </button>
                  <button className="bg-surface text-primary border border-primary px-4 py-2 font-label-lg text-label-lg hover:bg-primary hover:text-white transition-all flex items-center gap-2 rounded-lg">
                    <span className="material-symbols-outlined text-[18px]">download</span> PDF
                  </button>
                </div>
              </CardBase>
            </div>
          </section>

          {/* White Papers & Archival Reports Section */}
          <section className="space-y-unit-lg">
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-unit-sm">
              <h2 className="font-headline-md text-headline-md text-primary">Archival Reports</h2>
            </div>
            <div className="space-y-unit-md">
              {/* List Item 1 */}
              <div className="bg-white border border-outline-variant/30 p-unit-md flex items-center gap-unit-lg hover:bg-surface transition-colors cursor-pointer group rounded-xl premium-shadow">
                <div className="w-16 h-16 bg-primary-container flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-accent-gold text-3xl">article</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-label-md text-label-md text-secondary uppercase tracking-wider">Report AR-2023-09</h4>
                  <p className="font-headline-sm text-[20px] text-primary group-hover:text-secondary transition-colors duration-200">Decadal Review of Sub-Saharan Policy Frameworks</p>
                </div>
                <div className="hidden md:flex gap-4">
                  <span className="font-label-md text-label-md text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">Archive</span>
                  <span className="font-label-md text-label-md text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">2.4 MB</span>
                </div>
                <button className="bg-accent-gold text-black w-10 h-10 flex items-center justify-center hover:translate-y-[-1px] transition-transform rounded-lg font-bold">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>

              {/* List Item 2 */}
              <div className="bg-white border border-outline-variant/30 p-unit-md flex items-center gap-unit-lg hover:bg-surface transition-colors cursor-pointer group rounded-xl premium-shadow">
                <div className="w-16 h-16 bg-primary-container flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-accent-gold text-3xl">history_edu</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-label-md text-label-md text-secondary uppercase tracking-wider">Report AR-2023-04</h4>
                  <p className="font-headline-sm text-[20px] text-primary group-hover:text-secondary transition-colors duration-200">Institutional Heritage and Modern Governance Models</p>
                </div>
                <div className="hidden md:flex gap-4">
                  <span className="font-label-md text-label-md text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">Archive</span>
                  <span className="font-label-md text-label-md text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">1.8 MB</span>
                </div>
                <button className="bg-accent-gold text-black w-10 h-10 flex items-center justify-center hover:translate-y-[-1px] transition-transform rounded-lg font-bold">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar (4 Columns) */}
        <aside className="col-span-12 lg:col-span-4 space-y-unit-2xl">
          {/* Director's Commentary Section */}
          <section className="bg-primary text-white p-unit-lg relative overflow-hidden rounded-xl premium-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 -mr-16 -mt-16 rounded-full blur-3xl"></div>
            <h3 className="font-label-lg text-label-lg text-accent-gold uppercase tracking-widest mb-unit-lg border-b border-white/10 pb-2 inline-block">Director's Commentary</h3>
            <div className="relative z-10">
              <div className="aspect-[0.78] w-full mb-unit-lg overflow-hidden border border-white/10 rounded-lg">
                <img alt="Dr. Ayuba Portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDGqWBVzmGQpcAXkm4OKWyoNpitwz4ORfW0VP4X-CQz4pIuTPdtOLWCAP5Zn-m05sG8dc3vfRGH87YKOhxPSScSooIO1B9jV0clIhNU-8ZafkYDWd2Dr1kc0O85pxpyyGeecBYISBBgBrtrzcRQSbm78KJHT8sWqxt-L802_YCm6dDXSIAO7qpKxucrygBVYM6qu5Fs6ZuT6tEZ9p-NeUZOZpB9gV4LCG2jNGl2uejLyHDo2s3GVQBKWIKgCaZo5r-pTBUim6EdSE" />
              </div>
              <blockquote className="font-display-lg text-[24px] italic leading-tight mb-unit-lg text-primary-fixed-dim">
                "The pursuit of institutional excellence is not a destination, but a continuous archival process of learning and refinement."
              </blockquote>
              <div className="space-y-unit-sm">
                <p className="font-headline-sm text-headline-sm text-white">Dr. Ayuba</p>
                <p className="font-label-md text-label-md text-primary-fixed-dim tracking-wider uppercase">Lead Director &amp; Principal Scholar</p>
              </div>
              <button className="mt-unit-lg w-full border border-accent-gold text-accent-gold py-3 font-label-lg text-label-lg hover:bg-accent-gold hover:text-black transition-all rounded-lg font-bold">READ FULL REFLECTION</button>
            </div>
          </section>

          {/* Key Resources */}
          <section className="bg-white border border-outline-variant/30 p-unit-lg rounded-xl premium-shadow">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-md border-l-4 border-secondary pl-4">Key Resources</h3>
            <ul className="space-y-4">
              <li className="diamond-bullet font-label-lg text-label-lg text-on-surface-variant cursor-pointer hover:text-primary transition-colors py-1">Statistical Annual (2023)</li>
              <li className="diamond-bullet font-label-lg text-label-lg text-on-surface-variant cursor-pointer hover:text-primary transition-colors py-1">Peer Review Guidelines</li>
              <li className="diamond-bullet font-label-lg text-label-lg text-on-surface-variant cursor-pointer hover:text-primary transition-colors py-1">Grant Application Portal</li>
              <li className="diamond-bullet font-label-lg text-label-lg text-on-surface-variant cursor-pointer hover:text-primary transition-colors py-1">Archival Submission Protocol</li>
              <li className="diamond-bullet font-label-lg text-label-lg text-on-surface-variant cursor-pointer hover:text-primary transition-colors py-1">Ethics &amp; Compliance Standards</li>
            </ul>
          </section>
        </aside>
      </div>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
