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
      className="bg-background text-on-surface selection:bg-secondary-container selection:text-on-secondary-container" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
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
            display: inline-block;
            vertical-align: middle;
        }
        .editorial-container {
            max-width: 800px;
            margin: 0 auto;
        }
        .texture-bg {
            background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
            opacity: 0.4;
        }
        .legacy-gradient {
            background: linear-gradient(135deg, #fcf9f8 0%, #f6f3f2 100%);
        }
        .hero-clip {
            clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>

<!-- TopAppBar -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-surface border-b border-outline-variant transition-all duration-300" id="main-header">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
<img alt="Dr. Ayuba Tree and Book Logo" class="w-full h-full object-cover" data-alt="A professional minimalist logo featuring an abstract baobab tree growing out of an open medical textbook. The style is clean and institutional, using deep navy and gold accents against a bone-white background. The lighting is bright and even, conveying authority and nurturing wisdom in a modern medical education context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU_fnOB36QqxTdog6p8YQzxVAF7kPNxHgBtGvPA2e8LB0GNIVCc01iaeb6tVxezduf86NRv6a92lifbEBF_j9t25YG-2_hYRcHiWgni11r_2A2LWKjxCDCGIT5bmBv-CaQ3xfcptEe8vQMFv5otUVy5RYYEZJN4I4Qz9YrtCRG0JkqL60FdpovhlINW1xFyMIKHBOa14GVo84Y-KZ10LrgOQZgH2pzutvVJV763wft_-XW0HcfjjsrD69tpvHO_n4PUB8LmbWZ_tE"/>
</div>
<span class="font-headline-md text-headline-md font-bold text-primary">Dr. Ayuba's Corner</span>
</div>
<nav class="hidden md:flex gap-8 items-center">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Home</a>
<a class="font-label-lg text-label-lg text-primary font-bold" href="#">About</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Articles</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Resources</a>
<a class="px-6 py-2 bg-primary text-on-primary font-label-lg text-label-lg rounded-full hover:opacity-80 transition-opacity" href="#">Member Access</a>
</nav>
<button class="md:hidden text-primary" onclick="document.getElementById('mobile-drawer').classList.remove('-translate-x-full')">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<!-- NavigationDrawer (Mobile) -->
<div class="fixed inset-y-0 left-0 z-[60] flex flex-col bg-surface-container-low w-80 -translate-x-full transition-transform duration-300 shadow-md" id="mobile-drawer">
<div class="p-6 flex flex-col gap-4">
<div class="flex justify-between items-center">
<span class="font-headline-sm text-headline-sm text-primary">Dashboard</span>
<button onclick="document.getElementById('mobile-drawer').classList.add('-translate-x-full')">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<div class="flex items-center gap-3 py-4 border-b border-outline-variant">
<div class="w-12 h-12 rounded-full bg-secondary-container"></div>
<div>
<p class="font-label-lg text-label-lg font-bold">Member Profile</p>
<p class="font-label-md text-label-md text-on-surface-variant">Premium Access</p>
</div>
</div>
</div>
<nav class="flex-1 overflow-y-auto pb-8">
<a class="flex items-center gap-4 mx-2 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-full" href="#">
<span class="material-symbols-outlined">home</span>
<span class="font-label-md text-label-md">Home</span>
</a>
<a class="flex items-center gap-4 bg-secondary-container text-on-secondary-container rounded-full mx-2 px-4 py-3 font-bold" href="#">
<span class="material-symbols-outlined">info</span>
<span class="font-label-md text-label-md">About</span>
</a>
<!-- Repeating items from JSON for structure -->
<a class="flex items-center gap-4 mx-2 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-full" href="#">
<span class="material-symbols-outlined">article</span>
<span class="font-label-md text-label-md">Articles</span>
</a>
<a class="flex items-center gap-4 mx-2 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-full" href="#">
<span class="material-symbols-outlined">play_circle</span>
<span class="font-label-md text-label-md">Videos</span>
</a>
<a class="flex items-center gap-4 mx-2 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-full" href="#">
<span class="material-symbols-outlined">podcasts</span>
<span class="font-label-md text-label-md">Podcast</span>
</a>
</nav>
</div>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative min-h-[618px] flex items-center justify-center overflow-hidden legacy-gradient">
<div class="absolute inset-0 texture-bg opacity-10"></div>
<div class="container mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center relative z-10">
<div class="order-2 md:order-1">
<span class="font-label-lg text-label-lg text-secondary tracking-widest uppercase mb-4 block">Legacy &amp; Excellence</span>
<h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">A Life Dedicated to Wisdom and Wellness.</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
                        Dr. Ayuba brings over three decades of clinical expertise, leadership, and a deep-rooted passion for African health systems to the global stage.
                    </p>
<div class="flex gap-4">
<button class="bg-primary text-on-primary px-8 py-4 font-label-lg text-label-lg hover:opacity-90 transition-opacity">Read Manifesto</button>
<button class="border border-primary text-primary px-8 py-4 font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-all">Credentials</button>
</div>
</div>
<div class="order-1 md:order-2 flex justify-center">
<div class="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden shadow-2xl hero-clip">
<img alt="Dr. Ayuba Portrait" class="w-full h-full object-cover" data-alt="A dignified portrait of an African male medical professional in a well-tailored navy suit, standing in a brightly lit, modern library with warm wooden shelves. His expression is one of calm authority and approachability. The lighting is soft and cinematic, highlighting a sophisticated institutional aesthetic with deep blues and earthy wood tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiEGs4xbxPN3C_id7SYq8SyEvv8eho_GHQsgOrTcblTnKhp2Bs3xnjhylGcISxCbj-zTmtFhGFvX3B0BXG6Ix0iKrisDJUNM40AuabhA8AVxsh_nuv3sDuyIyMS26qF3zaKpyJJ6KOyR8z4iSApagGlffHA3pdpR34VFx4R9pGV2BPreCnS6zNw0Ri0LhwbwZGZDUKwRagfkbGolSfItaIDczA3V0vLzgiPXtEN2cx0p6BFE514RiH3kpgr5R-bADyNVKDmYKUOMc"/>
</div>
</div>
</div>
</section>
<!-- Biography Content -->
<section class="py-24 bg-surface">
<div class="editorial-container px-margin-mobile">
<div class="border-l-4 border-tertiary-fixed-dim pl-8 mb-16">
<p class="font-headline-md text-headline-md italic text-primary leading-relaxed">
                        "True medicine is not just the absence of disease, but the presence of wisdom, the strength of the spirit, and the prosperity of the community."
                    </p>
<p class="mt-4 font-label-lg text-label-lg text-on-surface-variant">— Dr. Ayuba</p>
</div>
<div class="prose prose-lg">
<h2 class="font-headline-xl text-headline-xl text-primary mb-8">The Journey of a Physician Leader</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-loose">
                        Dr. Ayuba's career is a testament to the power of education and dedicated service. Holding an <strong>MBBS</strong>, he further distinguished himself as a <strong>Fellow of the West African College of Physicians (FWACP)</strong> and a <strong>Fellow of the Ghana Academy of Medicine (FGAM)</strong>. His medical journey began in the vibrant clinics of West Africa, where he witnessed firsthand the intersection of cultural heritage and modern clinical practice.
                    </p>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-loose">
                        Over the years, his focus shifted from individual clinical care to systemic transformation. As a leader in medical education, he has pioneered several training modules that integrate traditional African wellness philosophies with evidence-based global standards.
                    </p>
</div>
</div>
</section>
<!-- Credentials Grid -->
<section class="py-24 bg-surface-container-low">
<div class="container mx-auto px-margin-mobile md:px-margin-desktop">
<div class="text-center mb-16">
<h2 class="font-headline-xl text-headline-xl text-primary">Medical &amp; Leadership Credentials</h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-4">A record of institutional excellence and academic rigor.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Credential Card 1 -->
<div class="bg-surface p-8 border border-outline-variant hover:border-secondary transition-colors group">
<div class="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-secondary">workspace_premium</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-4">Academic Fellows</h3>
<p class="font-body-md text-body-md text-on-surface-variant">FWACP and FGAM fellow, contributing to the highest standards of medical practice across the African continent.</p>
</div>
<!-- Credential Card 2 -->
<div class="bg-surface p-8 border border-outline-variant hover:border-secondary transition-colors group">
<div class="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-secondary">school</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-4">Teaching Awards</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Three-time recipient of the Excellence in Clinical Instruction Award for training the next generation of physicians.</p>
</div>
<!-- Credential Card 3 -->
<div class="bg-surface p-8 border border-outline-variant hover:border-secondary transition-colors group">
<div class="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-secondary">groups</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-4">Leadership</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Led multiple national healthcare initiatives focused on preventative medicine and rural health access.</p>
</div>
</div>
</div>
</section>
<!-- Manifesto Section -->
<section class="relative py-32 bg-primary text-on-primary overflow-hidden">

<div class="editorial-container px-margin-mobile relative z-10 text-center">
<h2 class="font-display-lg-mobile md:font-display-lg text-on-primary mb-12">The Manifesto</h2>
<div class="space-y-8 text-left border-t border-on-primary-container pt-12">
<div class="flex gap-6">
<span class="font-headline-xl text-tertiary-fixed-dim">01</span>
<div>
<h4 class="font-headline-md text-on-primary mb-2">Knowledge as Sovereignty</h4>
<p class="font-body-lg text-on-primary-container">We believe that a well-informed individual is the first line of defense in any healthcare system.</p>
</div>
</div>
<div class="flex gap-6">
<span class="font-headline-xl text-tertiary-fixed-dim">02</span>
<div>
<h4 class="font-headline-md text-on-primary mb-2">Preventative Heritage</h4>
<p class="font-body-lg text-on-primary-container">Integrating traditional wisdom with modern science to prevent illness before it requires intervention.</p>
</div>
</div>
<div class="flex gap-6">
<span class="font-headline-xl text-tertiary-fixed-dim">03</span>
<div>
<h4 class="font-headline-md text-on-primary mb-2">Universal Health Literacy</h4>
<p class="font-body-lg text-on-primary-container">Breaking the ivory tower barriers to make elite medical wisdom accessible to everyone.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Mission & Vision -->
<section class="py-24 bg-surface">
<div class="container mx-auto px-margin-mobile md:px-margin-desktop">
<div class="grid md:grid-cols-2 gap-16">
<div class="p-12 bg-surface-container-low border-r-8 border-secondary">
<h3 class="font-headline-xl text-headline-xl text-primary mb-6">Our Mission</h3>
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            To empower individuals and institutions through the synthesis of medical expertise and traditional wisdom, fostering a world where health and wealth grow in tandem.
                        </p>
</div>
<div class="p-12 bg-surface-container-low border-r-8 border-tertiary-fixed-dim">
<h3 class="font-headline-xl text-headline-xl text-primary mb-6">Our Vision</h3>
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            To be the global authority on African-centric medical excellence, setting a new standard for holistic health education and institutional leadership.
                        </p>
</div>
</div>
</div>
</section>
<!-- Strategic Partnership -->
<section class="py-24 bg-surface-container-highest">
<div class="container mx-auto px-margin-mobile md:px-margin-desktop text-center">
<span class="font-label-lg text-label-lg text-secondary tracking-widest uppercase mb-4 block">Institutional Synergy</span>
<h2 class="font-headline-xl text-headline-xl text-primary mb-12">The Farawa Partnership</h2>
<div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-surface p-8 md:p-16 rounded-xl shadow-sm border border-outline-variant">
<div class="w-32 h-32 flex-shrink-0 bg-primary-container flex items-center justify-center rounded-lg">
<img alt="Farawa Logo" class="w-20 h-20 object-contain" data-alt="A sophisticated corporate logo for Farawa, featuring minimalist geometric shapes that evoke a sense of structure and growth. The colors are muted gold and deep charcoal, set against a pristine white background. The style is modern, professional, and suggests a strategic business consulting firm with an institutional foundation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsc-TFD3jf7bBLXmAhKn9N8Chn1Uuh9DJ0ng_htHPWLTZ85nbb4yaiuyO7QooAfF-9UAS-iyCUilvIdCr6T0P78ru5G-Vp6YjICOV69JaRGhU7vBjUgu3URzRuxRJU8hQaCyRA7dp-UeqPoB_Ire8eqsLm_b5yjbSswIXW6gLQhpe3LlC6r0TFsLH6w7Lmegyk-ecwAeAKLV69V64XlQq3h3qAIw07r8ffWDzEZLEF1P3DhRZt9l9I1mSiM4lE365BCjH4oexhDNA"/>
</div>
<div class="text-left">
<p class="font-body-lg text-body-lg text-on-surface-variant italic mb-6">
                            "Our partnership with Farawa represents a strategic alignment of vision. Together, we are bridging the gap between clinical excellence and organizational health, ensuring that wisdom is shared at every level of society."
                        </p>
<p class="font-label-lg text-label-lg font-bold text-primary">— Strategic Partnership Memo, 2024</p>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-20 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter bg-surface-container-lowest border-t border-outline-variant">
<div class="md:col-span-5 flex flex-col gap-6">
<h2 class="font-headline-lg text-headline-lg text-primary">Dr. Ayuba's Corner</h2>
<p class="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                A sanctuary for those seeking to blend medical science with ancient wisdom. Better Wisdom, Better Health, Better Wealth.
            </p>
<p class="font-body-sm text-body-sm text-on-surface-variant">© 2024 Dr. Ayuba's Corner. Better Wisdom, Better Health, Better Wealth.</p>
</div>
<div class="md:col-span-2 flex flex-col gap-4">
<h4 class="font-label-lg text-label-lg text-primary font-bold">Quick Links</h4>
<nav class="flex flex-col gap-2">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Sitemap</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Partnerships</a>
</nav>
</div>
<div class="md:col-span-2 flex flex-col gap-4">
<h4 class="font-label-lg text-label-lg text-primary font-bold">Legal</h4>
<nav class="flex flex-col gap-2">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="#">Institutional Credentials</a>
</nav>
</div>
<div class="md:col-span-3 flex flex-col gap-4">
<h4 class="font-label-lg text-label-lg text-primary font-bold">Newsletter</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Subscribe to receive wisdom directly in your inbox.</p>
<div class="flex">
<input class="w-full bg-surface border border-outline-variant px-4 py-2 focus:ring-1 focus:ring-primary outline-none text-body-sm" placeholder="Email address" type="email"/>
<button class="bg-primary text-on-primary px-4 py-2 hover:opacity-90 transition-opacity">
<span class="material-symbols-outlined">send</span>
</button>
</div>
</div>
</footer>
<script>
        // Header scroll behavior
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('py-2', 'shadow-md');
                header.classList.remove('py-4');
            } else {
                header.classList.remove('py-2', 'shadow-md');
                header.classList.add('py-4');
            }
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(section);
        });
    </script>

      ` }} />
    </div>
  );
}
