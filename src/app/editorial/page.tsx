'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import ArticleCard from '@/components/ArticleCard';
import ContinueExploring, { ContinueExploringItem } from '@/components/ContinueExploring';

const relatedItems: ContinueExploringItem[] = [
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
    title: 'The Sovereign Wealth Retreat',
    description: 'Special discussion on legacy capital preservation and elite wellness environments.',
    href: '/podcast',
    type: 'podcast',
    categoryOrDiscipline: 'Wealth',
    duration: '28:14',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuMTT9OGinnh_qwJG6Kl4fBTS-RKvAQg9aI0k49XXzvFKsrROWQb_8cdUQoZPuieRj9l0CT1agt4GPCphwPo5Wbe81VOIqcl959BSxotKreVYSBLoaIQejy9hR_LgANVFur_LRhrUXoc3LKoxOG7n0Ji1xsrgDEE4aXFH7O6jlEOuvd83EmPSZlCUJ_-Bq_q4PdFwJveV-VtvxxhANbkzEN0xla3ZQWi_FLnIGQPL2346ONbMX4KE4EnWlJ_VeMOZstTIPXPtzy_0',
  },
  {
    title: 'The Architecture of Generational Wealth',
    description: 'A comprehensive study of capital preservation, asset diversification, and the psychology of lasting legacy.',
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
        sectionLabel="Research Journal"
        pageTitle="The Research Archive"
        supportingDescription="Deep dives into corporate governance, legacy preservation, bio-hacking, and systemic philosophy."
      />

      <div className="flex flex-col lg:flex-row gap-gutter mt-unit-lg">
        {/* Main Content Area (Left) */}
        <div className="flex-1 space-y-unit-2xl">
          {/* Featured Editorial Grid */}
          <section className="grid grid-cols-12 gap-gutter">
            {/* Large Featured Card */}
            <div className="col-span-12 lg:col-span-8">
              <ArticleCard
                title="The Architect of Legacy: Governing Family Interests Across Generations"
                description="In this definitive research piece, Dr. Ayuba explores the intersection of corporate governance and familial bonds, outlining a new framework for multi-generational stability within institutional family structures."
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBkdeztzdSpdvgqJQ-SCj_OW_jTDVJeSn-U634ES1rjty4dN8wbn5fKQYSDC_BVZrkSTTggDLPbMvXuzNCwmZ342mb84kOr1Cs-eg0dSqNCPpGMIQXUBp_4IeT8KPVvWyJRW6AAu3clrd_u6dgkr6gTNzOP099utAJNbSX94isCMRdLHaj1wAysAxO7JEXX_iWi83qxKA65fNoTrE2Y40cz3V3wEjOUsLgxEUPtp9z4ktTa-gqu--6AtHq2DXZreZDDy-FLcl4bwDY"
                imageAlt="Scholarly library with wooden bookshelves"
                category="LEADERSHIP"
                publishDate="JUNE 12, 2024"
                readTime="12 MIN READ"
                href="#"
              />
            </div>

            {/* Sidebar Featured Articles (without images, stack) */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-unit-md justify-between">
              <ArticleCard
                title="Cognitive Longevity in High-Performance Aging"
                description="New biological insights into maintaining neurological sharpness during the transition to elder statesmanship."
                category="FAMILY HEALTH"
                readTime="4 MIN READ"
                href="#"
                className="bg-transparent border-t border-b-0 border-l-0 border-r-0 border-outline-variant/30 pt-unit-md rounded-none shadow-none hover:shadow-none hover:translate-y-0"
              />
              <ArticleCard
                title="The Philanthropic Engine: Capital with Intent"
                description="Transitioning from accumulation to distribution through institutional foundations and global impact frameworks."
                category="WEALTH"
                readTime="8 MIN READ"
                href="#"
                className="bg-transparent border-t border-b-0 border-l-0 border-r-0 border-outline-variant/30 pt-unit-md rounded-none shadow-none hover:shadow-none hover:translate-y-0"
              />
            </div>
          </section>

          {/* Secondary Grid - Editorial Bento */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Bento Item 1 */}
            <ArticleCard
              title="The Heritage Protocol"
              description="How a 200-year-old estate reorganized for the digital era without losing its core identity."
              category="CASE STUDY"
              href="#"
              className="bg-white border border-primary/10 rounded-xl"
            />

            {/* Bento Item 2: Custom dark card for Podcast */}
            <div className="bg-primary text-on-primary p-unit-lg flex flex-col justify-between hover:bg-opacity-95 transition-all rounded-xl premium-shadow premium-shadow-hover h-full text-inherit no-underline">
              <div>
                <span className="font-label-md text-label-md text-tertiary-fixed-dim uppercase tracking-widest">Exclusive Podcast</span>
                <h4 className="font-headline-sm text-headline-sm mt-unit-sm text-white">The Elder Discourse: Episode 42</h4>
                <p className="font-body-sm text-body-sm mt-unit-sm text-white/80 leading-relaxed">Reflections on silent leadership with special guest Emeritus Professor Julian Vance.</p>
              </div>
              <div className="mt-unit-xl flex items-center gap-unit-md pt-4 border-t border-white/10">
                <button className="bg-tertiary-fixed text-on-tertiary-fixed w-10 h-10 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-black font-bold">play_arrow</span>
                </button>
                <span className="font-label-lg text-label-lg text-white">Listen Now (28:14)</span>
              </div>
            </div>

            {/* Bento Item 3 */}
            <ArticleCard
              title="Education for the 1%"
              description="Redefining elite schooling for the coming challenges of automation and climate shifts."
              category="GLOBAL POLICY"
              href="#"
              className="bg-white border border-primary/10 rounded-xl"
            />
          </section>
        </div>

        {/* Sticky Utility Sidebar (Newsletter & Topics) */}
        <aside className="w-full lg:w-80 shrink-0">
          <div className="sticky top-28 space-y-unit-xl">
            {/* Weekend Brief Signup Card */}
            <div className="bg-surface-container-high p-unit-lg border-l-4 border-secondary rounded-r-xl border border-outline-variant/30">
              <h5 className="font-headline-sm text-headline-sm text-primary leading-tight">The Weekend Brief</h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-sm">Every Sunday morning, Dr. Ayuba curates 3 essential reads for the modern decision maker.</p>
              <form className="mt-unit-lg space-y-unit-md" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-label-lg text-label-lg text-primary block mb-unit-xs">Professional Email</label>
                  <input className="w-full bg-white border border-outline-variant px-4 py-3 focus:ring-0 focus:border-primary text-sm rounded-lg" placeholder="name@institution.com" type="email" />
                </div>
                <button className="w-full bg-primary text-on-primary font-label-lg text-label-lg py-3 uppercase tracking-widest hover:bg-opacity-90 transition-all rounded-lg">Request Access</button>
                <p className="font-label-md text-label-md text-on-surface-variant opacity-70 text-center italic mt-2">Strictly non-commercial research.</p>
              </form>
            </div>

            {/* Popular Topics list */}
            <div className="space-y-unit-md bg-white border border-outline-variant/30 p-unit-lg rounded-xl">
              <h6 className="font-label-lg text-label-lg text-primary border-b border-outline-variant pb-2 flex items-center justify-between">
                POPULAR TOPICS
                <span className="material-symbols-outlined text-sm">trending_up</span>
              </h6>
              <ul className="space-y-unit-sm">
                <li><a className="flex justify-between text-body-sm text-on-surface-variant hover:text-secondary py-1" href="#"><span className="">Endowment Management</span> <span className="text-xs opacity-50">12</span></a></li>
                <li><a className="flex justify-between text-body-sm text-on-surface-variant hover:text-secondary py-1" href="#"><span className="">Bio-Hacking for Executives</span> <span className="text-xs opacity-50">8</span></a></li>
                <li><a className="flex justify-between text-body-sm text-on-surface-variant hover:text-secondary py-1" href="#"><span className="">Ethical Leadership</span> <span className="text-xs opacity-50">15</span></a></li>
                <li><a className="flex justify-between text-body-sm text-on-surface-variant hover:text-secondary py-1" href="#"><span className="">Legacy Trusts</span> <span className="text-xs opacity-50">21</span></a></li>
              </ul>
            </div>

            {/* Institutional Notice */}
            <div className="bg-primary-container p-unit-md text-on-primary-container rounded-xl">
              <div className="flex items-center gap-unit-sm mb-unit-sm">
                <span className="material-symbols-outlined text-tertiary-fixed">info</span>
                <span className="font-label-lg text-label-lg uppercase tracking-wider text-tertiary-fixed">Note</span>
              </div>
              <p className="font-body-sm text-body-sm opacity-90 leading-relaxed">The Q3 Research Journal is now available for print. Institutional members can request their copy through the Faculty Portal.</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
