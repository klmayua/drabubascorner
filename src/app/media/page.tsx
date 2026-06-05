import React from 'react';

export const metadata = {
  title: "Media Center & Press Kit (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="font-body-md selection:bg-tertiary-fixed selection:text-on-tertiary-fixed" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
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
                "secondary": "#476729",
                "on-tertiary": "#ffffff",
                "on-surface": "#191c1d",
                "surface-container-high": "#e7e8e9",
                "on-surface-variant": "#44474d",
                "on-secondary": "#ffffff",
                "secondary-container": "#c7efa1",
                "tertiary-container": "#281b00",
                "on-tertiary-fixed-variant": "#5c4300",
                "surface-container-lowest": "#ffffff",
                "secondary-fixed": "#c7efa1",
                "on-secondary-container": "#4c6e2e",
                "on-tertiary-container": "#a87f0f",
                "primary-container": "#0b1d3a",
                "surface-container-low": "#f3f4f5",
                "surface": "#f8f9fa",
                "surface-container-highest": "#e1e3e4",
                "outline": "#75777e",
                "background": "#f8f9fa",
                "on-primary-container": "#7585a8",
                "inverse-on-surface": "#f0f1f2",
                "secondary-fixed-dim": "#acd287",
                "tertiary-fixed": "#ffdf9f",
                "surface-container": "#edeeef",
                "tertiary": "#050300",
                "inverse-surface": "#2e3132",
                "on-tertiary-fixed": "#261a00",
                "on-secondary-fixed-variant": "#304f13",
                "on-background": "#191c1d",
                "primary-fixed": "#d7e2ff",
                "error-container": "#ffdad6",
                "primary-fixed-dim": "#b6c7ec",
                "outline-variant": "#c5c6ce",
                "on-secondary-fixed": "#0d2000",
                "surface-dim": "#d9dadb",
                "on-primary": "#ffffff",
                "error": "#ba1a1a",
                "surface-bright": "#f8f9fa",
                "surface-tint": "#4f5e7f",
                "on-error": "#ffffff",
                "on-primary-fixed": "#091b38",
                "inverse-primary": "#b6c7ec",
                "surface-variant": "#e1e3e4",
                "tertiary-fixed-dim": "#f1bf51",
                "on-error-container": "#93000a",
                "primary": "#00030f"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "gutter": "32px",
                "unit-xl": "48px",
                "unit-md": "16px",
                "unit-sm": "8px",
                "unit-2xl": "80px",
                "container-max": "1440px",
                "unit-xs": "4px",
                "unit-lg": "24px",
                "margin-desktop": "80px"
            },
            "fontFamily": {
                "display-lg": ["Playfair Display"],
                "display-xl": ["Playfair Display"],
                "headline-lg": ["Playfair Display"],
                "headline-md": ["Playfair Display"],
                "headline-sm": ["Playfair Display"],
                "label-md": ["Inter"],
                "label-lg": ["Inter"],
                "body-lg": ["Inter"],
                "body-md": ["Inter"],
                "body-sm": ["Inter"]
            }
          }
        }
      }
    </script>
<style>
        body { background-color: #f8f9fa; color: #00030f; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-shadow {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
        }
        .navy-border { border-color: rgba(0, 3, 15, 0.1); }
        .gold-accent { border-top: 4px solid #f1bf51; }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- Top Navigation Shell -->
<header class="bg-surface sticky top-0 z-50 border-b border-on-primary-container/10">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-20">
<div class="flex items-center">
<span class="font-headline-md text-headline-md text-primary tracking-tighter">DR. AYUBA'S CORNER</span>
</div>
<nav class="hidden md:flex gap-unit-xl">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Research</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Publications</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Lectures</a>
<a class="font-label-lg text-label-lg text-primary border-b-2 border-tertiary-fixed-dim pb-1" href="#">Media Center</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Contact</a>
</nav>
<button class="md:hidden p-unit-sm">
<span class="material-symbols-outlined text-primary">menu</span>
</button>
</div>
</header>
<main>
<!-- Hero Section with Required Image Placeholder -->
<section class="relative w-full h-[60vh] overflow-hidden bg-primary-container">
<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDu1ROjOHmXyQhfgSSMMdEn7SI9rFvnohARqGPNqRn5q1ul68lucmmoEehb5YzJOPT42XMztetVTJpn5JGxfQ7Kg6aIx6W8-AmHf2Uou7X8RBpt4rdf01fVEVMas8C4yS_7_5z8XxM0QgKLvO7lBFwyb5B7u0Op_BitaTLxeZscPOPcHSzNOqTaBbcAJffTyEvxMjJSQdxeqcgSaA3KqZ0lyfsibHYOhkf9k3xSsMrBkhULNNrBli5jf707xVuJggTg0DpIuePVfEw')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
<!-- Requirement: NO TEXT IN HEADER OVER IMAGE -->
</section>
<!-- Intro Header Section -->
<section class="max-w-[1440px] mx-auto px-margin-desktop -mt-24 relative z-10">
<div class="bg-white p-unit-2xl gold-accent editorial-shadow">
<div class="max-w-4xl">
<h1 class="font-display-xl text-display-xl text-primary mb-unit-lg">Media Center &amp; Institutional Assets</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                        Dr. Ayuba’s intellectual contributions serve as a cornerstone for academic and public discourse. This repository provides verified assets, comprehensive impact reporting, and formal request channels for members of the press and educational institutions.
                    </p>
</div>
</div>
</section>
<!-- Press Kit Section -->
<section class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl">
<div class="flex items-center gap-unit-md mb-unit-xl">
<div class="h-px bg-tertiary-fixed-dim flex-grow"></div>
<h2 class="font-headline-lg text-headline-lg text-primary uppercase tracking-widest">Press Kit</h2>
<div class="h-px bg-tertiary-fixed-dim flex-grow"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<!-- Dossier Card -->
<div class="bg-white p-unit-xl border navy-border flex flex-col justify-between hover:bg-surface transition-colors duration-300">
<div>
<div class="flex items-center gap-unit-sm text-tertiary-fixed-dim mb-unit-md">
<span class="material-symbols-outlined" data-weight="fill">verified</span>
<span class="font-label-lg text-label-lg uppercase">Institutional Record</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-md">Full Media Dossier (2024)</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-xl">
                            A comprehensive overview of Dr. Ayuba's career, including a detailed CV, research focus areas, and key academic appointments.
                        </p>
</div>
<a class="inline-flex items-center gap-unit-sm font-label-lg text-label-lg text-primary border border-primary px-unit-lg py-unit-md hover:bg-primary hover:text-on-primary transition-all duration-300 w-fit" href="#">
                        DOWNLOAD PDF <span class="material-symbols-outlined">download</span>
</a>
</div>
<!-- Impact Report Card -->
<div class="bg-white p-unit-xl border navy-border flex flex-col justify-between hover:bg-surface transition-colors duration-300">
<div>
<div class="flex items-center gap-unit-sm text-tertiary-fixed-dim mb-unit-md">
<span class="material-symbols-outlined" data-weight="fill">analytics</span>
<span class="font-label-lg text-label-lg uppercase">Annual Review</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-md">Scholarly Impact Report</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-xl">
                            Analytical breakdown of citation metrics, public lecture reach, and global archival contributions for the current academic year.
                        </p>
</div>
<a class="inline-flex items-center gap-unit-sm font-label-lg text-label-lg text-primary border border-primary px-unit-lg py-unit-md hover:bg-primary hover:text-on-primary transition-all duration-300 w-fit" href="#">
                        VIEW REPORT <span class="material-symbols-outlined">open_in_new</span>
</a>
</div>
</div>
</section>
<!-- Brand Assets Section -->
<section class="bg-primary-container text-on-primary py-unit-2xl">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<h2 class="font-headline-lg text-headline-lg text-tertiary-fixed mb-unit-2xl text-center">Approved Brand Assets</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Asset: Logos -->
<div class="group cursor-pointer">
<div class="aspect-square bg-white/5 border border-white/10 flex items-center justify-center mb-unit-md group-hover:border-tertiary-fixed transition-colors">
<span class="material-symbols-outlined text-[64px] text-tertiary-fixed">architecture</span>
</div>
<div class="flex justify-between items-end">
<div>
<h4 class="font-headline-sm text-headline-sm text-white">Identity Suite</h4>
<p class="font-body-sm text-body-sm text-on-primary-container">Vector &amp; Raster Formats</p>
</div>
<span class="material-symbols-outlined text-tertiary-fixed">download</span>
</div>
</div>
<!-- Asset: Portraits -->
<div class="group cursor-pointer">
<div class="aspect-square bg-white/5 border border-white/10 overflow-hidden mb-unit-md group-hover:border-tertiary-fixed transition-colors">
<img class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" data-alt="A formal black and white professional portrait of a scholarly man in a dark tailored suit, sitting in a mahogany-paneled library. The lighting is dramatic and moody, emphasizing textures of books and fabric. The style is classic and authoritative, evoking institutional prestige and intellectual depth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr-CvIr8MaAX0cdeHuPS-I8Dz5KRNsN5X0RufHzy63g5rrufGOqTVV_zjxX7QzX5LfkBZFqaMVI4e8nJGEvWeSbmGox64RmAglAwEWmjWDiW_-Hci5djuC6hjxim-lyLkLoqsfGn5yCB5TvfSw8nipNAmkhbLaPzt_0HMPrczfaySngluzjhQuBPgJS98jyLPRdY8a_E_A_sOMJwh2D5fnwnBmAsnqnCXtg0sKRVLf_h-nt_tjf0XdPv63qJOOZpu0P76fMeffNAE"/>
</div>
<div class="flex justify-between items-end">
<div>
<h4 class="font-headline-sm text-headline-sm text-white">Press Portraits</h4>
<p class="font-body-sm text-body-sm text-on-primary-container">High-Res Professional Stills</p>
</div>
<span class="material-symbols-outlined text-tertiary-fixed">download</span>
</div>
</div>
<!-- Asset: Institutional Seal -->
<div class="group cursor-pointer">
<div class="aspect-square bg-white/5 border border-white/10 flex items-center justify-center mb-unit-md group-hover:border-tertiary-fixed transition-colors">
<span class="material-symbols-outlined text-[64px] text-tertiary-fixed">shield</span>
</div>
<div class="flex justify-between items-end">
<div>
<h4 class="font-headline-sm text-headline-sm text-white">Official Seals</h4>
<p class="font-body-sm text-body-sm text-on-primary-container">Archival &amp; Web Quality</p>
</div>
<span class="material-symbols-outlined text-tertiary-fixed">download</span>
</div>
</div>
</div>
</div>
</section>
<!-- Recent Media Coverage (Editorial Grid) -->
<section class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl">
<h2 class="font-headline-lg text-headline-lg text-primary mb-unit-xl">Recent Media Coverage</h2>
<div class="grid grid-cols-12 gap-gutter">
<!-- Featured Article -->
<article class="col-span-12 md:col-span-7 group cursor-pointer">
<div class="aspect-[16/9] overflow-hidden mb-unit-lg">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A macro photograph of an antique fountain pen resting on a stack of aged, handwritten scholarly manuscripts. The lighting is warm and golden, highlighting the grain of the paper and the metallic sheen of the pen. The image conveys a sense of history, academic rigor, and the weight of written words in a prestigious setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8zOpibaQ3F2Y5BlzTf6eOLuZfpj_YManlmWLaGrEhesiiclfCdkseN49BMQaU0Z152BJP_HKkXr3E7wQnObrjGSHd368a1xP3f3qPaQTpRS1enhfbI2MdwcOKvSAj-XxWnF0ThQVOaaXin4PAU-XHKJayuvr8aSif2dXu0hGXxVl6pbJbKdudHXcxSqGntW96359qfRAdkSCFi1u9FUhp4DsyAGPJVSx48huqj3HdZhidElq0xHj4tfWaxy7HBt7sA5i_KuniG5Q"/>
</div>
<p class="font-label-lg text-label-lg text-tertiary-fixed-dim uppercase mb-unit-sm">The Global Review • May 2024</p>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-md leading-tight group-hover:underline underline-offset-4 decoration-1">The Ayuba Doctrine: Restructuring Institutional Memory in the Digital Age</h3>
<p class="font-body-md text-body-md text-on-surface-variant">An in-depth feature exploring the intersection of archival ethics and modern data retrieval systems as proposed by Dr. Ayuba in his latest lecture series.</p>
</article>
<!-- Sidebar Articles -->
<div class="col-span-12 md:col-span-5 flex flex-col gap-unit-xl">
<article class="border-b navy-border pb-unit-lg group cursor-pointer">
<p class="font-label-md text-label-md text-on-surface-variant uppercase mb-unit-xs">Academic Times • April 12</p>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm group-hover:text-tertiary-fixed-dim transition-colors">Recipient of the 2024 Heritage Preservation Award</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Honoring three decades of commitment to preserving vulnerable historical records.</p>
</article>
<article class="border-b navy-border pb-unit-lg group cursor-pointer">
<p class="font-label-md text-label-md text-on-surface-variant uppercase mb-unit-xs">Policy Outlook • March 28</p>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm group-hover:text-tertiary-fixed-dim transition-colors">Expert Commentary: The Future of Public Research Funding</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Dr. Ayuba weighs in on the evolving landscape of state-sponsored intellectual development.</p>
</article>
<article class="group cursor-pointer">
<p class="font-label-md text-label-md text-on-surface-variant uppercase mb-unit-xs">Cultural Digest • February 05</p>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm group-hover:text-tertiary-fixed-dim transition-colors">Archival Discovery: The Lost Manuscripts of the Nile Valley</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">A first-hand account of the recent collaborative discovery led by the Institutional Research team.</p>
</article>
</div>
</div>
</section>
<!-- Interview Request Form -->
<section class="bg-surface-container-low py-unit-2xl">
<div class="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-unit-2xl items-start">
<div>
<h2 class="font-headline-lg text-headline-lg text-primary mb-unit-lg">Request an Appearance</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-unit-xl">
                        For scholarly appearances, keynote lectures, or media interviews, please submit a formal request. Due to the volume of inquiries, we prioritize engagements that align with current research mandates and institutional goals.
                    </p>
<div class="space-y-unit-md">
<div class="flex items-start gap-unit-md">
<span class="material-symbols-outlined text-tertiary-fixed-dim">schedule</span>
<div>
<p class="font-label-lg text-label-lg text-primary">Response Time</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Formal inquiries are typically addressed within 3-5 business days.</p>
</div>
</div>
<div class="flex items-start gap-unit-md">
<span class="material-symbols-outlined text-tertiary-fixed-dim">mail</span>
<div>
<p class="font-label-lg text-label-lg text-primary">Direct Press Contact</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">press@dr-ayuba-corner.edu</p>
</div>
</div>
</div>
</div>
<div class="bg-white p-unit-xl editorial-shadow">
<form class="space-y-unit-lg">
<div class="grid grid-cols-2 gap-unit-md">
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary block">FULL NAME</label>
<input class="w-full bg-surface border navy-border focus:border-tertiary-fixed-dim focus:ring-0 px-unit-md py-unit-sm font-body-md" placeholder="Johnathan Smith" type="text"/>
</div>
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary block">ORGANIZATION</label>
<input class="w-full bg-surface border navy-border focus:border-tertiary-fixed-dim focus:ring-0 px-unit-md py-unit-sm font-body-md" placeholder="BBC News / Oxford University" type="text"/>
</div>
</div>
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary block">EMAIL ADDRESS</label>
<input class="w-full bg-surface border navy-border focus:border-tertiary-fixed-dim focus:ring-0 px-unit-md py-unit-sm font-body-md" placeholder="jsmith@organization.com" type="email"/>
</div>
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary block">NATURE OF REQUEST</label>
<select class="w-full bg-surface border navy-border focus:border-tertiary-fixed-dim focus:ring-0 px-unit-md py-unit-sm font-body-md">
<option>Scholarly Interview</option>
<option>Keynote / Lecture Invitation</option>
<option>Media Appearance (Broadcast/Print)</option>
<option>Consultancy Inquiry</option>
</select>
</div>
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary block">PROPOSAL SUMMARY</label>
<textarea class="w-full bg-surface border navy-border focus:border-tertiary-fixed-dim focus:ring-0 px-unit-md py-unit-sm font-body-md" placeholder="Please provide a brief overview of the proposed engagement..." rows="4"></textarea>
</div>
<button class="w-full bg-primary text-on-primary py-unit-md font-label-lg text-label-lg tracking-widest uppercase hover:bg-tertiary-fixed-dim hover:text-primary transition-colors duration-300" type="submit">Submit Formal Request</button>
</form>
</div>
</div>
</section>
</main>
<!-- Footer Shell -->
<footer class="bg-primary-container text-on-primary-container py-unit-2xl border-t-4 border-tertiary-fixed-dim">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center">
<div class="mb-unit-lg md:mb-0 text-center md:text-left">
<span class="font-headline-md text-headline-md text-on-primary-container block mb-unit-sm">DR. AYUBA'S CORNER</span>
<p class="font-body-sm text-body-sm max-w-sm">© 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Excellence in scholarly research and historical preservation.</p>
</div>
<div class="flex gap-unit-xl">
<a class="font-body-sm text-body-sm text-on-primary-container/80 hover:text-tertiary-fixed transition-colors" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary-container/80 hover:text-tertiary-fixed transition-colors" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm text-on-primary-container/80 hover:text-tertiary-fixed transition-colors" href="#">Institutional Repository</a>
<a class="font-body-sm text-body-sm text-on-primary-container/80 hover:text-tertiary-fixed transition-colors" href="#">Staff Directory</a>
</div>
</div>
</footer>
<script>
        // Smooth reveal interaction for cards
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('section > div > div').forEach(el => {
                el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
                observer.observe(el);
            });
        });
    </script>

      ` }} />
    </div>
  );
}
