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
      className="bg-surface text-on-surface font-body-md antialiased" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Playfair+Display:wght@500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "inverse-on-surface": "#f0f1f2",
                    "tertiary-fixed-dim": "#f1bf51",
                    "on-error-container": "#93000a",
                    "on-background": "#191c1d",
                    "on-error": "#ffffff",
                    "surface-container-highest": "#e1e3e4",
                    "outline": "#75777e",
                    "on-surface": "#191c1d",
                    "error-container": "#ffdad6",
                    "primary-fixed-dim": "#b6c7ec",
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
                    "surface-container-lowest": "#ffffff",
                    "secondary-fixed-dim": "#acd287",
                    "on-surface-variant": "#44474d",
                    "on-tertiary": "#ffffff",
                    "on-secondary-fixed-variant": "#304f13",
                    "surface": "#f8f9fa",
                    "surface-tint": "#4f5e7f",
                    "on-primary-fixed": "#091b38",
                    "surface-container-low": "#f3f4f5",
                    "tertiary-container": "#281b00",
                    "secondary-fixed": "#c7efa1",
                    "inverse-surface": "#2e3132",
                    "surface-bright": "#f8f9fa",
                    "on-tertiary-container": "#a87f0f",
                    "surface-container-high": "#e7e8e9",
                    "on-primary-fixed-variant": "#374766",
                    "background": "#f8f9fa",
                    "surface-container": "#edeeef",
                    "primary-container": "#0b1d3a",
                    "inverse-primary": "#b6c7ec",
                    "primary": "#00030f"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "margin-desktop": "80px",
                    "container-max": "1440px",
                    "gutter": "32px",
                    "unit-lg": "24px",
                    "unit-2xl": "80px",
                    "unit-md": "16px",
                    "unit-xs": "4px",
                    "unit-xl": "48px",
                    "unit-sm": "8px"
            },
            "fontFamily": {
                    "label-lg": ["Inter"],
                    "body-sm": ["Inter"],
                    "display-xl": ["Playfair Display"],
                    "display-lg": ["Playfair Display"],
                    "body-md": ["Inter"],
                    "headline-md": ["Playfair Display"],
                    "label-md": ["Inter"],
                    "headline-lg": ["Playfair Display"],
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
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                    "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}],
                    "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                    "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .archival-border {
            border: 1px solid rgba(0, 3, 15, 0.1);
        }
        .gold-diamond-list li {
            position: relative;
            padding-left: 1.5rem;
        }
        .gold-diamond-list li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.6em;
            width: 8px;
            height: 8px;
            background-color: #f1bf51;
            transform: rotate(45deg);
        }
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #f8f9fa;
        }
        ::-webkit-scrollbar-thumb {
            background: #d7e2ff;
            border-radius: 10px;
        }
    </style>

<!-- TopNavBar -->
<header class="bg-surface fixed top-0 left-0 right-0 z-50 border-b border-outline-variant/30">
<div class="max-w-[1440px] mx-auto flex justify-between items-center px-margin-desktop h-20">
<div class="flex items-center gap-12">
<img alt="Dr. Ayuba's Corner Brand Logo" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg7az5Cvf4Q4CqXuT39FBSPL9FnhpDdO850oMNLQ2XFO-c75Ql6yUiiJosXu0E9aKMjdvSb89R5EjFCvga9KboNNhWCEiVeDXUVPDeeYuWGdwwmJsTPaA3dRkslt4EaDw5tx-NSwwvMl7sxjdWcXo8rrXmcK-pqgSoCrXLRKBiVfimEtAZtfiPZOc4NgyfeUUcyhp_FpNDO21B-pj7aj8ZVN90Mz_VjfgDcgAKnuflXIxwSojnxvWDwIm3Zf4REnX2QQg__iBM8ks">
<nav class="hidden md:flex gap-8 items-center">
<a class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant dark:text-on-surface-variant/70 pb-1 hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Archive</a>
<a class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant dark:text-on-surface-variant/70 pb-1 hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Courses</a>
<a class="font-label-lg text-label-lg uppercase tracking-wider text-primary dark:text-inverse-primary border-b-2 border-tertiary-fixed-dim pb-1" href="#">Community</a>
<a class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant dark:text-on-surface-variant/70 pb-1 hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Marketplace</a>
</nav>
</div>
<div class="flex items-center gap-6">
<div class="relative group">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">account_circle</span>
</div>
</div>
</div>
</header>
<div class="pt-20 flex min-h-screen">
<!-- SideNavBar -->
<aside class="fixed left-0 top-20 bottom-0 z-40 w-72 bg-surface-container-low border-r border-outline-variant/20 p-unit-md flex flex-col">
<div class="mb-unit-xl px-2">
<div class="font-headline-sm text-headline-sm font-bold text-primary">Research Library</div>
<div class="font-label-md text-label-md text-on-surface-variant">Academic Excellence</div>
</div>
<nav class="flex-1 space-y-2">
<a class="flex items-center gap-3 p-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-all duration-300 rounded-lg" href="#">
<span class="material-symbols-outlined">subscriptions</span>
<span>Video Archive</span>
</a>
<a class="flex items-center gap-3 p-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-all duration-300 rounded-lg" href="#">
<span class="material-symbols-outlined">school</span>
<span>Course Catalog</span>
</a>
<a class="flex items-center gap-3 p-3 font-label-md text-label-md bg-secondary-container text-on-secondary-container rounded-lg" href="#">
<span class="material-symbols-outlined">diversity_3</span>
<span>Member Hub</span>
</a>
<a class="flex items-center gap-3 p-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-all duration-300 rounded-lg" href="#">
<span class="material-symbols-outlined">menu_book</span>
<span>IP Marketplace</span>
</a>
</nav>
<button class="mt-4 mb-8 w-full bg-primary text-on-primary py-3 font-label-lg rounded-lg hover:opacity-90 transition-opacity">
                Request Access
            </button>
<div class="mt-auto border-t border-outline-variant/20 pt-4 space-y-1">
<a class="flex items-center gap-3 p-2 font-label-md text-label-md text-on-surface-variant hover:text-primary" href="#">
<span class="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
<a class="flex items-center gap-3 p-2 font-label-md text-label-md text-on-surface-variant hover:text-primary" href="#">
<span class="material-symbols-outlined">contact_support</span>
<span>Support</span>
</a>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="flex-1 ml-72 max-w-[calc(1440px-288px)] mx-auto p-unit-xl">
<!-- Header Section -->
<section class="mb-unit-2xl">
<div class="flex justify-between items-end mb-unit-lg">
<div>
<h1 class="font-display-lg text-display-lg text-primary mb-2">Community Hub</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A private forum for rigorous academic discourse, institutional strategy, and intellectual growth.</p>
</div>
<div class="flex gap-4">
<button class="px-6 py-2 border border-tertiary-fixed-dim text-tertiary-fixed-dim font-label-lg hover:bg-tertiary-fixed-dim/5 transition-colors uppercase tracking-widest">Post Discussion</button>
</div>
</div>
</section>
<div class="grid grid-cols-12 gap-gutter">
<!-- Leaders Circle Feed (8 Columns) -->
<div class="col-span-8 space-y-8">
<h2 class="font-headline-md text-headline-md text-primary pb-4 border-b border-outline-variant/20 flex items-center gap-3">
<span class="material-symbols-outlined text-tertiary-fixed-dim">workspace_premium</span>
                        Leaders Circle
                    </h2>
<!-- Feed Items -->
<article class="archival-border bg-white p-unit-lg hover:shadow-lg transition-shadow duration-300">
<div class="flex items-start justify-between mb-4">
<div class="flex gap-4">
<div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">SM</div>
<div>
<h3 class="font-label-lg text-label-lg text-primary">Dr. Sarah Mensah</h3>
<p class="font-label-md text-label-md text-on-surface-variant">Dean of Research, ADEI • 2h ago</p>
</div>
</div>
<span class="bg-secondary-container px-3 py-1 font-label-md text-label-md text-on-secondary-container">INSTITUTIONAL STRATEGY</span>
</div>
<h4 class="font-headline-sm text-headline-sm text-primary mb-4">Rethinking Digital Sovereignty in West African Academia</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                            The recent shifts in data localization laws present a unique challenge for institutional archival systems. We must consider how the Corner's infrastructure can serve as a blueprint for intellectual property protection...
                        </p>
<div class="flex items-center justify-between pt-6 border-t border-outline-variant/10">
<div class="flex gap-6">
<button class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">forum</span>
<span class="font-label-md">24 Comments</span>
</button>
<button class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">thumb_up</span>
<span class="font-label-md">156 High-Impact</span>
</button>
</div>
<button class="text-tertiary-fixed-dim font-label-lg uppercase tracking-wider underline hover:no-underline transition-all">Engage</button>
</div>
</article>
<article class="archival-border bg-white p-unit-lg hover:shadow-lg transition-shadow duration-300">
<div class="flex items-start justify-between mb-4">
<div class="flex gap-4">
<div class="w-12 h-12 rounded-full bg-tertiary-fixed text-primary flex items-center justify-center font-bold">JA</div>
<div>
<h3 class="font-label-lg text-label-lg text-primary">Prof. Jide Ayuba</h3>
<p class="font-label-md text-label-md text-on-surface-variant">Founder • 5h ago</p>
</div>
</div>
<span class="bg-surface-container-high px-3 py-1 font-label-md text-label-md text-on-surface-variant">OPEN CALL</span>
</div>
<h4 class="font-headline-sm text-headline-sm text-primary mb-4">The Ethics of AI-Generated Curriculum: A Faculty Consensus</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                            I am looking for three faculty leads to spearhead our upcoming whitepaper on algorithmic bias in educational delivery. This work will be presented at the November Digital Excellence Summit.
                        </p>
<div class="flex items-center justify-between pt-6 border-t border-outline-variant/10">
<div class="flex gap-6">
<button class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">forum</span>
<span class="font-label-md">8 Comments</span>
</button>
<button class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">thumb_up</span>
<span class="font-label-md">42 High-Impact</span>
</button>
</div>
<button class="text-tertiary-fixed-dim font-label-lg uppercase tracking-wider underline hover:no-underline transition-all">Engage</button>
</div>
</article>
<!-- Private Roundtable Feature -->
<div class="relative archival-border bg-primary-container p-unit-xl text-on-primary overflow-hidden">
<div class="absolute right-0 top-0 h-full w-1/3 opacity-20 pointer-events-none">

</div>
<div class="relative z-10 max-w-lg">
<span class="font-label-lg text-label-lg text-tertiary-fixed-dim uppercase tracking-[0.2em] mb-4 block">Exclusive Event</span>
<h2 class="font-display-lg text-display-lg mb-6 leading-tight">Private Roundtable: The Future of African IP</h2>
<p class="font-body-lg text-body-lg text-on-primary/80 mb-8">Join Dr. Ayuba and special guests for an off-the-record strategic deep dive into intellectual property rights in the digital age.</p>
<div class="flex gap-8 mb-8">
<div>
<span class="block font-label-md text-label-md uppercase opacity-60">Date</span>
<span class="font-label-lg">Sept 14, 2024</span>
</div>
<div>
<span class="block font-label-md text-label-md uppercase opacity-60">Format</span>
<span class="font-label-lg">Virtual Syndicate</span>
</div>
</div>
<button class="px-8 py-3 bg-tertiary-fixed text-primary font-label-lg uppercase tracking-widest hover:brightness-110 transition-all">Secure Invitation</button>
</div>
</div>
</div>
<!-- Sidebars (4 Columns) -->
<div class="col-span-4 space-y-gutter">
<!-- Member Directory Sidebar -->
<section class="archival-border bg-white p-unit-lg">
<h2 class="font-headline-sm text-headline-sm text-primary mb-6 flex items-center justify-between">
                            Members
                            <span class="material-symbols-outlined text-outline">group</span>
</h2>
<div class="space-y-6">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-variant overflow-hidden">
<img alt="Member Avatar" class="w-full h-full object-cover" data-alt="A professional studio portrait of a distinguished academic male with glasses and a thoughtful expression. He is wearing a dark navy blazer and white collared shirt against a soft grey background. The lighting is sophisticated and directional, creating a high-end editorial feel consistent with a prestigious institutional magazine." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWR4I7CpwkJPoD2Om4cE_H_GNfLzoGvGUUVgnyDMOI9kdJuawtNrlIw5wzPD6VrQYc9Y4-x1fhsSdEkvMpCQxn3l1mYiHs0x89bU3boD4Ha3erInnWR1Ayf0MBpX9wnNWkLB4ySrNRtlxZi-wMWrh9rdobP7iMp3fXCDtkRIA3tcggS4LSc3UB7B3_dQESGQWb5Uu8QQFKDQFkMvDgPuraK2YRx4ddzD_bCPy0KOh7U6DZDQFbNJdMmiDR_AboZxzBZdyi57tjr0Q">
</div>
<div>
<p class="font-label-lg text-label-lg text-primary leading-none">Dr. Felix Aris</p>
<p class="font-label-md text-label-md text-on-surface-variant">Global Policy Chair</p>
</div>
<span class="ml-auto w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-variant overflow-hidden">
<img alt="Member Avatar" class="w-full h-full object-cover" data-alt="A professional studio portrait of a confident female academic researcher in a minimalist workspace. She has a serene and intelligent gaze, wearing a professional cream-colored suit. The environment is bright and high-key with soft natural lighting, reflecting a modern and elite institutional aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOiHJIoTszDTKG073-NmLrdAd4SlOwZSNDMwxYue3R0MeidxM3jU5lGaG8-x3367Avoi7Mc8Ah2_KtYXmbjTLsLTov5YeYiiGw4N5qfatkJxUjlnIZn6oe6U8WEigf9y9WwCIOhdB5_lDTXnzOwpPjU9ejV44i7-0MviLYVNsqMsMr3I6XgKGlaDpgtrXvGvLyGam_gVv5zD6Itt4gEeJM2wCQG_ENekYfGIO9gGOMnIHUSEJoWRYGGDvHf8gxh3DQAn5vGvLN8gw">
</div>
<div>
<p class="font-label-lg text-label-lg text-primary leading-none">Elena Vassileva</p>
<p class="font-label-md text-label-md text-on-surface-variant">Ethics Fellow</p>
</div>
<span class="ml-auto w-2 h-2 rounded-full bg-secondary"></span>
</div>
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-variant overflow-hidden">
<img alt="Member Avatar" class="w-full h-full object-cover" data-alt="A professional studio headshot of a middle-aged male scholar with a distinguished salt-and-pepper beard. He is wearing a formal grey suit and a burgundy tie. The background is a blurred library of leather-bound books, conveying a sense of profound archival history and academic authority. The lighting is warm and intellectual." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDle-ew2SWamhdxnh1E78ab5DUodx-liH35zg3zcKWHiZKjoYNG15-Fmg6t2QpFwDRcUj0aKBKjbb0Jr810j3y2K4FMzN17AS7BN6NcboHFdTnbwvIDm1Qcp0lIv1DkCW6kRdwmcfma_poeQidtvAWq7mrIbMvtvonjptud4-7aVqj0d-fWkKxZb9Bdq59w8mI8K6te36k6VyI2dqn0xfVctyaf8_laY-Z14DoGdgZfEsT399qExagm6QrxyxJVnwEoYmS30joeRKU">
</div>
<div>
<p class="font-label-lg text-label-lg text-primary leading-none">Chidi Okonjo</p>
<p class="font-label-md text-label-md text-on-surface-variant">Curriculum Lead</p>
</div>
<span class="ml-auto w-2 h-2 rounded-full bg-outline/30"></span>
</div>
</div>
<button class="w-full mt-8 pt-4 border-t border-outline-variant/20 font-label-md text-label-md text-tertiary-fixed-dim uppercase tracking-widest text-center hover:text-primary transition-colors">View All Fellows</button>
</section>
<!-- Trending Research -->
<section class="archival-border bg-surface-container-low p-unit-lg">
<h2 class="font-headline-sm text-headline-sm text-primary mb-6">Trending Topics</h2>
<ul class="gold-diamond-list space-y-4">
<li class="font-label-lg text-label-lg text-on-surface">Digital Sovereignty in Africa</li>
<li class="font-label-lg text-label-lg text-on-surface">IP Rights for Solo Researchers</li>
<li class="font-label-lg text-label-lg text-on-surface">Curriculum Decolonization</li>
<li class="font-label-lg text-label-lg text-on-surface">Blockchain in Academic Records</li>
</ul>
</section>
<!-- Resource Spotlight -->
<div class="bg-white archival-border overflow-hidden">
<div class="h-48 bg-primary relative">
<img alt="Library" class="w-full h-full object-cover opacity-60" data-alt="A grand, expansive library with towering mahogany bookshelves filled with antique books. The architecture is classical with arched windows allowing soft beams of morning sunlight to illuminate dust motes in the air. The scene is silent, dignified, and evokes a deep sense of institutional history and intellectual permanence. The color palette is dominated by rich browns, deep navy, and golden light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBrPAkgUbyaUa7b7u3dmHL-g1fJ4hvcbIBqkH_UZCFG4zYs9sZtP22hvl8uxDAcuZgGhw_ZWmShL6d28TFNjND13TZXhqfflSORQBI4g3-W5J6yBzpdokTfvcdK3DDrAwFCNHTJUOqDNAZiFAxn1tkX3s0ppvABW3HKTYQyobl-1NYx3SMXbYoDT2D1wf_3eiJLDEMIbLsDv5aglffHTT-ko65wjzh8kxzjARGAcOlSow2BSyeuQUYuq2_Lb5mC85k_l3_J3-qlJ0">
<div class="absolute inset-0 flex items-center justify-center p-6 text-center">
<h3 class="font-headline-sm text-headline-sm text-white">August Research Digest</h3>
</div>
</div>
<div class="p-6">
<p class="font-body-sm text-body-sm text-on-surface-variant mb-4">The monthly summary of faculty breakthroughs and roundtable highlights is now available.</p>
<a class="inline-flex items-center gap-2 text-tertiary-fixed-dim font-label-lg uppercase tracking-wider group" href="#">
                                Download PDF
                                <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">download</span>
</a>
</div>
</div>
</div>
</div>
</main>
</div>
<!-- Footer -->
<footer class="bg-primary text-on-primary w-full py-unit-2xl px-margin-desktop mt-auto border-t border-primary-fixed-variant/10">
<div class="max-w-[1440px] mx-auto">
<div class="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div class="max-w-md">
<div class="font-display-lg text-display-lg text-tertiary-fixed mb-4">Dr. Ayuba's Corner</div>
<p class="font-body-sm text-body-sm text-on-primary/60">An exclusive digital repository and forum for leaders committed to academic and institutional excellence.</p>
</div>
<div class="grid grid-cols-2 gap-x-24 gap-y-4">
<a class="font-body-sm text-body-sm text-on-primary/60 hover:text-tertiary-fixed-dim underline transition-all" href="#">Institutional Terms</a>
<a class="font-body-sm text-body-sm text-on-primary/60 hover:text-tertiary-fixed-dim underline transition-all" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary/60 hover:text-tertiary-fixed-dim underline transition-all" href="#">Intellectual Property Rights</a>
<a class="font-body-sm text-body-sm text-on-primary/60 hover:text-tertiary-fixed-dim underline transition-all" href="#">Research Ethics</a>
</div>
</div>
<div class="pt-8 border-t border-on-primary/10">
<p class="font-body-sm text-body-sm text-on-primary/60">
                    © 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Member of the Academic Digital Excellence Initiative.
                </p>
</div>
</div>
</footer>
<script>
        // Micro-interaction for cards
        document.querySelectorAll('article').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
                card.style.transition = 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // Simple visibility observer for roundtable animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('article, section').forEach(el => {
            el.style.opacity = '0.95';
            observer.observe(el);
        });
    </script>

      ` }} />
    </div>
  );
}
