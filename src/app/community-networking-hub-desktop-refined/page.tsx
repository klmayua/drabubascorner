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
      className="bg-surface" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&amp;family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
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
                        "on-background": "#191c1d"
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
                    },
                    "fontSize": {
                        "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                        "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
                        "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                        "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}],
                        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                        "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                        "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}]
                    }
                },
            },
        }
    </script>
<style>
        body {
            background-color: #f8f9fa;
            color: #191c1d;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        .archival-border {
            border: 1px solid rgba(0, 3, 15, 0.1);
        }
        .gold-accent-top {
            border-top: 2px solid #a87f0f;
        }
        .diamond-list li::before {
            content: "◆";
            color: #a87f0f;
            font-size: 0.6rem;
            margin-right: 12px;
            vertical-align: middle;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f3f4f5;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #75777e;
        }
    </style>

<!-- TopAppBar -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 bg-surface border-b border-outline-variant">
<div class="flex items-center">
<img alt="Dr. Ayuba's Corner Logo" class="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUUvwDyKdksJc3YzfSXDhuzewny-cvCK3BVDLO37yaDEz9y-M31lmVjtPwtQYvzM38MXsDI6-jpMrbZpedBwt90gGdf37PX3qZzmzdDEPXn-5Iycpk6YTTTW8_BTC8Xn3ST4oAuNpld2EG4hWr3frck5yTgJf0EVPSTF3NLgBahsi26U_LpKn2BKhnJYVQ-ZiaO6MReFdHuv0F-VRGmstS-HPesTen-BD1k73hY4CGVQW-n8rVG1rP5EOOmAxKumkiKRhlY6us0vw"/>
</div>
<nav class="hidden md:flex items-center gap-unit-xl">
<a class="font-label-lg text-label-lg text-primary hover:text-secondary transition-colors relative group" href="#">
                Home
                <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-tertiary-fixed-dim transform scale-x-100 origin-left"></span>
</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">About</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Articles</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors underline-offset-8" href="#">Community</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Resources</a>
</nav>
<div class="flex items-center gap-unit-md">
<button class="px-unit-lg py-2 bg-primary text-on-primary font-label-lg text-label-lg rounded-DEFAULT hover:opacity-80 transition-opacity">
                Member Access
            </button>
</div>
</header>
<!-- Sidebar Navigation -->
<aside class="fixed inset-y-0 left-0 pt-24 z-[40] flex flex-col w-72 bg-surface-container-low archival-border hidden lg:flex">
<div class="px-6 py-8 border-b border-outline-variant">
<div class="flex items-center gap-4 mb-4">
<div class="w-12 h-12 rounded-full overflow-hidden bg-primary-fixed">
<img alt="Member Avatar" class="w-full h-full object-cover" data-alt="A professional headshot of a distinguished male scholar in a dark suit, captured with high-end portrait lighting in a soft-focus office setting. The aesthetic is clean, intellectual, and refined, aligning with a premium light-mode UI featuring soft neutral tones and gold accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKj8J0jcVTPsswC4H_S4mE8-0j5cNUzi9KXKsPVYCyFX7dRkqVRPHX0gxLtr_T4Msm-ZUb_0usmadAF4rrEa7XrNsK3pPjIQqSo22XlPF7ysgN-JEHtuv1d315WZ6UjBGkImH4TCdz9_lQ1bDst8QhLiUWEAUYUkBXQZNUym8LwHOq1kO9Faqg7nTxQ32IxsS5qM-s44rY_GxskdSYR5NLHaBP9_fHXlIrWkchTmDhbMFKQRYHd-gfvPuzldQbihzkHK2LSHAZUJg"/>
</div>
<div>
<h3 class="font-headline-sm text-headline-sm text-primary text-sm">Dr. Ayuba</h3>
<p class="font-label-md text-label-md text-on-surface-variant">Premium Access</p>
</div>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant italic">Better Wisdom, Health, Wealth</p>
</div>
<nav class="flex-1 py-4 overflow-y-auto custom-scrollbar">
<div class="px-4 mb-2">
<span class="font-label-md text-label-md text-outline uppercase tracking-widest px-4">Navigation</span>
</div>
<ul class="space-y-1">
<li>
<a class="flex items-center gap-4 bg-secondary-container text-on-secondary-container rounded-full mx-2 px-4 py-3 font-label-md text-label-md transition-all scale-95" href="#">
<span class="material-symbols-outlined text-[20px]">group</span>
                        Community
                    </a>
</li>
<li>
<a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 font-label-md text-label-md hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined text-[20px]">library_books</span>
                        Directory
                    </a>
</li>
<li>
<a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 font-label-md text-label-md hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined text-[20px]">article</span>
                        Research Boards
                    </a>
</li>
<li>
<a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 font-label-md text-label-md hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined text-[20px]">event</span>
                        Conferences
                    </a>
</li>
</ul>
<div class="px-4 mt-8 mb-2">
<span class="font-label-md text-label-md text-outline uppercase tracking-widest px-4">Private Lounges</span>
</div>
<ul class="space-y-1">
<li><a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 font-label-md text-label-md hover:bg-surface-container-high" href="#">Institutional Strategy</a></li>
<li><a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 font-label-md text-label-md hover:bg-surface-container-high" href="#">Wealth Preservation</a></li>
<li><a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 font-label-md text-label-md hover:bg-surface-container-high" href="#">Holistic Longevity</a></li>
</ul>
</nav>
</aside>
<!-- Main Content Canvas -->
<main class="lg:ml-72 pt-28 px-margin-desktop pb-unit-2xl max-w-container-max mx-auto">
<!-- Header Section -->
<header class="mb-unit-xl">
<h1 class="font-display-lg text-display-lg text-primary mb-unit-sm">The Global Member Hub</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">A high-fidelity networking environment designed for institutional collaboration, peer-to-peer research, and intellectual growth.</p>
</header>
<!-- Bento Grid Activity Feed & Collaboration -->
<div class="grid grid-cols-12 gap-gutter">
<!-- Research Board Highlights -->
<div class="col-span-12 lg:col-span-8 space-y-gutter">
<!-- Main Board Card -->
<section class="bg-surface-container-lowest archival-border gold-accent-top p-unit-lg rounded-lg">
<div class="flex justify-between items-center mb-unit-lg">
<div class="flex items-center gap-unit-md">
<span class="material-symbols-outlined text-secondary text-[24px]">science</span>
<h2 class="font-headline-sm text-headline-sm text-primary">Collaborative Research Boards</h2>
</div>
<button class="text-tertiary-fixed-dim font-label-lg text-label-lg hover:underline transition-all">View All Boards</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-unit-lg">
<div class="group p-unit-md bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer archival-border">
<div class="flex justify-between items-start mb-2">
<span class="px-2 py-1 bg-secondary text-on-secondary text-[10px] uppercase font-bold tracking-widest rounded-sm">Active</span>
<span class="text-[12px] text-on-surface-variant font-label-md">14 Contributors</span>
</div>
<h3 class="font-headline-sm text-[20px] text-primary mb-2">The Future of Institutional Philanthropy</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-4">Analyzing 2024 trends in high-net-worth impact investing and community-first wealth distribution models.</p>
<div class="flex -space-x-2">
<div class="w-8 h-8 rounded-full border-2 border-surface archival-border bg-gray-200"></div>
<div class="w-8 h-8 rounded-full border-2 border-surface archival-border bg-gray-300"></div>
<div class="w-8 h-8 rounded-full border-2 border-surface archival-border bg-gray-400"></div>
</div>
</div>
<div class="group p-unit-md bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer archival-border">
<div class="flex justify-between items-start mb-2">
<span class="px-2 py-1 bg-outline text-white text-[10px] uppercase font-bold tracking-widest rounded-sm">Archived</span>
<span class="text-[12px] text-on-surface-variant font-label-md">28 Contributors</span>
</div>
<h3 class="font-headline-sm text-[20px] text-primary mb-2">Neuro-Linguistic Patterns in Leadership</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-4">Peer-reviewed findings on how specific speech patterns influence organizational stability and trust.</p>
<div class="flex -space-x-2">
<div class="w-8 h-8 rounded-full border-2 border-surface archival-border bg-gray-500"></div>
<div class="w-8 h-8 rounded-full border-2 border-surface archival-border bg-gray-600"></div>
<div class="w-8 h-8 rounded-full border-2 border-surface archival-border bg-gray-700"></div>
</div>
</div>
</div>
</section>
<!-- Activity Feed -->
<section class="bg-surface-container-lowest archival-border p-unit-lg rounded-lg">
<h2 class="font-headline-sm text-headline-sm text-primary mb-unit-lg">Global Member Activity</h2>
<div class="space-y-unit-lg">
<div class="flex gap-unit-md border-b border-outline-variant pb-unit-md">
<div class="w-10 h-10 rounded-full bg-primary flex-shrink-0"></div>
<div class="flex-1">
<p class="font-body-md text-body-md"><span class="font-bold text-primary">Dr. Julian Vance</span> shared a new perspective in <span class="text-secondary underline cursor-pointer">Private Wealth Strategies</span>.</p>
<p class="font-label-md text-label-md text-on-surface-variant mt-1">2 hours ago • 14 Comments</p>
</div>
</div>
<div class="flex gap-unit-md border-b border-outline-variant pb-unit-md">
<div class="w-10 h-10 rounded-full bg-secondary flex-shrink-0"></div>
<div class="flex-1">
<p class="font-body-md text-body-md"><span class="font-bold text-primary">Institutional Council</span> announced the <span class="text-secondary underline cursor-pointer">Winter 2024 Research Grant</span> recipients.</p>
<p class="font-label-md text-label-md text-on-surface-variant mt-1">5 hours ago • Official Update</p>
</div>
</div>
<div class="flex gap-unit-md">
<div class="w-10 h-10 rounded-full bg-tertiary flex-shrink-0"></div>
<div class="flex-1">
<p class="font-body-md text-body-md"><span class="font-bold text-primary">Sarah Kensington</span> published an archival brief: <span class="text-secondary underline cursor-pointer">"The Ethics of Legacy"</span>.</p>
<p class="font-label-md text-label-md text-on-surface-variant mt-1">1 day ago • 52 Likes</p>
</div>
</div>
</div>
<button class="mt-unit-lg w-full py-3 border border-primary text-primary font-label-lg text-label-lg hover:bg-primary-container hover:text-on-primary transition-all">Load Earlier Discussions</button>
</section>
</div>
<!-- Member Directory Sidebar -->
<div class="col-span-12 lg:col-span-4 space-y-gutter">
<!-- Search & Filter Card -->
<section class="bg-surface-container p-unit-lg rounded-lg border border-outline-variant">
<h3 class="font-headline-sm text-[20px] text-primary mb-unit-md">Find a Member</h3>
<div class="space-y-unit-md">
<div>
<label class="font-label-lg text-label-lg text-primary block mb-2">Search by Name or Field</label>
<div class="relative">
<input class="w-full bg-white archival-border px-4 py-2 focus:border-primary-container outline-none transition-all font-body-sm text-body-sm" placeholder="e.g. Health Research" type="text"/>
<span class="material-symbols-outlined absolute right-3 top-2 text-on-surface-variant">search</span>
</div>
</div>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-white archival-border text-[12px] font-label-md text-on-surface-variant hover:border-secondary cursor-pointer transition-all">Philanthropy</span>
<span class="px-3 py-1 bg-white archival-border text-[12px] font-label-md text-on-surface-variant hover:border-secondary cursor-pointer transition-all">Medicine</span>
<span class="px-3 py-1 bg-white archival-border text-[12px] font-label-md text-on-surface-variant hover:border-secondary cursor-pointer transition-all">Wealth Management</span>
</div>
</div>
</section>
<!-- Online Members -->
<section class="bg-surface-container-lowest archival-border p-unit-lg rounded-lg">
<div class="flex justify-between items-center mb-unit-md">
<h3 class="font-headline-sm text-[20px] text-primary">Member Directory</h3>
<span class="w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
</div>
<div class="space-y-unit-md">
<div class="flex items-center gap-4 group cursor-pointer">
<div class="w-12 h-12 rounded-full overflow-hidden archival-border">
<img alt="Member 1" class="w-full h-full object-cover" data-alt="A portrait of a sophisticated woman with graying hair and glasses, wearing an elegant silk blouse. The lighting is soft and academic, set against a background of leather-bound books in a prestigious private library. The visual style is crisp and modern with a focus on intellectual professionalism." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvUm3H6rnPosqyw8CX3C0AHPNtLgdoBhK_9wmCpESY7kwU82EgN85QesFsotmGIscxjl9GVCoboswRP_gxeuqNtxIGS8qNERehA2Qr5LCl4BilSgmWZldZEWCbm-xbPcWkzucDo-HKUfLF2KO8YG_n-a28GxdtjtaSsK6dq3KUkt47wvyLe32li7euwT0R7xa_mfHxYUKgnv9fEJbkR37M-NgYQatMNnxSw5skxIXQ9lsWkhSQX_77BoBa361EMpJbvNBpZUZSeVY"/>
</div>
<div class="flex-1">
<p class="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Prof. Elena Rossi</p>
<p class="font-label-md text-label-md text-on-surface-variant">Cognitive Neuroscience</p>
</div>
</div>
<div class="flex items-center gap-4 group cursor-pointer">
<div class="w-12 h-12 rounded-full overflow-hidden archival-border">
<img alt="Member 2" class="w-full h-full object-cover" data-alt="A close-up professional headshot of a middle-aged man with a kind expression and sharp business attire, set against a dark gray background. The lighting is cinematic yet professional, emphasizing skin texture and clear eyes. The aesthetic is elite and institutional, suitable for a high-end corporate member directory." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi0ZGUt_krq2PntKEoKx2yuu6my52eNsgN8fLaPqoqPk7_yQIqKYCtZnpf6rgdWlYD4i4E-CtGFC5UwhGUUYUdP8F9HFuQAg4pmniH_AXrCqdn0Os5T-G7-09W6obVU_gKA_38M9qUFG68_g7fe0-K4SsvKLWCbAHPOfPWBPzLQlXQMB2a2VylK57XvRwzv3K_8iGX3kyZZDfoFzY6SSdF-sN7K2Z-SQrmwKpsYJxBosDgD4hmdM4u9iF8jUuUD6Isgw--2xvg0iM"/>
</div>
<div class="flex-1">
<p class="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Marcus Thorne</p>
<p class="font-label-md text-label-md text-on-surface-variant">Asset Diversification</p>
</div>
</div>
<div class="flex items-center gap-4 group cursor-pointer">
<div class="w-12 h-12 rounded-full overflow-hidden archival-border">
<img alt="Member 3" class="w-full h-full object-cover" data-alt="A profile photograph of a young professional woman in her thirties, dressed in a minimalist cream-colored blazer. She is smiling confidently in a bright, modern architectural space with large windows and subtle green foliage in the distance. The lighting is natural and high-key, creating a clean, elite, and approachable academic look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuRssjGX7CJ4DgJs1-bSjlyFnPr2pPwEGBkto6cfxrq6vg3_kuoCZwfSlqm8fkPXrd7_1-Z6XoXNQmVXhIadyxEPnOffPSlFSh4TwRWt1qTsYPuOwlhZovtw8Wxp8b8bg_nF3I-8hDroQdXa7omoBk26kvvljSbn5oP7B6iuRu__LiQBTcG0Y76UypnwSl2nJvbP5JelbKXu8GJK2g0PCo6rJ8P-H3xQYHG6kLupC6s3_m0XYzIxyA3q4NpghRRzsAJae6hh2ncmM"/>
</div>
<div class="flex-1">
<p class="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Dr. Sarah Kensington</p>
<p class="font-label-md text-label-md text-on-surface-variant">Bio-Ethics Council</p>
</div>
</div>
</div>
<button class="mt-unit-lg w-full py-2 bg-surface-container-high text-primary font-label-lg text-label-lg rounded-DEFAULT hover:bg-surface-variant transition-colors">View Institutional Registry</button>
</section>
<!-- Community Rules -->
<section class="bg-primary-container p-unit-lg rounded-lg text-on-primary">
<h3 class="font-headline-sm text-[20px] text-on-primary mb-unit-md">Hub Protocol</h3>
<ul class="diamond-list space-y-unit-sm font-body-sm text-body-sm text-on-primary-container">
<li>Confidentiality of all research data.</li>
<li>Respectful academic discourse.</li>
<li>Verified institutional credentials only.</li>
<li>No unsolicited commercial outreach.</li>
</ul>
</section>
</div>
</div>
</main>
<!-- Footer -->
<footer class="w-full py-20 px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter bg-surface-container-lowest border-t border-outline-variant">
<div class="md:col-span-4 flex flex-col gap-unit-md">
<h2 class="font-headline-lg text-headline-lg text-primary">Dr. Ayuba's Corner</h2>
<p class="font-body-sm text-body-sm text-on-surface-variant max-w-xs">Building better wisdom, health, and wealth through prestigious community networking and collaborative research.</p>
</div>
<div class="md:col-span-2">
<h4 class="font-label-lg text-label-lg text-primary mb-4">Ecosystem</h4>
<ul class="space-y-2">
<li><a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Articles</a></li>
<li><a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Podcast</a></li>
<li><a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Newsletter</a></li>
</ul>
</div>
<div class="md:col-span-2">
<h4 class="font-label-lg text-label-lg text-primary mb-4">Engagement</h4>
<ul class="space-y-2">
<li><a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Speaking</a></li>
<li><a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Partnerships</a></li>
<li><a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div class="md:col-span-4 flex flex-col items-start md:items-end gap-unit-md">
<div class="flex gap-4">
<a class="w-10 h-10 archival-border flex items-center justify-center hover:bg-surface-container-high transition-colors" href="#">
<span class="material-symbols-outlined text-primary">alternate_email</span>
</a>
<a class="w-10 h-10 archival-border flex items-center justify-center hover:bg-surface-container-high transition-colors" href="#">
<span class="material-symbols-outlined text-primary">group</span>
</a>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant text-left md:text-right">
                © 2024 Dr. Ayuba's Corner.<br/>Better Wisdom, Better Health, Better Wealth.
            </p>
<div class="flex gap-unit-md mt-4">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary" href="#">Privacy Policy</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary" href="#">Terms of Service</a>
</div>
</div>
</footer>
<script>
        // Micro-interactions for hover states and cards
        document.querySelectorAll('.archival-border').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = 'rgba(0, 3, 15, 0.3)';
                card.style.transition = 'border-color 0.3s ease';
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
