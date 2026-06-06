'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import ContinueExploring, { ContinueExploringItem } from '@/components/ContinueExploring';

const relatedItems: ContinueExploringItem[] = [
  {
    title: 'Speaking & Consulting',
    description: 'Explore the comprehensive consulting and advisory portal for institutional healthcare strategy.',
    href: '/speaking-consulting',
    type: 'course',
    categoryOrDiscipline: 'Advisory',
    duration: 'Keynote & Advisory',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmT7Zk5gjXba1wIAnpi561kzCbLKH7ccp8Dh1RMTKBjIPeV0PJDQti1VhuU3PxhoX12kGkbxzI8s3yScI7oJbsN1FXxn3pKpdlKEAy2Je2Y5GWfSFr4Gx9gbXK6bobP_DJUGShrXWqnmxY4u4UVRy7zRmtJsrzbp93NsNgOX2f-Ggfw82TJnc1HXfIrNBPzgDpy5jow_kUOUlxlaWj8--mdyRb-Vs6OghtIAdStjm2Ra6bKJfE-P4kPcP85h_nKTmzLrokk1cbRRk',
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

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Speaking Portfolio"
        pageTitle="Institutional Keynotes &amp; Advisory"
        supportingDescription="High-stakes advisory and keynote perspectives for institutions seeking stability, growth, and intellectual leadership."
      />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-unit-2xl py-unit-2xl mt-unit-lg mb-unit-2xl">
        <div className="w-full md:w-1/2 space-y-unit-lg">
          <div className="inline-flex items-center gap-unit-sm text-on-tertiary-container bg-tertiary-fixed px-3 py-1 rounded">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="font-label-md text-label-md uppercase tracking-widest font-bold">Global Institutional Lead</span>
          </div>
          <h2 className="font-display-xl text-display-xl text-primary leading-tight">
            Architect of <br />
            <span className="text-secondary italic">Institutional</span> Excellence
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Dr. Ayuba provides high-stakes advisory and keynote perspectives for institutions seeking stability, growth, and intellectual leadership in a complex global landscape.
          </p>
          <div className="flex gap-unit-md pt-unit-md">
            <a className="bg-primary text-on-primary px-unit-xl py-unit-md font-label-lg text-label-lg flex items-center gap-2 hover:opacity-90 transition-all rounded-lg font-bold" href="#inquiry">
              Inquire for Partnerships
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <button className="border border-outline text-primary px-unit-xl py-unit-md font-label-lg text-label-lg hover:bg-surface-container transition-all rounded-lg font-bold">
              Download Portfolio
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative group mt-6 md:mt-0">
          <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 rounded-xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="aspect-[0.78] overflow-hidden rounded-xl bg-surface-container border border-outline-variant/30 shadow-md">
            <img
              alt="Portrait of Dr. Ayuba"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-150"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjr8D6N8FCOrUy-eeDS3UInWS8BkldGextNgmOg6nO8LghbDcMDe7GwAPM8HFWgNMIV8lIDTYFEW_B0ZD_BOiICqhXjyua-Y_Y9-KqtD35ND_WmDmrp7fn0Q13H2mnr5yAr88AH_L4_XYptY_xp0jAi8BjU7R2YRihGyPjwjtfJSjLy5hMhCyF3di1nADO7Fj1CLvyUdQ40rrlAwJbMBtgFn5b_IatxepNkkhiw8jb6bH5DiCxYQO8d0lFvTErg-joXG39PG1nz9A"
            />
          </div>
        </div>
      </section>

      {/* Bento Grid: Service Pillars */}
      <section className="py-unit-2xl mb-unit-2xl bg-white border border-outline-variant/30 rounded-xl premium-shadow p-unit-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Keynote Engagements */}
          <div className="md:col-span-8 bg-surface-container-low border border-outline-variant/30 p-unit-xl flex flex-col justify-between rounded-xl">
            <div>
              <div className="flex justify-between items-start mb-unit-lg">
                <span className="material-symbols-outlined text-primary text-4xl">record_voice_over</span>
                <span className="text-outline text-label-md font-bold">01 / SERVICE</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-unit-md">Keynote Engagements</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Transformative addresses for academic convocations, international summits, and corporate leadership retreats. Dr. Ayuba distills decades of institutional wisdom into actionable intellectual frameworks.
              </p>
            </div>
            <ul className="mt-unit-xl space-y-unit-sm">
              <li className="flex items-center gap-unit-sm font-label-lg text-label-lg text-primary font-bold">
                <span className="text-accent-gold">◆</span> The Future of Institutional Governance
              </li>
              <li className="flex items-center gap-unit-sm font-label-lg text-label-lg text-primary font-bold">
                <span className="text-accent-gold">◆</span> Ethics in Modern Academic Leadership
              </li>
              <li className="flex items-center gap-unit-sm font-label-lg text-label-lg text-primary font-bold">
                <span className="text-accent-gold">◆</span> Resilience Architecture for Global Systems
              </li>
            </ul>
          </div>

          {/* Secondary Small Cell */}
          <div className="md:col-span-4 bg-primary p-unit-xl text-on-primary flex flex-col justify-center text-center rounded-xl shadow-sm">
            <h4 className="font-headline-sm text-headline-sm text-accent-gold mb-unit-md font-bold">250+</h4>
            <p className="font-label-lg text-label-lg text-white/80 uppercase tracking-wider font-bold">Global Keynotes Delivered</p>
            <div className="my-unit-lg border-t border-white/20 w-16 mx-auto"></div>
            <h4 className="font-headline-sm text-headline-sm text-accent-gold mb-unit-md font-bold">14</h4>
            <p className="font-label-lg text-label-lg text-white/80 uppercase tracking-wider font-bold">Institutional Fellowships</p>
          </div>

          {/* Board Advisory */}
          <div className="md:col-span-6 border border-outline-variant/30 bg-surface-container-low p-unit-xl rounded-xl hover:border-secondary transition-colors duration-150 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-unit-lg">groups</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-unit-md">Board Advisory Roles</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Strategic oversight for non-profit foundations, academic boards, and institutional governing bodies. Specialized in conflict resolution and long-term strategic roadmapping.
              </p>
            </div>
            <a className="text-primary font-label-lg text-label-lg underline hover:text-secondary mt-unit-xl inline-block font-bold" href="#">View Advisory Credentials</a>
          </div>

          {/* Institutional Audits */}
          <div className="md:col-span-6 border border-outline-variant/30 bg-surface-container-low p-unit-xl relative overflow-hidden rounded-xl hover:border-secondary transition-colors duration-150 flex flex-col justify-between">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-unit-lg">fact_check</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-unit-md">Institutional Audits</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Deep-dive evaluations of organizational health, cultural alignment, and operational efficiency within academic and governmental sectors.
              </p>
            </div>
            <div className="mt-unit-xl">
              <a className="text-primary font-label-lg text-label-lg underline hover:text-secondary inline-block font-bold" href="#">Request Audit Framework</a>
            </div>
            {/* Background aesthetic element */}
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry System */}
      <section className="py-unit-2xl bg-white border border-outline-variant/30 rounded-xl premium-shadow mb-unit-2xl p-unit-lg" id="inquiry">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-2xl items-start">
          <div className="space-y-unit-lg">
            <h2 className="font-headline-lg text-headline-lg text-primary">Inquiry for High-Level Partnership</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Dr. Ayuba accepts a limited number of advisory and speaking engagements each year to ensure maximum depth of involvement and impact.
            </p>
            <div className="space-y-unit-md pt-unit-md">
              <div className="flex items-start gap-unit-md">
                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                <div>
                  <p className="font-label-lg text-label-lg text-primary font-bold">Primary Office</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">The Institute of Global Governance<br />Suite 402, Academic Row</p>
                </div>
              </div>
              <div className="flex items-start gap-unit-md">
                <span className="material-symbols-outlined text-primary mt-1">mail</span>
                <div>
                  <p className="font-label-lg text-label-lg text-primary font-bold">Direct Liaison</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">advisory@drayuba.edu</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-unit-xl border border-outline-variant/30 rounded-xl shadow-sm">
            <form className="space-y-unit-md" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-unit-md">
                <div className="flex flex-col gap-unit-xs">
                  <label className="font-label-lg text-label-lg text-primary font-bold">Principal Name</label>
                  <input className="w-full border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary px-unit-md py-unit-sm bg-white rounded-lg outline-none" type="text" placeholder="Your Name" />
                </div>
                <div className="flex flex-col gap-unit-xs">
                  <label className="font-label-lg text-label-lg text-primary font-bold">Institutional Email</label>
                  <input className="w-full border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary px-unit-md py-unit-sm bg-white rounded-lg outline-none" type="email" placeholder="email@institution.edu" />
                </div>
              </div>
              <div className="flex flex-col gap-unit-xs">
                <label className="font-label-lg text-label-lg text-primary font-bold">Type of Engagement</label>
                <select className="w-full border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary px-unit-md py-unit-sm bg-white rounded-lg outline-none">
                  <option>Keynote Address</option>
                  <option>Board Advisory Position</option>
                  <option>Institutional Audit</option>
                  <option>Executive Mentorship</option>
                </select>
              </div>
              <div className="flex flex-col gap-unit-xs">
                <label className="font-label-lg text-label-lg text-primary font-bold">Brief Overview of Scope</label>
                <textarea className="w-full border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary px-unit-md py-unit-sm bg-white rounded-lg outline-none resize-none" rows={4} placeholder="Describe the scope of engagement..."></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary py-unit-md font-label-lg text-label-lg hover:opacity-90 transition-all uppercase tracking-widest font-bold rounded-lg" type="submit">
                Submit Formal Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
