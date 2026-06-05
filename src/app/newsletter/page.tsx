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
      className="bg-background text-on-background font-body-md min-h-screen flex flex-col" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "tertiary": "#050300",
                    "surface-container-lowest": "#ffffff",
                    "primary-fixed-dim": "#b6c7ec",
                    "on-tertiary": "#ffffff",
                    "outline": "#75777e",
                    "surface-variant": "#e1e3e4",
                    "surface-container": "#edeeef",
                    "tertiary-fixed": "#ffdf9f",
                    "secondary-fixed-dim": "#acd287",
                    "secondary-fixed": "#c7efa1",
                    "on-surface-variant": "#44474d",
                    "on-secondary-fixed": "#0d2000",
                    "surface-dim": "#d9dadb",
                    "surface-container-high": "#e7e8e9",
                    "primary": "#00030f",
                    "error-container": "#ffdad6",
                    "on-primary-fixed-variant": "#374766",
                    "background": "#f8f9fa",
                    "on-primary-fixed": "#091b38",
                    "on-secondary": "#ffffff",
                    "surface-bright": "#f8f9fa",
                    "tertiary-container": "#281b00",
                    "on-surface": "#191c1d",
                    "tertiary-fixed-dim": "#f1bf51",
                    "on-background": "#191c1d",
                    "inverse-on-surface": "#f0f1f2",
                    "surface-container-highest": "#e1e3e4",
                    "on-error": "#ffffff",
                    "inverse-surface": "#2e3132",
                    "on-tertiary-fixed-variant": "#5c4300",
                    "on-primary-container": "#7585a8",
                    "on-error-container": "#93000a",
                    "surface-tint": "#4f5e7f",
                    "surface": "#f8f9fa",
                    "surface-container-low": "#f3f4f5",
                    "primary-container": "#0b1d3a",
                    "on-tertiary-fixed": "#261a00",
                    "secondary": "#476729",
                    "inverse-primary": "#b6c7ec",
                    "error": "#ba1a1a",
                    "on-secondary-container": "#4c6e2e",
                    "on-tertiary-container": "#a87f0f",
                    "on-primary": "#ffffff",
                    "primary-fixed": "#d7e2ff",
                    "outline-variant": "#c5c6ce",
                    "on-secondary-fixed-variant": "#304f13",
                    "secondary-container": "#c7efa1"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "unit-2xl": "80px",
                    "unit-xs": "4px",
                    "container-max": "1440px",
                    "unit-sm": "8px",
                    "unit-md": "16px",
                    "margin-desktop": "80px",
                    "gutter": "32px",
                    "unit-xl": "48px",
                    "unit-lg": "24px"
            },
            "fontFamily": {
                    "headline-md": ["Playfair Display"],
                    "body-sm": ["Inter"],
                    "headline-lg": ["Playfair Display"],
                    "body-lg": ["Inter"],
                    "headline-sm": ["Playfair Display"],
                    "label-md": ["Inter"],
                    "label-lg": ["Inter"],
                    "display-lg": ["Playfair Display"],
                    "display-xl": ["Playfair Display"],
                    "body-md": ["Inter"]
            },
            "fontSize": {
                    "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                    "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                    "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}],
                    "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                    "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                    "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-line {
            height: 1px;
            background: linear-gradient(to right, #00030f 0%, rgba(0,3,15,0.1) 100%);
        }
        .diamond-bullet::before {
            content: "◆";
            color: #f1bf51;
            font-size: 0.6em;
            margin-right: 12px;
            vertical-align: middle;
        }
        .shadow-archival {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
        }
        .card-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0px 8px 30px rgba(11, 29, 58, 0.08);
            border-color: #00030f;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f3f4f5;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #00030f;
        }
    </style>

<!-- Header: Institutional Identity -->
<header class="w-full bg-surface-container-lowest border-b border-outline-variant py-unit-xl sticky top-0 z-50">
<div class="max-w-container-max mx-auto px-margin-desktop flex justify-center items-center">
<img alt="Institutional Seal" class="h-40 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBakJIFgTScVI66asZ-xJcOmkht13d8rX84MYLqyVWxK4gSb3nDIvuY4yIy4Vw2qJrOyWmx7UDzdx-UEOGLa3PQ0ospji8eg_SANMkv4fNoUsEg3sMkv7oabjaNvAFc0KOyCO7-RxMIPlK3RoqzEhhGi15JDLHd0zPy-Py--4Q75gQmVmQTRcQdIRzN1jaTEqKLRm3MvNyVPnVdpqiR3qhGB8A3RgGrSV5PSMoJC6Jsl5qRQ843vpD1-xTD3Jxe6x4P8kdiwEK1-Y">
</div>
</header>
<main class="flex-grow">
<!-- Hero: The Weekly Dispatch -->
<section class="py-unit-2xl bg-surface">
<div class="max-w-container-max mx-auto px-margin-desktop">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
<div class="space-y-unit-lg">
<span class="font-label-lg text-label-lg text-on-tertiary-container uppercase tracking-widest flex items-center gap-unit-sm">
<span class="w-12 h-px bg-on-tertiary-container"></span>
                            Primary Publication
                        </span>
<h1 class="font-display-lg text-display-lg text-primary max-w-xl">
                            The Weekly Dispatch
                        </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                            An intellectual synthesis of pediatric health, community leadership, and global institutional insights, delivered every Tuesday morning.
                        </p>
<form class="mt-unit-xl space-y-unit-md max-w-md">
<div>
<label class="font-label-lg text-label-lg text-primary block mb-unit-xs" for="email">Academic Institutional Email</label>
<div class="flex gap-0">
<input class="w-full bg-surface-container-lowest border-2 border-primary px-unit-md py-4 font-body-md focus:ring-0 focus:outline-none focus:border-secondary transition-all" id="email" placeholder="dr.smith@university.edu" type="email">
<button class="bg-primary text-on-primary px-unit-lg py-4 font-label-lg text-label-lg hover:bg-on-primary-fixed-variant transition-all active:scale-95 whitespace-nowrap" type="submit">
                                        Subscribe Now
                                    </button>
</div>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant italic">
                                Reserved for faculty members and institutional partners.
                            </p>
</form>
</div>
<div class="relative">
<div class="absolute -top-8 -left-8 w-64 h-64 border border-outline-variant -z-10"></div>
<div class="bg-surface-container-lowest p-unit-lg border border-outline-variant shadow-archival">
<img alt="Latest Edition Preview" class="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="A sophisticated high-angle view of a thick, premium-paper print newsletter lying on an dark oak academic desk. The newsletter features elegant serif typography and minimal diagrams. Beside the publication is a classic fountain pen and a pair of reading glasses, illuminated by soft window light in a library setting with muted blue and gold tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVqtbylBKqTq3doTt2mqAL2IVZ_NU4U6G3bRirWYzRZ4BHiic-NH1yYHsVaD0WlNBYP6lx4q_yrpdXRrRJf7pn-WdU6kvmTdJyb5zIIFV7yO57kp8jhKVsk6Z846jdIsqrDsm0gTUUFhizU4EuIyq3d7yALVCvUlSl-a2iv6TMQa2FNpOCgvuhfqZlxP4UxAYR4TzuA9cl3UFgV52StcgfGN6iBJOWaUJHPn9gq3FJOCdK7z1sjp0s-IlA7TAuFRR6q0jl3srtZgY">
<div class="mt-unit-md flex justify-between items-end">
<div>
<p class="font-label-md text-label-md text-secondary">VOLUME 42, ISSUE 08</p>
<p class="font-headline-sm text-headline-sm text-primary">On Scholastic Resilience</p>
</div>
<span class="font-label-lg text-label-lg border-b border-primary text-primary pb-1 cursor-pointer">Read Preview</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Newsletter Archive: Editorial Grid -->
<section class="py-unit-2xl bg-surface-container-low">
<div class="max-w-container-max mx-auto px-margin-desktop">
<div class="flex flex-col md:flex-row justify-between items-end mb-unit-xl border-b border-outline-variant pb-unit-md">
<div>
<h2 class="font-headline-lg text-headline-lg text-primary">Newsletter Archive</h2>
<p class="font-body-md text-body-md text-on-surface-variant">A permanent record of institutional communications.</p>
</div>
<div class="flex gap-unit-md mt-unit-md md:mt-0">
<button class="flex items-center gap-unit-xs font-label-lg text-label-lg text-primary hover:text-secondary transition-colors">
<span class="material-symbols-outlined" data-icon="filter_list">filter_list</span>
                            Filter by Year
                        </button>
<button class="flex items-center gap-unit-xs font-label-lg text-label-lg text-primary hover:text-secondary transition-colors">
<span class="material-symbols-outlined" data-icon="search">search</span>
                            Search Editions
                        </button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Archive Card 1 -->
<article class="bg-surface-container-lowest border border-outline-variant p-unit-lg transition-all card-hover flex flex-col h-full group">
<div class="mb-unit-md overflow-hidden h-64">
<img alt="Edition Cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A vintage book with a heavy linen cover resting on a stone pedestal in a sunlit atrium. The lighting is crisp and scholarly, casting long shadows. The color palette is composed of ivory, deep navy, and gold, reflecting a prestigious institutional atmosphere. The scene evokes wisdom and historical depth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9w3pmulhN2k7sZkHCSu3HCcvb0oHLYM2poMZMxxIwJHvuV8L9zxO5S_EByJotBtsB9EzR95ea1A6Xak1ln8LgkgglCumUgBG11r3ZDMTI6_8kuPpLxR2WUWX-GkpEBZB8qLnx8JU5mCpLVGHCgsZF7Dl9VHxAHWoxn-WmwP-Q1FrpUoq9IVzMZGIQXqZyueWGxJmUqEv4Exr9DJ1qGR7cY6RRIR4OI_Hng_kDXypEJJVUhXz2x9jRZg5G2Pk8QZETC1H9_TH5s-Y">
</div>
<p class="font-label-md text-label-md text-secondary mb-unit-xs">MARCH 12, 2024</p>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-md leading-tight">The Evolution of Community Care Frameworks</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-unit-lg line-clamp-3">
                            Analyzing the shift from reactive medicine to proactive communal health strategies within urban institutional corridors...
                        </p>
<div class="flex items-center justify-between pt-unit-md border-t border-outline-variant">
<span class="font-label-lg text-label-lg text-primary">Read Edition</span>
<span class="material-symbols-outlined text-primary" data-icon="arrow_forward">arrow_forward</span>
</div>
</article>
<!-- Archive Card 2 -->
<article class="bg-surface-container-lowest border border-outline-variant p-unit-lg transition-all card-hover flex flex-col h-full group">
<div class="mb-unit-md overflow-hidden h-64">
<img alt="Edition Cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close-up of a handwritten scholarly journal with diagrams of neurons and organic molecules. The paper is slightly aged, and the ink is a deep blue. The background is a blurred mahogany bookshelf. The mood is one of intense research and intellectual discovery, with a high-end corporate editorial feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLA40XEqDLFTSJsOc0cpwxswEI4Gngyr9Vay4JrjwI1B4PVx6FBIsjHFRhMgxSYLUIbSo2ANxLSeu1Axbosx3zmKdGyGQkdJVUiI0zwG-WdeGGPJRG4Jx5Jp7kAukZhzffbfZi09IXwjHZ25YQHn-COfN7TZo12XO-z1i3Goi0vjWcAJrJ_Xx5rySOZEzY7hwngAgbt33g2HlYRLPLdDzJU8qPlX9iIqbBGUOEcQnY2Lp9uhOuQVZbR8j4G3rNv_SuKzB0HVzuc7w">
</div>
<p class="font-label-md text-label-md text-secondary mb-unit-xs">FEBRUARY 28, 2024</p>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-md leading-tight">Global Pediatric Trends in Post-Digital Contexts</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-unit-lg line-clamp-3">
                            A comprehensive review of how digital consumption is altering neurological development patterns in primary school students...
                        </p>
<div class="flex items-center justify-between pt-unit-md border-t border-outline-variant">
<span class="font-label-lg text-label-lg text-primary">Read Edition</span>
<span class="material-symbols-outlined text-primary" data-icon="arrow_forward">arrow_forward</span>
</div>
</article>
<!-- Archive Card 3 -->
<article class="bg-surface-container-lowest border border-outline-variant p-unit-lg transition-all card-hover flex flex-col h-full group">
<div class="mb-unit-md overflow-hidden h-64">
<img alt="Edition Cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An expansive, modern library with floor-to-ceiling bookshelves and large minimalist windows looking out onto a tranquil garden. The interior is flooded with natural light. The color scheme is predominantly white, navy, and natural wood. A lone wooden table in the foreground holds a single stack of newsletters." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcRdnocMAnJ_GQF8BPI1EkiR-vsAzMnE-_QZsH33f3_P2b5ysFTtWUBfVxICKsiqzXzgiOrgJgfnRhD6PwWAkP2yZWEgOe1jfks2GJcNzkHdK9cjnbKEnb11tiguUTenGQun6zW_8qYNYWFl6aleBC3JoIrpIjO5kc2dtfmMETHfg4aWdREcKVLBIyewybtfgq6wQ0maUhf7EQBcopVZnOV6uvqEs07cge-hMF4JlOvLIvoBDw16d8vQNG7Q821UgFytE_2iSUyrE">
</div>
<p class="font-label-md text-label-md text-secondary mb-unit-xs">FEBRUARY 14, 2024</p>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-md leading-tight">Navigating Institutional Bureaucracy for Faculty</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-unit-lg line-clamp-3">
                            Practical insights for newly appointed faculty navigating the complexities of institutional research funding and ethics...
                        </p>
<div class="flex items-center justify-between pt-unit-md border-t border-outline-variant">
<span class="font-label-lg text-label-lg text-primary">Read Edition</span>
<span class="material-symbols-outlined text-primary" data-icon="arrow_forward">arrow_forward</span>
</div>
</article>
</div>
<div class="mt-unit-2xl flex justify-center">
<button class="border-2 border-primary px-unit-xl py-unit-md font-label-lg text-label-lg text-primary hover:bg-primary hover:text-white transition-all">
                        View Full Archive (2018—2024)
                    </button>
</div>
</div>
</section>
<!-- Topic Preference Center -->
<section class="py-unit-2xl bg-surface">
<div class="max-w-container-max mx-auto px-margin-desktop">
<div class="bg-surface-container-lowest border-2 border-primary overflow-hidden">
<div class="grid grid-cols-1 lg:grid-cols-5 h-full">
<div class="lg:col-span-2 bg-primary p-unit-xl flex flex-col justify-between">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-primary mb-unit-md">Preference Center</h2>
<p class="font-body-md text-body-md text-primary-fixed-dim max-w-sm">
                                    Tailor your institutional updates. Select the disciplines and research areas most relevant to your faculty position.
                                </p>
</div>
<div class="mt-unit-xl pt-unit-xl border-t border-on-primary-fixed-variant">
<p class="font-label-md text-label-md text-on-primary mb-unit-sm uppercase tracking-widest">Active Status</p>
<div class="flex items-center gap-unit-sm">
<span class="w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
<span class="font-body-sm text-body-sm text-on-primary">Authenticated Institutional Access</span>
</div>
</div>
</div>
<div class="lg:col-span-3 p-unit-xl">
<div class="space-y-unit-lg">
<div class="grid grid-cols-1 md:grid-cols-2 gap-unit-lg">
<label class="flex items-start gap-unit-md cursor-pointer group">
<div class="relative flex items-center">
<input checked="" class="w-6 h-6 border-2 border-primary text-secondary focus:ring-0 rounded-none transition-all" type="checkbox">
</div>
<div>
<p class="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Pediatric Innovation</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Latest research in childhood development.</p>
</div>
</label>
<label class="flex items-start gap-unit-md cursor-pointer group">
<div class="relative flex items-center">
<input checked="" class="w-6 h-6 border-2 border-primary text-secondary focus:ring-0 rounded-none transition-all" type="checkbox">
</div>
<div>
<p class="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Institutional News</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Campus-wide announcements and faculty shifts.</p>
</div>
</label>
<label class="flex items-start gap-unit-md cursor-pointer group">
<div class="relative flex items-center">
<input class="w-6 h-6 border-2 border-primary text-secondary focus:ring-0 rounded-none transition-all" type="checkbox">
</div>
<div>
<p class="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Community Outreach</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Updates on regional health initiatives.</p>
</div>
</label>
<label class="flex items-start gap-unit-md cursor-pointer group">
<div class="relative flex items-center">
<input class="w-6 h-6 border-2 border-primary text-secondary focus:ring-0 rounded-none transition-all" type="checkbox">
</div>
<div>
<p class="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Ethics &amp; Law</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Policy changes and medical legal updates.</p>
</div>
</label>
</div>
<div class="editorial-line my-unit-xl"></div>
<div class="flex flex-col md:flex-row items-center justify-between gap-unit-lg">
<div>
<p class="font-label-lg text-label-lg text-primary">Frequency</p>
<div class="flex gap-unit-md mt-unit-sm">
<button class="px-unit-md py-unit-xs border border-primary bg-primary text-on-primary font-label-md text-label-md">Weekly</button>
<button class="px-unit-md py-unit-xs border border-outline-variant font-label-md text-label-md hover:bg-surface-container transition-colors">Monthly Digest</button>
</div>
</div>
<button class="bg-secondary text-on-secondary px-unit-xl py-unit-md font-label-lg text-label-lg shadow-archival hover:brightness-110 active:scale-95 transition-all">
                                        Update Preferences
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-primary-container dark:bg-tertiary-container w-full mt-auto">
<div class="max-w-container-max mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div class="md:col-span-1">
<h3 class="font-headline-md text-headline-md text-on-primary-container mb-unit-md">Dr. Ayuba's Corner</h3>
<p class="font-body-sm text-body-sm text-on-primary-container opacity-80 max-w-xs">
                    Advancing the standard of pediatric intellectual discourse through dedicated archival research.
                </p>
</div>
<div>
<h4 class="font-label-lg text-label-lg text-secondary-fixed mb-unit-md">Resources</h4>
<ul class="space-y-unit-xs">
<li><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Faculty Directory</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Institutional Research</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Sitemap</a></li>
</ul>
</div>
<div>
<h4 class="font-label-lg text-label-lg text-secondary-fixed mb-unit-md">Legal</h4>
<ul class="space-y-unit-xs">
<li><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Privacy Policy</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 class="font-label-lg text-label-lg text-secondary-fixed mb-unit-md">Contact</h4>
<p class="font-body-sm text-body-sm text-on-primary-container opacity-80">
                    Administrative Building A<br>
                    Level 4, Faculty Wing<br>
                    contact@ayubacorner.edu
                </p>
</div>
</div>
<div class="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-outline-variant border-opacity-20 flex flex-col md:flex-row justify-between items-center gap-unit-md">
<p class="font-body-sm text-body-sm text-on-primary-container opacity-60">© 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.</p>
<div class="flex gap-unit-lg">
<span class="material-symbols-outlined text-on-primary-container cursor-pointer hover:text-secondary-fixed transition-colors" data-icon="share">share</span>
<span class="material-symbols-outlined text-on-primary-container cursor-pointer hover:text-secondary-fixed transition-colors" data-icon="public">public</span>
</div>
</div>
</footer>
<script>
        // Micro-interactions for form focus
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('focus', () => {
                emailInput.parentElement.classList.add('shadow-archival');
            });
            emailInput.addEventListener('blur', () => {
                emailInput.parentElement.classList.remove('shadow-archival');
            });
        }

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('article').forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });
    </script>

      ` }} />
    </div>
  );
}
