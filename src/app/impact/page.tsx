'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
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
        sectionLabel="Annual Outcome Report"
        pageTitle="Generational Impact: A Medical &amp; Social Report"
        supportingDescription="An extensive analysis of multi-decade interventions in health equity, grassroots medical education, and institutional progress under the stewardship of Dr. Ayuba."
      />

      {/* Hero Banner Section with Mandatory Image */}
      <section className="relative h-[50vh] flex items-end overflow-hidden rounded-xl border border-outline-variant/30 mt-unit-lg">
        <img
          alt="Generational Impact banner"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu1ROjOHmXyQhfgSSMMdEn7SI9rFvnohARqGPNqRn5q1ul68lucmmoEehb5YzJOPT42XMztetVTJpn5JGxfQ7Kg6aIx6W8-AmHf2Uou7X8RBpt4rdf01fVEVMas8C4yS_7_5z8XxM0QgKLvO7lBFwyb5B7u0Op_BitaTLxeZscPOPcHSzNOqTaBbcAJffTyEvxMjJSQdxeqcgSaA3KqZ0lyfsibHYOhkf9k3xSsMrBkhULNNrBli5jf707xVuJggTg0DpIuePVfEw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative z-10 w-full p-unit-lg text-white">
          <p className="font-label-lg uppercase tracking-widest text-accent-gold font-bold">Outcome Review</p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-primary text-white py-unit-xl rounded-xl mt-unit-xl p-unit-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-4 border-r border-white/10 pr-gutter">
            <h2 className="font-headline-md text-headline-md text-white mb-unit-sm">Core Metrics</h2>
            <p className="font-body-sm text-body-sm text-primary-fixed-dim">Longitudinal data verified by independent institutional peer review committees (2020-2024).</p>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-gutter text-center md:text-left mt-6 md:mt-0">
            <div className="flex flex-col">
              <span className="font-display-lg text-display-lg text-accent-gold font-bold">1.2M+</span>
              <span className="font-label-lg text-label-lg uppercase tracking-widest text-white/70">Lives Impacted</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display-lg text-display-lg text-accent-gold font-bold">+42%</span>
              <span className="font-label-lg text-label-lg uppercase tracking-widest text-white/70">Growth Index</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display-lg text-display-lg text-accent-gold font-bold">180</span>
              <span className="font-label-lg text-label-lg uppercase tracking-widest text-white/70">Institutions Supported</span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Projects Bento Grid */}
      <section className="py-unit-2xl bg-white border border-outline-variant/30 rounded-xl premium-shadow mt-unit-xl p-unit-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-unit-xl pb-3 border-b border-outline-variant/10">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Strategic Initiatives</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Deploying targeted resources to address systemic healthcare gaps in urban and rural environments.</p>
          </div>
          <button className="px-unit-lg py-unit-sm border border-accent-gold text-accent-gold font-label-lg uppercase tracking-widest hover:bg-accent-gold hover:text-black transition-all rounded-lg font-bold">
            View Registry
          </button>
        </div>
        
        <div className="grid grid-cols-12 gap-unit-md items-stretch">
          {/* Urban Health Initiative */}
          <div className="col-span-12 md:col-span-8 relative min-h-[300px] group overflow-hidden rounded-xl border border-outline-variant/30 flex flex-col justify-end">
            <img className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-150 group-hover:translate-y-[-1px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO8lEfNKrsKEre5R5mBf9MZ4nZpJ1LO0n6hos7cGPF5T8PDQ9jOA4c3LCmmOum_xvBZ_X-3YooAZ3Pnonj4f0war32xCCWrbthJgTE3mMlCUFH_AcBkiSxo6woFkQsy_97gluiJ9R7irRsE_2yKRN_Yv5L9XkqFrbwTkbTCtde9OdMemAmqdXywIMI8X1lWwtHVrOhMST0svXzo-E5WET2XDXQDPgqtHJPyQajPmtlvELDBpYPeyMrnbHQ13Sw4wXfWpXBku9ZODk" alt="Urban health glass building" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="relative z-10 p-unit-lg text-white">
              <span className="inline-block px-3 py-1 bg-accent-gold text-black font-label-md uppercase font-bold rounded mb-unit-sm">Active Project</span>
              <h3 className="font-headline-md text-headline-md text-white">Urban Health Initiative</h3>
              <p className="font-body-md text-white/80 max-w-md mt-1 leading-relaxed">Bridging the gap in tertiary care accessibility across metro-centers through collaborative staffing.</p>
            </div>
          </div>

          {/* Rural Diagnostic Network */}
          <div className="col-span-12 md:col-span-4 relative min-h-[300px] group overflow-hidden rounded-xl border border-outline-variant/30 flex flex-col justify-end">
            <img className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-150 group-hover:translate-y-[-1px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHWeMo1k3e_1q-vZeaaju7VYzja3k7EGQ6xFcd3l4bB5tyzzaZB7fiB4UrBGMrzf9R0xAgYt3kOS579EbpcxhcxlANXVXfeiWzXHMtcyw5chUSLLFmkBJaWDzdyCQnoJgmjl-h43S2W2y6mNvigGH5f03S9aLV3vGiurLQrmk6ObyXzWC5L6IL_sJompT0_6wfmxwbslHfWUW_k6HbdB_WPTYKwte1caMqjJQxrsA7f_K-tOsQ3M64mzaXyTV91Qynps2Wa9Xq8ls" alt="Microscope" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="relative z-10 p-unit-lg text-white">
              <h3 className="font-headline-sm text-headline-sm text-white mb-unit-sm">Rural Diagnostic Network</h3>
              <p className="font-body-sm text-white/80 mb-unit-md leading-relaxed">Implementing decentralized laboratory systems in remote districts to reduce patient transit time by 60%.</p>
              <div className="flex items-center gap-unit-xs text-accent-gold font-label-lg group-hover:gap-unit-md transition-all font-bold cursor-pointer">
                EXPLORE DATA <span className="material-symbols-outlined">arrow_right_alt</span>
              </div>
            </div>
          </div>

          {/* Academic Exchange */}
          <div className="col-span-12 md:col-span-6 bg-primary text-white p-unit-lg flex flex-col justify-between rounded-xl min-h-[200px]">
            <span className="material-symbols-outlined text-accent-gold text-[40px]">history_edu</span>
            <div className="mt-4">
              <h3 className="font-headline-sm text-headline-sm text-white mb-unit-sm">Academic Exchange</h3>
              <p className="font-body-sm text-primary-fixed-dim leading-relaxed">Over 500 scholars participated in the 2023 Fellowship program, producing 42 peer-reviewed journals.</p>
            </div>
          </div>

          {/* Policy Reform */}
          <div className="col-span-12 md:col-span-6 relative min-h-[200px] group overflow-hidden rounded-xl border border-outline-variant/30 flex flex-col justify-end">
            <img className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqXIfYBqu7bOfeYxiYaEN_pTQW1Cddh7I_u0oTG7gAOwQgpPZXwCU4yridQep24NlyBIZrhzJzJMe7Tuqaprd9JfMOcZ-CcbCpRdApJPetNRAV7T58hAL76brKMFF8gFkLxzwFAAgOGgoM_GxLNm9c26aWIQwvzsYkVbjnWc36wLkJwH9HJyE4wrUE9Zf6ZcNJRKBmu0E_QlA3PWP144P9zXi7jx3PeB2wya56zJz6v_yPpfYHTgokJHWprVuVnbRUv5pjzpTwVNs" alt="Fountain pen" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative p-unit-lg text-white flex justify-between items-center z-10">
              <h3 className="font-headline-sm text-headline-sm text-white">Policy Reform Support</h3>
              <span className="material-symbols-outlined text-white text-3xl">gavel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section className="py-unit-2xl bg-surface-container-low rounded-xl border border-outline-variant/30 p-unit-lg mt-unit-xl">
        <div className="grid grid-cols-12 gap-gutter items-center">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-unit-lg">Voices of Success</h2>
            <div className="space-y-unit-xl">
              <div className="border-l-4 border-accent-gold pl-unit-lg py-unit-sm">
                <p className="font-headline-sm text-headline-sm italic text-on-surface mb-unit-md leading-relaxed">
                  "The integration of Dr. Ayuba's protocols transformed our regional hub from a reactive clinic to a proactive health powerhouse. The data density of the training was unmatched."
                </p>
                <div className="flex items-center gap-unit-md mt-4">
                  <div className="w-12 h-12 rounded-full border border-outline-variant/30 overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWBEG76pYvSlk7VbQG6U8ia_-VYQkRx7kuO-RoUQMjuTTuAvG0ggmy6kw3dyDhMQG5hcHdSqZVD4I8Qn6XTzKri4e89nGEfppQiF5fO74ArvwW2qbgkvLGPeT4xo_0x-Bk0Ey17sPh_D1qBldR1jJic-SnAq0KmYabMkoMCqglBG-2IQNykFP59Ru4t7e7MYPGgIoXNgDYFbqfY2kUAsi8_hZOtw6O3jA-4A_zRw4OTo9OEy5FO8oVW9fnivl3zp746Vp9u7F2f60" alt="Chief El-Bakri" />
                  </div>
                  <div>
                    <p className="font-label-lg text-label-lg text-primary uppercase font-bold">Chief El-Bakri</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Director, Coastal Health Council</p>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-primary pl-unit-lg py-unit-sm border-t border-outline-variant/10 pt-6">
                <p className="font-headline-sm text-headline-sm italic text-on-surface mb-unit-md leading-relaxed">
                  "Through the Institutional Grant program, we achieved a 100% digital transformation in patient records. This milestone defines our legacy for the next decade."
                </p>
                <div className="flex items-center gap-unit-md mt-4">
                  <div className="w-12 h-12 rounded-full border border-outline-variant/30 overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyuMNx_wZNRZvJ8fvMcrpFS1GF1QiV3PbQgsf2I6qdTSIL3QpCCNTQZBmbFZeLJlQtix0D09quqHabkYHnGqFkyCdKTOkmH1gbWJZ7xBx6-wX68RxHZ0jJPX_lcBQo1zZZ5tIPlC5t9OIOwtwFcr25l3WHCxUsUr-fp2ipMzjvKr8Lqw7ts7b2CyF0wPE6_pou8eqpfhtd8QCiS0GRsOJv9hSpVDRwe4y3vwi6s5SWC8jdHwQMz9AtiSyfrBZR7MvLl0UlLiupljw" alt="Dr. Sarah Jenkins" />
                  </div>
                  <div>
                    <p className="font-label-lg text-label-lg text-primary uppercase font-bold">Dr. Sarah Jenkins</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Lead Researcher, Metropolis Med-Tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 relative flex justify-end mt-8 lg:mt-0">
            <div className="w-[500px] h-[600px] bg-primary relative overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKjE47S9IFkqF8d6wYJMUjfqS_kpINsn0mFmDsgNOs5h3IQSaS5U3oeH5IjvbmhQkYm-bJJcvpdeOU2Y9hX7PYzZ-L5rfkYWO_DCn9Gmz8_F2VZJlQY79Fr0EbFSGgqMIR6j9QAhwc_yphjjpAfd6TuiMhOlKJH7nAJjKNqBKT5zugYUSucToRZEla4EUOzfQCOg0lNFXym4YL6Ale-GS57vTMtO0Ourwzx-7kKDEo7CVUoh0fPr_g3C_iJrcXBdWlo0OLofBhDSo" alt="Academic hall" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border border-accent-gold flex items-center justify-center cursor-pointer hover:translate-y-[-1px] transition-transform rounded-full">
                  <span className="material-symbols-outlined text-white text-[48px]">play_arrow</span>
                </div>
              </div>
              <div className="absolute bottom-unit-lg right-unit-lg text-right text-white z-10 p-4">
                <p className="font-label-md uppercase tracking-widest text-accent-gold font-bold">Watch Documentary</p>
                <p className="font-headline-sm text-white font-bold">The Ayuba Legacy: 30 Years</p>
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
