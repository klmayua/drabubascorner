import React from 'react';

export const metadata = {
  title: "Speaking & Advisory Services (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-background text-on-background font-body-md overflow-x-hidden" 
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
                        "secondary-fixed-dim": "#acd287",
                        "on-secondary-fixed": "#0d2000",
                        "secondary-fixed": "#c7efa1",
                        "on-surface-variant": "#44474d",
                        "primary": "#00030f",
                        "error-container": "#ffdad6",
                        "surface-dim": "#d9dadb",
                        "surface-container-high": "#e7e8e9",
                        "on-primary-fixed": "#091b38",
                        "on-primary-fixed-variant": "#374766",
                        "background": "#f8f9fa",
                        "surface-container-lowest": "#ffffff",
                        "tertiary": "#050300",
                        "on-tertiary": "#ffffff",
                        "primary-fixed-dim": "#b6c7ec",
                        "outline": "#75777e",
                        "surface-variant": "#e1e3e4",
                        "surface-container": "#edeeef",
                        "surface-container-low": "#f3f4f5",
                        "surface-tint": "#4f5e7f",
                        "surface": "#f8f9fa",
                        "primary-container": "#0b1d3a",
                        "on-tertiary-fixed": "#261a00",
                        "on-secondary-container": "#4c6e2e",
                        "secondary": "#476729",
                        "inverse-primary": "#b6c7ec",
                        "error": "#ba1a1a",
                        "secondary-container": "#c7efa1",
                        "on-tertiary-container": "#a87f0f",
                        "on-primary": "#ffffff",
                        "primary-fixed": "#d7e2ff",
                        "outline-variant": "#c5c6ce",
                        "on-secondary-fixed-variant": "#304f13",
                        "tertiary-container": "#281b00",
                        "on-surface": "#191c1d",
                        "on-secondary": "#ffffff",
                        "surface-bright": "#f8f9fa",
                        "inverse-on-surface": "#f0f1f2",
                        "tertiary-fixed-dim": "#f1bf51",
                        "on-background": "#191c1d",
                        "on-primary-container": "#7585a8",
                        "on-error-container": "#93000a",
                        "surface-container-highest": "#e1e3e4",
                        "on-error": "#ffffff",
                        "inverse-surface": "#2e3132",
                        "on-tertiary-fixed-variant": "#5c4300"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "unit-sm": "8px",
                        "unit-md": "16px",
                        "margin-desktop": "80px",
                        "gutter": "32px",
                        "unit-xl": "48px",
                        "unit-lg": "24px",
                        "container-max": "1440px",
                        "unit-2xl": "80px",
                        "unit-xs": "4px"
                    },
                    "fontFamily": {
                        "body-lg": ["Inter"],
                        "headline-lg": ["Playfair Display"],
                        "body-sm": ["Inter"],
                        "headline-md": ["Playfair Display"],
                        "display-xl": ["Playfair Display"],
                        "body-md": ["Inter"],
                        "label-md": ["Inter"],
                        "label-lg": ["Inter"],
                        "display-lg": ["Playfair Display"],
                        "headline-sm": ["Playfair Display"]
                    },
                    "fontSize": {
                        "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                        "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}],
                        "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                        "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                        "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
                        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                        "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}]
                    }
                },
            },
        }
    </script>
<style>
        .archival-border { border: 1px solid rgba(0, 3, 15, 0.1); }
        .gold-diamond::before {
            content: "";
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: #ffdf9f;
            transform: rotate(45deg);
            margin-right: 12px;
        }
        .nav-underline-active { position: relative; }
        .nav-underline-active::after {
            content: "";
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #ffdf9f;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- Header / TopNavBar -->
<header class="w-full top-0 sticky z-50 bg-surface border-b border-outline-variant transition-all duration-300" id="main-header">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-20">
<div class="flex items-center">
<img alt="Dr. Ayuba's Logo" class="h-12 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc2Ze4CKaGLlVEBnyPeTpDdxU7gyvgTOPE7ai2ZXKMmHmBY7iX_Af-LarE-eY46A9B3ftXxdiWp2w-D7v8V58nh1wGy9dsf_YdH1-_d2NQGWirazMvlwSAxD_-rcHcJ9BN225CWlivWisVNe2Lc1OKjGNRKotaJuPDlIMyVyrwwAZ0po2Qn7_5_YUYke1tKvrmGEI1OaVMLp1X08r7FA5ls3_RGLYSvRGJxKSwLzBoDBENYt4gd9nFf4_3JQrnXzA-gzKElwtmfY4"/>
</div>
<nav class="hidden md:flex items-center space-x-unit-xl">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Articles</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Videos</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Podcast</a>
<a class="font-label-lg text-label-lg text-primary font-bold nav-underline-active" href="#">Advisory</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Courses</a>
</nav>
<div class="flex items-center gap-unit-md">
<button class="font-label-lg text-label-lg px-unit-lg py-unit-sm bg-primary text-on-primary hover:bg-primary-container transition-all active:scale-95">
                    Sign In
                </button>
<span class="material-symbols-outlined text-primary cursor-pointer" data-icon="account_circle">account_circle</span>
</div>
</div>
</header>
<main class="max-w-[1440px] mx-auto">
<!-- Hero Section -->
<section class="flex flex-col md:flex-row items-center gap-unit-2xl py-unit-2xl px-margin-desktop">
<div class="w-full md:w-1/2 space-y-unit-lg">
<div class="inline-flex items-center gap-unit-sm text-on-tertiary-container bg-tertiary-fixed px-3 py-1">
<span class="material-symbols-outlined text-[18px]" data-icon="verified">verified</span>
<span class="font-label-md text-label-md uppercase tracking-widest">Global Institutional Lead</span>
</div>
<h1 class="font-display-xl text-display-xl text-primary leading-tight">
                    Architect of <br/>
<span class="text-on-tertiary-container italic">Institutional</span> Excellence
                </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                    Dr. Ayuba provides high-stakes advisory and keynote perspectives for institutions seeking stability, growth, and intellectual leadership in a complex global landscape.
                </p>
<div class="flex gap-unit-md pt-unit-md">
<a class="bg-primary text-on-primary px-unit-xl py-unit-md font-label-lg text-label-lg flex items-center gap-2 hover:bg-primary-container transition-all" href="#inquiry">
                        Inquire for Partnerships
                        <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</a>
<button class="border border-tertiary-fixed text-tertiary-container px-unit-xl py-unit-md font-label-lg text-label-lg hover:bg-tertiary-fixed transition-all">
                        Download Portfolio
                    </button>
</div>
</div>
<div class="w-full md:w-1/2 relative group">
<div class="absolute -top-4 -left-4 w-full h-full border border-tertiary-fixed -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
<img alt="Portrait of Dr. Ayuba" class="w-full aspect-[0.78] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjr8D6N8FCOrUy-eeDS3UInWS8BkldGextNgmOg6nO8LghbDcMDe7GwAPM8HFWgNMIV8lIDTYFEW_B0ZD_BOiICqhXjyua-Y_Y9-KqtD35ND_WmDmrp7fn0Q13H2mnr5yAr88AH_L4_XYptY_xp0jAi8BjU7R2YRihGyPjwjtfJSjLy5hMhCyF3di1nADO7Fj1CLvyUdQ40rrlAwJbMBtgFn5b_IatxepNkkhiw8jb6bH5DiCxYQO8d0lFvTErg-joXG39PG1nz9A"/>
</div>
</section>
<!-- Bento Grid: Service Pillars -->
<section class="px-margin-desktop py-unit-2xl">
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Keynote Engagements -->
<div class="md:col-span-8 bg-surface-container-lowest archival-border p-unit-xl flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-unit-lg">
<span class="material-symbols-outlined text-primary text-4xl" data-icon="record_voice_over">record_voice_over</span>
<span class="text-outline text-label-md">01 / SERVICE</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-primary mb-unit-md">Keynote Engagements</h3>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                            Transformative addresses for academic convocations, international summits, and corporate leadership retreats. Dr. Ayuba distills decades of institutional wisdom into actionable intellectual frameworks.
                        </p>
</div>
<ul class="mt-unit-xl space-y-unit-sm">
<li class="gold-diamond font-label-lg text-label-lg">The Future of Institutional Governance</li>
<li class="gold-diamond font-label-lg text-label-lg">Ethics in Modern Academic Leadership</li>
<li class="gold-diamond font-label-lg text-label-lg">Resilience Architecture for Global Systems</li>
</ul>
</div>
<!-- Secondary Small Cell -->
<div class="md:col-span-4 bg-primary p-unit-xl text-on-primary flex flex-col justify-center text-center">
<h4 class="font-headline-sm text-headline-sm text-tertiary-fixed mb-unit-md">250+</h4>
<p class="font-label-lg text-label-lg opacity-80 uppercase">Global Keynotes Delivered</p>
<div class="my-unit-lg border-t border-on-primary opacity-20 w-16 mx-auto"></div>
<h4 class="font-headline-sm text-headline-sm text-tertiary-fixed mb-unit-md">14</h4>
<p class="font-label-lg text-label-lg opacity-80 uppercase">Institutional Fellowships</p>
</div>
<!-- Board Advisory -->
<div class="md:col-span-6 archival-border bg-white p-unit-xl">
<span class="material-symbols-outlined text-primary text-4xl mb-unit-lg" data-icon="groups">groups</span>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-md">Board Advisory Roles</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg">
                        Strategic oversight for non-profit foundations, academic boards, and institutional governing bodies. specialized in conflict resolution and long-term strategic roadmapping.
                    </p>
<a class="text-on-tertiary-container font-label-lg text-label-lg underline underline-offset-8 decoration-tertiary-fixed hover:text-primary transition-all" href="#">View Advisory Credentials</a>
</div>
<!-- Institutional Audits -->
<div class="md:col-span-6 archival-border bg-surface-container-low p-unit-xl relative overflow-hidden">
<div class="relative z-10">
<span class="material-symbols-outlined text-primary text-4xl mb-unit-lg" data-icon="fact_check">fact_check</span>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-md">Institutional Audits</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg">
                            Deep-dive evaluations of organizational health, cultural alignment, and operational efficiency within academic and governmental sectors.
                        </p>
<a class="text-on-tertiary-container font-label-lg text-label-lg underline underline-offset-8 decoration-tertiary-fixed hover:text-primary transition-all" href="#">Request Audit Framework</a>
</div>
<!-- Background aesthetic element -->
<div class="absolute -right-10 -bottom-10 opacity-5">
<span class="material-symbols-outlined text-[200px]" data-icon="architecture">architecture</span>
</div>
</div>
</div>
</section>
<!-- Inquiry System -->
<section class="px-margin-desktop py-unit-2xl bg-surface-container-high" id="inquiry">
<div class="grid grid-cols-1 md:grid-cols-2 gap-unit-2xl items-start">
<div class="space-y-unit-lg">
<h2 class="font-headline-lg text-headline-lg text-primary">Inquiry for High-Level Partnership</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                        Dr. Ayuba accepts a limited number of advisory and speaking engagements each year to ensure maximum depth of involvement and impact.
                    </p>
<div class="space-y-unit-md pt-unit-md">
<div class="flex items-start gap-unit-md">
<span class="material-symbols-outlined text-tertiary-container" data-icon="location_on">location_on</span>
<div>
<p class="font-label-lg text-label-lg text-primary">Primary Office</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">The Institute of Global Governance<br/>Suite 402, Academic Row</p>
</div>
</div>
<div class="flex items-start gap-unit-md">
<span class="material-symbols-outlined text-tertiary-container" data-icon="mail">mail</span>
<div>
<p class="font-label-lg text-label-lg text-primary">Direct Liaison</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">advisory@drayuba.edu</p>
</div>
</div>
</div>
</div>
<div class="bg-white p-unit-xl archival-border shadow-sm">
<form class="space-y-unit-md">
<div class="grid grid-cols-1 md:grid-cols-2 gap-unit-md">
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary">Principal Name</label>
<input class="w-full border-outline-variant focus:border-primary focus:ring-0 px-unit-md py-unit-sm bg-background" type="text"/>
</div>
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary">Institutional Email</label>
<input class="w-full border-outline-variant focus:border-primary focus:ring-0 px-unit-md py-unit-sm bg-background" type="email"/>
</div>
</div>
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary">Type of Engagement</label>
<select class="w-full border-outline-variant focus:border-primary focus:ring-0 px-unit-md py-unit-sm bg-background">
<option>Keynote Address</option>
<option>Board Advisory Position</option>
<option>Institutional Audit</option>
<option>Executive Mentorship</option>
</select>
</div>
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary">Brief Overview of Scope</label>
<textarea class="w-full border-outline-variant focus:border-primary focus:ring-0 px-unit-md py-unit-sm bg-background" rows="4"></textarea>
</div>
<button class="w-full bg-primary text-on-primary py-unit-md font-label-lg text-label-lg hover:bg-primary-container transition-all uppercase tracking-widest" type="submit">
                            Submit Formal Inquiry
                        </button>
</form>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-auto bg-primary-container">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter border-t border-outline-variant">
<div class="md:col-span-1">
<h2 class="font-headline-md text-headline-md text-on-primary-container mb-unit-md">Dr. Ayuba</h2>
<p class="font-body-sm text-body-sm text-on-primary-container opacity-80">
                    Advancing institutional wisdom and intellectual leadership across the globe.
                </p>
</div>
<div class="flex flex-col gap-unit-sm">
<h4 class="font-label-lg text-label-lg text-tertiary-fixed uppercase">Nav</h4>
<a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a>
</div>
<div class="flex flex-col gap-unit-sm">
<h4 class="font-label-lg text-label-lg text-tertiary-fixed uppercase">Directory</h4>
<a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Faculty Directory</a>
<a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Institutional Research</a>
</div>
<div class="flex flex-col gap-unit-sm">
<h4 class="font-label-lg text-label-lg text-tertiary-fixed uppercase">Contact</h4>
<a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Contact Us</a>
<a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Sitemap</a>
</div>
</div>
<div class="max-w-[1440px] mx-auto px-margin-desktop py-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-unit-md">
<p class="font-body-sm text-body-sm text-on-primary-container opacity-60">
                © 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.
            </p>
<div class="flex gap-unit-md">
<span class="material-symbols-outlined text-on-primary-container opacity-60 hover:opacity-100 cursor-pointer" data-icon="language">language</span>
<span class="material-symbols-outlined text-on-primary-container opacity-60 hover:opacity-100 cursor-pointer" data-icon="share">share</span>
</div>
</div>
</footer>
<script>
        // Header scroll behavior
        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (window.scrollY > 50) {
                header.classList.add('shadow-md', 'h-16');
                header.classList.remove('h-20');
            } else {
                header.classList.remove('shadow-md', 'h-16');
                header.classList.add('h-20');
            }
        });

        // Micro-interactions for form
        const formInputs = document.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('translate-x-1');
                input.parentElement.style.transition = 'transform 0.2s ease';
            });
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('translate-x-1');
            });
        });
    </script>

      ` }} />
    </div>
  );
}
