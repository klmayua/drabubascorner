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
      className="bg-surface text-on-surface font-body-md selection:bg-tertiary-fixed selection:text-on-tertiary-fixed" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .archival-border {
            border: 1px solid rgba(0, 3, 15, 0.1);
        }
        .diamond-bullet::before {
            content: "◆";
            color: #ffdf9f;
            font-size: 0.6em;
            margin-right: 12px;
            vertical-align: middle;
        }
        .gold-accent-line {
            height: 2px;
            background: #ffdf9f;
            width: 80px;
        }
    </style>

<!-- TopNavBar Navigation Shell -->
<nav class="w-full top-0 sticky bg-surface dark:bg-surface-container-lowest border-b border-outline-variant dark:border-outline z-50">
<div class="max-w-container-max mx-auto px-margin-desktop flex justify-between items-center h-24">
<div class="flex items-center">
<img alt="Logo" class="h-20 w-auto object-contain" src="/images/Dr_Abuba_Logo_Full-no_bg.png">
</div>
<div class="hidden md:flex items-center gap-unit-lg lg:gap-unit-xl">
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg whitespace-nowrap" href="#">Articles</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg whitespace-nowrap" href="#">Videos</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg whitespace-nowrap" href="#">Podcast</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg whitespace-nowrap" href="#">Community</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg whitespace-nowrap" href="#">Courses</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg whitespace-nowrap" href="#">Marketplace</a>
</div>
<div class="flex items-center gap-unit-md lg:gap-unit-lg">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-all">account_circle</span>
<button class="bg-primary text-on-primary px-unit-lg py-unit-sm font-label-lg text-label-lg hover:bg-opacity-90 transition-all active:scale-95 whitespace-nowrap">Sign In</button>
</div>
</div>
</nav>
<main class="max-w-container-max mx-auto">
<!-- Hero Section: Biography & Manifesto Opening -->
<section class="grid grid-cols-12 gap-gutter px-margin-desktop pt-unit-2xl pb-unit-xl items-end">
<div class="col-span-12 md:col-span-7">
<div class="gold-accent-line mb-unit-lg"></div>
<h1 class="font-display-lg text-display-lg text-primary mb-unit-lg">The Architecture of Intellectual Integrity.</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Dr. Ayuba is not merely an educator, but a custodian of institutional wisdom. His journey is a testament to the pursuit of excellence within the rigorous framework of traditional and modern academia.
            </p>
</div>
<div class="col-span-12 md:col-span-5 relative">
<div class="archival-border p-unit-xs">
<img alt="Dr. Ayuba Portrait" class="w-full grayscale hover:grayscale-0 transition-all duration-700" src="/images/DrAyuba.jpeg">
</div>
<div class="absolute -bottom-8 -left-8 bg-tertiary-container text-tertiary-fixed p-unit-lg archival-border">
<p class="font-label-lg text-label-lg uppercase tracking-widest">Office of the Director</p>
<p class="font-headline-sm text-headline-sm mt-unit-xs">Established 1994</p>
</div>
</div>
</section>
<!-- Academic Foundations: High-Impact Pull Quote -->
<section class="px-margin-desktop py-unit-2xl bg-surface-container-low border-y border-outline-variant">
<div class="max-w-4xl mx-auto text-center">
<span class="material-symbols-outlined text-secondary text-5xl mb-unit-lg" style="font-variation-settings: 'FILL' 1;">format_quote</span>
<blockquote class="font-display-xl text-display-xl text-primary leading-tight italic">
                "True knowledge is the bridge between the heritage of our past and the innovation of our future."
            </blockquote>
<cite class="block mt-unit-xl font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">— Dr. Ayuba, Farawa Inaugural Address</cite>
</div>
</section>
<!-- Institutional Mandate: Asymmetric Academic Timeline -->
<section class="px-margin-desktop py-unit-2xl grid grid-cols-12 gap-gutter">
<div class="col-span-12 md:col-span-4 sticky top-28 self-start">
<h2 class="font-headline-lg text-headline-lg text-primary">Academic Foundations</h2>
<div class="gold-accent-line mt-unit-md mb-unit-lg"></div>
<p class="font-body-md text-body-md text-on-surface-variant">A chronological exploration of the milestones that shaped Dr. Ayuba's institutional philosophy and pedagogy.</p>
</div>
<div class="col-span-12 md:col-start-6 md:col-span-7 space-y-unit-2xl">
<!-- Timeline Item 1 -->
<div class="relative pl-unit-xl border-l-2 border-outline-variant pb-unit-xl">
<div class="absolute -left-2 top-0 w-4 h-4 bg-primary border-4 border-surface"></div>
<span class="font-label-lg text-label-lg text-secondary-fixed-dim bg-secondary-container px-unit-sm py-1 mb-unit-md inline-block">1988 — 1992</span>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">The Formative Dissertation</h3>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    At the Institute of Strategic Studies, Dr. Ayuba pioneered research into systemic institutional collapse and recovery, establishing the frameworks that would later define the Farawa Partnership.
                </p>
</div>
<!-- Timeline Item 2 -->
<div class="relative pl-unit-xl border-l-2 border-outline-variant pb-unit-xl">
<div class="absolute -left-2 top-0 w-4 h-4 bg-primary border-4 border-surface"></div>
<span class="font-label-lg text-label-lg text-secondary-fixed-dim bg-secondary-container px-unit-sm py-1 mb-unit-md inline-block">1995 — 2005</span>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">Founding the Corner</h3>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    The inception of "Dr. Ayuba's Corner" as a digital repository for high-level academic discourse. What began as a faculty internal newsletter evolved into a global community for intellectual exchange.
                </p>
</div>
<!-- Timeline Item 3 -->
<div class="relative pl-unit-xl border-l-2 border-outline-variant">
<div class="absolute -left-2 top-0 w-4 h-4 bg-primary border-4 border-surface"></div>
<span class="font-label-lg text-label-lg text-secondary-fixed-dim bg-secondary-container px-unit-sm py-1 mb-unit-md inline-block">2010 — Present</span>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">Institutional Globalism</h3>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Leading cross-border initiatives to standardize ethical leadership models. Dr. Ayuba currently serves as the Chief Architect of the Global Pedagogy Council.
                </p>
</div>
</div>
</section>
<!-- The Farawa Partnership: Bento Grid Layout -->
<section class="px-margin-desktop py-unit-2xl bg-primary text-on-primary">
<div class="mb-unit-2xl text-center">
<h2 class="font-headline-lg text-headline-lg">The Farawa Partnership</h2>
<p class="font-body-md text-body-md text-on-primary-container max-w-xl mx-auto mt-unit-sm">Our collaboration strategy for large-scale institutional transformation.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-unit-lg h-auto md:h-[600px]">
<!-- Bento Cell 1 -->
<div class="md:row-span-2 bg-surface-container-lowest p-unit-xl flex flex-col justify-between archival-border">
<div>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-md">Strategic Alignment</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Synthesizing institutional goals with measurable academic outcomes using the Ayuba Framework.</p>
</div>
<div class="text-primary mt-unit-xl">
<span class="material-symbols-outlined text-4xl">account_balance</span>
</div>
</div>
<!-- Bento Cell 2 -->
<div class="bg-tertiary-container text-tertiary-fixed p-unit-xl flex flex-col justify-between archival-border">
<h4 class="font-headline-sm text-headline-sm">Pedagogical Rigor</h4>
<span class="material-symbols-outlined text-4xl">school</span>
</div>
<!-- Bento Cell 3 -->
<div class="bg-surface-container-high text-primary p-unit-xl flex flex-col justify-between archival-border">
<h4 class="font-headline-sm text-headline-sm">Research Integrity</h4>
<span class="material-symbols-outlined text-4xl">verified</span>
</div>
<!-- Bento Cell 4 (Double Width) -->
<div class="md:col-span-2 bg-secondary text-on-secondary p-unit-xl flex items-center justify-between archival-border">
<div class="max-w-md">
<h4 class="font-headline-sm text-headline-sm mb-unit-sm">Global Network Access</h4>
<p class="font-body-sm text-body-sm opacity-90">Partners gain exclusive entry to the Faculty Directory and protected Institutional Research databases.</p>
</div>
<button class="border-2 border-on-secondary px-unit-lg py-unit-sm font-label-lg text-label-lg hover:bg-on-secondary hover:text-secondary transition-all">Join the Network</button>
</div>
</div>
</section>
<!-- Manifesto Content: Multi-column Typography -->
<section class="px-margin-desktop py-unit-2xl">
<div class="max-w-5xl mx-auto">
<div class="flex items-center gap-unit-md mb-unit-xl">
<div class="h-[1px] flex-grow bg-outline-variant"></div>
<h2 class="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary whitespace-nowrap">The Manifesto of Institutional Stability</h2>
<div class="h-[1px] flex-grow bg-outline-variant"></div>
</div>
<div class="md:columns-2 gap-unit-2xl">
<p class="font-body-lg text-body-lg text-primary mb-unit-lg leading-relaxed first-letter:text-6xl first-letter:font-headline-lg first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                    We stand at a precipice where information is abundant but wisdom is scarce. The manifesto of this institution is built upon the premise that data without context is noise, and knowledge without ethics is a liability.
                </p>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg leading-relaxed">
                    In the age of rapid digital dissipation, we advocate for "Slow Academia." This is the deliberate process of deep inquiry, peer-reviewed validation, and historical contextualization. We do not chase the ephemeral trends of the market; we define the durable foundations of the mind.
                </p>
<ul class="space-y-unit-md mb-unit-lg">
<li class="diamond-bullet font-label-lg text-label-lg text-primary">Precedence over Expedience</li>
<li class="diamond-bullet font-label-lg text-label-lg text-primary">Substance over Performance</li>
<li class="diamond-bullet font-label-lg text-label-lg text-primary">Continuity over Disruption</li>
</ul>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    The Farawa Partnership is our commitment to these ideals. By bridging the gap between corporate efficiency and academic depth, we create a hybrid model of leadership that is both pragmatic and profound. Every article, course, and podcast produced here is a contribution to this grand architecture of integrity.
                </p>
</div>
<div class="mt-unit-2xl pt-unit-xl border-t border-outline-variant flex justify-between items-center">
<div class="flex items-center gap-unit-md">
<img alt="Signature Logo" class="h-8 opacity-50" src="/images/Dr_Abuba_Logo_Full-no_bg.png">
<span class="font-body-sm text-body-sm italic text-on-surface-variant">Signed, Dr. Ayuba (Director of Academics)</span>
</div>
<div class="flex gap-unit-md">
<span class="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-all">share</span>
<span class="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-all">print</span>
<span class="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-all">download</span>
</div>
</div>
</div>
</section>
</main>
<!-- Footer Shell -->
<footer class="w-full mt-auto bg-primary-container dark:bg-tertiary-container">
<div class="max-w-container-max mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div class="col-span-1 md:col-span-2">
<span class="font-headline-md text-headline-md text-on-primary-container block mb-unit-md">Dr. Ayuba's Corner</span>
<p class="font-body-sm text-body-sm text-on-primary-container opacity-70 max-w-sm mb-unit-lg">
                Dedicated to the preservation of institutional knowledge and the advancement of high-level academic research.
            </p>
<div class="flex gap-unit-md">
<span class="material-symbols-outlined text-tertiary-fixed cursor-pointer">public</span>
<span class="material-symbols-outlined text-tertiary-fixed cursor-pointer">history_edu</span>
<span class="material-symbols-outlined text-tertiary-fixed cursor-pointer">local_library</span>
</div>
</div>
<div class="col-span-1">
<h5 class="font-label-lg text-label-lg text-on-primary-container uppercase tracking-widest mb-unit-lg">The Institution</h5>
<ul class="space-y-unit-sm">
<li class=""><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Faculty Directory</a></li>
<li class=""><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Institutional Research</a></li>
<li class=""><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Sitemap</a></li>
</ul>
</div>
<div class="col-span-1">
<h5 class="font-label-lg text-label-lg text-on-primary-container uppercase tracking-widest mb-unit-lg">Legal &amp; Ethics</h5>
<ul class="space-y-unit-sm">
<li class=""><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a></li>
<li class=""><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a></li>
<li class=""><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Contact Us</a></li>
</ul>
</div>
<div class="col-span-1 md:col-span-4 pt-12 border-t border-outline-variant mt-unit-xl">
<p class="font-body-sm text-body-sm text-on-primary-container text-center opacity-60">
                © 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.
            </p>
</div>
</div>
</footer>
<script>
    // Subtle interaction: Parallax effect for the hero image
    window.addEventListener('scroll', () => {
        const scrollPos = window.pageYOffset;
        const heroImg = document.querySelector('img[src*="AB6AXuDpGvy3R1FdeCWkSFt0yc6YRRy9Ov6rDfXYKxBWZqagkWBKPvdYQIT_0ssGazo2wA6eqvRDLgsVDddDZr7pR5NoZc7fEaxRKO9hrNjwfcODrIgOkSTSLHzKWPyCo86Gz_Zr4OhauOtJf-Hgf1fyZCu6116bk1QrzA-daHu7xT93PNLnwiW89jl3AiMa10uWMZG9H3I1qn99ZtXMi9P9aLeS3HyeRUgBcAuTReLDk1T-euTwjoATiDc0WC4CPbEtgFGE9M1gmr14dVg"]');
        if(heroImg) {
            heroImg.style.transform = \`translateY(\${scrollPos * 0.05}px)\`;
        }
    });

    // Hover micro-interaction for bento grid cards
    const cards = document.querySelectorAll('.archival-border');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(0, 3, 15, 0.4)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(0, 3, 15, 0.1)';
        });
    });
</script>



      ` }} />
    </div>
  );
}
