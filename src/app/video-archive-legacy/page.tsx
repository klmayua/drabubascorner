import React from 'react';

export const metadata = {
  title: "Video Research Archive (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-background text-on-background font-body-md min-h-screen flex flex-col" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Playfair+Display:wght@500;600;700&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;family=Playfair+Display:wght@100..900&amp;display=swap" rel="stylesheet">
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
                        "surface-variant": "#e1e3e4",
                        "tertiary-fixed": "#ffdf9f",
                        "primary-fixed": "#d7e2ff",
                        "primary": "#00030f",
                        "surface-container": "#edeeef",
                        "primary-container": "#0b1d3a",
                        "inverse-primary": "#b6c7ec"
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
        }
        .bento-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 32px;
        }
        .academic-border {
            border: 1px solid rgba(0, 3, 15, 0.1);
        }
        .gold-accent {
            border-top: 3px solid #f1bf51;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar (Shell) -->
<header class="bg-surface border-b border-outline-variant/30 sticky top-0 z-50">
<div class="max-w-[1440px] mx-auto flex justify-between items-center px-margin-desktop h-20">
<!-- Brand Logo per Requirement -->
<div class="flex items-center">
<img alt="Dr. Ayuba's Corner Brand Logo" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg7az5Cvf4Q4CqXuT39FBSPL9FnhpDdO850oMNLQ2XFO-c75Ql6yUiiJosXu0E9aKMjdvSb89R5EjFCvga9KboNNhWCEiVeDXUVPDeeYuWGdwwmJsTPaA3dRkslt4EaDw5tx-NSwwvMl7sxjdWcXo8rrXmcK-pqgSoCrXLRKBiVfimEtAZtfiPZOc4NgyfeUUcyhp_FpNDO21B-pj7aj8ZVN90Mz_VjfgDcgAKnuflXIxwSojnxvWDwIm3Zf4REnX2QQg__iBM8ks">
</div>
<!-- Header Search Optimized for Research -->
<div class="hidden md:flex flex-1 max-w-md mx-unit-xl relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input class="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg pl-10 pr-4 py-2 font-label-md text-label-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Search institutional archives..." type="text">
</div>
<nav class="flex items-center space-x-unit-lg">
<a class="font-label-lg text-label-lg uppercase tracking-wider text-primary border-b-2 border-tertiary-fixed-dim pb-1" href="#">Archive</a>
<a class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant/70 hover:text-tertiary-fixed-dim transition-colors duration-200 pb-1" href="#">Courses</a>
<a class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant/70 hover:text-tertiary-fixed-dim transition-colors duration-200 pb-1" href="#">Community</a>
<button class="p-2 hover:bg-surface-container-high rounded-full transition-all">
<span class="material-symbols-outlined text-primary" data-icon="account_circle">account_circle</span>
</button>
</nav>
</div>
</header>
<main class="flex-grow max-w-[1440px] mx-auto w-full px-margin-desktop py-unit-xl">
<div class="flex gap-gutter">
<!-- SideNavBar Component Logic (Integrated as Sidebar) -->
<aside class="hidden lg:flex flex-col w-72 shrink-0 space-y-unit-xl">
<div class="p-unit-md bg-surface-container-low rounded-lg border border-outline-variant/20">
<div class="mb-unit-lg">
<h2 class="font-headline-sm text-headline-sm font-bold text-primary">Research Library</h2>
<p class="font-label-md text-label-md text-on-surface-variant/80">Academic Excellence</p>
</div>
<nav class="space-y-unit-xs">
<a class="flex items-center gap-3 p-unit-md bg-secondary-container text-on-secondary-container rounded-lg transition-all" href="#">
<span class="material-symbols-outlined" data-icon="subscriptions">subscriptions</span>
<span class="font-label-md text-label-md">Video Archive</span>
</a>
<a class="flex items-center gap-3 p-unit-md text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all" href="#">
<span class="material-symbols-outlined" data-icon="school">school</span>
<span class="font-label-md text-label-md">Course Catalog</span>
</a>
<a class="flex items-center gap-3 p-unit-md text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all" href="#">
<span class="material-symbols-outlined" data-icon="diversity_3">diversity_3</span>
<span class="font-label-md text-label-md">Member Hub</span>
</a>
<a class="flex items-center gap-3 p-unit-md text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all" href="#">
<span class="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span class="font-label-md text-label-md">IP Marketplace</span>
</a>
</nav>
<div class="mt-unit-xl pt-unit-xl border-t border-outline-variant/20">
<h3 class="font-label-lg text-label-lg uppercase mb-unit-md">Series Playlists</h3>
<ul class="space-y-unit-sm">
<li class="flex items-center justify-between group cursor-pointer">
<span class="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">Digital Ethos 2024</span>
<span class="text-[10px] bg-surface-container-highest px-2 py-0.5 rounded text-on-surface">12 Vol.</span>
</li>
<li class="flex items-center justify-between group cursor-pointer">
<span class="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">Governance Lab</span>
<span class="text-[10px] bg-surface-container-highest px-2 py-0.5 rounded text-on-surface">08 Vol.</span>
</li>
<li class="flex items-center justify-between group cursor-pointer">
<span class="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">Clinical Symposia</span>
<span class="text-[10px] bg-surface-container-highest px-2 py-0.5 rounded text-on-surface">24 Vol.</span>
</li>
</ul>
</div>
<button class="w-full mt-unit-xl py-3 bg-primary text-on-primary font-label-lg text-label-lg rounded-lg hover:opacity-90 transition-all">
                        Request Access
                    </button>
</div>
</aside>
<!-- Main Content Area -->
<div class="flex-1 min-w-0">
<!-- Featured Monograph Hero -->
<section class="relative aspect-video rounded-xl overflow-hidden mb-unit-2xl academic-border bg-primary shadow-2xl">
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
<div class="absolute inset-0 z-0 bg-cover bg-center opacity-70 transition-transform duration-700 hover:scale-105" data-alt="A sophisticated cinematic shot of a modern academic study or lecture hall with warm, directional lighting. Deep mahogany textures and soft golden accents create an atmosphere of elite intellectual pursuit. The camera angle is low and wide, capturing the depth and history of a prestigious institution." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCI2om6217-FZORDe_Tk1cAynLEvgP2mRudMA3Isjb8o8wKZSnMbEjI-_TUtYh-ZsoiZgBGw22ZfmwowtWbqIfLQR5JmGwC5AUbOvWIUzBSbGNhjtKT83bQeep3NnCudmxHWxcCS4OTYchf-OyhI5vNH7lhboeWVu3A6C2dDSn63_XR8_a09TOHEMNzf2EgjIvl9UgTuDp020rOYyyFoYnnHeaAi46F7NC-6ux7FQB1Iadsa_rbzkdoPRuN-8zHdpkVUulb6NumeBI')">
</div>
<div class="absolute bottom-0 left-0 p-unit-xl z-20 w-full max-w-3xl">
<div class="inline-block px-3 py-1 bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-md text-label-md uppercase mb-unit-md tracking-widest">Featured Monograph</div>
<h1 class="font-display-lg text-display-lg text-white mb-unit-sm leading-tight">The Ontology of Leadership: A Generative Inquiry</h1>
<p class="text-white/80 font-body-lg text-body-lg mb-unit-lg italic border-l-2 border-tertiary-fixed-dim pl-4">Volume IV: Strategic Integrity in the Age of Digital Fragmentation</p>
<div class="flex items-center gap-unit-lg">
<button class="group flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-label-lg text-label-lg transition-all hover:bg-tertiary-fixed-dim">
<span class="material-symbols-outlined !text-4xl" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
                                BEGIN VIEWING
                            </button>
<div class="flex items-center gap-4 text-white/60 font-label-md text-label-md uppercase tracking-widest">
<span>Duration: 1h 24m</span>
<span class="w-1 h-1 bg-white/30 rounded-full"></span>
<span>Pub: June 2024</span>
</div>
</div>
</div>
</section>
<!-- Video Grids -->
<div class="space-y-unit-2xl">
<!-- Category: Executive Wisdom -->
<section>
<div class="flex items-baseline justify-between mb-unit-lg border-b border-outline-variant/20 pb-unit-sm">
<h2 class="font-headline-md text-headline-md text-primary">Executive Wisdom</h2>
<a class="font-label-lg text-label-lg text-on-tertiary-container hover:underline" href="#">View All Research →</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
<!-- Card 1 -->
<article class="bg-surface academic-border gold-accent group flex flex-col h-full hover:shadow-lg transition-all duration-300">
<div class="relative aspect-video overflow-hidden">
<div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Corporate Strategy Session" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="An elite boardroom setting with sharp lines and high-contrast navy and cream tones. Soft afternoon light streams through large windows, reflecting off polished glass tables. The visual style is minimal and corporate, suggesting a high-level strategic discussion." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt6LDyK40jDNyQN9L5vzdUfjDqUG4kM_vT6S-lESRDTc95LetG1AyyJ0aPwq9cSi5NzVVIFJMMIuHRgV_FNePLqcg8LbxeQz5w2oMvEx_wF18DSKE19mHX2Al0re5H7a8Ti8wssUXw3791z86PGCNKSXegFFTJLq-d2RaE16wVNTVuEkZWPqcowpj0T9h9Bipv3JiSw0hwddFqte1DwfSi4Zp3tZCb8DrkXJSCPqsbGsfwWRo7e6rZWdRLhuHIU-YDOy45u7k8NSg">
<div class="absolute bottom-2 right-2 z-20 bg-primary/90 text-white text-[10px] px-2 py-1">14:22</div>
</div>
<div class="p-unit-lg flex flex-col flex-1">
<div class="flex items-center justify-between mb-unit-xs">
<span class="font-label-md text-label-md text-on-tertiary-container uppercase">Series: Governance</span>
<span class="font-label-md text-label-md text-on-surface-variant/60">02.05.2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-sm leading-tight group-hover:text-on-tertiary-container transition-colors">Stakeholder Alignment in Post-Growth Economies</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-unit-lg">A critical abstract examining the transition from extractive value models to sustainable institutional equilibrium within the European tech sector.</p>
<div class="mt-auto pt-unit-md border-t border-outline-variant/10 flex items-center justify-between">
<span class="font-label-md text-label-md text-primary font-bold">Volume 12, Issue 3</span>
<button class="material-symbols-outlined text-primary hover:text-tertiary-fixed-dim transition-colors" data-icon="bookmark">bookmark</button>
</div>
</div>
</article>
<!-- Card 2 -->
<article class="bg-surface academic-border gold-accent group flex flex-col h-full hover:shadow-lg transition-all duration-300">
<div class="relative aspect-video overflow-hidden">
<div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Leadership Portrait" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A dignified close-up portrait of an academic leader in a library environment. Warm accent lighting highlights the texture of leather-bound books in the blurred background. The palette is rich with deep greens and golden hues, conveying wisdom and institutional authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9UOCu-CeiGF-Ht16OZi0mMhfabs5q60IlNyWSXhszDagCXp8U6gjpIaC5bg-u4ytRp569IPaDOEb03ZILVW07r_VS2uzFil7tU3bcGHIK2rtS-KkYM1Y7uJRMvB7bylxj0kXNzz5ABJiAEWjMnnGXr2R55iIi7YkpN16fo8vtVO0YRwIF6frL5jB-8lmh3e0M9NaPHcPM4cROAzzv-TxzJ1Ffc_EZO4NqSO1YdedgllyN2SFW8rTAG2o4RuPbHuytswwmGV7wIXo">
<div class="absolute bottom-2 right-2 z-20 bg-primary/90 text-white text-[10px] px-2 py-1">28:10</div>
</div>
<div class="p-unit-lg flex flex-col flex-1">
<div class="flex items-center justify-between mb-unit-xs">
<span class="font-label-md text-label-md text-on-tertiary-container uppercase">Series: Ethics</span>
<span class="font-label-md text-label-md text-on-surface-variant/60">15.04.2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-sm leading-tight group-hover:text-on-tertiary-container transition-colors">The Moral Calculus of Algorithmic Transparency</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-unit-lg">An inquiry into the fiduciary responsibilities of data stewards and the emerging legal frameworks governing automated decision-making.</p>
<div class="mt-auto pt-unit-md border-t border-outline-variant/10 flex items-center justify-between">
<span class="font-label-md text-label-md text-primary font-bold">Special Report</span>
<button class="material-symbols-outlined text-primary hover:text-tertiary-fixed-dim transition-colors" data-icon="bookmark">bookmark</button>
</div>
</div>
</article>
<!-- Card 3 -->
<article class="bg-surface academic-border gold-accent group flex flex-col h-full hover:shadow-lg transition-all duration-300">
<div class="relative aspect-video overflow-hidden">
<div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Data Visualization" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Abstract macro photography of intricate technical diagrams and data streams. High contrast between deep navy shadows and bright glowing ivory lines. The style is crisp and editorial, reminiscent of a high-end scientific journal cover with a sophisticated color grade." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYEUIv3myIdBsJro81oOYTVmqH0ENOJ_YO2-LEUtuVR8O3W4UES3O_7pSXP4og1CYclciuY1PTCaseghBaOPJ04GFPh8Wyt3zGheGD9wsl9fpIdFkjbZnnkWVSuC18rhn9qi1QIHZJjxBcR0ySjlHeRsG2BH3DyCpMe-jJ3VnZgbyEXaC6Ct1jnBSLoCCxK3YJG2AnNDKwt_pmDbnagP89ysaq_mXWBpn8rdzJTY5KMcKMoyUNzKy4RreVS-EpOvAoCPChoQH1zqo">
<div class="absolute bottom-2 right-2 z-20 bg-primary/90 text-white text-[10px] px-2 py-1">45:00</div>
</div>
<div class="p-unit-lg flex flex-col flex-1">
<div class="flex items-center justify-between mb-unit-xs">
<span class="font-label-md text-label-md text-on-tertiary-container uppercase">Series: Future Markets</span>
<span class="font-label-md text-label-md text-on-surface-variant/60">22.03.2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-sm leading-tight group-hover:text-on-tertiary-container transition-colors">Quantum Supremacy and Institutional Security</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-unit-lg">Investigating the disruptive potential of non-linear computing on global encryption standards and sovereign digital identity.</p>
<div class="mt-auto pt-unit-md border-t border-outline-variant/10 flex items-center justify-between">
<span class="font-label-md text-label-md text-primary font-bold">Research Series A</span>
<button class="material-symbols-outlined text-primary hover:text-tertiary-fixed-dim transition-colors" data-icon="bookmark">bookmark</button>
</div>
</div>
</article>
</div>
</section>
<!-- Category: Clinical Insights (Bento Grid Style) -->
<section>
<div class="flex items-baseline justify-between mb-unit-lg border-b border-outline-variant/20 pb-unit-sm">
<h2 class="font-headline-md text-headline-md text-primary">Clinical Insights</h2>
</div>
<div class="bento-grid h-[600px]">
<!-- Featured Bento Item -->
<div class="col-span-8 row-span-2 relative group overflow-hidden academic-border gold-accent cursor-pointer">
<img alt="Clinical Laboratory" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="A stark, ultra-clean clinical laboratory setting with high-key lighting. The palette is dominated by sterile whites and clinical blues, with a professional and focused atmosphere. Precision instruments are visible in the shallow depth of field, highlighting the expert research being conducted." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIKM3gmNBoBLY5eXTLn7Posc5JH0nOSk6ChF0k8A0AH4_oWASTmHAdRw9di8Fx9Q39G6BaBVafH80_XHSAKTPg-8cHpBr-Bu_8SqbYSYv6lsKNM9zILPU1rIvpEiSidPmMo0kc6-uTTfIPPXKZ8s4r0PlcLF6xl4thEjfQX4mQyBB8AZLuHzrhFgp8OXT-i96nbpx1J4qF-y_D-qa51f0orQBYEo7jw1YWtTtGOVX_gX1kwsR_VR2xktK7IlbLToaUI1RRxCzvTVA">
<div class="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
<div class="absolute bottom-0 left-0 p-unit-xl z-20">
<span class="text-tertiary-fixed-dim font-label-md text-label-md uppercase mb-2 block tracking-widest">Masterclass Series</span>
<h3 class="text-white font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight mb-4">Precision Medicine: The Genomic Frontier</h3>
<p class="text-white/80 font-body-md text-body-md max-w-xl">An 8-part lecture series detailing the integration of CRISPR technologies into frontline oncology protocols.</p>
</div>
</div>
<!-- Small Bento 1 -->
<div class="col-span-4 bg-surface p-unit-lg flex flex-col justify-between academic-border gold-accent hover:bg-surface-container transition-colors">
<div>
<span class="text-on-surface-variant/60 font-label-md text-label-md">08:15 MINS</span>
<h4 class="font-headline-sm text-headline-sm text-primary mt-2">Neuro-Regenerative Pathways</h4>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 italic">Observation of neural plasticity in controlled environmental stress tests.</p>
<div class="flex items-center text-primary font-label-lg text-label-lg gap-2 mt-4">
                                    PLAY NOW <span class="material-symbols-outlined text-[18px]">play_circle</span>
</div>
</div>
<!-- Small Bento 2 -->
<div class="col-span-4 bg-primary text-white p-unit-lg flex flex-col justify-between academic-border border-primary-container hover:bg-primary-container transition-colors">
<div>
<span class="text-white/50 font-label-md text-label-md uppercase tracking-wider">Archives Special</span>
<h4 class="font-headline-sm text-headline-sm text-tertiary-fixed-dim mt-2 leading-tight">Epidemiological Forecasting</h4>
</div>
<p class="text-white/70 font-body-sm text-body-sm line-clamp-2">Mathematical models for predicting regional pathogen drift.</p>
<div class="flex items-center text-white font-label-lg text-label-lg gap-2 mt-4">
                                    PLAY NOW <span class="material-symbols-outlined text-[18px]">play_circle</span>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-primary dark:bg-primary-container w-full py-unit-2xl px-margin-desktop mt-auto border-t border-primary-fixed-variant/10">
<div class="max-w-[1440px] mx-auto">
<div class="flex flex-col md:flex-row justify-between items-start gap-unit-xl mb-unit-2xl">
<div class="max-w-md">
<h2 class="font-display-lg text-display-lg text-tertiary-fixed mb-unit-md">Dr. Ayuba's Corner</h2>
<p class="text-on-primary/60 dark:text-on-primary-container/60 font-body-sm text-body-sm">A global repository for elite intellectual discourse, dedicated to the rigorous pursuit of knowledge across clinical, executive, and social disciplines.</p>
</div>
<div class="grid grid-cols-2 gap-unit-2xl">
<div class="flex flex-col gap-unit-sm">
<h4 class="text-white font-label-lg text-label-lg uppercase mb-unit-md tracking-widest">Navigation</h4>
<a class="text-on-primary/60 dark:text-on-primary-container/60 font-body-sm text-body-sm hover:text-tertiary-fixed-dim underline transition-all" href="#">Archive</a>
<a class="text-on-primary/60 dark:text-on-primary-container/60 font-body-sm text-body-sm hover:text-tertiary-fixed-dim underline transition-all" href="#">Research Ethics</a>
<a class="text-on-primary/60 dark:text-on-primary-container/60 font-body-sm text-body-sm hover:text-tertiary-fixed-dim underline transition-all" href="#">Courses</a>
</div>
<div class="flex flex-col gap-unit-sm">
<h4 class="text-white font-label-lg text-label-lg uppercase mb-unit-md tracking-widest">Connect</h4>
<a class="text-on-primary/60 dark:text-on-primary-container/60 font-body-sm text-body-sm hover:text-tertiary-fixed-dim underline transition-all" href="#">Contact Desk</a>
<a class="text-on-primary/60 dark:text-on-primary-container/60 font-body-sm text-body-sm hover:text-tertiary-fixed-dim underline transition-all" href="#">Institutional Access</a>
<a class="text-on-primary/60 dark:text-on-primary-container/60 font-body-sm text-body-sm hover:text-tertiary-fixed-dim underline transition-all" href="#">Newsroom</a>
</div>
</div>
</div>
<div class="pt-unit-xl border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-unit-md">
<p class="font-body-sm text-body-sm text-on-primary/60 dark:text-on-primary-container/60">© 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Member of the Academic Digital Excellence Initiative.</p>
<div class="flex gap-unit-lg">
<a class="text-on-primary/60 dark:text-on-primary-container/60 font-body-sm text-body-sm hover:text-tertiary-fixed-dim" href="#">Institutional Terms</a>
<a class="text-on-primary/60 dark:text-on-primary-container/60 font-body-sm text-body-sm hover:text-tertiary-fixed-dim" href="#">Privacy Policy</a>
<a class="text-on-primary/60 dark:text-on-primary-container/60 font-body-sm text-body-sm hover:text-tertiary-fixed-dim" href="#">Intellectual Property Rights</a>
</div>
</div>
</div>
</footer>
<script>
        // Simple micro-interaction for cards
        document.querySelectorAll('article').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0px)';
            });
        });

        // Search bar focus state simulation
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('max-w-xl');
            searchInput.parentElement.classList.remove('max-w-md');
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.add('max-w-md');
            searchInput.parentElement.classList.remove('max-w-xl');
        });
    </script>

      ` }} />
    </div>
  );
}
