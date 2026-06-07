'use client';

import React, { useRef } from 'react';

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <main ref={containerRef} className="animate-fade-in-up flex-grow">
        <div dangerouslySetInnerHTML={{ __html: `<!-- Hero Section: Editorial Layout -->
<section class="grid grid-cols-12 gap-gutter pt-[16px] pb-[40px] items-center transition-all duration-250 opacity-100">
<div class="col-span-12 lg:col-span-6 flex flex-col gap-unit-lg">
<span class="font-label-lg text-label-lg uppercase tracking-widest text-on-tertiary-container">Empowering the Mind &amp; Body</span>
<h1 class="font-display-xl text-display-xl text-primary leading-tight">Better Wisdom,<br>Better Health,<br>Better Wealth.</h1>
<div class="editorial-line"></div>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Welcome to a sanctuary of high-level intellectual pursuit and holistic wellbeing. Under the guidance of Dr. Ayuba, we explore the intersection of ancient philosophy and modern science to elevate every facet of your life.
            </p>
<div class="flex flex-wrap gap-unit-md mt-unit-md">
<button class="bg-primary text-on-primary px-6 py-4 md:px-10 md:py-5 font-label-lg text-label-lg rounded-none hover:bg-opacity-90 transition-all active:scale-95">START YOUR JOURNEY</button>
<button class="border border-tertiary text-tertiary px-6 py-4 md:px-10 md:py-5 font-label-lg text-label-lg rounded-none hover:bg-surface-container transition-all active:scale-95">EXPLORE THE ARCHIVE</button>
</div>
</div>
<div class="col-span-12 lg:col-span-6 relative flex justify-center lg:justify-end">
<div class="relative z-10 p-unit-lg bg-surface-container-low border border-outline-variant/30 w-full max-w-[624px] flex flex-col items-center overflow-hidden">
<img alt="Dr. Ayuba - Founder, Principal & Lead Researcher" class="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-150 shadow-2xl mb-unit-md" src="/images/DrAyuba.jpeg">
<div class="text-center">
<p class="font-headline-sm text-headline-sm text-primary font-bold">Dr. Ayuba</p>
<p class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Founder & Principal Researcher</p>
</div>
<!-- Decorative Elements -->
<div class="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-secondary/20 z-0 pointer-events-none"></div>
<div class="absolute -bottom-10 -left-10 w-64 h-64 bg-tertiary-fixed/10 -z-10 pointer-events-none"></div>
</div>
</div>
</section>
<!-- Pillars Summary -->
<section class="py-unit-xl bg-primary-container text-white grid grid-cols-1 md:grid-cols-3 gap-gutter transition-all duration-250 opacity-100">
<div class="p-unit-lg border-b border-on-primary-container/20 md:border-b-0 md:border-r last:border-r-0">
<span class="font-display-lg text-display-lg opacity-20">01</span>
<h3 class="font-headline-sm text-headline-sm mb-unit-sm">Wisdom</h3>
<p class="font-body-sm text-body-sm opacity-80">Rigorous intellectual frameworks for decision making and life philosophy.</p>
</div>
<div class="p-unit-lg border-b border-on-primary-container/20 md:border-b-0 md:border-r last:border-r-0">
<span class="font-display-lg text-display-lg opacity-20">02</span>
<h3 class="font-headline-sm text-headline-sm mb-unit-sm">Health</h3>
<p class="font-body-sm text-body-sm opacity-80">Longevity protocols and mental health strategies backed by clinical research.</p>
</div>
<div class="p-unit-lg border-b border-on-primary-container/20 md:border-b-0 md:border-r last:border-r-0">
<span class="font-display-lg text-display-lg opacity-20">03</span>
<h3 class="font-headline-sm text-headline-sm mb-unit-sm">Wealth</h3>
<p class="font-body-sm text-body-sm opacity-80">Sustainable economic growth and institutional asset management wisdom.</p>
</div>
</section>
<!-- Latest Research Section -->
<section class="py-unit-2xl transition-all duration-250 opacity-100">
<div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-unit-xl gap-unit-md">
<div>
<h2 class="font-headline-lg text-headline-lg text-primary">The Research Archive</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Deep dives into the mechanics of human performance.</p>
</div>
<a class="font-label-lg text-label-lg text-secondary border-b border-secondary pb-1" href="/library">VIEW ALL RESEARCH</a>
</div>
<div class="grid grid-cols-12 gap-gutter">
<!-- Featured Article -->
<div class="col-span-12 lg:col-span-8 row-span-2 relative group overflow-hidden bg-white border border-outline-variant hover:premium-shadow transition-all duration-150 min-h-[400px] md:h-auto">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-150 group-hover:translate-y-[-1px]" data-alt="A scholarly antique library..." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQrzDN0LeHnzIT15wAbp-Z0ttwo9GrVGHW52GOjSb46XnHwH8f_BfSHrvPM_pnIqNdYe5cZZyD8PK9lxtGUsO9C1JErBZ4xivpnE6xO5hEZ9Vb1ERhT8qRCRafv3Sc5VQshFD1-1FzPNJdOlyKKNXOty0LUTi0pJsszdj2OnOnidIiR8O5mzLqjQUGqBy8sIRvr5V-lhtKbhAjt5Q9bTBB4jfiQ3riJVyUfPg5FXpV1gmQnOOCiMfZqDYohFEIHvEW5Y7u-atkxiE')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-unit-xl text-white w-full">
<span class="bg-secondary px-unit-sm py-1 text-[10px] uppercase tracking-widest mb-unit-md inline-block">Long Read</span>
<h3 class="font-headline-lg text-headline-lg mb-unit-md">Cognitive Optimization: The Neural Basis of Stoicism</h3>
<p class="font-body-lg text-body-lg text-white/80 max-w-xl mb-unit-lg">An empirical analysis of historical philosophical practices and their direct impact on prefrontal cortex regulation.</p>
<button class="flex items-center gap-unit-sm group/btn">
<span class="font-label-lg text-label-lg">READ THE MONOGRAPH</span>
<span class="material-symbols-outlined transition-transform group-hover/btn:translate-x-2">arrow_forward</span>
</button>
</div>
</div>
<!-- Side Articles -->
<div class="col-span-12 lg:col-span-4 row-span-1 bg-white border border-outline-variant p-unit-lg flex flex-col justify-between hover:premium-shadow transition-all group">
<div>
<span class="text-on-tertiary-container font-label-md text-label-md">NUTRITIONAL SCIENCE</span>
<h4 class="font-headline-sm text-headline-sm text-primary mt-unit-sm group-hover:text-secondary transition-colors">The Intermittent Protocol for Executive Vitality</h4>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">A 12-week clinical study on metabolic flexibility in high-stress environments.</p>
<div class="editorial-line mt-unit-md"></div>
</div>
<div class="col-span-12 lg:col-span-4 row-span-1 bg-surface-container-high border border-outline-variant p-unit-lg flex flex-col justify-between hover:premium-shadow transition-all group">
<div>
<span class="text-on-tertiary-container font-label-md text-label-md">WEALTH PSYCHOLOGY</span>
<h4 class="font-headline-sm text-headline-sm text-primary mt-unit-sm group-hover:text-secondary transition-colors">Generational Legacy: Beyond Liquidity</h4>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">Frameworks for transferring values alongside assets in institutional family offices.</p>
<div class="editorial-line mt-unit-md"></div>
</div>
</div>
</section>
<!-- Upcoming Events -->
<section class="bg-surface-container-lowest py-unit-2xl border-y border-outline-variant transition-all duration-250 opacity-100">
<div class="grid grid-cols-12 gap-gutter">
<div class="col-span-12 lg:col-span-4 border-l-4 border-secondary pl-unit-lg">
<h2 class="font-headline-lg text-headline-lg text-primary">Convocation &amp; Events</h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-unit-sm">Join the inner circle for exclusive symposiums and physical retreats.</p>
</div>
<div class="col-span-12 lg:col-span-8 flex flex-col gap-unit-md">
<!-- Event Row 1 -->
<div class="group flex items-center p-unit-lg border border-outline-variant hover:bg-primary hover:text-white transition-all duration-150 cursor-pointer overflow-hidden">
<div class="flex flex-col items-center border-r border-outline-variant pr-unit-lg mr-unit-lg group-hover:border-white/20 shrink-0">
<span class="font-label-lg text-label-lg uppercase">Oct</span>
<span class="font-headline-md text-headline-md">14</span>
</div>
<div class="flex-1 min-w-0">
<h5 class="font-headline-sm text-headline-sm truncate">Annual Leadership Symposium</h5>
<p class="text-body-sm opacity-70 truncate">Lagos, Nigeria | Institutional Partners Only</p>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-all shrink-0">north_east</span>
</div>
<!-- Event Row 2 -->
<div class="group flex items-center p-unit-lg border border-outline-variant hover:bg-primary hover:text-white transition-all duration-150 cursor-pointer overflow-hidden">
<div class="flex flex-col items-center border-r border-outline-variant pr-unit-lg mr-unit-lg group-hover:border-white/20 shrink-0">
<span class="font-label-lg text-label-lg uppercase">Nov</span>
<span class="font-headline-md text-headline-md">02</span>
</div>
<div class="flex-1 min-w-0">
<h5 class="font-headline-sm text-headline-sm truncate">Health &amp; Longevity Mastermind</h5>
<p class="text-body-sm opacity-70 truncate">Virtual Conference | Global Access</p>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-all shrink-0">north_east</span>
</div>
<!-- Event Row 3 -->
<div class="group flex items-center p-unit-lg border border-outline-variant hover:bg-primary hover:text-white transition-all duration-150 cursor-pointer overflow-hidden">
<div class="flex flex-col items-center border-r border-outline-variant pr-unit-lg mr-unit-lg group-hover:border-white/20 shrink-0">
<span class="font-label-lg text-label-lg uppercase">Dec</span>
<span class="font-headline-md text-headline-md">20</span>
</div>
<div class="flex-1 min-w-0">
<h5 class="font-headline-sm text-headline-sm truncate">The Sovereign Wealth Retreat</h5>
<p class="text-body-sm opacity-70 truncate">Swiss Alps | Platinum Members</p>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-all shrink-0">north_east</span>
</div>
</div>
</div>
</section>
<!-- Corporate Wellness -->
<section class="py-unit-2xl grid grid-cols-1 lg:grid-cols-2 gap-unit-2xl items-center transition-all duration-250 opacity-100">
<div class="order-2 lg:order-1">
<div class="aspect-square bg-surface-container relative overflow-hidden">
<img alt="Corporate Wellness Environment" class="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPv1NCtdIjM19kxMN54hgZThYaHOC4RP7LuXDsooBzznRHMRtgfUBM85SPT6YHUqAO19JP_XZk9O5a0ZO6hlI4RyXakDJkbXJncr9FQek4aYdv02zlvD5W2mwMKsQ-7EmTxibXVWFmcvMqumWEMTMCQ3UcmNekgTKsQKJUsDWKrpTvuVn5C-6Xgu_QPV9_5hwUjpmVAqKdY19VekC4n-IW61t4FrsZ-nsxlShp9lzQz9E50ovNPvXVNXHenflWsVpjHKheNZlnhvI">
<div class="absolute inset-0 border-[32px] border-white/30"></div>
</div>
</div>
<div class="order-1 lg:order-2 flex flex-col gap-unit-lg">
<span class="text-secondary font-label-lg text-label-lg uppercase tracking-widest">For Institutions</span>
<h2 class="font-headline-lg text-headline-lg text-primary">Corporate Wellness Programs</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">Elevate your workforce with Dr. Ayuba's proprietary \"Peak Institutional Performance\" framework. We provide evidence-based modules for Fortune 500 leadership teams.</p>
<ul class="flex flex-col gap-unit-sm">
<li class=\"diamond-bullet font-body-md text-body-md\">Biometric Stress Response Training</li>
<li class=\"diamond-bullet font-body-md text-body-md\">Decision-Making Under Asymmetric Information</li>
<li class=\"diamond-bullet font-body-md text-body-md\">Executive Cognitive Longevity Audits</li>
<li class=\"diamond-bullet font-body-md text-body-md\">Sovereign Wealth Management Workshops</li>
</ul>
<button class=\"w-fit border-b-2 border-primary pb-unit-xs font-label-lg text-label-lg text-primary hover:text-secondary hover:border-secondary transition-all\">PARTNERSHIP INQUIRIES</button>
</div>
</section>` }} />
      </main>
    </>
  );
}
