'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
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
    title: 'Strategic Leadership in Complex Ecosystems',
    description: 'Navigating high-stakes institutional environments with ethical clarity and decisive strategic action.',
    href: '/catalog',
    type: 'course',
    categoryOrDiscipline: 'EXECUTIVE PROGRAM',
    duration: '6 Months',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJRoVLUR5g9fNqenbPDGtO8BXasLzaoCD966cbnzrv1e-Jxt_41fNHy646U2MbOhaJU7RwP25oNSAzhKXQMrlRQqQRkUo_Bo5H7ZygSlluytjzgDDV1BB5tTccz1jgyuK-nnPNEPrGj79U6ZI2vsraaWTHb62cOCIS6Y8Bm0ogZoA0wyt1Iz3ncWUXzwxFKX_Ugo2Iee7OEBrNg_cNG5_xD3_e5bJ-twsIwLqDqSVGW78F5SegCu0TDCoV9TDgCvCpKAMyy1gssVc',
  },
  {
    title: 'The Ontology of Generative Wisdom',
    description: 'An in-depth exploration of archival wisdom and its application in modern health systems with Dr. Ayuba.',
    href: '/video-archive',
    type: 'video',
    categoryOrDiscipline: 'Wisdom',
    duration: '42:15',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk56jy9HjwLtDwdS7kEiwHZ7CLuhbVjyj0kyRSiaTHgg86FwkyNZrPE57kLokRTcw5uMzIgnn4xvJoBTPVL9PJ9uo7LboVee5ab6WHfW42HjTxj63SRL_g3DID6hwL8hy8esAhCoKerkrdYYF8Onl5t9WMU9BhvimsmOGl7v0gb3jArJTfgd2tAnYi4Bj_-fk3b4y8dFPnxlDxb_ARNfdpcxGfjqa1v_jHZyn-UHQc7tABP422M2Ts26xs0wOg_heinnce_KD-psc',
  },
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Speaking &amp; Consulting"
        pageTitle="Strategic Advisory &amp; Keynotes"
        supportingDescription="Pioneering the intersection of institutional healthcare strategy and grassroots medical education. Dr. Ayuba provides bespoke consulting and high-impact speaking engagements for the world's leading medical institutions."
      />

      {/* Hero Section & Host Biography */}
      <section className="relative bg-surface-container-low overflow-hidden rounded-xl border border-outline-variant/30 mt-unit-lg p-unit-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 space-y-unit-lg z-10">
            <div className="inline-flex items-center gap-unit-xs px-3 py-1 bg-primary text-on-primary rounded-full">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-label-md text-label-md uppercase tracking-widest text-white">Global Academician &amp; Advisor</span>
            </div>
            <h2 className="font-display-xl text-display-xl text-primary leading-none">
              Dr. Ayuba <br />
              <span className="text-secondary text-headline-md">MBBS, PhD, FRCP</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
              Partner with Dr. Ayuba to elevate your organization's health strategy, policy development, and academic frameworks. Providing direct keynotes and long-term advisory.
            </p>
          </div>
          <div className="md:col-span-5 relative mt-6 md:mt-0">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="relative border-4 border-white shadow-xl rounded-xl overflow-hidden">
              <img alt="Dr. Ayuba Portrait" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-150" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmT7Zk5gjXba1wIAnpi561kzCbLKH7ccp8Dh1RMTKBjIPeV0PJDQti1VhuU3PxhoX12kGkbxzI8s3yScI7oJbsN1FXxn3pKpdlKEAy2Je2Y5GWfSFr4Gx9gbXK6bobP_DJUGShrXWqnmxY4u4UVRy7zRmtJsrzbp93NsNgOX2f-Ggfw82TJnc1HXfIrNBPzgDpy5jow_kUOUlxlaWj8--mdyRb-Vs6OghtIAdStjm2Ra6bKJfE-P4kPcP85h_nKTmzLrokk1cbRRk" />
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Services: Bento Grid */}
      <section className="py-unit-2xl bg-white border border-outline-variant/30 rounded-xl premium-shadow mt-unit-xl p-unit-lg">
        <div className="mb-unit-xl border-b border-outline-variant/10 pb-unit-md flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest">Consultancy</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Advisory Services</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed">Strategic transformation for healthcare systems and private academic institutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Service 1 */}
          <div className="p-unit-xl border border-outline-variant/30 rounded-xl hover:border-secondary transition-colors group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center mb-unit-lg group-hover:bg-secondary group-hover:text-white transition-all rounded-lg">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-sm">Institutional Policy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Developing robust governance frameworks for medical faculties and regional health authorities with a focus on ethical sustainability.</p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="p-unit-xl border border-outline-variant/30 bg-primary text-on-primary rounded-xl group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-unit-lg group-hover:bg-accent-gold transition-all rounded-lg">
                <span className="material-symbols-outlined text-white">hub</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-white mb-unit-sm">Clinical Strategy</h3>
              <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">Optimization of clinical workflows through data-driven academic research and real-world practitioner feedback loops.</p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="p-unit-xl border border-outline-variant/30 rounded-xl hover:border-secondary transition-colors group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center mb-unit-lg group-hover:bg-secondary group-hover:text-white transition-all rounded-lg">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-unit-sm">Curriculum Design</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">End-to-end modernization of postgraduate medical education tracks, integrating modern technology and traditional clinical values.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Topics: High-Density List */}
      <section className="py-unit-2xl bg-surface-container-low rounded-xl border border-outline-variant/30 p-unit-lg mt-unit-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div>
            <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest">Speaking</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-unit-lg">Signature Keynote Topics</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-unit-xl">
              Dr. Ayuba delivers powerful narratives that challenge conventional medical thinking, blending deep scientific rigor with engaging storytelling.
            </p>
            <div className="flex items-center gap-unit-md p-unit-lg bg-white border border-outline-variant/30 rounded-xl premium-shadow">
              <div className="flex-shrink-0">
                <span className="material-symbols-outlined text-secondary text-4xl">download</span>
              </div>
              <div>
                <h4 className="font-label-lg text-label-lg text-primary font-bold">Media Kit 2024</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Bio, headshots, and technical requirements (PDF, 12MB)</p>
              </div>
              <a className="ml-auto text-accent-gold font-bold font-label-lg text-label-lg border-b border-accent-gold pb-1 hover:text-secondary transition-colors" href="#">Download</a>
            </div>
          </div>
          <div className="md:border-l border-outline-variant/30 md:pl-gutter space-y-unit-xl mt-8 md:mt-0">
            <article className="relative pl-10">
              <span className="absolute left-0 top-1 font-display-lg text-secondary/35 text-[28px]">01</span>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-unit-xs">The African Medical Renaissance</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Exploring how home-grown medical innovation is shaping the global health landscape of the next century.</p>
            </article>
            <article className="relative pl-10 border-t border-outline-variant/10 pt-6">
              <span className="absolute left-0 top-7 font-display-lg text-secondary/35 text-[28px]">02</span>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-unit-xs">Ethics in the Era of AI Diagnosis</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Navigating the philosophical and practical challenges of machine-assisted medical decision making.</p>
            </article>
            <article className="relative pl-10 border-t border-outline-variant/10 pt-6">
              <span className="absolute left-0 top-7 font-display-lg text-secondary/35 text-[28px]">03</span>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-unit-xs">Leadership in Crisis Management</h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Lessons from the frontlines of institutional healthcare during global health emergencies.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-unit-2xl bg-white border border-outline-variant/30 rounded-xl premium-shadow mt-unit-xl p-unit-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-4 bg-primary p-unit-xl text-on-primary rounded-xl flex flex-col justify-between">
            <div>
              <h2 className="font-headline-md text-headline-md text-white mb-unit-md border-b border-white/10 pb-2">Direct Inquiry</h2>
              <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed mb-unit-xl">For urgent consulting requests or international speaking engagements, please provide detailed information.</p>
            </div>
            <ul className="space-y-unit-md mt-6 pt-4 border-t border-white/10 font-label-lg text-label-lg text-white">
              <li className="flex gap-unit-md items-center">
                <span className="material-symbols-outlined text-accent-gold">mail</span>
                <span>office@ayubascorner.com</span>
              </li>
              <li className="flex gap-unit-md items-center">
                <span className="material-symbols-outlined text-accent-gold">location_on</span>
                <span>Lagos • London • Geneva</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-8 p-unit-xl border border-outline-variant/30 bg-surface-container-low rounded-xl">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-unit-lg" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-unit-xs">
                <label className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-bold">Full Name</label>
                <input className="bg-white border border-outline-variant p-unit-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-lg" placeholder="John Doe" type="text" />
              </div>
              <div className="flex flex-col gap-unit-xs">
                <label className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-bold">Organization</label>
                <input className="bg-white border border-outline-variant p-unit-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-lg" placeholder="Institution Name" type="text" />
              </div>
              <div className="flex flex-col gap-unit-xs">
                <label className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-bold">Inquiry Type</label>
                <select className="bg-white border border-outline-variant p-unit-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-lg">
                  <option>Speaking Engagement</option>
                  <option>Institutional Advisory</option>
                  <option>Curriculum Consulting</option>
                  <option>Media Request</option>
                </select>
              </div>
              <div className="flex flex-col gap-unit-xs">
                <label className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-bold">Proposed Date</label>
                <input className="bg-white border border-outline-variant p-unit-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-lg" type="date" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-unit-xs">
                <label className="font-label-lg text-label-lg text-primary uppercase tracking-wider font-bold">Brief Description</label>
                <textarea className="bg-white border border-outline-variant p-unit-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all rounded-lg" placeholder="Please describe the scope of your request..." rows={4}></textarea>
              </div>
              <div className="md:col-span-2 pt-unit-md">
                <button className="w-full bg-primary text-on-primary py-5 font-label-lg text-label-lg uppercase tracking-widest hover:opacity-90 transition-all flex justify-center items-center gap-unit-md rounded-lg" type="submit">
                  Send Inquiry
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
