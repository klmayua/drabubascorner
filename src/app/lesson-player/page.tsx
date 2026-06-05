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
      className="bg-surface font-body-md text-on-surface selection:bg-secondary-container" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-error-container": "#93000a",
                        "on-tertiary-container": "#a87f0f",
                        "on-secondary-fixed-variant": "#304f13",
                        "on-secondary-container": "#4c6e2e",
                        "secondary-fixed-dim": "#acd287",
                        "on-primary-fixed": "#091b38",
                        "tertiary-fixed": "#ffdf9f",
                        "on-surface-variant": "#44474d",
                        "surface-container-low": "#f3f4f5",
                        "outline": "#75777e",
                        "on-primary-fixed-variant": "#374766",
                        "surface-container-high": "#e7e8e9",
                        "on-secondary": "#ffffff",
                        "primary-fixed": "#d7e2ff",
                        "on-error": "#ffffff",
                        "surface-container": "#edeeef",
                        "error-container": "#ffdad6",
                        "secondary-container": "#c7efa1",
                        "on-primary-container": "#7585a8",
                        "surface-container-lowest": "#ffffff",
                        "on-surface": "#191c1d",
                        "inverse-surface": "#2e3132",
                        "tertiary-fixed-dim": "#f1bf51",
                        "surface-dim": "#d9dadb",
                        "on-primary": "#ffffff",
                        "surface": "#f8f9fa",
                        "primary": "#00030f",
                        "primary-container": "#0b1d3a",
                        "on-tertiary-fixed-variant": "#5c4300",
                        "background": "#f8f9fa",
                        "tertiary": "#050300",
                        "inverse-primary": "#b6c7ec",
                        "on-background": "#191c1d",
                        "outline-variant": "#c5c6ce",
                        "secondary": "#476729",
                        "tertiary-container": "#281b00",
                        "on-tertiary": "#ffffff",
                        "inverse-on-surface": "#f0f1f2",
                        "on-tertiary-fixed": "#261a00",
                        "primary-fixed-dim": "#b6c7ec",
                        "surface-variant": "#e1e3e4",
                        "on-secondary-fixed": "#0d2000",
                        "surface-container-highest": "#e1e3e4",
                        "error": "#ba1a1a",
                        "secondary-fixed": "#c7efa1",
                        "surface-tint": "#4f5e7f",
                        "surface-bright": "#f8f9fa"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "unit-md": "16px",
                        "unit-lg": "24px",
                        "gutter": "32px",
                        "container-max": "1440px",
                        "margin-desktop": "80px",
                        "unit-2xl": "80px",
                        "unit-xs": "4px",
                        "unit-xl": "48px",
                        "unit-sm": "8px"
                    },
                    "fontFamily": {
                        "display-lg": ["Playfair Display"],
                        "headline-md": ["Playfair Display"],
                        "headline-sm": ["Playfair Display"],
                        "body-md": ["Inter"],
                        "body-sm": ["Inter"],
                        "label-lg": ["Inter"],
                        "display-xl": ["Playfair Display"],
                        "body-lg": ["Inter"],
                        "headline-lg": ["Playfair Display"],
                        "label-md": ["Inter"]
                    },
                    "fontSize": {
                        "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                        "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                        "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
                        "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                        "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                        "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}],
                        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
        }
        .scrolling-content::-webkit-scrollbar {
            width: 4px;
        }
        .scrolling-content::-webkit-scrollbar-track {
            background: transparent;
        }
        .scrolling-content::-webkit-scrollbar-thumb {
            background: #c5c6ce;
            border-radius: 10px;
        }
        .lesson-active {
            background-color: #f3f4f5;
            border-left: 4px solid #476729; /* Gold/Secondary accent per guidelines */
        }
        /* Custom institutional transition */
        .sidebar-transition {
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
    </style>

<!-- TopNavBar (Large Shell Implementation) -->
<header class="w-full top-0 sticky z-50 bg-surface dark:bg-surface-container-lowest border-b border-outline-variant dark:border-outline flat no shadows">
<div class="max-w-container-max mx-auto px-margin-desktop flex justify-between items-center h-20">
<!-- Brand Logo Anchor -->
<a class="flex items-center" href="#">
<img alt="Dr. Ayuba's Corner" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6y5W2xGOv8fkD37td7IkRAowmLGLnWpQ6hqUYjBsyx0Z7qTmJTCk3JGtz7ehmt2J66vxgHHUFWaEIojc0RUUM-vLB7Mq02fybYShY4-2Ts7VIKS8gj1rZIwVXcJUCxPVuISPT4oS7DiZYJ9MsfSF6uCXr9I4_FFLI9lxpoB-5Z3K4zDys_IMsL154LD7VOZs7e06HfSU0RGU127hmV61AQkGLgB4H6Fe2MxXQkZHoFkNEuULybCrwiUBSIc-Pql6oTqiGQ0SNU5E"/>
</a>
<!-- Navigation Links (Mapped from JSON) -->
<nav class="hidden md:flex items-center gap-gutter h-full">
<a class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer" href="#">Articles</a>
<a class="font-body-md text-body-md text-primary dark:text-primary-fixed border-b-2 border-secondary font-bold pb-1 cursor-pointer" href="#">Courses</a>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer" href="#">Videos</a>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer" href="#">Podcast</a>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer" href="#">Community</a>
<a class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer" href="#">Marketplace</a>
</nav>
<!-- Actions -->
<div class="flex items-center gap-unit-md">
<button class="material-symbols-outlined text-primary text-2xl hover:bg-surface-container transition-all active:scale-95 p-2 rounded-full">search</button>
<button class="material-symbols-outlined text-primary text-2xl hover:bg-surface-container transition-all active:scale-95 p-2 rounded-full" data-icon="account_circle">account_circle</button>
</div>
</div>
</header>
<!-- Main Player Canvas -->
<main class="flex h-[calc(100vh-80px)] overflow-hidden bg-background">
<!-- Left Side: Primary Lecture Content -->
<section class="flex-1 flex flex-col h-full overflow-y-auto scrolling-content">
<!-- Video Player Area -->
<div class="relative w-full aspect-video bg-primary-container group">
<!-- Video Mockup -->
<div class="absolute inset-0 flex items-center justify-center">
<img alt="Lecture Background" class="w-full h-full object-cover opacity-60" data-alt="A professional video lecture scene for a medical institution, showing a high-tech university classroom with large digital screens displaying complex anatomical diagrams. The lighting is crisp and cool, maintaining a premium academic aesthetic with a navy and silver color palette. The perspective is from the back of the room, looking towards a podium where an unseen speaker is presenting authoritative research." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfAPS3MLETpkELyrcM-XkL-c8WiSuX_tbJ76j2b0-Anrdok93teXniil-TpcKTKFG9gHQDDkE-ZdrAHai6Pt9HAqdyPF5J7nSVCxABsPd-fiWpM_TIUMSABqyim_H75b-TJ5VHXfOyI59PE2riN_wnHIBkEhTFPW3juj--cuF56Uf5cSjQaDUCL0dZBmNDqUvs-Xg_rFyIolr_Z3FExerV6nFYYVbjbndThj8PIcvGJNPARth3Y3YdUvZGKFY8VPt-AgwOD-8hY-w"/>
<button class="z-10 bg-on-primary-container/90 hover:bg-on-primary-container text-surface p-unit-xl rounded-full transition-transform active:scale-90 group-hover:scale-105">
<span class="material-symbols-outlined text-6xl" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</button>
</div>
<!-- Video Controls Overlay (Simplified) -->
<div class="absolute bottom-0 w-full p-unit-md bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div class="w-full bg-white/30 h-1 rounded-full mb-4">
<div class="bg-tertiary-fixed h-full w-1/3 rounded-full"></div>
</div>
<div class="flex items-center justify-between text-white">
<div class="flex gap-unit-md">
<span class="material-symbols-outlined cursor-pointer">pause</span>
<span class="material-symbols-outlined cursor-pointer">volume_up</span>
<span class="font-label-md text-label-md">12:45 / 45:00</span>
</div>
<div class="flex gap-unit-md">
<span class="material-symbols-outlined cursor-pointer">settings</span>
<span class="material-symbols-outlined cursor-pointer">fullscreen</span>
</div>
</div>
</div>
</div>
<!-- Lecture Meta Information -->
<div class="p-unit-xl max-w-[1000px]">
<div class="flex justify-between items-start mb-unit-lg">
<div>
<span class="font-label-lg text-label-lg text-secondary uppercase tracking-widest mb-unit-sm block">Module 04 • Clinical Research</span>
<h1 class="font-headline-lg text-headline-lg text-primary mb-unit-sm">Advancements in Neuro-Regenerative Methodologies</h1>
</div>
<div class="flex gap-unit-sm">
<button class="px-unit-lg py-unit-sm bg-primary text-on-primary font-label-lg text-label-lg rounded transition-all active:scale-95 flex items-center gap-unit-xs">
                            Mark as Complete
                        </button>
<button class="px-unit-lg py-unit-sm border border-primary text-primary font-label-lg text-label-lg rounded hover:bg-surface-container transition-all active:scale-95 flex items-center gap-unit-xs">
                            Next Lesson <span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<!-- Tabs for Content Details -->
<div class="border-b border-outline-variant mb-unit-lg">
<nav class="flex gap-gutter">
<button class="py-unit-md text-primary font-bold border-b-2 border-secondary">Overview</button>
<button class="py-unit-md text-on-surface-variant hover:text-primary transition-colors">Transcripts</button>
<button class="py-unit-md text-on-surface-variant hover:text-primary transition-colors">Discussion</button>
</nav>
</div>
<div class="space-y-unit-lg text-on-surface-variant font-body-md text-body-md leading-relaxed">
<p>In this comprehensive lecture, we delve into the most recent breakthroughs in neuro-regenerative clinical trials, focusing on the intersection of stem cell therapy and synthetic scaffolding. Dr. Ayuba provides an institutional overview of the rigorous methodologies applied in the 2023-2024 Research cycle.</p>
<div class="bg-surface-container-low border-l-4 border-primary p-unit-lg italic text-primary">
                        "The transition from theoretical scaffolding to clinical biological integration represents the singular most significant hurdle in contemporary neuro-pathology." — Institutional Bulletin Vol. 42
                    </div>
<p>Key learning objectives include understanding the metabolic constraints of neural integration and the ethical frameworks governing regenerative application in institutional settings.</p>
</div>
</div>
</section>
<!-- Right Side: Collapsible Sidebar -->
<aside class="sidebar-transition w-[400px] bg-white border-l border-outline-variant h-full flex flex-col relative" id="player-sidebar">
<!-- Sidebar Header -->
<div class="p-unit-lg border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
<h2 class="font-label-lg text-label-lg text-primary uppercase tracking-widest">Course Materials</h2>
<button class="material-symbols-outlined p-unit-xs hover:bg-surface-container-high rounded transition-colors" onclick="toggleSidebar()">last_page</button>
</div>
<!-- Sidebar Content Sections -->
<div class="flex-1 overflow-y-auto scrolling-content">
<!-- Section: Curriculum Outline -->
<div class="p-unit-lg">
<div class="flex items-center gap-unit-sm mb-unit-md">
<span class="material-symbols-outlined text-secondary">list_alt</span>
<h3 class="font-headline-sm text-headline-sm text-primary">Curriculum Outline</h3>
</div>
<div class="space-y-unit-xs">
<!-- Lesson Item -->
<div class="lesson-active flex items-start gap-unit-md p-unit-md rounded cursor-pointer group">
<span class="material-symbols-outlined text-secondary mt-1" style="font-variation-settings: 'FILL' 1;">play_circle</span>
<div>
<p class="font-label-lg text-label-lg text-primary">4.1 Introduction to Neural Scaffolding</p>
<span class="text-xs text-on-surface-variant">15:00 • Current</span>
</div>
</div>
<!-- Locked Item -->
<div class="flex items-start gap-unit-md p-unit-md rounded hover:bg-surface-container transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-outline-variant mt-1">play_circle</span>
<div class="opacity-70">
<p class="font-label-lg text-label-lg text-on-surface">4.2 Biocompatibility Benchmarks</p>
<span class="text-xs text-on-surface-variant">22:15</span>
</div>
<span class="material-symbols-outlined ml-auto text-sm text-outline">lock</span>
</div>
<div class="flex items-start gap-unit-md p-unit-md rounded hover:bg-surface-container transition-colors cursor-pointer group">
<span class="material-symbols-outlined text-outline-variant mt-1">play_circle</span>
<div class="opacity-70">
<p class="font-label-lg text-label-lg text-on-surface">4.3 Clinical Case Studies A</p>
<span class="text-xs text-on-surface-variant">45:00</span>
</div>
<span class="material-symbols-outlined ml-auto text-sm text-outline">lock</span>
</div>
</div>
</div>
<!-- Section: Downloadable Resources (PDFs) -->
<div class="p-unit-lg border-t border-outline-variant bg-surface-container-lowest">
<div class="flex items-center gap-unit-sm mb-unit-md">
<span class="material-symbols-outlined text-secondary">picture_as_pdf</span>
<h3 class="font-headline-sm text-headline-sm text-primary">Resources</h3>
</div>
<ul class="space-y-unit-sm">
<li class="flex items-center justify-between p-unit-sm border border-outline-variant hover:border-secondary transition-colors group cursor-pointer">
<div class="flex items-center gap-unit-sm">
<span class="material-symbols-outlined text-error">description</span>
<span class="font-label-md text-label-md text-on-surface">Scaffolding_Protocols.pdf</span>
</div>
<span class="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">download</span>
</li>
<li class="flex items-center justify-between p-unit-sm border border-outline-variant hover:border-secondary transition-colors group cursor-pointer">
<div class="flex items-center gap-unit-sm">
<span class="material-symbols-outlined text-error">description</span>
<span class="font-label-md text-label-md text-on-surface">Reference_Journal_V12.pdf</span>
</div>
<span class="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">download</span>
</li>
</ul>
</div>
<!-- Section: Scholarly Notes -->
<div class="p-unit-lg border-t border-outline-variant">
<div class="flex items-center gap-unit-sm mb-unit-md">
<span class="material-symbols-outlined text-secondary">edit_note</span>
<h3 class="font-headline-sm text-headline-sm text-primary">Scholarly Notes</h3>
</div>
<textarea class="w-full h-32 p-unit-md border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none font-body-sm text-body-sm bg-surface-container-low" placeholder="Capture your intellectual insights here..."></textarea>
<button class="mt-unit-sm w-full py-unit-sm bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors">Save To Portfolio</button>
</div>
</div>
</aside>
</main>
<!-- Footer (Implementation from JSON) -->
<footer class="w-full mt-auto bg-primary-container dark:bg-tertiary-container border-t border-outline-variant">
<div class="max-w-container-max mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div class="col-span-1 md:col-span-1">
<span class="font-headline-md text-headline-md text-on-primary-container block mb-unit-md">Dr. Ayuba's Corner</span>
<p class="font-body-sm text-body-sm text-on-primary-container opacity-80">Institutional Excellence in Medical Education and Research. Preserving intellectual legacy through digital innovation.</p>
</div>
<div class="flex flex-col gap-unit-sm">
<span class="font-label-lg text-label-lg text-tertiary-fixed mb-unit-xs">Legal &amp; Compliance</span>
<a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a>
</div>
<div class="flex flex-col gap-unit-sm">
<span class="font-label-lg text-label-lg text-tertiary-fixed mb-unit-xs">Resources</span>
<a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Faculty Directory</a>
<a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Institutional Research</a>
</div>
<div class="flex flex-col gap-unit-sm">
<span class="font-label-lg text-label-lg text-tertiary-fixed mb-unit-xs">Connect</span>
<a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Contact Us</a>
<a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Sitemap</a>
</div>
</div>
<div class="max-w-container-max mx-auto px-margin-desktop py-unit-md border-t border-on-primary-container/20">
<p class="font-body-sm text-body-sm text-on-primary-container opacity-60 text-center">
                © 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.
            </p>
</div>
</footer>
<script>
        function toggleSidebar() {
            const sidebar = document.getElementById('player-sidebar');
            const toggleBtn = event.currentTarget;
            if (sidebar.classList.contains('w-[400px]')) {
                sidebar.style.width = '60px';
                sidebar.classList.remove('w-[400px]');
                sidebar.classList.add('w-[60px]');
                toggleBtn.style.transform = 'rotate(180deg)';
                // Hide children content
                Array.from(sidebar.children).forEach((child, index) => {
                    if (index > 0) child.classList.add('hidden');
                });
                sidebar.querySelector('h2').classList.add('hidden');
            } else {
                sidebar.style.width = '400px';
                sidebar.classList.remove('w-[60px]');
                sidebar.classList.add('w-[400px]');
                toggleBtn.style.transform = 'rotate(0deg)';
                // Show children content
                setTimeout(() => {
                    Array.from(sidebar.children).forEach((child) => {
                        child.classList.remove('hidden');
                    });
                    sidebar.querySelector('h2').classList.remove('hidden');
                }, 100);
            }
        }

        // Initialize tooltips/interactions
        document.querySelectorAll('.lesson-active').forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.style.transform = 'translateX(4px)';
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translateX(0px)';
            });
            el.style.transition = 'transform 0.2s ease';
        });
    </script>

      ` }} />
    </div>
  );
}
