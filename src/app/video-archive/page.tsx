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
      className="overflow-x-hidden" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
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
                    "primary-fixed": "#d7e2ff",
                    "primary": "#00030f",
                    "surface-container": "#edeeef",
                    "primary-container": "#0b1d3a",
                    "inverse-primary": "#b6c7ec",
                    "inverse-surface": "#2e3132",
                    "surface-bright": "#f8f9fa",
                    "on-tertiary-container": "#a87f0f",
                    "surface-container-high": "#e7e8e9",
                    "on-primary-fixed-variant": "#374766",
                    "background": "#f8f9fa",
                    "surface-variant": "#e1e3e4",
                    "surface": "#f8f9fa",
                    "surface-tint": "#4f5e7f",
                    "on-primary-fixed": "#091b38",
                    "surface-container-low": "#f3f4f5",
                    "tertiary-container": "#281b00",
                    "secondary-fixed": "#c7efa1",
                    "surface-container-lowest": "#ffffff",
                    "secondary-fixed-dim": "#acd287",
                    "on-surface-variant": "#44474d",
                    "on-tertiary": "#ffffff",
                    "on-secondary-fixed-variant": "#304f13",
                    "surface-dim": "#d9dadb",
                    "secondary": "#476729",
                    "on-tertiary-fixed-variant": "#5c4300",
                    "on-secondary-container": "#4c6e2e",
                    "on-secondary": "#ffffff",
                    "tertiary": "#050300",
                    "secondary-container": "#c7efa1",
                    "on-secondary-fixed": "#0d2000",
                    "error": "#ba1a1a",
                    "on-tertiary-fixed": "#261a00",
                    "outline-variant": "#c5c6ce",
                    "on-primary-container": "#7585a8",
                    "on-primary": "#ffffff",
                    "on-surface": "#191c1d",
                    "error-container": "#ffdad6",
                    "primary-fixed-dim": "#b6c7ec",
                    "on-error": "#ffffff",
                    "surface-container-highest": "#e1e3e4",
                    "outline": "#75777e",
                    "inverse-on-surface": "#f0f1f2",
                    "tertiary-fixed-dim": "#f1bf51",
                    "on-error-container": "#93000a",
                    "on-background": "#191c1d",
                    "gold-accent": "#C79A2E",
                    "navy-institutional": "#0B1D3A"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "unit-sm": "8px",
                    "unit-xl": "48px",
                    "unit-xs": "4px",
                    "unit-md": "16px",
                    "unit-lg": "24px",
                    "unit-2xl": "80px",
                    "gutter": "32px",
                    "container-max": "1440px",
                    "margin-desktop": "80px"
            },
            "fontFamily": {
                    "label-lg": ["Inter"],
                    "body-sm": ["Inter"],
                    "display-xl": ["Playfair Display"],
                    "display-lg": ["Playfair Display"],
                    "body-md": ["Inter"],
                    "headline-md": ["Playfair Display"],
                    "headline-lg": ["Playfair Display"],
                    "label-md": ["Inter"],
                    "headline-sm": ["Playfair Display"],
                    "body-lg": ["Inter"]
            }
          }
        }
      }
    </script>
<style>
        body {
            background-color: #F8F9FA;
            color: #191C1D;
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
        }
        
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        .gold-underline {
            position: relative;
        }
        .gold-underline::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #C79A2E;
        }

        .academic-card {
            border: 1px solid rgba(11, 29, 58, 0.1);
            transition: all 0.3s ease;
        }
        .academic-card:hover {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
            border-color: #C79A2E;
        }

        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #0B1D3A;
        }

        .ivory-wash {
            background: linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%);
        }

        .discipline-tag {
            font-size: 10px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            font-weight: 700;
            padding: 2px 8px;
            border: 1px solid currentColor;
        }
    </style>

<!-- TopAppBar -->
<nav class="fixed top-0 left-0 w-full z-50 bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center">
<div class="flex items-center">
<img alt="Dr. Ayuba Logo" class="h-16 md:h-20 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUUvwDyKdksJc3YzfSXDhuzewny-cvCK3BVDLO37yaDEz9y-M31lmVjtPwtQYvzM38MXsDI6-jpMrbZpedBwt90gGdf37PX3qZzmzdDEPXn-5Iycpk6YTTTW8_BTC8Xn3ST4oAuNpld2EG4hWr3frck5yTgJf0EVPSTF3NLgBahsi26U_LpKn2BKhnJYVQ-ZiaO6MReFdHuv0F-VRGmstS-HPesTen-BD1k73hY4CGVQW-n8rVG1rP5EOOmAxKumkiKRhlY6us0vw"/>
</div>
<div class="hidden md:flex items-center space-x-unit-xl">
<a class="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim font-bold hover:text-secondary transition-colors" href="#">Home</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Archive</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Research</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Library</a>
<button class="px-6 py-2 bg-navy-institutional text-white font-label-lg text-label-lg rounded-sm hover:opacity-90 transition-opacity">
                Member Access
            </button>
</div>
<button class="md:hidden text-primary">
<span class="material-symbols-outlined">menu</span>
</button>
</nav>
<!-- Side Navigation (Institutional) -->
<aside class="fixed inset-y-0 left-0 z-[60] flex flex-col bg-surface-container-low dark:bg-surface-container-high w-80 -translate-x-full transition-transform duration-300 lg:translate-x-0 pt-32 shadow-md">
<div class="px-8 mb-10">
<h2 class="font-headline-sm text-headline-sm text-primary mb-2">Member Dashboard</h2>
<p class="font-label-md text-label-md text-on-surface-variant">Better Wisdom, Health, Wealth</p>
</div>
<nav class="flex-1 overflow-y-auto custom-scrollbar">
<div class="space-y-1">
<a class="flex items-center gap-4 bg-secondary-container text-on-secondary-container rounded-full mx-2 px-4 py-3 active:scale-95 transition-all" href="#">
<span class="material-symbols-outlined">play_circle</span>
<span class="font-label-md text-label-md">Videos</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">article</span>
<span class="font-label-md text-label-md">Articles</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">podcasts</span>
<span class="font-label-md text-label-md">Podcast</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">school</span>
<span class="font-label-md text-label-md">Courses</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">library_books</span>
<span class="font-label-md text-label-md">Resources</span>
</a>
</div>
<div class="mt-10 px-8 py-4 border-t border-outline-variant">
<h3 class="font-label-lg text-label-lg text-navy-institutional mb-4">Disciplines</h3>
<ul class="space-y-3">
<li class="flex items-center gap-2">
<div class="w-1.5 h-1.5 bg-gold-accent"></div>
<span class="font-label-md text-label-md">Wisdom &amp; Philosophy</span>
</li>
<li class="flex items-center gap-2">
<div class="w-1.5 h-1.5 bg-secondary"></div>
<span class="font-label-md text-label-md">Public Health Ethics</span>
</li>
<li class="flex items-center gap-2">
<div class="w-1.5 h-1.5 bg-primary"></div>
<span class="font-label-md text-label-md">Wealth Acquisition</span>
</li>
</ul>
</div>
</nav>
</aside>
<!-- Main Content Area -->
<main class="lg:ml-80 pt-32 pb-20">
<div class="max-w-[1440px] mx-auto px-6 md:px-margin-desktop">
<!-- Featured Lecture Section -->
<section class="mb-unit-2xl">
<div class="flex flex-col lg:flex-row gap-gutter">
<!-- Primary Video Player -->
<div class="lg:w-2/3">
<div class="relative aspect-video bg-navy-institutional overflow-hidden shadow-xl border border-outline-variant">
<img class="w-full h-full object-cover opacity-60" data-alt="A cinematic, low-angle shot of a grand, mahogany-paneled university lecture hall. The lighting is dramatic and scholarly, with warm pools of light hitting a central wooden podium. The overall aesthetic is institutional and high-end, using a palette of deep navy blue, warm gold accents, and clean ivory surfaces to evoke an atmosphere of profound academic authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk56jy9HjwLtDwdS7kEiwHZ7CLuhbVjyj0kyRSiaTHgg86FwkyNZrPE57kLokRTcw5uMzIgnn4xvJoBTPVL9PJ9uo7LboVee5ab6WHfW42HjTxj63SRL_g3DID6hwL8hy8esAhCoKerkrdYYF8Onl5t9WMU9BhvimsmOGl7v0gb3jArJTfgd2tAnYi4Bj_-fk3b4y8dFPnxlDxb_ARNfdpcxGfjqa1v_jHZyn-UHQc7tABP422M2Ts26xs0wOg_heinnce_KD-psc"/>
<div class="absolute inset-0 flex items-center justify-center">
<button class="w-20 h-20 bg-gold-accent text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</button>
</div>
<div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
<span class="discipline-tag text-white border-white mb-2 inline-block">Wisdom</span>
<h1 class="font-display-lg text-display-lg text-white mb-2 leading-tight">The Ontology of Generative Wisdom</h1>
</div>
</div>
<div class="mt-6 flex justify-between items-start">
<div>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                                    An in-depth exploration of archival wisdom and its application in modern health systems. Dr. Ayuba discusses the intersection of historical precedents and future clinical architectures.
                                </p>
<div class="mt-4 flex gap-6 text-on-surface-variant font-label-md text-label-md">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> 42:15</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">calendar_today</span> Oct 12, 2024</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">school</span> Graduate Level</span>
</div>
</div>
<div class="flex gap-4">
<button class="p-2 border border-outline hover:bg-surface-container transition-colors"><span class="material-symbols-outlined">bookmark</span></button>
<button class="p-2 border border-outline hover:bg-surface-container transition-colors"><span class="material-symbols-outlined">share</span></button>
</div>
</div>
</div>
<!-- Commentary Sidebar -->
<div class="lg:w-1/3">
<div class="bg-surface-container-lowest border border-outline-variant p-8 h-full">
<h3 class="font-headline-sm text-headline-sm text-navy-institutional mb-6 italic">Director's Commentary</h3>
<div class="flex gap-4 mb-6">
<img alt="Dr. Ayuba Portrait" class="w-16 h-16 rounded-full object-cover border-2 border-gold-accent" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfvOUt0aD8HKMpEK7MPVTHz53rirv2RPzX-lPzTFl6aExZeoItAhGGlJeiGezA4FBw-BXTULM7QeDEIwxFjH4mV15ai4Ee3gW7biJdW7b6wVdxqRSCQnUuAyY_i0lgaGwKkooezva2phFLatjP5iSsdZjwem77WbG613k-DmAR4Rh549tMCwJpK7zmeOVEcgAE7sSjp4zcLXygtmDJIeubnXX9jgEHRdtTmcnU7Q0nmMFIx9f7Giui82hWAtQrFfZCa9OjhPEEgxs"/>
<div>
<h4 class="font-label-lg text-label-lg text-primary">Dr. Ayuba</h4>
<p class="font-label-md text-label-md text-on-surface-variant">Principal Researcher</p>
</div>
</div>
<blockquote class="font-body-md text-body-md text-on-surface-variant italic border-l-4 border-gold-accent pl-4 mb-6">
                                "The archive is not merely a collection of data, but a living repository of human intent. In these videos, we bridge the gap between ancient health wisdom and modern wealth generation."
                            </blockquote>
<div class="space-y-4">
<h4 class="font-label-lg text-label-lg text-primary uppercase tracking-widest text-[10px]">Reference Links</h4>
<ul class="space-y-2">
<li><a class="text-gold-accent font-label-md text-label-md hover:underline flex items-center gap-2" href="#">View Whitepaper PDF <span class="material-symbols-outlined text-xs">open_in_new</span></a></li>
<li><a class="text-gold-accent font-label-md text-label-md hover:underline flex items-center gap-2" href="#">Cite this Lecture <span class="material-symbols-outlined text-xs">format_quote</span></a></li>
</ul>
</div>
</div>
</div>
</div>
</section>
<!-- Library Archive Grid -->
<section class="mb-unit-2xl">
<div class="flex justify-between items-end mb-unit-lg border-b border-outline-variant pb-4">
<h2 class="font-headline-md text-headline-md text-navy-institutional">Research Library</h2>
<div class="flex gap-4">
<button class="font-label-lg text-label-lg text-gold-accent gold-underline">All Disciplines</button>
<button class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors">Wisdom</button>
<button class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors">Health</button>
<button class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors">Wealth</button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- Video Card 1 -->
<div class="academic-card bg-white overflow-hidden group">
<div class="relative aspect-video">
<img class="w-full h-full object-cover" data-alt="A sophisticated, minimalist laboratory setting featuring high-end glass equipment and soft architectural lighting. The scene is bathed in a pristine, bright ivory color palette with subtle navy blue undertones, projecting a clean, professional, and institutional health research atmosphere. The composition is clean and focused, symbolizing scientific rigor and intellectual depth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy91CmDXViEEx5Sqn_TeWDDwKUNfwbPAYugJ6fVzU0Lb4Ng3VyLpu5A8wc_PZrEiAFW40M3dkomKwnq2ILFlLQKwgwi2GYiW7eR9SUHnTfGr9BYgVX2wZNzgj-E6BWWbhK3J3jjrBAJlZpVO1IOj2yq7suLabN2lMppdPg1bG2k0McxUXo9JWprrNqZWLugj6nuaNuubf1iAQovbA2kViVLcRav7NZcxyfVf9mUJD5nkV2X1tLKWRXlYnh6WtpmG_n9gtuz0jmaGA"/>
<div class="absolute inset-0 bg-navy-institutional/20 group-hover:bg-navy-institutional/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<span class="material-symbols-outlined text-white text-4xl">play_circle</span>
</div>
</div>
<div class="p-6">
<span class="discipline-tag text-secondary border-secondary mb-3 inline-block">Health</span>
<h3 class="font-headline-sm text-headline-sm text-primary mb-3 leading-snug">Metabolic Architectures of Longevity</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">A technical review of cellular regeneration protocols and institutional health standards for long-term vitality.</p>
<div class="flex justify-between items-center text-on-surface-variant">
<span class="font-label-md text-label-md">Vol 14, Issue 2</span>
<span class="font-label-md text-label-md italic">18 mins</span>
</div>
</div>
</div>
<!-- Video Card 2 -->
<div class="academic-card bg-white overflow-hidden group">
<div class="relative aspect-video">
<img class="w-full h-full object-cover" data-alt="A wide, expansive view of a modern stock exchange or high-end financial institution’s digital data wall. The image features complex data visualizations in shades of deep navy blue and vibrant gold highlights. The lighting is sophisticated and professional, creating an atmosphere of elite financial intelligence and corporate stability in a clean, ivory-toned architectural environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuMTT9OGinnh_qwJG6Kl4fBTS-RKvAQg9aI0k49XXzvFKsrROWQb_8cdUQoZPuieRj9l0CT1agt4GPCphwPo5Wbe81VOIqcl959BSxotKreVYSBLoaIQejy9hR_LgANVFur_LRhrUXoc3LKoxOG7n0Ji1xsrgDEE4aXFH7O6jlEOuvd83EmPSZlCUJ_-Bq_q4PdFwJveV-VtvxxhANbkzEN0xla3ZQWi_FLnIGQPL2346ONbMX4KE4EnWlJ_VeMOZstTIPXPtzy_0"/>
<div class="absolute inset-0 bg-navy-institutional/20 group-hover:bg-navy-institutional/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<span class="material-symbols-outlined text-white text-4xl">play_circle</span>
</div>
</div>
<div class="p-6">
<span class="discipline-tag text-primary border-primary mb-3 inline-block">Wealth</span>
<h3 class="font-headline-sm text-headline-sm text-primary mb-3 leading-snug">Transgenerational Capital Strategies</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">Understanding the foundational principles of wealth preservation through institutional frameworks and strategic assets.</p>
<div class="flex justify-between items-center text-on-surface-variant">
<span class="font-label-md text-label-md">Economic Series 01</span>
<span class="font-label-md text-label-md italic">32 mins</span>
</div>
</div>
</div>
<!-- Video Card 3 -->
<div class="academic-card bg-white overflow-hidden group">
<div class="relative aspect-video">
<img class="w-full h-full object-cover" data-alt="A high-end, classical library setting with floor-to-ceiling wooden bookshelves and a single large window letting in soft, natural morning light. The color palette emphasizes warm ivory highlights, rich navy blue shadows in the corners, and subtle gold gleams from book bindings. The mood is intellectually serene, archival, and deeply rooted in historical wisdom and scholarship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCos8fpInrNvHNhRKgtySmwnjeFILB43-9WS531zb498xpyalJfGEwWdR5rEJ8o6O6fHJzDlLhMlyM61slYN2Bq-ygHJrTtN8yTFjuWpSk8hPMbZjIragjjMVX7l6dx1O5_xyjhJ0dXJDYiXZqJ-ow35gD7rbPZyvOW3KJ0wAyS3rBnwuhIgQjz4W8bORAGl4IffWMVSrZJvGV8B0DAnF8Ema3YdEQHmol1OuAMWHEZowZXFKDi7AL9-typg3vbTIY2V_BeVgcvVaw"/>
<div class="absolute inset-0 bg-navy-institutional/20 group-hover:bg-navy-institutional/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<span class="material-symbols-outlined text-white text-4xl">play_circle</span>
</div>
</div>
<div class="p-6">
<span class="discipline-tag text-gold-accent border-gold-accent mb-3 inline-block">Wisdom</span>
<h3 class="font-headline-sm text-headline-sm text-primary mb-3 leading-snug">The Archeology of Stoic Logic</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">Applying classical philosophical frameworks to modern institutional management and decision-making processes.</p>
<div class="flex justify-between items-center text-on-surface-variant">
<span class="font-label-md text-label-md">Archive 88-B</span>
<span class="font-label-md text-label-md italic">25 mins</span>
</div>
</div>
</div>
</div>
<div class="mt-12 text-center">
<button class="px-10 py-3 border-2 border-gold-accent text-gold-accent font-label-lg text-label-lg hover:bg-gold-accent hover:text-white transition-all">
                        Load Full Video Archive
                    </button>
</div>
</section>
<!-- Newsletter Enrollment -->
<section class="bg-navy-institutional p-12 md:p-unit-2xl text-center relative overflow-hidden">
<div class="absolute top-0 right-0 w-64 h-64 border-t border-r border-gold-accent/20 translate-x-32 -translate-y-32 rotate-45"></div>
<div class="relative z-10 max-w-2xl mx-auto">
<h2 class="font-display-lg text-display-lg text-white mb-6">Archive Updates</h2>
<p class="font-body-lg text-body-lg text-on-primary-container mb-8">Receive academic alerts for new video releases, whitepapers, and exclusive member-only research symposiums.</p>
<form class="flex flex-col md:flex-row gap-4">
<input class="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-6 py-4 focus:outline-none focus:border-gold-accent" placeholder="Institutional Email Address" type="email"/>
<button class="bg-gold-accent text-white px-10 py-4 font-label-lg text-label-lg uppercase tracking-widest hover:brightness-110 transition-all">Enroll</button>
</form>
<p class="mt-4 font-label-md text-label-md text-on-primary-container/60">Strict confidentiality. No third-party data sharing.</p>
</div>
</section>
</div>
</main>
<!-- Footer -->
<footer class="w-full py-20 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter bg-surface-container-lowest dark:bg-surface-container border-t border-outline-variant">
<div class="md:col-span-4">
<img alt="Dr. Ayuba Logo" class="h-24 w-auto mb-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUUvwDyKdksJc3YzfSXDhuzewny-cvCK3BVDLO37yaDEz9y-M31lmVjtPwtQYvzM38MXsDI6-jpMrbZpedBwt90gGdf37PX3qZzmzdDEPXn-5Iycpk6YTTTW8_BTC8Xn3ST4oAuNpld2EG4hWr3frck5yTgJf0EVPSTF3NLgBahsi26U_LpKn2BKhnJYVQ-ZiaO6MReFdHuv0F-VRGmstS-HPesTen-BD1k73hY4CGVQW-n8rVG1rP5EOOmAxKumkiKRhlY6us0vw"/>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                A premier research institution dedicated to the preservation and dissemination of transgenerational wisdom across the pillars of health and wealth.
            </p>
</div>
<div class="md:col-span-2 space-y-4">
<h4 class="font-label-lg text-label-lg text-primary uppercase tracking-wider">Archives</h4>
<ul class="space-y-2">
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Video Library</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Whitepapers</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Lecture Transcripts</a></li>
</ul>
</div>
<div class="md:col-span-2 space-y-4">
<h4 class="font-label-lg text-label-lg text-primary uppercase tracking-wider">Institution</h4>
<ul class="space-y-2">
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Credentials</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Faculty</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Partnerships</a></li>
</ul>
</div>
<div class="md:col-span-4 space-y-6">
<h4 class="font-label-lg text-label-lg text-primary uppercase tracking-wider">Connect</h4>
<div class="flex gap-4">
<a class="w-10 h-10 rounded-full bg-navy-institutional flex items-center justify-center text-white hover:bg-gold-accent transition-colors" href="#"><span class="material-symbols-outlined">alternate_email</span></a>
<a class="w-10 h-10 rounded-full bg-navy-institutional flex items-center justify-center text-white hover:bg-gold-accent transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
<a class="w-10 h-10 rounded-full bg-navy-institutional flex items-center justify-center text-white hover:bg-gold-accent transition-colors" href="#"><span class="material-symbols-outlined">forum</span></a>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant">© 2024 Dr. Ayuba's Corner. Better Wisdom, Better Health, Better Wealth.</p>
</div>
</footer>
<script>
        // Micro-interactions and UI logic
        document.addEventListener('DOMContentLoaded', () => {
            const menuBtn = document.querySelector('nav button');
            const sideNav = document.querySelector('aside');
            let sideNavOpen = false;

            menuBtn?.addEventListener('click', () => {
                sideNavOpen = !sideNavOpen;
                if (sideNavOpen) {
                    sideNav.classList.remove('-translate-x-full');
                } else {
                    sideNav.classList.add('-translate-x-full');
                }
            });

            // Video player hover effect logic (simulated)
            const cards = document.querySelectorAll('.academic-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.querySelector('img').style.transform = 'scale(1.05)';
                    card.querySelector('img').style.transition = 'transform 0.5s ease';
                });
                card.addEventListener('mouseleave', () => {
                    card.querySelector('img').style.transform = 'scale(1)';
                });
            });
        });
    </script>

      ` }} />
    </div>
  );
}
