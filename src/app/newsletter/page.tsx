'use client';

import React, { useRef, useState } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import ContinueExploring, { ContinueExploringItem } from '@/components/ContinueExploring';

const relatedItems: ContinueExploringItem[] = [
  {
    title: 'Editorial Archives',
    description: 'Access the permanent archive of our weekly briefs and research newsletters.',
    href: '/newsletter-archive',
    type: 'article',
    categoryOrDiscipline: 'Archives',
    duration: 'Multi-year archive',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuvQJXtkSv9jCyDkcvaOrtNjxomgxjNxX06X-lgs7kT3iRYHpTansbDLnzDeSGtJkVhugBxX29ooZXKvLCtGFK9AP9S2zyQ6CXGuTFDaXeFnlZpAufuj7LxLW724ezIZFO-N13goqAjN7jZ70Y5MMFuuOzFqz0_bWfozAY_BoQ0UqAfyb801Kd9C0zsQo_ybrVkQHKPVU76VOKUVh1qbKki_0NCqUKkW-fY14HrV_7js0XdKDHGZw-bczeyYJZ2d4roxI1ivY0kFw',
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
  const [pediatricChecked, setPediatricChecked] = useState(true);
  const [newsChecked, setNewsChecked] = useState(true);
  const [outreachChecked, setOutreachChecked] = useState(false);
  const [ethicsChecked, setEthicsChecked] = useState(false);
  const [frequency, setFrequency] = useState<'weekly' | 'monthly'>('weekly');

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Primary Publication"
        pageTitle="The Weekly Dispatch"
        supportingDescription="An intellectual synthesis of pediatric health, community leadership, and global institutional insights, delivered every Tuesday morning."
      />

      {/* Hero: Sign Up Section */}
      <section className="py-unit-2xl bg-surface-container-low rounded-xl border border-outline-variant/30 mt-unit-lg mb-unit-2xl p-unit-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="space-y-unit-lg">
            <h2 className="font-headline-lg text-headline-lg text-primary">Scholarly Dispatch Subscription</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg leading-relaxed">
              Reserved for faculty members, clinical partners, and institutional sponsors. Receive peer-reviewed insights and updates on healthcare delivery systems.
            </p>
            <form className="mt-unit-xl space-y-unit-md max-w-md" onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully.'); }}>
              <div className="flex flex-col gap-unit-xs">
                <label className="font-label-lg text-label-lg text-primary block font-bold" htmlFor="email">Academic Institutional Email</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    className="w-full bg-white border border-outline-variant px-unit-md py-3 font-body-md focus:border-primary focus:ring-1 focus:ring-primary rounded-lg outline-none"
                    id="email"
                    placeholder="dr.smith@university.edu"
                    required
                    type="email"
                  />
                  <button className="bg-primary text-on-primary px-unit-lg py-3 font-label-lg text-label-lg hover:opacity-90 transition-all rounded-lg whitespace-nowrap font-bold" type="submit">
                    Subscribe Now
                  </button>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                Verified domain validation is required for specific sections.
              </p>
            </form>
          </div>
          <div className="relative mt-6 lg:mt-0">
            <div className="absolute -top-8 -left-8 w-64 h-64 border border-outline-variant/30 rounded-xl -z-10"></div>
            <div className="bg-white p-unit-lg border border-outline-variant rounded-xl shadow-sm">
              <img
                alt="Latest Edition Preview"
                className="w-full h-[350px] object-cover grayscale hover:grayscale-0 transition-all duration-150 rounded"
                data-alt="A sophisticated high-angle view of a thick, premium-paper print newsletter lying on an dark oak academic desk. The newsletter features elegant serif typography and minimal diagrams. Beside the publication is a classic fountain pen and a pair of reading glasses, illuminated by soft window light in a library setting with muted blue and gold tones."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVqtbylBKqTq3doTt2mqAL2IVZ_NU4U6G3bRirWYzRZ4BHiic-NH1yYHsVaD0WlNBYP6lx4q_yrpdXRrRJf7pn-WdU6kvmTdJyb5zIIFV7yO57kp8jhKVsk6Z846jdIsqrDsm0gTUUFhizU4EuIyq3d7yALVCvUlSl-a2iv6TMQa2FNpOCgvuhfqZlxP4UxAYR4TzuA9cl3UFgV52StcgfGN6iBJOWaUJHPn9gq3FJOCdK7z1sjp0s-IlA7TAuFRR6q0jl3srtZgY"
              />
              <div className="mt-unit-md flex justify-between items-end">
                <div>
                  <p className="font-label-md text-label-md text-secondary font-bold">VOLUME 42, ISSUE 08</p>
                  <p className="font-headline-sm text-headline-sm text-primary">On Scholastic Resilience</p>
                </div>
                <span className="font-label-lg text-label-lg border-b border-primary text-primary pb-1 cursor-pointer font-bold hover:text-secondary hover:border-secondary transition-colors">Read Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Archive: Editorial Grid */}
      <section className="py-unit-2xl bg-white border border-outline-variant/30 rounded-xl premium-shadow mb-unit-2xl p-unit-lg">
        <div className="flex flex-col md:flex-row justify-between items-end mb-unit-xl border-b border-outline-variant/10 pb-unit-md gap-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Recent Releases</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Permanent record of community care updates.</p>
          </div>
          <div className="flex gap-unit-md">
            <button className="flex items-center gap-unit-xs font-label-lg text-label-lg text-primary hover:text-secondary transition-colors font-bold">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filter by Year
            </button>
            <button className="flex items-center gap-unit-xs font-label-lg text-label-lg text-primary hover:text-secondary transition-colors font-bold">
              <span className="material-symbols-outlined text-[18px]">search</span>
              Search Editions
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Archive Card 1 */}
          <article className="bg-surface-container-low border border-outline-variant/30 p-unit-lg transition-all rounded-xl hover:border-secondary flex flex-col justify-between h-full group">
            <div>
              <div className="mb-unit-md overflow-hidden h-48 rounded-lg border border-outline-variant/10">
                <img
                  alt="Edition Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-150 grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9w3pmulhN2k7sZkHCSu3HCcvb0oHLYM2poMZMxxIwJHvuV8L9zxO5S_EByJotBtsB9EzR95ea1A6Xak1ln8LgkgglCumUgBG11r3ZDMTI6_8kuPpLxR2WUWX-GkpEBZB8qLnx8JU5mCpLVGHCgsZF7Dl9VHxAHWoxn-WmwP-Q1FrpUoq9IVzMZGIQXqZyueWGxJmUqEv4Exr9DJ1qGR7cY6RRIR4OI_Hng_kDXypEJJVUhXz2x9jRZg5G2Pk8QZETC1H9_TH5s-Y"
                />
              </div>
              <p className="font-label-md text-label-md text-secondary mb-unit-xs font-bold">MARCH 12, 2024</p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-md leading-tight group-hover:text-secondary transition-colors">The Evolution of Community Care Frameworks</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg line-clamp-3">
                Analyzing the shift from reactive medicine to proactive communal health strategies within urban institutional corridors...
              </p>
            </div>
            <div className="flex items-center justify-between pt-unit-md border-t border-outline-variant/30 mt-unit-md">
              <span className="font-label-lg text-label-lg text-primary font-bold">Read Edition</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </article>

          {/* Archive Card 2 */}
          <article className="bg-surface-container-low border border-outline-variant/30 p-unit-lg transition-all rounded-xl hover:border-secondary flex flex-col justify-between h-full group">
            <div>
              <div className="mb-unit-md overflow-hidden h-48 rounded-lg border border-outline-variant/10">
                <img
                  alt="Edition Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-150 grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLA40XEqDLFTSJsOc0cpwxswEI4Gngyr9Vay4JrjwI1B4PVx6FBIsjHFRhMgxSYLUIbSo2ANxLSeu1Axbosx3zmKdGyGQkdJVUiI0zwG-WdeGGPJRG4Jx5Jp7kAukZhzffbfZi09IXwjHZ25YQHn-COfN7TZo12XO-z1i3Goi0vjWcAJrJ_Xx5rySOZEzY7hwngAgbt33g2HlYRLPLdDzJU8qPlX9iIqbBGUOEcQnY2Lp9uhOuQVZbR8j4G3rNv_SuKzB0HVzuc7w"
                />
              </div>
              <p className="font-label-md text-label-md text-secondary mb-unit-xs font-bold">FEBRUARY 28, 2024</p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-md leading-tight group-hover:text-secondary transition-colors">Global Pediatric Trends in Post-Digital Contexts</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg line-clamp-3">
                A comprehensive review of how digital consumption is altering neurological development patterns in primary school students...
              </p>
            </div>
            <div className="flex items-center justify-between pt-unit-md border-t border-outline-variant/30 mt-unit-md">
              <span className="font-label-lg text-label-lg text-primary font-bold">Read Edition</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </article>

          {/* Archive Card 3 */}
          <article className="bg-surface-container-low border border-outline-variant/30 p-unit-lg transition-all rounded-xl hover:border-secondary flex flex-col justify-between h-full group">
            <div>
              <div className="mb-unit-md overflow-hidden h-48 rounded-lg border border-outline-variant/10">
                <img
                  alt="Edition Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-150 grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcRdnocMAnJ_GQF8BPI1EkiR-vsAzMnE-_QZsH33f3_P2b5ysFTtWUBfVxICKsiqzXzgiOrgJgfnRhD6PwWAkP2yZWEgOe1jfks2GJcNzkHdK9cjnbKEnb11tiguUTenGQun6zW_8qYNYWFl6aleBC3JoIrpIjO5kc2dtfmMETHfg4aWdREcKVLBIyewybtfgq6wQ0maUhf7EQBcopVZnOV6uvqEs07cge-hMF4JlOvLIvoBDw16d8vQNG7Q821UgFytE_2iSUyrE"
                />
              </div>
              <p className="font-label-md text-label-md text-secondary mb-unit-xs font-bold">FEBRUARY 14, 2024</p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-md leading-tight group-hover:text-secondary transition-colors">Navigating Institutional Bureaucracy for Faculty</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg line-clamp-3">
                Practical insights for newly appointed faculty navigating the complexities of institutional research funding and ethics...
              </p>
            </div>
            <div className="flex items-center justify-between pt-unit-md border-t border-outline-variant/30 mt-unit-md">
              <span className="font-label-lg text-label-lg text-primary font-bold">Read Edition</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </article>
        </div>
        <div className="mt-unit-2xl flex justify-center">
          <a href="/newsletter-archive" className="border-2 border-primary px-unit-xl py-unit-md font-label-lg text-label-lg text-primary hover:bg-primary hover:text-white transition-all rounded-lg font-bold">
            View Full Archive (2018—2024)
          </a>
        </div>
      </section>

      {/* Topic Preference Center */}
      <section className="py-unit-2xl bg-white border border-outline-variant/30 rounded-xl premium-shadow mb-unit-2xl p-unit-lg">
        <div className="border border-primary rounded-xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-primary p-unit-xl flex flex-col justify-between text-white">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-white mb-unit-md">Preference Center</h2>
                <p className="font-body-md text-body-md text-primary-fixed-dim max-w-sm leading-relaxed">
                  Tailor your institutional updates. Select the disciplines and research areas most relevant to your faculty position.
                </p>
              </div>
              <div className="mt-unit-xl pt-unit-xl border-t border-white/20">
                <p className="font-label-md text-label-md text-white mb-unit-sm uppercase tracking-widest font-bold">Active Status</p>
                <div className="flex items-center gap-unit-sm">
                  <span className="w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
                  <span className="font-body-sm text-body-sm text-primary-fixed-dim">Authenticated Institutional Access</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 p-unit-xl bg-surface-container-low">
              <div className="space-y-unit-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-lg">
                  <label className="flex items-start gap-unit-md cursor-pointer group">
                    <input
                      checked={pediatricChecked}
                      onChange={(e) => setPediatricChecked(e.target.checked)}
                      className="w-6 h-6 border-2 border-primary text-secondary focus:ring-0 rounded mt-1"
                      type="checkbox"
                    />
                    <div>
                      <p className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors font-bold">Pediatric Innovation</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Latest research in childhood development.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-unit-md cursor-pointer group">
                    <input
                      checked={newsChecked}
                      onChange={(e) => setNewsChecked(e.target.checked)}
                      className="w-6 h-6 border-2 border-primary text-secondary focus:ring-0 rounded mt-1"
                      type="checkbox"
                    />
                    <div>
                      <p className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors font-bold">Institutional News</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Campus-wide announcements and faculty shifts.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-unit-md cursor-pointer group">
                    <input
                      checked={outreachChecked}
                      onChange={(e) => setOutreachChecked(e.target.checked)}
                      className="w-6 h-6 border-2 border-primary text-secondary focus:ring-0 rounded mt-1"
                      type="checkbox"
                    />
                    <div>
                      <p className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors font-bold">Community Outreach</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Updates on regional health initiatives.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-unit-md cursor-pointer group">
                    <input
                      checked={ethicsChecked}
                      onChange={(e) => setEthicsChecked(e.target.checked)}
                      className="w-6 h-6 border-2 border-primary text-secondary focus:ring-0 rounded mt-1"
                      type="checkbox"
                    />
                    <div>
                      <p className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors font-bold">Ethics &amp; Law</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Policy changes and medical legal updates.</p>
                    </div>
                  </label>
                </div>
                <div className="h-px bg-outline-variant/30 my-unit-xl"></div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-unit-lg">
                  <div>
                    <p className="font-label-lg text-label-lg text-primary font-bold">Frequency</p>
                    <div className="flex gap-unit-md mt-unit-sm">
                      <button
                        onClick={() => setFrequency('weekly')}
                        className={`px-unit-md py-unit-xs border border-primary font-label-md text-label-md rounded ${frequency === 'weekly' ? 'bg-primary text-white' : 'bg-transparent text-primary hover:bg-surface-container'}`}
                      >
                        Weekly
                      </button>
                      <button
                        onClick={() => setFrequency('monthly')}
                        className={`px-unit-md py-unit-xs border border-primary font-label-md text-label-md rounded ${frequency === 'monthly' ? 'bg-primary text-white' : 'bg-transparent text-primary hover:bg-surface-container'}`}
                      >
                        Monthly Digest
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => alert('Preferences updated.')}
                    className="bg-secondary text-on-secondary px-unit-xl py-unit-md font-label-lg text-label-lg shadow-sm hover:brightness-110 active:translate-y-0 transition-all font-bold rounded-lg"
                  >
                    Update Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
