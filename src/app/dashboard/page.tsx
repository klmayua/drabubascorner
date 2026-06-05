'use client';

import React, { useEffect, useRef } from 'react';

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Find all script tags inside the container
    const scripts = Array.from(containerRef.current.querySelectorAll('script'));
    
    // Execute scripts sequentially to preserve execution order dependencies (like Tailwind -> tailwind.config)
    const runScriptsSequentially = async (index = 0) => {
      if (index >= scripts.length) return;
      const oldScript = scripts[index];
      const newScript = document.createElement('script');
      
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      
      newScript.textContent = oldScript.textContent;
      
      if (newScript.src) {
        newScript.onload = () => runScriptsSequentially(index + 1);
        newScript.onerror = () => runScriptsSequentially(index + 1);
        oldScript.parentNode?.replaceChild(newScript, oldScript);
      } else {
        oldScript.parentNode?.replaceChild(newScript, oldScript);
        runScriptsSequentially(index + 1);
      }
    };
    
    runScriptsSequentially();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="bg-surface text-on-surface font-body-md overflow-hidden" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&amp;family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
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
        .active-nav-indicator {
            position: absolute;
            left: 0;
            width: 4px;
            height: 100%;
            background-color: #476729; /* secondary */
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #d1d5db;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(8px);
        }
    </style>

<div class="flex h-screen overflow-hidden">
<!-- SideNavBar Component -->
<aside class="h-screen w-64 sticky left-0 bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline flex flex-col py-8 gap-unit z-20">
<div class="px-6 mb-10"><img alt="Dr. Ayuba's Corner" class="w-full h-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP_QPnoNZLZRfcoMqwpo8Vv1S-13htvCrLQUi6IciKniJVCYp3rSOE9eZDyKE_PK7FRBKM1in1ywvhyJ41kJUFfynk0pece7p8-kK6NQmQOHfh1G3ZParulOgh4y8M7SU0JAbeOx2UIBEHJRA2LeHZwn25s2QByMs_Tz8Cb1UYMO8UFH6MI5wo8IuFZ_JSHnR9NWw_wTxtIvPEsvGQtU8POfjZz0t06MWSojQnNj3Uux2X6ImQ__d6jmYIwgzX1TIfoT_zhHfYCZE">


</div>
<nav class="flex-grow flex flex-col">
<a class="flex items-center gap-3 text-primary dark:text-primary-fixed font-bold border-l-4 border-secondary bg-surface-container-high px-4 py-3 font-label-lg text-label-lg transition-all duration-150 ease-in-out" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    Dashboard
                </a>
<a class="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 font-label-lg text-label-lg hover:bg-surface-container transition-all duration-150 ease-in-out" href="#">
<span class="material-symbols-outlined" data-icon="school">school</span>
                    My Learning
                </a>
<a class="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 font-label-lg text-label-lg hover:bg-surface-container transition-all duration-150 ease-in-out" href="#">
<span class="material-symbols-outlined" data-icon="menu_book">menu_book</span>
                    Research
                </a>
<a class="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 font-label-lg text-label-lg hover:bg-surface-container transition-all duration-150 ease-in-out" href="#">
<span class="material-symbols-outlined" data-icon="mail">mail</span>
                    Inbox
                </a>
<a class="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 font-label-lg text-label-lg hover:bg-surface-container transition-all duration-150 ease-in-out" href="#">
<span class="material-symbols-outlined" data-icon="loyalty">loyalty</span>
                    Subscriptions
                </a>
<a class="flex items-center gap-3 text-on-surface-variant dark:text-on-surface-variant px-4 py-3 font-label-lg text-label-lg hover:bg-surface-container transition-all duration-150 ease-in-out" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
                    Settings
                </a>
</nav>
<div class="px-6 mt-auto">
<button class="w-full bg-primary text-on-primary py-3 px-4 font-label-lg text-label-lg rounded hover:opacity-90 transition-opacity">
                    Upgrade Plan
                </button>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-grow flex flex-col h-screen overflow-y-auto custom-scrollbar bg-surface">
<!-- Top Header Section -->
<header class="w-full h-20 px-margin-desktop flex justify-between items-center bg-surface dark:bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-10">
<div class="flex flex-col flex-shrink-0">
<span class="font-headline-sm text-headline-sm text-primary whitespace-nowrap">Member Dashboard</span>
</div>
<div class="flex items-center gap-gutter flex-nowrap ml-unit-lg">
<div class="relative flex-shrink-0">
<span class="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant" data-icon="search">search</span>
<input class="pl-10 pr-4 py-2 bg-surface-container border border-outline-variant rounded-full text-body-sm focus:outline-none focus:ring-1 focus:ring-primary w-64 whitespace-nowrap" placeholder="Search archive..." type="text">
</div>
<div class="flex items-center gap-unit-md flex-shrink-0">
<span class="material-symbols-outlined text-primary cursor-pointer" data-icon="notifications">notifications</span>
<div class="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">
                            JA
                        </div>
</div>
</div>
</header>
<!-- Dashboard Content -->
<div class="p-margin-desktop space-y-unit-2xl max-w-container-max mx-auto w-full">
<!-- Welcome Section -->
<section class="flex flex-col md:flex-row justify-between items-end gap-gutter">
<div class="space-y-unit-sm">
<p class="font-label-lg text-label-lg text-secondary tracking-widest uppercase">Welcome back</p>
<h2 class="font-display-lg text-display-lg text-primary">Good Morning, Dr. Julian.</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Your research on clinical neuroplasticity has been cited 12 times this week. Continue your curriculum below.</p>
</div>
<div class="bg-primary-container p-unit-lg rounded-xl flex items-center gap-unit-lg text-on-primary-container border border-outline-variant/10">
<div class="text-right">
<p class="font-label-md text-label-md opacity-80">Research Points</p>
<p class="font-headline-sm text-headline-sm">2,450</p>
</div>
<div class="w-[1px] h-12 bg-on-primary-container/20"></div>
<span class="material-symbols-outlined text-4xl" data-icon="military_tech">military_tech</span>
</div>
</section>
<!-- Learning Progress & Saved List Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Learning Progress Tracker -->
<div class="lg:col-span-8 space-y-gutter">
<div class="flex items-center justify-between">
<h3 class="font-headline-sm text-headline-sm text-primary">Curriculum Progress</h3>
<button class="text-secondary font-label-lg text-label-lg hover:underline">View All Courses</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-unit-lg">
<!-- Course Card 1 -->
<div class="bg-surface-container-lowest border border-outline-variant p-unit-lg hover:border-secondary transition-colors cursor-pointer group">
<div class="flex justify-between items-start mb-unit-lg">
<div class="bg-secondary-container p-unit-sm rounded">
<span class="material-symbols-outlined text-secondary" data-icon="neurology">neurology</span>
</div>
<span class="font-label-md text-label-md bg-surface-container px-2 py-1">Advanced Genetics</span>
</div>
<h4 class="font-headline-sm text-[22px] leading-tight mb-2">Molecular Pathology II</h4>
<div class="space-y-2 mt-unit-xl">
<div class="flex justify-between text-label-lg">
<span class="">Progress</span>
<span class="text-secondary font-bold">84%</span>
</div>
<div class="w-full h-1.5 bg-surface-container overflow-hidden">
<div class="h-full bg-secondary w-[84%]"></div>
</div>
</div>
</div>
<!-- Course Card 2 -->
<div class="bg-surface-container-lowest border border-outline-variant p-unit-lg hover:border-secondary transition-colors cursor-pointer">
<div class="flex justify-between items-start mb-unit-lg">
<div class="bg-tertiary-fixed p-unit-sm rounded">
<span class="material-symbols-outlined text-tertiary-container" data-icon="analytics">analytics</span>
</div>
<span class="font-label-md text-label-md bg-surface-container px-2 py-1">Methodology</span>
</div>
<h4 class="font-headline-sm text-[22px] leading-tight mb-2">Statistical Meta-Analysis</h4>
<div class="space-y-2 mt-unit-xl">
<div class="flex justify-between text-label-lg">
<span class="">Progress</span>
<span class="text-secondary font-bold">32%</span>
</div>
<div class="w-full h-1.5 bg-surface-container overflow-hidden">
<div class="h-full bg-secondary w-[32%]"></div>
</div>
</div>
</div>
</div>
<!-- Saved Reading List (High Contrast Bento) -->
<div class="space-y-unit-lg pt-unit-xl">
<h3 class="font-headline-sm text-headline-sm text-primary">Saved Reading List</h3>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-unit-md">
<div class="group relative overflow-hidden h-64 bg-primary flex items-end p-unit-md">
<div class="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700 bg-cover bg-center" data-alt="A macro photograph of laboratory equipment with deep shadows and cool blue lighting, creating a high-contrast and intellectual atmosphere. The focus is on glass vials and sterile scientific tools, representing advanced medical research and pharmaceutical studies." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhGBEUnzW4i2oCnG_EveRrz5wyOwC7_r_L3b6s4mmQ-MFosnKWnZpEpZx4gSx-8LW2tEJjP08Ks8_hnpCRa2_iao0Ut22y__gMJcQo_ZzayrXz2XDaAzMpZeG74UMIyaAAfuWYdO2u-pUTZLjEOdS4hBbqE37NwbGb1yxCz89GF6uTgZigp7wo2xZBWanvbQ_Ot_-_O40Oc3ybOWGGibrI2rCQPEAs2KbVZduvhJtwuWBK5J2HddEEHo6IDnVppI7wRCb0kmIggho')"></div>
<div class="relative z-10 space-y-1">
<span class="text-[10px] uppercase tracking-widest text-secondary-fixed bg-secondary/80 px-2 py-0.5">Article</span>
<h5 class="text-on-primary font-headline-sm text-lg leading-snug">The Ethics of CRISPR in Neonatal Care</h5>
</div>
</div>
<div class="group relative overflow-hidden h-64 bg-primary flex items-end p-unit-md">
<div class="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700 bg-cover bg-center" data-alt="An expansive, modern library interior with tall wooden shelves filled with antique leather-bound books. The lighting is warm and atmospheric, coming from hanging classic lamps, highlighting the rich textures of the books and the scholarly environment of a high-end academic institution." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrg3TImOU2X5siC_lzv96kI5Em6NbkcUki80Xi0SG8q1dJzDLy_h5exAdcTTL7Zs1p-BdwJI9sVVYfoxv-xi3sk_Yqf6Z-Cb1fIhaAkBEBg23OUIZnjkBzG2W-mh596laNf03RxhQWDAAii9hs7P6ngQ0KyO3a5j__CNdx1rKiPVTtWQCJbhtKaGmXrh3SaecLML7bEwJlS02rv6LwqZy310JgnZDYCxy13QLA0aU2_PsiabNDXL4Ib5Lz40gcBmqrfw5lmPjMCqI')"></div>
<div class="relative z-10 space-y-1">
<span class="text-[10px] uppercase tracking-widest text-tertiary-fixed bg-tertiary/80 px-2 py-0.5">Podcast</span>
<h5 class="text-on-primary font-headline-sm text-lg leading-snug">Dr. Ayuba on Neural Mapping</h5>
</div>
</div>
<div class="group relative overflow-hidden h-64 bg-primary flex items-end p-unit-md">
<div class="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700 bg-cover bg-center" data-alt="A clean, minimalist desk setup featuring a digital tablet showing complex data visualizations and medical diagrams. The room is brightly lit with natural light, emphasizing a high-tech, modern light-mode aesthetic focused on data-driven medicine and digital learning." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCy9x9V5lkCi-pvIvtqJVZo9-zi2lPLcqwGNvlB8iODYV5mPBcgeapHSBzAIPlKDnH9o14J7_ia-_3mPPCIv9KZ7M1bJi5mNi_5qKMjcv5QnmWw0AHHkTJfFiTMo-p6s8RB5S8XuyYM1qsZ92VD5lP1aottaBZSq9kIlMoajj70CUINM0nA7d6LRjBHBXKRwdQvIu7IFOwVS2Mxyl9ZhcQZisevE5gHx2EhjbwnlFe-6RlNe0Waqfe4A4H_th6nqJd-nrWXo05cQ-8')"></div>
<div class="relative z-10 space-y-1">
<span class="text-[10px] uppercase tracking-widest text-primary-fixed bg-primary/80 px-2 py-0.5">Thesis</span>
<h5 class="text-on-primary font-headline-sm text-lg leading-snug">Global Health Trends: 2025 Report</h5>
</div>
</div>
</div>
</div>
</div>
<!-- Right Sidebar: Premium Events -->
<div class="lg:col-span-4 space-y-gutter">
<div class="bg-primary-container text-on-primary-container p-unit-xl rounded border border-primary flex flex-col gap-unit-lg h-full">
<div class="space-y-unit-sm">
<h3 class="font-headline-sm text-headline-sm text-on-primary">Upcoming Premium Events</h3>
<p class="font-body-sm text-body-sm opacity-70">Exclusively for Institutional Members</p>
</div>
<div class="space-y-gutter mt-unit-lg">
<!-- Event 1 -->
<div class="group cursor-pointer">
<p class="font-label-lg text-secondary-fixed mb-1">JUNE 14 • 10:00 AM</p>
<h4 class="font-headline-sm text-xl text-on-primary group-hover:text-secondary-fixed transition-colors">Global Oncology Symposium</h4>
<p class="font-body-sm text-body-sm opacity-60 mt-2">Featuring keynote speakers from Johns Hopkins and the WHO.</p>
<div class="mt-4 flex gap-unit-sm items-center text-label-md uppercase tracking-widest text-on-primary">
<span class="">Register</span>
<span class="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</div>
<div class="w-full h-[1px] bg-on-primary/10 mt-6"></div>
</div>
<!-- Event 2 -->
<div class="group cursor-pointer">
<p class="font-label-lg text-secondary-fixed mb-1">JUNE 22 • 02:00 PM</p>
<h4 class="font-headline-sm text-xl text-on-primary group-hover:text-secondary-fixed transition-colors">Digital Health Ethics Workshop</h4>
<p class="font-body-sm text-body-sm opacity-60 mt-2">Interactive session on AI-driven diagnostics and patient privacy.</p>
<div class="mt-4 flex gap-unit-sm items-center text-label-md uppercase tracking-widest text-on-primary">
<span class="">Join Waitlist</span>
<span class="material-symbols-outlined text-sm" data-icon="hourglass_empty">hourglass_empty</span>
</div>
<div class="w-full h-[1px] bg-on-primary/10 mt-6"></div>
</div>
<!-- Event 3 -->
<div class="group cursor-pointer">
<p class="font-label-lg text-secondary-fixed mb-1">JULY 05 • ALL DAY</p>
<h4 class="font-headline-sm text-xl text-on-primary group-hover:text-secondary-fixed transition-colors">Institutional Annual Gala</h4>
<p class="font-body-sm text-body-sm opacity-60 mt-2">Join us for the 15th annual celebration of intellectual achievement.</p>
<div class="mt-4 flex gap-unit-sm items-center text-label-md uppercase tracking-widest text-on-primary">
<span class="">Download Invite</span>
<span class="material-symbols-outlined text-sm" data-icon="download">download</span>
</div>
</div>
</div>
<div class="mt-auto pt-unit-xl">
<div class="bg-on-primary/5 p-unit-md border-l-2 border-secondary-fixed">
<p class="italic font-body-sm text-on-primary/80">"Education is the most powerful weapon which you can use to change the world."</p>
<p class="text-secondary-fixed font-label-md mt-2 text-right">— Nelson Mandela</p>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Footer Component -->
<footer class="w-full mt-auto bg-primary-container dark:bg-tertiary-container">
<div class="max-w-container-max mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter text-on-primary-container dark:text-tertiary-fixed">
<div class="md:col-span-1 space-y-unit-md">
<h2 class="font-headline-md text-headline-md text-on-primary-container">Institutional Excellence</h2>
<p class="font-body-sm text-body-sm opacity-80">A sanctuary for intellectual growth and institutional research excellence.</p>
</div>
<div class="md:col-span-1 space-y-4">
<h4 class="font-label-lg text-label-lg text-secondary-fixed uppercase tracking-widest">Resources</h4>
<ul class="space-y-2 font-body-sm text-body-sm">
<li class=""><a class="opacity-80 hover:opacity-100 transition-opacity" href="#">Faculty Directory</a></li>
<li class=""><a class="opacity-80 hover:opacity-100 transition-opacity" href="#">Institutional Research</a></li>
<li class=""><a class="opacity-80 hover:opacity-100 transition-opacity" href="#">Sitemap</a></li>
</ul>
</div>
<div class="md:col-span-1 space-y-4">
<h4 class="font-label-lg text-label-lg text-secondary-fixed uppercase tracking-widest">Legal</h4>
<ul class="space-y-2 font-body-sm text-body-sm">
<li class=""><a class="opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a></li>
<li class=""><a class="opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a></li>
</ul>
</div>
<div class="md:col-span-1 space-y-4">
<h4 class="font-label-lg text-label-lg text-secondary-fixed uppercase tracking-widest">Support</h4>
<ul class="space-y-2 font-body-sm text-body-sm">
<li class=""><a class="opacity-80 hover:opacity-100 transition-opacity" href="#">Contact Us</a></li>
<li class=""><a class="opacity-80 hover:opacity-100 transition-opacity" href="#">Help Center</a></li>
</ul>
</div>
</div>
<div class="max-w-container-max mx-auto px-margin-desktop py-6 border-t border-outline-variant/10">
<p class="font-body-sm text-body-sm text-on-primary-container opacity-60">© 2024 Institutional Portal. All rights reserved. Intellectual Property of the Institution.</p>
</div>
</footer>
</main>
</div>
<!-- Small Micro-interaction Script -->
<script>
        document.querySelectorAll('.group').forEach(item => {
            item.addEventListener('mouseenter', () => {
                // Potential for adding subtle sound or haptic feedback calls
            });
        });
    </script>



      ` }} />
    </div>
  );
}
