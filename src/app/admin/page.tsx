import React from 'react';

export const metadata = {
  title: "Institutional Admin Dashboard (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="flex min-h-screen overflow-x-hidden" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&amp;family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
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
        body {
            background-color: #F8F9FA;
            font-family: 'Inter', sans-serif;
            color: #191c1d;
        }
        .sidebar-active {
            color: #00030f;
            font-weight: 700;
            border-left: 4px solid #ffdf9f;
            padding-left: 1rem;
            background-color: #e1e3e4;
        }
        .bento-card {
            background: #ffffff;
            border: 1px solid rgba(0, 3, 15, 0.1);
            transition: all 0.3s ease;
        }
        .bento-card:hover {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
        }
        .accent-line {
            height: 2px;
            background: linear-gradient(90deg, #00030f 0%, #ffdf9f 100%);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #f8f9fa;
        }
        ::-webkit-scrollbar-thumb {
            background: #00030f;
            border-radius: 10px;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- SideNavBar (As per JSON Structure) -->
<aside class="fixed left-0 top-0 h-screen z-40 flex flex-col bg-surface-container-low border-r border-outline-variant w-80">
<div class="p-unit-xl flex flex-col items-center">
<div class="mb-unit-lg">
<img alt="Dr. Ayuba's Corner Institutional Logo" class="w-48 h-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFoX-3dHftfPHI-hUUogU0PigoOfEtQvjlI_kQDoHlDV--sAaWFwmBCl9Ruv0r6Rk21YUkFaNik9WO3pR8Aqca2Rl_Plnwnw4waB7wBSFXvmnDadjjket30NsSi7ZkCaZkvrPtq2uxJYf50_zfZ-i1WYGZs_hr_oGDh1c8UvDHxkz-re-QDn2jsqfnRb0hyGH_t97531MUIqUORYdPofZjshwG5fDtu7JSmZ9trYJ_5lnrVHvhVBlihWws9pK1Wb24Gq7B7rnUl3o"/>
</div>
<div class="text-center">
<h2 class="font-headline-sm text-headline-sm text-primary">Institutional Menu</h2>
<p class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mt-1">Academic Excellence</p>
</div>
</div>
<nav class="flex-1 px-unit-sm mt-unit-md space-y-2">
<a class="flex items-center py-4 px-4 font-label-lg text-label-lg text-primary font-bold border-l-4 border-tertiary-fixed bg-surface-container-highest transition-all" href="#">
<span class="material-symbols-outlined mr-4" data-icon="dashboard">dashboard</span>
                Executive Overview
            </a>
<a class="flex items-center py-4 px-4 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-4 text-on-surface-variant group-hover:text-primary" data-icon="gavel">gavel</span>
                Governance
            </a>
<a class="flex items-center py-4 px-4 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-4 text-on-surface-variant group-hover:text-primary" data-icon="analytics">analytics</span>
                Analytics
            </a>
<a class="flex items-center py-4 px-4 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-4 text-on-surface-variant group-hover:text-primary" data-icon="group">group</span>
                Member Management
            </a>
<a class="flex items-center py-4 px-4 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-4 text-on-surface-variant group-hover:text-primary" data-icon="library_books">library_books</span>
                Policy Library
            </a>
<div class="pt-unit-xl opacity-20 px-8">
<div class="h-px bg-outline w-full"></div>
</div>
<a class="flex items-center py-4 px-4 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-4" data-icon="science">science</span>
                Research Archives
            </a>
</nav>
<div class="p-unit-lg mt-auto border-t border-outline-variant/30">
<div class="flex items-center gap-4">
<img class="w-12 h-12 rounded-full border-2 border-tertiary-fixed object-cover" data-alt="Close up professional portrait of Dr. Ayuba, a distinguished African man with a beard and sharp business attire, set against a solid dark grey studio background with soft cinematic lighting. He exudes authority, wisdom, and institutional leadership. The image is rendered in high-definition with a focus on professional excellence and elite academic prestige." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMea3Uf6T51nw_RPgfEa8ikbRP53UbjZKiFM-xrd4fl3CH937gKqi9TGDUMiXfdP4JY2L2AU_OEPTWgXA-k7XKBuXZZVZahWCry9gCw7uyiyL9CJWEgFQDcR6hucoIGh1EPdx4A9DYM6VtgGDLyVW4iVaKVP2fQsJdiN4CmiQuzJQQvUJQ6jF6AiX5-jeyHxZSJCpucIx40L5cH-6n8_D9kTmnrBL-dA2Ngrao7ndMm0OwLBnTBn0E_jQX2YccblA5s5odIL-XEk4"/>
<div>
<p class="font-label-lg text-primary">Dr. Ayuba</p>
<p class="text-[10px] uppercase text-on-surface-variant tracking-tighter">Chief Administrator</p>
</div>
<button class="ml-auto text-on-surface-variant hover:text-primary">
<span class="material-symbols-outlined" data-icon="logout">logout</span>
</button>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 ml-80 min-h-screen bg-surface">
<!-- TopNavBar (As per JSON) -->
<header class="sticky top-0 z-30 w-full bg-surface border-b border-outline-variant/10">
<div class="flex justify-between items-center h-24 px-margin-desktop max-w-container-max mx-auto">
<div>
<h1 class="font-headline-md text-headline-md font-playfair-display text-primary">Institutional Dashboard</h1>
<p class="font-body-sm text-body-sm text-on-surface-variant opacity-70">Executive Oversight Portal • Q4 2024</p>
</div>
<div class="flex items-center gap-unit-lg">
<div class="flex items-center px-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg">
<span class="material-symbols-outlined text-on-surface-variant mr-2" data-icon="calendar_today">calendar_today</span>
<span class="font-label-md text-label-md text-primary">October 24, 2024</span>
</div>
<div class="relative">
<span class="material-symbols-outlined text-primary text-3xl cursor-pointer" data-icon="account_circle">account_circle</span>
<div class="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full border-2 border-white"></div>
</div>
</div>
</div>
</header>
<!-- Canvas -->
<div class="p-margin-desktop max-w-container-max mx-auto space-y-unit-2xl">
<!-- Hero Stats: Bento Grid Layout -->
<section class="grid grid-cols-12 gap-gutter">
<!-- Main Impact Card -->
<div class="col-span-12 lg:col-span-8 bento-card p-unit-xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
<div class="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">

</div>
<div class="relative z-10">
<span class="text-secondary font-label-lg uppercase tracking-widest mb-unit-sm block">Global Research Impact</span>
<h2 class="font-display-lg text-display-lg text-primary mb-unit-lg">8.4M+</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-md">Lives impacted across 42 countries through decentralized institutional frameworks and peer-reviewed governance models.</p>
</div>
<div class="mt-unit-xl flex items-center gap-unit-xl">
<div class="flex flex-col">
<span class="text-outline text-label-md uppercase mb-1">Growth Index</span>
<span class="text-primary font-headline-sm flex items-center">
                                +14.2% <span class="material-symbols-outlined text-secondary ml-1" data-icon="trending_up">trending_up</span>
</span>
</div>
<div class="flex flex-col">
<span class="text-outline text-label-md uppercase mb-1">Citations</span>
<span class="text-primary font-headline-sm">12,402</span>
</div>
</div>
</div>
<!-- Secondary Growth Card -->
<div class="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
<div class="bento-card p-unit-lg flex-1 border-t-4 border-tertiary-fixed">
<h3 class="font-label-lg text-label-lg text-on-surface-variant mb-unit-sm uppercase">Member Growth</h3>
<div class="flex items-end justify-between">
<div>
<p class="font-headline-md text-headline-md text-primary">156,000</p>
<p class="text-secondary text-label-md font-bold">+2.4k this month</p>
</div>
<div class="h-16 w-32">
<canvas class="w-full h-full opacity-60" id="growthChart"></canvas>
</div>
</div>
</div>
<div class="bento-card p-unit-lg flex-1 border-t-4 border-secondary">
<h3 class="font-label-lg text-label-lg text-on-surface-variant mb-unit-sm uppercase">Certifications Issued</h3>
<div class="flex items-end justify-between">
<div>
<p class="font-headline-md text-headline-md text-primary">4,892</p>
<p class="text-on-surface-variant text-label-md">Global Standard Compliant</p>
</div>
<span class="material-symbols-outlined text-secondary text-5xl opacity-40" data-icon="verified">verified</span>
</div>
</div>
</div>
</section>
<!-- Institutional Executive Report -->
<section class="space-y-unit-lg">
<div class="flex justify-between items-end border-b border-outline-variant/20 pb-unit-md">
<div>
<h2 class="font-headline-md text-headline-md text-primary">Executive Performance Metrics</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Comparative analysis of regional institutional headquarters.</p>
</div>
<button class="px-6 py-2 border border-primary text-primary font-label-lg hover:bg-primary hover:text-on-primary transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-sm" data-icon="download">download</span>
                        Export Report
                    </button>
</div>
<div class="bento-card overflow-hidden">
<table class="w-full text-left border-collapse">
<thead class="bg-surface-container-low">
<tr>
<th class="p-unit-lg font-label-lg text-primary">Regional HQ</th>
<th class="p-unit-lg font-label-lg text-primary">Status</th>
<th class="p-unit-lg font-label-lg text-primary text-right">Engagement</th>
<th class="p-unit-lg font-label-lg text-primary text-right">Budget Utilization</th>
<th class="p-unit-lg font-label-lg text-primary"></th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/10">
<tr class="hover:bg-surface-container-lowest transition-colors">
<td class="p-unit-lg">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-primary-container rounded flex items-center justify-center text-on-primary-container font-bold">L</div>
<div>
<p class="font-label-lg text-primary">Lagos Institutional Center</p>
<p class="text-body-sm text-on-surface-variant">Primary Hub • West Africa</p>
</div>
</div>
</td>
<td class="p-unit-lg">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-container text-on-secondary-container">
                                        Operational
                                    </span>
</td>
<td class="p-unit-lg text-right font-body-md">94.2%</td>
<td class="p-unit-lg text-right">
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-primary h-full" style="width: 78%"></div>
</div>
</td>
<td class="p-unit-lg text-right">
<button class="text-on-surface-variant hover:text-primary">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-surface-container-lowest transition-colors">
<td class="p-unit-lg">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-primary-container rounded flex items-center justify-center text-on-primary-container font-bold">N</div>
<div>
<p class="font-label-lg text-primary">Nairobi Research Node</p>
<p class="text-body-sm text-on-surface-variant">Strategic Node • East Africa</p>
</div>
</div>
</td>
<td class="p-unit-lg">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-container text-on-secondary-container">
                                        Operational
                                    </span>
</td>
<td class="p-unit-lg text-right font-body-md">88.7%</td>
<td class="p-unit-lg text-right">
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-primary h-full" style="width: 62%"></div>
</div>
</td>
<td class="p-unit-lg text-right">
<button class="text-on-surface-variant hover:text-primary">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<tr class="hover:bg-surface-container-lowest transition-colors">
<td class="p-unit-lg">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-primary-container rounded flex items-center justify-center text-on-primary-container font-bold">A</div>
<div>
<p class="font-label-lg text-primary">Accra Policy Lab</p>
<p class="text-body-sm text-on-surface-variant">Policy Division • West Africa</p>
</div>
</div>
</td>
<td class="p-unit-lg">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tertiary-fixed text-on-tertiary-fixed">
                                        Reviewing
                                    </span>
</td>
<td class="p-unit-lg text-right font-body-md">76.4%</td>
<td class="p-unit-lg text-right">
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-primary h-full" style="width: 92%"></div>
</div>
</td>
<td class="p-unit-lg text-right">
<button class="text-on-surface-variant hover:text-primary">
<span class="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<!-- Bottom Highlights -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="bento-card p-unit-lg">
<div class="flex items-center gap-3 mb-unit-md">
<span class="material-symbols-outlined text-secondary" data-icon="policy">policy</span>
<h4 class="font-label-lg text-primary uppercase">Governance Updates</h4>
</div>
<ul class="space-y-4">
<li class="flex gap-3">
<span class="w-1 h-1 bg-tertiary-fixed mt-2 shrink-0"></span>
<p class="text-body-sm text-on-surface">Updated Intellectual Property Framework 2024.1 published.</p>
</li>
<li class="flex gap-3">
<span class="w-1 h-1 bg-tertiary-fixed mt-2 shrink-0"></span>
<p class="text-body-sm text-on-surface">Revised member onboarding policies finalized for Q1 2025.</p>
</li>
</ul>
</div>
<div class="bento-card p-unit-lg relative overflow-hidden">

<div class="flex items-center gap-3 mb-unit-md relative z-10">
<span class="material-symbols-outlined text-secondary" data-icon="psychology">psychology</span>
<h4 class="font-label-lg text-primary uppercase">Research Pulse</h4>
</div>
<div class="relative z-10">
<p class="font-body-md text-primary font-bold">48 New Manuscripts</p>
<p class="text-body-sm text-on-surface-variant mb-unit-md">Currently under peer review by the International Council.</p>
<div class="h-24 bg-surface-container-low border border-outline-variant flex items-center justify-center">
<span class="text-label-md text-on-surface-variant italic">Data Visualization Active...</span>
</div>
</div>
</div>
<div class="bento-card p-unit-lg border-l-4 border-primary">
<div class="flex items-center gap-3 mb-unit-md">
<span class="material-symbols-outlined text-primary" data-icon="notifications_active">notifications_active</span>
<h4 class="font-label-lg text-primary uppercase">Critical Actions</h4>
</div>
<div class="space-y-3">
<div class="p-3 bg-error-container rounded flex items-center gap-3">
<span class="material-symbols-outlined text-error" data-icon="warning">warning</span>
<p class="text-label-md text-on-error-container">2 Compliance audits overdue</p>
</div>
<div class="p-3 bg-primary-container rounded flex items-center gap-3">
<span class="material-symbols-outlined text-on-primary-container" data-icon="info">info</span>
<p class="text-label-md text-on-primary-container">System upgrade scheduled for 02:00 GMT</p>
</div>
</div>
</div>
</section>
</div>
<!-- Footer (As per JSON) -->
<footer class="w-full py-unit-2xl px-margin-desktop bg-primary flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto mt-unit-2xl">
<div class="mb-unit-lg md:mb-0">
<h3 class="font-headline-md text-headline-md text-on-primary font-playfair-display">Dr. Ayuba's Corner</h3>
<p class="font-body-sm text-body-sm text-on-primary/70 mt-2">© 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Archives.</p>
</div>
<div class="flex gap-unit-lg">
<a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Accessibility</a>
<a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors underline decoration-tertiary-fixed text-tertiary-fixed" href="#">Archive Index</a>
</div>
</footer>
</main>
<script>
        // Simple Canvas drawing for micro-interactions
        const ctx = document.getElementById('growthChart')?.getContext('2d');
        if (ctx) {
            ctx.strokeStyle = '#476729';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, 60);
            ctx.bezierCurveTo(40, 50, 60, 10, 120, 5);
            ctx.stroke();
            
            ctx.fillStyle = 'rgba(71, 103, 41, 0.1)';
            ctx.lineTo(120, 60);
            ctx.lineTo(0, 60);
            ctx.fill();
        }

        // Sidebar interactions
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                // Logic for active state simulation
                // e.preventDefault();
            });
        });
    </script>

      ` }} />
    </div>
  );
}
