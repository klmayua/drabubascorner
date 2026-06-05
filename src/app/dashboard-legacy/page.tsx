import React from 'react';

export const metadata = {
  title: "Member Dashboard (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="font-body-md text-body-md overflow-x-hidden" 
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
                        "on-tertiary-container": "#a87f0f",
                        "tertiary-fixed-dim": "#f1bf51",
                        "secondary": "#476729",
                        "primary": "#00030f",
                        "on-tertiary-fixed-variant": "#5c4300",
                        "on-secondary-fixed-variant": "#304f13",
                        "on-tertiary": "#ffffff",
                        "primary-fixed-dim": "#b6c7ec",
                        "on-surface": "#191c1d",
                        "on-error-container": "#93000a",
                        "on-secondary-fixed": "#0d2000",
                        "background": "#f8f9fa",
                        "on-secondary-container": "#4c6e2e",
                        "outline": "#75777e",
                        "surface-variant": "#e1e3e4",
                        "on-error": "#ffffff",
                        "error-container": "#ffdad6",
                        "inverse-surface": "#2e3132",
                        "tertiary-fixed": "#ffdf9f",
                        "surface-bright": "#f8f9fa",
                        "on-primary-fixed-variant": "#374766",
                        "on-background": "#191c1d",
                        "surface-container-low": "#f3f4f5",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed": "#c7efa1",
                        "surface-dim": "#d9dadb",
                        "on-tertiary-fixed": "#261a00",
                        "on-surface-variant": "#44474d",
                        "tertiary": "#050300",
                        "surface": "#f8f9fa",
                        "on-secondary": "#ffffff",
                        "outline-variant": "#c5c6ce",
                        "on-primary-container": "#7585a8",
                        "error": "#ba1a1a",
                        "on-primary-fixed": "#091b38",
                        "inverse-primary": "#b6c7ec",
                        "surface-container": "#edeeef",
                        "on-primary": "#ffffff",
                        "tertiary-container": "#281b00",
                        "secondary-fixed-dim": "#acd287",
                        "inverse-on-surface": "#f0f1f2",
                        "surface-tint": "#4f5e7f",
                        "surface-container-highest": "#e1e3e4",
                        "primary-container": "#0b1d3a",
                        "primary-fixed": "#d7e2ff",
                        "surface-container-high": "#e7e8e9",
                        "secondary-container": "#c7efa1"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "unit-xl": "48px",
                        "gutter": "32px",
                        "unit-sm": "8px",
                        "margin-desktop": "80px",
                        "unit-2xl": "80px",
                        "unit-md": "16px",
                        "container-max": "1440px",
                        "unit-lg": "24px",
                        "unit-xs": "4px"
                    },
                    "fontFamily": {
                        "label-lg": ["Inter"],
                        "display-lg": ["Playfair Display"],
                        "headline-sm": ["Playfair Display"],
                        "label-md": ["Inter"],
                        "headline-md": ["Playfair Display"],
                        "body-md": ["Inter"],
                        "body-lg": ["Inter"],
                        "headline-lg": ["Playfair Display"],
                        "body-sm": ["Inter"],
                        "display-xl": ["Playfair Display"]
                    },
                    "fontSize": {
                        "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                        "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
                        "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                        "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}],
                        "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                        "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            background-color: #f8f9fa;
            color: #191c1d;
        }
        .sidebar-active {
            background-color: #0b1d3a;
            color: #d7e2ff;
            border-left: 4px solid #f1bf51;
        }
        .bento-card {
            background: white;
            border: 1px solid rgba(0, 3, 15, 0.1);
            transition: all 0.3s ease;
        }
        .bento-card:hover {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- App Shell Wrapper -->
<div class="flex min-h-screen">
<!-- Sidebar Navigation -->
<aside class="hidden md:flex flex-col w-64 fixed inset-y-0 bg-primary z-50 border-r border-outline-variant/20">
<!-- Header with Large Brand Logo (No Text) -->
<div class="flex items-center justify-center h-unit-xl mt-unit-lg px-unit-md">
<img alt="Institutional Brand Mark" class="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDENLhhxvf-P08Pi6QdE05TwTtFforhOIWSnrnhHjAhYFJ8B_6HUinOZ-ojpFgd8T2C6vaOquhrEJVm5zTB1roSHn-z92BfiekROkey0S_LqQWCrpEHSCNCC3CQCT2otm8jSy566xoZPQKO7z1ZPNweIAuzIMsD6I1Q1jFJHZJGxVpExEkv3FL-2FdjZxXZTtgYebI3Joj6aueNmMcAs0iV84ifQYr98_Mf5rdaUtoMg_COKvU1yvn9AwvT0rbdpQOObUADNodxwG4"/>
</div>
<!-- Navigation Links -->
<nav class="mt-unit-2xl flex-1 px-unit-sm space-y-unit-xs">
<a class="sidebar-active flex items-center px-unit-md py-unit-md font-label-lg text-label-lg transition-all duration-200" href="#">
<span class="material-symbols-outlined mr-unit-md" data-icon="dashboard">dashboard</span>
                    Dashboard
                </a>
<a class="text-on-primary-fixed-variant hover:text-tertiary-fixed-dim flex items-center px-unit-md py-unit-md font-label-lg text-label-lg transition-all duration-200" href="#">
<span class="material-symbols-outlined mr-unit-md" data-icon="archive">archive</span>
                    Archive
                </a>
<a class="text-on-primary-fixed-variant hover:text-tertiary-fixed-dim flex items-center px-unit-md py-unit-md font-label-lg text-label-lg transition-all duration-200" href="#">
<span class="material-symbols-outlined mr-unit-md" data-icon="school">school</span>
                    Courses
                </a>
<a class="text-on-primary-fixed-variant hover:text-tertiary-fixed-dim flex items-center px-unit-md py-unit-md font-label-lg text-label-lg transition-all duration-200" href="#">
<span class="material-symbols-outlined mr-unit-md" data-icon="groups">groups</span>
                    Community
                </a>
<a class="text-on-primary-fixed-variant hover:text-tertiary-fixed-dim flex items-center px-unit-md py-unit-md font-label-lg text-label-lg transition-all duration-200" href="#">
<span class="material-symbols-outlined mr-unit-md" data-icon="storefront">storefront</span>
                    Marketplace
                </a>
</nav>
<!-- Bottom Profile Link -->
<div class="p-unit-lg border-t border-outline-variant/10">
<div class="flex items-center gap-unit-md">
<div class="w-10 h-10 rounded-full bg-tertiary-fixed-dim flex items-center justify-center text-primary font-bold">
                        J
                    </div>
<div class="flex flex-col">
<span class="font-label-lg text-on-primary">Dr. Julian</span>
<span class="text-label-md text-on-primary-fixed-variant">Scholar Level 4</span>
</div>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="flex-1 md:ml-64 bg-surface min-h-screen">
<!-- Top App Bar Content (Dashboard Header) -->
<header class="max-w-[1440px] mx-auto px-margin-desktop h-unit-xl flex justify-between items-center bg-surface sticky top-0 z-40 border-b border-outline-variant/10">
<div class="flex items-center gap-unit-md">
<span class="font-headline-sm text-headline-sm text-primary">Member Dashboard</span>
</div>
<div class="flex items-center gap-unit-lg">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="search">search</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors relative" data-icon="notifications">
                        notifications
                        <span class="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="settings">settings</button>
</div>
</header>
<!-- Dashboard Body -->
<section class="max-w-[1440px] mx-auto px-margin-desktop py-unit-xl">
<!-- Greeting & Personal Message Bento -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-unit-lg mb-unit-xl">
<!-- Welcome Hero -->
<div class="lg:col-span-8 bento-card p-unit-xl flex flex-col justify-center relative overflow-hidden">
<div class="relative z-10">
<h1 class="font-display-lg text-display-lg text-primary mb-unit-sm">Welcome back, Dr. Julian</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                                Your intellectual journey continues today. You have <span class="text-secondary font-semibold">3 modules pending</span> and a symposium session in 48 hours.
                            </p>
<button class="mt-unit-lg bg-primary text-on-primary px-unit-xl py-unit-md font-label-lg text-label-lg hover:bg-primary-container transition-all">
                                Resume Research
                            </button>
</div>
<div class="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary-container/30 to-transparent flex items-center justify-center opacity-50 pointer-events-none">
<span class="material-symbols-outlined text-[120px] text-secondary/10" data-icon="auto_stories">auto_stories</span>
</div>
</div>
<!-- Personal Message / Portrait -->
<div class="lg:col-span-4 bento-card p-unit-lg bg-primary-container text-on-primary-container">
<div class="flex items-start gap-unit-md mb-unit-md">
<img alt="Dr. Ayuba Portrait" class="w-16 h-16 rounded-lg object-cover border border-tertiary-fixed-dim" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCORAmHqjpWvGp9m9SqFMTGo0BINXTw8aZwHCnVT0Xoq4VbxBlj5kZCLCT46SQcHaa28SnaYkRzCVTIWrlPawXtDdfvgU-x-3XUraeYqUYHl01bLiSguM3NxAHdYC0EMHjfr_Ketr0rl3n-IGB2H9VsSbA3jRxNcaXPDIcAubYUXRKr0a5cGrxmxmHqBIe8AOmc5QRTqle6FApalJdz4Ixx7yU5IDliY4SgxtERqG55BMh9ij2Trxgz6V1qBFzq-qjxT0GfJP_097s"/>
<div>
<h3 class="font-label-lg text-label-lg text-tertiary-fixed-dim">Dr. Ayuba's Note</h3>
<span class="text-label-md opacity-70">Director of Scholars</span>
</div>
</div>
<p class="font-body-sm italic border-l-2 border-tertiary-fixed-dim pl-unit-md py-unit-xs">
                            "The pursuit of knowledge is not a destination, but a commitment to excellence. I am personally reviewing your recent archive submissions on Institutional Integrity."
                        </p>
<a class="mt-unit-md inline-flex items-center text-tertiary-fixed-dim font-label-md hover:underline" href="#">
                            Open Correspondence <span class="material-symbols-outlined ml-unit-xs text-[16px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
<!-- Progress & Events Row -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-unit-lg mb-unit-xl">
<!-- Learning Progress Tracker -->
<div class="lg:col-span-7 bento-card p-unit-lg">
<div class="flex justify-between items-center mb-unit-lg">
<h2 class="font-headline-sm text-headline-sm text-primary">Learning Progress</h2>
<button class="text-label-lg text-secondary hover:underline">View Analytics</button>
</div>
<div class="space-y-unit-lg">
<!-- Course Item 1 -->
<div>
<div class="flex justify-between mb-unit-xs">
<span class="font-label-lg text-on-surface">Advanced Academic Integrity</span>
<span class="font-label-md text-on-surface-variant">85%</span>
</div>
<div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
<div class="h-full bg-secondary w-[85%]"></div>
</div>
</div>
<!-- Course Item 2 -->
<div>
<div class="flex justify-between mb-unit-xs">
<span class="font-label-lg text-on-surface">Scholarly Excellence &amp; Research Ethics</span>
<span class="font-label-md text-on-surface-variant">42%</span>
</div>
<div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
<div class="h-full bg-tertiary-fixed-dim w-[42%]"></div>
</div>
</div>
<!-- Course Item 3 -->
<div>
<div class="flex justify-between mb-unit-xs">
<span class="font-label-lg text-on-surface">Institutional Archival Systems</span>
<span class="font-label-md text-on-surface-variant">12%</span>
</div>
<div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
<div class="h-full bg-primary w-[12%]"></div>
</div>
</div>
</div>
</div>
<!-- Upcoming Events Calendar -->
<div class="lg:col-span-5 bento-card p-unit-lg">
<h2 class="font-headline-sm text-headline-sm text-primary mb-unit-lg">Upcoming Events</h2>
<div class="space-y-unit-md">
<!-- Event 1 -->
<div class="flex items-center gap-unit-md p-unit-sm hover:bg-surface-container-low transition-colors rounded">
<div class="w-14 h-14 bg-surface-container flex flex-col items-center justify-center border border-outline-variant">
<span class="font-label-md text-on-surface-variant">OCT</span>
<span class="font-headline-sm leading-none">24</span>
</div>
<div class="flex-1">
<h4 class="font-label-lg text-primary">Symposium: Digital Integrity</h4>
<p class="text-label-md text-on-surface-variant">09:00 AM • Main Hall</p>
</div>
<span class="material-symbols-outlined text-outline-variant" data-icon="chevron_right">chevron_right</span>
</div>
<!-- Event 2 -->
<div class="flex items-center gap-unit-md p-unit-sm hover:bg-surface-container-low transition-colors rounded">
<div class="w-14 h-14 bg-surface-container flex flex-col items-center justify-center border border-outline-variant">
<span class="font-label-md text-on-surface-variant">NOV</span>
<span class="font-headline-sm leading-none">02</span>
</div>
<div class="flex-1">
<h4 class="font-label-lg text-primary">Scholarly Roundtable</h4>
<p class="text-label-md text-on-surface-variant">02:00 PM • Remote</p>
</div>
<span class="material-symbols-outlined text-outline-variant" data-icon="chevron_right">chevron_right</span>
</div>
</div>
<button class="w-full mt-unit-lg border border-primary text-primary py-unit-sm font-label-lg text-label-lg hover:bg-primary-fixed transition-colors">
                            Full Calendar
                        </button>
</div>
</div>
<!-- Saved for Reflection Section -->
<div class="mb-unit-xl">
<div class="flex items-center justify-between mb-unit-lg">
<div class="flex items-center gap-unit-sm">
<span class="material-symbols-outlined text-tertiary-fixed-dim" data-icon="bookmark" style="font-variation-settings: 'FILL' 1;">bookmark</span>
<h2 class="font-headline-sm text-headline-sm text-primary">Saved for Reflection</h2>
</div>
<button class="font-label-lg text-primary flex items-center gap-unit-xs hover:underline">
                            Browse All <span class="material-symbols-outlined" data-icon="arrow_outward">arrow_outward</span>
</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-unit-lg">
<!-- Research Card 1 -->
<div class="bento-card overflow-hidden group">
<div class="h-40 bg-surface-container-highest relative">
<div class="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-all duration-300"></div>
<div class="absolute top-unit-sm left-unit-sm bg-secondary px-2 py-1 text-[10px] font-bold text-on-secondary uppercase tracking-widest">Research Paper</div>
</div>
<div class="p-unit-lg">
<h3 class="font-label-lg text-label-lg text-primary mb-unit-xs line-clamp-2">Methodologies for Archival Preservation in the Digital Era</h3>
<p class="text-body-sm text-on-surface-variant line-clamp-3 mb-unit-md">
                                    Exploring the intersection of classical preservation techniques and modern data redundancy protocols...
                                </p>
<div class="flex items-center justify-between">
<span class="text-label-md text-outline italic">Saved Oct 12</span>
<button class="material-symbols-outlined text-secondary" data-icon="open_in_new">open_in_new</button>
</div>
</div>
</div>
<!-- Research Card 2 -->
<div class="bento-card overflow-hidden group">
<div class="h-40 bg-surface-container-highest relative">
<div class="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-all duration-300"></div>
<div class="absolute top-unit-sm left-unit-sm bg-on-tertiary-container px-2 py-1 text-[10px] font-bold text-on-tertiary uppercase tracking-widest">Case Study</div>
</div>
<div class="p-unit-lg">
<h3 class="font-label-lg text-label-lg text-primary mb-unit-xs line-clamp-2">Institutional Integrity: A Global Comparative Analysis</h3>
<p class="text-body-sm text-on-surface-variant line-clamp-3 mb-unit-md">
                                    A multi-year study into how elite institutions maintain scholarly standards across diverse political landscapes...
                                </p>
<div class="flex items-center justify-between">
<span class="text-label-md text-outline italic">Saved Oct 08</span>
<button class="material-symbols-outlined text-secondary" data-icon="open_in_new">open_in_new</button>
</div>
</div>
</div>
<!-- Research Card 3 -->
<div class="bento-card overflow-hidden group">
<div class="h-40 bg-surface-container-highest relative">
<div class="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-all duration-300"></div>
<div class="absolute top-unit-sm left-unit-sm bg-primary px-2 py-1 text-[10px] font-bold text-on-primary uppercase tracking-widest">Lecture Notes</div>
</div>
<div class="p-unit-lg">
<h3 class="font-label-lg text-label-lg text-primary mb-unit-xs line-clamp-2">Dr. Ayuba on Scholarly Responsibility (Transcript)</h3>
<p class="text-body-sm text-on-surface-variant line-clamp-3 mb-unit-md">
                                    Key takeaways from the Summer 2024 commencement address regarding the individual's role in institutional trust...
                                </p>
<div class="flex items-center justify-between">
<span class="text-label-md text-outline italic">Saved Sep 28</span>
<button class="material-symbols-outlined text-secondary" data-icon="open_in_new">open_in_new</button>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Footer Section -->
<footer class="bg-primary text-on-primary-fixed-variant py-unit-2xl border-t border-outline-variant/10">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex flex-col items-center gap-unit-lg">
<div class="font-display-lg text-display-lg text-tertiary-fixed-dim opacity-50">
<img alt="Institutional Seal" class="h-12 w-auto grayscale brightness-200 opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDENLhhxvf-P08Pi6QdE05TwTtFforhOIWSnrnhHjAhYFJ8B_6HUinOZ-ojpFgd8T2C6vaOquhrEJVm5zTB1roSHn-z92BfiekROkey0S_LqQWCrpEHSCNCC3CQCT2otm8jSy566xoZPQKO7z1ZPNweIAuzIMsD6I1Q1jFJHZJGxVpExEkv3FL-2FdjZxXZTtgYebI3Joj6aueNmMcAs0iV84ifQYr98_Mf5rdaUtoMg_COKvU1yvn9AwvT0rbdpQOObUADNodxwG4"/>
</div>
<nav class="flex gap-unit-xl font-label-lg">
<a class="hover:text-on-tertiary-fixed transition-colors" href="#">Academic Integrity</a>
<a class="hover:text-on-tertiary-fixed transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-on-tertiary-fixed transition-colors" href="#">Terms of Service</a>
<a class="hover:text-on-tertiary-fixed transition-colors" href="#">Institutional Access</a>
</nav>
<p class="font-body-sm text-body-sm text-center max-w-2xl opacity-70">
                        © 2024 Dr. Ayuba's Corner. All rights reserved. Institutional integrity and scholarly excellence.
                        Unauthorized redistribution of member content is strictly prohibited.
                    </p>
</div>
</footer>
</main>
</div>
<!-- Micro-interactions Script -->
<script>
        // Simple hover effect for dashboard metrics
        document.querySelectorAll('.bento-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = 'rgba(0, 3, 15, 0.2)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = 'rgba(0, 3, 15, 0.1)';
            });
        });

        // Search bar activation mock
        const searchBtn = document.querySelector('[data-icon="search"]');
        searchBtn.addEventListener('click', () => {
            console.log('Search activated for institutional archives...');
        });
    </script>

      ` }} />
    </div>
  );
}
