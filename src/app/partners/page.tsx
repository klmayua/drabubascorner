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

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Strategic Intelligence Unit"
        pageTitle="Farawa Strategic Partnership"
        supportingDescription="Forging elite institutional collaborations at the intersection of geopolitical strategy, academic excellence, and corporate expansion."
      />

      {/* Hero Section & Top Credentials */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center mt-unit-lg mb-unit-2xl">
        <div className="lg:col-span-7 space-y-unit-md">
          <h2 className="font-headline-lg text-headline-lg text-primary">Elite Alliance Framework</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            We collaborate with premier academic institutions, governmental health ministries, and global corporations to establish high-standards operational wellness protocols and advisory structures.
          </p>
          <div className="flex gap-unit-md pt-unit-md">
            <button className="bg-primary text-on-primary px-unit-lg py-unit-md font-label-lg text-label-lg hover:opacity-90 transition-opacity rounded-lg">
              Access Dossier
            </button>
            <button className="border border-outline px-unit-lg py-unit-md font-label-lg text-label-lg hover:bg-surface-container transition-colors rounded-lg text-primary">
              Credential Audit
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="border border-outline-variant p-unit-md bg-surface-container-low rounded-xl shadow-sm rotate-2 hover:rotate-0 transition-transform duration-150">
            <div className="w-full aspect-[4/3] bg-primary text-on-primary p-unit-xl flex flex-col justify-center items-center rounded-lg text-center">
              <span className="material-symbols-outlined text-[64px] mb-unit-md text-accent-gold">verified_user</span>
              <h3 className="font-headline-sm text-headline-sm text-white mb-unit-sm">Credentialed &amp; Verified</h3>
              <p className="font-body-sm text-body-sm text-primary-fixed-dim">Institutional status: Active Level IV Strategic Ally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Synergy Framework */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter bg-surface-container-low p-unit-xl rounded-xl border border-outline-variant/30 mb-unit-2xl">
        <div className="lg:col-span-5 relative group">
          <div className="aspect-[0.78] overflow-hidden rounded-lg bg-surface-container border border-outline-variant/30">
            <img
              alt="Dr Ayuba Portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-150"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyefUroKL1dXKjn0fjgLkwszKKD57HUfkP7-yQcPa8eGe0QiZAbERRu-oWgTPppMjLoKVN1b3JjPln7qCmbGkFidtoE6khYK1Uv-WV_qUWk0d7PLEaeQ5GA02LQ6SJAV8tud7d4c-CeEwhkUoQlqiUyGQaUqXUCYkl3AGFJz7tik1_gZtKMUjOZtPol9oIxCVF862AFH4HMLL2knjiX4pdLUleTSTTNgUsryzMqtZA4UDmjyyxIunId_0riAiq-779gVYrsohYCfQ"
            />
          </div>
          <div className="absolute bottom-4 right-4 bg-primary text-on-primary p-unit-md shadow-lg rounded-lg">
            <p className="font-label-lg text-label-lg text-white">Dr. Ayuba</p>
            <p className="font-body-sm text-body-sm text-primary-fixed-dim">Chief Strategic Officer</p>
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center space-y-unit-lg pl-0 lg:pl-unit-xl mt-8 lg:mt-0">
          <h2 className="font-headline-lg text-headline-lg text-primary">The Synergy Framework</h2>
          <div className="space-y-unit-md">
            <div className="flex items-start gap-unit-md">
              <span className="text-accent-gold mt-1">◆</span>
              <div>
                <h4 className="font-label-lg text-label-lg text-primary font-bold">Cross-Institutional Integrity</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Synchronizing academic research with practical market implementation through a unified governance protocol.</p>
              </div>
            </div>
            <div className="flex items-start gap-unit-md">
              <span className="text-accent-gold mt-1">◆</span>
              <div>
                <h4 className="font-label-lg text-label-lg text-primary font-bold">Geopolitical Resonance</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Navigating complex international landscapes with historical context and contemporary insight.</p>
              </div>
            </div>
            <div className="flex items-start gap-unit-md">
              <span className="text-accent-gold mt-1">◆</span>
              <div>
                <h4 className="font-label-lg text-label-lg text-primary font-bold">Scalable Alliance Architectures</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Designing frameworks that grow from initial pilot programs into deep-rooted organizational partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Credentials Bento Grid */}
      <section className="space-y-unit-xl mb-unit-2xl bg-white p-unit-lg rounded-xl border border-outline-variant/30 premium-shadow">
        <div className="text-center space-y-unit-xs">
          <h3 className="font-headline-md text-headline-md text-primary">Institutional Credentials</h3>
          <p className="font-label-lg text-label-lg text-accent-gold uppercase tracking-widest font-bold">Validated Governance Standards</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 border border-outline-variant/30 rounded-xl bg-surface-container-low p-unit-xl flex flex-col justify-between hover:border-secondary transition-colors group">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-unit-md">account_balance</span>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-unit-sm">Chartered Compliance</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Rigorous adherence to international legal frameworks and academic ethical standards.</p>
            </div>
            <a className="font-label-lg text-label-lg text-accent-gold hover:underline mt-unit-xl inline-block" href="#">View Certificates</a>
          </div>
          <div className="md:col-span-8 border border-outline-variant/30 rounded-xl bg-surface-container-low p-unit-xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-unit-md">monitoring</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-unit-sm">Economic Impact Modeling</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg max-w-md">Predictive analytics for alliance outcomes, measuring quantitative social and financial ROI for B2B ventures.</p>
              </div>
              <div className="grid grid-cols-3 gap-unit-md border-t border-outline-variant/30 pt-unit-md mt-unit-md">
                <div>
                  <p className="font-headline-sm text-headline-sm text-primary font-bold">94%</p>
                  <p className="font-label-md text-label-md text-on-surface-variant">Efficacy Rate</p>
                </div>
                <div>
                  <p className="font-headline-sm text-headline-sm text-primary font-bold">12+</p>
                  <p className="font-label-md text-label-md text-on-surface-variant">Global Hubs</p>
                </div>
                <div>
                  <p className="font-headline-sm text-headline-sm text-primary font-bold">B2B+</p>
                  <p className="font-label-md text-label-md text-on-surface-variant">Partner Grade</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 border border-outline-variant/30 rounded-xl bg-surface-container-low p-unit-xl flex flex-col justify-between">
            <h4 className="font-label-lg text-label-lg text-primary mb-unit-md uppercase tracking-widest font-bold">Strategic Nodes</h4>
            <div className="aspect-[2/1] overflow-hidden rounded-lg bg-surface-container border border-outline-variant/10 flex items-center justify-center">
              <img
                className="w-full h-full object-cover grayscale opacity-30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQialFcuqcGbMWPeMHl3n6yJyk5wDPStHDZyWn98jGheQr9ZjTHQEXy3ck1DieaGnLNmKZVDD_W0zQ1TxZGmmnZw6h3q9uCk6tlYkwKhCOp2vBE2IxI_hUtDXHk-yJJ92WsR4Si37DiyFpIsH7QAt8hjnN_yT4xaDqo_49G871QPO0efTjjCxNiPTbGjhdys66ZzLcwsNPV0EBEAjVVRpYd5v4WJnCJV3z08Jmbx8-41GO4o2Qx10lxw52ExrS_ZnOIea3zVGTTDw"
                alt="Strategic nodes map"
              />
            </div>
          </div>
          <div className="md:col-span-6 border border-outline-variant/30 rounded-xl bg-primary text-on-primary p-unit-xl flex items-center justify-between">
            <div className="space-y-unit-sm">
              <h4 className="font-headline-sm text-headline-sm text-white">Annual Archive 2024</h4>
              <p className="font-body-sm text-body-sm text-primary-fixed-dim">A comprehensive review of strategic synergies and institutional growth.</p>
            </div>
            <span className="material-symbols-outlined text-[48px] text-accent-gold">menu_book</span>
          </div>
        </div>
      </section>

      {/* Formal Inquiry Flow Section */}
      <section className="py-unit-2xl bg-white border border-outline-variant/30 rounded-xl premium-shadow mb-unit-2xl p-unit-lg" id="inquiry">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-unit-xl space-y-unit-sm">
            <h2 className="font-display-lg text-display-lg text-primary">Strategic Inquiry</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Begin the formal verification and alignment process for potential B2B collaboration.</p>
          </div>
          <form className="space-y-unit-lg" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="flex flex-col gap-unit-xs">
                <label className="font-label-lg text-label-lg text-primary font-bold">Institutional Name</label>
                <input className="w-full p-unit-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md rounded-lg bg-surface-container-low" placeholder="Full legal entity name" type="text" />
              </div>
              <div className="flex flex-col gap-unit-xs">
                <label className="font-label-lg text-label-lg text-primary font-bold">Primary Domain</label>
                <select className="w-full p-unit-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md rounded-lg bg-surface-container-low">
                  <option>Academic Research</option>
                  <option>Geopolitical Consulting</option>
                  <option>Corporate Expansion</option>
                  <option>Sustainable Governance</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-unit-xs">
              <label className="font-label-lg text-label-lg text-primary font-bold">Executive Representative</label>
              <input className="w-full p-unit-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md rounded-lg bg-surface-container-low" placeholder="Full name and title" type="text" />
            </div>
            <div className="flex flex-col gap-unit-xs">
              <label className="font-label-lg text-label-lg text-primary font-bold">Framework Intent</label>
              <textarea className="w-full p-unit-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md resize-none rounded-lg bg-surface-container-low" placeholder="Briefly describe the proposed strategic synergy..." rows={4}></textarea>
            </div>
            <div className="flex items-center gap-unit-md pt-unit-md">
              <input className="w-5 h-5 text-primary border-primary rounded" type="checkbox" />
              <p className="font-body-sm text-body-sm text-on-surface-variant">I verify that this inquiry is authorized by the institution's executive board.</p>
            </div>
            <button className="w-full bg-primary text-on-primary py-unit-lg font-label-lg text-label-lg uppercase tracking-widest hover:opacity-90 transition-all rounded-lg mt-unit-md" type="submit">
              Submit Protocol Request
            </button>
          </form>
        </div>
      </section>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
