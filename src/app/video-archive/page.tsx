'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import VideoCard from '@/components/VideoCard';
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
    title: 'Holistic Health Systems: The Core Pillar',
    description: 'Mastering the biological and psychological frameworks for peak performance and long-term vitality.',
    href: '/catalog',
    type: 'course',
    categoryOrDiscipline: 'MASTERCLASS',
    duration: '8 Hours',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDD7qQj-SNPsOz2pepOZRYANRqG2bbX7iJOS3UhwCk9m7sLNGUwQKUUX3C5_uAvoDTBB-b844wCsNcK1bZoL8oSm0Vs5y99MMz74nGk6kKipHn38Y_2V8c9fRO5n9o2Rx8f7a5s0bl6Q8qdswe05v-Hn5gY70pGsr9ffvYAXkwk7IOTUio3vZbsyJxbDz13vgtVKClTCJT9nfqzOkxbMfJHalxs3emrpnIMgLySLwatBI7gXGwNYueEGe-w3MSHJCR_W_ofAerm6w',
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
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Video Lectures"
        pageTitle="The Video Lecture Archive"
        supportingDescription="Evidence-based presentations, guest dialogues, and video guides outlining systems of Wisdom, Health, and Wealth."
      />

      {/* Featured Lecture Section */}
      <section className="mb-unit-2xl mt-unit-lg">
        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Primary Video Player */}
          <div className="lg:w-2/3">
            <div className="relative aspect-video bg-primary-container overflow-hidden shadow-xl border border-outline-variant/30 rounded-xl">
              <img
                className="w-full h-full object-cover opacity-60"
                alt=" महोगनी पैनलों वाला विश्वविद्यालय व्याख्यान कक्ष"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk56jy9HjwLtDwdS7kEiwHZ7CLuhbVjyj0kyRSiaTHgg86FwkyNZrPE57kLokRTcw5uMzIgnn4xvJoBTPVL9PJ9uo7LboVee5ab6WHfW42HjTxj63SRL_g3DID6hwL8hy8esAhCoKerkrdYYF8Onl5t9WMU9BhvimsmOGl7v0gb3jArJTfgd2tAnYi4Bj_-fk3b4y8dFPnxlDxb_ARNfdpcxGfjqa1v_jHZyn-UHQc7tABP422M2Ts26xs0wOg_heinnce_KD-psc"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-accent-gold text-white rounded-full flex items-center justify-center shadow-2xl hover:translate-y-[-1px] transition-transform">
                  <span className="material-symbols-outlined text-4xl text-black" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                <span className="inline-block border border-white text-white px-2.5 py-0.5 text-xs font-label-md uppercase tracking-wider mb-2">
                  Wisdom
                </span>
                <h2 className="font-display-lg text-display-lg text-white mb-2 leading-tight">
                  The Ontology of Generative Wisdom
                </h2>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  An in-depth exploration of archival wisdom and its application in modern health systems. Dr. Ayuba discusses the intersection of historical precedents and future clinical architectures.
                </p>
                <div className="mt-4 flex flex-wrap gap-6 text-on-surface-variant font-label-md text-label-md">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span> 42:15
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">calendar_today</span> Oct 12, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">school</span> Graduate Level
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Commentary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 h-full rounded-xl">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6 italic">
                Director's Commentary
              </h3>
              <div className="flex gap-4 mb-6">
                <img
                  alt="Dr. Ayuba Portrait"
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent-gold"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfvOUt0aD8HKMpEK7MPVTHz53rirv2RPzX-lPzTFl6aExZeoItAhGGlJeiGezA4FBw-BXTULM7QeDEIwxFjH4mV15ai4Ee3gW7biJdW7b6wVdxqRSCQnUuAyY_i0lgaGwKkooezva2phFLatjP5iSsdZjwem77WbG613k-DmAR4Rh549tMCwJpK7zmeOVEcgAE7sSjp4zcLXygtmDJIeubnXX9jgEHRdtTmcnU7Q0nmMFIx9f7Giui82hWAtQrFfZCa9OjhPEEgxs"
                />
                <div>
                  <h4 className="font-label-lg text-label-lg text-primary">Dr. Ayuba</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">Principal Researcher</p>
                </div>
              </div>
              <blockquote className="font-body-md text-body-md text-on-surface-variant italic border-l-4 border-accent-gold pl-4 mb-6">
                "The archive is not merely a collection of data, but a living repository of human intent. In these videos, we bridge the gap between ancient health wisdom and modern wealth generation."
              </blockquote>
              <div className="space-y-4 pt-4 border-t border-outline-variant/10">
                <h4 className="font-label-lg text-label-lg text-primary uppercase tracking-widest text-[10px]">
                  Reference Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a className="text-accent-gold font-label-md text-label-md hover:underline flex items-center gap-2" href="/video-archive">
                      View Whitepaper PDF <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  </li>
                  <li>
                    <a className="text-accent-gold font-label-md text-label-md hover:underline flex items-center gap-2" href="/video-archive">
                      Cite this Lecture <span className="material-symbols-outlined text-xs">format_quote</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Archive Grid */}
      <section className="mb-unit-2xl">
        <div className="flex justify-between items-end mb-unit-lg border-b border-outline-variant pb-4">
          <h2 className="font-headline-md text-headline-md text-primary">Research Library</h2>
          <div className="flex gap-4">
            <button className="font-label-lg text-label-lg text-accent-gold border-b-2 border-accent-gold pb-1">
              All Disciplines
            </button>
            <button className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors pb-1">
              Wisdom
            </button>
            <button className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors pb-1">
              Health
            </button>
            <button className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors pb-1">
              Wealth
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <VideoCard
            title="Metabolic Architectures of Longevity"
            description="A technical review of cellular regeneration protocols and institutional health standards for long-term vitality."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAy91CmDXViEEx5Sqn_TeWDDwKUNfwbPAYugJ6fVzU0Lb4Ng3VyLpu5A8wc_PZrEiAFW40M3dkomKwnq2ILFlLQKwgwi2GYiW7eR9SUHnTfGr9BYgVX2wZNzgj-E6BWWbhK3J3jjrBAJlZpVO1IOj2yq7suLabN2lMppdPg1bG2k0McxUXo9JWprrNqZWLugj6nuaNuubf1iAQovbA2kViVLcRav7NZcxyfVf9mUJD5nkV2X1tLKWRXlYnh6WtpmG_n9gtuz0jmaGA"
            discipline="Health"
            metaLeft="Vol 14, Issue 2"
            duration="18 mins"
            href="#"
          />
          <VideoCard
            title="Transgenerational Capital Strategies"
            description="Understanding the foundational principles of wealth preservation through institutional frameworks and strategic assets."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDuMTT9OGinnh_qwJG6Kl4fBTS-RKvAQg9aI0k49XXzvFKsrROWQb_8cdUQoZPuieRj9l0CT1agt4GPCphwPo5Wbe81VOIqcl959BSxotKreVYSBLoaIQejy9hR_LgANVFur_LRhrUXoc3LKoxOG7n0Ji1xsrgDEE4aXFH7O6jlEOuvd83EmPSZlCUJ_-Bq_q4PdFwJveV-VtvxxhANbkzEN0xla3ZQWi_FLnIGQPL2346ONbMX4KE4EnWlJ_VeMOZstTIPXPtzy_0"
            discipline="Wealth"
            metaLeft="Economic Series 01"
            duration="32 mins"
            href="#"
          />
          <VideoCard
            title="The Archeology of Stoic Logic"
            description="Applying classical philosophical frameworks to modern institutional management and decision-making processes."
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCos8fpInrNvHNhRKgtySmwnjeFILB43-9WS531zb498xpyalJfGEwWdR5rEJ8o6O6fHJzDlLhMlyM61slYN2Bq-ygHJrTtN8yTFjuWpSk8hPMbZjIragjjMVX7l6dx1O5_xyjhJ0dXJDYiXZqJ-ow35gD7rbPZyvOW3KJ0wAyS3rBnwuhIgQjz4W8bORAGl4IffWMVSrZJvGV8B0DAnF8Ema3YdEQHmol1OuAMWHEZowZXFKDi7AL9-typg3vbTIY2V_BeVgcvVaw"
            discipline="Wisdom"
            metaLeft="Archive 88-B"
            duration="25 mins"
            href="#"
          />
        </div>

        <div className="mt-12 text-center">
          <button className="px-10 py-3 border-2 border-accent-gold text-accent-gold font-label-lg text-label-lg hover:bg-accent-gold hover:text-white transition-all">
            Load Full Video Archive
          </button>
        </div>
      </section>

      {/* Newsletter Enrollment */}
      <section className="bg-primary text-on-primary p-12 md:p-unit-2xl text-center relative overflow-hidden rounded-xl">
        <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-accent-gold/20 translate-x-32 -translate-y-32 rotate-45"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display-lg text-display-lg text-white mb-6">Archive Updates</h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-8">Receive academic alerts for new video releases, whitepapers, and exclusive member-only research symposiums.</p>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-6 py-4 focus:outline-none focus:border-accent-gold rounded-lg" placeholder="Institutional Email Address" type="email" />
            <button className="bg-accent-gold text-black font-bold px-10 py-4 font-label-lg text-label-lg uppercase tracking-widest hover:brightness-110 transition-all rounded-lg">Enroll</button>
          </form>
          <p className="mt-4 font-label-md text-label-md text-primary-fixed-dim/60">Strict confidentiality. No third-party data sharing.</p>
        </div>
      </section>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
