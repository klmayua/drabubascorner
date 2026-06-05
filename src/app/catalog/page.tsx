import React from 'react';

export const metadata = {
  title: "Institutional Education Catalog (Desktop Refined) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-background text-on-background" 
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
            scroll-behavior: smooth;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .diamond-list li::before {
            content: "◆";
            color: #a87f0f;
            font-size: 0.75rem;
            margin-right: 0.75rem;
            position: absolute;
            left: 0;
        }
        .diamond-list li {
            position: relative;
            padding-left: 1.5rem;
        }
        .nav-underline::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #a87f0f;
            transition: width 0.3s ease;
        }
        .nav-active::after {
            width: 100%;
        }
        .glass-header {
            backdrop-filter: blur(8px);
            background-color: rgba(248, 249, 250, 0.9);
        }
        .course-card-accent {
            border-top: 4px solid #476729;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<header class="fixed top-0 left-0 w-full z-50 glass-header border-b border-outline-variant/30 px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center">
<div class="flex items-center gap-unit-md">
<img alt="Dr. Ayuba Logo" class="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUUvwDyKdksJc3YzfSXDhuzewny-cvCK3BVDLO37yaDEz9y-M31lmVjtPwtQYvzM38MXsDI6-jpMrbZpedBwt90gGdf37PX3qZzmzdDEPXn-5Iycpk6YTTTW8_BTC8Xn3ST4oAuNpld2EG4hWr3frck5yTgJf0EVPSTF3NLgBahsi26U_LpKn2BKhnJYVQ-ZiaO6MReFdHuv0F-VRGmstS-HPesTen-BD1k73hY4CGVQW-n8rVG1rP5EOOmAxKumkiKRhlY6us0vw"/>
</div>
<nav class="hidden md:flex items-center gap-unit-xl">
<a class="font-label-lg text-label-lg text-primary relative nav-underline nav-active" href="#">Courses</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors relative nav-underline" href="#">Certification</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors relative nav-underline" href="#">Masterclasses</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors relative nav-underline" href="#">Institutional Partners</a>
</nav>
<div class="flex items-center gap-unit-md">
<button class="px-unit-lg py-2 border border-tertiary-fixed text-on-tertiary-container font-label-lg text-label-lg rounded-full hover:bg-tertiary-fixed/10 transition-all">
                Member Access
            </button>
</div>
</header>
<main class="pt-32 pb-unit-2xl container mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
<section class="mb-unit-2xl">
<div class="flex flex-col md:flex-row justify-between items-end gap-unit-lg border-b border-outline-variant/20 pb-unit-md">
<div class="max-w-2xl">
<span class="font-label-md text-label-md text-on-tertiary-container tracking-widest uppercase">Institutional Excellence</span>
<h1 class="font-headline-lg text-headline-lg text-primary mt-unit-sm">Academic Catalog</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mt-unit-md">
                        Deepening human understanding through rigorous scholarly investigation and practical wisdom for wealth, health, and leadership.
                    </p>
</div>
<div class="flex gap-unit-sm">
<button class="p-unit-sm border border-outline-variant rounded-full hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined">filter_list</span>
</button>
<button class="p-unit-sm border border-outline-variant rounded-full hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined">search</span>
</button>
</div>
</div>
</section>
<section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
<aside class="md:col-span-3 sticky top-32 space-y-unit-xl hidden md:block">
<div>
<h3 class="font-label-lg text-label-lg text-primary mb-unit-md">Learning Path</h3>
<ul class="space-y-unit-sm">
<li><a class="font-body-sm text-body-sm text-secondary font-semibold" href="#">All Disciplines</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Strategic Wisdom</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Wealth Architecture</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Holistic Wellness</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Legacy Building</a></li>
</ul>
</div>
<div>
<h3 class="font-label-lg text-label-lg text-primary mb-unit-md">Certification</h3>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-surface-container text-on-surface-variant text-label-md font-label-md rounded-full">Foundation</span>
<span class="px-3 py-1 bg-surface-container text-on-surface-variant text-label-md font-label-md rounded-full">Executive</span>
<span class="px-3 py-1 bg-surface-container text-on-surface-variant text-label-md font-label-md rounded-full">Legacy</span>
</div>
</div>
</aside>
<div class="md:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-gutter">
<div class="group bg-surface-container-lowest border border-outline-variant/30 hover:shadow-xl transition-all flex flex-col relative course-card-accent">
<div class="aspect-[16/9] overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional portrait of an African male executive in a high-end, contemporary boardroom setting with floor-to-ceiling windows overlooking a modern city skyline at dusk. The lighting is soft and cinematic, utilizing a palette of deep navy blues, warm gold accents, and clean whites to maintain a prestigious institutional aesthetic. The mood is one of profound leadership and archival stability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC-YqLehH_UwELWHn4Vc8_kQihVsjQicNfmofe98xjNXSaS1ALIEdCDPxdp9dkPk2tzlsTxcyP4W3cIbTaQR0P0_q_Ken9E_qI1q2tr1Nft0O9s7HGKuxqIUiRP8Mof9CkY8AooidSa3okPfDGJLIvQIF3qj8sy_p4KWjWajlGTqZiXiF1M9qY4oulO5s3r0m1buOBcR7s0kD2ypgXLeb8XbCFZiHFPbtxTk_O4SzkAViL9F-Vuv2-lFzK0ylskMLCGcRQdtOSSVk"/>
</div>
<div class="p-unit-lg flex-1 flex flex-col">
<div class="flex justify-between items-start mb-unit-sm">
<span class="font-label-md text-label-md text-secondary tracking-widest">CERTIFICATION PATH</span>
<span class="flex items-center gap-1 font-label-md text-label-md text-on-tertiary-container">
<span class="material-symbols-outlined text-[14px]">star</span> 4.9
                            </span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-md group-hover:text-secondary transition-colors">The Architecture of Generational Wealth</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg line-clamp-2">A comprehensive study of capital preservation, asset diversification, and the psychology of lasting legacy.</p>
<div class="mt-auto pt-unit-md border-t border-outline-variant/10 flex justify-between items-center">
<div class="flex items-center gap-unit-sm">
<span class="material-symbols-outlined text-primary-container">history_edu</span>
<span class="font-label-lg text-label-lg">12 Weeks</span>
</div>
<button class="bg-primary text-on-primary px-unit-lg py-2 font-label-lg text-label-lg hover:bg-primary-container transition-all">Enroll Now</button>
</div>
</div>
</div>
<div class="group bg-surface-container-lowest border border-outline-variant/30 hover:shadow-xl transition-all flex flex-col relative course-card-accent">
<div class="aspect-[16/9] overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A macro shot of a prestigious university library table with an antique open book, a modern gold fountain pen, and a high-end tablet displaying complex graphs. The scene is lit by warm amber lamp light against the deep navy shadows of the bookshelves. The composition reflects a professional and academic atmosphere with high-contrast editorial clarity and refined institutional elegance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDD7qQj-SNPsOz2pepOZRYANRqG2bbX7iJOS3UhwCk9m7sLNGUwQKUUX3C5_uAvoDTBB-b844wCsNcK1bZoL8oSm0Vs5y99MMz74nGk6kKipHn38Y_2V8c9fRO5n9o2Rx8f7a5s0bl6Q8qdswe05v-Hn5gY70pGsr9ffvYAXkwk7IOTUio3vZbsyJxbDz13vgtVKClTCJT9nfqzOkxbMfJHalxs3emrpnIMgLySLwatBI7gXGwNYueEGe-w3MSHJCR_W_ofAerm6w"/>
</div>
<div class="p-unit-lg flex-1 flex flex-col">
<div class="flex justify-between items-start mb-unit-sm">
<span class="font-label-md text-label-md text-secondary tracking-widest">MASTERCLASS</span>
<span class="flex items-center gap-1 font-label-md text-label-md text-on-tertiary-container">
<span class="material-symbols-outlined text-[14px]">star</span> 5.0
                            </span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-md group-hover:text-secondary transition-colors">Holistic Health Systems: The Core Pillar</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg line-clamp-2">Mastering the biological and psychological frameworks for peak performance and long-term vitality.</p>
<div class="mt-auto pt-unit-md border-t border-outline-variant/10 flex justify-between items-center">
<div class="flex items-center gap-unit-sm">
<span class="material-symbols-outlined text-primary-container">timer</span>
<span class="font-label-lg text-label-lg">8 Hours</span>
</div>
<button class="bg-primary text-on-primary px-unit-lg py-2 font-label-lg text-label-lg hover:bg-primary-container transition-all">Enroll Now</button>
</div>
</div>
</div>
<div class="group bg-surface-container-lowest border border-outline-variant/30 hover:shadow-xl transition-all flex flex-col relative course-card-accent">
<div class="aspect-[16/9] overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A wide-angle shot of a minimalist, luxury conference space with architectural concrete walls and warm wood panels. In the center, a group of diverse professionals in academic dress engage in thoughtful discussion. The lighting is natural and bright, emphasizing a light-mode aesthetic with professional deep navy and gold branding colors woven into the environment. The mood is sophisticated, scholarly, and elite." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJRoVLUR5g9fNqenbPDGtO8BXasLzaoCD966cbnzrv1e-Jxt_41fNHy646U2MbOhaJU7RwP25oNSAzhKXQMrlRQqQRkUo_Bo5H7ZygSlluytjzgDDV1BB5tTccz1jgyuK-nnPNEPrGj79U6ZI2vsraaWTHb62cOCIS6Y8Bm0ogZoA0wyt1Iz3ncWUXzwxFKX_Ugo2Iee7OEBrNg_cNG5_xD3_e5bJ-twsIwLqDqSVGW78F5SegCu0TDCoV9TDgCvCpKAMyy1gssVc"/>
</div>
<div class="p-unit-lg flex-1 flex flex-col">
<div class="flex justify-between items-start mb-unit-sm">
<span class="font-label-md text-label-md text-secondary tracking-widest">EXECUTIVE PROGRAM</span>
<span class="flex items-center gap-1 font-label-md text-label-md text-on-tertiary-container">
<span class="material-symbols-outlined text-[14px]">star</span> 4.8
                            </span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-md group-hover:text-secondary transition-colors">Strategic Leadership in Complex Ecosystems</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg line-clamp-2">Navigating high-stakes institutional environments with ethical clarity and decisive strategic action.</p>
<div class="mt-auto pt-unit-md border-t border-outline-variant/10 flex justify-between items-center">
<div class="flex items-center gap-unit-sm">
<span class="material-symbols-outlined text-primary-container">groups</span>
<span class="font-label-lg text-label-lg">6 Months</span>
</div>
<button class="bg-primary text-on-primary px-unit-lg py-2 font-label-lg text-label-lg hover:bg-primary-container transition-all">Enroll Now</button>
</div>
</div>
</div>
<div class="group bg-surface-container-lowest border border-outline-variant/30 hover:shadow-xl transition-all flex flex-col relative course-card-accent">
<div class="aspect-[16/9] overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A minimalist digital art composition featuring overlapping translucent geometric planes in navy and muted gold. The visual represents interconnectedness and intellectual structure. The style is clean, modern, and archival, with a bright white background ensuring a high-end corporate editorial feel. Lighting is soft and shadowless to maintain a crisp, stable institutional aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAajzGxdEjGyeF4Iw5cNQ4OvonLuCKZ5V85JvdUvbgnXrD4nVGn6gcrgPfkdBIRNYU-JFn8rbIjoD_M77QCa0PNi8jqIXuqbfTHhH-_Rxntv0Z27f146NSmC_m9u3aj_nzge-L_D5X7riAe74IuLPnZAzM2LCzrSRfCE602m2ygkCQzrNhe9S-Fi7Ws4of6avmqezCubBXboUMGq-36HWn6Y_u1A09Wg-7ptfWnl1z0N_LxNTzbHIKBbU5R6qnxN0iAb2adHGrmCdM"/>
</div>
<div class="p-unit-lg flex-1 flex flex-col">
<div class="flex justify-between items-start mb-unit-sm">
<span class="font-label-md text-label-md text-secondary tracking-widest">LEGACY FELLOWSHIP</span>
<span class="flex items-center gap-1 font-label-md text-label-md text-on-tertiary-container">
<span class="material-symbols-outlined text-[14px]">star</span> 5.0
                            </span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-md group-hover:text-secondary transition-colors">Foundations of Institutional Philanthropy</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg line-clamp-2">Structured approaches to establishing enduring charitable foundations and legacy impact structures.</p>
<div class="mt-auto pt-unit-md border-t border-outline-variant/10 flex justify-between items-center">
<div class="flex items-center gap-unit-sm">
<span class="material-symbols-outlined text-primary-container">workspace_premium</span>
<span class="font-label-lg text-label-lg">Cohort Based</span>
</div>
<button class="bg-primary text-on-primary px-unit-lg py-2 font-label-lg text-label-lg hover:bg-primary-container transition-all">Enroll Now</button>
</div>
</div>
</div>
</div>
</section>
<section class="mt-unit-2xl bg-primary-container text-on-primary p-unit-2xl grid md:grid-cols-2 gap-gutter items-center overflow-hidden relative">
<div class="absolute -right-20 -bottom-20 w-80 h-80 bg-tertiary-fixed opacity-10 rounded-full blur-3xl"></div>
<div>
<span class="font-label-md text-label-md text-tertiary-fixed tracking-widest uppercase">Member Benefits</span>
<h2 class="font-headline-md text-headline-md mt-unit-sm">Access the Wisdom Archives</h2>
<p class="font-body-lg text-body-lg text-on-primary-container mt-unit-md mb-unit-xl opacity-90">
                    Join an elite community of scholars and practitioners dedicated to better wisdom, better health, and better wealth.
                </p>
<ul class="diamond-list space-y-4 mb-unit-xl">
<li class="font-body-md text-body-md">Quarterly Academic Journal Access</li>
<li class="font-body-md text-body-md">Exclusive Monthly Live Q&amp;A with Dr. Ayuba</li>
<li class="font-body-md text-body-md">Archival Case Study Library</li>
<li class="font-body-md text-body-md">Preferential Rates for Institutional Events</li>
</ul>
<button class="bg-tertiary-fixed text-tertiary-container px-unit-2xl py-4 font-label-lg text-label-lg rounded-sm hover:brightness-110 transition-all font-bold">
                    START YOUR JOURNEY
                </button>
</div>
<div class="hidden md:block">
<img alt="Dr. Ayuba Portrait" class="w-full max-w-sm mx-auto shadow-2xl border-4 border-white/10" data-alt="A formal, high-end studio portrait of Dr. Ayuba in a sharp, pinstripe tailored suit with a burgundy silk tie and pocket square. The background is a sophisticated neutral gray gradient that emphasizes his intellectual presence. The lighting is classic Rembrandt style, creating a look of authority, reliability, and academic depth in line with a premium institutional brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfvOUt0aD8HKMpEK7MPVTHz53rirv2RPzX-lPzTFl6aExZeoItAhGGlJeiGezA4FBw-BXTULM7QeDEIwxFjH4mV15ai4Ee3gW7biJdW7b6wVdxqRSCQnUuAyY_i0lgaGwKkooezva2phFLatjP5iSsdZjwem77WbG613k-DmAR4Rh549tMCwJpK7zmeOVEcgAE7sSjp4zcLXygtmDJIeubnXX9jgEHRdtTmcnU7Q0nmMFIx9f7Giui82hWAtQrFfZCa9OjhPEEgxs"/>
</div>
</section>
</main>
<footer class="w-full py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div class="md:col-span-4">
<img alt="Dr. Ayuba Logo" class="h-16 w-auto mb-unit-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUUvwDyKdksJc3YzfSXDhuzewny-cvCK3BVDLO37yaDEz9y-M31lmVjtPwtQYvzM38MXsDI6-jpMrbZpedBwt90gGdf37PX3qZzmzdDEPXn-5Iycpk6YTTTW8_BTC8Xn3ST4oAuNpld2EG4hWr3frck5yTgJf0EVPSTF3NLgBahsi26U_LpKn2BKhnJYVQ-ZiaO6MReFdHuv0F-VRGmstS-HPesTen-BD1k73hY4CGVQW-n8rVG1rP5EOOmAxKumkiKRhlY6us0vw"/>
<p class="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
                Dr. Ayuba's Corner is a premier educational institution dedicated to the synthesis of ancient wisdom and modern strategic thought.
            </p>
</div>
<div class="md:col-span-2">
<h4 class="font-label-lg text-label-lg text-primary mb-unit-lg">Catalog</h4>
<ul class="space-y-unit-sm">
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Strategic Wisdom</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Wealth Architecture</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Wellness</a></li>
</ul>
</div>
<div class="md:col-span-2">
<h4 class="font-label-lg text-label-lg text-primary mb-unit-lg">Institution</h4>
<ul class="space-y-unit-sm">
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Credentials</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Speaking</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Partnerships</a></li>
</ul>
</div>
<div class="md:col-span-4">
<h4 class="font-label-lg text-label-lg text-primary mb-unit-lg">Newsletter</h4>
<div class="flex flex-col gap-unit-md">
<p class="font-body-sm text-body-sm text-on-surface-variant">Scholarly insights delivered to your inbox.</p>
<div class="flex border-b border-primary">
<input class="flex-1 bg-transparent border-none focus:ring-0 font-body-sm py-2" placeholder="Institutional Email" type="email"/>
<button class="p-2"><span class="material-symbols-outlined text-primary">arrow_forward</span></button>
</div>
</div>
</div>
<div class="md:col-span-12 mt-unit-2xl pt-unit-lg border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-unit-md">
<p class="font-body-sm text-body-sm text-on-surface-variant">© 2024 Dr. Ayuba's Corner. Better Wisdom, Better Health, Better Wealth.</p>
<div class="flex gap-unit-lg">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
</div>
</div>
</footer>
<script>
        // Simple scroll behavior for header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('shadow-md');
                header.classList.remove('bg-surface-bright/90');
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.classList.remove('shadow-md');
                header.style.backgroundColor = 'rgba(248, 249, 250, 0.9)';
            }
        });

        // Hover effects for cards
        document.querySelectorAll('.group').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
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
