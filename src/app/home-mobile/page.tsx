import React from 'react';

export const metadata = {
  title: "Institutional Homepage - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-background text-on-surface font-body-md" 
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
                      "on-primary-fixed-variant": "#374766",
                      "surface-dim": "#dcd9d9",
                      "on-error": "#ffffff",
                      "tertiary-fixed-dim": "#f1bf51",
                      "primary-fixed": "#d7e2ff",
                      "on-secondary-fixed-variant": "#304f13",
                      "tertiary-container": "#281b00",
                      "on-secondary-container": "#4c6e2e",
                      "surface-container-high": "#eae7e7",
                      "secondary": "#476729",
                      "surface-container-low": "#f6f3f2",
                      "inverse-surface": "#303030",
                      "outline": "#75777e",
                      "on-background": "#1b1c1c",
                      "primary-fixed-dim": "#b6c7ec",
                      "tertiary": "#050300",
                      "on-primary-fixed": "#091b38",
                      "on-surface": "#1b1c1c",
                      "on-secondary": "#ffffff",
                      "surface-bright": "#fcf9f8",
                      "primary-container": "#0b1d3a",
                      "tertiary-fixed": "#ffdf9f",
                      "surface-container-lowest": "#ffffff",
                      "surface-tint": "#4f5e7f",
                      "secondary-fixed": "#c7efa1",
                      "surface-variant": "#e5e2e1",
                      "inverse-primary": "#b6c7ec",
                      "secondary-container": "#c7efa1",
                      "primary": "#00030f",
                      "background": "#fcf9f8",
                      "surface": "#fcf9f8",
                      "on-tertiary": "#ffffff",
                      "inverse-on-surface": "#f3f0ef",
                      "on-secondary-fixed": "#0d2000",
                      "on-primary": "#ffffff",
                      "on-tertiary-container": "#a87f0f",
                      "secondary-fixed-dim": "#acd287",
                      "on-surface-variant": "#44474d",
                      "on-tertiary-fixed-variant": "#5c4300",
                      "error-container": "#ffdad6",
                      "on-tertiary-fixed": "#261a00",
                      "outline-variant": "#c5c6ce",
                      "on-error-container": "#93000a",
                      "on-primary-container": "#7585a8",
                      "surface-container-highest": "#e5e2e1",
                      "surface-container": "#f0eded",
                      "error": "#ba1a1a"
              },
              "borderRadius": {
                      "DEFAULT": "0.125rem",
                      "lg": "0.25rem",
                      "xl": "0.5rem",
                      "full": "0.75rem"
              },
              "spacing": {
                      "gutter": "24px",
                      "margin-mobile": "16px",
                      "unit": "8px",
                      "margin-desktop": "64px",
                      "max-width": "1280px"
              },
              "fontFamily": {
                      "headline-xl": ["Playfair Display"],
                      "headline-lg": ["Playfair Display"],
                      "body-sm": ["Inter"],
                      "headline-md": ["Playfair Display"],
                      "display-lg": ["Playfair Display"],
                      "display-lg-mobile": ["Playfair Display"],
                      "label-md": ["Inter"],
                      "body-md": ["Inter"],
                      "body-lg": ["Inter"],
                      "label-lg": ["Inter"]
              },
              "fontSize": {
                      "headline-xl": ["48px", {"lineHeight": "56px", "fontWeight": "700"}],
                      "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
                      "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                      "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                      "display-lg": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                      "display-lg-mobile": ["40px", {"lineHeight": "48px", "fontWeight": "700"}],
                      "label-md": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                      "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                      "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                      "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.1em", "fontWeight": "600"}]
              }
            },
          },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-shadow {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
        }
        .gold-accent-bar {
            width: 4px;
            background-color: #a87f0f; /* Tonal variation of Gold from theme */
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopAppBar -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-surface border-b border-outline-variant">
<div class="flex items-center gap-3">
<img alt="Dr. Ayuba Tree and Book Logo" class="h-10 w-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPi0yLmCPo-IMB_pTmiVmiMPrbt3RKzBoV2r6C4WXawpBOjTP_5C3mYwi85ueLU57XWMiOJZv36cZRwvNvxfe5XsImOE1p1Yd7BZ2_VSvbONTRNPVbNfyzvxhNIhSUhUPDP-qilpCJJkBucvxYykHzIZft__AtW0UaUjgxiNBC4-cjt3Rh3BNTTloNK8f14nA_lVxzQ8lQLGDWnmZxMZ0g7s6p47sRHdQHsohCST7XXrlB1sOBZo2idMKqkf19fhZMg55f81b9m1U"/>
<span class="font-headline-md text-headline-md font-bold text-primary">Dr. Ayuba's Corner</span>
</div>
<button class="font-label-lg text-label-lg text-primary uppercase tracking-widest hover:text-secondary transition-colors">
            Member Access
        </button>
</header>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative overflow-hidden bg-surface-container-lowest py-16 md:py-32 px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
<div class="max-w-max-width mx-auto flex flex-col items-center text-center">
<span class="font-label-lg text-label-lg text-on-tertiary-container uppercase mb-6 block tracking-[0.2em]">The Pursuit of Excellence</span>
<h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 leading-tight">
                    Better Wisdom.<br/>Better Health.<br/>Better Wealth.
                </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
                    A curated ecosystem designed for the modern professional seeking intellectual legacy and holistic vitality. Explore the intersections of ancient wisdom and modern performance.
                </p>
<div class="flex flex-col md:flex-row gap-4">
<button class="bg-primary-container text-on-primary px-8 py-4 font-label-lg text-label-lg hover:opacity-90 transition-opacity">
                        EXPLORE THE ARCHIVES
                    </button>
<button class="border border-primary-container text-primary-container px-8 py-4 font-label-lg text-label-lg hover:bg-surface-container-low transition-colors">
                        JOIN THE INNER CIRCLE
                    </button>
</div>
</div>
<!-- Atmospheric micro-interaction bg -->
<div class="absolute inset-0 -z-10 opacity-30 pointer-events-none overflow-hidden">
<div class="absolute top-0 right-0 w-96 h-96 bg-secondary-container rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse"></div>
</div>
</section>
<!-- Message from Dr. Ayuba -->
<section class="py-20 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface">
<div class="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div class="relative group">
<div class="absolute inset-0 border border-on-tertiary-container translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
<img class="relative w-full aspect-[4/5] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" data-alt="A professional, high-end editorial portrait of a distinguished African intellectual with a warm, authoritative smile. He is dressed in a dark navy tailored suit, standing against a backdrop of a warm-toned, sophisticated personal library with leather-bound books. The lighting is soft and directional, emphasizing wisdom and prestige, maintaining a premium light-mode aesthetic with rich navy and gold accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY97uppZpYpw67PofKgiUD8y_aRAVK3CpyhlEHkFptC-az59iXMqusjS4lZR2XX9xufUNrBBMfWs7w_BcSjyBYd30ysqzzZLAnlVvKRQh09hAuSrLklNzz3TGCB-pji8obu0t3pSrj3IZaOHnMwChV5DZLJdNCUeUEP2sQcka9zN2tasnISYfJ7734jaHsQo0qgCof3ivX1kIEoQYvyY_t7nhZN03N8XAVAVDop9ohAuBdC-e4rmLL2Zd8nSnRew547WAJJ_3Ztnc"/>
</div>
<div>
<div class="flex items-start gap-4 mb-8">
<div class="gold-accent-bar h-12"></div>
<h2 class="font-headline-lg text-headline-lg text-primary italic">"Knowledge without application is merely data; Wisdom is the architecture of a life well-lived."</h2>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                        Dr. Ayuba’s Corner is more than a resource; it is a movement toward intentional existence. Here, we dismantle the silos between mental clarity, physical endurance, and financial independence. 
                    </p>
<p class="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                        My mission is to provide you with the tools to build a legacy that transcends your immediate circle. We prioritize long-term thinking over temporary fixes.
                    </p>
<div class="flex items-center gap-4">
<div class="w-12 h-px bg-primary"></div>
<span class="font-headline-md text-headline-md text-primary">Dr. Ayuba</span>
</div>
</div>
</div>
</section>
<!-- Pillars (Wisdom, Health, Wealth) -->
<section class="py-20 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
<div class="max-w-max-width mx-auto text-center mb-16">
<h2 class="font-headline-xl text-headline-xl text-primary mb-4">The Three Pillars</h2>
<div class="h-1 w-20 bg-on-tertiary-container mx-auto"></div>
</div>
<div class="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Wisdom -->
<div class="bg-surface p-10 border border-outline-variant hover:border-on-tertiary-container transition-all group">
<span class="material-symbols-outlined text-on-tertiary-container text-4xl mb-6 block">auto_stories</span>
<h3 class="font-headline-md text-headline-md text-primary mb-4">Wisdom</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-8">Philosophical frameworks, ethical leadership, and the art of decision-making under pressure.</p>
<a class="font-label-lg text-label-lg text-on-tertiary-container flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                        EXPLORE WISDOM <span class="material-symbols-outlined">arrow_right_alt</span>
</a>
</div>
<!-- Health -->
<div class="bg-surface p-10 border border-outline-variant hover:border-on-tertiary-container transition-all group">
<span class="material-symbols-outlined text-on-tertiary-container text-4xl mb-6 block">vital_signs</span>
<h3 class="font-headline-md text-headline-md text-primary mb-4">Health</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-8">Integrative health strategies for longevity, metabolic health, and cognitive performance optimization.</p>
<a class="font-label-lg text-label-lg text-on-tertiary-container flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                        EXPLORE HEALTH <span class="material-symbols-outlined">arrow_right_alt</span>
</a>
</div>
<!-- Wealth -->
<div class="bg-surface p-10 border border-outline-variant hover:border-on-tertiary-container transition-all group">
<span class="material-symbols-outlined text-on-tertiary-container text-4xl mb-6 block">account_balance</span>
<h3 class="font-headline-md text-headline-md text-primary mb-4">Wealth</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-8">Strategic asset allocation, legacy planning, and the psychology of abundance and sustainability.</p>
<a class="font-label-lg text-label-lg text-on-tertiary-container flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                        EXPLORE WEALTH <span class="material-symbols-outlined">arrow_right_alt</span>
</a>
</div>
</div>
</section>
<!-- Latest Articles (Bento Grid) -->
<section class="py-20 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface">
<div class="max-w-max-width mx-auto mb-12 flex justify-between items-end">
<div>
<span class="font-label-lg text-label-lg text-on-tertiary-container uppercase block tracking-widest mb-2">Knowledge Base</span>
<h2 class="font-headline-xl text-headline-xl text-primary">Latest Articles</h2>
</div>
<a class="font-label-lg text-label-lg text-primary underline underline-offset-4 hidden md:block" href="#">VIEW ALL INSIGHTS</a>
</div>
<div class="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
<div class="md:col-span-2 md:row-span-2 relative overflow-hidden group cursor-pointer border border-outline-variant">
<img class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A top-down view of a minimalist workspace featuring a fine leather notebook, a gold fountain pen, and a cup of herbal tea. The aesthetic is clean, professional, and intellectual, with a focus on deep thought and planning. Soft morning light enters from a window, creating a serene and premium light-mode atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1C6eLS4lLwwb-Z2Pd1RShc7yP0Z0VdhImstz-fAKRnDKr-PFLaDngOTao0YHyI9Z9nmWWIS3BsBP5cl_tnXiAZ8w6ShJ0zy-6fhRqyR-TRczJ7kszcxtfaOZBPEgP8KEtC00I-_Bd9uQGMaEHok_TNbkudd__T_Z_jJS9t6kMeB-Bja5BBr6XuGji0mZZiLPElbOI6B_b4wiDLz4XEa9au8pMLDMq8CKxsPHe2c4diaqQIa583y8DKl8oyQ6bRU8JBBkdZKbDXWY"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
<div class="absolute bottom-0 p-8">
<span class="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-md text-label-md rounded-full mb-4 inline-block">WISDOM</span>
<h3 class="font-headline-lg text-headline-lg text-on-primary mb-2">The Architecture of Legacy: Building Beyond Decades</h3>
<p class="text-on-primary-container font-body-sm text-body-sm">Read the definitive guide to intergenerational strategy.</p>
</div>
</div>
<div class="md:col-span-2 md:row-span-1 relative overflow-hidden group cursor-pointer border border-outline-variant">
<img class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A macro shot of vibrant green botanical leaves with dew drops, representing growth and health. The image is crisp, modern, and utilizes the brand's secondary green palette. The lighting is bright and uplifting, emphasizing vitality and natural wellness without being clinical." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARqUOrh121E6WrkmUVFkTRRaaNl-XsqIXk2sZW5h1FcZdb_bU5Pm27bN2PpfD-bK89_B1f26ezYkjPLZHp6MAw98OsKUNQJFi7zSMeCD3Vq5RLSWtiaZY4fZ4h9x5duQ6fBpw523pwdB9UI6PPE2nkMI5ubuehvm0x2lUhBr5uySP4QbA_HimSTK16yj37oURdZhqFmUc3XDtLM-Qhx1agxTH7yp5RL_Jk6Sh_Xq32bsPcgnLADpNa-_VqVGwW3GnN6BxC1n4VsvI"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
<div class="absolute bottom-0 p-6">
<span class="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-md text-label-md rounded-full mb-2 inline-block">HEALTH</span>
<h3 class="font-headline-md text-headline-md text-on-primary">Metabolic Resilience in High-Stakes Careers</h3>
</div>
</div>
<div class="md:col-span-1 md:row-span-1 relative overflow-hidden group cursor-pointer border border-outline-variant">
<img class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A minimalist architectural detail of a modern, prestigious building with clean white lines against a clear blue sky. The image conveys structure, strength, and order, aligning with the brand's intellectual and authoritative personality. High-contrast, premium light-mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLLxEEyhdSAHaRyXSfrY9ZpxmzeGzVUYi8Y9rWQEzXE4vibVBM6gMjSMWDG6YlYj3vqWQeltZScnZAObgJFmAh3bZRVFUFu9vZczbhTmEycRbo0GPiSvJJ6lp6mqcbDCA_iN4GHfndpaKbACSK_uEk10iCTWSz4TNWKGHT8mzX5ryjeJIKXl1U9P_ST0d0qtivJcWRMYTdbtgoXc5ct94VWq7Thx_SFvzKRKyhuHkZWgmndynMNStZ8TmDrXyGoQXVPvLZOTenUR0"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
<div class="absolute bottom-0 p-6">
<span class="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-md text-label-md rounded-full mb-2 inline-block">WEALTH</span>
<h3 class="font-label-lg text-label-lg text-on-primary">Asset Allocation for Impact</h3>
</div>
</div>
<div class="md:col-span-1 md:row-span-1 bg-primary-container p-8 flex flex-col justify-between border border-outline-variant">
<h3 class="font-headline-md text-headline-md text-on-primary">Subcribe to the Newsletter</h3>
<p class="text-on-primary-container font-body-sm text-body-sm mb-4">Weekly wisdom delivered to your inbox.</p>
<input class="bg-transparent border-b border-on-primary-container text-on-primary placeholder:text-on-primary/50 py-2 focus:outline-none focus:border-on-primary mb-4" placeholder="Email Address" type="email"/>
<button class="font-label-lg text-label-lg text-on-primary uppercase text-left hover:text-on-tertiary-container transition-colors">JOIN →</button>
</div>
</div>
</section>
<!-- Podcast Teaser -->
<section class="py-20 bg-surface-container-lowest border-y border-outline-variant px-margin-mobile md:px-margin-desktop">
<div class="max-w-max-width mx-auto flex flex-col md:flex-row items-center gap-12">
<div class="w-full md:w-1/3">
<div class="bg-primary aspect-square flex items-center justify-center p-12 relative overflow-hidden">
<img alt="Logo Overlay" class="w-full opacity-20 absolute scale-150 rotate-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPi0yLmCPo-IMB_pTmiVmiMPrbt3RKzBoV2r6C4WXawpBOjTP_5C3mYwi85ueLU57XWMiOJZv36cZRwvNvxfe5XsImOE1p1Yd7BZ2_VSvbONTRNPVbNfyzvxhNIhSUhUPDP-qilpCJJkBucvxYykHzIZft__AtW0UaUjgxiNBC4-cjt3Rh3BNTTloNK8f14nA_lVxzQ8lQLGDWnmZxMZ0g7s6p47sRHdQHsohCST7XXrlB1sOBZo2idMKqkf19fhZMg55f81b9m1U"/>
<span class="material-symbols-outlined text-on-tertiary-container text-9xl">podcasts</span>
</div>
</div>
<div class="w-full md:w-2/3">
<span class="font-label-lg text-label-lg text-on-tertiary-container uppercase tracking-widest mb-4 block">The Podcast</span>
<h2 class="font-headline-xl text-headline-xl text-primary mb-6">Conversations on Legacy</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-8">Join Dr. Ayuba as he interviews global thought leaders, philanthropists, and visionaries on the intersection of human health and institutional wealth.</p>
<div class="flex flex-wrap gap-6">
<button class="flex items-center gap-3 font-label-lg text-label-lg text-primary border border-outline p-4 px-6 hover:bg-surface-container-low transition-colors">
<span class="material-symbols-outlined">play_circle</span> LISTEN ON APPLE
                        </button>
<button class="flex items-center gap-3 font-label-lg text-label-lg text-primary border border-outline p-4 px-6 hover:bg-surface-container-low transition-colors">
<span class="material-symbols-outlined">play_circle</span> LISTEN ON SPOTIFY
                        </button>
</div>
</div>
</div>
</section>
<!-- Upcoming Events & Corporate -->
<section class="py-20 md:py-32 px-margin-mobile md:px-margin-desktop">
<div class="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
<!-- Events -->
<div>
<h2 class="font-headline-lg text-headline-lg text-primary mb-8">Upcoming Gatherings</h2>
<div class="space-y-6">
<div class="flex gap-6 border-b border-outline-variant pb-6 group cursor-pointer">
<div class="text-center">
<span class="font-label-lg text-label-lg text-on-tertiary-container block">OCT</span>
<span class="font-headline-md text-headline-md text-primary block">12</span>
</div>
<div>
<h4 class="font-label-lg text-label-lg text-primary group-hover:text-on-tertiary-container transition-colors">Longevity Symposium 2024</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">London, UK • Executive Wellness Summit</p>
</div>
</div>
<div class="flex gap-6 border-b border-outline-variant pb-6 group cursor-pointer">
<div class="text-center">
<span class="font-label-lg text-label-lg text-on-tertiary-container block">NOV</span>
<span class="font-headline-md text-headline-md text-primary block">05</span>
</div>
<div>
<h4 class="font-label-lg text-label-lg text-primary group-hover:text-on-tertiary-container transition-colors">Digital Wealth Legacy Webinar</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Online • Interactive Workshop</p>
</div>
</div>
</div>
</div>
<!-- Corporate Wellness -->
<div class="bg-primary-container p-12 text-on-primary">
<span class="material-symbols-outlined text-on-tertiary-container text-4xl mb-6">business_center</span>
<h2 class="font-headline-lg text-headline-lg mb-4">Corporate Wellness &amp; Speaking</h2>
<p class="font-body-md text-body-md text-on-primary-container mb-8">Bring Dr. Ayuba’s unique frameworks for high-performance health and strategic wisdom to your organization.</p>
<button class="bg-on-tertiary-container text-tertiary-container font-label-lg text-label-lg px-8 py-4 hover:opacity-90 transition-opacity">
                        INQUIRE FOR ENGAGEMENT
                    </button>
</div>
</div>
</section>
</main>
<!-- NavigationDrawer (Mobile Focus) -->
<nav class="fixed inset-y-0 left-0 z-[60] flex flex-col bg-surface-container-low shadow-md w-80 transform -translate-x-full transition-transform duration-300 md:hidden" id="mobile-nav">
<div class="p-8 border-b border-outline-variant">
<div class="flex items-center gap-4 mb-4">
<img alt="Member Profile" class="h-12 w-12 rounded-full border border-outline" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPi0yLmCPo-IMB_pTmiVmiMPrbt3RKzBoV2r6C4WXawpBOjTP_5C3mYwi85ueLU57XWMiOJZv36cZRwvNvxfe5XsImOE1p1Yd7BZ2_VSvbONTRNPVbNfyzvxhNIhSUhUPDP-qilpCJJkBucvxYykHzIZft__AtW0UaUjgxiNBC4-cjt3Rh3BNTTloNK8f14nA_lVxzQ8lQLGDWnmZxMZ0g7s6p47sRHdQHsohCST7XXrlB1sOBZo2idMKqkf19fhZMg55f81b9m1U"/>
<div>
<h3 class="font-headline-sm text-headline-sm text-primary">Member Dashboard</h3>
<p class="font-label-md text-label-md text-on-tertiary-container">Premium Access</p>
</div>
</div>
<p class="font-label-md text-label-md text-on-surface-variant italic">Better Wisdom, Health, Wealth</p>
</div>
<div class="flex-1 overflow-y-auto py-4">
<a class="flex items-center gap-4 bg-secondary-container text-on-secondary-container rounded-full mx-2 px-4 py-3 font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">home</span> Home
            </a>
<a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-container-high transition-all font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">info</span> About
            </a>
<a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-container-high transition-all font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">article</span> Articles
            </a>
<a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-container-high transition-all font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">play_circle</span> Videos
            </a>
<a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-container-high transition-all font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">podcasts</span> Podcast
            </a>
<a class="flex items-center gap-4 text-on-surface-variant mx-2 px-4 py-3 hover:bg-surface-container-high transition-all font-label-md text-label-md" href="#">
<span class="material-symbols-outlined">group</span> Community
            </a>
</div>
<button class="p-4 text-primary self-end" id="close-nav">
<span class="material-symbols-outlined">close</span>
</button>
</nav>
<!-- Footer -->
<footer class="w-full py-20 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter bg-surface-container-lowest border-t border-outline-variant">
<div class="md:col-span-4 mb-12 md:mb-0">
<img alt="Dr. Ayuba's Corner" class="h-16 mb-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPi0yLmCPo-IMB_pTmiVmiMPrbt3RKzBoV2r6C4WXawpBOjTP_5C3mYwi85ueLU57XWMiOJZv36cZRwvNvxfe5XsImOE1p1Yd7BZ2_VSvbONTRNPVbNfyzvxhNIhSUhUPDP-qilpCJJkBucvxYykHzIZft__AtW0UaUjgxiNBC4-cjt3Rh3BNTTloNK8f14nA_lVxzQ8lQLGDWnmZxMZ0g7s6p47sRHdQHsohCST7XXrlB1sOBZo2idMKqkf19fhZMg55f81b9m1U"/>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed max-w-sm">
                A sanctuary for high-performance individuals to master the art of longevity and the science of strategic wealth.
            </p>
</div>
<div class="md:col-span-2">
<h4 class="font-label-lg text-label-lg text-primary mb-6 uppercase tracking-widest">Resources</h4>
<ul class="space-y-4">
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Sitemap</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Articles</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Podcasts</a></li>
</ul>
</div>
<div class="md:col-span-2">
<h4 class="font-label-lg text-label-lg text-primary mb-6 uppercase tracking-widest">Legal</h4>
<ul class="space-y-4">
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Credentials</a></li>
</ul>
</div>
<div class="md:col-span-4">
<h4 class="font-label-lg text-label-lg text-primary mb-6 uppercase tracking-widest">Connect</h4>
<div class="flex gap-4 mb-8">
<a class="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all" href="#">
<span class="material-symbols-outlined text-sm">mail</span>
</a>
<a class="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all" href="#">
<span class="material-symbols-outlined text-sm">share</span>
</a>
</div>
<p class="font-label-md text-label-md text-on-surface-variant">
                © 2024 Dr. Ayuba's Corner. Better Wisdom, Better Health, Better Wealth.
            </p>
</div>
</footer>
<!-- Mobile Nav Toggle -->
<button class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center md:hidden hover:scale-95 transition-transform active:scale-90" id="nav-toggle">
<span class="material-symbols-outlined">menu</span>
</button>
<script>
        const navToggle = document.getElementById('nav-toggle');
        const mobileNav = document.getElementById('mobile-nav');
        const closeNav = document.getElementById('close-nav');

        navToggle.addEventListener('click', () => {
            mobileNav.classList.remove('-translate-x-full');
        });

        closeNav.addEventListener('click', () => {
            mobileNav.classList.add('-translate-x-full');
        });

        // Simple scroll reveal for cards
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('translate-y-4');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.group').forEach(card => {
            card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
            observer.observe(card);
        });
    </script>

      ` }} />
    </div>
  );
}
