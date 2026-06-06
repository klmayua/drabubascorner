'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import MarketplaceCard from '@/components/MarketplaceCard';
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
    title: 'Metabolic Architectures of Longevity',
    description: 'A technical review of cellular regeneration protocols and institutional health standards for long-term vitality.',
    href: '/video-archive',
    type: 'video',
    categoryOrDiscipline: 'Health',
    duration: '18 mins',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy91CmDXViEEx5Sqn_TeWDDwKUNfwbPAYugJ6fVzU0Lb4Ng3VyLpu5A8wc_PZrEiAFW40M3dkomKwnq2ILFlLQKwgwi2GYiW7eR9SUHnTfGr9BYgVX2wZNzgj-E6BWWbhK3J3jjrBAJlZpVO1IOj2yq7suLabN2lMppdPg1bG2k0McxUXo9JWprrNqZWLugj6nuaNuubf1iAQovbA2kViVLcRav7NZcxyfVf9mUJD5nkV2X1tLKWRXlYnh6WtpmG_n9gtuz0jmaGA',
  },
];

const products = [
  {
    title: 'Institutional Health Report Vol. IV',
    description: 'A comprehensive study on communal health patterns and economic prosperity in emerging sectors.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBvDafIacRpCcO58xpLjZ2lPOY4tloCOZTgsQFETcGTCgZSMAj6upkc84LN7NI6S9NOSS4Brl7TM6BUz5eAXpjuA05NVFnijLIfeyoqXlrkqeKbHR4Hc7uTW3fdk0nTT4eRbnLZBvCyE7Cs7AXcOibCQkA0PXyVcllMdg7axxJB5gZZftN-nOfliQEo1rLO-6GTW11fwrbeQ6Z130fki3EEgOtUGtkMt_H2yeZjRr5QeDFahm0i5dprN9iiE_3kN1hkPcbb45Fps4',
    format: 'Physical Journal',
    price: 120.0,
  },
  {
    title: 'The Wealth Quotient PDF',
    description: 'An 85-page executive summary regarding capital management through the lens of ancient wisdom.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWRCvB7oSyniaevKLockWB4HhiIcEefbMFiklLD8HX-W3b0fRckG0nD1YOMlhfKS-qazOryiutVBDlGg2EdT1s32szbqXzfBThAwf8ITdeWMuYgsRlma5zd70XHtDCDdbdDbtdwVfLJ1WQNsXb9N2DlZ4e0IdO0QgoYhdYJYtuDpz7u9Gud9YJpTDujgZ14Wo2Tf3ls0ar4r6yEezJIA7Kn7u8wqjp5Vn0LZPye4E1y0nPeEDTVWbcGs3pbv6CNCu5bRYRK16xYWI',
    format: 'Digital Download',
    price: 45.0,
  },
  {
    title: 'Sustainable Legacy Framework',
    description: 'Research findings on establishing intergenerational wealth and moral leadership benchmarks.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe9_8Geu5-DySa9jXEgch-pIRhbcka9npfHstEUUaQoZ5ZG0qmFO8agS8trw9M58zAEGuyYBI03KxOjMu4Nsc7X1DmAg7igEEQ1cQi4ngS0DPieZ6TH5-nUBIPozMR_Pt6W1LY18onmujizo6OOXGsRXEgauTvHwYgtbW4L2qpPP9lV-86FLVb2WN0LRgx_qljJRYCflZ5cLnTDJ_0IyR--8iax-FWjwb7nAkag_kb2s2CFLOmDGx-7zIfpynUOV_upq1VWEdlmVA',
    format: 'Institutional Paper',
    price: 65.0,
  },
  {
    title: 'The Wisdom Box Set',
    description: 'Complete collection of the first five years of quarterly intellectual reviews.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsTxGojv08rJczhRkuwNkqOohwEcBLv8GGa7XkMdtdWOHshvXJiCvKiRPUlSXQDqSb_aiD5pZ7p7FF1zLpsJddcTLcJAurY73clhbsGGFlfJVHq3LuVfiR0nzVOSzqGFgviGz9AkZGCwjUtVqPOsLWfMPEDOAJvoLUudylAwEuwCDZ-6o9g7YOS_lclmC_RS8TEQ-4ezZjiUdvwk51Cvw44XcoBx5UanvFKvvG7M5mT7alXQjxAFxWT9_DM118Szy9vpFLS1GeTDM',
    format: 'Archival Bundle',
    price: 350.0,
  },
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Institutional Storefront"
        pageTitle="Scholarly Marketplace"
        supportingDescription="A curated repository of intellectual property, academic journals, and executive masterclasses designed for the modern scholar and industry leader."
      />

      {/* Featured Masterclass (Bento Pattern) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-unit-2xl mt-unit-lg">
        <div className="md:col-span-8 group relative overflow-hidden bg-primary-container rounded-xl border border-outline-variant/30 min-h-[400px] flex flex-col justify-end">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <img
              className="w-full h-full object-cover group-hover:translate-y-[-1px] transition-transform duration-150 animate-fade-in"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuZYVX6a1HCk_TVGzaj65hy0IZSnJR5911qw-XfklvuT0TAPF-MXQzMrxN5bM05w_O-c7MmSmsFIw8-REtIwVHBGrJ8WvjzUw-emjJ10Pz8xn8d4_q7czLY3wEwoOEzl8hEeCQyBoYII7winJ80aT8sHHrS2sJM_NekO2hgrB2ZPPdcEl_H2AkEhkLx8xsiU43LtUXI04VdaecPLgHkd0jfJMHfumKEXf1K7WnaTcrVByV7fQgtae6IljNwrUnwOzR5IZDbVqPOVI"
              alt="Strategic Wisdom for Executive Leadership"
            />
          </div>
          <div className="relative z-10 p-unit-xl">
            <span className="bg-secondary text-on-secondary px-3 py-1 text-label-md font-label-md rounded mb-4 w-fit inline-block">
              MASTERCLASS ACCESS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white mb-4 leading-tight">
              Strategic Wisdom for Executive Leadership
            </h2>
            <p className="font-body-md text-primary-fixed-dim mb-8 max-w-xl leading-relaxed">
              Join Dr. Ayuba for a 12-week comprehensive deep dive into archival strategies and modern leadership application. Limited seats for institutional partners.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-accent-gold text-black font-bold px-unit-xl py-3 font-label-lg text-label-lg rounded-lg hover:opacity-90 transition-opacity">
                Enroll Now — $1,499
              </button>
              <button className="border border-white text-white px-unit-xl py-3 font-label-lg text-label-lg rounded-lg hover:bg-white/10 transition-colors">
                View Syllabus
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-gutter">
          <div className="bg-white border border-outline-variant/30 p-unit-lg flex-1 rounded-xl premium-shadow flex flex-col justify-between">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Annual Subscription</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Unlimited access to all digital reports, archival journals, and exclusive member-only seminars.
              </p>
            </div>
            <div className="border-t border-outline-variant/10 pt-6 flex justify-between items-center mt-6">
              <span className="font-headline-sm text-headline-sm text-secondary">$299<span className="text-label-md">/year</span></span>
              <button className="text-primary font-bold hover:underline">Subscribe</button>
            </div>
          </div>
          <div className="bg-white border border-outline-variant/30 p-unit-lg flex-1 rounded-xl premium-shadow flex flex-col justify-between">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Latest Publication</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                "The Foundation of Wisdom: A Decade of Health &amp; Wealth Research" — Hardcover Edition.
              </p>
            </div>
            <div className="border-t border-outline-variant/10 pt-6 flex justify-between items-center mt-6">
              <span className="font-headline-sm text-headline-sm text-secondary">$85.00</span>
              <button className="text-primary font-bold hover:underline">Pre-order</button>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="mb-unit-2xl">
        <div className="flex justify-between items-center mb-unit-lg">
          <h2 className="font-headline-md text-headline-md text-primary">Academic Publications</h2>
          <a className="text-secondary font-label-lg text-label-lg hover:underline flex items-center gap-2" href="#">
            View Catalog <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {products.map((prod, idx) => (
            <MarketplaceCard
              key={idx}
              title={prod.title}
              description={prod.description}
              imageUrl={prod.imageUrl}
              format={prod.format}
              price={prod.price}
              href="#"
            />
          ))}
        </div>
      </section>

      {/* Procurement CTA */}
      <section className="bg-secondary p-unit-2xl rounded-xl text-center relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display-lg text-display-lg text-white mb-unit-md leading-tight">Institutional Procurement</h2>
          <p className="font-body-lg text-white mb-unit-lg opacity-90 leading-relaxed">
            For universities, corporations, or research libraries seeking bulk licensing and archival access.
          </p>
          <button className="bg-white text-primary px-unit-2xl py-4 font-label-lg text-label-lg rounded-lg hover:bg-surface-variant transition-colors">
            Contact Registrar
          </button>
        </div>
      </section>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
