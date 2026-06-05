import React from 'react';

export const metadata = {
  title: "Institutional Education Catalog (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="font-body-md text-body-md overflow-x-hidden" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet">
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
          }
        }
      }
    </script>
<style>
        body {
            background-color: #f8f9fa;
            color: #191c1d;
            -webkit-font-smoothing: antialiased;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .diamond-bullet {
            width: 6px;
            height: 6px;
            background-color: #f1bf51;
            transform: rotate(45deg);
            display: inline-block;
            margin-right: 12px;
        }
        .archival-border {
            border: 1px solid rgba(0, 3, 15, 0.1);
        }
        .active-nav-border {
            border-bottom: 2px solid #f1bf51;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- Top Navigation Bar -->
<header class="bg-surface docked full-width top-0 border-b border-outline-variant/30 z-50 sticky">
<div class="max-w-[1440px] mx-auto flex justify-between items-center px-margin-desktop h-20">
<div class="flex items-center">
<img alt="Dr. Ayuba's Corner Brand Logo" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg7az5Cvf4Q4CqXuT39FBSPL9FnhpDdO850oMNLQ2XFO-c75Ql6yUiiJosXu0E9aKMjdvSb89R5EjFCvga9KboNNhWCEiVeDXUVPDeeYuWGdwwmJsTPaA3dRkslt4EaDw5tx-NSwwvMl7sxjdWcXo8rrXmcK-pqgSoCrXLRKBiVfimEtAZtfiPZOc4NgyfeUUcyhp_FpNDO21B-pj7aj8ZVN90Mz_VjfgDcgAKnuflXIxwSojnxvWDwIm3Zf4REnX2QQg__iBM8ks">
</div>
<nav class="hidden md:flex gap-unit-xl">
<a class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant/70 pb-1 hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Archive</a>
<a class="font-label-lg text-label-lg uppercase tracking-wider text-primary border-b-2 border-tertiary-fixed-dim pb-1" href="#">Courses</a>
<a class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant/70 pb-1 hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Community</a>
<a class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant/70 pb-1 hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Marketplace</a>
</nav>
<div class="flex items-center gap-unit-md">
<button class="material-symbols-outlined text-primary p-2 hover:bg-surface-container-high rounded-full transition-all duration-150">search</button>
<button class="material-symbols-outlined text-primary p-2 hover:bg-surface-container-high rounded-full transition-all duration-150">account_circle</button>
</div>
</div>
</header>
<main class="max-w-[1440px] mx-auto flex min-h-screen px-margin-desktop py-unit-2xl gap-gutter">
<!-- Sidebar Navigation -->
<aside class="w-72 hidden lg:flex flex-col gap-unit-xl">
<div class="p-unit-md archival-border bg-surface-container-low rounded-lg">
<div class="mb-unit-lg">
<h3 class="font-label-lg text-label-lg uppercase text-primary mb-unit-sm tracking-widest">Disciplines</h3>
<div class="h-0.5 w-8 bg-tertiary-fixed-dim"></div>
</div>
<ul class="flex flex-col gap-unit-sm">
<li>
<button class="w-full text-left p-unit-sm flex items-center justify-between font-label-md text-label-md bg-secondary-container text-on-secondary-container rounded-lg transition-all duration-300">
<span>Health Literacy</span>
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</li>
<li>
<button class="w-full text-left p-unit-sm flex items-center justify-between font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-all duration-300">
<span>Institutional Productivity</span>
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</li>
<li>
<button class="w-full text-left p-unit-sm flex items-center justify-between font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-all duration-300">
<span>Policy Development</span>
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</li>
<li>
<button class="w-full text-left p-unit-sm flex items-center justify-between font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-all duration-300">
<span>Academic Leadership</span>
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</li>
<li>
<button class="w-full text-left p-unit-sm flex items-center justify-between font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-all duration-300">
<span>Intellectual Property</span>
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</li>
</ul>
</div>
<div class="p-unit-md archival-border bg-white rounded-lg">
<div class="mb-unit-lg">
<h3 class="font-label-lg text-label-lg uppercase text-primary mb-unit-sm tracking-widest">Certification Level</h3>
<div class="h-0.5 w-8 bg-tertiary-fixed-dim"></div>
</div>
<div class="space-y-unit-sm">
<label class="flex items-center gap-unit-sm cursor-pointer group">
<input class="w-4 h-4 rounded border-outline focus:ring-secondary text-secondary" type="checkbox">
<span class="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">Executive Professional</span>
</label>
<label class="flex items-center gap-unit-sm cursor-pointer group">
<input class="w-4 h-4 rounded border-outline focus:ring-secondary text-secondary" type="checkbox">
<span class="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">Post-Graduate Fellow</span>
</label>
<label class="flex items-center gap-unit-sm cursor-pointer group">
<input class="w-4 h-4 rounded border-outline focus:ring-secondary text-secondary" type="checkbox">
<span class="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">Policy Analyst</span>
</label>
</div>
</div>
<div class="mt-auto archival-border p-unit-md bg-primary-container text-on-primary-fixed-variant rounded-lg">
<p class="font-label-md text-label-md text-on-primary mb-unit-sm">Need institutional support?</p>
<button class="w-full py-unit-sm bg-tertiary-fixed text-on-tertiary-fixed font-label-lg text-label-lg rounded transition-transform active:scale-95">Request Access</button>
</div>
</aside>
<!-- Main Content Area -->
<section class="flex-1">
<header class="mb-unit-xl">
<h1 class="font-display-lg text-display-lg text-primary mb-unit-sm">Institutional Learning Paths</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A curated suite of academic programs designed for the next generation of institutional leaders and policy innovators.</p>
</header>
<!-- Course Catalog Grid -->
<div class="grid grid-cols-1 xl:grid-cols-2 gap-gutter">
<!-- Course Card 1 -->
<article class="bg-white archival-border group hover:shadow-lg transition-all duration-300 flex flex-col">
<div class="h-2 w-full bg-secondary"></div>
<div class="p-unit-lg flex flex-col flex-1">
<div class="flex justify-between items-start mb-unit-md">
<span class="font-label-md text-label-md bg-secondary-container text-on-secondary-container px-unit-sm py-1 rounded">Accredited</span>
<span class="font-label-md text-label-md text-on-surface-variant">Lvl. 400</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">Strategic Policy Architecture</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg line-clamp-2">Mastering the development of sustainable institutional frameworks within emerging digital economies.</p>
<div class="mb-unit-lg space-y-unit-sm">
<h4 class="font-label-lg text-label-lg uppercase text-primary border-b border-outline-variant/30 pb-1 mb-2">Curriculum Overview</h4>
<ul class="space-y-1">
<li class="font-body-sm text-body-sm flex items-center"><span class="diamond-bullet"></span>Comparative Governance Models</li>
<li class="font-body-sm text-body-sm flex items-center"><span class="diamond-bullet"></span>Digital Transformation Ethics</li>
<li class="font-body-sm text-body-sm flex items-center"><span class="diamond-bullet"></span>Financial Sustainability Planning</li>
</ul>
</div>
<div class="mt-auto pt-unit-md border-t border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-unit-sm">
<div class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center">
<span class="material-symbols-outlined text-[20px] text-primary">person</span>
</div>
<div>
<p class="font-label-md text-label-md text-primary">Faculty: Dr. Ayuba</p>
<p class="font-label-md text-[10px] text-on-surface-variant uppercase">Senior Fellow</p>
</div>
</div>
<button class="font-label-lg text-label-lg text-secondary border-b border-secondary hover:border-b-2 transition-all">View Program</button>
</div>
</div>
</article>
<!-- Course Card 2 -->
<article class="bg-white archival-border group hover:shadow-lg transition-all duration-300 flex flex-col">
<div class="h-2 w-full bg-tertiary-fixed-dim"></div>
<div class="p-unit-lg flex flex-col flex-1">
<div class="flex justify-between items-start mb-unit-md">
<span class="font-label-md text-label-md bg-primary-container text-on-primary-container px-unit-sm py-1 rounded">In Progress</span>
<span class="font-label-md text-label-md text-on-surface-variant">Lvl. 500</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">Intellectual Property &amp; Innovation</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg line-clamp-2">Protecting institutional knowledge through advanced patent navigation and commercialization strategies.</p>
<div class="mb-unit-lg space-y-unit-sm">
<h4 class="font-label-lg text-label-lg uppercase text-primary border-b border-outline-variant/30 pb-1 mb-2">Curriculum Overview</h4>
<ul class="space-y-1">
<li class="font-body-sm text-body-sm flex items-center"><span class="diamond-bullet"></span>Patent Law Fundamentals</li>
<li class="font-body-sm text-body-sm flex items-center"><span class="diamond-bullet"></span>Monetizing Research Data</li>
<li class="font-body-sm text-body-sm flex items-center"><span class="diamond-bullet"></span>Global Compliance Standards</li>
</ul>
</div>
<div class="mt-auto pt-unit-md border-t border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-unit-sm">
<div class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center">
<span class="material-symbols-outlined text-[20px] text-primary">diversity_3</span>
</div>
<div>
<p class="font-label-md text-label-md text-primary">Faculty: Advisory Board</p>
<p class="font-label-md text-[10px] text-on-surface-variant uppercase">Collective</p>
</div>
</div>
<button class="font-label-lg text-label-lg text-secondary border-b border-secondary hover:border-b-2 transition-all">View Program</button>
</div>
</div>
</article>
<!-- Course Card 3 -->
<article class="bg-white archival-border group hover:shadow-lg transition-all duration-300 flex flex-col">
<div class="h-2 w-full bg-secondary"></div>
<div class="p-unit-lg flex flex-col flex-1">
<div class="flex justify-between items-start mb-unit-md">
<span class="font-label-md text-label-md bg-secondary-container text-on-secondary-container px-unit-sm py-1 rounded">Accredited</span>
<span class="font-label-md text-label-md text-on-surface-variant">Lvl. 300</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">Advanced Health Literacy</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg line-clamp-2">Bridging the gap between medical expertise and public comprehension in institutional communications.</p>
<div class="mb-unit-lg space-y-unit-sm">
<h4 class="font-label-lg text-label-lg uppercase text-primary border-b border-outline-variant/30 pb-1 mb-2">Curriculum Overview</h4>
<ul class="space-y-1">
<li class="font-body-sm text-body-sm flex items-center"><span class="diamond-bullet"></span>Linguistic Clarity Analysis</li>
<li class="font-body-sm text-body-sm flex items-center"><span class="diamond-bullet"></span>Public Trust Ecosystems</li>
<li class="font-body-sm text-body-sm flex items-center"><span class="diamond-bullet"></span>Policy Impact Assessment</li>
</ul>
</div>
<div class="mt-auto pt-unit-md border-t border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-unit-sm">
<div class="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center">
<span class="material-symbols-outlined text-[20px] text-primary">school</span>
</div>
<div>
<p class="font-label-md text-label-md text-primary">Faculty: Prof. Marcus</p>
<p class="font-label-md text-[10px] text-on-surface-variant uppercase">Dept. Chair</p>
</div>
</div>
<button class="font-label-lg text-label-lg text-secondary border-b border-secondary hover:border-b-2 transition-all">View Program</button>
</div>
</div>
</article>
<!-- Featured Learning Path Bento Item -->
<div class="xl:col-span-2 relative archival-border bg-primary-container overflow-hidden p-unit-xl flex flex-col md:flex-row items-center gap-unit-xl group">

<div class="relative z-10 flex-1">
<span class="font-label-lg text-label-lg text-tertiary-fixed mb-unit-sm block">PREMIUM INSTITUTIONAL ACCESS</span>
<h3 class="font-headline-lg text-headline-lg text-white mb-unit-md">Mastering High-Density Academic Leadership</h3>
<p class="font-body-lg text-body-lg text-on-primary-fixed-variant mb-unit-lg">A full-year immersive path for senior executives aiming to restructure their institutional productivity from the ground up.</p>
<div class="flex gap-unit-md">
<button class="px-unit-lg py-unit-sm bg-tertiary-fixed text-on-tertiary-fixed font-label-lg text-label-lg rounded hover:scale-105 transition-transform">Enroll Now</button>
<button class="px-unit-lg py-unit-sm border border-tertiary-fixed text-tertiary-fixed font-label-lg text-label-lg rounded hover:bg-tertiary-fixed/10 transition-colors">Download Syllabus</button>
</div>
</div>
<div class="relative z-10 w-full md:w-1/3 aspect-square bg-white/5 backdrop-blur-md archival-border p-unit-md flex flex-col justify-center text-center">
<div class="text-[48px] font-bold text-tertiary-fixed mb-2">120+</div>
<div class="font-label-md text-label-md text-white uppercase tracking-widest">Case Studies Included</div>
<div class="mt-unit-md h-px w-12 bg-tertiary-fixed mx-auto"></div>
<p class="mt-unit-md font-body-sm text-body-sm text-on-primary-fixed-variant">Access to the IP Marketplace and Archive included in this path.</p>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-unit-2xl px-margin-desktop mt-auto bg-primary dark:bg-primary-container text-on-primary border-t border-primary-fixed-variant/10">
<div class="max-w-[1440px] mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-unit-xl mb-unit-2xl">
<div class="lg:col-span-2">
<h2 class="font-display-lg text-display-lg text-tertiary-fixed mb-unit-md">Dr. Ayuba's Corner</h2>
<p class="font-body-md text-body-md text-on-primary/60 max-w-md">Advancing digital excellence through structured institutional learning and collaborative research.</p>
</div>
<div>
<h4 class="font-label-lg text-label-lg uppercase mb-unit-md">Navigation</h4>
<ul class="space-y-unit-sm">
<li><a class="font-body-sm text-body-sm text-on-primary/60 hover:text-tertiary-fixed-dim underline transition-colors" href="#">Archive</a></li>
<li><a class="font-body-sm text-body-sm text-tertiary-fixed font-bold" href="#">Courses</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary/60 hover:text-tertiary-fixed-dim underline transition-colors" href="#">Community</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary/60 hover:text-tertiary-fixed-dim underline transition-colors" href="#">Marketplace</a></li>
</ul>
</div>
<div>
<h4 class="font-label-lg text-label-lg uppercase mb-unit-md">Legal &amp; Compliance</h4>
<ul class="space-y-unit-sm">
<li><a class="font-body-sm text-body-sm text-on-primary/60 hover:text-tertiary-fixed-dim underline transition-colors" href="#">Institutional Terms</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary/60 hover:text-tertiary-fixed-dim underline transition-colors" href="#">Privacy Policy</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary/60 hover:text-tertiary-fixed-dim underline transition-colors" href="#">Intellectual Property Rights</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary/60 hover:text-tertiary-fixed-dim underline transition-colors" href="#">Research Ethics</a></li>
</ul>
</div>
</div>
<div class="border-t border-on-primary/10 pt-unit-lg flex flex-col md:flex-row justify-between items-center gap-unit-md">
<p class="font-body-sm text-body-sm text-on-primary/40 text-center md:text-left">
                    © 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Member of the Academic Digital Excellence Initiative.
                </p>
<div class="flex gap-unit-lg opacity-80 hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined cursor-pointer">share</span>
<span class="material-symbols-outlined cursor-pointer">public</span>
<span class="material-symbols-outlined cursor-pointer">verified</span>
</div>
</div>
</div>
</footer>
<script>
        // Micro-interaction for sidebar tabs
        document.querySelectorAll('aside button').forEach(button => {
            button.addEventListener('click', function() {
                // Simplified active state toggle for demo
                document.querySelectorAll('aside button').forEach(btn => {
                    btn.classList.remove('bg-secondary-container', 'text-on-secondary-container');
                    btn.classList.add('text-on-surface-variant');
                });
                this.classList.add('bg-secondary-container', 'text-on-secondary-container');
                this.classList.remove('text-on-surface-variant');
            });
        });

        // Hover effect for cards
        document.querySelectorAll('article').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0px)';
            });
        });
    </script>

      ` }} />
    </div>
  );
}
