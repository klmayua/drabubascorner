import React from 'react';

export const metadata = {
  title: "Resource Library & Research Archive (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-surface text-on-surface selection:bg-tertiary-fixed-dim selection:text-tertiary-container" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-primary-fixed-variant": "#374766",
                    "secondary": "#476729",
                    "on-tertiary": "#ffffff",
                    "on-surface": "#191c1d",
                    "surface-container-high": "#e7e8e9",
                    "on-surface-variant": "#44474d",
                    "on-secondary": "#ffffff",
                    "secondary-container": "#c7efa1",
                    "tertiary-container": "#281b00",
                    "on-tertiary-fixed-variant": "#5c4300",
                    "surface-container-lowest": "#ffffff",
                    "secondary-fixed": "#c7efa1",
                    "on-secondary-container": "#4c6e2e",
                    "on-tertiary-container": "#a87f0f",
                    "primary-container": "#0b1d3a",
                    "surface-container-low": "#f3f4f5",
                    "surface": "#f8f9fa",
                    "surface-container-highest": "#e1e3e4",
                    "outline": "#75777e",
                    "background": "#f8f9fa",
                    "on-primary-container": "#7585a8",
                    "inverse-on-surface": "#f0f1f2",
                    "secondary-fixed-dim": "#acd287",
                    "tertiary-fixed": "#ffdf9f",
                    "surface-container": "#edeeef",
                    "tertiary": "#050300",
                    "inverse-surface": "#2e3132",
                    "on-tertiary-fixed": "#261a00",
                    "on-secondary-fixed-variant": "#304f13",
                    "on-background": "#191c1d",
                    "primary-fixed": "#d7e2ff",
                    "error-container": "#ffdad6",
                    "primary-fixed-dim": "#b6c7ec",
                    "outline-variant": "#c5c6ce",
                    "on-secondary-fixed": "#0d2000",
                    "surface-dim": "#d9dadb",
                    "on-primary": "#ffffff",
                    "error": "#ba1a1a",
                    "surface-bright": "#f8f9fa",
                    "surface-tint": "#4f5e7f",
                    "on-error": "#ffffff",
                    "on-primary-fixed": "#091b38",
                    "inverse-primary": "#b6c7ec",
                    "surface-variant": "#e1e3e4",
                    "tertiary-fixed-dim": "#f1bf51",
                    "on-error-container": "#93000a",
                    "primary": "#00030f"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "gutter": "32px",
                    "unit-xl": "48px",
                    "unit-md": "16px",
                    "unit-sm": "8px",
                    "unit-2xl": "80px",
                    "container-max": "1440px",
                    "unit-xs": "4px",
                    "unit-lg": "24px",
                    "margin-desktop": "80px"
            },
            "fontFamily": {
                    "display-lg": ["Playfair Display"],
                    "display-xl": ["Playfair Display"],
                    "headline-md": ["Playfair Display"],
                    "headline-sm": ["Playfair Display"],
                    "label-md": ["Inter"],
                    "label-lg": ["Inter"],
                    "body-lg": ["Inter"],
                    "body-sm": ["Inter"],
                    "body-md": ["Inter"],
                    "headline-lg": ["Playfair Display"]
            },
            "fontSize": {
                    "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                    "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                    "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                    "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
                    "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}]
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
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #00030f20;
            border-radius: 10px;
        }
        .archive-card-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .archive-card-hover:hover {
            border-color: #f1bf51;
            transform: translateY(-2px);
        }
        .diamond-bullet::before {
            content: "◆";
            color: #f1bf51;
            margin-right: 12px;
            font-size: 0.7em;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- Top Navigation Bar -->
<nav class="bg-surface docked full-width top-0 border-b border-on-primary-container/10 z-50 sticky">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-20">
<div class="flex items-center gap-12">
<span class="font-headline-sm text-headline-sm text-primary tracking-tighter">DR. AYUBA</span>
<div class="hidden md:flex gap-8">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Research</a>
<a class="font-label-lg text-label-lg text-primary border-b-2 border-tertiary-fixed-dim pb-1" href="#">Publications</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Lectures</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Archives</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Consultancy</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Contact</a>
</div>
</div>
<div class="flex items-center gap-6">
<span class="material-symbols-outlined text-primary cursor-pointer hover:text-tertiary-fixed-dim transition-colors" data-icon="search">search</span>
<div class="w-10 h-10 rounded-full overflow-hidden border border-on-primary-container/10">
<img alt="Profile" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqQfH08gmJcAJoi2fRRq8RxdWnYqrdgLAa3wjBpiKBORRNkmqTEHIf7EKekPdvSsMFIs0mBgXeqlVesINpLxOziWn9hvgw0QebHdWMPplzh9kLoKVY1WBUNiNZCqDP9-EvOffshWHr8VL0zemZJDZbz7pxY5iS0pV3kvb0ALu2H3qkk-Tsogj-axwEm1oLfzPsz_U8fpecFZ9KqRQucEaqX09CtRew3lUAC9cRG65L5Sfb-FLaDyakxzwsda_hgyEZk3enrqXXwRg"/>
</div>
</div>
</div>
</nav>
<main class="relative">
<!-- Hero Section: Institutional Archive Header -->
<header class="relative w-full h-[400px] overflow-hidden">
<img alt="" class="w-full h-full object-cover grayscale contrast-125 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu1ROjOHmXyQhfgSSMMdEn7SI9rFvnohARqGPNqRn5q1ul68lucmmoEehb5YzJOPT42XMztetVTJpn5JGxfQ7Kg6aIx6W8-AmHf2Uou7X8RBpt4rdf01fVEVMas8C4yS_7_5z8XxM0QgKLvO7lBFwyb5B7u0Op_BitaTLxeZscPOPcHSzNOqTaBbcAJffTyEvxMjJSQdxeqcgSaA3KqZ0lyfsibHYOhkf9k3xSsMrBkhULNNrBli5jf707xVuJggTg0DpIuePVfEw"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 w-full">
<div class="max-w-[1440px] mx-auto px-margin-desktop pb-unit-xl">
<div class="inline-block bg-tertiary-fixed-dim text-tertiary-fixed px-unit-md py-unit-xs mb-unit-md font-label-lg text-label-lg uppercase tracking-widest">Repository v.2024</div>
<h1 class="font-display-xl text-display-xl text-white max-w-4xl">Scholarly Resource Library &amp; Research Archive</h1>
</div>
</div>
</header>
<!-- Search Bar Section -->
<section class="relative z-10 -mt-8">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<div class="bg-white border border-on-primary-container/10 p-unit-lg flex flex-col md:flex-row gap-unit-md items-center shadow-sm">
<div class="flex-1 w-full relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-primary-container" data-icon="search">search</span>
<input class="w-full pl-12 pr-4 py-4 border border-outline-variant font-body-md text-body-md focus:ring-0 focus:border-primary outline-none transition-all" placeholder="Deep-search institutional archives by keyword, DOI, or author..." type="text"/>
</div>
<div class="flex gap-4 w-full md:w-auto">
<select class="px-unit-lg py-4 border border-outline-variant font-label-lg text-label-lg bg-surface focus:border-primary outline-none min-w-[180px]">
<option>All Categories</option>
<option>Research Briefs</option>
<option>White Papers</option>
<option>Archival Reports</option>
</select>
<button class="bg-primary text-white px-unit-xl py-4 font-label-lg text-label-lg hover:bg-primary/90 transition-all active:scale-95">QUERY ARCHIVE</button>
</div>
</div>
</div>
</section>
<!-- Main Content Grid -->
<div class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl grid grid-cols-12 gap-gutter">
<!-- Left Column: Archive Feed (8 Columns) -->
<div class="col-span-12 lg:col-span-8 space-y-unit-2xl">
<!-- Research Briefs Section -->
<section>
<div class="flex items-center justify-between mb-unit-lg border-b border-on-primary-container/10 pb-unit-sm">
<h2 class="font-headline-md text-headline-md text-primary">Research Briefs</h2>
<a class="font-label-lg text-label-lg text-tertiary-fixed-dim hover:underline transition-all" href="#">View All Research Briefs</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-unit-lg">
<!-- Card 1 -->
<div class="bg-white border border-on-primary-container/10 p-unit-lg archive-card-hover flex flex-col h-full">
<span class="text-secondary font-label-md text-label-md mb-2">EPISTEMOLOGY</span>
<h3 class="font-headline-sm text-headline-sm text-primary mb-4 leading-tight">Epistemology of Financial Resilience in Emerging Markets</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">A rigorous inquiry into the structural foundations of fiscal stability within high-volatility economic landscapes.</p>
<div class="flex items-center justify-between pt-unit-md border-t border-on-primary-container/5">
<button class="font-label-lg text-label-lg text-primary hover:text-tertiary-fixed-dim flex items-center gap-2 group">
<span class="material-symbols-outlined text-[20px]" data-icon="description">description</span> Abstract
                                </button>
<button class="bg-surface text-primary border border-primary px-4 py-2 font-label-lg text-label-lg hover:bg-primary hover:text-white transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]" data-icon="download">download</span> PDF
                                </button>
</div>
</div>
<!-- Card 2 -->
<div class="bg-white border border-on-primary-container/10 p-unit-lg archive-card-hover flex flex-col h-full">
<span class="text-secondary font-label-md text-label-md mb-2">MACROECONOMICS</span>
<h3 class="font-headline-sm text-headline-sm text-primary mb-4 leading-tight">Post-Institutional Dynamics and Global Capital Flows</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-6">Examining the decentralization of institutional power and its impact on cross-border investment strategies.</p>
<div class="flex items-center justify-between pt-unit-md border-t border-on-primary-container/5">
<button class="font-label-lg text-label-lg text-primary hover:text-tertiary-fixed-dim flex items-center gap-2 group">
<span class="material-symbols-outlined text-[20px]" data-icon="description">description</span> Abstract
                                </button>
<button class="bg-surface text-primary border border-primary px-4 py-2 font-label-lg text-label-lg hover:bg-primary hover:text-white transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]" data-icon="download">download</span> PDF
                                </button>
</div>
</div>
</div>
</section>
<!-- White Papers & Archival Reports Section -->
<section>
<div class="flex items-center justify-between mb-unit-lg border-b border-on-primary-container/10 pb-unit-sm">
<h2 class="font-headline-md text-headline-md text-primary">Archival Reports</h2>
</div>
<div class="space-y-unit-md">
<!-- List Item 1 -->
<div class="bg-white border border-on-primary-container/10 p-unit-md flex items-center gap-unit-lg hover:bg-surface transition-colors cursor-pointer group">
<div class="w-16 h-16 bg-primary-container flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary-fixed-dim text-3xl" data-icon="article">article</span>
</div>
<div class="flex-1">
<h4 class="font-label-lg text-label-lg text-primary group-hover:text-tertiary-fixed-dim transition-colors uppercase tracking-wide">Report AR-2023-09</h4>
<p class="font-headline-sm text-headline-sm text-primary">Decadal Review of Sub-Saharan Policy Frameworks</p>
</div>
<div class="hidden md:flex gap-4">
<span class="font-label-md text-label-md text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">Archive</span>
<span class="font-label-md text-label-md text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">2.4 MB</span>
</div>
<button class="bg-tertiary-fixed-dim text-tertiary-container w-10 h-10 flex items-center justify-center hover:scale-105 transition-transform">
<span class="material-symbols-outlined" data-icon="download">download</span>
</button>
</div>
<!-- List Item 2 -->
<div class="bg-white border border-on-primary-container/10 p-unit-md flex items-center gap-unit-lg hover:bg-surface transition-colors cursor-pointer group">
<div class="w-16 h-16 bg-primary-container flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary-fixed-dim text-3xl" data-icon="history_edu">history_edu</span>
</div>
<div class="flex-1">
<h4 class="font-label-lg text-label-lg text-primary group-hover:text-tertiary-fixed-dim transition-colors uppercase tracking-wide">Report AR-2023-04</h4>
<p class="font-headline-sm text-headline-sm text-primary">Institutional Heritage and Modern Governance Models</p>
</div>
<div class="hidden md:flex gap-4">
<span class="font-label-md text-label-md text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">Archive</span>
<span class="font-label-md text-label-md text-on-surface-variant px-3 py-1 bg-surface-container rounded-full">1.8 MB</span>
</div>
<button class="bg-tertiary-fixed-dim text-tertiary-container w-10 h-10 flex items-center justify-center hover:scale-105 transition-transform">
<span class="material-symbols-outlined" data-icon="download">download</span>
</button>
</div>
</div>
</section>
</div>
<!-- Right Column: Sidebar (4 Columns) -->
<aside class="col-span-12 lg:col-span-4 space-y-unit-2xl">
<!-- Director's Commentary Section -->
<section class="bg-primary-container p-unit-lg text-white relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed-dim/10 -mr-16 -mt-16 rounded-full blur-3xl"></div>
<h3 class="font-label-lg text-label-lg text-tertiary-fixed-dim uppercase tracking-widest mb-unit-lg border-b border-white/10 pb-2 inline-block">Director's Commentary</h3>
<div class="relative z-10">
<div class="aspect-[0.78] w-full mb-unit-lg overflow-hidden border border-white/10">
<img alt="Dr. Ayuba Portrait" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDGqWBVzmGQpcAXkm4OKWyoNpitwz4ORfW0VP4X-CQz4pIuTPdtOLWCAP5Zn-m05sG8dc3vfRGH87YKOhxPSScSooIO1B9jV0clIhNU-8ZafkYDWd2Dr1kc0O85pxpyyGeecBYISBBgBrtrzcRQSbm78KJHT8sWqxt-L802_YCm6dDXSIAO7qpKxucrygBVYM6qu5Fs6ZuT6tEZ9p-NeUZOZpB9gV4LCG2jNGl2uejLyHDo2s3GVQBKWIKgCaZo5r-pTBUim6EdSE"/>
</div>
<blockquote class="font-display-lg text-[28px] italic leading-tight mb-unit-lg text-primary-fixed">
                            "The pursuit of institutional excellence is not a destination, but a continuous archival process of learning and refinement."
                        </blockquote>
<div class="space-y-unit-sm">
<p class="font-headline-sm text-headline-sm">Dr. Ayuba</p>
<p class="font-label-md text-label-md text-on-primary-container tracking-wider uppercase">Lead Director &amp; Principal Scholar</p>
</div>
<button class="mt-unit-lg w-full border border-tertiary-fixed-dim text-tertiary-fixed-dim py-3 font-label-lg text-label-lg hover:bg-tertiary-fixed-dim hover:text-primary-container transition-all">READ FULL REFLECTION</button>
</div>
</section>
<!-- Institutional Resources -->
<section class="bg-white border border-on-primary-container/10 p-unit-lg">
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-md border-l-4 border-secondary pl-4">Key Resources</h3>
<ul class="space-y-4">
<li class="diamond-bullet font-label-lg text-label-lg text-on-surface-variant cursor-pointer hover:text-primary transition-colors">Statistical Annual (2023)</li>
<li class="diamond-bullet font-label-lg text-label-lg text-on-surface-variant cursor-pointer hover:text-primary transition-colors">Peer Review Guidelines</li>
<li class="diamond-bullet font-label-lg text-label-lg text-on-surface-variant cursor-pointer hover:text-primary transition-colors">Grant Application Portal</li>
<li class="diamond-bullet font-label-lg text-label-lg text-on-surface-variant cursor-pointer hover:text-primary transition-colors">Archival Submission Protocol</li>
<li class="diamond-bullet font-label-lg text-label-lg text-on-surface-variant cursor-pointer hover:text-primary transition-colors">Ethics &amp; Compliance Standards</li>
</ul>
</section>
</aside></div>
</main>
<!-- Footer Section -->
<footer class="bg-primary-container dark:bg-primary-container w-full py-unit-2xl border-t-4 border-tertiary-fixed-dim mt-unit-2xl">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-unit-xl">
<div class="space-y-unit-sm">
<span class="font-headline-md text-headline-md text-on-primary-container">Dr. Ayuba's Corner</span>
<p class="font-body-sm text-body-sm text-on-primary-container/80 max-w-sm">Preserving intellectual capital through rigorous documentation and archival excellence for the future of global leadership.</p>
</div>
<div class="grid grid-cols-2 gap-x-12 gap-y-4">
<a class="font-label-lg text-label-lg text-on-primary-container/80 hover:text-tertiary-fixed-dim transition-colors" href="#">Privacy Policy</a>
<a class="font-label-lg text-label-lg text-on-primary-container/80 hover:text-tertiary-fixed-dim transition-colors" href="#">Terms of Service</a>
<a class="font-label-lg text-label-lg text-on-primary-container/80 hover:text-tertiary-fixed-dim transition-colors" href="#">Institutional Repository</a>
<a class="font-label-lg text-label-lg text-on-primary-container/80 hover:text-tertiary-fixed-dim transition-colors" href="#">Staff Directory</a>
</div>
</div>
<div class="mt-unit-xl pt-unit-lg border-t border-on-primary-container/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="font-body-sm text-body-sm text-on-primary-container/60">© 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Excellence.</p>
<div class="flex gap-6">
<span class="material-symbols-outlined text-on-primary-container/60 hover:text-tertiary-fixed-dim cursor-pointer" data-icon="share">share</span>
<span class="material-symbols-outlined text-on-primary-container/60 hover:text-tertiary-fixed-dim cursor-pointer" data-icon="print">print</span>
<span class="material-symbols-outlined text-on-primary-container/60 hover:text-tertiary-fixed-dim cursor-pointer" data-icon="mail">mail</span>
</div>
</div>
</div>
</footer>
<!-- Side Navigation (Suppressed for focused library view, but accessible as portal) -->
<div class="hidden fixed left-0 top-0 h-screen w-64 bg-surface-container-low border-r border-on-primary-container/10 flex flex-col py-unit-lg px-unit-md z-[60] shadow-2xl transition-transform -translate-x-full" id="sideNav">
<div class="mb-unit-xl flex justify-between items-center">
<span class="font-headline-sm text-headline-sm text-primary">Member Portal</span>
<button class="text-on-surface-variant" onclick="toggleSideNav()"><span class="material-symbols-outlined" data-icon="close">close</span></button>
</div>
<div class="flex flex-col gap-2">
<a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span> Dashboard
            </a>
<a class="flex items-center gap-4 px-4 py-3 bg-primary text-on-primary rounded-lg" href="#">
<span class="material-symbols-outlined" data-icon="folder_special">folder_special</span> Member Archives
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all" href="#">
<span class="material-symbols-outlined" data-icon="fact_check">fact_check</span> Peer Review
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all" href="#">
<span class="material-symbols-outlined" data-icon="payments">payments</span> Grants
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span> Settings
            </a>
</div>
<button class="mt-auto bg-primary text-white py-4 font-label-lg text-label-lg rounded-lg hover:scale-95 duration-150">Submit Paper</button>
</div>
<!-- Portal Trigger -->
<button class="fixed left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-r-lg shadow-lg z-40 hover:pl-5 transition-all" onclick="toggleSideNav()">
<span class="material-symbols-outlined" data-icon="arrow_forward_ios">arrow_forward_ios</span>
</button>
<script>
        function toggleSideNav() {
            const nav = document.getElementById('sideNav');
            if (nav.classList.contains('-translate-x-full')) {
                nav.classList.remove('-translate-x-full', 'hidden');
                nav.classList.add('translate-x-0');
            } else {
                nav.classList.add('-translate-x-full');
                nav.classList.remove('translate-x-0');
                setTimeout(() => nav.classList.add('hidden'), 300);
            }
        }
    </script>

      ` }} />
    </div>
  );
}
