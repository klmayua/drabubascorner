'use client';

import React, { useEffect, useRef } from 'react';

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Find all script tags inside the container
    const scripts = Array.from(containerRef.current.querySelectorAll('script'));
    
    // Execute scripts sequentially to preserve execution order dependencies (like Tailwind -> tailwind.config)
    const runScriptsSequentially = async (index = 0) => {
      if (index >= scripts.length) return;
      const oldScript = scripts[index];
      const newScript = document.createElement('script');
      
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      
      newScript.textContent = oldScript.textContent;
      
      if (newScript.src) {
        newScript.onload = () => runScriptsSequentially(index + 1);
        newScript.onerror = () => runScriptsSequentially(index + 1);
        oldScript.parentNode?.replaceChild(newScript, oldScript);
      } else {
        oldScript.parentNode?.replaceChild(newScript, oldScript);
        runScriptsSequentially(index + 1);
      }
    };
    
    runScriptsSequentially();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="font-body-md text-body-md" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "tertiary-fixed": "#ffdf9f",
                        "on-error": "#ffffff",
                        "primary": "#00030f",
                        "surface-tint": "#4f5e7f",
                        "tertiary": "#050300",
                        "tertiary-container": "#281b00",
                        "surface": "#f8f9fa",
                        "surface-container-lowest": "#ffffff",
                        "on-surface-variant": "#44474d",
                        "inverse-surface": "#2e3132",
                        "surface-dim": "#d9dadb",
                        "on-tertiary-container": "#a87f0f",
                        "on-primary-fixed-variant": "#374766",
                        "surface-container": "#edeeef",
                        "on-secondary-fixed-variant": "#304f13",
                        "on-tertiary-fixed": "#261a00",
                        "outline": "#75777e",
                        "surface-bright": "#f8f9fa",
                        "on-tertiary": "#ffffff",
                        "on-tertiary-fixed-variant": "#5c4300",
                        "primary-fixed-dim": "#b6c7ec",
                        "on-secondary-fixed": "#0d2000",
                        "on-primary-fixed": "#091b38",
                        "secondary-container": "#c7efa1",
                        "tertiary-fixed-dim": "#f1bf51",
                        "secondary-fixed": "#c7efa1",
                        "secondary-fixed-dim": "#acd287",
                        "on-primary-container": "#7585a8",
                        "error-container": "#ffdad6",
                        "error": "#ba1a1a",
                        "surface-variant": "#e1e3e4",
                        "secondary": "#476729",
                        "inverse-primary": "#b6c7ec",
                        "on-secondary-container": "#4c6e2e",
                        "primary-fixed": "#d7e2ff",
                        "on-secondary": "#ffffff",
                        "surface-container-highest": "#e1e3e4",
                        "surface-container-high": "#e7e8e9",
                        "background": "#f8f9fa",
                        "surface-container-low": "#f3f4f5",
                        "on-background": "#191c1d",
                        "on-error-container": "#93000a",
                        "on-primary": "#ffffff",
                        "outline-variant": "#c5c6ce",
                        "inverse-on-surface": "#f0f1f2",
                        "primary-container": "#0b1d3a",
                        "on-surface": "#191c1d"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "margin-desktop": "80px",
                        "gutter": "32px",
                        "unit-xs": "4px",
                        "unit-sm": "8px",
                        "unit-xl": "48px",
                        "unit-2xl": "80px",
                        "unit-md": "16px",
                        "container-max": "1440px",
                        "unit-lg": "24px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Playfair Display"],
                        "headline-sm": ["Playfair Display"],
                        "body-sm": ["Inter"],
                        "body-md": ["Inter"],
                        "display-xl": ["Playfair Display"],
                        "headline-md": ["Playfair Display"],
                        "label-md": ["Inter"],
                        "label-lg": ["Inter"],
                        "body-lg": ["Inter"],
                        "display-lg": ["Playfair Display"]
                    },
                    "fontSize": {
                        "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}],
                        "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                        "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
                        "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                        "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                        "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}]
                    }
                }
            }
        }
    </script>
<style>
        body {
            background-color: #f8f9fa;
            color: #191c1d;
            overflow-x: hidden;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-line {
            height: 1px;
            background: rgba(0, 3, 15, 0.1);
            width: 100%;
        }
        .diamond-bullet::before {
            content: "◆";
            color: #a87f0f;
            font-size: 0.6em;
            margin-right: 8px;
            vertical-align: middle;
        }
        .premium-shadow {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
        }
    </style>

<!-- Top Navigation Bar -->
<header class="w-full top-0 sticky bg-surface dark:bg-surface-container-lowest border-b border-outline-variant dark:border-outline z-50">
<nav class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-32">
<div class="flex items-center"><img alt="Dr. Ayuba's Corner Logo" class="h-24 w-auto object-contain" src="/images/Dr_Abuba_Logo_Full-no_bg.png"></div>
<div class="hidden lg:flex items-center gap-unit-lg whitespace-nowrap">
<a class="text-primary dark:text-primary-fixed border-b-2 border-secondary font-bold pb-1 font-label-lg text-label-lg" href="#">Articles</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" href="#">Videos</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" href="#">Podcast</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" href="#">Community</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" href="#">Courses</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" href="#">Marketplace</a>
</div>
<div class="flex items-center gap-unit-lg whitespace-nowrap"><img alt="Dr. Ayuba's Corner Logo" class="h-24 w-auto object-contain" src="/images/Dr_Abuba_Logo_Full-no_bg.png"></div>
</nav>
</header>
<main class="max-w-[1440px] mx-auto">
<!-- Hero Section: Editorial Layout -->
<section class="grid grid-cols-12 gap-gutter px-margin-desktop py-unit-2xl items-center transition-all duration-1000 opacity-100">
<div class="col-span-12 lg:col-span-5 flex flex-col gap-unit-lg">
<span class="font-label-lg text-label-lg uppercase tracking-widest text-on-tertiary-container">Empowering the Mind &amp; Body</span>
<h1 class="font-display-xl text-display-xl text-primary leading-tight">Better Wisdom,<br>Better Health,<br>Better Wealth.</h1>
<div class="editorial-line"></div>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Welcome to a sanctuary of high-level intellectual pursuit and holistic wellbeing. Under the guidance of Dr. Ayuba, we explore the intersection of ancient philosophy and modern science to elevate every facet of your life.
            </p>
<div class="flex gap-unit-md mt-unit-md">
<button class="bg-primary text-on-primary px-10 py-5 font-label-lg text-label-lg rounded-none hover:bg-opacity-90 transition-all active:scale-95">START YOUR JOURNEY</button>
<button class="border border-tertiary text-tertiary px-10 py-5 font-label-lg text-label-lg rounded-none hover:bg-surface-container transition-all active:scale-95">EXPLORE THE ARCHIVE</button>
</div>
</div>
<div class="col-span-12 lg:col-span-7 relative">
<div class="relative z-10 p-unit-lg bg-surface-container-low border border-outline-variant/30">
<img alt="Dr. Ayuba Portrait" class="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" src="/images/DrAyuba.jpeg">
</div>
<!-- Decorative Elements -->
<div class="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-secondary/20 z-0"></div>
<div class="absolute -bottom-10 -left-10 w-64 h-64 bg-tertiary-fixed/10 -z-10"></div>
</div>
</section>
<!-- Pillars Summary -->
<section class="px-margin-desktop py-unit-xl bg-primary-container text-on-primary-fixed grid grid-cols-1 md:grid-cols-3 gap-gutter transition-all duration-1000 opacity-100">
<div class="p-unit-lg border-r border-on-primary-container/20 last:border-r-0">
<span class="font-display-lg text-display-lg opacity-20">01</span>
<h3 class="font-headline-sm text-headline-sm mb-unit-sm">Wisdom</h3>
<p class="font-body-sm text-body-sm opacity-80">Rigorous intellectual frameworks for decision making and life philosophy.</p>
</div>
<div class="p-unit-lg border-r border-on-primary-container/20 last:border-r-0">
<span class="font-display-lg text-display-lg opacity-20">02</span>
<h3 class="font-headline-sm text-headline-sm mb-unit-sm">Health</h3>
<p class="font-body-sm text-body-sm opacity-80">Longevity protocols and mental health strategies backed by clinical research.</p>
</div>
<div class="p-unit-lg border-r border-on-primary-container/20 last:border-r-0">
<span class="font-display-lg text-display-lg opacity-20">03</span>
<h3 class="font-headline-sm text-headline-sm mb-unit-sm">Wealth</h3>
<p class="font-body-sm text-body-sm opacity-80">Sustainable economic growth and institutional asset management wisdom.</p>
</div>
</section>
<!-- Latest Research Section (Bento Grid) -->
<section class="px-margin-desktop py-unit-2xl transition-all duration-1000 opacity-100">
<div class="flex justify-between items-end mb-unit-xl">
<div>
<h2 class="font-headline-lg text-headline-lg text-primary">The Research Archive</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Deep dives into the mechanics of human performance.</p>
</div>
<a class="font-label-lg text-label-lg text-secondary border-b border-secondary pb-1" href="#">VIEW ALL RESEARCH</a>
</div>
<div class="grid grid-cols-12 grid-rows-2 gap-gutter h-[800px]">
<!-- Featured Article -->
<div class="col-span-12 lg:col-span-8 row-span-2 relative group overflow-hidden bg-white border border-outline-variant hover:premium-shadow transition-all duration-300">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A scholarly antique library with floor-to-ceiling wooden bookshelves filled with leather-bound books. The lighting is soft and golden, filtering through high gothic windows, illuminating floating dust motes. In the center, a heavy oak desk holds an open manuscript and a classic inkwell. The atmosphere is academic, quiet, and deeply institutional, using a palette of rich browns, deep blacks, and warm ambers." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQrzDN0LeHnzIT15wAbp-Z0ttwo9GrVGHW52GOjSb46XnHwH8f_BfSHrvPM_pnIqNdYe5cZZyD8PK9lxtGUsO9C1JErBZ4xivpnE6xO5hEZ9Vb1ERhT8qRCRafv3Sc5VQshFD1-1FzPNJdOlyKKNXOty0LUTi0pJsszdj2OnOnidIiR8O5mzLqjQUGqBy8sIRvr5V-lhtKbhAjt5Q9bTBB4jfiQ3riJVyUfPg5FXpV1gmQnOOCiMfZqDYohFEIHvEW5Y7u-atkxiE')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-unit-xl text-white">
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
<!-- Upcoming Events: High-Contrast Layout -->
<section class="bg-surface-container-lowest py-unit-2xl border-y border-outline-variant transition-all duration-1000 opacity-100">
<div class="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-12 gap-gutter">
<div class="col-span-12 lg:col-span-4 border-l-4 border-secondary pl-unit-lg">
<h2 class="font-headline-lg text-headline-lg text-primary">Convocation &amp; Events</h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-unit-sm">Join the inner circle for exclusive symposiums and physical retreats.</p>
</div>
<div class="col-span-12 lg:col-span-8 flex flex-col gap-unit-md">
<!-- Event Row 1 -->
<div class="group flex items-center p-unit-lg border border-outline-variant hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
<div class="flex flex-col items-center border-r border-outline-variant pr-unit-lg mr-unit-lg group-hover:border-white/20">
<span class="font-label-lg text-label-lg uppercase">Oct</span>
<span class="font-headline-md text-headline-md">14</span>
</div>
<div class="flex-1">
<h5 class="font-headline-sm text-headline-sm">Annual Leadership Symposium</h5>
<p class="text-body-sm opacity-70">Lagos, Nigeria | Institutional Partners Only</p>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-all">north_east</span>
</div>
<!-- Event Row 2 -->
<div class="group flex items-center p-unit-lg border border-outline-variant hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
<div class="flex flex-col items-center border-r border-outline-variant pr-unit-lg mr-unit-lg group-hover:border-white/20">
<span class="font-label-lg text-label-lg uppercase">Nov</span>
<span class="font-headline-md text-headline-md">02</span>
</div>
<div class="flex-1">
<h5 class="font-headline-sm text-headline-sm">Health &amp; Longevity Mastermind</h5>
<p class="text-body-sm opacity-70">Virtual Conference | Global Access</p>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-all">north_east</span>
</div>
<!-- Event Row 3 -->
<div class="group flex items-center p-unit-lg border border-outline-variant hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
<div class="flex flex-col items-center border-r border-outline-variant pr-unit-lg mr-unit-lg group-hover:border-white/20">
<span class="font-label-lg text-label-lg uppercase">Dec</span>
<span class="font-headline-md text-headline-md">20</span>
</div>
<div class="flex-1">
<h5 class="font-headline-sm text-headline-sm">The Sovereign Wealth Retreat</h5>
<p class="text-body-sm opacity-70">Swiss Alps | Platinum Members</p>
</div>
<span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-all">north_east</span>
</div>
</div>
</div>
</section>
<!-- Corporate Wellness: Institutional Branding -->
<section class="px-margin-desktop py-unit-2xl grid grid-cols-1 lg:grid-cols-2 gap-unit-2xl items-center transition-all duration-1000 opacity-100">
<div class="order-2 lg:order-1">
<div class="aspect-square bg-surface-container relative overflow-hidden">
<img alt="Corporate Wellness Environment" class="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPv1NCtdIjM19kxMN54hgZThYaGOC4RP7LuXDsooBzznRHMRtgfUBM85SPT6YHUqAO19JP_XZk9O5a0ZO6hlI4RyXakDJkbXJncr9FQek4aYdv02zlvD5W2mwMKsQ-7EmTxibXVWFmcvMqumWEMTMCQ3UcmNekgTKsQKJUsDWKrpTvuVn5C-6Xgu_QPV9_5hwUjpmVAqKdY19VekC4n-IW61t4FrsZ-nsxlShp9lzQz9E50ovNPvXVNXHenflWsVpjHKheNZlnhvI">
<div class="absolute inset-0 border-[32px] border-white/30"></div>
</div>
</div>
<div class="order-1 lg:order-2 flex flex-col gap-unit-lg">
<span class="text-secondary font-label-lg text-label-lg uppercase tracking-widest">For Institutions</span>
<h2 class="font-headline-lg text-headline-lg text-primary">Corporate Wellness Programs</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">Elevate your workforce with Dr. Ayuba's proprietary "Peak Institutional Performance" framework. We provide evidence-based modules for Fortune 500 leadership teams.</p>
<ul class="flex flex-col gap-unit-sm">
<li class="diamond-bullet font-body-md text-body-md">Biometric Stress Response Training</li>
<li class="diamond-bullet font-body-md text-body-md">Decision-Making Under Asymmetric Information</li>
<li class="diamond-bullet font-body-md text-body-md">Executive Cognitive Longevity Audits</li>
<li class="diamond-bullet font-body-md text-body-md">Sovereign Wealth Management Workshops</li>
</ul>
<button class="w-fit border-b-2 border-primary pb-unit-xs font-label-lg text-label-lg text-primary hover:text-secondary hover:border-secondary transition-all">PARTNERSHIP INQUIRIES</button>
</div>
</section>
<!-- Newsletter Subscription -->
<section class="bg-tertiary-container text-tertiary-fixed py-unit-2xl px-margin-desktop text-center transition-all duration-1000 opacity-100">
<div class="max-w-2xl mx-auto flex flex-col gap-unit-lg">
<h2 class="font-headline-md text-headline-md">The Weekly Dispatch</h2>
<p class="font-body-md text-body-md opacity-80">Join 50,000+ professionals receiving Dr. Ayuba's insights on wisdom, health, and wealth directly in their inbox.</p>
<form class="flex flex-col md:flex-row gap-unit-sm mt-unit-md">
<input class="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:ring-secondary focus:border-secondary rounded-none py-4 px-6 font-body-md" placeholder="Professional Email Address" type="email">
<button class="bg-tertiary-fixed text-on-tertiary-fixed px-unit-2xl py-4 font-label-lg text-label-lg uppercase tracking-widest hover:bg-tertiary-fixed-dim transition-all">Subscribe</button>
</form>
<p class="text-[10px] opacity-40 uppercase tracking-tighter">Your privacy is an institutional priority. Unsubscribe at any time.</p>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-auto bg-primary-container dark:bg-tertiary-container border-t border-outline-variant">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter text-on-primary-container dark:text-tertiary-fixed">
<div class="col-span-1 flex flex-col gap-unit-md">
<img alt="Footer Logo" class="h-10 w-auto object-contain brightness-0 invert opacity-50 self-start" src="/images/Dr_Abuba_Logo_Full-no_bg.png">
<p class="font-body-sm text-body-sm opacity-60">Advancing human excellence through a multi-disciplinary approach to wisdom, health, and economic sovereignty.</p>
</div>
<div class="col-span-1 flex flex-col gap-unit-sm">
<h6 class="font-label-lg text-label-lg text-white uppercase mb-unit-sm">Navigation</h6>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-opacity" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-opacity" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-opacity" href="#">Sitemap</a>
</div>
<div class="col-span-1 flex flex-col gap-unit-sm">
<h6 class="font-label-lg text-label-lg text-white uppercase mb-unit-sm">Institution</h6>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-opacity" href="#">Faculty Directory</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-opacity" href="#">Institutional Research</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-opacity" href="#">Contact Us</a>
</div>
<div class="col-span-1 flex flex-col gap-unit-sm">
<h6 class="font-label-lg text-label-lg text-white uppercase mb-unit-sm">Connect</h6>
<div class="flex gap-unit-md">
<button class="material-symbols-outlined opacity-60 hover:opacity-100">public</button>
<button class="material-symbols-outlined opacity-60 hover:opacity-100">mail</button>
<button class="material-symbols-outlined opacity-60 hover:opacity-100">group</button>
</div>
</div>
<div class="col-span-1 md:col-span-4 border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-unit-md">
<p class="font-body-sm text-body-sm opacity-60">© 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.</p>
<div class="flex gap-unit-lg">
<span class="font-label-md text-label-md uppercase tracking-widest opacity-40">Truth</span>
<span class="font-label-md text-label-md uppercase tracking-widest opacity-40">Vitality</span>
<span class="font-label-md text-label-md uppercase tracking-widest opacity-40">Prosperity</span>
</div>
</div>
</div>
</footer>
<script>
    // Micro-interactions for scrolling reveal
    document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('translate-y-10', 'opacity-0');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('transition-all', 'duration-1000', 'translate-y-10', 'opacity-0');
            observer.observe(section);
        });
    });
</script>



      ` }} />
    </div>
  );
}
