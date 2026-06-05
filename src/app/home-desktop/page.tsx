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
      className="font-body-md text-body-md antialiased" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&amp;family=Inter:wght@300;400;500;600;700&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;family=Playfair+Display:wght@100..900&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-tertiary-container": "#a87f0f",
                    "tertiary-fixed-dim": "#f1bf51",
                    "secondary": "#476729",
                    "primary": "#00030f",
                    "on-tertiary-fixed-variant": "#5c4300",
                    "on-secondary-fixed-variant": "#304f13",
                    "on-tertiary": "#ffffff",
                    "primary-fixed-dim": "#b6c7ec",
                    "on-surface": "#191c1d",
                    "on-error-container": "#93000a",
                    "on-secondary-fixed": "#0d2000",
                    "background": "#f8f9fa",
                    "on-secondary-container": "#4c6e2e",
                    "outline": "#75777e",
                    "surface-variant": "#e1e3e4",
                    "on-error": "#ffffff",
                    "error-container": "#ffdad6",
                    "inverse-surface": "#2e3132",
                    "tertiary-fixed": "#ffdf9f",
                    "surface-bright": "#f8f9fa",
                    "on-primary-fixed-variant": "#374766",
                    "on-background": "#191c1d",
                    "surface-container-low": "#f3f4f5",
                    "surface-container-lowest": "#ffffff",
                    "secondary-fixed": "#c7efa1",
                    "surface-dim": "#d9dadb",
                    "on-tertiary-fixed": "#261a00",
                    "on-surface-variant": "#44474d",
                    "tertiary": "#050300",
                    "surface": "#f8f9fa",
                    "on-secondary": "#ffffff",
                    "outline-variant": "#c5c6ce",
                    "on-primary-container": "#7585a8",
                    "error": "#ba1a1a",
                    "on-primary-fixed": "#091b38",
                    "inverse-primary": "#b6c7ec",
                    "surface-container": "#edeeef",
                    "on-primary": "#ffffff",
                    "tertiary-container": "#281b00",
                    "secondary-fixed-dim": "#acd287",
                    "inverse-on-surface": "#f0f1f2",
                    "surface-tint": "#4f5e7f",
                    "surface-container-highest": "#e1e3e4",
                    "primary-container": "#0b1d3a",
                    "primary-fixed": "#d7e2ff",
                    "surface-container-high": "#e7e8e9",
                    "secondary-container": "#c7efa1"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "unit-xl": "48px",
                    "gutter": "32px",
                    "unit-sm": "8px",
                    "margin-desktop": "80px",
                    "unit-2xl": "80px",
                    "unit-md": "16px",
                    "container-max": "1440px",
                    "unit-lg": "24px",
                    "unit-xs": "4px"
            },
            "fontFamily": {
                    "label-lg": ["Inter"],
                    "display-lg": ["Playfair Display"],
                    "headline-sm": ["Playfair Display"],
                    "label-md": ["Inter"],
                    "headline-md": ["Playfair Display"],
                    "body-md": ["Inter"],
                    "body-lg": ["Inter"],
                    "headline-lg": ["Playfair Display"],
                    "body-sm": ["Inter"],
                    "display-xl": ["Playfair Display"]
            },
            "fontSize": {
                    "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                    "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                    "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
                    "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                    "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}],
                    "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                    "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
            }
          },
        },
      }
    </script>
<style>
        body {
            background-color: #f8f9fa;
            color: #00030f;
            overflow-x: hidden;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .pillar-card:hover .pillar-icon {
            transform: scale(1.1) rotate(5deg);
        }
        .archival-border {
            border-left: 1px solid rgba(11, 29, 58, 0.1);
        }
        .gold-accent {
            color: #C79A2E;
        }
    </style>

<!-- Top Navigation Bar -->
<header class="bg-surface sticky top-0 z-50 border-b border-outline-variant">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-unit-xl">
<!-- Brand Logo ONLY (As per instructions) -->
<div class="flex items-center">
<img alt="Dr. Ayuba's Corner Brand Identity" class="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDENLhhxvf-P08Pi6QdE05TwTtFforhOIWSnrnhHjAhYFJ8B_6HUinOZ-ojpFgd8T2C6vaOquhrEJVm5zTB1roSHn-z92BfiekROkey0S_LqQWCrpEHSCNCC3CQCT2otm8jSy566xoZPQKO7z1ZPNweIAuzIMsD6I1Q1jFJHZJGxVpExEkv3FL-2FdjZxXZTtgYebI3Joj6aueNmMcAs0iV84ifQYr98_Mf5rdaUtoMg_COKvU1yvn9AwvT0rbdpQOObUADNodxwG4"/>
</div>
<!-- Navigation Links -->
<nav class="hidden md:flex gap-unit-lg items-center">
<a class="font-label-lg text-label-lg text-primary border-b-2 border-on-tertiary-container pb-1 cursor-pointer transition-all duration-300" href="#">Research</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer" href="#">Publications</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer" href="#">Lectures</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer" href="#">Archives</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer" href="#">Consultancy</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer" href="#">Contact</a>
</nav>
<!-- Actions -->
<div class="flex items-center gap-unit-md text-primary">
<span class="material-symbols-outlined cursor-pointer hover:text-on-tertiary-container transition-colors">search</span>
<span class="material-symbols-outlined cursor-pointer hover:text-on-tertiary-container transition-colors">account_circle</span>
</div>
</div>
</header>
<main>
<!-- Hero Section -->
<section class="relative bg-surface-container-lowest overflow-hidden">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
<div class="md:col-span-7 space-y-unit-lg">
<div class="inline-flex items-center gap-unit-xs">
<span class="h-[1px] w-12 bg-on-tertiary-container"></span>
<span class="font-label-lg text-label-lg tracking-widest text-on-tertiary-container uppercase">Scholarly Excellence</span>
</div>
<h1 class="font-display-xl text-display-xl text-primary leading-tight">
                        Better Wisdom, <br/>
<span class="italic font-light">Better Health,</span> <br/>
                        Better Wealth.
                    </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                        A multidimensional corner dedicated to the synthesis of academic rigor and practical enlightenment. Dr. Ayuba provides the intellectual framework for a balanced life of prosperity and wellness.
                    </p>
<div class="pt-unit-md flex gap-unit-md">
<button class="bg-primary-container text-on-primary px-unit-lg py-unit-sm font-label-lg text-label-lg hover:bg-primary transition-all shadow-sm">
                            EXPLORE THE ARCHIVE
                        </button>
<button class="border border-on-tertiary-container text-on-tertiary-container px-unit-lg py-unit-sm font-label-lg text-label-lg hover:bg-on-tertiary-container hover:text-white transition-all">
                            LATEST RESEARCH
                        </button>
</div>
</div>
<div class="md:col-span-5 relative group">
<div class="absolute -inset-4 border border-outline-variant opacity-20 group-hover:opacity-100 transition-opacity duration-700"></div>
<div class="bg-surface-container-high p-4 relative z-10 overflow-hidden shadow-sm">
<img alt="Portrait of Dr. Ayuba" class="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-[1.02]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCORAmHqjpWvGp9m9SqFMTGo0BINXTw8aZwHCnVT0Xoq4VbxBlj5kZCLCT46SQcHaa28SnaYkRzCVTIWrlPawXtDdfvgU-x-3XUraeYqUYHl01bLiSguM3NxAHdYC0EMHjfr_Ketr0rl3n-IGB2H9VsSbA3jRxNcaXPDIcAubYUXRKr0a5cGrxmxmHqBIe8AOmc5QRTqle6FApalJdz4Ixx7yU5IDliY4SgxtERqG55BMh9ij2Trxgz6V1qBFzq-qjxT0GfJP_097s"/>
</div>
<div class="absolute -bottom-8 -left-8 bg-on-tertiary-container text-white p-unit-md shadow-xl max-w-[240px]">
<p class="font-label-lg text-label-lg mb-1 italic">"True wealth is the harmony of body, mind, and estate."</p>
<p class="text-xs tracking-widest uppercase opacity-80">— Dr. Ayuba</p>
</div>
</div>
</div>
</section>
<!-- The Three Institutional Pillars -->
<section class="bg-primary py-unit-2xl">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<div class="text-center mb-unit-2xl">
<h2 class="font-headline-lg text-headline-lg text-on-primary mb-unit-sm">The Three Pillars</h2>
<div class="h-1 w-24 bg-on-tertiary-container mx-auto"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Wisdom Pillar -->
<div class="pillar-card group border border-on-primary-container p-unit-xl hover:bg-primary-container transition-all duration-500 cursor-default">
<div class="pillar-icon mb-unit-lg text-on-tertiary-container transition-transform duration-500">
<span class="material-symbols-outlined text-[48px]">auto_stories</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-primary mb-unit-md">Wisdom</h3>
<p class="font-body-md text-body-md text-on-primary-container mb-unit-lg">The cornerstone of intellectual depth. We explore the historical precedents and philosophical foundations that inform modern strategy.</p>
<a class="text-on-tertiary-container font-label-lg text-label-lg group-hover:underline flex items-center gap-2" href="#">
                            EXPAND KNOWLEDGE <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<!-- Health Pillar -->
<div class="pillar-card group border border-on-primary-container p-unit-xl hover:bg-primary-container transition-all duration-500 cursor-default">
<div class="pillar-icon mb-unit-lg text-on-tertiary-container transition-transform duration-500">
<span class="material-symbols-outlined text-[48px]">clinical_notes</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-primary mb-unit-md">Health</h3>
<p class="font-body-md text-body-md text-on-primary-container mb-unit-lg">Scientific integrity meets holistic vitality. Our research focuses on longevity, peak performance, and data-driven wellness protocols.</p>
<a class="text-on-tertiary-container font-label-lg text-label-lg group-hover:underline flex items-center gap-2" href="#">
                            VIEW PROTOCOLS <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<!-- Wealth Pillar -->
<div class="pillar-card group border border-on-primary-container p-unit-xl hover:bg-primary-container transition-all duration-500 cursor-default">
<div class="pillar-icon mb-unit-lg text-on-tertiary-container transition-transform duration-500">
<span class="material-symbols-outlined text-[48px]">account_balance</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-primary mb-unit-md">Wealth</h3>
<p class="font-body-md text-body-md text-on-primary-container mb-unit-lg">Institutional grade financial insights. Bridging the gap between traditional asset management and the future of global economics.</p>
<a class="text-on-tertiary-container font-label-lg text-label-lg group-hover:underline flex items-center gap-2" href="#">
                            ANALYZE TRENDS <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
<!-- Corner Archive Section -->
<section class="py-unit-2xl bg-surface-container-low">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<div class="flex flex-col md:flex-row justify-between items-end mb-unit-2xl border-b border-outline-variant pb-unit-md">
<div>
<span class="font-label-lg text-label-lg text-on-tertiary-container tracking-widest uppercase">The Scholarly Collection</span>
<h2 class="font-headline-lg text-headline-lg text-primary mt-2">Corner Archive</h2>
</div>
<a class="hidden md:flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-on-tertiary-container transition-colors" href="#">
                        VIEW FULL DIRECTORY <span class="material-symbols-outlined">menu_book</span>
</a>
</div>
<!-- Archive Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Featured Article -->
<div class="md:col-span-8 bg-white border border-outline-variant p-unit-lg flex flex-col justify-between group cursor-pointer hover:shadow-md transition-shadow">
<div class="flex justify-between items-start mb-unit-lg">
<span class="px-unit-sm py-1 bg-secondary-container text-on-secondary-container font-label-md text-label-md">FEATURED RESEARCH</span>
<span class="font-label-md text-label-md text-on-surface-variant italic">Vol. 14, Issue 2</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-sm group-hover:text-on-tertiary-container transition-colors">The Epistemology of Financial Resilience in Emerging Markets</h3>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-unit-lg">
                                This scholarly review investigates the underlying psychological and structural factors that contribute to economic stability within volatile landscapes. Drawing from both historical data and contemporary behavioral economics.
                            </p>
</div>
<div class="flex items-center justify-between border-t border-outline-variant pt-unit-md">
<div class="flex items-center gap-unit-md">
<div class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center">
<span class="material-symbols-outlined text-sm">person</span>
</div>
<span class="font-label-lg text-label-lg">Dr. Ayuba &amp; Academic Cohort</span>
</div>
<span class="material-symbols-outlined text-on-tertiary-container">bookmark</span>
</div>
</div>
<!-- Sidebar Articles -->
<div class="md:col-span-4 flex flex-col gap-unit-lg">
<div class="p-unit-lg border border-outline-variant bg-white hover:border-on-tertiary-container transition-colors cursor-pointer group">
<span class="font-label-md text-label-md text-on-tertiary-container">HEALTH | LONGEVITY</span>
<h4 class="font-headline-sm text-headline-sm text-primary text-[22px] mt-1 group-hover:text-on-tertiary-container">Cellular Optimization Protocols</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-2">A data-driven approach to metabolic restoration...</p>
</div>
<div class="p-unit-lg border border-outline-variant bg-white hover:border-on-tertiary-container transition-colors cursor-pointer group">
<span class="font-label-md text-label-md text-on-tertiary-container">WISDOM | LEADERSHIP</span>
<h4 class="font-headline-sm text-headline-sm text-primary text-[22px] mt-1 group-hover:text-on-tertiary-container">The Stoic Executive</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-2">Applying classical philosophy to modern governance...</p>
</div>
<div class="p-unit-lg border border-outline-variant bg-white hover:border-on-tertiary-container transition-colors cursor-pointer group">
<span class="font-label-md text-label-md text-on-tertiary-container">WEALTH | TECHNOLOGY</span>
<h4 class="font-headline-sm text-headline-sm text-primary text-[22px] mt-1 group-hover:text-on-tertiary-container">Decentralized Foundations</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-2">Examining the core principles of sovereign wealth...</p>
</div>
</div>
</div>
</div>
</section>
<!-- Newsletter / Institutional Access -->
<section class="bg-primary-container py-unit-2xl relative overflow-hidden">
<div class="absolute inset-0 opacity-10 pointer-events-none">
<div class="grid grid-cols-12 h-full w-full">
<div class="border-r border-white/20 h-full"></div>
<div class="border-r border-white/20 h-full"></div>
<div class="border-r border-white/20 h-full"></div>
<div class="border-r border-white/20 h-full"></div>
<div class="border-r border-white/20 h-full"></div>
<div class="border-r border-white/20 h-full"></div>
<div class="border-r border-white/20 h-full"></div>
<div class="border-r border-white/20 h-full"></div>
<div class="border-r border-white/20 h-full"></div>
<div class="border-r border-white/20 h-full"></div>
<div class="border-r border-white/20 h-full"></div>
</div>
</div>
<div class="max-w-[1440px] mx-auto px-margin-desktop relative z-10 text-center">
<div class="max-w-2xl mx-auto">
<span class="font-label-lg text-label-lg text-on-tertiary-container uppercase tracking-widest">Global Correspondence</span>
<h2 class="font-headline-lg text-headline-lg text-on-primary mt-unit-sm mb-unit-lg">Institutional Access</h2>
<p class="font-body-lg text-body-lg text-on-primary-container mb-unit-xl">
                        Subscribe to receive periodic scholarly updates, research summaries, and private lecture invitations directly from the Corner.
                    </p>
<form class="flex flex-col md:flex-row gap-unit-md">
<input class="flex-grow bg-white border-2 border-transparent focus:border-on-tertiary-container px-unit-lg py-4 font-body-md text-primary outline-none" placeholder="Institutional Email Address" type="email"/>
<button class="bg-on-tertiary-container text-white px-unit-2xl py-4 font-label-lg text-label-lg hover:bg-tertiary-fixed-dim hover:text-primary transition-all" type="submit">
                            REQUEST ACCESS
                        </button>
</form>
<p class="mt-unit-md text-xs text-on-primary-container/60 italic">Privacy and intellectual integrity are strictly maintained.</p>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-primary dark:bg-primary-container">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl flex flex-col items-center gap-unit-lg">
<!-- Brand Logo for Footer -->
<div class="mb-unit-md">
<img alt="Dr. Ayuba's Corner" class="h-12 w-auto opacity-80 brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDENLhhxvf-P08Pi6QdE05TwTtFforhOIWSnrnhHjAhYFJ8B_6HUinOZ-ojpFgd8T2C6vaOquhrEJVm5zTB1roSHn-z92BfiekROkey0S_LqQWCrpEHSCNCC3CQCT2otm8jSy566xoZPQKO7z1ZPNweIAuzIMsD6I1Q1jFJHZJGxVpExEkv3FL-2FdjZxXZTtgYebI3Joj6aueNmMcAs0iV84ifQYr98_Mf5rdaUtoMg_COKvU1yvn9AwvT0rbdpQOObUADNodxwG4"/>
</div>
<!-- Footer Links -->
<div class="flex flex-wrap justify-center gap-unit-xl">
<a class="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-on-tertiary-fixed transition-colors" href="#">Academic Integrity</a>
<a class="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-on-tertiary-fixed transition-colors" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-on-tertiary-fixed transition-colors underline text-tertiary-fixed-dim" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-on-tertiary-fixed transition-colors" href="#">Institutional Access</a>
</div>
<!-- Copyright -->
<div class="text-center max-w-lg mt-unit-lg">
<p class="font-body-sm text-body-sm text-on-primary dark:text-on-primary-fixed opacity-70">
                    © 2024 Dr. Ayuba's Corner. All rights reserved. Institutional integrity and scholarly excellence.
                </p>
</div>
<!-- Social Placeholder Icons -->
<div class="flex gap-unit-md text-on-tertiary-container mt-unit-md">
<span class="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform">share</span>
<span class="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform">mail</span>
<span class="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform">rss_feed</span>
</div>
</div>
</footer>
<script>
        // Smooth reveal on scroll interaction
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.pillar-card').forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
            observer.observe(el);
        });
    </script>

      ` }} />
    </div>
  );
}
