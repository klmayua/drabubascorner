import React from 'react';

export const metadata = {
  title: "About & Manifesto (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-background text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&amp;display=swap" rel="stylesheet"/>
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
        .editorial-line-height {
            line-height: 1.8;
        }
        .accent-gold {
            color: #a87f0f; /* From on-tertiary-container */
        }
        .border-accent {
            border-color: #f1bf51; /* From tertiary-fixed-dim */
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar -->
<nav class="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline sticky top-0 z-50">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-unit-xl">
<!-- Brand Logo Center-ish/Left -->
<div class="flex items-center gap-unit-md">
<img alt="Dr. Ayuba's Corner" class="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDENLhhxvf-P08Pi6QdE05TwTtFforhOIWSnrnhHjAhYFJ8B_6HUinOZ-ojpFgd8T2C6vaOquhrEJVm5zTB1roSHn-z92BfiekROkey0S_LqQWCrpEHSCNCC3CQCT2otm8jSy566xoZPQKO7z1ZPNweIAuzIMsD6I1Q1jFJHZJGxVpExEkv3FL-2FdjZxXZTtgYebI3Joj6aueNmMcAs0iV84ifQYr98_Mf5rdaUtoMg_COKvU1yvn9AwvT0rbdpQOObUADNodxwG4"/>
</div>
<!-- Navigation Links -->
<div class="hidden md:flex items-center gap-unit-lg font-label-lg text-label-lg">
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer" href="#">Research</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer" href="#">Publications</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer" href="#">Lectures</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer" href="#">Archives</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer" href="#">Consultancy</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer" href="#">Contact</a>
</div>
<!-- Trailing Icons -->
<div class="flex items-center gap-unit-md text-primary dark:text-primary-fixed-dim">
<span class="material-symbols-outlined cursor-pointer transition-all duration-300">search</span>
<span class="material-symbols-outlined cursor-pointer transition-all duration-300">account_circle</span>
</div>
</div>
</nav>
<main class="max-w-[1440px] mx-auto px-margin-desktop pb-unit-2xl">
<!-- Hero Section / Portrait Anchor -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end pt-unit-2xl mb-unit-2xl">
<div class="md:col-span-5 relative group">
<div class="aspect-[0.78] overflow-hidden bg-surface-container border border-primary/10">
<img alt="Portrait of Dr. Ayuba" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCORAmHqjpWvGp9m9SqFMTGo0BINXTw8aZwHCnVT0Xoq4VbxBlj5kZCLCT46SQcHaa28SnaYkRzCVTIWrlPawXtDdfvgU-x-3XUraeYqUYHl01bLiSguM3NxAHdYC0EMHjfr_Ketr0rl3n-IGB2H9VsSbA3jRxNcaXPDIcAubYUXRKr0a5cGrxmxmHqBIe8AOmc5QRTqle6FApalJdz4Ixx7yU5IDliY4SgxtERqG55BMh9ij2Trxgz6V1qBFzq-qjxT0GfJP_097s"/>
</div>
<div class="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-accent transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
</div>
<div class="md:col-span-7 pb-unit-md">
<span class="font-label-lg text-label-lg accent-gold uppercase tracking-[0.2em] mb-unit-sm block">Biography &amp; Vision</span>
<h1 class="font-display-xl text-display-xl text-primary mb-unit-lg">The Architect of Institutional Excellence</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant editorial-line-height max-w-2xl italic">
                    "Integrity is the bedrock upon which the edifice of knowledge is built. Without it, our scholarly pursuits are merely vanity."
                </p>
</div>
</section>
<!-- Academic Foundations & Institutional Mandate (Bento Style) -->
<section class="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-unit-2xl">
<!-- Academic Foundations -->
<div class="bg-surface-container-lowest p-unit-xl border border-primary/5 flex flex-col justify-between">
<div>
<div class="flex items-center gap-unit-sm mb-unit-lg">
<div class="w-12 h-[1px] bg-accent-gold"></div>
<h2 class="font-headline-md text-headline-md accent-gold">Academic Foundations</h2>
</div>
<div class="space-y-unit-md">
<div class="flex gap-unit-md">
<span class="accent-gold font-bold">01.</span>
<p class="font-body-md text-body-md text-on-surface-variant">Three decades of rigorous scholarly inquiry into institutional governance and ethical leadership frameworks.</p>
</div>
<div class="flex gap-unit-md">
<span class="accent-gold font-bold">02.</span>
<p class="font-body-md text-body-md text-on-surface-variant">Author of over 40 peer-reviewed monographs detailing the intersection of traditional values and modern administration.</p>
</div>
<div class="flex gap-unit-md">
<span class="accent-gold font-bold">03.</span>
<p class="font-body-md text-body-md text-on-surface-variant">Chair Emeritus of the International Board for Scholarly Standards, focusing on global archival preservation.</p>
</div>
</div>
</div>
<div class="mt-unit-xl">
<button class="bg-primary text-on-primary px-unit-lg py-unit-sm font-label-lg text-label-lg hover:opacity-90 transition-opacity">View Full Curriculum Vitae</button>
</div>
</div>
<!-- Institutional Mandate -->
<div class="bg-primary text-on-primary p-unit-xl flex flex-col justify-center relative overflow-hidden">
<!-- Subtle Background Texture Pattern -->
<div class="absolute inset-0 opacity-5 pointer-events-none">
<svg height="100%" width="100%"><rect fill="url(#pattern-dots)" height="100%" width="100%"></rect></svg>
<defs>
<pattern height="20" id="pattern-dots" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<circle cx="2" cy="2" fill="white" r="1"></circle>
</pattern>
</defs>
</div>
<h2 class="font-headline-md text-headline-md mb-unit-lg relative z-10">Institutional Mandate</h2>
<p class="font-body-md text-body-md text-primary-fixed-dim editorial-line-height mb-unit-lg relative z-10">
                    Our mandate transcends mere instruction. We are charged with the guardianship of intellectual legacy. We provide the structural integrity required for institutions to flourish in an era of rapid transformation, ensuring that the pillars of meritocracy, transparency, and scholarly rigor remain unyielding.
                </p>
<ul class="space-y-unit-sm relative z-10">
<li class="flex items-center gap-unit-sm">
<span class="w-2 h-2 rotate-45 bg-tertiary-fixed-dim"></span>
<span class="font-label-md text-label-md tracking-wider">ETHICAL GOVERNANCE</span>
</li>
<li class="flex items-center gap-unit-sm">
<span class="w-2 h-2 rotate-45 bg-tertiary-fixed-dim"></span>
<span class="font-label-md text-label-md tracking-wider">CULTURAL PRESERVATION</span>
</li>
<li class="flex items-center gap-unit-sm">
<span class="w-2 h-2 rotate-45 bg-tertiary-fixed-dim"></span>
<span class="font-label-md text-label-md tracking-wider">STRATEGIC EXCELLENCE</span>
</li>
</ul>
</div>
</section>
<!-- The Manifesto (Editorial Style) -->
<section class="max-w-4xl mx-auto py-unit-2xl border-t border-outline-variant">
<div class="text-center mb-unit-xl">
<h2 class="font-display-lg text-display-lg text-primary">The Manifesto</h2>
<div class="w-24 h-1 bg-accent-gold mx-auto mt-unit-sm"></div>
</div>
<article class="font-headline-sm text-headline-sm text-on-surface editorial-line-height space-y-unit-xl italic">
<p class="first-letter:text-7xl first-letter:font-display-lg first-letter:mr-3 first-letter:float-left first-letter:accent-gold">
                    We believe that the future is not a destination we reach, but a structure we build with the stones of our past. 
                    In a world obsessed with the ephemeral, we choose the enduring. We advocate for the reclamation of depth, 
                    the celebration of nuance, and the absolute necessity of institutional character.
                </p>
<p>
                    Scholarly pursuit is not a solitary endeavor; it is a sacred contract between the seeker and the source. 
                    We reject the simplification of complex truths and the commodification of wisdom. Excellence is not a standard 
                    to be met, but a discipline to be lived—every hour, every lecture, every archive opened.
                </p>
<p>
                    The Corner stands as a lighthouse for the intellectually homeless. Here, we do not just store data; we cultivate 
                    discernment. Our mission is to ensure that when history looks back, it finds a record of unwavering commitment 
                    to the highest ideals of human civilization.
                </p>
<div class="pt-unit-xl text-center">
<p class="font-label-lg text-label-lg accent-gold tracking-[0.4em] uppercase">— Dr. Ayuba</p>
</div>
</article>
</section>
</main>
<!-- Footer -->
<footer class="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-fixed">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl flex flex-col items-center gap-unit-lg">
<!-- Brand Logo in Footer -->
<div class="font-display-lg text-display-lg text-tertiary-fixed-dim">
                Dr. Ayuba's Corner
            </div>
<!-- Footer Links -->
<div class="flex flex-wrap justify-center gap-unit-lg font-body-sm text-body-sm">
<a class="text-on-primary-fixed-variant hover:text-on-tertiary-fixed transition-colors" href="#">Academic Integrity</a>
<a class="text-on-primary-fixed-variant hover:text-on-tertiary-fixed transition-colors" href="#">Privacy Policy</a>
<a class="text-on-primary-fixed-variant hover:text-on-tertiary-fixed transition-colors" href="#">Terms of Service</a>
<a class="text-on-primary-fixed-variant hover:text-on-tertiary-fixed transition-colors" href="#">Institutional Access</a>
</div>
<!-- Copyright -->
<p class="font-body-sm text-body-sm text-on-primary-fixed-variant text-center opacity-70">
                © 2024 Dr. Ayuba's Corner. All rights reserved. Institutional integrity and scholarly excellence.
            </p>
</div>
</footer>
<script>
        // Micro-interaction for the portrait image
        const portrait = document.querySelector('img[src="https://lh3.googleusercontent.com/aida-public/AB6AXuCORAmHqjpWvGp9m9SqFMTGo0BINXTw8aZwHCnVT0Xoq4VbxBlj5kZCLCT46SQcHaa28SnaYkRzCVTIWrlPawXtDdfvgU-x-3XUraeYqUYHl01bLiSguM3NxAHdYC0EMHjfr_Ketr0rl3n-IGB2H9VsSbA3jRxNcaXPDIcAubYUXRKr0a5cGrxmxmHqBIe8AOmc5QRTqle6FApalJdz4Ixx7yU5IDliY4SgxtERqG55BMh9ij2Trxgz6V1qBFzq-qjxT0GfJP_097s"]');
        if (portrait) {
            portrait.addEventListener('mouseenter', () => {
                portrait.style.transform = 'scale(1.05)';
            });
            portrait.addEventListener('mouseleave', () => {
                portrait.style.transform = 'scale(1)';
            });
        }

        // Active Navigation Logic
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            // Since this is a static generation, we simulate "Research" as active for this About context
            if (link.textContent === 'Research') { 
                link.className = 'text-primary dark:text-primary-fixed border-b-2 border-on-tertiary-container pb-1 transition-all duration-300';
            }
        });
    </script>

      ` }} />
    </div>
  );
}
