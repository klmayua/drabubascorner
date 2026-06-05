import React from 'react';

export const metadata = {
  title: "Editorial Article Hub (Desktop Enhanced) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-surface text-on-surface font-body-md selection:bg-secondary-container" 
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
            },
          },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-card-hover:hover .card-title {
            color: #476729; /* secondary */
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f3f4f5;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #00030f;
            border-radius: 10px;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- Top Navigation Bar -->
<nav class="w-full top-0 sticky z-50 bg-surface border-b border-outline-variant">
<div class="max-w-container-max mx-auto px-margin-desktop flex justify-between items-center h-24">
<div class="flex items-center">
<img alt="Dr. Ayuba's Corner Logo" class="h-20 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8e1cibaihdMY63gnegTD36-nETfmQfv2nkBTtjStfiy9ATFHlGpwqF0N2p9vEUgkBh8ogSjlKM9NkMLAahu6GpSyEc13ysixcp4TBOrcbBaKlJLyDrhufa53eMkHYn0jco-UFR3h8E_FWSxnlXHTOX8T1K0X23tUGSEBxhvnIzOnKiXzzw3UM0-7OebWhA_ZBTwp42rNFrTp4A9fDBIRRk6uMUWg5W9azy_90Vx2MGgV5izSf4WJBbhDaWAcnq8nklStO7KLlxZo">
</div>
<div class="hidden md:flex items-center gap-unit-lg shrink-0">
<a class="font-label-lg text-label-lg text-primary border-b-2 border-secondary font-bold pb-1 whitespace-nowrap" href="#">Articles</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap" href="#">Videos</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap" href="#">Podcast</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap" href="#">Community</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap" href="#">Courses</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap" href="#">Marketplace</a>
</div>
<div class="flex items-center gap-unit-md shrink-0 ml-unit-lg">
<div class="relative hidden xl:block">
<input class="bg-surface-container-low border-outline-variant focus:border-primary focus:ring-0 text-sm px-4 py-2 w-48 rounded-none" placeholder="Search archives..." type="text">
<span class="material-symbols-outlined absolute right-3 top-2 text-on-surface-variant">search</span>
</div>
<button class="material-symbols-outlined text-primary text-2xl transition-all active:scale-95 cursor-pointer">account_circle</button>
<button class="bg-primary text-on-primary font-label-lg text-label-lg px-unit-lg py-unit-sm hover:bg-opacity-90 transition-all active:scale-95 whitespace-nowrap">Sign In</button>
</div>
</div>
</nav>
<main class="max-w-container-max mx-auto px-margin-desktop py-unit-2xl flex gap-gutter">
<!-- Main Content Area (9 Columns) -->
<div class="flex-1 space-y-unit-2xl">
<!-- Category Filtering -->
<header class="border-b border-outline-variant pb-unit-lg flex flex-col lg:flex-row justify-between lg:items-end gap-unit-lg">
<div>
<h1 class="font-display-lg text-display-lg text-primary">Research &amp; Insights</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-unit-sm">Advancing legacy through intellectual rigor in family health, leadership dynamics, and wealth preservation.</p>
</div>
<div class="flex flex-wrap gap-unit-md mb-unit-xs">
<button class="font-label-lg text-label-lg px-unit-md py-unit-sm bg-primary text-on-primary whitespace-nowrap">All Content</button>
<button class="font-label-lg text-label-lg px-unit-md py-unit-sm text-on-surface-variant hover:bg-surface-container transition-colors whitespace-nowrap">Family Health</button>
<button class="font-label-lg text-label-lg px-unit-md py-unit-sm text-on-surface-variant hover:bg-surface-container transition-colors whitespace-nowrap">Leadership</button>
<button class="font-label-lg text-label-lg px-unit-md py-unit-sm text-on-surface-variant hover:bg-surface-container transition-colors whitespace-nowrap">Wealth</button>
</div>
</header>
<!-- Featured Editorial Grid -->
<section class="grid grid-cols-12 gap-gutter">
<!-- Large Featured Card -->
<article class="col-span-12 lg:col-span-8 group cursor-pointer">
<div class="relative overflow-hidden aspect-[16/9] mb-unit-md bg-surface-container">
<img class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" data-alt="A sophisticated home library or academic office setting with floor-to-ceiling wooden bookshelves filled with leather-bound books." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkdeztzdSpdvgqJQ-SCj_OW_jTDVJeSn-U634ES1rjty4dN8wbn5fKQYSDC_BVZrkSTTggDLPbMvXuzNCwmZ342mb84kOr1Cs-eg0dSqNCPpGMIQXUBp_4IeT8KPVvWyJRW6AAu3clrd_u6dgkr6gTNzOP099utAJNbSX94isCMRdLHaj1wAysAxO7JEXX_iWi83qxKA65fNoTrE2Y40cz3V3wEjOUsLgxEUPtp9z4ktTa-gqu--6AtHq2DXZreZDDy-FLcl4bwDY">
<div class="absolute top-4 left-4 bg-primary text-on-primary font-label-lg text-label-lg px-unit-md py-1">LEADERSHIP</div>
</div>
<div class="space-y-unit-sm">
<div class="flex items-center gap-unit-sm text-on-surface-variant font-label-md text-label-md">
<span class="">JUNE 12, 2024</span>
<span class="w-1 h-1 bg-outline-variant rounded-full"></span>
<span class="">12 MIN READ</span>
</div>
<h2 class="font-headline-lg text-headline-lg text-primary group-hover:text-secondary transition-colors duration-200">The Architect of Legacy: Governing Family Interests Across Generations</h2>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-3">In this definitive research piece, Dr. Ayuba explores the intersection of corporate governance and familial bonds, outlining a new framework for multi-generational stability within institutional family structures.</p>
</div>
</article>
<!-- Sidebar Featured Articles -->
<div class="col-span-12 lg:col-span-4 space-y-unit-xl">
<article class="group cursor-pointer border-t border-outline-variant pt-unit-md">
<div class="flex items-center gap-unit-sm text-secondary font-label-md text-label-md mb-1">
<span class="material-symbols-outlined text-sm">health_and_safety</span>
<span class="">FAMILY HEALTH</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-xs group-hover:text-secondary transition-colors">Cognitive Longevity in High-Performance Aging</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-sm">New biological insights into maintaining neurological sharpess during the transition to elder statesmanship.</p>
<div class="font-label-md text-label-md text-on-surface-variant">4 MIN READ</div>
</article>
<article class="group cursor-pointer border-t border-outline-variant pt-unit-md">
<div class="flex items-center gap-unit-sm text-secondary font-label-md text-label-md mb-1">
<span class="material-symbols-outlined text-sm">payments</span>
<span class="">WEALTH</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-xs group-hover:text-secondary transition-colors">The Philanthropic Engine: Capital with Intent</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-sm">Transitioning from accumulation to distribution through institutional foundations and global impact frameworks.</p>
<div class="font-label-md text-label-md text-on-surface-variant">8 MIN READ</div>
</article>
</div>
</section>
<!-- Secondary Grid - Editorial Bento -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="bg-white border border-primary/10 p-unit-lg flex flex-col justify-between hover:shadow-lg transition-all duration-300">
<div>
<span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Case Study</span>
<h4 class="font-headline-sm text-headline-sm mt-unit-sm text-primary">The Heritage Protocol</h4>
<p class="font-body-sm text-body-sm mt-unit-sm text-on-surface-variant">How a 200-year-old estate reorganized for the digital era without losing its core identity.</p>
</div>
<a class="mt-unit-xl text-secondary font-label-lg text-label-lg border-b border-secondary w-fit pb-1" href="#">Read Research</a>
</div>
<div class="bg-primary text-on-primary p-unit-lg flex flex-col justify-between hover:bg-opacity-95 transition-all">
<div>
<span class="font-label-md text-label-md text-tertiary-fixed-dim uppercase tracking-widest">Exclusive Podcast</span>
<h4 class="font-headline-sm text-headline-sm mt-unit-sm">The Elder Discourse: Episode 42</h4>
<p class="font-body-sm text-body-sm mt-unit-sm opacity-80">Reflections on silent leadership with special guest Emeritus Professor Julian Vance.</p>
</div>
<div class="mt-unit-xl flex items-center gap-unit-md">
<button class="bg-tertiary-fixed text-on-tertiary-fixed w-10 h-10 flex items-center justify-center rounded-none"><span class="material-symbols-outlined">play_arrow</span></button>
<span class="font-label-lg text-label-lg">Listen Now (28:14)</span>
</div>
</div>
<div class="bg-white border border-primary/10 p-unit-lg flex flex-col justify-between hover:shadow-lg transition-all duration-300">
<div>
<span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Global Policy</span>
<h4 class="font-headline-sm text-headline-sm mt-unit-sm text-primary">Education for the 1%</h4>
<p class="font-body-sm text-body-sm mt-unit-sm text-on-surface-variant">Redefining elite schooling for the coming challenges of automation and climate shifts.</p>
</div>
<a class="mt-unit-xl text-secondary font-label-lg text-label-lg border-b border-secondary w-fit pb-1" href="#">Open Article</a>
</div>
</section>
</div>
<!-- Sticky Sidebar (Newsletter & Weekend Brief) -->
<aside class="w-80 hidden lg:block">
<div class="sticky top-28 space-y-unit-xl">
<!-- Weekend Brief Signup Card -->
<div class="bg-surface-container-high p-unit-lg border-l-4 border-secondary">
<h5 class="font-headline-sm text-headline-sm text-primary leading-tight">The Weekend Brief</h5>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-unit-sm">Every Sunday morning, Dr. Ayuba curates 3 essential reads for the modern decision maker.</p>
<form class="mt-unit-lg space-y-unit-md">
<div>
<label class="font-label-lg text-label-lg text-primary block mb-unit-xs">Professional Email</label>
<input class="w-full bg-white border border-outline-variant px-4 py-3 focus:ring-0 focus:border-primary text-sm rounded-none" placeholder="name@institution.com" type="email">
</div>
<button class="w-full bg-primary text-on-primary font-label-lg text-label-lg py-3 uppercase tracking-widest hover:bg-opacity-90 transition-all active:scale-[0.98]">Request Access</button>
<p class="font-label-md text-label-md text-on-surface-variant opacity-70 text-center italic">Strictly non-commercial research.</p>
</form>
</div>
<!-- Faculty Directory Quick Links -->
<div class="space-y-unit-md">
<h6 class="font-label-lg text-label-lg text-primary border-b border-outline-variant pb-2 flex items-center justify-between">
                        POPULAR TOPICS
                        <span class="material-symbols-outlined text-sm">trending_up</span>
</h6>
<ul class="space-y-unit-sm">
<li class=""><a class="flex justify-between text-body-sm text-on-surface-variant hover:text-secondary" href="#"><span class="">Endowment Management</span> <span class="text-xs opacity-50">12</span></a></li>
<li class=""><a class="flex justify-between text-body-sm text-on-surface-variant hover:text-secondary" href="#"><span class="">Bio-Hacking for Executives</span> <span class="text-xs opacity-50">8</span></a></li>
<li class=""><a class="flex justify-between text-body-sm text-on-surface-variant hover:text-secondary" href="#"><span class="">Ethical Leadership</span> <span class="text-xs opacity-50">15</span></a></li>
<li class=""><a class="flex justify-between text-body-sm text-on-surface-variant hover:text-secondary" href="#"><span class="">Legacy Trusts</span> <span class="text-xs opacity-50">21</span></a></li>
</ul>
</div>
<!-- Institutional Notice -->
<div class="bg-primary-container p-unit-md text-on-primary-container">
<div class="flex items-center gap-unit-sm mb-unit-sm">
<span class="material-symbols-outlined text-tertiary-fixed">info</span>
<span class="font-label-lg text-label-lg uppercase tracking-wider text-tertiary-fixed">Note</span>
</div>
<p class="font-body-sm text-body-sm opacity-90 leading-relaxed">The Q3 Research Journal is now available for print. Institutional members can request their copy through the Faculty Portal.</p>
</div>
</div>
</aside>
</main>
<!-- Detailed Footer -->
<footer class="w-full mt-unit-2xl bg-primary-container text-on-primary-container border-t border-outline-variant">
<div class="max-w-container-max mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter">
<!-- Brand Section -->
<div class="col-span-1 space-y-unit-md">
<span class="font-headline-md text-headline-md text-on-primary-container block">Dr. Ayuba's Corner</span>
<p class="font-body-sm text-body-sm opacity-80 leading-relaxed max-w-xs">
                    An independent research institution dedicated to the preservation of excellence across family, business, and health domains.
                </p>
<div class="flex gap-unit-md pt-unit-sm">
<span class="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed transition-colors">public</span>
<span class="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed transition-colors">description</span>
<span class="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed transition-colors">mail</span>
</div>
</div>
<!-- Link Columns -->
<div class="col-span-1 space-y-unit-md">
<h6 class="font-label-lg text-label-lg font-bold uppercase tracking-widest text-tertiary-fixed">Ecosystem</h6>
<nav class="flex flex-col gap-unit-sm">
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Articles</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Videos</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Podcast</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Community</a>
</nav>
</div>
<div class="col-span-1 space-y-unit-md">
<h6 class="font-label-lg text-label-lg font-bold uppercase tracking-widest text-tertiary-fixed">Legal &amp; Institutional</h6>
<nav class="flex flex-col gap-unit-sm">
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Faculty Directory</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Institutional Research</a>
</nav>
</div>
<div class="col-span-1 space-y-unit-md">
<h6 class="font-label-lg text-label-lg font-bold uppercase tracking-widest text-tertiary-fixed">Connect</h6>
<nav class="flex flex-col gap-unit-sm">
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Contact Us</a>
<a class="font-body-sm text-body-sm opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Sitemap</a>
<div class="pt-unit-md border-t border-on-primary-container/20">
<span class="text-[10px] font-label-md uppercase block tracking-tighter mb-1">Inquiry Hotline</span>
<span class="font-headline-sm text-headline-sm text-tertiary-fixed">+1 (800) AYUBA-CORE</span>
</div>
</nav>
</div>
</div>
<div class="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-on-primary-container/10">
<p class="font-body-sm text-body-sm opacity-60 text-center">
                © 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.
            </p>
</div>
</footer>
<!-- Micro-interaction Script -->
<script>
        document.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-md');
                nav.classList.remove('border-b');
            } else {
                nav.classList.remove('shadow-md');
                nav.classList.add('border-b');
            }
        });

        const searchInput = document.querySelector('input[type="text"]');
        if (searchInput) {
            searchInput.addEventListener('focus', () => {
                searchInput.parentElement.classList.add('ring-2', 'ring-secondary/20');
            });
            searchInput.addEventListener('blur', () => {
                searchInput.parentElement.classList.remove('ring-2', 'ring-secondary/20');
            });
        }
    </script>



      ` }} />
    </div>
  );
}
