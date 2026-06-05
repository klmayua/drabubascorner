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
      className="bg-background text-on-background font-body-md overflow-x-hidden" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                "tertiary-fixed": "#ffdf9f",
                "secondary-fixed-dim": "#acd287",
                "on-secondary-fixed": "#0d2000",
                "secondary-fixed": "#c7efa1",
                "on-surface-variant": "#44474d",
                "primary": "#00030f",
                "error-container": "#ffdad6",
                "surface-dim": "#d9dadb",
                "surface-container-high": "#e7e8e9",
                "on-primary-fixed": "#091b38",
                "on-primary-fixed-variant": "#374766",
                "background": "#f8f9fa",
                "surface-container-lowest": "#ffffff",
                "tertiary": "#050300",
                "on-tertiary": "#ffffff",
                "primary-fixed-dim": "#b6c7ec",
                "outline": "#75777e",
                "surface-variant": "#e1e3e4",
                "surface-container": "#edeeef",
                "surface-container-low": "#f3f4f5",
                "surface-tint": "#4f5e7f",
                "surface": "#f8f9fa",
                "primary-container": "#0b1d3a",
                "on-tertiary-container": "#a87f0f",
                "on-primary": "#ffffff",
                "primary-fixed": "#d7e2ff",
                "outline-variant": "#c5c6ce",
                "on-secondary-fixed-variant": "#304f13",
                "tertiary-container": "#281b00",
                "on-surface": "#191c1d",
                "on-secondary": "#ffffff",
                "surface-bright": "#f8f9fa",
                "inverse-on-surface": "#f0f1f2",
                "tertiary-fixed-dim": "#f1bf51",
                "on-background": "#191c1d",
                "on-primary-container": "#7585a8",
                "on-error-container": "#93000a",
                "surface-container-highest": "#e1e3e4",
                "on-error": "#ffffff",
                "inverse-surface": "#2e3132",
                "on-tertiary-fixed-variant": "#5c4300"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "unit-sm": "8px",
                "unit-md": "16px",
                "margin-desktop": "80px",
                "gutter": "32px",
                "unit-xl": "48px",
                "unit-lg": "24px",
                "container-max": "1440px",
                "unit-2xl": "80px",
                "unit-xs": "4px"
            },
            "fontFamily": {
                "body-lg": ["Inter"],
                "headline-lg": ["Playfair Display"],
                "body-sm": ["Inter"],
                "headline-md": ["Playfair Display"],
                "display-xl": ["Playfair Display"],
                "body-md": ["Inter"],
                "label-md": ["Inter"],
                "label-lg": ["Inter"],
                "display-lg": ["Playfair Display"],
                "headline-sm": ["Playfair Display"]
            },
            "fontSize": {
                "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}],
                "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
                "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}]
            }
          }
        }
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .diamond-bullet::before {
            content: "◆";
            color: #ffdf9f; /* tertiary-fixed (Gold) */
            margin-right: 12px;
            font-size: 0.8em;
        }
        .glass-effect {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }
    </style>

<!-- Top Navigation Bar -->
<header class="bg-surface sticky top-0 z-50 w-full border-b border-outline-variant">
<nav class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-20">
<!-- Brand Logo ONLY (Requested) -->
<div class="h-14 flex items-center">
<img alt="Dr. Ayuba Logo" class="h-full w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc2Ze4CKaGLlVEBnyPeTpDdxU7gyvgTOPE7ai2ZXKMmHmBY7iX_Af-LarE-eY46A9B3ftXxdiWp2w-D7v8V58nh1wGy9dsf_YdH1-_d2NQGWirazMvlwSAxD_-rcHcJ9BN225CWlivWisVNe2Lc1OKjGNRKotaJuPDlIMyVyrwwAZ0po2Qn7_5_YUYke1tKvrmGEI1OaVMLp1X08r7FA5ls3_RGLYSvRGJxKSwLzBoDBENYt4gd9nFf4_3JQrnXzA-gzKElwtmfY4"/>
</div>
<!-- Navigation Links -->
<div class="hidden md:flex gap-unit-xl items-center">
<a class="font-label-lg text-label-lg text-primary border-b-2 border-tertiary-fixed font-bold pb-1" href="#">Courses</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Articles</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Videos</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Podcast</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Community</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Marketplace</a>
</div>
<!-- Actions -->
<div class="flex items-center gap-unit-md">
<button class="font-label-lg text-label-lg text-primary px-4 py-2 hover:bg-surface-container-high transition-all active:scale-95">Sign In</button>
<span class="material-symbols-outlined text-primary cursor-pointer" data-icon="account_circle">account_circle</span>
</div>
</nav>
</header>
<main class="w-full">
<!-- Hero Section: Editorial Quality -->
<section class="relative w-full py-unit-2xl bg-primary-container overflow-hidden">
<div class="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-12 items-center gap-gutter relative z-10">
<div class="col-span-12 lg:col-span-8">
<span class="font-label-lg text-label-lg text-tertiary-fixed tracking-widest uppercase mb-unit-sm block">Institutional Excellence</span>
<h1 class="font-display-xl text-display-xl text-white mb-unit-lg">The Nexus of Well-being &amp; Executive Leadership</h1>
<p class="font-body-lg text-body-lg text-on-primary-container max-w-2xl mb-unit-xl">
                        Empowering global institutions through data-driven vitality audits and strategic governance. We redefine the corporate ethos for the elite professional.
                    </p>
<div class="flex gap-unit-md">
<button class="bg-white text-primary px-8 py-4 font-label-lg text-label-lg rounded-DEFAULT hover:bg-tertiary-fixed transition-colors">Begin Institutional Audit</button>
<button class="border border-white text-white px-8 py-4 font-label-lg text-label-lg rounded-DEFAULT hover:bg-white/10 transition-colors">Download Brochure</button>
</div>
</div>
</div>
<!-- Background Decorative Element -->
<div class="absolute right-0 top-0 w-1/3 h-full opacity-20 hidden lg:block">
<div class="w-full h-full bg-gradient-to-l from-tertiary-fixed to-transparent"></div>
</div>
</section>
<!-- Metrics Dashboard: High Fidelity Metrics -->
<section class="max-w-[1440px] mx-auto px-margin-desktop -mt-unit-xl relative z-20">
<div class="grid grid-cols-12 gap-gutter">
<div class="col-span-12 lg:col-span-4 bg-white border border-outline-variant p-unit-lg shadow-sm">
<p class="font-label-md text-label-md text-on-surface-variant uppercase mb-unit-xs">Resilience Score</p>
<h3 class="font-headline-md text-headline-md text-primary">+42%</h3>
<p class="font-body-sm text-body-sm text-secondary font-semibold">Post-Program Retention</p>
<div class="w-full h-1 bg-surface-container mt-unit-md">
<div class="h-full bg-secondary w-[85%]"></div>
</div>
</div>
<div class="col-span-12 lg:col-span-4 bg-white border border-outline-variant p-unit-lg shadow-sm">
<p class="font-label-md text-label-md text-on-surface-variant uppercase mb-unit-xs">Executive Vitality</p>
<h3 class="font-headline-md text-headline-md text-primary">8.4<span class="text-label-lg">/10</span></h3>
<p class="font-body-sm text-body-sm text-secondary font-semibold">Average Institutional Index</p>
<div class="w-full h-1 bg-surface-container mt-unit-md">
<div class="h-full bg-tertiary-fixed w-[70%]"></div>
</div>
</div>
<div class="col-span-12 lg:col-span-4 bg-white border border-outline-variant p-unit-lg shadow-sm">
<p class="font-label-md text-label-md text-on-surface-variant uppercase mb-unit-xs">Engagement ROI</p>
<h3 class="font-headline-md text-headline-md text-primary">$2.4M</h3>
<p class="font-body-sm text-body-sm text-secondary font-semibold">Calculated Annual Savings</p>
<div class="w-full h-1 bg-surface-container mt-unit-md">
<div class="h-full bg-primary w-[92%]"></div>
</div>
</div>
</div>
</section>
<!-- Institutional Services Section (12-column details) -->
<section class="py-unit-2xl max-w-[1440px] mx-auto px-margin-desktop">
<div class="mb-unit-xl">
<h2 class="font-headline-lg text-headline-lg text-primary text-center">Core Strategic Pillars</h2>
<div class="w-24 h-1 bg-tertiary-fixed mx-auto mt-unit-sm"></div>
</div>
<div class="grid grid-cols-12 gap-gutter items-stretch">
<!-- Service 1 -->
<div class="col-span-12 md:col-span-4 flex flex-col border border-outline-variant bg-white p-unit-xl hover:bg-surface-container-low transition-colors duration-300">
<span class="material-symbols-outlined text-secondary text-5xl mb-unit-md" data-icon="clinical_notes">clinical_notes</span>
<h3 class="font-headline-sm text-headline-sm mb-unit-md">Executive Vitality Audits</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg flex-grow">
                        A proprietary diagnostic framework evaluating physiological, mental, and environmental markers of executive performance. 
                    </p>
<ul class="space-y-unit-sm mb-unit-lg">
<li class="diamond-bullet font-label-lg text-label-lg">Biometric Baselines</li>
<li class="diamond-bullet font-label-lg text-label-lg">Decision Fatigue Analysis</li>
<li class="diamond-bullet font-label-lg text-label-lg">Cognitive Load Mapping</li>
</ul>
<button class="w-fit text-primary font-label-lg text-label-lg border-b border-primary hover:text-tertiary-fixed hover:border-tertiary-fixed transition-all">Service Protocols</button>
</div>
<!-- Service 2 -->
<div class="col-span-12 md:col-span-4 flex flex-col border border-outline-variant bg-white p-unit-xl hover:bg-surface-container-low transition-colors duration-300">
<span class="material-symbols-outlined text-secondary text-5xl mb-unit-md" data-icon="groups_3">groups_3</span>
<h3 class="font-headline-sm text-headline-sm mb-unit-md">Institutional Resilience Workshops</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg flex-grow">
                        Immersive training modules designed to foster systemic stability and psychological safety within hierarchical structures.
                    </p>
<ul class="space-y-unit-sm mb-unit-lg">
<li class="diamond-bullet font-label-lg text-label-lg">Crisis Communication</li>
<li class="diamond-bullet font-label-lg text-label-lg">Culture Synergy Audits</li>
<li class="diamond-bullet font-label-lg text-label-lg">Stress De-escalation</li>
</ul>
<button class="w-fit text-primary font-label-lg text-label-lg border-b border-primary hover:text-tertiary-fixed hover:border-tertiary-fixed transition-all">Workshop Syllabus</button>
</div>
<!-- Service 3 -->
<div class="col-span-12 md:col-span-4 flex flex-col border border-outline-variant bg-white p-unit-xl hover:bg-surface-container-low transition-colors duration-300">
<span class="material-symbols-outlined text-secondary text-5xl mb-unit-md" data-icon="account_balance">account_balance</span>
<h3 class="font-headline-sm text-headline-sm mb-unit-md">Strategic Governance Consulting</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg flex-grow">
                        Bespoke advisory for boards and senior leadership to integrate human-centric health policies into corporate bylaws.
                    </p>
<ul class="space-y-unit-sm mb-unit-lg">
<li class="diamond-bullet font-label-lg text-label-lg">Policy Integration</li>
<li class="diamond-bullet font-label-lg text-label-lg">ESG Wellness Alignment</li>
<li class="diamond-bullet font-label-lg text-label-lg">Risk Mitigation Strategy</li>
</ul>
<button class="w-fit text-primary font-label-lg text-label-lg border-b border-primary hover:text-tertiary-fixed hover:border-tertiary-fixed transition-all">Consulting Scope</button>
</div>
</div>
</section>
<!-- Founder's Vision Section -->
<section class="bg-surface-container-low py-unit-2xl border-y border-outline-variant">
<div class="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-12 gap-gutter items-center">
<div class="col-span-12 md:col-span-5 relative">
<div class="absolute -top-4 -left-4 w-full h-full border border-tertiary-fixed"></div>
<img alt="Dr. Ayuba Portrait" class="relative z-10 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" data-alt="A dignified and authoritative portrait of Dr. Ayuba, a middle-aged academic professional with a wise and calm expression. He is wearing a sophisticated dark navy tailored suit in a modern institutional setting with soft, ambient lighting. The background is a minimalist office with subtle wooden accents and a soft-focus library. The overall mood is one of prestige, intellectual depth, and serene leadership, perfectly matching a high-end corporate wellness aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjr8D6N8FCOrUy-eeDS3UInWS8BkldGextNgmOg6nO8LghbDcMDe7GwAPM8HFWgNMIV8lIDTYFEW_B0ZD_BOiICqhXjyua-Y_Y9-KqtD35ND_WmDmrp7fn0Q13H2mnr5yAr88AH_L4_XYptY_xp0jAi8BjU7R2YRihGyPjwjtfJSjLy5hMhCyF3di1nADO7Fj1CLvyUdQ40rrlAwJbMBtgFn5b_IatxepNkkhiw8jb6bH5DiCxYQO8d0lFvTErg-joXG39PG1nz9A"/>
</div>
<div class="col-span-12 md:col-span-7 pl-0 md:pl-unit-xl">
<span class="font-label-lg text-label-lg text-secondary tracking-widest uppercase mb-unit-sm block">Founder's Vision</span>
<h2 class="font-headline-lg text-headline-lg text-primary mb-unit-lg italic font-normal">"Wellness is not a luxury; it is the fundamental infrastructure of sustainable leadership."</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-unit-md leading-relaxed">
                        Dr. Ayuba has spent over two decades at the intersection of medical science and corporate strategy. His mission is to dismantle the 'burnout culture' of the modern institution and replace it with a paradigm of revitalized high-performance governance.
                    </p>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-xl">
                        By integrating rigorous scientific audits with strategic advisory, we provide institutions with the blueprint for longevity in a volatile global market.
                    </p>
<div class="flex items-center gap-unit-md">
<div class="w-12 h-px bg-primary"></div>
<span class="font-headline-sm text-headline-sm text-primary">Dr. Ayuba</span>
</div>
</div>
</div>
</section>
<!-- RFP Module: Request for Proposal -->
<section class="py-unit-2xl max-w-[1440px] mx-auto px-margin-desktop">
<div class="bg-primary-container p-unit-2xl grid grid-cols-12 gap-gutter">
<div class="col-span-12 lg:col-span-5 text-white">
<h2 class="font-headline-lg text-headline-lg mb-unit-md">Engage Our Faculty</h2>
<p class="font-body-md text-body-md text-on-primary-container mb-unit-xl">
                        Initiate a formal Request for Proposal (RFP). Our institutional liaisons will provide a comprehensive project scope and technical breakdown within 72 hours.
                    </p>
<div class="space-y-unit-md">
<div class="flex items-center gap-unit-md">
<span class="material-symbols-outlined text-tertiary-fixed" data-icon="mail">mail</span>
<span class="font-body-md">rfp@drayubacorner.edu</span>
</div>
<div class="flex items-center gap-unit-md">
<span class="material-symbols-outlined text-tertiary-fixed" data-icon="call">call</span>
<span class="font-body-md">+1 (800) ACADEMIC</span>
</div>
</div>
</div>
<div class="col-span-12 lg:col-span-7 bg-white p-unit-xl">
<form class="grid grid-cols-2 gap-unit-md">
<div class="col-span-2 md:col-span-1">
<label class="font-label-lg text-label-lg text-primary block mb-2">Full Name</label>
<input class="w-full border-outline-variant focus:border-primary focus:ring-0 p-3 rounded-none" placeholder="Executive Name" type="text"/>
</div>
<div class="col-span-2 md:col-span-1">
<label class="font-label-lg text-label-lg text-primary block mb-2">Institutional Email</label>
<input class="w-full border-outline-variant focus:border-primary focus:ring-0 p-3 rounded-none" placeholder="name@company.com" type="email"/>
</div>
<div class="col-span-2">
<label class="font-label-lg text-label-lg text-primary block mb-2">Organization</label>
<input class="w-full border-outline-variant focus:border-primary focus:ring-0 p-3 rounded-none" placeholder="Corporation / Institution Name" type="text"/>
</div>
<div class="col-span-2">
<label class="font-label-lg text-label-lg text-primary block mb-2">Service of Interest</label>
<select class="w-full border-outline-variant focus:border-primary focus:ring-0 p-3 rounded-none">
<option>Executive Vitality Audit</option>
<option>Resilience Workshop</option>
<option>Governance Consulting</option>
<option>Comprehensive Program</option>
</select>
</div>
<div class="col-span-2">
<label class="font-label-lg text-label-lg text-primary block mb-2">Project Brief</label>
<textarea class="w-full border-outline-variant focus:border-primary focus:ring-0 p-3 rounded-none" placeholder="Describe your institutional objectives..." rows="4"></textarea>
</div>
<div class="col-span-2">
<button class="w-full bg-primary text-white py-4 font-label-lg text-label-lg hover:bg-tertiary-container transition-all" type="submit">Submit RFP Application</button>
</div>
</form>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-primary-container text-on-primary-container border-t border-outline-variant">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div class="col-span-1">
<h3 class="font-headline-md text-headline-md text-on-primary-container mb-unit-md">Dr. Ayuba</h3>
<p class="font-body-sm text-body-sm opacity-80">Empowering institutional leadership through science and strategy.</p>
</div>
<div class="col-span-1">
<h4 class="font-label-lg text-label-lg text-tertiary-fixed mb-4">Navigation</h4>
<ul class="space-y-2">
<li><a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a></li>
<li><a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a></li>
<li><a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 transition-opacity" href="#">Faculty Directory</a></li>
</ul>
</div>
<div class="col-span-1">
<h4 class="font-label-lg text-label-lg text-tertiary-fixed mb-4">Resources</h4>
<ul class="space-y-2">
<li><a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 transition-opacity" href="#">Institutional Research</a></li>
<li><a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 transition-opacity" href="#">Contact Us</a></li>
<li><a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 transition-opacity" href="#">Sitemap</a></li>
</ul>
</div>
<div class="col-span-1">
<h4 class="font-label-lg text-label-lg text-tertiary-fixed mb-4">Newsletter</h4>
<div class="flex">
<input class="bg-white/10 border-none text-white p-2 w-full focus:ring-1 focus:ring-tertiary-fixed" placeholder="Email" type="text"/>
<button class="bg-tertiary-fixed text-on-tertiary-fixed p-2"><span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span></button>
</div>
</div>
</div>
<div class="max-w-[1440px] mx-auto px-margin-desktop py-6 border-t border-white/10 flex justify-between items-center">
<p class="font-body-sm text-body-sm opacity-60">© 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.</p>
<div class="flex gap-4">
<span class="material-symbols-outlined opacity-60 hover:opacity-100 cursor-pointer" data-icon="share">share</span>
<span class="material-symbols-outlined opacity-60 hover:opacity-100 cursor-pointer" data-icon="language">language</span>
</div>
</div>
</footer>
<script>
        // Micro-interaction for RFP Button
        const rfpForm = document.querySelector('form');
        if(rfpForm) {
            rfpForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button');
                btn.innerHTML = 'Request Transmitted...';
                btn.classList.add('bg-secondary');
                setTimeout(() => {
                    btn.innerHTML = 'Submit RFP Application';
                    btn.classList.remove('bg-secondary');
                    rfpForm.reset();
                }, 3000);
            });
        }
    </script>

      ` }} />
    </div>
  );
}
