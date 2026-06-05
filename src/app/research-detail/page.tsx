import React from 'react';

export const metadata = {
  title: "Research Paper Detail (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-surface text-on-surface font-body-md overflow-x-hidden" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom institutional scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f8f9fa; }
        ::-webkit-scrollbar-thumb { background: #d7e2ff; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #7585a8; }
        
        body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .drop-cap::first-letter {
            float: left;
            font-size: 4rem;
            line-height: 0.8;
            padding-top: 4px;
            padding-right: 8px;
            padding-left: 3px;
            font-family: 'Playfair Display', serif;
            color: #0b1d3a;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- Top Navigation Bar (Logo Centric) -->
<header class="w-full top-0 sticky z-50 bg-surface border-b border-outline-variant">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-20">
<div class="flex items-center">
<img alt="Dr. Ayuba's Corner Institutional Logo" class="h-12 object-contain filter contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6y5W2xGOv8fkD37td7IkRAowmLGLnWpQ6hqUYjBsyx0Z7qTmJTCk3JGtz7ehmt2J66vxgHHUFWaEIojc0RUUM-vLB7Mq02fybYShY4-2Ts7VIKS8gj1rZIwVXcJUCxPVuISPT4oS7DiZYJ9MsfSF6uCXr9I4_FFLI9lxpoB-5Z3K4zDys_IMsL154LD7VOZs7e06HfSU0RGU127hmV61AQkGLgB4H6Fe2MxXQkZHoFkNEuULybCrwiUBSIc-Pql6oTqiGQ0SNU5E"/>
</div>
<nav class="hidden md:flex gap-unit-lg items-center">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Articles</a>
<a class="font-label-lg text-label-lg text-primary border-b-2 border-secondary font-bold pb-1" href="#">Research</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Videos</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Courses</a>
<div class="h-6 w-px bg-outline-variant mx-2"></div>
<button class="font-label-lg text-label-lg text-on-primary bg-primary px-unit-lg py-2 rounded shadow-sm hover:bg-primary-container transition-all active:scale-95">
                    Sign In
                </button>
</nav>
<button class="md:hidden text-primary">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<!-- Main Content Canvas -->
<main class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl grid grid-cols-12 gap-gutter">
<!-- Document Content Area (Left 8 Columns) -->
<article class="col-span-12 lg:col-span-8 flex flex-col gap-unit-xl">
<!-- Breadcrumbs & Meta -->
<div class="flex flex-col gap-unit-sm">
<nav class="flex items-center gap-2 text-on-surface-variant">
<span class="font-label-md text-label-md uppercase tracking-widest">Resource Library</span>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<span class="font-label-md text-label-md uppercase tracking-widest">Medical Research</span>
</nav>
<h1 class="font-display-lg text-display-lg text-primary leading-tight mt-unit-sm">
                    Neurological Impetus: Structural Analysis of Cognitive Resilience in Advanced Pedagogy
                </h1>
<div class="flex flex-wrap items-center gap-unit-md mt-unit-md text-on-surface-variant">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]">calendar_today</span>
<span class="font-label-lg text-label-lg">Published: Oct 24, 2024</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]">verified</span>
<span class="font-label-lg text-label-lg text-secondary">Peer Reviewed</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]">timer</span>
<span class="font-label-lg text-label-lg">18 min read</span>
</div>
</div>
</div>
<!-- Citation Metadata Box -->
<div class="p-unit-lg bg-surface-container border border-outline-variant flex flex-col gap-unit-sm">
<div class="flex justify-between items-start">
<h3 class="font-label-lg text-label-lg text-primary uppercase tracking-widest">Digital Object Identifier (DOI)</h3>
<button class="text-secondary hover:underline font-label-md flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">content_copy</span> Copy Citation
                    </button>
</div>
<p class="font-body-sm text-body-sm font-mono text-on-surface-variant">https://doi.org/10.1105/dr_ayuba.pedagogy.2024.08821</p>
<div class="grid grid-cols-3 gap-unit-md mt-unit-sm border-t border-outline-variant pt-unit-sm">
<div>
<p class="text-[10px] font-bold text-on-surface-variant uppercase">Journal</p>
<p class="font-body-sm text-body-sm font-semibold">Institutional Review Vol. 12</p>
</div>
<div>
<p class="text-[10px] font-bold text-on-surface-variant uppercase">Citations</p>
<p class="font-body-sm text-body-sm font-semibold">412 Global Citations</p>
</div>
<div>
<p class="text-[10px] font-bold text-on-surface-variant uppercase">License</p>
<p class="font-body-sm text-body-sm font-semibold">CC BY-NC 4.0</p>
</div>
</div>
</div>
<!-- Abstract Section -->
<section class="flex flex-col gap-unit-md">
<h2 class="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
                    Abstract
                </h2>
<div class="font-body-lg text-body-lg text-on-surface leading-relaxed drop-cap italic text-on-surface-variant border-l-4 border-secondary pl-unit-lg">
                    This comprehensive longitudinal study examines the correlation between structural neurological adaptations and high-impact pedagogical interventions. By synthesizing primary clinical data with institutional academic performance metrics, the research posits a new framework for cognitive resilience in adult learners. Our findings indicate that specific environmental stressors, when mitigated by structured intellectual rigor, contribute to increased gray matter density in the prefrontal cortex.
                </div>
</section>
<!-- Main Body -->
<section class="font-body-md text-body-md text-on-surface flex flex-col gap-unit-lg leading-[1.8]">
<h3 class="font-headline-sm text-headline-sm text-primary mt-unit-md">1. Methodology and Data Integrity</h3>
<p>
                    The research utilized a double-blind institutional protocol involving 4,000 subjects over a three-year fiscal period. We employed fMRI imaging techniques to monitor metabolic changes during high-intensity cognitive tasks. The stability of our data relies on the stringent control of external variables, including prior educational attainment and socio-economic positioning.
                </p>
<!-- Callout Quote -->
<blockquote class="my-unit-lg p-unit-xl border-y border-outline-variant text-center">
<p class="font-display-xl text-headline-md text-primary italic">"The intersection of clinical neurobiology and academic rigor represents the final frontier of institutional progress."</p>
<cite class="mt-4 block font-label-lg text-label-lg text-secondary uppercase tracking-widest">— Annual Research Symposium Keynote, 2024</cite>
</blockquote>
<p>
                    As illustrated in the subsequent sections, the data suggests that institutional frameworks play a secondary yet vital role in the manifestation of neuroplasticity. We have observed a 14% increase in recall capability among participants who engaged with the "Dr. Ayuba Pedagogical Pathway" compared to the control group utilizing traditional archival methods.
                </p>
<h3 class="font-headline-sm text-headline-sm text-primary mt-unit-md">2. Preliminary Conclusions</h3>
<p>
                    While further analysis is required to determine the permanence of these neurological shifts, the immediate implications for curriculum design are profound. We recommend an immediate pivot toward 'Active Recall' structures within all institutional graduate programs to leverage these findings.
                </p>
</section>
<!-- Download Action -->
<div class="mt-unit-xl p-unit-2xl bg-primary-container text-on-primary-container rounded-lg flex flex-col md:flex-row justify-between items-center gap-unit-lg">
<div class="flex flex-col gap-1">
<h4 class="font-headline-sm text-headline-sm text-white">Unlock the Full 84-Page Report</h4>
<p class="opacity-80">Includes detailed data tables, raw fMRI scans, and faculty commentary.</p>
</div>
<button class="bg-secondary text-white px-unit-xl py-unit-md font-label-lg text-label-lg flex items-center gap-2 hover:bg-secondary-fixed-dim transition-colors group">
<span class="material-symbols-outlined group-hover:animate-bounce">download</span>
                    DOWNLOAD FULL REPORT (PDF, 14.2MB)
                </button>
</div>
</article>
<!-- Sidebar (Right 4 Columns) -->
<aside class="col-span-12 lg:col-span-4 flex flex-col gap-unit-xl">
<!-- Author Profile Card -->
<div class="bg-white border border-outline-variant p-unit-lg flex flex-col gap-unit-md">
<div class="flex items-center gap-unit-md">
<div class="w-24 h-24 rounded-full overflow-hidden border-2 border-primary-fixed shrink-0">
<img alt="Portrait of Dr. Ayuba, lead author and institutional researcher" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWdRDhko9hyUAZNk4c7O-E9WtJAliIUlhSA5I9aRmcAybhGjauwzoWVQZpb2QJ9P49y7PCUb8ibZD0exXBLoB5K8EgsApEsBy9mFVL-16cSmUsbUESDZfwnkRorxvBwLkaKw5CvZ-bwukU_9lwoYytHihGwgxNrIfIT4tAhhMbPGY6nwFZmyPwilD03JaEKWzT14UkKzfxKbeFz-cU4Fnb71tXlNQZwIQiL5JqrUAq5UuZXOmBuK8eMoL3_5RJTqQfLXNsTqW2xcQ"/>
</div>
<div>
<h4 class="font-headline-sm text-[22px] text-primary">Dr. Ayuba</h4>
<p class="font-label-md text-label-md text-secondary uppercase">Lead Principal Investigator</p>
</div>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Senior Research Fellow with over 20 years of experience in cognitive neurobiology and institutional pedagogy. Dr. Ayuba's Corner serves as a repository for his seminal work on structural intellectual development.
                </p>
<div class="flex gap-2">
<button class="flex-1 border border-primary text-primary py-2 text-label-md hover:bg-surface-container transition-all">Follow Research</button>
<button class="w-10 h-10 border border-primary text-primary flex items-center justify-center hover:bg-surface-container"><span class="material-symbols-outlined text-[18px]">mail</span></button>
</div>
</div>
<!-- Related Research -->
<div class="flex flex-col gap-unit-md">
<h4 class="font-label-lg text-label-lg text-primary border-b border-outline-variant pb-2 uppercase tracking-widest flex items-center justify-between">
                    Related Research
                    <span class="material-symbols-outlined text-[18px]">library_books</span>
</h4>
<div class="flex flex-col gap-unit-md">
<a class="group flex flex-col gap-1" href="#">
<p class="font-label-md text-label-md text-secondary uppercase">June 2024</p>
<h5 class="font-body-md font-bold text-primary group-hover:text-secondary transition-colors">The Physics of Memory: Waveform Analysis in Adult Learning</h5>
<p class="text-xs text-on-surface-variant line-clamp-2">An exploration into the bio-electrical signatures of long-term memory formation during sleep cycles.</p>
</a>
<a class="group flex flex-col gap-1" href="#">
<p class="font-label-md text-label-md text-secondary uppercase">April 2024</p>
<h5 class="font-body-md font-bold text-primary group-hover:text-secondary transition-colors">Institutional Bias in Clinical Academic Settings</h5>
<p class="text-xs text-on-surface-variant line-clamp-2">Quantifying the impact of systemic structures on individual research outcomes in modern faculties.</p>
</a>
<a class="group flex flex-col gap-1" href="#">
<p class="font-label-md text-label-md text-secondary uppercase">Jan 2024</p>
<h5 class="font-body-md font-bold text-primary group-hover:text-secondary transition-colors">Pedagogical Frameworks v3.0</h5>
<p class="text-xs text-on-surface-variant line-clamp-2">The updated baseline for all Dr. Ayuba's Corner curriculum development projects.</p>
</a>
</div>
</div>
<!-- Institutional Citations (Flat List) -->
<div class="p-unit-lg bg-surface-container-high">
<h4 class="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-unit-md">Institutional Citations</h4>
<ul class="flex flex-col gap-unit-sm">
<li class="flex items-start gap-2">
<span class="text-secondary mt-1 material-symbols-outlined text-[14px]">diamond</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Oxford Academy of Neurobiology (2024)</p>
</li>
<li class="flex items-start gap-2">
<span class="text-secondary mt-1 material-symbols-outlined text-[14px]">diamond</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Global Pedagogy Journal (Issue 44)</p>
</li>
<li class="flex items-start gap-2">
<span class="text-secondary mt-1 material-symbols-outlined text-[14px]">diamond</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">The Lancet: Education Supplement</p>
</li>
<li class="flex items-start gap-2">
<span class="text-secondary mt-1 material-symbols-outlined text-[14px]">diamond</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">Harvard Institutional Review</p>
</li>
</ul>
<button class="mt-unit-md w-full py-2 text-label-md font-bold text-on-primary-fixed hover:underline text-center">View All 412 Citations</button>
</div>
<!-- Sticky Tags/Subjects -->
<div class="sticky top-24 pt-4 border-t border-outline-variant">
<h4 class="font-label-md text-label-md text-on-surface-variant uppercase mb-unit-sm">Tagged Subjects</h4>
<div class="flex flex-wrap gap-2">
<span class="px-2 py-1 bg-white border border-outline-variant text-[10px] font-bold uppercase text-on-surface-variant">Neuroplasticity</span>
<span class="px-2 py-1 bg-white border border-outline-variant text-[10px] font-bold uppercase text-on-surface-variant">Longitudinal Study</span>
<span class="px-2 py-1 bg-white border border-outline-variant text-[10px] font-bold uppercase text-on-surface-variant">Pedagogy</span>
<span class="px-2 py-1 bg-white border border-outline-variant text-[10px] font-bold uppercase text-on-surface-variant">Cognition</span>
</div>
</div>
</aside>
</main>
<!-- Footer -->
<footer class="w-full mt-auto bg-primary-container dark:bg-tertiary-container">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div class="col-span-1 md:col-span-1 flex flex-col gap-unit-md">
<img alt="Dr. Ayuba's Corner Footer Logo" class="h-10 w-fit invert brightness-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6y5W2xGOv8fkD37td7IkRAowmLGLnWpQ6hqUYjBsyx0Z7qTmJTCk3JGtz7ehmt2J66vxgHHUFWaEIojc0RUUM-vLB7Mq02fybYShY4-2Ts7VIKS8gj1rZIwVXcJUCxPVuISPT4oS7DiZYJ9MsfSF6uCXr9I4_FFLI9lxpoB-5Z3K4zDys_IMsL154LD7VOZs7e06HfSU0RGU127hmV61AQkGLgB4H6Fe2MxXQkZHoFkNEuULybCrwiUBSIc-Pql6oTqiGQ0SNU5E"/>
<p class="text-body-sm text-on-primary-container opacity-80 leading-relaxed">
                    Advancing intellectual boundaries through clinical research and pedagogical excellence. An archival institution dedicated to the preservation of knowledge.
                </p>
</div>
<div class="flex flex-col gap-4">
<h5 class="text-label-lg font-bold text-white uppercase tracking-widest">Research</h5>
<nav class="flex flex-col gap-2">
<a class="text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Latest Articles</a>
<a class="text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Archive Search</a>
<a class="text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Institutional Citations</a>
<a class="text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Faculty Directory</a>
</nav>
</div>
<div class="flex flex-col gap-4">
<h5 class="text-label-lg font-bold text-white uppercase tracking-widest">Governance</h5>
<nav class="flex flex-col gap-2">
<a class="text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Privacy Policy</a>
<a class="text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Terms of Service</a>
<a class="text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Institutional Research</a>
<a class="text-body-sm text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Sitemap</a>
</nav>
</div>
<div class="flex flex-col gap-4">
<h5 class="text-label-lg font-bold text-white uppercase tracking-widest">Connect</h5>
<p class="text-body-sm text-on-primary-container opacity-80">Join our newsletter for weekly research updates and institutional insights.</p>
<div class="flex">
<input class="bg-primary/20 border-primary-fixed text-white px-4 py-2 w-full text-sm focus:ring-secondary focus:border-secondary" placeholder="Email Address" type="email"/>
<button class="bg-secondary text-white px-4 py-2"><span class="material-symbols-outlined">send</span></button>
</div>
</div>
</div>
<div class="max-w-[1440px] mx-auto px-margin-desktop py-8 border-t border-outline-variant/20 flex justify-between items-center text-on-primary-container opacity-60">
<p class="text-body-sm">© 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.</p>
<div class="flex gap-4">
<span class="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed">share</span>
<span class="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed">print</span>
<span class="material-symbols-outlined cursor-pointer hover:text-tertiary-fixed">bookmark</span>
</div>
</div>
</footer>
<!-- Interactive Layer: Reading Progress Bar -->
<div class="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none" id="progress-container">
<div class="h-full bg-secondary transition-all duration-150 ease-out" id="progress-bar" style="width: 0%"></div>
</div>
<script>
        // Update reading progress bar
        window.onscroll = function() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            document.getElementById("progress-bar").style.width = scrolled + "%";
        };

        // Subtle micro-interaction for citation copy
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', function() {
                if(this.textContent.includes('Copy Citation')) {
                    const originalText = this.innerHTML;
                    this.innerHTML = '<span class="material-symbols-outlined text-[16px]">check</span> Copied!';
                    this.classList.add('text-secondary-fixed-dim');
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.classList.remove('text-secondary-fixed-dim');
                    }, 2000);
                }
            });
        });
    </script>

      ` }} />
    </div>
  );
}
