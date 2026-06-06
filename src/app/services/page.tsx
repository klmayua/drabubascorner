'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import ContinueExploring, { ContinueExploringItem } from '@/components/ContinueExploring';

const relatedItems: ContinueExploringItem[] = [
  {
    title: 'Speaking & Consulting',
    description: 'Dr. Ayuba provides high-stakes advisory and keynote perspectives for global institutions.',
    href: '/speaking-consulting',
    type: 'course',
    categoryOrDiscipline: 'Advisory',
    duration: 'Keynote & Consulting',
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
        sectionLabel="Consultancy &amp; Advisory"
        pageTitle="Services Portfolio"
        supportingDescription="Rigorous frameworks, custom curriculum design, keynotes, and strategic audits for elite institutions."
      />

      {/* Services Grid (Bento Style) */}
      <section className="py-unit-2xl border-t border-primary/5 mt-unit-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Keynote Speaking (Large Card) */}
          <article className="col-span-12 md:col-span-8 bg-white border border-primary/10 p-unit-xl hover:border-secondary transition-colors duration-150 flex flex-col justify-between group rounded-xl shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-unit-xl">
                <span className="material-symbols-outlined text-primary text-[48px]">record_voice_over</span>
                <span className="font-label-md text-label-md text-outline uppercase tracking-widest">01 / GLOBAL ENGAGEMENT</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-unit-md">Keynote Speaking</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-unit-lg max-w-xl">
                Delivering transformative addresses at the intersection of leadership, innovation, and social equity. Each keynote is meticulously researched to align with the specific challenges and aspirations of the host institution.
              </p>
              <div className="flex flex-wrap gap-unit-md mb-unit-xl">
                <span className="px-unit-md py-unit-xs bg-surface-container border border-primary/5 font-label-md text-label-md rounded">Global Policy</span>
                <span className="px-unit-md py-unit-xs bg-surface-container border border-primary/5 font-label-md text-label-md rounded">Educational Leadership</span>
                <span className="px-unit-md py-unit-xs bg-surface-container border border-primary/5 font-label-md text-label-md rounded">Cultural Dynamics</span>
              </div>
            </div>
            <a className="inline-flex items-center gap-unit-sm text-[#c79a2e] font-label-lg text-label-lg uppercase tracking-widest hover:gap-unit-md transition-all font-bold" href="#">
              Inquire for Availability <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </a>
          </article>

          {/* Institutional Audit */}
          <article className="col-span-12 md:col-span-4 bg-primary text-white p-unit-xl hover:bg-opacity-95 transition-colors duration-150 relative overflow-hidden group rounded-xl shadow-sm">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-[#c79a2e] text-[40px] mb-unit-xl">fact_check</span>
              <h3 className="font-headline-md text-headline-md text-white mb-unit-md">Institutional Audit</h3>
              <p className="font-body-sm text-body-sm text-white/70 mb-unit-xl">
                Rigorous evaluative frameworks designed to optimize institutional performance and compliance within international standards.
              </p>
              <ul className="space-y-unit-sm mb-unit-xl">
                <li className="flex items-center gap-unit-sm text-body-sm text-white">
                  <span className="w-1.5 h-1.5 bg-[#c79a2e] rotate-45"></span> Process Optimization
                </li>
                <li className="flex items-center gap-unit-sm text-body-sm text-white">
                  <span className="w-1.5 h-1.5 bg-[#c79a2e] rotate-45"></span> Compliance Mapping
                </li>
                <li className="flex items-center gap-unit-sm text-body-sm text-white">
                  <span className="w-1.5 h-1.5 bg-[#c79a2e] rotate-45"></span> Cultural Assessment
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 right-0 p-unit-lg opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[120px] text-white">account_balance</span>
            </div>
          </article>

          {/* Strategic Advisory */}
          <article className="col-span-12 md:col-span-4 bg-white border border-primary/10 p-unit-xl hover:border-secondary transition-colors duration-150 flex flex-col justify-between group rounded-xl shadow-sm">
            <div>
              <span className="material-symbols-outlined text-primary text-[40px] mb-unit-xl">strategy</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-unit-md">Strategic Advisory</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg leading-relaxed">
                Confidential consultation for C-suite executives and board members focused on long-term institutional sustainability and heritage preservation in a volatile digital landscape.
              </p>
            </div>
            <div>
              <div className="h-px w-full bg-primary/10 mb-unit-lg"></div>
              <span className="font-label-lg text-label-lg text-primary uppercase tracking-widest font-bold">Heritage Consulting</span>
            </div>
          </article>

          {/* Curriculum Development */}
          <article className="col-span-12 md:col-span-8 bg-surface-container-low border border-primary/10 p-unit-xl hover:border-secondary transition-colors duration-150 flex flex-col sm:flex-row gap-gutter group rounded-xl shadow-sm">
            <div className="sm:w-1/3 overflow-hidden rounded-lg border border-outline-variant/30">
              <img
                alt="Academic Resources"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-150"
                data-alt="An artistic, macro photograph of high-quality vellum paper and a classic fountain pen resting on a dark walnut desk. The lighting is focused and warm, highlighting the texture of the materials and creating a scholarly, archival aesthetic. The color palette is composed of rich browns, deep navys, and hints of gold, reflecting elite academic standards and intellectual depth."
                src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
              />
            </div>
            <div className="sm:w-2/3 flex flex-col justify-between mt-4 sm:mt-0">
              <div>
                <div className="flex justify-between items-start mb-unit-lg">
                  <h3 className="font-headline-md text-headline-md text-primary">Curriculum Development</h3>
                  <span className="font-label-md text-label-md text-[#c79a2e] uppercase tracking-widest font-bold">Pedagogical Design</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-unit-lg leading-relaxed">
                  Engineering world-class educational pathways that bridge traditional scholarship with modern technological integration. We specialize in bespoke module creation for elite vocational and higher-ed institutions.
                </p>
              </div>
              <div className="flex items-center gap-unit-xl">
                <div className="text-center">
                  <p className="font-headline-sm text-headline-sm text-primary font-bold">150+</p>
                  <p className="font-label-md text-label-md text-outline">Modules Built</p>
                </div>
                <div className="text-center">
                  <p className="font-headline-sm text-headline-sm text-primary font-bold">24</p>
                  <p className="font-label-md text-label-md text-outline">Partner Org</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-unit-2xl mb-unit-2xl">
        <div className="bg-gradient-to-r from-primary to-primary-container rounded-xl p-unit-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-gutter shadow-lg">
          <div className="relative z-10 max-w-2xl text-white">
            <h2 className="font-display-lg text-display-lg text-white mb-unit-lg">Elevate Your Institutional Standard</h2>
            <p className="font-body-lg text-body-lg text-white/80 mb-unit-xl">
              Book a preliminary strategy session to discuss how Dr. Ayuba's Corner can facilitate your organization's transition to global excellence.
            </p>
            <div className="flex flex-wrap items-center gap-unit-lg">
              <button className="bg-[#c79a2e] text-primary px-unit-xl py-unit-md font-label-lg text-label-lg uppercase tracking-widest hover:bg-[#d4a945] transition-colors shadow-lg font-bold rounded">
                Request Prospectus
              </button>
              <button className="border border-white/30 text-white px-unit-xl py-unit-md font-label-lg text-label-lg uppercase tracking-widest hover:bg-white/10 transition-all rounded">
                Direct Contact
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative z-10 w-1/4">
            <img
              alt="Seal of Excellence"
              className="w-full"
              data-alt="A macro, elegant 3D render of a gold institutional seal or medallion, deeply embossed with scholarly symbols like an open book and a laurel wreath. The surface is polished but textured with age, catching highlights from a sophisticated soft-box lighting setup. The background is a velvety deep navy blue, creating a high-contrast, premium, and archival aesthetic."
              src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
            />
          </div>
          {/* Decorative Background Element */}
          <div className="absolute right-[-10%] top-[-20%] w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
