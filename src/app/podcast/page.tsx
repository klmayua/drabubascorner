'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import CardBase from '@/components/CardBase';
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
    description: 'An in-depth exploration of archival wisdom and its application in modern health systems.',
    href: '/video-archive',
    type: 'video',
    categoryOrDiscipline: 'Wisdom',
    duration: '42:15',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk56jy9HjwLtDwdS7kEiwHZ7CLuhbVjyj0kyRSiaTHgg86FwkyNZrPE57kLokRTcw5uMzIgnn4xvJoBTPVL9PJ9uo7LboVee5ab6WHfW42HjTxj63SRL_g3DID6hwL8hy8esAhCoKerkrdYYF8Onl5t9WMU9BhvimsmOGl7v0gb3jArJTfgd2tAnYi4Bj_-fk3b4y8dFPnxlDxb_ARNfdpcxGfjqa1v_jHZyn-UHQc7tABP422M2Ts26xs0wOg_heinnce_KD-psc',
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

const episodes = [
  {
    discipline: 'Wisdom',
    duration: '45 min',
    title: 'The Architecture of Silence: Navigating Corporate Noise',
    description: 'In this session, we dissect the strategic value of calculated pauses in institutional negotiation.',
    disciplineClass: 'bg-secondary-container text-on-secondary-fixed-variant',
  },
  {
    discipline: 'Health',
    duration: '52 min',
    title: 'Indigenous Nutrition & High-Performance Biology',
    description: 'Analyzing the biochemical impact of ancient dietary habits on contemporary neurological health.',
    disciplineClass: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
  },
  {
    discipline: 'Wealth',
    duration: '38 min',
    title: 'Generational Equity in Traditional Kingdoms',
    description: 'A deep dive into inheritance models that sustain legacy across multiple centuries.',
    disciplineClass: 'bg-primary-fixed text-on-primary-fixed-variant',
  },
  {
    discipline: 'Wisdom',
    duration: '60 min',
    title: 'The Philosophy of the African Square',
    description: 'Reviewing community governance and consensus building as a framework for modern startups.',
    disciplineClass: 'bg-secondary-container text-on-secondary-fixed-variant',
  },
  {
    discipline: 'Health',
    duration: '42 min',
    title: 'Mental Fortitude: The Griot\'s Discipline',
    description: 'Mnemonic techniques and mental clarity exercises passed down through oral historians.',
    disciplineClass: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
  },
  {
    discipline: 'Wealth',
    duration: '55 min',
    title: 'Trans-Saharan Trade: Lessons for Modern Logistics',
    description: 'Decoding the economic resilience and networking strategies of historical trade caravans.',
    disciplineClass: 'bg-primary-fixed text-on-primary-fixed-variant',
  },
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Podcast Series"
        pageTitle="The Elder Discourse"
        supportingDescription="Unveiling centuries of indigenous wisdom through modern intellectual lenses. Join Dr. Ayuba as he explores the intersection of heritage and high-stakes leadership."
      />

      {/* Featured Series Header & Host */}
      <section className="mb-unit-2xl mt-unit-lg">
        <div className="grid grid-cols-12 gap-gutter items-stretch">
          <div className="col-span-12 lg:col-span-8 bg-primary-container text-white p-unit-xl rounded-xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10">
              <span className="font-label-lg text-label-lg text-tertiary-fixed uppercase tracking-widest mb-unit-sm block">Featured Series</span>
              <h2 className="font-display-lg text-display-lg text-white mb-unit-md leading-tight">The Elder Discourse</h2>
              <p className="font-body-lg text-body-lg text-primary-fixed mb-unit-lg max-w-2xl">
                Unveiling centuries of indigenous wisdom through modern intellectual lenses. Join Dr. Ayuba as he explores the intersection of heritage and high-stakes leadership.
              </p>
              <div className="flex gap-unit-md">
                <button className="bg-secondary text-white px-unit-lg py-unit-md rounded-lg font-label-lg flex items-center gap-unit-xs hover:translate-y-[-1px] transition-transform">
                  <span className="material-symbols-outlined">play_arrow</span>
                  LISTEN NOW
                </button>
                <button className="border border-tertiary-fixed text-tertiary-fixed px-unit-lg py-unit-md rounded-lg font-label-lg hover:bg-tertiary-fixed hover:text-primary-container transition-all">
                  VIEW SERIES
                </button>
              </div>
            </div>
          </div>

          {/* Meet the Host Sidebar */}
          <div className="col-span-12 lg:col-span-4 bg-white border border-outline-variant/30 p-unit-lg rounded-xl flex flex-col items-center text-center premium-shadow">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-on-tertiary-container mb-unit-md">
              <img
                alt="Dr. Ayuba"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmT7Zk5gjXba1wIAnpi561kzCbLKH7ccp8Dh1RMTKBjIPeV0PJDQti1VhuU3PxhoX12kGkbxzI8s3yScI7oJbsN1FXxn3pKpdlKEAy2Je2Y5GWfSFr4Gx9gbXK6bobP_DJUGShrXWqnmxY4u4UVRy7zRmtJsrzbp93NsNgOX2f-Ggfw82TJnc1HXfIrNBPzgDpy5jow_kUOUlxlaWj8--mdyRb-Vs6OghtIAdStjm2Ra6bKJfE-P4kPcP85h_nKTmzLrokk1cbRRk"
              />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-xs">Meet Your Host</h3>
            <p className="font-label-lg text-label-lg text-on-tertiary-container italic mb-unit-sm">Dr. Ayuba, Institutional Lead</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg leading-relaxed">
              A scholar dedicated to bridging the gap between traditional African governance structures and global modern administration.
            </p>
            <div className="w-full h-px bg-outline-variant/30 mb-unit-md"></div>
            <div className="flex justify-center gap-unit-md">
              <a className="text-primary hover:text-on-tertiary-container transition-colors" href="/about"><span className="material-symbols-outlined">share</span></a>
              <a className="text-primary hover:text-on-tertiary-container transition-colors" href="/about"><span className="material-symbols-outlined">mail</span></a>
              <a className="text-primary hover:text-on-tertiary-container transition-colors" href="/about"><span className="material-symbols-outlined">rss_feed</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Filters */}
      <section className="mb-unit-xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-unit-md pb-unit-md border-b border-outline-variant/30">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-unit-xs">Recent Episodes</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Exploring the intellectual frontier of the African diaspora.</p>
          </div>
          <div className="flex gap-unit-sm">
            <button className="px-unit-md py-unit-xs bg-primary text-white rounded-lg font-label-md">All</button>
            <button className="px-unit-md py-unit-xs bg-surface-container-high text-on-surface-variant rounded-lg font-label-md hover:bg-outline-variant/30 transition-all">Wisdom</button>
            <button className="px-unit-md py-unit-xs bg-surface-container-high text-on-surface-variant rounded-lg font-label-md hover:bg-outline-variant/30 transition-all">Health</button>
            <button className="px-unit-md py-unit-xs bg-surface-container-high text-on-surface-variant rounded-lg font-label-md hover:bg-outline-variant/30 transition-all">Wealth</button>
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-unit-2xl">
        {episodes.map((ep, idx) => (
          <CardBase key={idx} className="group p-unit-lg flex flex-col justify-between hover:border-on-tertiary-container transition-all">
            <div>
              <div className="flex justify-between items-start mb-unit-md">
                <span className={`px-unit-sm py-unit-xs font-label-md rounded text-[10px] uppercase tracking-wider ${ep.disciplineClass}`}>
                  {ep.discipline}
                </span>
                <span className="text-on-surface-variant font-label-md flex items-center gap-1">
                  <span className="material-symbols-outlined !text-sm">schedule</span> {ep.duration}
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-unit-sm leading-tight group-hover:text-on-tertiary-container transition-colors duration-200">
                {ep.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg leading-relaxed">
                {ep.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-unit-md border-t border-outline-variant/10">
              <a className="text-on-tertiary-container font-label-lg flex items-center gap-1 hover:underline underline-offset-4" href="/about">
                <span className="material-symbols-outlined">description</span> Read Transcript
              </a>
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-secondary transition-colors duration-200">
                <span className="material-symbols-outlined">play_arrow</span>
              </button>
            </div>
          </CardBase>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-white border border-outline-variant/30 p-unit-xl rounded-xl text-center premium-shadow">
        <h2 className="font-headline-md text-headline-md text-primary mb-unit-md">Never Miss a Discourse</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-unit-xl max-w-2xl mx-auto leading-relaxed">
          Subscribe to our institutional newsletter to receive exclusive academic citations and supplementary readings for every episode.
        </p>
        <form className="flex flex-col md:flex-row gap-unit-md justify-center max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input className="flex-grow bg-white border border-outline-variant px-unit-lg py-unit-md rounded-lg focus:border-on-tertiary-container outline-none font-body-md" placeholder="Institutional Email" type="email" />
          <button className="bg-primary text-white px-unit-xl py-unit-md rounded-lg font-label-lg hover:bg-on-tertiary-container transition-colors duration-200">SUBSCRIBE</button>
        </form>
      </section>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
