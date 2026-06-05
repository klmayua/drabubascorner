import React from 'react';

export const metadata = {
  title: "Research Archive Search (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-surface text-primary font-body-md overflow-x-hidden" 
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
                    "surface-container-lowest": "#ffffff",
                    "tertiary": "#050300",
                    "primary-container": "#0b1d3a",
                    "on-primary-container": "#7585a8",
                    "outline": "#75777e",
                    "surface-bright": "#f8f9fa",
                    "error": "#ba1a1a",
                    "on-tertiary-fixed-variant": "#5c4300",
                    "inverse-on-surface": "#f0f1f2",
                    "on-error-container": "#93000a",
                    "on-background": "#191c1d",
                    "primary-fixed-dim": "#b6c7ec",
                    "secondary": "#476729",
                    "surface": "#f8f9fa",
                    "background": "#f8f9fa",
                    "secondary-container": "#c7efa1",
                    "secondary-fixed": "#c7efa1",
                    "on-tertiary-container": "#a87f0f",
                    "tertiary-fixed-dim": "#f1bf51",
                    "surface-tint": "#4f5e7f",
                    "on-secondary-fixed-variant": "#304f13",
                    "on-primary": "#ffffff",
                    "on-error": "#ffffff",
                    "primary": "#00030f",
                    "tertiary-fixed": "#ffdf9f",
                    "surface-container-high": "#e7e8e9",
                    "on-tertiary": "#ffffff",
                    "error-container": "#ffdad6",
                    "on-secondary-fixed": "#0d2000",
                    "on-primary-fixed": "#091b38",
                    "inverse-primary": "#b6c7ec",
                    "on-primary-fixed-variant": "#374766",
                    "primary-fixed": "#d7e2ff",
                    "on-surface": "#191c1d",
                    "secondary-fixed-dim": "#acd287",
                    "tertiary-container": "#281b00",
                    "on-secondary": "#ffffff",
                    "surface-container-low": "#f3f4f5",
                    "on-tertiary-fixed": "#261a00",
                    "surface-container-highest": "#e1e3e4",
                    "on-surface-variant": "#44474d",
                    "surface-container": "#edeeef",
                    "inverse-surface": "#2e3132",
                    "surface-dim": "#d9dadb",
                    "surface-variant": "#e1e3e4",
                    "outline-variant": "#c5c6ce",
                    "on-secondary-container": "#4c6e2e"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "unit-md": "16px",
                    "container-max": "1440px",
                    "unit-sm": "8px",
                    "margin-desktop": "80px",
                    "unit-2xl": "80px",
                    "unit-lg": "24px",
                    "unit-xs": "4px",
                    "gutter": "32px",
                    "unit-xl": "48px"
            },
            "fontFamily": {
                    "display-xl": ["Playfair Display"],
                    "label-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "body-lg": ["Inter"],
                    "display-lg": ["Playfair Display"],
                    "body-sm": ["Inter"],
                    "headline-md": ["Playfair Display"],
                    "label-md": ["Inter"],
                    "headline-sm": ["Playfair Display"],
                    "headline-lg": ["Playfair Display"]
            },
            "fontSize": {
                    "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
                    "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                    "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                    "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                    "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                    "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .active-filter-underline {
            position: relative;
        }
        .active-filter-underline::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #ffdf9f; /* tertiary-fixed (gold) */
        }
        .result-card:hover {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
            transition: all 0.3s ease;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar - Shared Component Implementation -->
<header class="bg-surface docked full-width top-0 z-50 border-b border-outline-variant opacity-90 backdrop-blur-sm">
<div class="flex justify-between items-center h-24 w-full px-margin-desktop max-w-container-max mx-auto">
<div class="flex items-center">
<img alt="Dr. Ayuba's Corner" class="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFoX-3dHftfPHI-hUUogU0PigoOfEtQvjlI_kQDoHlDV--sAaWFwmBCl9Ruv0r6Rk21YUkFaNik9WO3pR8Aqca2Rl_Plnwnw4waB7wBSFXvmnDadjjket30NsSi7ZkCaZkvrPtq2uxJYf50_zfZ-i1WYGZs_hr_oGDh1c8UvDHxkz-re-QDn2jsqfnRb0hyGH_t97531MUIqUORYdPofZjshwG5fDtu7JSmZ9trYJ_5lnrVHvhVBlihWws9pK1Wb24Gq7B7rnUl3o"/>
</div>
<nav class="hidden md:flex items-center space-x-8">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Archives</a>
<a class="font-label-lg text-label-lg text-primary border-b-2 border-tertiary-fixed pb-1" href="#">Research</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Lectures</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Faculty</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Contact</a>
</nav>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-primary p-2 hover:bg-surface-container-low transition-colors">account_circle</button>
</div>
</div>
</header>
<main class="max-w-container-max mx-auto px-margin-desktop py-unit-xl grid grid-cols-12 gap-gutter">
<!-- Sidebar Navigation - Shared Component Implementation -->
<aside class="col-span-3 hidden lg:flex flex-col gap-unit-xl">
<div class="bg-surface-container-low p-unit-lg border-r border-outline-variant min-h-[600px] flex flex-col">
<div class="mb-unit-xl">
<h2 class="font-headline-sm text-headline-sm text-primary mb-1">Institutional Menu</h2>
<p class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Academic Excellence</p>
</div>
<nav class="flex flex-col gap-4">
<a class="flex items-center gap-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all pl-4 group" href="#">
<span class="material-symbols-outlined group-hover:text-primary">menu_book</span>
<span class="font-label-lg text-label-lg">Archives</span>
</a>
<a class="flex items-center gap-4 py-3 text-primary font-bold border-l-4 border-tertiary-fixed pl-4 bg-surface-container-highest" href="#">
<span class="material-symbols-outlined">science</span>
<span class="font-label-lg text-label-lg">Research</span>
</a>
<a class="flex items-center gap-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all pl-4 group" href="#">
<span class="material-symbols-outlined group-hover:text-primary">school</span>
<span class="font-label-lg text-label-lg">Lectures</span>
</a>
<a class="flex items-center gap-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all pl-4 group" href="#">
<span class="material-symbols-outlined group-hover:text-primary">account_balance</span>
<span class="font-label-lg text-label-lg">Faculty</span>
</a>
<a class="flex items-center gap-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all pl-4 group" href="#">
<span class="material-symbols-outlined group-hover:text-primary">mail</span>
<span class="font-label-lg text-label-lg">Contact</span>
</a>
</nav>
<!-- Advanced Filters Section (Integrated into Sidebar) -->
<div class="mt-unit-2xl border-t border-outline-variant pt-unit-lg">
<h3 class="font-label-lg text-label-lg text-primary mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-sm">filter_list</span>
                        ADVANCED FILTERS
                    </h3>
<div class="space-y-6">
<div>
<label class="font-label-md text-label-md text-on-surface-variant block mb-2">DISCIPLINE</label>
<select class="w-full bg-white border border-outline px-3 py-2 text-body-sm focus:border-primary-container outline-none appearance-none">
<option>All Disciplines</option>
<option>Theoretical Physics</option>
<option>Computational Biology</option>
<option>Historical Philosophy</option>
</select>
</div>
<div>
<label class="font-label-md text-label-md text-on-surface-variant block mb-2">PUBLICATION DATE</label>
<div class="flex gap-2">
<input class="w-1/2 bg-white border border-outline px-3 py-2 text-body-sm focus:border-primary-container outline-none" placeholder="From" type="text"/>
<input class="w-1/2 bg-white border border-outline px-3 py-2 text-body-sm focus:border-primary-container outline-none" placeholder="To" type="text"/>
</div>
</div>
<div>
<label class="flex items-center gap-3 cursor-pointer">
<input checked="" class="w-4 h-4 border-outline text-primary focus:ring-primary-container" type="checkbox"/>
<span class="font-body-sm text-body-sm text-on-surface">Peer-Reviewed Only</span>
</label>
</div>
<button class="w-full bg-primary text-white py-3 font-label-lg tracking-widest hover:bg-primary-container transition-all">
                            APPLY FILTERS
                        </button>
</div>
</div>
</div>
</aside>
<!-- Main Content Area -->
<div class="col-span-12 lg:col-span-6 flex flex-col gap-unit-lg">
<!-- Search Header -->
<div class="mb-unit-md">
<h1 class="font-display-lg text-display-lg text-primary mb-4">Research Archive</h1>
<div class="relative group">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input class="w-full bg-surface-container-lowest border border-outline-variant py-5 pl-14 pr-6 text-body-lg focus:border-primary transition-all outline-none" placeholder="Search the archives..." type="text" value="Quantum entanglement in macroscopic systems"/>
</div>
<p class="mt-4 font-body-sm text-on-surface-variant italic">Showing 1,248 results for "Quantum entanglement..."</p>
</div>
<!-- Results List -->
<div class="flex flex-col gap-unit-md">
<!-- Result Item 1 -->
<article class="result-card bg-white p-unit-lg border border-primary/10 relative">
<div class="absolute top-0 left-0 w-full h-1 bg-secondary opacity-20"></div>
<div class="flex justify-between items-start mb-2">
<span class="font-label-md text-label-md text-secondary-container bg-primary-container px-2 py-0.5 rounded-sm">PEER REVIEWED</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">July 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-3 hover:text-on-primary-container cursor-pointer transition-colors">Stability of Non-Equilibrium Macroscopic States in Symmetrical Quantum Fields</h3>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-6">
                        This paper investigates the intersection of quantum field theory and macroscopic stability, proposing a new model for observing entanglement patterns across distributed symmetrical networks. By leveraging longitudinal data from the Ayuba-Corner particle accelerator...
                    </p>
<div class="flex flex-wrap items-center gap-6 border-t border-outline-variant/10 pt-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-tertiary-container text-sm">format_quote</span>
<span class="font-label-md text-label-md text-primary">Citations: 42</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-tertiary-container text-sm">link</span>
<a class="font-label-md text-label-md text-primary hover:underline" href="#">DOI: 10.1038/s41586-024-0012-y</a>
</div>
<button class="ml-auto text-on-tertiary-container font-label-md hover:underline decoration-tertiary-fixed underline-offset-4">VIEW FULL PAPER</button>
</div>
</article>
<!-- Result Item 2 -->
<article class="result-card bg-white p-unit-lg border border-primary/10 relative">
<div class="flex justify-between items-start mb-2">
<span class="font-label-md text-label-md text-on-surface-variant border border-outline-variant px-2 py-0.5 rounded-sm">WORKING PAPER</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">May 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-3 hover:text-on-primary-container cursor-pointer transition-colors">Topological Data Analysis in Social Infrastructure Modeling</h3>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-6">
                        An interdisciplinary review of how topological invariants can predict failure points in modern urban social structures. The research utilizes the Corner Institutional Archives to trace developmental patterns over the last four decades...
                    </p>
<div class="flex flex-wrap items-center gap-6 border-t border-outline-variant/10 pt-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-tertiary-container text-sm">format_quote</span>
<span class="font-label-md text-label-md text-primary">Citations: 12</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-tertiary-container text-sm">link</span>
<a class="font-label-md text-label-md text-primary hover:underline" href="#">DOI: 10.1145/3613482.361418</a>
</div>
<button class="ml-auto text-on-tertiary-container font-label-md hover:underline decoration-tertiary-fixed underline-offset-4">VIEW FULL PAPER</button>
</div>
</article>
<!-- Result Item 3 -->
<article class="result-card bg-white p-unit-lg border border-primary/10 relative">
<div class="flex justify-between items-start mb-2">
<span class="font-label-md text-label-md text-secondary-container bg-primary-container px-2 py-0.5 rounded-sm">PEER REVIEWED</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">January 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-3 hover:text-on-primary-container cursor-pointer transition-colors">Cognitive Load Theory in Digital Archival Interfaces</h3>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-6">
                        This study explores the psychological impact of institutional UI design on research efficiency. By measuring eye-tracking data across the Dr. Ayuba's Corner interface, we establish new benchmarks for professional-grade legibility...
                    </p>
<div class="flex flex-wrap items-center gap-6 border-t border-outline-variant/10 pt-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-tertiary-container text-sm">format_quote</span>
<span class="font-label-md text-label-md text-primary">Citations: 89</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-tertiary-container text-sm">link</span>
<a class="font-label-md text-label-md text-primary hover:underline" href="#">DOI: 10.1016/j.chb.2024.107932</a>
</div>
<button class="ml-auto text-on-tertiary-container font-label-md hover:underline decoration-tertiary-fixed underline-offset-4">VIEW FULL PAPER</button>
</div>
</article>
</div>
<!-- Pagination -->
<div class="flex justify-center items-center gap-4 py-unit-lg border-t border-outline-variant mt-unit-lg">
<button class="material-symbols-outlined text-primary disabled:opacity-30" disabled="">chevron_left</button>
<div class="flex gap-2">
<span class="w-10 h-10 flex items-center justify-center bg-primary text-white font-label-lg">1</span>
<span class="w-10 h-10 flex items-center justify-center text-primary font-label-lg hover:bg-surface-container-high cursor-pointer transition-colors">2</span>
<span class="w-10 h-10 flex items-center justify-center text-primary font-label-lg hover:bg-surface-container-high cursor-pointer transition-colors">3</span>
<span class="w-10 h-10 flex items-center justify-center text-primary font-label-lg">...</span>
<span class="w-10 h-10 flex items-center justify-center text-primary font-label-lg hover:bg-surface-container-high cursor-pointer transition-colors">24</span>
</div>
<button class="material-symbols-outlined text-primary hover:bg-surface-container-high transition-colors">chevron_right</button>
</div>
</div>
<!-- Featured Researcher Sidebar -->
<aside class="col-span-12 lg:col-span-3 flex flex-col gap-unit-lg">
<div class="bg-primary text-white p-unit-lg flex flex-col items-center text-center">
<h3 class="font-label-lg text-label-lg tracking-widest mb-6 opacity-80">FEATURED RESEARCHER</h3>
<div class="w-full aspect-[4/5] mb-6 overflow-hidden border border-tertiary-fixed/30">
<img alt="Dr. Ayuba" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMea3Uf6T51nw_RPgfEa8ikbRP53UbjZKiFM-xrd4fl3CH937gKqi9TGDUMiXfdP4JY2L2AU_OEPTWgXA-k7XKBuXZZVZahWCry9gCw7uyiyL9CJWEgFQDcR6hucoIGh1EPdx4A9DYM6VtgGDLyVW4iVaKVP2fQsJdiN4CmiQuzJQQvUJQ6jF6AiX5-jeyHxZSJCpucIx40L5cH-6n8_D9kTmnrBL-dA2Ngrao7ndMm0OwLBnTBn0E_jQX2YccblA5s5odIL-XEk4"/>
</div>
<h2 class="font-headline-sm text-headline-sm mb-1">Dr. Ayuba</h2>
<p class="font-body-sm text-body-sm text-tertiary-fixed mb-6 italic">Senior Fellow of Theoretical Frameworks</p>
<div class="w-12 h-px bg-tertiary-fixed/50 mb-6"></div>
<p class="font-body-sm text-body-sm opacity-90 leading-relaxed mb-6">
                    A pioneer in integrated archival logic, Dr. Ayuba has dedicated three decades to the curation of human intellectual heritage.
                </p>
<button class="border border-tertiary-fixed text-tertiary-fixed px-6 py-3 font-label-lg hover:bg-tertiary-fixed hover:text-primary transition-all duration-300">
                    VIEW FACULTY PROFILE
                </button>
</div>
<!-- Quick Access Resources -->
<div class="bg-white border border-outline-variant p-unit-lg">
<h3 class="font-label-lg text-label-lg text-primary mb-4">RELATED RESOURCES</h3>
<ul class="space-y-4">
<li class="flex items-center gap-3">
<span class="w-1.5 h-1.5 bg-tertiary-fixed-dim rotate-45"></span>
<a class="font-body-sm text-body-sm text-on-surface hover:text-on-primary-container" href="#">Library of Metadata</a>
</li>
<li class="flex items-center gap-3">
<span class="w-1.5 h-1.5 bg-tertiary-fixed-dim rotate-45"></span>
<a class="font-body-sm text-body-sm text-on-surface hover:text-on-primary-container" href="#">Citation Guide v4.0</a>
</li>
<li class="flex items-center gap-3">
<span class="w-1.5 h-1.5 bg-tertiary-fixed-dim rotate-45"></span>
<a class="font-body-sm text-body-sm text-on-surface hover:text-on-primary-container" href="#">Academic Ethics Board</a>
</li>
</ul>
</div>
</aside>
</main>
<!-- Footer - Shared Component Implementation -->
<footer class="bg-primary text-on-primary mt-unit-2xl">
<div class="w-full py-unit-2xl px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto border-t border-tertiary-fixed">
<div class="flex flex-col items-center md:items-start mb-unit-lg md:mb-0">
<h4 class="font-headline-md text-headline-md text-on-primary mb-2">Dr. Ayuba's Corner</h4>
<p class="font-body-sm text-body-sm opacity-70">© 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Archives.</p>
</div>
<nav class="flex gap-8">
<a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Accessibility</a>
<a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors underline decoration-tertiary-fixed" href="#">Archive Index</a>
</nav>
</div>
</footer>
<script>
        // Micro-interactions for the search results
        document.querySelectorAll('.result-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-2px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    </script>

      ` }} />
    </div>
  );
}
