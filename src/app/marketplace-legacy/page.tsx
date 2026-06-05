import React from 'react';

export const metadata = {
  title: "Institutional Marketplace (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

        body {
            background-color: #f8f9fa; /* Consistent with Style Guidance Level 0 */
            color: #00030f;
            -webkit-font-smoothing: antialiased;
        }
        .grid-12 {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 32px;
        }
        .archival-border {
            border: 1px solid rgba(0, 3, 15, 0.1);
        }
        .product-card:hover {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
            transform: translateY(-2px);
            transition: all 0.3s ease-out;
        }
    

      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar: Execution of JSON instructions -->
<header class="bg-surface dark:bg-inverse-surface border-b border-outline-variant/30 docked full-width top-0 z-50 sticky">
<div class="max-w-[1440px] mx-auto flex justify-between items-center px-margin-desktop h-20">
<div class="flex items-center">
<img alt="Dr. Ayuba's Corner Brand Logo" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg7az5Cvf4Q4CqXuT39FBSPL9FnhpDdO850oMNLQ2XFO-c75Ql6yUiiJosXu0E9aKMjdvSb89R5EjFCvga9KboNNhWCEiVeDXUVPDeeYuWGdwwmJsTPaA3dRkslt4EaDw5tx-NSwwvMl7sxjdWcXo8rrXmcK-pqgSoCrXLRKBiVfimEtAZtfiPZOc4NgyfeUUcyhp_FpNDO21B-pj7aj8ZVN90Mz_VjfgDcgAKnuflXIxwSojnxvWDwIm3Zf4REnX2QQg__iBM8ks">
</div>
<nav class="hidden md:flex gap-8">
<a class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant dark:text-on-surface-variant/70 pb-1 hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Archive</a>
<a class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant dark:text-on-surface-variant/70 pb-1 hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Courses</a>
<a class="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant dark:text-on-surface-variant/70 pb-1 hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Community</a>
<a class="font-label-lg text-label-lg uppercase tracking-wider text-primary dark:text-inverse-primary border-b-2 border-tertiary-fixed-dim pb-1" href="#">IP Marketplace</a>
</nav>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-primary dark:text-inverse-primary scale-95 duration-150">search</button>
<button class="material-symbols-outlined text-primary dark:text-inverse-primary scale-95 duration-150">account_circle</button>
</div>
</div>
</header>
<main class="max-w-[1440px] mx-auto px-margin-desktop pt-unit-2xl pb-unit-2xl">
<!-- Hero Section / Context -->
<section class="mb-unit-2xl grid-12">
<div class="col-span-12 md:col-span-8">
<h1 class="font-display-xl text-display-xl text-primary mb-unit-sm">Intellectual Property Marketplace</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Access elite academic resources, proprietary research reports, and professional tools designed for institutional excellence and scholarly rigor.
                </p>
</div>
<div class="col-span-12 md:col-span-4 flex flex-col justify-end items-end">
<div class="archival-border p-unit-md bg-surface flex flex-col items-end">
<span class="font-label-md text-label-md text-secondary uppercase mb-unit-xs">Marketplace Status</span>
<span class="font-headline-sm text-headline-sm text-primary">Active Repository</span>
</div>
</div>
</section>
<!-- Product Categories: Bento Grid Style -->
<section class="grid-12 mb-unit-2xl">
<!-- Featured: Research Journals -->
<div class="col-span-12 md:col-span-7 archival-border bg-surface-container-lowest p-unit-xl product-card group cursor-pointer relative overflow-hidden">
<div class="relative z-10 h-full flex flex-col">
<span class="font-label-lg text-label-lg text-secondary border-b border-secondary/20 inline-block mb-unit-md self-start">Premium Journals</span>
<h2 class="font-headline-lg text-headline-lg text-primary mb-unit-md">The Institutional Review Quarterly</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-xl max-w-md">Our flagship publication featuring peer-reviewed strategies for digital academic transformation and executive leadership.</p>
<div class="mt-auto flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
<span class="font-label-lg text-label-lg text-primary uppercase">Explore Archive</span>
<span class="material-symbols-outlined text-primary">arrow_forward</span>
</div>
</div>
<div class="absolute -right-20 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity">
<span class="material-symbols-outlined text-[240px]" style="font-variation-settings: 'FILL' 1;">menu_book</span>
</div>
</div>
<!-- Side Item 1: Research Reports -->
<div class="col-span-12 md:col-span-5 archival-border bg-surface-container-lowest p-unit-xl product-card group cursor-pointer border-t-4 border-t-secondary">
<span class="font-label-lg text-label-lg text-secondary uppercase mb-unit-md block">Intelligence</span>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-sm">Digital Excellence Reports</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg">Comprehensive analysis on emerging educational technologies and institutional scalability.</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-headline-sm text-headline-sm text-primary">$499.00</span>
<button class="bg-primary text-on-primary px-unit-lg py-unit-sm font-label-lg text-label-lg">Acquire</button>
</div>
</div>
<!-- Side Item 2: Executive Tools -->
<div class="col-span-12 md:col-span-4 archival-border bg-surface-container-lowest p-unit-lg product-card group cursor-pointer">
<div class="w-12 h-12 bg-primary-container/10 flex items-center justify-center mb-unit-md">
<span class="material-symbols-outlined text-primary">edit_note</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-xs">Executive Notebooks</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-md">Bespoke archival tools for high-level intellectual organization and research management.</p>
<span class="font-label-lg text-label-lg text-primary font-bold">From $85.00</span>
</div>
<!-- Side Item 3: Data Sets -->
<div class="col-span-12 md:col-span-4 archival-border bg-surface-container-lowest p-unit-lg product-card group cursor-pointer">
<div class="w-12 h-12 bg-primary-container/10 flex items-center justify-center mb-unit-md">
<span class="material-symbols-outlined text-primary">database</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-xs">Raw Research Data</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-md">Verified datasets for institutional analysis and comparative academic performance studies.</p>
<span class="font-label-lg text-label-lg text-primary font-bold">Request Access</span>
</div>
<!-- Side Item 4: IP Licensing -->
<div class="col-span-12 md:col-span-4 archival-border bg-surface-container-lowest p-unit-lg product-card group cursor-pointer">
<div class="w-12 h-12 bg-primary-container/10 flex items-center justify-center mb-unit-md">
<span class="material-symbols-outlined text-primary">gavel</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-xs">Framework Licensing</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-md">Legal permission to implement Dr. Ayuba’s proprietary pedagogical frameworks internally.</p>
<span class="font-label-lg text-label-lg text-primary font-bold">Consultation Required</span>
</div>
</section>
<!-- Corporate Bundles Section -->
<section class="bg-primary-container text-on-primary py-unit-2xl px-unit-2xl relative overflow-hidden">
<div class="absolute inset-0 opacity-10 pointer-events-none">
<div class="w-full h-full" style="background-image: radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0); background-size: 40px 40px;"></div>
</div>
<div class="relative z-10 grid-12">
<div class="col-span-12 lg:col-span-5">
<span class="font-label-lg text-label-lg text-tertiary-fixed-dim uppercase tracking-widest mb-unit-md block">Institutional Access</span>
<h2 class="font-display-lg text-display-lg text-white mb-unit-md">Corporate Bundles</h2>
<p class="font-body-lg text-body-lg text-white/80 mb-unit-xl">Empower your entire organization with bulk access to our intellectual property library, tailored research consultations, and white-label rights.</p>
<ul class="space-y-4 mb-unit-xl">
<li class="flex items-center gap-3">
<span class="w-2 h-2 bg-tertiary-fixed-dim rotate-45"></span>
<span class="font-label-lg text-label-lg">Unlimited Multi-User Licensing</span>
</li>
<li class="flex items-center gap-3">
<span class="w-2 h-2 bg-tertiary-fixed-dim rotate-45"></span>
<span class="font-label-lg text-label-lg">Custom Research Monographs</span>
</li>
<li class="flex items-center gap-3">
<span class="w-2 h-2 bg-tertiary-fixed-dim rotate-45"></span>
<span class="font-label-lg text-label-lg">Dedicated Institutional Account Manager</span>
</li>
</ul>
<button class="border border-tertiary-fixed-dim text-tertiary-fixed-dim px-unit-xl py-unit-md font-label-lg text-label-lg hover:bg-tertiary-fixed-dim hover:text-primary transition-all uppercase tracking-widest">
                        Contact Institutional Sales
                    </button>
</div>
<div class="col-span-12 lg:col-span-7 grid grid-cols-2 gap-unit-md mt-unit-xl lg:mt-0">
<div class="bg-white/5 p-unit-lg border border-white/10 backdrop-blur-sm">
<span class="font-display-xl text-display-xl text-tertiary-fixed-dim block mb-2">Tier 1</span>
<h4 class="font-headline-sm text-headline-sm text-white mb-2">Academic Foundation</h4>
<p class="font-body-sm text-body-sm text-white/60">For small faculties and boutique research labs.</p>
</div>
<div class="bg-white/5 p-unit-lg border border-white/10 backdrop-blur-sm">
<span class="font-display-xl text-display-xl text-tertiary-fixed-dim block mb-2">Tier 2</span>
<h4 class="font-headline-sm text-headline-sm text-white mb-2">Executive Enterprise</h4>
<p class="font-body-sm text-body-sm text-white/60">For regional institutions and global consultancies.</p>
</div>
</div>
</div>
</section>
<!-- Product Grid: Minimalist Cards -->
<section class="mt-unit-2xl">
<div class="flex justify-between items-end mb-unit-xl border-b border-outline-variant/20 pb-unit-sm">
<h2 class="font-headline-lg text-headline-lg text-primary">Individual Assets</h2>
<div class="flex gap-4 font-label-md text-label-md text-on-surface-variant uppercase">
<span class="text-primary font-bold border-b-2 border-primary cursor-pointer">Latest Releases</span>
<span class="hover:text-primary cursor-pointer transition-colors">Most Cited</span>
<span class="hover:text-primary cursor-pointer transition-colors">Archives</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<!-- Asset 1 -->
<div class="flex flex-col h-full archival-border p-unit-md bg-white hover:border-primary/40 transition-colors">
<div class="aspect-[3/4] bg-surface-container-low mb-unit-md overflow-hidden relative group">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="A macro photography shot of a high-quality leather-bound research notebook placed on a dark wooden academic desk. The lighting is low-key and dramatic, highlighting the fine texture of the leather and the gold-embossed Dr. Ayuba logo on the cover. The background is softly blurred, suggesting a prestigious library or study room environment with shelves of antique books. The overall aesthetic is one of timeless intellectual pursuit and archival quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNnoULARcGjT5heDqoyvDTY0SUmPVLppEwTMtJw-hMb29_kpnmkGbTX1fZRlcyYE9rdx6C4_IzYKsYLkTtXbFe45J5MlVG7TJwKS_I5QfdRFmgQM1o8uNeLR0Pt904gJ5EUO6ldkMcbc9paBcL-8o_vsdlVpqu4XtHLfno5Kwx74_OFvM8HqFCYJrNwOfhkyHRnuvCGKTz2iJ6EeSyF1wt27dd3Z2122XTk-n6K8nDlB81pj2hjhtdmw_1s5AvchdNiE6rWgaDkTI">
<div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all"></div>
</div>
<span class="font-label-md text-label-md text-on-surface-variant mb-unit-xs uppercase">Series A-104</span>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm flex-grow">The Scholarly Method Notebook</h4>
<div class="pt-unit-md border-t border-outline-variant/10 flex justify-between items-center">
<span class="font-body-md text-body-md font-bold">$120.00</span>
<button class="material-symbols-outlined text-primary hover:bg-primary hover:text-white p-2 rounded-full transition-all">shopping_cart</button>
</div>
</div>
<!-- Asset 2 -->
<div class="flex flex-col h-full archival-border p-unit-md bg-white hover:border-primary/40 transition-colors">
<div class="aspect-[3/4] bg-surface-container-low mb-unit-md overflow-hidden relative group">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="A clean, minimalist presentation of a professional research whitepaper with a heavy cardstock cover. The document is titled 'The Future of Institutional Scalability' in elegant serif typography. It is laid out on a pristine marble surface with a subtle shadow suggesting it is floating slightly. The lighting is crisp and cool, emphasizing a modern light-mode office aesthetic. The colors are strictly professional navy and whites, reflecting a high-end corporate research environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHTKIf2d2OChQ190i2gSLe7VXAXstq3mdtm0WhrKKymHJGZ4QYfBTXEfsgelgjKnRessG_qtmjtn9laJKd5XQPRQvud79sXVTxxAJd9XtnUFQ37PECFD0JCdxLNL-LS3gmUtxNicZSXSfvl1L3ab7m4JGFy0NlyBY4Wb2uxlKyXrmJSrjGIklo0lvj4B1tTeXfRrwNsICAve76zenp41-H5NvFxUSu9Q38HvCGah4fSHxEX5jcXtGm57N-vFpsXCFA4bSXDiS3TY">
<div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all"></div>
</div>
<span class="font-label-md text-label-md text-on-surface-variant mb-unit-xs uppercase">Report Vol. 22</span>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm flex-grow">Faculty Evolution Blueprint</h4>
<div class="pt-unit-md border-t border-outline-variant/10 flex justify-between items-center">
<span class="font-body-md text-body-md font-bold">$245.00</span>
<button class="material-symbols-outlined text-primary hover:bg-primary hover:text-white p-2 rounded-full transition-all">shopping_cart</button>
</div>
</div>
<!-- Asset 3 -->
<div class="flex flex-col h-full archival-border p-unit-md bg-white hover:border-primary/40 transition-colors">
<div class="aspect-[3/4] bg-surface-container-low mb-unit-md overflow-hidden relative group">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="An artistic top-down view of several fountain pens and inkwells arranged neatly on a series of architectural blueprints. The setting is a bright, modern studio with natural light streaming in from large windows. The mood is creative yet disciplined, evoking a sense of high-level planning and intellectual design. The color palette features deep navy blues and sharp, clean whites, consistent with an elite institutional brand identity. Every element is captured in sharp detail, signifying precision and value." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmiL6ArBCkRQw2NPjLNlDJWzTJnE0jgq5nhlp4plSez9R01r1anLOU0MYI9VXDcn6Pk1L-Z_YWWu2coaozJspPgLw0-cgGZjgvdAD48WtvkSvyaIBpSaVaL1U3yjZS9f_S1ADjEJSqWdlkRSYlpTcEi2BIgehukirjtP8MAaNyzo3bjeRO9Um6Q8g9fYmanY571KzQ-Jg5Qdy5yCkJCPnVjbm0YFymzPDFoSCet7DcThFPSGfoOwayed5cYGii7NhT0JpTq5jpCXo">
<div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all"></div>
</div>
<span class="font-label-md text-label-md text-on-surface-variant mb-unit-xs uppercase">Archive Kit 01</span>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm flex-grow">Researcher’s Drafting Kit</h4>
<div class="pt-unit-md border-t border-outline-variant/10 flex justify-between items-center">
<span class="font-body-md text-body-md font-bold">$315.00</span>
<button class="material-symbols-outlined text-primary hover:bg-primary hover:text-white p-2 rounded-full transition-all">shopping_cart</button>
</div>
</div>
<!-- Asset 4 -->
<div class="flex flex-col h-full archival-border p-unit-md bg-white hover:border-primary/40 transition-colors">
<div class="aspect-[3/4] bg-surface-container-low mb-unit-md overflow-hidden relative group">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="A wide-angle interior shot of a sophisticated, modern academic library with tall shelves filled with leather-bound books and integrated minimalist LED lighting. The floor is a polished dark wood that reflects the soft ambient light. In the foreground, a sleek glass table holds a single tablet displaying an institutional dashboard. The scene represents the bridge between classical scholarship and digital intellectual property. The aesthetic is extremely high-end, corporate, and intellectually focused." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjJcjeUuOGLCEA6YBLfzCsm8RHLmwgdTZoSAOCPy8z-oM-856D7khDNTbtkBbxY7jivQqVdgy9iuQ9H2WiqYsfQNxJYlK45FHam0thETFDOFjKbl9MMwFfrSE99Uk1r_ghokhYwXhxWKx0SSO3x_dQMQIgK25bVT8eR508Vae547KmGRs23rUd956PzMahTYhy3O6Ja2-Nbn5Fh3perw1TnEYB9SI4kyWCvXXNk5TPRaN_rzy7qTTixkGFS1rBIbwkBndUaxZBX9Y">
<div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all"></div>
</div>
<span class="font-label-md text-label-md text-on-surface-variant mb-unit-xs uppercase">Access Pass</span>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm flex-grow">Digital Library Annual Pass</h4>
<div class="pt-unit-md border-t border-outline-variant/10 flex justify-between items-center">
<span class="font-body-md text-body-md font-bold">$1,200.00</span>
<button class="material-symbols-outlined text-primary hover:bg-primary hover:text-white p-2 rounded-full transition-all">shopping_cart</button>
</div>
</div>
</div>
</section>
</main>
<!-- Footer: Execution of JSON instructions -->
<footer class="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container w-full py-unit-2xl px-margin-desktop mt-auto border-t border-primary-fixed-variant/10">
<div class="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-unit-xl">
<div>
<span class="font-display-lg text-display-lg text-tertiary-fixed block mb-unit-md">Dr. Ayuba's Corner</span>
<p class="font-body-sm text-body-sm text-on-primary/60 max-w-sm">An Institutional Hub dedicated to Academic Digital Excellence and Intellectual Property stewardship.</p>
</div>
<div class="flex flex-col md:items-end justify-center gap-6">
<nav class="flex flex-wrap gap-x-8 gap-y-2 md:justify-end">
<a class="font-body-sm text-body-sm text-on-primary/60 dark:text-on-primary-container/60 hover:text-tertiary-fixed-dim transition-colors duration-200 opacity-80 hover:opacity-100 hover:underline" href="#">Institutional Terms</a>
<a class="font-body-sm text-body-sm text-on-primary/60 dark:text-on-primary-container/60 hover:text-tertiary-fixed-dim transition-colors duration-200 opacity-80 hover:opacity-100 hover:underline" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary/60 dark:text-on-primary-container/60 hover:text-tertiary-fixed-dim transition-colors duration-200 opacity-80 hover:opacity-100 hover:underline" href="#">Intellectual Property Rights</a>
<a class="font-body-sm text-body-sm text-on-primary/60 dark:text-on-primary-container/60 hover:text-tertiary-fixed-dim transition-colors duration-200 opacity-80 hover:opacity-100 hover:underline" href="#">Research Ethics</a>
</nav>
<p class="font-body-sm text-body-sm text-on-primary/60 dark:text-on-primary-container/60 text-right">
                    © 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Member of the Academic Digital Excellence Initiative.
                </p>
</div>
</div>
</footer>
<script>
        // Micro-interaction for smooth hovering on cards
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = 'rgba(0, 3, 15, 0.4)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = 'rgba(0, 3, 15, 0.1)';
            });
        });

        // Search bar toggle simulation
        const searchBtn = document.querySelector('.material-symbols-outlined:first-of-type');
        searchBtn.addEventListener('click', () => {
            const term = prompt("Enter your research query:");
            if(term) console.log("Searching repository for:", term);
        });
    </script>

      ` }} />
    </>
  );
}
