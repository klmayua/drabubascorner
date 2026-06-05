import React from 'react';

export const metadata = {
  title: "Editorial Article Hub (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .archival-border {
            border: 1px solid rgba(0, 3, 15, 0.1);
        }
        .editorial-accent {
            border-top: 4px solid #476729;
        }
    

      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- Top Navigation Bar -->
<nav class="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline sticky top-0 z-50">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-unit-xl">
<!-- Brand Logo (Image 6 Only, as per request) -->
<div class="flex items-center">
<img alt="Dr. Ayuba's Corner Brand Identity" class="h-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDENLhhxvf-P08Pi6QdE05TwTtFforhOIWSnrnhHjAhYFJ8B_6HUinOZ-ojpFgd8T2C6vaOquhrEJVm5zTB1roSHn-z92BfiekROkey0S_LqQWCrpEHSCNCC3CQCT2otm8jSy566xoZPQKO7z1ZPNweIAuzIMsD6I1Q1jFJHZJGxVpExEkv3FL-2FdjZxXZTtgYebI3Joj6aueNmMcAs0iV84ifQYr98_Mf5rdaUtoMg_COKvU1yvn9AwvT0rbdpQOObUADNodxwG4"/>
</div>
<!-- Navigation Links -->
<div class="hidden md:flex items-center space-x-unit-lg">
<a class="font-label-lg text-label-lg text-primary dark:text-primary-fixed border-b-2 border-on-tertiary-container pb-1 hover:text-tertiary-fixed-dim transition-all duration-300" href="#">Research</a>
<a class="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary-fixed-dim transition-all duration-300" href="#">Publications</a>
<a class="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary-fixed-dim transition-all duration-300" href="#">Lectures</a>
<a class="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary-fixed-dim transition-all duration-300" href="#">Archives</a>
<a class="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary-fixed-dim transition-all duration-300" href="#">Consultancy</a>
<a class="font-label-lg text-label-lg text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary-fixed-dim transition-all duration-300" href="#">Contact</a>
</div>
<!-- Actions -->
<div class="flex items-center gap-unit-md">
<span class="material-symbols-outlined text-primary cursor-pointer hover:text-on-tertiary-container transition-colors">search</span>
<span class="material-symbols-outlined text-primary cursor-pointer hover:text-on-tertiary-container transition-colors">account_circle</span>
</div>
</div>
</nav>
<main class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl">
<!-- Hero Section: Dissertation of the Week -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-unit-2xl">
<div class="lg:col-span-8 group cursor-pointer relative overflow-hidden bg-surface-container-lowest archival-border p-unit-lg transition-all duration-500 hover:shadow-xl">
<div class="relative h-[500px] mb-unit-lg overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A high-contrast, professional close-up of a vintage leather-bound manuscript resting on a dark mahogany academic desk. The lighting is dramatic and directional, highlighting the aged texture of the paper and the intricate gold-leaf embossing on the cover. The background consists of a blurred wall of old books in a prestigious private library, evoking an atmosphere of deep scholarly research and historical significance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-bidL_fpTwIq3Fy5iP_nauJxd1DChtbI658HG1on4XzhAvUaSf8jl1O_0JRDQQ2LOQdOLloQVqdXDWM6aTCm7HSN6b2v-EhquJBZc2JIyvEshtKkzI3S_b7bMEp52l56FDIz8ngW-Y6MB0-e9bnKchjf3tdTQQ7pjWuw9eaCd0d87IjP7FfxYwfOo8pWB8l5Nl2UiWQAJBclGn-dAW-F1jEdnTe-fgIFUYAgZhLKcF6T1YpEqqBiMgRfdteOpZgmfh5ImPOaFYLw"/>
<div class="absolute top-unit-md left-unit-md bg-primary text-on-primary px-unit-md py-unit-xs font-label-lg text-label-lg tracking-widest">DISSERTATION OF THE WEEK</div>
</div>
<div class="space-y-unit-sm">
<div class="flex items-center gap-unit-sm text-secondary font-label-md text-label-md uppercase tracking-widest">
<span>Leadership</span>
<span class="w-1 h-1 bg-on-tertiary-container rounded-full"></span>
<span>May 24, 2024</span>
</div>
<h1 class="font-display-lg text-display-lg text-primary leading-tight hover:text-on-tertiary-container transition-colors">The Architecture of Sovereign Influence: Policy and Pedagogy in 20th Century Governance</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">An exhaustive analysis of the structural mechanisms that define institutional authority, exploring the delicate balance between bureaucratic stability and radical leadership innovation.</p>
</div>
</div>
<!-- Trending Sidebar -->
<aside class="lg:col-span-4 space-y-unit-lg">
<div class="border-b-2 border-primary pb-unit-xs mb-unit-md">
<h2 class="font-label-lg text-label-lg text-primary uppercase tracking-widest">Trending Research</h2>
</div>
<div class="space-y-unit-xl">
<!-- Trending Item 1 -->
<div class="flex flex-col gap-unit-xs group cursor-pointer">
<span class="text-on-tertiary-container font-label-lg text-label-lg">01.</span>
<h3 class="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors leading-snug">Wealth Creation Through Regenerative Agricultural Systems</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Exploring the fiscal impact of sustainable soil management.</p>
</div>
<!-- Trending Item 2 -->
<div class="flex flex-col gap-unit-xs group cursor-pointer">
<span class="text-on-tertiary-container font-label-lg text-label-lg">02.</span>
<h3 class="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors leading-snug">The Vitality Coefficient: Neurological Resilience in Executive Environments</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Defining the metrics of mental endurance for modern leaders.</p>
</div>
<!-- Trending Item 3 -->
<div class="flex flex-col gap-unit-xs group cursor-pointer">
<span class="text-on-tertiary-container font-label-lg text-label-lg">03.</span>
<h3 class="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors leading-snug">Archival Integrity in the Age of Digital Decentralization</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">A case study on blockchain applications for scholarly records.</p>
</div>
</div>
</aside>
</section>
<!-- Category Grids -->
<div class="space-y-unit-2xl">
<!-- Category: Leadership -->
<section>
<div class="flex justify-between items-end mb-unit-lg border-b border-outline-variant pb-unit-sm">
<h2 class="font-headline-md text-headline-md text-primary">Leadership &amp; Governance</h2>
<a class="font-label-lg text-label-lg text-on-tertiary-container hover:underline" href="#">View Section</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- Article 1 -->
<div class="editorial-accent archival-border bg-white p-unit-md group cursor-pointer">
<div class="h-64 mb-unit-md overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A wide-angle, cinematic photograph of a contemporary, high-end corporate boardroom with floor-to-ceiling windows overlooking a misty, blue-toned city skyline at dawn. The interior is minimal, featuring a long, polished obsidian table and ergonomic charcoal chairs. The lighting is soft and professional, emphasizing a mood of elite strategy and calm decisiveness within a prestigious institutional setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApf5Um7Tu5AjSr3ACOfurD71gYBTZZJmfBW2eYigMEEmC41LsMIU-Kx-FDBXvnSPUqHCER3LrKlUPy1KwrfDIufPZK5a5R1jLYqPCg_BDXqFTlzS2TTFy45WOW9GtVltIql7oRhUoPpNXbiakY46dLdQoKy3-vpZz1aO0GJ_Q-wLz6329xmjlqBKPEInJuHe0gdnmzngYDhw2HaPbd2wPnrFlV2fOlrrQ9TPjfwQiJgn4rnmUhWrXC6aW9-5-sRzErE5A6gW15fMI"/>
</div>
<h3 class="font-headline-sm text-headline-sm mb-unit-sm group-hover:text-on-tertiary-container transition-colors">Ethical Paradigms in Autonomous Leadership</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">Examining the moral frameworks required as algorithmic systems begin to influence high-level institutional decision-making.</p>
</div>
<!-- Article 2 -->
<div class="editorial-accent archival-border bg-white p-unit-md group cursor-pointer">
<div class="h-64 mb-unit-md overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A portrait-style close-up of an individual in a sharp, tailored navy wool suit adjusting a gold cufflink. The focus is sharp on the textile texture and the gleam of the metal, while the background remains a soft, professional blur of an upscale lobby. The aesthetic is clean, sophisticated, and evokes themes of power, precision, and executive excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFo8E1qIdWkLPEe5vY6dRAAbr6QhBqpirkHdgdv-_QRc0-Cme5v7sDrWre2wSpRFmhuVAnXRa7cGLWOukPI9dvO1SIqrbrnMBV3XJKgnCNtWh1id8-8K-I3ejDjvKaiejkmxJAL5I3afzKU20iBb1tsT3J37M0CTQwaBxWp-izbEfWGmXWbp8pWXvT1BtFPWpF7LXQhDwhXMfEE8YrswZbHnereG6Sr-ioeex0c9YxCH4ZIvHBTHHVWO9IndkWk4gEw7SQ1eqVgnA"/>
</div>
<h3 class="font-headline-sm text-headline-sm mb-unit-sm group-hover:text-on-tertiary-container transition-colors">The Silent Executive: Non-Verbal Power Dynamics</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">A behavioral study on the impact of presence and environmental orchestration in international diplomatic negotiations.</p>
</div>
<!-- Article 3 -->
<div class="editorial-accent archival-border bg-white p-unit-md group cursor-pointer">
<div class="h-64 mb-unit-md overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A detailed, macro photograph of a high-quality fountain pen tip resting on a thick, cream-colored cotton paper. A single drop of deep navy ink is just beginning to spread across the fibers. The lighting is crisp and bright, highlighting the craftsmanship of the pen and the archival quality of the paper, representing scholarly output and intellectual rigor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl4fpkea7COq1bfytNKNmoakKnGvnMTrMaf4hNNM_QLpVBKxYW0p98XfUIJzsdP6dE1GShuqEcnYQ4vb9C-1AOzhRJNSWZVGwSBcohwkVrxkwvp_YqrTJES-_M75VzpPjJPLfovXChpEekJvYgqM3tIWa4bDPbsc33PtvE6yVk1ux1R9n6h4rTentSQpzB3Yu3nRG-9nq6s8xvl9qLqTfW2UHMFSENrVpDDS1n9bLaJH7Q_kkyxMCi5D06ApehLpTr426vdUzjZyo"/>
</div>
<h3 class="font-headline-sm text-headline-sm mb-unit-sm group-hover:text-on-tertiary-container transition-colors">Trans-Generational Wealth and Policy Influence</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">Tracking the long-term correlation between family office structures and national legislative trends over fifty years.</p>
</div>
</div>
</section>
<!-- Category: Wealth Creation & Vitality (Asymmetric Layout) -->
<section class="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
<!-- Wealth Column -->
<div>
<div class="flex justify-between items-end mb-unit-lg border-b border-outline-variant pb-unit-sm">
<h2 class="font-headline-md text-headline-md text-primary">Wealth Creation</h2>
</div>
<div class="space-y-unit-lg">
<div class="flex gap-unit-md archival-border p-unit-md bg-white hover:bg-surface-container transition-colors cursor-pointer group">
<div class="w-32 h-32 flex-shrink-0 bg-surface-container">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0" data-alt="A clean, minimalist composition of stacks of freshly minted currency and gold bullion bars arranged geometrically on a reflective white surface. The lighting is high-key and pristine, emphasizing clarity and value. The palette is dominated by soft golds and whites, reflecting a modern, institutional approach to wealth and asset management." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTP31mzkKmqrqkhyYn2BUrwbLbewDN_238U2TfJxbTepzqixEsTqQhHdlgpLta6AuELJIOKZfKQvq9vZn4KlLz_nGeSjrQDMa6qDb4gv6H9FhFpYv9WpXAZbmHppxaEcOTOZRFLUuOnt2VA9lCJmuiNwvsppF0B-fkNHlA1L09u13YicDVADZtglgBkOqYra5K638311MaC0YfzBiKJosmI85RK5RFYgiRPKDSFcL0gx14gkTGl4GidaCGuZGbsFbUc3LyHZVSVCA"/>
</div>
<div class="flex flex-col justify-center">
<h4 class="font-label-lg text-label-lg text-secondary mb-unit-xs">FISCAL STUDIES</h4>
<h3 class="font-headline-sm text-headline-sm leading-tight">Liquidity Metrics in Emerging Markets</h3>
</div>
</div>
<div class="flex gap-unit-md archival-border p-unit-md bg-white hover:bg-surface-container transition-colors cursor-pointer group">
<div class="w-32 h-32 flex-shrink-0 bg-surface-container">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0" data-alt="A bird's-eye view of a meticulously organized workspace featuring a digital tablet showing complex financial charts, a cup of black coffee, and a professional leather planner. The colors are muted and sophisticated, with navy and charcoal tones predominating. The mood is one of focus, productivity, and high-level financial planning." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjb1BT9x85sQEFGL99IvitCbXLZ4xFHoD16Dn6_mA-vS6iwzsE0fJHbZ-scz0HWNWwdxIfsDUSEQjsSogayOYGb5MLKlAkb_e21PSPTkbl85ulA3Ek-IueEOxlwrl5YEv1RhMxA0qI-4WDflpZmWA1XVEiiDKB1diDe9rpaksa1l3sFCLvS416IhFaBHg-imsc-jK4-rZI_Q-zpYPidccgIJfOOu6IEy6MFCGKcR7izQu_VZve6Ko-3WJxmuGYHz2MKStWwCnCS5s"/>
</div>
<div class="flex flex-col justify-center">
<h4 class="font-label-lg text-label-lg text-secondary mb-unit-xs">ASSET MANAGEMENT</h4>
<h3 class="font-headline-sm text-headline-sm leading-tight">The Psychology of Diversified Portfolio Stability</h3>
</div>
</div>
</div>
</div>
<!-- Vitality Column -->
<div>
<div class="flex justify-between items-end mb-unit-lg border-b border-outline-variant pb-unit-sm">
<h2 class="font-headline-md text-headline-md text-primary">Vitality</h2>
</div>
<div class="archival-border p-unit-lg bg-primary-container text-on-primary-container relative overflow-hidden group cursor-pointer">
<div class="relative z-10">
<h4 class="font-label-lg text-label-lg text-tertiary-fixed-dim mb-unit-sm tracking-widest uppercase">Clinical Spotlight</h4>
<h3 class="font-display-lg text-display-lg mb-unit-md leading-tight text-white">Biological Optimization: The New Frontier of Scholarly Endurance</h3>
<p class="font-body-md text-body-md text-primary-fixed-dim mb-unit-lg">An investigation into the physiological requirements for sustained cognitive performance in high-stakes institutional environments.</p>
<span class="inline-flex items-center gap-unit-xs text-tertiary-fixed-dim font-label-lg">
                                READ THE FULL REPORT 
                                <span class="material-symbols-outlined">arrow_forward</span>
</span>
</div>
<!-- Background Pattern/Effect -->
<div class="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none grayscale brightness-150">
<img class="w-full h-full object-cover" data-alt="A microscopic view of human neurons firing, rendered in a sophisticated, monochromatic navy and white palette. The intricate connections and glowing synapses create a pattern of high-tech biology and clinical precision, symbolizing the intersection of health, science, and peak cognitive vitality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArkCndrV--pBU9da1rHTIwgdo45M0VJoCDW8FXx1G6TbJcxnrRDXj7dCcUxdEIrZGg7_7NUl-25T5wDxJHdCxZU0RmZU6PJ6I_GcXq7m5zFw66cqXY4fI88gz_gMCD7YUAdneARHJLGsgRPMTHXnYAFbSeiijzouP2ZUhR7pSUP0gErEDXzppv-aN-q32ufWfZiv-4EYvFm-hjXUlDOYH-yiZwqq0K-Oi-h_dPKyWDniq1ZHE45IIuzCsQg45oJOCH_qfAqUbWZeI"/>
</div>
</div>
</div>
</section>
</div>
</main>
<!-- Footer Component -->
<footer class="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-fixed mt-unit-2xl">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl flex flex-col items-center gap-unit-lg">
<!-- Brand Logo for Footer -->
<div class="font-display-lg text-display-lg text-tertiary-fixed-dim">
<img alt="Dr. Ayuba's Corner" class="h-12 brightness-0 invert opacity-80 mx-auto mb-unit-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDENLhhxvf-P08Pi6QdE05TwTtFforhOIWSnrnhHjAhYFJ8B_6HUinOZ-ojpFgd8T2C6vaOquhrEJVm5zTB1roSHn-z92BfiekROkey0S_LqQWCrpEHSCNCC3CQCT2otm8jSy566xoZPQKO7z1ZPNweIAuzIMsD6I1Q1jFJHZJGxVpExEkv3FL-2FdjZxXZTtgYebI3Joj6aueNmMcAs0iV84ifQYr98_Mf5rdaUtoMg_COKvU1yvn9AwvT0rbdpQOObUADNodxwG4"/>
</div>
<!-- Footer Links -->
<nav class="flex flex-wrap justify-center gap-x-unit-xl gap-y-unit-sm">
<a class="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-on-tertiary-fixed transition-colors" href="#">Academic Integrity</a>
<a class="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-on-tertiary-fixed transition-colors" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-on-tertiary-fixed transition-colors" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm text-on-primary-fixed-variant hover:text-on-tertiary-fixed transition-colors" href="#">Institutional Access</a>
</nav>
<!-- Copyright -->
<p class="font-body-sm text-body-sm text-on-primary-fixed-variant opacity-60 text-center">
                © 2024 Dr. Ayuba's Corner. All rights reserved. Institutional integrity and scholarly excellence.
            </p>
</div>
</footer>
<script>
        // Micro-interactions for hovering and scrolls
        document.addEventListener('DOMContentLoaded', () => {
            const articleCards = document.querySelectorAll('.archival-border');
            
            articleCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-2px)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                });
            });
        });
    </script>

      ` }} />
    </>
  );
}
