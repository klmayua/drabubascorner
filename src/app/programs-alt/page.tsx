import React from 'react';

export const metadata = {
  title: "Corporate Programs (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="text-on-background font-body-md selection:bg-brand-gold selection:text-white" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&amp;family=Inter:wght@300;400;500;600;700&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;family=Playfair+Display:wght@100..900&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "tertiary": "#050300",
                        "surface-container-lowest": "#ffffff",
                        "primary-fixed-dim": "#b6c7ec",
                        "on-tertiary": "#ffffff",
                        "outline": "#75777e",
                        "surface-variant": "#e1e3e4",
                        "surface-container": "#edeeef",
                        "tertiary-fixed": "#ffdf9f",
                        "secondary-fixed-dim": "#acd287",
                        "secondary-fixed": "#c7efa1",
                        "on-surface-variant": "#44474d",
                        "on-secondary-fixed": "#0d2000",
                        "surface-dim": "#d9dadb",
                        "surface-container-high": "#e7e8e9",
                        "primary": "#00030f",
                        "error-container": "#ffdad6",
                        "on-primary-fixed-variant": "#374766",
                        "background": "#f8f9fa",
                        "on-primary-fixed": "#091b38",
                        "on-secondary": "#ffffff",
                        "surface-bright": "#f8f9fa",
                        "tertiary-container": "#281b00",
                        "on-surface": "#191c1d",
                        "tertiary-fixed-dim": "#f1bf51",
                        "on-background": "#191c1d",
                        "inverse-on-surface": "#f0f1f2",
                        "surface-container-highest": "#e1e3e4",
                        "on-error": "#ffffff",
                        "inverse-surface": "#2e3132",
                        "on-tertiary-fixed-variant": "#5c4300",
                        "on-primary-container": "#7585a8",
                        "on-error-container": "#93000a",
                        "surface-tint": "#4f5e7f",
                        "surface": "#f8f9fa",
                        "surface-container-low": "#f3f4f5",
                        "primary-container": "#0b1d3a",
                        "on-tertiary-fixed": "#261a00",
                        "secondary": "#476729",
                        "inverse-primary": "#b6c7ec",
                        "error": "#ba1a1a",
                        "on-secondary-container": "#4c6e2e",
                        "on-tertiary-container": "#a87f0f",
                        "on-primary": "#ffffff",
                        "primary-fixed": "#d7e2ff",
                        "outline-variant": "#c5c6ce",
                        "on-secondary-fixed-variant": "#304f13",
                        "secondary-container": "#c7efa1",
                        "brand-gold": "#C79A2E",
                        "brand-navy": "#0B1D3A"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "unit-2xl": "80px",
                        "unit-xs": "4px",
                        "container-max": "1440px",
                        "unit-sm": "8px",
                        "unit-md": "16px",
                        "margin-desktop": "80px",
                        "gutter": "32px",
                        "unit-xl": "48px",
                        "unit-lg": "24px"
                    },
                    "fontFamily": {
                        "headline-md": ["Playfair Display"],
                        "body-sm": ["Inter"],
                        "headline-lg": ["Playfair Display"],
                        "body-lg": ["Inter"],
                        "headline-sm": ["Playfair Display"],
                        "label-md": ["Inter"],
                        "label-lg": ["Inter"],
                        "display-lg": ["Playfair Display"],
                        "display-xl": ["Playfair Display"],
                        "body-md": ["Inter"]
                    },
                    "fontSize": {
                        "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                        "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                        "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}],
                        "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                        "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                        "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}]
                    }
                },
            },
        }
    </script>
<style>
        body {
            background-color: #f8f9fa;
            scroll-behavior: smooth;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .diamond-bullet::before {
            content: "◆";
            color: #C79A2E;
            font-size: 0.75rem;
            margin-right: 0.75rem;
        }
        .hero-gradient {
            background: linear-gradient(rgba(11, 29, 58, 0.9), rgba(11, 29, 58, 0.7)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000');
            background-size: cover;
            background-position: center;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar -->
<header class="w-full top-0 sticky z-50 bg-surface border-b border-outline-variant">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-20">
<div class="flex items-center gap-unit-md">
<img alt="Dr. Ayuba's Corner" class="h-14" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBakJIFgTScVI66asZ-xJcOmkht13d8rX84MYLqyVWxK4gSb3nDIvuY4yIy4Vw2qJrOyWmx7UDzdx-UEOGLa3PQ0ospji8eg_SANMkv4fNoUsEg3sMkv7oabjaNvAFc0KOyCO7-RxMIPlK3RoqzEhhGi15JDLHd0zPy-Py--4Q75gQmVmQTRcQdIRzN1jaTEqKLRm3MvNyVPnVdpqiR3qhGB8A3RgGrSV5PSMoJC6Jsl5qRQ843vpD1-xTD3Jxe6x4P8kdiwEK1-Y"/>
</div>
<nav class="hidden md:flex items-center gap-unit-lg">
<a class="text-on-surface-variant hover:text-primary font-label-lg transition-all duration-200" href="#">Articles</a>
<a class="text-on-surface-variant hover:text-primary font-label-lg transition-all duration-200" href="#">Videos</a>
<a class="text-on-surface-variant hover:text-primary font-label-lg transition-all duration-200" href="#">Podcast</a>
<a class="text-primary border-b-2 border-brand-gold font-bold pb-1 font-label-lg" href="#">Courses</a>
<a class="text-on-surface-variant hover:text-primary font-label-lg transition-all duration-200" href="#">Community</a>
</nav>
<div class="flex items-center gap-unit-md">
<div class="cursor-pointer transition-all active:scale-95 text-on-surface-variant hover:text-brand-gold">
<span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</div>
<button class="bg-brand-navy text-white px-unit-lg py-unit-sm font-label-lg hover:bg-opacity-90 transition-all cursor-pointer">
                    Sign In
                </button>
</div>
</div>
</header>
<main>
<!-- Hero Section: Institutional Transformation -->
<section class="hero-gradient relative py-unit-2xl overflow-hidden min-h-[600px] flex items-center">
<div class="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter relative z-10">
<div class="text-white">
<div class="inline-block border-l-2 border-brand-gold pl-4 mb-unit-lg">
<span class="font-label-lg tracking-[0.2em] uppercase text-brand-gold">Corporate Partnership</span>
</div>
<h1 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-unit-lg text-white">
                        Institutional Transformation through Intellectual Rigor
                    </h1>
<p class="font-body-lg text-body-lg text-white/90 mb-unit-xl max-w-xl">
                        Empowering global enterprises with bespoke executive programs designed to foster deep-rooted institutional stability, mental clarity, and ethical leadership.
                    </p>
<div class="flex gap-unit-md">
<a class="bg-brand-gold text-white px-unit-xl py-unit-md font-label-lg hover:scale-[1.02] transition-transform active:scale-95 shadow-lg" href="#consultation">
                            Request Prospectus
                        </a>
<button class="border border-white/30 text-white px-unit-xl py-unit-md font-label-lg hover:bg-white/10 transition-colors">
                            Our Methodology
                        </button>
</div>
</div>
</div>
</section>
<!-- Stats / Trust Bar -->
<section class="bg-white border-b border-outline-variant py-unit-lg">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<div class="flex flex-wrap justify-between items-center opacity-60 grayscale gap-gutter">
<span class="font-headline-sm text-brand-navy">Harvard Business Review</span>
<span class="font-headline-sm text-brand-navy">OECD</span>
<span class="font-headline-sm text-brand-navy">Goldman Sachs</span>
<span class="font-headline-sm text-brand-navy">The Lancet</span>
</div>
</div>
</section>
<!-- Executive Wellness Modules -->
<section class="py-unit-2xl bg-surface-container-low">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<div class="text-center mb-unit-2xl">
<h2 class="font-headline-lg text-headline-lg text-brand-navy mb-unit-sm">Executive Wellness Modules</h2>
<p class="font-body-md text-on-surface-variant max-w-2xl mx-auto">
                        Precision-engineered curricula for the modern C-suite, blending cognitive science with institutional legacy.
                    </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Card 1 -->
<div class="bg-white border border-brand-navy/10 p-unit-xl hover:border-brand-gold transition-colors group">
<div class="w-12 h-12 bg-brand-navy text-brand-gold flex items-center justify-center mb-unit-lg">
<span class="material-symbols-outlined" data-icon="psychology">psychology</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-brand-navy mb-unit-md group-hover:text-brand-gold transition-colors">Cognitive Resilience</h3>
<p class="font-body-sm text-on-surface-variant mb-unit-lg">
                            Neuroscientific frameworks for maintaining high-stakes decision-making capacity under extreme institutional pressure.
                        </p>
<ul class="space-y-unit-sm">
<li class="diamond-bullet font-label-md text-on-surface">Stress Architecture</li>
<li class="diamond-bullet font-label-md text-on-surface">Focus Optimization</li>
<li class="diamond-bullet font-label-md text-on-surface">Executive Burnout Audit</li>
</ul>
</div>
<!-- Card 2 -->
<div class="bg-white border border-brand-navy/10 p-unit-xl hover:border-brand-gold transition-colors group">
<div class="w-12 h-12 bg-brand-navy text-brand-gold flex items-center justify-center mb-unit-lg">
<span class="material-symbols-outlined" data-icon="account_balance">account_balance</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-brand-navy mb-unit-md group-hover:text-brand-gold transition-colors">Ethical Stewardship</h3>
<p class="font-body-sm text-on-surface-variant mb-unit-lg">
                            Re-anchoring corporate governance in timeless ethical principles and long-term societal accountability.
                        </p>
<ul class="space-y-unit-sm">
<li class="diamond-bullet font-label-md text-on-surface">Legacy Integration</li>
<li class="diamond-bullet font-label-md text-on-surface">Stakeholder Harmony</li>
<li class="diamond-bullet font-label-md text-on-surface">Purpose-Led Scale</li>
</ul>
</div>
<!-- Card 3 -->
<div class="bg-white border border-brand-navy/10 p-unit-xl hover:border-brand-gold transition-colors group">
<div class="w-12 h-12 bg-brand-navy text-brand-gold flex items-center justify-center mb-unit-lg">
<span class="material-symbols-outlined" data-icon="groups">groups</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-brand-navy mb-unit-md group-hover:text-brand-gold transition-colors">Cultural Integrity</h3>
<p class="font-body-sm text-on-surface-variant mb-unit-lg">
                            Structural interventions designed to foster a workforce environment rooted in health, trust, and shared mission.
                        </p>
<ul class="space-y-unit-sm">
<li class="diamond-bullet font-label-md text-on-surface">Inter-generational Flow</li>
<li class="diamond-bullet font-label-md text-on-surface">Social Cohesion Units</li>
<li class="diamond-bullet font-label-md text-on-surface">Wellness Ecosystems</li>
</ul>
</div>
</div>
</div>
</section>
<!-- Case Studies & Outcomes -->
<section class="py-unit-2xl bg-white">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div class="lg:col-span-5">
<span class="font-label-lg tracking-widest text-brand-gold mb-unit-sm block">PROVEN RESULTS</span>
<h2 class="font-headline-lg text-headline-lg text-brand-navy mb-unit-lg">Case Studies &amp; Institutional Outcomes</h2>
<div class="space-y-unit-xl">
<div class="border-l-4 border-brand-navy/10 pl-unit-lg py-2 hover:border-brand-gold transition-all cursor-default">
<div class="font-display-lg text-headline-lg text-brand-navy mb-1">32%</div>
<div class="font-label-lg text-brand-gold uppercase tracking-tighter">Increase in Senior Retention</div>
<p class="font-body-sm mt-2">Implementation of the 'Legacy Integration' module at a Tier-1 Investment Bank.</p>
</div>
<div class="border-l-4 border-brand-navy/10 pl-unit-lg py-2 hover:border-brand-gold transition-all cursor-default">
<div class="font-display-lg text-headline-lg text-brand-navy mb-1">14k</div>
<div class="font-label-lg text-brand-gold uppercase tracking-tighter">Lives Impacted Globally</div>
<p class="font-body-sm mt-2">Scale-out programs across three continents for a Fortune 100 manufacturing entity.</p>
</div>
</div>
</div>
<div class="lg:col-span-7">
<div class="relative bg-surface-container-high p-unit-sm">
<img alt="Institutional Outcomes" class="w-full aspect-[4/3] object-cover grayscale brightness-90 contrast-125" data-alt="A high-contrast, black and white photograph of a sophisticated corporate boardroom featuring a large mahogany table and modern ergonomic chairs. The room is bathed in natural light from floor-to-ceiling windows overlooking a modern cityscape. The atmosphere is quiet, professional, and authoritative, emphasizing an elite institutional setting where critical global decisions are made. A faint gold glow from the sunset reflects off the glass surfaces." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Ikgswy45JOh5gFqXJAe8i7OFb8SNUe-tU1TZFaemMmcWCJyGu7kXERxj_7Cc6pTmV-M1r9zq4g4MVwnLYTLGjuVz1qBPXQxwuFE49eP1VnNC8tGeP2-iJ7olksv15c3CI8Gzp4bsQiu4gqlR9ZV2ELdkxCo1_xGvPSwAZLDF_wtyDWa7wx5BAUJUxjpCbYvmyKpwS0n-NpaaMHB5UcNdubsmRV6TM382sxAzsexNa9VbZDGbjolHJOOWo0SCZ059X_3rJz2b8TI"/>
<div class="absolute -bottom-8 -right-8 bg-brand-navy p-unit-xl text-white max-w-xs shadow-2xl">
<span class="material-symbols-outlined text-brand-gold text-4xl mb-unit-md" data-icon="format_quote">format_quote</span>
<p class="font-body-md italic mb-unit-md">"Dr. Ayuba's approach isn't just about wellness; it's about the very architecture of how we lead and think."</p>
<div class="font-label-md">— Chief Strategy Officer, Global Finance Corp</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Book a Consultation Section -->
<section class="py-unit-2xl bg-brand-navy relative overflow-hidden" id="consultation">
<!-- Decorative accent -->
<div class="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 skew-x-12 transform origin-top-right"></div>
<div class="max-w-[1440px] mx-auto px-margin-desktop relative z-10">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-unit-2xl">
<div class="text-white">
<h2 class="font-headline-lg text-headline-lg mb-unit-lg">Initiate a Consultation</h2>
<p class="font-body-lg text-white/80 mb-unit-xl">
                            Secure a private discovery session with our lead advisors to explore how our frameworks can be tailored to your organization’s unique challenges.
                        </p>
<div class="space-y-unit-lg">
<div class="flex items-center gap-unit-md">
<div class="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
<span class="material-symbols-outlined text-sm" data-icon="check">check</span>
</div>
<span class="font-body-md">Confidential institutional assessment</span>
</div>
<div class="flex items-center gap-unit-md">
<div class="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
<span class="material-symbols-outlined text-sm" data-icon="check">check</span>
</div>
<span class="font-body-md">Direct access to program architects</span>
</div>
<div class="flex items-center gap-unit-md">
<div class="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
<span class="material-symbols-outlined text-sm" data-icon="check">check</span>
</div>
<span class="font-body-md">Bespoke implementation roadmap</span>
</div>
</div>
</div>
<div class="bg-white p-unit-xl shadow-2xl">
<form class="space-y-unit-lg">
<div class="grid grid-cols-2 gap-unit-md">
<div>
<label class="block font-label-lg text-brand-navy mb-unit-xs">Full Name</label>
<input class="w-full border-brand-navy/20 focus:border-brand-gold focus:ring-0 px-unit-md py-unit-sm font-body-md" placeholder="e.g. Marcus Aurelius" type="text"/>
</div>
<div>
<label class="block font-label-lg text-brand-navy mb-unit-xs">Institutional Role</label>
<input class="w-full border-brand-navy/20 focus:border-brand-gold focus:ring-0 px-unit-md py-unit-sm font-body-md" placeholder="e.g. VP Strategy" type="text"/>
</div>
</div>
<div>
<label class="block font-label-lg text-brand-navy mb-unit-xs">Corporate Email</label>
<input class="w-full border-brand-navy/20 focus:border-brand-gold focus:ring-0 px-unit-md py-unit-sm font-body-md" placeholder="email@organization.com" type="email"/>
</div>
<div>
<label class="block font-label-lg text-brand-navy mb-unit-xs">Program of Interest</label>
<select class="w-full border-brand-navy/20 focus:border-brand-gold focus:ring-0 px-unit-md py-unit-sm font-body-md">
<option>Cognitive Resilience</option>
<option>Ethical Stewardship</option>
<option>Cultural Integrity</option>
<option>Full Transformation Suite</option>
</select>
</div>
<div>
<label class="block font-label-lg text-brand-navy mb-unit-xs">Inquiry Details</label>
<textarea class="w-full border-brand-navy/20 focus:border-brand-gold focus:ring-0 px-unit-md py-unit-sm font-body-md" placeholder="Describe your institutional objectives..." rows="4"></textarea>
</div>
<button class="w-full bg-brand-gold text-white font-label-lg py-unit-md hover:bg-opacity-90 transition-all uppercase tracking-widest" type="submit">
                                Submit Consultation Request
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-auto bg-primary-container">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div class="md:col-span-1">
<div class="font-headline-md text-headline-md text-on-primary-container mb-unit-md">Dr. Ayuba's Corner</div>
<p class="text-on-primary-container opacity-80 font-body-sm">
                    Securing the future of leadership through mental agility and ethical depth.
                </p>
</div>
<div>
<h4 class="font-label-lg text-on-primary-container mb-unit-lg uppercase tracking-widest">Institution</h4>
<nav class="flex flex-col gap-unit-sm">
<a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm" href="#">Privacy Policy</a>
<a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm" href="#">Terms of Service</a>
<a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm" href="#">Faculty Directory</a>
</nav>
</div>
<div>
<h4 class="font-label-lg text-on-primary-container mb-unit-lg uppercase tracking-widest">Research</h4>
<nav class="flex flex-col gap-unit-sm">
<a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm" href="#">Institutional Research</a>
<a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm" href="#">White Papers</a>
<a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm" href="#">Case Archives</a>
</nav>
</div>
<div>
<h4 class="font-label-lg text-on-primary-container mb-unit-lg uppercase tracking-widest">Contact</h4>
<nav class="flex flex-col gap-unit-sm">
<a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm" href="#">Contact Us</a>
<a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm" href="#">Sitemap</a>
</nav>
</div>
</div>
<div class="max-w-[1440px] mx-auto px-margin-desktop py-6 border-t border-outline-variant/20 text-center">
<p class="text-on-primary-container opacity-60 font-body-sm">
                © 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.
            </p>
</div>
</footer>
<script>
        // Micro-interaction for hover states on cards
        document.querySelectorAll('.group').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
                card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // Smooth scroll for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>

      ` }} />
    </div>
  );
}
