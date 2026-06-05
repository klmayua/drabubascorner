import React from 'react';

export const metadata = {
  title: "Service Detail & Cost Calculator (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="font-body-md text-body-md" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&amp;family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary": "#ffffff",
                        "inverse-surface": "#2e3132",
                        "on-secondary-fixed": "#0d2000",
                        "surface-container-high": "#e7e8e9",
                        "on-secondary-fixed-variant": "#304f13",
                        "surface-container": "#edeeef",
                        "surface": "#f8f9fa",
                        "on-secondary-container": "#4c6e2e",
                        "on-surface-variant": "#44474d",
                        "secondary-fixed": "#c7efa1",
                        "background": "#f8f9fa",
                        "on-primary-fixed-variant": "#374766",
                        "on-primary": "#ffffff",
                        "surface-variant": "#e1e3e4",
                        "surface-container-highest": "#e1e3e4",
                        "on-tertiary-container": "#a87f0f",
                        "on-tertiary": "#ffffff",
                        "surface-tint": "#4f5e7f",
                        "error-container": "#ffdad6",
                        "on-primary-container": "#7585a8",
                        "tertiary": "#050300",
                        "primary": "#00030f",
                        "primary-fixed-dim": "#b6c7ec",
                        "outline-variant": "#c5c6ce",
                        "error": "#ba1a1a",
                        "outline": "#75777e",
                        "secondary-fixed-dim": "#acd287",
                        "on-error-container": "#93000a",
                        "on-surface": "#191c1d",
                        "on-tertiary-fixed-variant": "#5c4300",
                        "inverse-on-surface": "#f0f1f2",
                        "surface-container-low": "#f3f4f5",
                        "on-error": "#ffffff",
                        "tertiary-container": "#281b00",
                        "secondary-container": "#c7efa1",
                        "tertiary-fixed-dim": "#f1bf51",
                        "on-tertiary-fixed": "#261a00",
                        "primary-container": "#0b1d3a",
                        "primary-fixed": "#d7e2ff",
                        "surface-dim": "#d9dadb",
                        "surface-container-lowest": "#ffffff",
                        "surface-bright": "#f8f9fa",
                        "inverse-primary": "#b6c7ec",
                        "tertiary-fixed": "#ffdf9f",
                        "on-background": "#191c1d",
                        "secondary": "#476729",
                        "on-primary-fixed": "#091b38"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "unit-2xl": "80px",
                        "unit-sm": "8px",
                        "container-max": "1440px",
                        "unit-md": "16px",
                        "margin-desktop": "80px",
                        "unit-xs": "4px",
                        "unit-xl": "48px",
                        "gutter": "32px",
                        "unit-lg": "24px"
                    },
                    "fontFamily": {
                        "display-xl": ["Playfair Display"],
                        "body-md": ["Inter"],
                        "label-md": ["Inter"],
                        "headline-md": ["Playfair Display"],
                        "headline-sm": ["Playfair Display"],
                        "body-sm": ["Inter"],
                        "display-lg": ["Playfair Display"],
                        "body-lg": ["Inter"],
                        "label-lg": ["Inter"],
                        "headline-lg": ["Playfair Display"]
                    }
                }
            }
        }
    </script>
<style>
        body {
            background-color: #f8f9fa;
            color: #191c1d;
            -webkit-font-smoothing: antialiased;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #d7e2ff;
        }
        .diamond-list-item::before {
            content: '◆';
            color: #f1bf51;
            font-size: 10px;
            margin-right: 12px;
            vertical-align: middle;
        }
        .active-underline {
            position: relative;
        }
        .active-underline::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #f1bf51;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar -->
<header class="w-full top-0 bg-surface dark:bg-surface-dim border-b border-primary/10 z-50 sticky">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center py-unit-md">
<div class="flex items-center">
<img alt="Dr. Ayuba's Corner" class="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASH9WMhmjE4FnW9vCGweml54Hex76Z0eGCYqtzcsvwYA1T5Ti6lOde_uu7wkBad8p4-13lsrZnJ5aLGG3T46Rf-n-G5XHslZGlE5ggDz-Zm3xrjbX24lMdeR-0_QfC6Mu_uMV7s2CsS-YwH6LQY8MJ-EhbgLH5Hx68x7GgVUW5SYqilEzotSjPsFvKlE89awiu1K6xprpdL_19O3vjq2FLTr8A-0OWaDqwscuRKP56ic_3xGkKpnzdhr2RIqgACN7Tfomkmyx8Obs"/>
</div>
<nav class="hidden md:flex gap-gutter items-center">
<a class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-tertiary-fixed transition-colors duration-300 cursor-pointer" href="#">Research</a>
<a class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-tertiary-fixed transition-colors duration-300 cursor-pointer" href="#">Publications</a>
<a class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-tertiary-fixed transition-colors duration-300 cursor-pointer" href="#">Lectures</a>
<a class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-tertiary-fixed transition-colors duration-300 cursor-pointer" href="#">Archives</a>
<a class="font-label-lg text-label-lg uppercase tracking-widest text-primary dark:text-primary-fixed active-underline cursor-pointer" href="#">Consultancy</a>
<a class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-tertiary-fixed transition-colors duration-300 cursor-pointer" href="#">Contact</a>
</nav>
<div class="flex items-center gap-unit-md">
<button class="material-symbols-outlined text-primary cursor-pointer">search</button>
<div class="w-10 h-10 rounded-full border border-primary/10 overflow-hidden">
<img alt="Institutional Crest" class="w-full h-full object-cover" data-alt="A detailed institutional crest or academic seal presented on a clean white background. The seal features intricate line work, a central shield, and surrounding laurel leaves, rendered in a sophisticated navy blue and gold metallic finish. The lighting is crisp and clear, emphasizing the prestige and historical weight of a major academic institution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWjkgZcV_AgaTvHX-IoSrnrTmyULIPrMtXBaCoCLd2n46TZWaokb7lv6w4jEp88lgE38i-fl3YQF0Khj_h-sK87M3O3lGzcUZ-zj1msAscRN7kQ7-vLLt0ni4RqHhx4aCWk0I7YtjntqUJspDuPHGJ9prWJZ-j_RPzAsCuM4H81CZSKDbNwml14jveWr1ICpnIMWV_drGLsKHjko0h55ww09LqHupavP7maagq7zpL4Y1tAyRFOYZYMa8GbPnqz637jEp6A4UovAg"/>
</div>
</div>
</div>
</header>
<main class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl">
<!-- Hero Section & Dr. Ayuba Portrait -->
<section class="grid grid-cols-12 gap-gutter mb-unit-2xl items-end">
<div class="col-span-12 lg:col-span-7 pb-unit-lg">
<div class="inline-block px-unit-sm py-1 border-l-4 border-tertiary-fixed mb-unit-md">
<span class="font-label-lg text-label-lg uppercase tracking-widest text-on-primary-container">Institutional Advisory</span>
</div>
<h1 class="font-display-lg text-display-lg text-primary mb-unit-md leading-tight">Strategic Advisory <br/>&amp; Intellectual Capital</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-unit-xl">
                    Deploying decade-long research frameworks and high-level academic insights to navigate complex organizational challenges and institutional transformations.
                </p>
<div class="flex gap-unit-md">
<div class="flex items-center gap-unit-sm">
<span class="material-symbols-outlined text-tertiary-fixed" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="font-label-md text-label-md text-on-surface uppercase tracking-widest">Global Accreditation</span>
</div>
<div class="w-px h-6 bg-outline-variant"></div>
<div class="flex items-center gap-unit-sm">
<span class="material-symbols-outlined text-tertiary-fixed" style="font-variation-settings: 'FILL' 1;">history_edu</span>
<span class="font-label-md text-label-md text-on-surface uppercase tracking-widest">Archival Precision</span>
</div>
</div>
</div>
<div class="col-span-12 lg:col-span-5 relative">
<div class="aspect-[4/5] bg-surface-container-high rounded-lg overflow-hidden border border-primary/5 shadow-sm">
<img alt="Dr. Ayuba" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDow-J05RIYQsUk-5reYu_iB_YPZnt1hBTcCBy2Tyuf_KpJLpj9vD0c4BQ9hLeUd3wpv3S1WjuAspyDa6EmCWZg9PuFzDBlee2L8lFvzvQwZmrQlp34Gc7HBlotPEL9CuPbX48-njn9IOb2xSBMhDBr6auTFLR0LgeFz3XxubUeHTzVNo7h1mUDTgdJwz8TUiJYgywk7MTBlBsVWDKqsxQoi6hvk20RraVpXuE7gvYXxl2RSXBhUpYupZXjKPtEQhYrnwuZiBdqhhY"/>
</div>
<div class="absolute -bottom-6 -left-6 bg-white p-unit-lg border border-primary/10 shadow-lg max-w-[240px]">
<p class="font-headline-sm text-headline-sm text-primary italic mb-1">"Precision in thought, excellence in action."</p>
<p class="font-label-md text-label-md text-outline uppercase tracking-wider">— Dr. Ayuba</p>
</div>
</div>
</section>
<!-- Engagement Configuration & Calculator -->
<div class="grid grid-cols-12 gap-gutter">
<!-- Left: Options Column -->
<div class="col-span-12 lg:col-span-8 space-y-unit-xl">
<!-- Section Header -->
<div>
<h2 class="font-headline-md text-headline-md text-primary mb-2">Configure Your Engagement</h2>
<div class="h-1 w-24 bg-tertiary-fixed"></div>
</div>
<!-- Engagement Duration -->
<div class="bg-white p-unit-xl border border-primary/10 rounded-lg">
<label class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant block mb-unit-lg">1. Engagement Duration</label>
<div class="grid grid-cols-3 gap-unit-md">
<button class="duration-btn border border-primary/10 p-unit-lg text-left hover:border-tertiary-fixed transition-all group relative active-duration" id="dur-1" onclick="updateDuration(1, 1500)">
<span class="font-headline-sm text-headline-sm block group-hover:text-tertiary-fixed">1 Day</span>
<span class="font-body-sm text-body-sm text-outline">Intensive Strategy Audit</span>
</button>
<button class="duration-btn border border-primary/10 p-unit-lg text-left hover:border-tertiary-fixed transition-all group" id="dur-3" onclick="updateDuration(3, 4000)">
<span class="font-headline-sm text-headline-sm block group-hover:text-tertiary-fixed">3 Days</span>
<span class="font-body-sm text-body-sm text-outline">Framework Development</span>
</button>
<button class="duration-btn border border-primary/10 p-unit-lg text-left hover:border-tertiary-fixed transition-all group" id="dur-5" onclick="updateDuration(5, 6500)">
<span class="font-headline-sm text-headline-sm block group-hover:text-tertiary-fixed">5 Days</span>
<span class="font-body-sm text-body-sm text-outline">Full Implementation Roadmap</span>
</button>
</div>
</div>
<!-- Personnel Deployment -->
<div class="bg-white p-unit-xl border border-primary/10 rounded-lg">
<label class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant block mb-unit-lg">2. Personnel Deployment</label>
<div class="space-y-unit-md">
<label class="flex items-center p-unit-lg border border-primary/10 hover:bg-surface transition-all cursor-pointer group rounded-sm" onclick="updatePersonnel('solo', 0)">
<input checked="" class="w-5 h-5 text-primary focus:ring-tertiary-fixed border-outline-variant mr-unit-lg" name="personnel" type="radio"/>
<div>
<span class="font-label-lg text-label-lg block text-primary">Lead Scholar Solo (Dr. Ayuba)</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">Direct advisory with focused, high-level interaction.</span>
</div>
<div class="ml-auto text-right">
<span class="font-label-lg text-label-lg text-on-surface-variant">Base Rate</span>
</div>
</label>
<label class="flex items-center p-unit-lg border border-primary/10 hover:bg-surface transition-all cursor-pointer group rounded-sm" onclick="updatePersonnel('team', 2500)">
<input class="w-5 h-5 text-primary focus:ring-tertiary-fixed border-outline-variant mr-unit-lg" name="personnel" type="radio"/>
<div>
<span class="font-label-lg text-label-lg block text-primary">Associate Research Team Deployment</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">Includes 2 Senior Researchers and data analytics support.</span>
</div>
<div class="ml-auto text-right">
<span class="font-label-lg text-label-lg text-on-surface-variant">+ $2,500</span>
</div>
</label>
</div>
</div>
<!-- Add-on Services -->
<div class="bg-white p-unit-xl border border-primary/10 rounded-lg">
<label class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant block mb-unit-lg">3. Archival &amp; Supplementary Services</label>
<div class="grid grid-cols-2 gap-unit-md">
<div class="flex items-start gap-unit-md p-unit-lg border border-primary/10 hover:bg-surface transition-all cursor-pointer" onclick="toggleAddon('report', 850, this)">
<div class="mt-1">
<span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">description</span>
</div>
<div class="flex-grow">
<span class="font-label-lg text-label-lg block">Bound Strategy Report</span>
<span class="font-body-sm text-body-sm text-on-surface-variant block">Physical archival volume and digital master copy.</span>
</div>
<div class="font-label-md text-label-md text-tertiary-fixed font-bold">$850</div>
</div>
<div class="flex items-start gap-unit-md p-unit-lg border border-primary/10 hover:bg-surface transition-all cursor-pointer" onclick="toggleAddon('lecture', 1200, this)">
<div class="mt-1">
<span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">history_edu</span>
</div>
<div class="flex-grow">
<span class="font-label-lg text-label-lg block">On-site Executive Lecture</span>
<span class="font-body-sm text-body-sm text-on-surface-variant block">90-minute keynote for stakeholders.</span>
</div>
<div class="font-label-md text-label-md text-tertiary-fixed font-bold">$1,200</div>
</div>
</div>
</div>
</div>
<!-- Right: Investment Summary Card -->
<div class="col-span-12 lg:col-span-4 lg:sticky lg:top-32 h-fit">
<div class="bg-primary text-on-primary p-unit-xl border border-primary/20 rounded-lg shadow-xl relative overflow-hidden">
<!-- Tonal accent -->
<div class="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed/10 blur-3xl -mr-16 -mt-16"></div>
<h3 class="font-label-lg text-label-lg uppercase tracking-widest mb-unit-lg border-b border-on-primary/10 pb-4">Investment Summary</h3>
<div class="space-y-unit-md mb-unit-xl" id="summary-items">
<div class="flex justify-between items-center opacity-80">
<span class="font-body-sm text-body-sm">Base Engagement (1 Day)</span>
<span class="font-label-lg text-label-lg">$1,500</span>
</div>
</div>
<div class="border-t border-on-primary/20 pt-unit-lg mb-unit-xl">
<div class="flex justify-between items-end">
<div>
<span class="font-label-md text-label-md uppercase tracking-widest opacity-60 block">Total Investment</span>
<span class="text-display-lg font-display-xl" id="total-price">$1,500</span>
</div>
<div class="text-right">
<span class="font-label-sm text-label-md italic opacity-60">Excl. Institutional VAT</span>
</div>
</div>
</div>
<div class="space-y-unit-md">
<button class="w-full bg-on-primary text-primary py-unit-lg font-label-lg text-label-lg uppercase tracking-widest hover:bg-tertiary-fixed transition-colors duration-300">
                            Book Engagement
                        </button>
<button class="w-full border border-on-primary/30 py-unit-lg font-label-lg text-label-lg uppercase tracking-widest hover:bg-on-primary/5 transition-colors duration-300 flex items-center justify-center gap-unit-sm">
<span class="material-symbols-outlined text-sm">chat_bubble</span>
                            Chat with Management
                        </button>
</div>
<p class="mt-unit-lg font-body-sm text-body-sm opacity-60 text-center">
                        Secure SSL academic encryption enabled. <br/>Terms of Service apply.
                    </p>
</div>
<div class="mt-unit-xl p-unit-lg bg-surface-container-low border border-primary/5">
<h4 class="font-label-lg text-label-lg uppercase tracking-widest text-primary mb-unit-md">Key Deliverables</h4>
<ul class="space-y-unit-sm">
<li class="diamond-list-item font-body-sm text-body-sm text-on-surface-variant">Bespoke Strategic Roadmap</li>
<li class="diamond-list-item font-body-sm text-body-sm text-on-surface-variant">Archival Policy Review</li>
<li class="diamond-list-item font-body-sm text-body-sm text-on-surface-variant">Resource Optimization Audit</li>
<li class="diamond-list-item font-body-sm text-body-sm text-on-surface-variant">Stakeholder Alignment Framework</li>
</ul>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="bg-primary dark:bg-primary-container w-full border-t border-tertiary-fixed/20 mt-unit-2xl">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl flex flex-col md:flex-row justify-between items-center gap-gutter">
<div class="flex flex-col gap-unit-sm items-center md:items-start">
<span class="font-headline-sm text-headline-sm text-on-primary">Dr. Ayuba's Corner</span>
<p class="font-body-sm text-body-sm text-on-primary/80 text-center md:text-left">
                    © 2024 Dr. Ayuba's Corner. All Rights Reserved. <br/>Institutional Heritage &amp; Academic Excellence.
                </p>
</div>
<div class="flex flex-wrap justify-center gap-gutter">
<a class="font-body-sm text-body-sm text-on-primary/80 hover:text-tertiary-fixed transition-all opacity-100 hover:opacity-80" href="#">Institutional Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary/80 hover:text-tertiary-fixed transition-all opacity-100 hover:opacity-80" href="#">Academic Terms of Service</a>
<a class="font-body-sm text-body-sm text-on-primary/80 hover:text-tertiary-fixed transition-all opacity-100 hover:opacity-80" href="#">Accessibility Standards</a>
<a class="font-body-sm text-body-sm text-on-primary/80 hover:text-tertiary-fixed transition-all opacity-100 hover:opacity-80 underline text-tertiary-fixed" href="#">Contact Dean's Office</a>
</div>
</div>
</footer>
<script>
        let state = {
            duration: { label: '1 Day', price: 1500 },
            personnel: { label: 'Lead Scholar Solo', price: 0 },
            addons: []
        };

        function updateDuration(days, price) {
            state.duration = { label: days + ' Days', price: price };
            
            // UI Update
            document.querySelectorAll('.duration-btn').forEach(btn => {
                btn.classList.remove('border-tertiary-fixed', 'active-duration');
                btn.classList.add('border-primary/10');
            });
            document.getElementById('dur-' + days).classList.add('border-tertiary-fixed', 'active-duration');
            document.getElementById('dur-' + days).classList.remove('border-primary/10');
            
            renderSummary();
        }

        function updatePersonnel(type, price) {
            state.personnel = { 
                label: type === 'solo' ? 'Lead Scholar Solo' : 'Research Team Deployment', 
                price: price 
            };
            renderSummary();
        }

        function toggleAddon(id, price, el) {
            const index = state.addons.findIndex(a => a.id === id);
            if (index > -1) {
                state.addons.splice(index, 1);
                el.classList.remove('bg-surface', 'border-tertiary-fixed');
                el.classList.add('border-primary/10');
            } else {
                state.addons.push({ id, label: id === 'report' ? 'Bound Strategy Report' : 'On-site Lecture', price });
                el.classList.add('bg-surface', 'border-tertiary-fixed');
                el.classList.remove('border-primary/10');
            }
            renderSummary();
        }

        function renderSummary() {
            const summaryContainer = document.getElementById('summary-items');
            const totalDisplay = document.getElementById('total-price');
            let total = state.duration.price + state.personnel.price;

            let html = \`
                <div class="flex justify-between items-center opacity-80">
                    <span class="font-body-sm text-body-sm">Base Engagement (\${state.duration.label})</span>
                    <span class="font-label-lg text-label-lg">$\${state.duration.price.toLocaleString()}</span>
                </div>
            \`;

            if (state.personnel.price > 0) {
                html += \`
                    <div class="flex justify-between items-center opacity-80">
                        <span class="font-body-sm text-body-sm">\${state.personnel.label}</span>
                        <span class="font-label-lg text-label-lg">+$\${state.personnel.price.toLocaleString()}</span>
                    </div>
                \`;
            }

            state.addons.forEach(addon => {
                html += \`
                    <div class="flex justify-between items-center opacity-80">
                        <span class="font-body-sm text-body-sm">\${addon.label}</span>
                        <span class="font-label-lg text-label-lg">+$\${addon.price.toLocaleString()}</span>
                    </div>
                \`;
                total += addon.price;
            });

            summaryContainer.innerHTML = html;
            totalDisplay.innerText = '$' + total.toLocaleString();
        }

        // Initialize UI states for interaction feedback
        document.addEventListener('DOMContentLoaded', () => {
            renderSummary();
        });
    </script>

      ` }} />
    </div>
  );
}
