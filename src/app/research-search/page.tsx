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
    title: 'Transgenerational Capital Strategies',
    description: 'Understanding the foundational principles of wealth preservation through institutional frameworks and strategic assets.',
    href: '/video-archive',
    type: 'video',
    categoryOrDiscipline: 'Wealth',
    duration: '32 mins',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuMTT9OGinnh_qwJG6Kl4fBTS-RKvAQg9aI0k49XXzvFKsrROWQb_8cdUQoZPuieRj9l0CT1agt4GPCphwPo5Wbe81VOIqcl959BSxotKreVYSBLoaIQejy9hR_LgANVFur_LRhrUXoc3LKoxOG7n0Ji1xsrgDEE4aXFH7O6jlEOuvd83EmPSZlCUJ_-Bq_q4PdFwJveV-VtvxxhANbkzEN0xla3ZQWi_FLnIGQPL2346ONbMX4KE4EnWlJ_VeMOstTIPXPtzy_0',
  },
];

const searchResults = [
  {
    title: 'Stability of Non-Equilibrium Macroscopic States in Symmetrical Quantum Fields',
    date: 'July 2024',
    badge: 'PEER REVIEWED',
    isPeerReviewed: true,
    description: 'This paper investigates the intersection of quantum field theory and macroscopic stability, proposing a new model for observing entanglement patterns across distributed symmetrical networks. By leveraging longitudinal data from the Ayuba-Corner particle accelerator...',
    citations: 42,
    doi: '10.1038/s41586-024-0012-y',
  },
  {
    title: 'Topological Data Analysis in Social Infrastructure Modeling',
    date: 'May 2024',
    badge: 'WORKING PAPER',
    isPeerReviewed: false,
    description: 'An interdisciplinary review of how topological invariants can predict failure points in modern urban social structures. The research utilizes the Corner Institutional Archives to trace developmental patterns over the last four decades...',
    citations: 12,
    doi: '10.1145/3613482.361418',
  },
  {
    title: 'Cognitive Load Theory in Digital Archival Interfaces',
    date: 'January 2024',
    badge: 'PEER REVIEWED',
    isPeerReviewed: true,
    description: 'This study explores the psychological impact of institutional UI design on research efficiency. By measuring eye-tracking data across the Dr. Ayuba\'s Corner interface, we establish new benchmarks for professional-grade legibility...',
    citations: 89,
    doi: '10.1016/j.chb.2024.107932',
  },
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Research"
        pageTitle="The Research Search"
        supportingDescription="Deep-search our collection of academic papers, peer-reviewed monographs, and working papers preserved for scholarly reference."
      />

      <div className="grid grid-cols-12 gap-gutter mt-unit-lg items-start">
        {/* Left Column: Advanced Filters (Columns 1-3) */}
        <aside className="col-span-12 lg:col-span-3 bg-white border border-outline-variant/30 p-unit-lg rounded-xl premium-shadow">
          <div>
            <h3 className="font-label-lg text-label-lg text-primary mb-4 flex items-center gap-2 border-b border-outline-variant/10 pb-2">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              ADVANCED FILTERS
            </h3>
            <div className="space-y-6">
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant block mb-2">DISCIPLINE</label>
                <select className="w-full bg-white border border-outline-variant px-3 py-2 text-body-sm focus:border-primary outline-none appearance-none rounded-lg">
                  <option>All Disciplines</option>
                  <option>Theoretical Physics</option>
                  <option>Computational Biology</option>
                  <option>Historical Philosophy</option>
                </select>
              </div>
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant block mb-2">PUBLICATION DATE</label>
                <div className="flex gap-2">
                  <input className="w-1/2 bg-white border border-outline-variant px-3 py-2 text-body-sm focus:border-primary outline-none rounded-lg" placeholder="From" type="text" />
                  <input className="w-1/2 bg-white border border-outline-variant px-3 py-2 text-body-sm focus:border-primary outline-none rounded-lg" placeholder="To" type="text" />
                </div>
              </div>
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input defaultChecked className="w-4 h-4 border-outline text-primary focus:ring-primary rounded" type="checkbox" />
                  <span className="font-body-sm text-body-sm text-on-surface">Peer-Reviewed Only</span>
                </label>
              </div>
              <button className="w-full bg-primary text-white py-3 font-label-lg tracking-widest hover:bg-primary-container transition-all rounded-lg">
                APPLY FILTERS
              </button>
            </div>
          </div>
        </aside>

        {/* Middle Column: Results List (Columns 4-9) */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-unit-lg">
          {/* Search Header */}
          <div className="mb-unit-md bg-white border border-outline-variant/30 p-unit-lg rounded-xl premium-shadow">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full bg-surface-container-lowest border border-outline-variant py-4 pl-14 pr-6 text-body-lg focus:border-primary transition-all outline-none rounded-lg" placeholder="Search the archives..." type="text" defaultValue="Quantum entanglement in macroscopic systems" />
            </div>
            <p className="mt-4 font-body-sm text-on-surface-variant italic">Showing 1,248 results for "Quantum entanglement..."</p>
          </div>

          {/* Results List */}
          <div className="flex flex-col gap-unit-md">
            {searchResults.map((res, idx) => (
              <CardBase key={idx} className="p-unit-lg border border-primary/10 relative hover:border-accent-gold/50 transition-all flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-20"></div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`font-label-md text-label-md px-2 py-0.5 rounded-sm ${
                      res.isPeerReviewed 
                        ? 'text-secondary-container bg-primary-container' 
                        : 'text-on-surface-variant border border-outline-variant/30'
                    }`}>
                      {res.badge}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{res.date}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3 hover:text-secondary cursor-pointer transition-colors duration-200">
                    {res.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-6 leading-relaxed">
                    {res.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-6 border-t border-outline-variant/10 pt-4 mt-auto">
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-md">
                    <span className="material-symbols-outlined text-[16px]">format_quote</span>
                    <span>Citations: {res.citations}</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-md">
                    <span className="material-symbols-outlined text-[16px]">link</span>
                    <a className="text-primary hover:underline" href="#">DOI: {res.doi}</a>
                  </div>
                  <button className="ml-auto text-accent-gold font-bold font-label-md hover:underline underline-offset-4">
                    VIEW FULL PAPER
                  </button>
                </div>
              </CardBase>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 py-unit-lg border-t border-outline-variant/30 mt-unit-lg">
            <button className="material-symbols-outlined text-primary disabled:opacity-30" disabled>chevron_left</button>
            <div className="flex gap-2">
              <span className="w-10 h-10 flex items-center justify-center bg-primary text-white font-label-lg rounded-lg">1</span>
              <span className="w-10 h-10 flex items-center justify-center text-primary font-label-lg hover:bg-surface-container-high rounded-lg cursor-pointer transition-colors">2</span>
              <span className="w-10 h-10 flex items-center justify-center text-primary font-label-lg hover:bg-surface-container-high rounded-lg cursor-pointer transition-colors">3</span>
              <span className="w-10 h-10 flex items-center justify-center text-primary font-label-lg">...</span>
              <span className="w-10 h-10 flex items-center justify-center text-primary font-label-lg hover:bg-surface-container-high rounded-lg cursor-pointer transition-colors">24</span>
            </div>
            <button className="material-symbols-outlined text-primary hover:bg-surface-container-high rounded-lg transition-colors">chevron_right</button>
          </div>
        </div>

        {/* Right Column: Featured Researcher Sidebar (Columns 10-12) */}
        <aside className="col-span-12 lg:col-span-3 flex flex-col gap-unit-lg">
          <div className="bg-primary text-white p-unit-lg flex flex-col items-center text-center rounded-xl premium-shadow">
            <h3 className="font-label-lg text-label-lg tracking-widest mb-6 opacity-80 uppercase">Featured Researcher</h3>
            <div className="w-full aspect-[4/5] mb-6 overflow-hidden border border-white/10 rounded-lg">
              <img alt="Dr. Ayuba" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMea3Uf6T51nw_RPgfEa8ikbRP53UbjZKiFM-xrd4fl3CH937gKqi9TGDUMiXfdP4JY2L2AU_OEPTWgXA-k7XKBuXZZVZahWCry9gCw7uyiyL9CJWEgFQDcR6hucoIGh1EPdx4A9DYM6VtgGDLyVW4iVaKVP2fQsJdiN4CmiQuzJQQvUJQ6jF6AiX5-jeyHxZSJCpucIx40L5cH-6n8_D9kTmnrBL-dA2Ngrao7ndMm0OwLBnTBn0E_jQX2YccblA5s5odIL-XEk4" />
            </div>
            <h2 className="font-headline-sm text-headline-sm mb-1 text-white">Dr. Ayuba</h2>
            <p className="font-body-sm text-body-sm text-primary-fixed-dim mb-6 italic">Senior Fellow of Theoretical Frameworks</p>
            <div className="w-12 h-px bg-white/10 mb-6"></div>
            <p className="font-body-sm text-body-sm opacity-90 leading-relaxed mb-6">
              A pioneer in integrated archival logic, Dr. Ayuba has dedicated three decades to the curation of human intellectual heritage.
            </p>
            <button className="border border-accent-gold text-accent-gold px-6 py-3 font-label-lg hover:bg-accent-gold hover:text-black transition-all rounded-lg font-bold">
              VIEW PROFILE
            </button>
          </div>

          {/* Quick Access Resources */}
          <div className="bg-white border border-outline-variant/30 p-unit-lg rounded-xl premium-shadow">
            <h3 className="font-label-lg text-label-lg text-primary mb-4 border-b border-outline-variant/10 pb-2 uppercase">Related Resources</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 py-1">
                <span className="w-1.5 h-1.5 bg-accent-gold rotate-45"></span>
                <a className="font-body-sm text-body-sm text-on-surface hover:text-secondary transition-colors" href="#">Library of Metadata</a>
              </li>
              <li className="flex items-center gap-3 py-1">
                <span className="w-1.5 h-1.5 bg-accent-gold rotate-45"></span>
                <a className="font-body-sm text-body-sm text-on-surface hover:text-secondary transition-colors" href="#">Citation Guide v4.0</a>
              </li>
              <li className="flex items-center gap-3 py-1">
                <span className="w-1.5 h-1.5 bg-accent-gold rotate-45"></span>
                <a className="font-body-sm text-body-sm text-on-surface hover:text-secondary transition-colors" href="#">Academic Ethics Board</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
