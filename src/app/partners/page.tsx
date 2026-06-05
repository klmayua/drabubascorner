import React from 'react';

export const metadata = {
  title: "Partner & Strategic Alliance Platform (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="font-body-md overflow-x-hidden" 
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
                        "on-primary": "#ffffff",
                        "outline": "#75777e",
                        "surface-container-highest": "#e1e3e4",
                        "on-error-container": "#93000a",
                        "surface": "#f8f9fa",
                        "surface-tint": "#4f5e7f",
                        "on-error": "#ffffff",
                        "inverse-surface": "#2e3132",
                        "error-container": "#ffdad6",
                        "secondary-fixed-dim": "#acd287",
                        "primary": "#00030f",
                        "on-primary-fixed": "#091b38",
                        "on-background": "#191c1d",
                        "on-tertiary-fixed": "#261a00",
                        "primary-fixed-dim": "#b6c7ec",
                        "primary-container": "#0b1d3a",
                        "on-secondary": "#ffffff",
                        "on-secondary-fixed": "#0d2000",
                        "tertiary": "#050300",
                        "on-tertiary-container": "#a87f0f",
                        "on-surface-variant": "#44474d",
                        "surface-container-lowest": "#ffffff",
                        "outline-variant": "#c5c6ce",
                        "on-primary-fixed-variant": "#374766",
                        "on-primary-container": "#7585a8",
                        "error": "#ba1a1a",
                        "tertiary-container": "#281b00",
                        "secondary": "#476729",
                        "on-tertiary": "#ffffff",
                        "tertiary-fixed": "#ffdf9f",
                        "surface-container-high": "#e7e8e9",
                        "on-secondary-fixed-variant": "#304f13",
                        "inverse-primary": "#b6c7ec",
                        "secondary-fixed": "#c7efa1",
                        "primary-fixed": "#d7e2ff",
                        "surface-container": "#edeeef",
                        "on-surface": "#191c1d",
                        "secondary-container": "#c7efa1",
                        "on-secondary-container": "#4c6e2e",
                        "tertiary-fixed-dim": "#f1bf51",
                        "surface-bright": "#f8f9fa",
                        "inverse-on-surface": "#f0f1f2",
                        "surface-bright": "#f8f9fa",
                        "surface-dim": "#d9dadb"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "unit-md": "16px",
                        "unit-sm": "8px",
                        "unit-xs": "4px",
                        "gutter": "32px",
                        "unit-xl": "48px",
                        "margin-desktop": "80px",
                        "container-max": "1440px",
                        "unit-2xl": "80px",
                        "unit-lg": "24px"
                    },
                    "fontFamily": {
                        "headline-md": ["Playfair Display"],
                        "label-lg": ["Inter"],
                        "display-xl": ["Playfair Display"],
                        "body-lg": ["Inter"],
                        "body-sm": ["Inter"],
                        "label-md": ["Inter"],
                        "display-lg": ["Playfair Display"],
                        "body-md": ["Inter"],
                        "headline-sm": ["Playfair Display"],
                        "headline-lg": ["Playfair Display"]
                    },
                    "fontSize": {
                        "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                        "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                        "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                        "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
                        "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                        "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}]
                    }
                },
            },
        }
    </script>
<style>
        body { background-color: #F8F9FA; color: #191C1D; -webkit-font-smoothing: antialiased; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-panel { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(12px); }
        .institutional-border { border: 1px solid rgba(0, 3, 15, 0.1); }
        .accent-line { width: 40px; height: 1px; background: #ffdf9f; }
        .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 32px; }
        .diagonal-bg { background: linear-gradient(135deg, #00030f 0%, #0b1d3a 100%); }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar -->
<header class="bg-surface sticky top-0 z-50 w-full border-b border-outline-variant opacity-100">
<div class="flex justify-center items-center h-24 w-full px-margin-desktop max-w-container-max mx-auto">
<div class="flex-1 flex items-center space-x-12">
<nav class="hidden md:flex items-center space-x-8">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Institutional</a>
<a class="font-label-lg text-label-lg text-primary border-b-2 border-tertiary-fixed pb-1" href="#">Alliances</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Archives</a>
</nav>
</div>
<div class="flex-shrink-0">
<img alt="Brand Logo" class="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgXz1_RHjZPRY2UfCDvxnyhgrIzzZrDEy5vu_b6w1qxONtnLFXxcB1RwpnI3FxjWOFYLDJPGLAtwaXMzyKcE-3M9jMs72msWjMnDGubkbcbGMNZ7ct0JhvRdNpn6T3Sk2NPB8_Fqau82BsJDt_VFhxqBf-pPYL70ywpA2ewK_gZoLfTT4Ae45NrnBDCwshmWtaot87JiioE12HITKlwdKZJdsrUf8uCSqiQE8qYbZXBf6FDcDy5TXDOElN4YpsTT0-o2ozAxIZKEA"/>
</div>
<div class="flex-1 flex justify-end items-center space-x-8">
<nav class="hidden md:flex items-center space-x-8">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Governance</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Inquiry</a>
</nav>
<div class="flex items-center">
<span class="material-symbols-outlined text-primary cursor-pointer">account_circle</span>
</div>
</div>
</div>
</header>
<main class="max-w-container-max mx-auto px-margin-desktop space-y-unit-2xl pt-unit-xl pb-unit-2xl">
<!-- Hero Section: Farawa Strategic Partnership Dossier -->
<section class="grid grid-cols-12 gap-gutter items-center">
<div class="col-span-7 space-y-unit-md">
<div class="flex items-center space-x-4">
<div class="accent-line"></div>
<span class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Strategic Intelligence Unit</span>
</div>
<h1 class="font-display-xl text-display-xl text-primary">Farawa Strategic Partnership</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Forging elite institutional collaborations at the intersection of geopolitical strategy, academic excellence, and corporate expansion.
                </p>
<div class="flex space-x-gutter pt-unit-md">
<button class="bg-primary text-on-primary px-unit-lg py-unit-md font-label-lg text-label-lg hover:opacity-90 transition-opacity">Access Dossier</button>
<button class="border border-tertiary-fixed text-primary px-unit-lg py-unit-md font-label-lg text-label-lg hover:bg-tertiary-fixed/10 transition-colors">Credential Audit</button>
</div>
</div>
<div class="col-span-5 relative">
<div class="institutional-border p-unit-md bg-white shadow-sm rotate-2 hover:rotate-0 transition-transform duration-500">
<div class="w-full aspect-[3/4] diagonal-bg flex flex-col justify-center items-center text-on-primary p-unit-xl">
<span class="material-symbols-outlined text-[64px] mb-unit-md">verified_user</span>
<h3 class="font-headline-sm text-headline-sm text-center mb-unit-sm">Credentialed &amp; Verified</h3>
<p class="font-body-sm text-body-sm text-center opacity-80">Institutional status: Active Level IV Strategic Ally</p>
</div>
</div>
</div>
</section>
<!-- Synergy Framework: Portrait & Values -->
<section class="grid grid-cols-12 gap-gutter bg-surface-container-low p-unit-2xl institutional-border">
<div class="col-span-5">
<div class="relative group">
<img alt="Dr Ayuba Portrait" class="w-full grayscale hover:grayscale-0 transition-all duration-700 institutional-border" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyefUroKL1dXKjn0fjgLkwszKKD57HUfkP7-yQcPa8eGe0QiZAbERRu-oWgTPppMjLoKVN1b3JjPln7qCmbGkFidtoE6khYK1Uv-WV_qUWk0d7PLEaeQ5GA02LQ6SJAV8tud7d4c-CeEwhkUoQlqiUyGQaUqXUCYkl3AGFJz7tik1_gZtKMUjOZtPol9oIxCVF862AFH4HMLL2knjiX4pdLUleTSTTNgUsryzMqtZA4UDmjyyxIunId_0riAiq-779gVYrsohYCfQ"/>
<div class="absolute -bottom-8 -right-8 bg-primary text-on-primary p-unit-md shadow-lg">
<p class="font-label-lg text-label-lg">Dr. Ayuba</p>
<p class="font-body-sm text-body-sm opacity-70">Chief Strategic Officer</p>
</div>
</div>
</div>
<div class="col-span-7 flex flex-col justify-center space-y-unit-lg pl-unit-xl">
<h2 class="font-headline-lg text-headline-lg text-primary">The Synergy Framework</h2>
<div class="space-y-unit-md">
<div class="flex items-start space-x-4">
<span class="text-tertiary-fixed-dim mt-1">◆</span>
<div>
<h4 class="font-label-lg text-label-lg text-primary">Cross-Institutional Integrity</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Synchronizing academic research with practical market implementation through a unified governance protocol.</p>
</div>
</div>
<div class="flex items-start space-x-4">
<span class="text-tertiary-fixed-dim mt-1">◆</span>
<div>
<h4 class="font-label-lg text-label-lg text-primary">Geopolitical Resonance</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Navigating complex international landscapes with historical context and contemporary insight.</p>
</div>
</div>
<div class="flex items-start space-x-4">
<span class="text-tertiary-fixed-dim mt-1">◆</span>
<div>
<h4 class="font-label-lg text-label-lg text-primary">Scalable Alliance Architectures</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Designing frameworks that grow from initial pilot programs into deep-rooted organizational partnerships.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Institutional Credentials Bento Grid -->
<section class="space-y-unit-xl">
<div class="text-center space-y-unit-xs">
<h3 class="font-headline-md text-headline-md text-primary">Institutional Credentials</h3>
<p class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Validated Governance Standards</p>
</div>
<div class="bento-grid h-[600px]">
<div class="col-span-4 institutional-border bg-white p-unit-xl flex flex-col justify-between hover:border-tertiary-fixed transition-colors">
<div>
<span class="material-symbols-outlined text-primary mb-unit-md" style="font-variation-settings: 'FILL' 1;">account_balance</span>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">Chartered Compliance</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Rigorous adherence to international legal frameworks and academic ethical standards.</p>
</div>
<a class="font-label-lg text-label-lg text-tertiary-fixed-variant hover:underline" href="#">View Certificates</a>
</div>
<div class="col-span-8 institutional-border bg-white p-unit-xl relative overflow-hidden group">
<div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
<div class="relative z-10">
<span class="material-symbols-outlined text-primary mb-unit-md">monitoring</span>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">Economic Impact Modeling</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg max-w-md">Predictive analytics for alliance outcomes, measuring quantitative social and financial ROI for B2B ventures.</p>
<div class="grid grid-cols-3 gap-unit-md border-t border-outline-variant pt-unit-md">
<div>
<p class="font-headline-sm text-headline-sm text-primary">94%</p>
<p class="font-label-md text-label-md text-on-surface-variant">Efficacy Rate</p>
</div>
<div>
<p class="font-headline-sm text-headline-sm text-primary">12+</p>
<p class="font-label-md text-label-md text-on-surface-variant">Global Hubs</p>
</div>
<div>
<p class="font-headline-sm text-headline-sm text-primary">B2B+</p>
<p class="font-label-md text-label-md text-on-surface-variant">Partner Grade</p>
</div>
</div>
</div>
</div>
<div class="col-span-6 institutional-border bg-surface-container-high p-unit-xl">
<h4 class="font-label-lg text-label-lg text-primary mb-unit-md uppercase tracking-tighter">Strategic Nodes</h4>
<div class="flex items-center justify-center h-40">
<img class="w-full h-full object-cover grayscale opacity-30" data-alt="A highly detailed and artistic aerial map view of global connectivity lines between major institutional centers across the continents. The style is professional and archival, using a deep navy and soft ivory color palette with gold highlights. The lighting is low-key, evoking a sense of secret and elite global strategic operations." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQialFcuqcGbMWPeMHl3n6yJyk5wDPStHDZyWn98jGheQr9ZjTHQEXy3ck1DieaGnLNmKZVDD_W0zQ1TxZGmmnZw6h3q9uCk6tlYkwKhCOp2vBE2IxI_hUtDXHk-yJJ92WsR4Si37DiyFpIsH7QAt8hjnN_yT4xaDqo_49G871QPO0efTjjCxNiPTbGjhdys66ZzLcwsNPV0EBEAjVVRpYd5v4WJnCJV3z08Jmbx8-41GO4o2Qx10lxw52ExrS_ZnOIea3zVGTTDw"/>
</div>
</div>
<div class="col-span-6 institutional-border bg-primary text-on-primary p-unit-xl flex items-center justify-between">
<div class="space-y-unit-sm">
<h4 class="font-headline-sm text-headline-sm">Annual Archive 2024</h4>
<p class="font-body-sm text-body-sm opacity-70">A comprehensive review of strategic synergies and institutional growth.</p>
</div>
<span class="material-symbols-outlined text-[48px] text-tertiary-fixed">menu_book</span>
</div>
</div>
</section>
<!-- Formal Inquiry Flow Section -->
<section class="py-unit-2xl" id="inquiry">
<div class="bg-white institutional-border p-unit-2xl max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-unit-xl space-y-unit-sm">
<h2 class="font-display-lg text-display-lg text-primary">Strategic Inquiry</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Begin the formal verification and alignment process for potential B2B collaboration.</p>
</div>
<form class="space-y-unit-lg">
<div class="grid grid-cols-2 gap-gutter">
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary">Institutional Name</label>
<input class="w-full p-unit-md border border-primary focus:border-tertiary-fixed-dim focus:ring-0 outline-none font-body-md" placeholder="Full legal entity name" type="text"/>
</div>
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary">Primary Domain</label>
<select class="w-full p-unit-md border border-primary focus:border-tertiary-fixed-dim focus:ring-0 outline-none font-body-md bg-white">
<option>Academic Research</option>
<option>Geopolitical Consulting</option>
<option>Corporate Expansion</option>
<option>Sustainable Governance</option>
</select>
</div>
</div>
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary">Executive Representative</label>
<input class="w-full p-unit-md border border-primary focus:border-tertiary-fixed-dim focus:ring-0 outline-none font-body-md" placeholder="Full name and title" type="text"/>
</div>
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary">Framework Intent</label>
<textarea class="w-full p-unit-md border border-primary focus:border-tertiary-fixed-dim focus:ring-0 outline-none font-body-md resize-none" placeholder="Briefly describe the proposed strategic synergy..." rows="4"></textarea>
</div>
<div class="flex items-center space-x-unit-md pt-unit-md">
<input class="w-5 h-5 text-primary border-primary rounded-none" type="checkbox"/>
<p class="font-body-sm text-body-sm text-on-surface-variant">I verify that this inquiry is authorized by the institution's executive board.</p>
</div>
<button class="w-full bg-primary text-on-primary py-unit-lg font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary/90 transition-all" type="submit">Submit Protocol Request</button>
</form>
</div>
</section>
</main>
<!-- SideNavBar (Hidden on main page flow, accessed via trigger or context) -->
<aside class="fixed left-0 top-0 h-screen z-40 flex flex-col bg-surface-container-low border-r border-outline-variant w-80 -translate-x-full transition-transform duration-300" id="sideNav">
<div class="p-unit-lg space-y-unit-xs">
<h2 class="font-headline-sm text-headline-sm text-primary">Institutional Menu</h2>
<p class="font-label-md text-label-md text-on-surface-variant">Academic Excellence</p>
</div>
<nav class="flex-1 flex flex-col py-unit-md">
<a class="flex items-center space-y-unit-md text-on-surface-variant pl-4 py-4 hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-4">menu_book</span>
<span class="font-label-lg text-label-lg">Archives</span>
</a>
<a class="flex items-center space-y-unit-md text-primary font-bold border-l-4 border-tertiary-fixed pl-4 py-4 bg-surface-container-highest transition-all" href="#">
<span class="material-symbols-outlined mr-4">science</span>
<span class="font-label-lg text-label-lg">Research</span>
</a>
<a class="flex items-center space-y-unit-md text-on-surface-variant pl-4 py-4 hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-4">school</span>
<span class="font-label-lg text-label-lg">Lectures</span>
</a>
<a class="flex items-center space-y-unit-md text-on-surface-variant pl-4 py-4 hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-4">account_balance</span>
<span class="font-label-lg text-label-lg">Faculty</span>
</a>
<a class="flex items-center space-y-unit-md text-on-surface-variant pl-4 py-4 hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-4">mail</span>
<span class="font-label-lg text-label-lg">Contact</span>
</a>
</nav>
<div class="p-unit-lg border-t border-outline-variant">
<p class="font-body-sm text-body-sm opacity-50">v4.2.1 Institutional Build</p>
</div>
</aside>
<!-- Footer -->
<footer class="bg-primary text-on-primary w-full py-unit-2xl px-margin-desktop border-t border-tertiary-fixed">
<div class="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start gap-unit-xl">
<div class="space-y-unit-md max-w-sm">
<img alt="Brand Logo Inverse" class="h-12 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgXz1_RHjZPRY2UfCDvxnyhgrIzzZrDEy5vu_b6w1qxONtnLFXxcB1RwpnI3FxjWOFYLDJPGLAtwaXMzyKcE-3M9jMs72msWjMnDGubkbcbGMNZ7ct0JhvRdNpn6T3Sk2NPB8_Fqau82BsJDt_VFhxqBf-pPYL70ywpA2ewK_gZoLfTT4Ae45NrnBDCwshmWtaot87JiioE12HITKlwdKZJdsrUf8uCSqiQE8qYbZXBf6FDcDy5TXDOElN4YpsTT0-o2ozAxIZKEA"/>
<p class="font-body-sm text-body-sm opacity-70">Securing global futures through intellectual synthesis and strategic partnership alignment.</p>
</div>
<div class="grid grid-cols-2 gap-unit-2xl">
<div class="space-y-unit-md">
<h5 class="font-label-lg text-label-lg uppercase text-tertiary-fixed">Legal</h5>
<ul class="space-y-unit-xs">
<li><a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Privacy Policy</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Terms of Service</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Accessibility</a></li>
</ul>
</div>
<div class="space-y-unit-md">
<h5 class="font-label-lg text-label-lg uppercase text-tertiary-fixed">Directives</h5>
<ul class="space-y-unit-xs">
<li><a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Archive Index</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Compliance Portal</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Dossier Access</a></li>
</ul>
</div>
</div>
</div>
<div class="max-w-container-max mx-auto mt-unit-xl pt-unit-md border-t border-on-primary/10 flex flex-col md:flex-row justify-between items-center gap-unit-md">
<p class="font-body-sm text-body-sm opacity-50">© 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Archives.</p>
<div class="flex space-x-unit-md">
<span class="material-symbols-outlined text-tertiary-fixed cursor-pointer hover:opacity-80">public</span>
<span class="material-symbols-outlined text-tertiary-fixed cursor-pointer hover:opacity-80">lock</span>
<span class="material-symbols-outlined text-tertiary-fixed cursor-pointer hover:opacity-80">shield</span>
</div>
</div>
</footer>
<script>
        // Micro-interactions and subtle effects
        document.addEventListener('DOMContentLoaded', () => {
            const sideNav = document.getElementById('sideNav');
            let sideNavOpen = false;

            // Subtle parallax effect on hero
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const heroText = document.querySelector('h1');
                if (heroText) {
                    heroText.style.transform = \`translateY(\${scrolled * 0.15}px)\`;
                }
            });

            // Intersection Observer for section revealing
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('section').forEach(section => {
                section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8');
                observer.observe(section);
            });
        });
    </script>

      ` }} />
    </div>
  );
}
