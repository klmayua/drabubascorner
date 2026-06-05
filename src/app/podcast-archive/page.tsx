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
      className="bg-brand-ivory text-brand-navy font-body-md overflow-x-hidden" 
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
                      "on-secondary-container": "#4c6e2e",
                      "secondary": "#476729",
                      "inverse-primary": "#b6c7ec",
                      "error": "#ba1a1a",
                      "secondary-container": "#c7efa1",
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
                      "on-tertiary-fixed-variant": "#5c4300",
                      /* Custom Brand Palette Overrides */
                      "brand-gold": "#C79A2E",
                      "brand-navy": "#0B1D3A",
                      "brand-ivory": "#FDFCF0"
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
            },
          },
        }
      </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .diamond-list li::before {
            content: '◆';
            color: #C79A2E;
            margin-right: 12px;
            font-size: 0.7em;
        }
        .glass-header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
        }
        .archival-border {
            border: 1px solid rgba(11, 29, 58, 0.1);
        }
        .active-underline {
            position: relative;
        }
        .active-underline::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #C79A2E;
        }
    </style>

<!-- TopNavBar -->
<header class="w-full top-0 sticky z-50 glass-header border-b border-outline-variant bg-surface">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-20">
<!-- Brand Logo Only -->
<div class="flex items-center">
<img alt="Logo" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc2Ze4CKaGLlVEBnyPeTpDdxU7gyvgTOPE7ai2ZXKMmHmBY7iX_Af-LarE-eY46A9B3ftXxdiWp2w-D7v8V58nh1wGy9dsf_YdH1-_d2NQGWirazMvlwSAxD_-rcHcJ9BN225CWlivWisVNe2Lc1OKjGNRKotaJuPDlIMyVyrwwAZ0po2Qn7_5_YUYke1tKvrmGEI1OaVMLp1X08r7FA5ls3_RGLYSvRGJxKSwLzBoDBENYt4gd9nFf4_3JQrnXzA-gzKElwtmfY4"/>
</div>
<!-- Navigation Links -->
<nav class="hidden md:flex gap-unit-xl items-center">
<a class="text-on-surface-variant font-body-md hover:text-primary transition-all cursor-pointer" href="#">Articles</a>
<a class="text-primary active-underline font-bold font-body-md cursor-pointer" href="#">Podcast</a>
<a class="text-on-surface-variant font-body-md hover:text-primary transition-all cursor-pointer" href="#">Videos</a>
<a class="text-on-surface-variant font-body-md hover:text-primary transition-all cursor-pointer" href="#">Community</a>
<a class="text-on-surface-variant font-body-md hover:text-primary transition-all cursor-pointer" href="#">Courses</a>
<a class="text-on-surface-variant font-body-md hover:text-primary transition-all cursor-pointer" href="#">Marketplace</a>
</nav>
<!-- Actions -->
<div class="flex items-center gap-unit-md">
<button class="material-symbols-outlined text-brand-navy p-2 hover:bg-surface-container-high transition-colors rounded-full">search</button>
<button class="bg-brand-navy text-white px-unit-lg py-2 font-label-lg hover:bg-opacity-90 transition-all active:scale-95">Sign In</button>
<span class="material-symbols-outlined text-brand-navy cursor-pointer" data-icon="account_circle">account_circle</span>
</div>
</div>
</header>
<main class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl">
<!-- Director's Pick Section -->
<section class="mb-unit-2xl">
<div class="grid grid-cols-12 gap-gutter items-center">
<div class="col-span-12 lg:col-span-5 relative">
<div class="aspect-[0.78] w-full archival-border overflow-hidden">
<img alt="Dr. Ayuba Portrait" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjr8D6N8FCOrUy-eeDS3UInWS8BkldGextNgmOg6nO8LghbDcMDe7GwAPM8HFWgNMIV8lIDTYFEW_B0ZD_BOiICqhXjyua-Y_Y9-KqtD35ND_WmDmrp7fn0Q13H2mnr5yAr88AH_L4_XYptY_xp0jAi8BjU7R2YRihGyPjwjtfJSjLy5hMhCyF3di1nADO7Fj1CLvyUdQ40rrlAwJbMBtgFn5b_IatxepNkkhiw8jb6bH5DiCxYQO8d0lFvTErg-joXG39PG1nz9A"/>
</div>
<div class="absolute -bottom-8 -right-8 bg-brand-navy text-white p-unit-lg max-w-xs archival-border">
<p class="font-label-md uppercase tracking-widest text-brand-gold mb-2">Current Focus</p>
<h3 class="font-headline-sm text-headline-sm mb-4">The Ethics of Institutional Longevity</h3>
<button class="flex items-center gap-unit-sm group">
<span class="font-label-lg border-b border-brand-gold pb-1 group-hover:text-brand-gold transition-colors">Listen to Episode</span>
<span class="material-symbols-outlined text-brand-gold group-hover:translate-x-1 transition-transform">play_circle</span>
</button>
</div>
</div>
<div class="col-span-12 lg:col-span-7 flex flex-col justify-center">
<span class="font-label-lg text-brand-gold uppercase tracking-[0.2em] mb-unit-md">Director's Pick</span>
<h1 class="font-display-lg text-display-lg text-brand-navy mb-unit-lg leading-tight">Navigating the Intellectual Renaissance</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-unit-xl max-w-2xl">
                        In this special feature, Dr. Ayuba delves into the intersection of historical academic structures and modern technological proliferation. A scholarly examination of how we preserve wisdom in an era of rapid information decay.
                    </p>
<div class="flex gap-unit-md">
<button class="bg-brand-navy text-white px-unit-xl py-unit-md font-label-lg flex items-center gap-unit-sm hover:bg-opacity-95 transition-all">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
                            Start Listening
                        </button>
<button class="border border-brand-gold text-brand-gold px-unit-xl py-unit-md font-label-lg hover:bg-brand-gold hover:text-white transition-all">
                            View Citation Archive
                        </button>
</div>
</div>
</div>
</section>
<!-- Pillar Navigation & Search -->
<section class="py-unit-xl border-t border-b border-outline-variant mb-unit-xl">
<div class="flex flex-col md:flex-row justify-between items-center gap-unit-lg">
<div class="flex gap-unit-xl items-center">
<h4 class="font-label-lg text-brand-navy uppercase tracking-widest">Archive Pillars:</h4>
<button class="font-headline-sm text-brand-navy active-underline">Wisdom</button>
<button class="font-headline-sm text-on-surface-variant hover:text-brand-navy transition-colors">Health</button>
<button class="font-headline-sm text-on-surface-variant hover:text-brand-navy transition-colors">Wealth</button>
</div>
<div class="relative w-full md:w-96">
<input class="w-full border-brand-navy border px-unit-md py-3 focus:ring-0 focus:border-brand-gold font-body-md placeholder:text-on-surface-variant/50" placeholder="Search by academic citation, guest, or topic..." type="text"/>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-brand-navy">search</span>
</div>
</div>
</section>
<!-- Scholarly Archive Grid -->
<section class="grid grid-cols-12 gap-gutter">
<!-- Sidebar Filters -->
<aside class="col-span-12 lg:col-span-3">
<div class="sticky top-32 space-y-unit-xl">
<div>
<h5 class="font-label-lg uppercase mb-unit-md text-brand-navy">Academic Year</h5>
<ul class="space-y-unit-sm font-body-sm text-on-surface-variant">
<li class="flex items-center justify-between hover:text-brand-navy cursor-pointer"><span>2024 Series</span> <span class="text-xs opacity-50">(14)</span></li>
<li class="flex items-center justify-between hover:text-brand-navy cursor-pointer"><span>2023 Series</span> <span class="text-xs opacity-50">(48)</span></li>
<li class="flex items-center justify-between hover:text-brand-navy cursor-pointer"><span>2022 Archive</span> <span class="text-xs opacity-50">(32)</span></li>
</ul>
</div>
<div>
<h5 class="font-label-lg uppercase mb-unit-md text-brand-navy">Guest Faculty</h5>
<ul class="diamond-list space-y-unit-sm font-body-sm text-on-surface-variant">
<li class="hover:text-brand-navy cursor-pointer">Dr. Elena Vos</li>
<li class="hover:text-brand-navy cursor-pointer">Prof. Marcus Thorne</li>
<li class="hover:text-brand-navy cursor-pointer">Senior Fellow Sarah Chen</li>
</ul>
</div>
<div class="p-unit-lg bg-primary-container text-on-primary-container archival-border">
<p class="font-label-md mb-2">Institutional Access</p>
<p class="font-body-sm opacity-80 mb-4">Members receive full bibliographies and downloadable transcripts for every episode.</p>
<a class="font-label-lg underline hover:text-brand-gold transition-colors" href="#">Upgrade Plan</a>
</div>
</div>
</aside>
<!-- Main Archive List -->
<div class="col-span-12 lg:col-span-9 space-y-gutter">
<!-- Episode Card 1 -->
<div class="group flex flex-col md:flex-row bg-white archival-border hover:shadow-xl transition-all duration-300">
<div class="w-full md:w-64 h-64 bg-surface-container overflow-hidden">
<div class="w-full h-full flex items-center justify-center bg-brand-navy relative">
<img class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="A high-contrast black and white photograph of an antique microphone on a mahogany desk within a dim, leather-bound library. The room is softly lit by an amber banker's lamp, creating long, dramatic shadows that emphasize the scholarly atmosphere. The visual style is premium and archival, reflecting an elite institutional aesthetic with deep navy and ivory tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzdc7appLHBfBWeqK4Q2aZ2jcSCUIoxFJ6Eqhtq8pgJufhsmbcXHq9CCXc5AWqKtd7qbWuHZyV6-Vlim1Df905Wk-JB21H6FjoQMP1T_bJpe7LwEh6eKfrqOAOGM-MUBEsUeejrv5IMmK1gxGX9VI-6Bc7Z8UINFz8igJEaOZ-3TZU5m-OjXQJchx6LEVp6WXla7HSceKkjntJg3UMCu6uVzb4PAePzvmibQonuzVa2hj6pjiSI55kOL16EgvtqUzQQNicvbOFm9c"/>
<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-navy/40">
<span class="material-symbols-outlined text-white text-5xl">play_circle</span>
</div>
</div>
</div>
<div class="p-unit-xl flex-1 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-unit-sm">
<span class="font-label-md text-brand-gold">Ep. 142 | Wisdom Pillar</span>
<span class="font-body-sm text-on-surface-variant">42:18 min</span>
</div>
<h3 class="font-headline-sm text-brand-navy mb-unit-md group-hover:text-brand-gold transition-colors">The Stoic Architecture of Modern Leadership</h3>
<p class="font-body-md text-on-surface-variant line-clamp-2">
                                Exploring how ancient Stoic principles apply to contemporary institutional management and the psychological resilience of leaders in high-stakes environments.
                            </p>
</div>
<div class="mt-unit-xl flex items-center gap-unit-xl border-t border-outline-variant/30 pt-unit-md">
<div class="flex items-center gap-unit-xs">
<span class="material-symbols-outlined text-brand-gold text-sm" style="font-variation-settings: 'FILL' 1;">book</span>
<span class="font-label-md">12 Citations</span>
</div>
<div class="flex items-center gap-unit-xs">
<span class="material-symbols-outlined text-brand-gold text-sm">person</span>
<span class="font-label-md">Guest: Prof. Simon Reeds</span>
</div>
</div>
</div>
</div>
<!-- Episode Card 2 -->
<div class="group flex flex-col md:flex-row bg-white archival-border hover:shadow-xl transition-all duration-300">
<div class="w-full md:w-64 h-64 bg-surface-container overflow-hidden">
<div class="w-full h-full flex items-center justify-center bg-brand-navy relative">
<img class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="A macro shot of a fountain pen resting on a piece of vintage parchment paper filled with elegant cursive handwriting. The lighting is low-key and professional, highlighting the texture of the paper and the metallic gleam of the gold pen nib. The scene is set in a prestigious academic office, using a palette of rich navy, aged paper ivory, and deep gold accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvll1rfrwqAbaT5dcRtteq39sdTvU2NKB2eU-plkg1R1ozLHifIae6lErCIfcaserw-ZSdz69rNmgfdmj411Bj4-8uF-cGeKwlg9i0Yz9QYRO9Fhc7M-9Jc9rGjoX7We4GBuXOG1N4W6dGVx72wDMWXs0c1uW-dy49FSg_bRlUKBNqa-0ti_P-QuijFaQHVnKwcGyOnyOBSKML1CLdXkvwpuQN0qgvjhZoOdXXg_f-7eGqneSYzD4W0BYn_5i5ULyL92U5vuC-dUw"/>
<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-navy/40">
<span class="material-symbols-outlined text-white text-5xl">play_circle</span>
</div>
</div>
</div>
<div class="p-unit-xl flex-1 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-unit-sm">
<span class="font-label-md text-brand-gold">Ep. 141 | Wealth Pillar</span>
<span class="font-body-sm text-on-surface-variant">55:04 min</span>
</div>
<h3 class="font-headline-sm text-brand-navy mb-unit-md group-hover:text-brand-gold transition-colors">Capital Preservation in Volatile Centuries</h3>
<p class="font-body-md text-on-surface-variant line-clamp-2">
                                A discussion on multi-generational wealth management and the historical precedents for long-term financial stability during societal shifts.
                            </p>
</div>
<div class="mt-unit-xl flex items-center gap-unit-xl border-t border-outline-variant/30 pt-unit-md">
<div class="flex items-center gap-unit-xs">
<span class="material-symbols-outlined text-brand-gold text-sm" style="font-variation-settings: 'FILL' 1;">book</span>
<span class="font-label-md">8 Citations</span>
</div>
<div class="flex items-center gap-unit-xs">
<span class="material-symbols-outlined text-brand-gold text-sm">person</span>
<span class="font-label-md">Guest: Julian Thorne</span>
</div>
</div>
</div>
</div>
<!-- Pagination -->
<div class="flex justify-center py-unit-xl">
<nav class="flex items-center gap-unit-md">
<button class="w-10 h-10 flex items-center justify-center archival-border hover:bg-brand-navy hover:text-white transition-all">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="w-10 h-10 flex items-center justify-center bg-brand-navy text-white font-label-lg">1</button>
<button class="w-10 h-10 flex items-center justify-center archival-border hover:bg-brand-navy hover:text-white transition-all font-label-lg">2</button>
<button class="w-10 h-10 flex items-center justify-center archival-border hover:bg-brand-navy hover:text-white transition-all font-label-lg">3</button>
<button class="w-10 h-10 flex items-center justify-center archival-border hover:bg-brand-navy hover:text-white transition-all">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</nav>
</div>
</div>
</section>
<!-- Newsletter / Institutional Subscription -->
<section class="mt-unit-2xl p-unit-2xl bg-brand-navy text-white relative overflow-hidden">

<div class="relative z-10 max-w-3xl mx-auto text-center">
<h2 class="font-headline-lg text-headline-lg mb-unit-md text-brand-gold">The Weekly Digest</h2>
<p class="font-body-lg text-body-lg mb-unit-xl opacity-90">Receive the Director's hand-written notes, full academic citations, and exclusive member-only podcast sessions directly to your inbox.</p>
<form class="flex flex-col md:flex-row gap-unit-sm">
<input class="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 px-unit-lg py-4 focus:ring-1 focus:ring-brand-gold focus:border-brand-gold border" placeholder="Institutional Email Address" type="email"/>
<button class="bg-brand-gold text-brand-navy px-unit-2xl py-4 font-label-lg hover:bg-white transition-all">Subscribe Now</button>
</form>
<p class="mt-unit-md font-body-sm opacity-50">Join 15,000+ scholarly listeners worldwide.</p>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-auto bg-primary-container text-on-primary-container border-t border-outline-variant">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div class="col-span-1 md:col-span-1">
<img alt="Footer Logo" class="h-10 w-auto object-contain mb-unit-lg brightness-0 invert opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc2Ze4CKaGLlVEBnyPeTpDdxU7gyvgTOPE7ai2ZXKMmHmBY7iX_Af-LarE-eY46A9B3ftXxdiWp2w-D7v8V58nh1wGy9dsf_YdH1-_d2NQGWirazMvlwSAxD_-rcHcJ9BN225CWlivWisVNe2Lc1OKjGNRKotaJuPDlIMyVyrwwAZ0po2Qn7_5_YUYke1tKvrmGEI1OaVMLp1X08r7FA5ls3_RGLYSvRGJxKSwLzBoDBENYt4gd9nFf4_3JQrnXzA-gzKElwtmfY4"/>
<p class="font-body-sm opacity-70">Elevating public discourse through scholarly inquiry and historical wisdom. An archive of the modern renaissance.</p>
</div>
<div>
<h5 class="font-label-lg text-white uppercase mb-unit-lg">The Institution</h5>
<ul class="space-y-unit-sm font-body-sm">
<li><a class="hover:text-brand-gold transition-colors" href="#">Faculty Directory</a></li>
<li><a class="hover:text-brand-gold transition-colors" href="#">Institutional Research</a></li>
<li><a class="hover:text-brand-gold transition-colors" href="#">Sitemap</a></li>
</ul>
</div>
<div>
<h5 class="font-label-lg text-white uppercase mb-unit-lg">Policy</h5>
<ul class="space-y-unit-sm font-body-sm">
<li><a class="hover:text-brand-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a class="hover:text-brand-gold transition-colors" href="#">Terms of Service</a></li>
<li><a class="hover:text-brand-gold transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h5 class="font-label-lg text-white uppercase mb-unit-lg">Connect</h5>
<div class="flex gap-unit-md mb-unit-lg">
<span class="material-symbols-outlined cursor-pointer hover:text-brand-gold transition-colors">rss_feed</span>
<span class="material-symbols-outlined cursor-pointer hover:text-brand-gold transition-colors">mail</span>
<span class="material-symbols-outlined cursor-pointer hover:text-brand-gold transition-colors">public</span>
</div>
<p class="font-body-sm opacity-50">© 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.</p>
</div>
</div>
</footer>
<!-- Audio Player (Sticky Component) -->
<div class="fixed bottom-0 left-0 w-full bg-white archival-border z-[60] py-unit-sm shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex items-center justify-between">
<div class="flex items-center gap-unit-md w-1/4">
<div class="w-12 h-12 bg-brand-navy archival-border overflow-hidden">
<img class="w-full h-full object-cover grayscale" data-alt="A focused close-up of a vintage analog radio dial, illuminated by a warm, golden glow against a dark, textured metal background. The details of the fine calibration lines and classic typography evoke a sense of historical precision and archival audio recording. The aesthetic is clean, professional, and sophisticated, aligning with an elite academic institution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7jJs2cRCiIGK84F1Kg7BtsQ-KbyKJHsOaQOfio2Q0RY3Y3nvMOfLZ2201oAhK4H0OAc5LpwWmuWOz1zZXB76QzUXTEQ3qOybEYePBhA9rgpuwawKUkMR4qEPT4M6h4oMEOuP9ycC0llZdLfrgRp5JFWzl2QFZ1xns0nr5L9Us4JqTqlJ620dWQbydLp53fZ2Ju30M0YoUS4vJMxirCTMb6kz4Vz0CWzbFXD5M0TAvMbK8f5K9gNxcn8P1RA5OmkskEmvlqlCP9zQ"/>
</div>
<div class="hidden sm:block">
<p class="font-label-lg truncate text-brand-navy">The Stoic Architecture of Modern Leadership</p>
<p class="font-body-sm text-on-surface-variant truncate">Dr. Ayuba ft. Prof. Reeds</p>
</div>
</div>
<div class="flex flex-col items-center gap-1 flex-1">
<div class="flex items-center gap-unit-lg">
<button class="material-symbols-outlined text-on-surface-variant hover:text-brand-navy">shuffle</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-brand-navy">skip_previous</button>
<button class="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center hover:scale-105 transition-transform">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-brand-navy">skip_next</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-brand-navy">repeat</button>
</div>
<div class="w-full max-w-xl flex items-center gap-unit-md px-unit-md">
<span class="text-[10px] font-mono opacity-50">12:04</span>
<div class="h-1 flex-1 bg-surface-container-highest relative">
<div class="absolute top-0 left-0 h-full w-1/3 bg-brand-gold"></div>
<div class="absolute top-1/2 left-1/3 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-gold border border-white"></div>
</div>
<span class="text-[10px] font-mono opacity-50">42:18</span>
</div>
</div>
<div class="flex items-center justify-end gap-unit-md w-1/4">
<button class="material-symbols-outlined text-on-surface-variant">transcript</button>
<button class="material-symbols-outlined text-on-surface-variant">volume_up</button>
<div class="h-1 w-24 bg-surface-container-highest hidden lg:block">
<div class="h-full w-3/4 bg-brand-navy"></div>
</div>
</div>
</div>
</div>
<script>
        // Micro-interactions for scholarly feel
        document.querySelectorAll('button, a').forEach(el => {
            el.addEventListener('mousedown', () => {
                el.style.transform = 'scale(0.98)';
            });
            el.addEventListener('mouseup', () => {
                el.style.transform = 'scale(1)';
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'scale(1)';
            });
        });
    </script>

      ` }} />
    </div>
  );
}
