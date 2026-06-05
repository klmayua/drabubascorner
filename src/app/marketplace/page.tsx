import React from 'react';

export const metadata = {
  title: "Institutional Marketplace (Desktop Refined) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed selection:text-primary" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
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
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .institutional-border {
            border-top: 4px solid #476729;
        }
        .academic-grid-item:hover {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- Top Navigation Shell -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-center items-center px-margin-mobile md:px-margin-desktop py-4 bg-surface border-b border-outline-variant">
<div class="max-w-container-max w-full flex justify-between items-center">
<div class="flex items-center">
<img alt="Dr. Ayuba Tree and Book Logo" class="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUUvwDyKdksJc3YzfSXDhuzewny-cvCK3BVDLO37yaDEz9y-M31lmVjtPwtQYvzM38MXsDI6-jpMrbZpedBwt90gGdf37PX3qZzmzdDEPXn-5Iycpk6YTTTW8_BTC8Xn3ST4oAuNpld2EG4hWr3frck5yTgJf0EVPSTF3NLgBahsi26U_LpKn2BKhnJYVQ-ZiaO6MReFdHuv0F-VRGmstS-HPesTen-BD1k73hY4CGVQW-n8rVG1rP5EOOmAxKumkiKRhlY6us0vw"/>
</div>
<nav class="hidden md:flex gap-unit-xl">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Home</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Resources</a>
<a class="font-label-lg text-label-lg text-primary font-bold border-b-2 border-on-tertiary-container" href="#">Marketplace</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Community</a>
</nav>
<div class="flex items-center gap-unit-md">
<button class="p-2 text-on-surface-variant hover:text-primary">
<span class="material-symbols-outlined">search</span>
</button>
<button class="p-2 text-on-surface-variant hover:text-primary relative">
<span class="material-symbols-outlined">shopping_bag</span>
<span class="absolute top-0 right-0 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
</button>
<button class="bg-primary text-on-primary px-unit-lg py-2 rounded-lg font-label-lg text-label-lg hover:opacity-80 transition-opacity">
                    Member Access
                </button>
</div>
</div>
</header>
<!-- Sidebar Navigation Drawer -->
<aside class="fixed inset-y-0 left-0 z-[60] flex flex-col bg-surface-container-low w-80 -translate-x-full transition-transform duration-300 lg:translate-x-0 pt-24 border-r border-outline-variant">
<div class="px-unit-lg pb-unit-md mb-unit-lg border-b border-outline-variant">
<h2 class="font-headline-sm text-headline-sm text-primary">Member Dashboard</h2>
<p class="font-label-md text-label-md text-on-surface-variant">Better Wisdom, Health, Wealth</p>
</div>
<div class="flex flex-col gap-1 overflow-y-auto px-2">
<a class="flex items-center gap-4 px-4 py-3 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">home</span>
<span class="font-label-md text-label-md">Home</span>
</a>
<a class="flex items-center gap-4 px-4 py-3 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">library_books</span>
<span class="font-label-md text-label-md">Resources</span>
</a>
<a class="flex items-center gap-4 px-4 py-3 rounded-full bg-secondary-container text-on-secondary-container font-bold" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">storefront</span>
<span class="font-label-md text-label-md">Marketplace</span>
</a>
<a class="flex items-center gap-4 px-4 py-3 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">school</span>
<span class="font-label-md text-label-md">Courses</span>
</a>
<a class="flex items-center gap-4 px-4 py-3 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">article</span>
<span class="font-label-md text-label-md">Articles</span>
</a>
<a class="flex items-center gap-4 px-4 py-3 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">play_circle</span>
<span class="font-label-md text-label-md">Videos</span>
</a>
<a class="flex items-center gap-4 px-4 py-3 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">podcasts</span>
<span class="font-label-md text-label-md">Podcast</span>
</a>
<div class="my-4 border-t border-outline-variant mx-4"></div>
<a class="flex items-center gap-4 px-4 py-3 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">business_center</span>
<span class="font-label-md text-label-md">Corporate</span>
</a>
<a class="flex items-center gap-4 px-4 py-3 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-all" href="#">
<span class="material-symbols-outlined">volunteer_activism</span>
<span class="font-label-md text-label-md">Impact</span>
</a>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="lg:pl-80 pt-32 pb-20 px-margin-mobile md:px-margin-desktop">
<div class="max-w-container-max mx-auto">
<!-- Hero / Section Title -->
<section class="mb-unit-2xl">
<div class="flex flex-col md:flex-row justify-between items-end gap-unit-lg border-b border-outline-variant pb-unit-lg">
<div class="max-w-3xl">
<span class="font-label-lg text-label-lg text-on-tertiary-container uppercase tracking-widest mb-unit-sm block">Institutional Storefront</span>
<h1 class="font-display-lg text-display-lg text-primary mb-unit-md">Scholarly Marketplace</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">A curated repository of intellectual property, academic journals, and executive masterclasses designed for the modern scholar and industry leader.</p>
</div>
<div class="flex gap-unit-sm">
<button class="bg-surface border border-outline px-unit-lg py-2 font-label-lg text-label-lg flex items-center gap-2 hover:bg-surface-container-low transition-colors">
<span class="material-symbols-outlined">filter_list</span> Filter
                        </button>
<button class="bg-surface border border-outline px-unit-lg py-2 font-label-lg text-label-lg flex items-center gap-2 hover:bg-surface-container-low transition-colors">
                            Sort <span class="material-symbols-outlined">expand_more</span>
</button>
</div>
</div>
</section>
<!-- Featured Masterclass (Bento Pattern) -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-unit-2xl">
<div class="md:col-span-8 group relative overflow-hidden bg-primary-container rounded-xl institutional-border">
<div class="absolute inset-0 opacity-40 mix-blend-overlay">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A professional studio portrait of a distinguished academic lecturer delivering a presentation in a high-tech university hall. The lighting is focused and dramatic, highlighting the intellectual atmosphere. The color palette includes deep navy tones and sharp white highlights to maintain the institutional brand identity. A cinematic feel with a shallow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuZYVX6a1HCk_TVGzaj65hy0IZSnJR5911qw-XfklvuT0TAPF-MXQzMrxN5bM05w_O-c7MmSmsFIw8-REtIwVHBGrJ8WvjzUw-emjJ10Pz8xn8d4_q7czLY3wEwoOEzl8hEeCQyBoYII7winJ80aT8sHHrS2sJM_NekO2hgrB2ZPPdcEl_H2AkEhkLx8xsiU43LtUXI04VdaecPLgHkd0jfJMHfumKEXf1K7WnaTcrVByV7fQgtae6IljNwrUnwOzR5IZDbVqPOVI"/>
</div>
<div class="relative z-10 p-unit-xl h-full flex flex-col justify-end min-h-[400px]">
<span class="bg-secondary text-on-secondary px-3 py-1 text-label-md font-label-md rounded mb-4 w-fit">MASTERCLASS ACCESS</span>
<h2 class="font-headline-lg text-headline-lg text-on-primary mb-4">Strategic Wisdom for Executive Leadership</h2>
<p class="font-body-md text-on-primary-container mb-8 max-w-xl text-primary-fixed-dim">Join Dr. Ayuba for a 12-week comprehensive deep dive into archival strategies and modern leadership application. Limited seats for institutional partners.</p>
<div class="flex gap-4">
<button class="bg-on-tertiary-container text-on-primary px-unit-xl py-3 font-label-lg text-label-lg rounded hover:opacity-90 transition-opacity">Enroll Now — $1,499</button>
<button class="border border-on-primary-container text-on-primary px-unit-xl py-3 font-label-lg text-label-lg rounded hover:bg-white/10 transition-colors">View Syllabus</button>
</div>
</div>
</div>
<div class="md:col-span-4 flex flex-col gap-gutter">
<div class="bg-surface-container-lowest border border-outline-variant p-unit-lg flex-1 institutional-border academic-grid-item transition-all">
<h3 class="font-headline-sm text-headline-sm text-primary mb-2">Annual Subscription</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-6">Unlimited access to all digital reports, archival journals, and exclusive member-only seminars.</p>
<div class="border-t border-outline-variant pt-6 flex justify-between items-center">
<span class="font-headline-sm text-headline-sm text-secondary">$299<span class="text-label-md">/year</span></span>
<button class="text-primary font-bold hover:underline">Subscribe</button>
</div>
</div>
<div class="bg-surface-container-lowest border border-outline-variant p-unit-lg flex-1 institutional-border academic-grid-item transition-all">
<h3 class="font-headline-sm text-headline-sm text-primary mb-2">Latest Publication</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-6">"The Foundation of Wisdom: A Decade of Health &amp; Wealth Research" — Hardcover Edition.</p>
<div class="border-t border-outline-variant pt-6 flex justify-between items-center">
<span class="font-headline-sm text-headline-sm text-secondary">$85.00</span>
<button class="text-primary font-bold hover:underline">Pre-order</button>
</div>
</div>
</div>
</section>
<!-- Digital Reports & Physical Journals Grid -->
<section class="mb-unit-2xl">
<div class="flex justify-between items-center mb-unit-lg">
<h2 class="font-headline-md text-headline-md text-primary">Academic Publications</h2>
<a class="text-secondary font-label-lg text-label-lg hover:underline flex items-center gap-2" href="#">View Catalog <span class="material-symbols-outlined">arrow_forward</span></a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
<!-- Product Card 1 -->
<div class="bg-surface-container-lowest border border-outline-variant group academic-grid-item transition-all flex flex-col">
<div class="aspect-[3/4] bg-surface-variant overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A high-resolution photograph of a premium, leather-bound academic journal titled 'The Archive of Wisdom'. The book is placed on a dark wood library table with soft, warm side lighting. The overall mood is prestigious and intellectual, featuring rich textures of paper and leather. Background shows blurred bookshelves in a stately manor library." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBvDafIacRpCcO58xpLjZ2lPOY4tloCOZTgsQFETcGTCgZSMAj6upkc84LN7NI6S9NOSS4Brl7TM6BUz5eAXpjuA05NVFnijLIfeyoqXlrkqeKbHR4Hc7uTW3fdk0nTT4eRbnLZBvCyE7Cs7AXcOibCQkA0PXyVcllMdg7axxJB5gZZftN-nOfliQEo1rLO-6GTW11fwrbeQ6Z130fki3EEgOtUGtkMt_H2yeZjRr5QeDFahm0i5dprN9iiE_3kN1hkPcbb45Fps4"/>
</div>
<div class="p-unit-md flex flex-col flex-1">
<span class="text-[10px] font-label-md text-on-surface-variant tracking-widest uppercase mb-1">Physical Journal</span>
<h4 class="font-label-lg text-label-lg text-primary mb-2">Institutional Health Report Vol. IV</h4>
<p class="text-body-sm text-on-surface-variant mb-4 line-clamp-2">A comprehensive study on communal health patterns and economic prosperity in emerging sectors.</p>
<div class="mt-auto flex justify-between items-center">
<span class="font-bold text-primary">$120.00</span>
<button class="p-2 text-secondary hover:bg-secondary-container rounded-full transition-colors">
<span class="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
<!-- Product Card 2 -->
<div class="bg-surface-container-lowest border border-outline-variant group academic-grid-item transition-all flex flex-col">
<div class="aspect-[3/4] bg-surface-variant overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A professional presentation of a digital report on a minimalist tablet screen. The screen displays clean typography and complex data visualizations in navy and gold colors. The tablet sits on a clean, white marble desk next to a silver fountain pen. The lighting is bright and airy, conveying a sense of modern intellectual clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRCvB7oSyniaevKLockWB4HhiIcEefbMFiklLD8HX-W3b0fRckG0nD1YOMlhfKS-qazOryiutVBDlGg2EdT1s32szbqXzfBThAwf8ITdeWMuYgsRlma5zd70XHtDCDdbdDbtdwVfLJ1WQNsXb9N2DlZ4e0IdO0QgoYhdYJYtuDpz7u9Gud9YJpTDujgZ14Wo2Tf3ls0ar4r6yEezJIA7Kn7u8wqjp5Vn0LZPye4E1y0nPeEDTVWbcGs3pbv6CNCu5bRYRK16xYWI"/>
</div>
<div class="p-unit-md flex flex-col flex-1">
<span class="text-[10px] font-label-md text-on-surface-variant tracking-widest uppercase mb-1">Digital Download</span>
<h4 class="font-label-lg text-label-lg text-primary mb-2">The Wealth Quotient PDF</h4>
<p class="text-body-sm text-on-surface-variant mb-4 line-clamp-2">An 85-page executive summary regarding capital management through the lens of ancient wisdom.</p>
<div class="mt-auto flex justify-between items-center">
<span class="font-bold text-primary">$45.00</span>
<button class="p-2 text-secondary hover:bg-secondary-container rounded-full transition-colors">
<span class="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
<!-- Product Card 3 -->
<div class="bg-surface-container-lowest border border-outline-variant group academic-grid-item transition-all flex flex-col">
<div class="aspect-[3/4] bg-surface-variant overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A stack of high-quality, matte-finish academic white papers bound with a single gold clip. The top page features elegant serif typography and the Dr. Ayuba logo. The papers are arranged artistically on a glass office table reflecting a bright city skyline. The mood is corporate, professional, and elite." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe9_8Geu5-DySa9jXEgch-pIRhbcka9npfHstEUUaQoZ5ZG0qmFO8agS8trw9M58zAEGuyYBI03KxOjMu4Nsc7X1DmAg7igEEQ1cQi4ngS0DPieZ6TH5-nUBIPozMR_Pt6W1LY18onmujizo6OOXGsRXEgauTvHwYgtbW4L2qpPP9lV-86FLVb2WN0LRgx_qljJRYCflZ5cLnTDJ_0IyR--8iax-FWjwb7nAkag_kb2s2CFLOmDGx-7zIfpynUOV_upq1VWEdlmVA"/>
</div>
<div class="p-unit-md flex flex-col flex-1">
<span class="text-[10px] font-label-md text-on-surface-variant tracking-widest uppercase mb-1">Institutional Paper</span>
<h4 class="font-label-lg text-label-lg text-primary mb-2">Sustainable Legacy Framework</h4>
<p class="text-body-sm text-on-surface-variant mb-4 line-clamp-2">Research findings on establishing intergenerational wealth and moral leadership benchmarks.</p>
<div class="mt-auto flex justify-between items-center">
<span class="font-bold text-primary">$65.00</span>
<button class="p-2 text-secondary hover:bg-secondary-container rounded-full transition-colors">
<span class="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
<!-- Product Card 4 -->
<div class="bg-surface-container-lowest border border-outline-variant group academic-grid-item transition-all flex flex-col">
<div class="aspect-[3/4] bg-surface-variant overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A collection of small, elegantly printed archival booklets in soft cream and navy colors. They are displayed in a clean, gallery-like setting with focused spotlighting. The aesthetic is extremely archival and precious, emphasizing the rarity and value of the knowledge contained within." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsTxGojv08rJczhRkuwNkqOohwEcBLv8GGa7XkMdtdWOHshvXJiCvKiRPUlSXQDqSb_aiD5pZ7p7FF1zLpsJddcTLcJAurY73clhbsGGFlfJVHq3LuVfiR0nzVOSzqGFgviGz9AkZGCwjUtVqPOsLWfMPEDOAJvoLUudylAwEuwCDZ-6o9g7YOS_lclmC_RS8TEQ-4ezZjiUdvwk51Cvw44XcoBx5UanvFKvvG7M5mT7alXQjxAFxWT9_DM118Szy9vpFLS1GeTDM"/>
</div>
<div class="p-unit-md flex flex-col flex-1">
<span class="text-[10px] font-label-md text-on-surface-variant tracking-widest uppercase mb-1">Archival Bundle</span>
<h4 class="font-label-lg text-label-lg text-primary mb-2">The Wisdom Box Set</h4>
<p class="text-body-sm text-on-surface-variant mb-4 line-clamp-2">Complete collection of the first five years of quarterly intellectual reviews.</p>
<div class="mt-auto flex justify-between items-center">
<span class="font-bold text-primary">$350.00</span>
<button class="p-2 text-secondary hover:bg-secondary-container rounded-full transition-colors">
<span class="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
</div>
</div>
</div>
</section>
<!-- Institutional Partnership CTA -->
<section class="bg-secondary p-unit-2xl rounded-xl text-center relative overflow-hidden">
<div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
<div class="relative z-10 max-w-2xl mx-auto">
<h2 class="font-display-lg text-display-lg text-on-secondary mb-unit-md">Institutional Procurement</h2>
<p class="font-body-lg text-on-secondary mb-unit-lg opacity-90">For universities, corporations, or research libraries seeking bulk licensing and archival access.</p>
<button class="bg-surface text-primary px-unit-2xl py-4 font-label-lg text-label-lg hover:bg-surface-variant transition-colors">Contact Registrar</button>
</div>
</section>
</div>
</main>
<!-- Footer -->
<footer class="w-full py-20 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter bg-surface-container-lowest border-t border-outline-variant">
<div class="md:col-span-4">
<img alt="Dr. Ayuba Logo" class="h-12 w-auto mb-unit-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUUvwDyKdksJc3YzfSXDhuzewny-cvCK3BVDLO37yaDEz9y-M31lmVjtPwtQYvzM38MXsDI6-jpMrbZpedBwt90gGdf37PX3qZzmzdDEPXn-5Iycpk6YTTTW8_BTC8Xn3ST4oAuNpld2EG4hWr3frck5yTgJf0EVPSTF3NLgBahsi26U_LpKn2BKhnJYVQ-ZiaO6MReFdHuv0F-VRGmstS-HPesTen-BD1k73hY4CGVQW-n8rVG1rP5EOOmAxKumkiKRhlY6us0vw"/>
<p class="font-body-sm text-body-sm text-on-surface-variant max-w-xs mb-unit-lg leading-relaxed">Dedicated to the pursuit of Better Wisdom, Better Health, and Better Wealth through rigorous academic research and spiritual grounding.</p>
<div class="flex gap-4">
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">mail</span></a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">rss_feed</span></a>
</div>
</div>
<div class="md:col-span-2">
<h5 class="font-label-lg text-label-lg text-primary mb-unit-lg">The Corner</h5>
<ul class="flex flex-col gap-unit-sm">
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">About Dr. Ayuba</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Institutional Credentials</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Impact Report</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Sitemap</a></li>
</ul>
</div>
<div class="md:col-span-2">
<h5 class="font-label-lg text-label-lg text-primary mb-unit-lg">Resources</h5>
<ul class="flex flex-col gap-unit-sm">
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Article Archive</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Masterclass Catalog</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Research Library</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Media Kit</a></li>
</ul>
</div>
<div class="md:col-span-4">
<h5 class="font-label-lg text-label-lg text-primary mb-unit-lg">Quarterly Newsletter</h5>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-md">Receive scholarly updates and exclusive early-access to research papers.</p>
<form class="flex gap-2">
<input class="flex-1 bg-surface border border-outline px-4 py-2 font-body-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Email Address" type="email"/>
<button class="bg-primary text-on-primary px-unit-lg py-2 font-label-lg text-label-lg hover:opacity-80 transition-opacity" type="submit">Submit</button>
</form>
</div>
<div class="md:col-span-12 pt-unit-xl border-t border-outline-variant mt-unit-xl flex flex-col md:flex-row justify-between gap-4">
<p class="font-body-sm text-body-sm text-on-surface-variant">© 2024 Dr. Ayuba's Corner. Better Wisdom, Better Health, Better Wealth.</p>
<div class="flex gap-unit-xl">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors underline" href="#">Privacy Policy</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors underline" href="#">Terms of Service</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors underline" href="#">Contact</a>
</div>
</div>
</footer>
<script>
        // Micro-interactions for header scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        });
    </script>

      ` }} />
    </div>
  );
}
