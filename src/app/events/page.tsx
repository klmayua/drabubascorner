import React from 'react';

export const metadata = {
  title: "Masterclass & Event Registry (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .institution-border {
            border-image: linear-gradient(to bottom, #C79A2E 0%, transparent 100%) 1;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f8f9fa;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #0b1d3a;
        }
    

      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar (Execution from JSON) -->
<header class="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline opacity-100 flex justify-center items-center h-24 w-full px-margin-desktop max-w-container-max mx-auto sticky top-0 z-50">
<div class="flex justify-between items-center w-full max-w-container-max">
<!-- Brand Logo (Requirement: Only large logo, zero text identifiers) -->
<div class="flex items-center">
<img alt="Institutional Brand Logo" class="h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgXz1_RHjZPRY2UfCDvxnyhgrIzzZrDEy5vu_b6w1qxONtnLFXxcB1RwpnI3FxjWOFYLDJPGLAtwaXMzyKcE-3M9jMs72msWjMnDGubkbcbGMNZ7ct0JhvRdNpn6T3Sk2NPB8_Fqau82BsJDt_VFhxqBf-pPYL70ywpA2ewK_gZoLfTT4Ae45NrnBDCwshmWtaot87JiioE12HITKlwdKZJdsrUf8uCSqiQE8qYbZXBf6FDcDy5TXDOElN4YpsTT0-o2ozAxIZKEA"/>
</div>
<!-- Navigation Links (Contextual) -->
<nav class="hidden md:flex gap-unit-xl">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Archives</a>
<a class="font-label-lg text-label-lg text-primary border-b-2 border-tertiary-fixed pb-1 transition-colors duration-200" href="#">Masterclasses</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Symposiums</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Faculty</a>
</nav>
<div class="flex items-center gap-unit-md">
<button class="material-symbols-outlined text-primary text-2xl" data-icon="account_circle">account_circle</button>
<button class="md:hidden material-symbols-outlined text-primary text-2xl" data-icon="menu">menu</button>
</div>
</div>
</header>
<main class="max-w-container-max mx-auto px-margin-desktop py-unit-2xl space-y-unit-2xl">
<!-- Hero Section: Registry Title -->
<section class="grid grid-cols-12 gap-gutter">
<div class="col-span-12 md:col-span-8">
<span class="font-label-lg text-label-lg text-on-tertiary-fixed-variant uppercase tracking-widest mb-unit-sm block">Academic Year 2024</span>
<h1 class="font-display-xl text-display-xl text-primary mb-unit-lg">The Institutional <br/><span class="text-on-tertiary-container">Event Registry</span></h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    A curated selection of high-authority scholarly engagements, professional certification cohorts, and private masterclasses designed for the elite academic community.
                </p>
</div>
<div class="col-span-12 md:col-span-4 flex items-end justify-end">
<div class="p-unit-lg border-l-4 border-tertiary-fixed bg-surface-container-low">
<p class="font-label-md text-label-md uppercase text-outline mb-unit-xs">Next Major Event</p>
<p class="font-headline-sm text-headline-sm text-primary">Sep 14, 2024</p>
<p class="font-body-sm text-body-sm">Global Ethics Symposium</p>
</div>
</div>
</section>
<!-- Director's Note (Execution from JSON mapping) -->
<section class="grid grid-cols-12 gap-gutter bg-primary-container text-on-primary rounded-lg overflow-hidden items-stretch">
<div class="col-span-12 md:col-span-5 h-[500px]">
<div class="w-full h-full bg-cover bg-center" data-location="Academic Office" style="background-image: url('https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg');"></div>
</div>
<div class="col-span-12 md:col-span-7 p-unit-xl flex flex-col justify-center">
<div class="mb-unit-lg">
<span class="material-symbols-outlined text-tertiary-fixed text-4xl" data-icon="format_quote" style="font-variation-settings: 'FILL' 1;">format_quote</span>
</div>
<h2 class="font-headline-md text-headline-md mb-unit-md italic">A Note from the Director</h2>
<div class="space-y-unit-md opacity-90 leading-relaxed font-body-md text-on-primary-container">
<p>
                        Our mission remains constant: to provide a sanctuary for intellectual rigor and academic excellence. These masterclasses are not merely lectures; they are immersive experiences designed to challenge the established norms of scholarly discourse.
                    </p>
<p>
                        As we open the registry for the upcoming semester, we invite you to join a cohort of peers dedicated to the pursuit of truth and the preservation of institutional knowledge.
                    </p>
</div>
<div class="mt-unit-xl">
<p class="font-headline-sm text-headline-sm">Dr. Ayuba</p>
<p class="font-label-md text-label-md uppercase tracking-widest text-tertiary-fixed">Director of Institutional Research</p>
</div>
</div>
</section>
<!-- Bento Grid: Upcoming Events -->
<section class="space-y-unit-xl">
<div class="flex justify-between items-end">
<div>
<h2 class="font-headline-lg text-headline-lg text-primary">Scholarly Registry</h2>
<p class="font-body-md text-on-surface-variant">Reserved for fellows and institutional members.</p>
</div>
<div class="flex gap-unit-sm">
<button class="p-unit-sm border border-outline-variant hover:bg-surface-container-highest transition-all">
<span class="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
<button class="p-unit-sm border border-outline-variant hover:bg-surface-container-highest transition-all">
<span class="material-symbols-outlined" data-icon="grid_view" style="font-variation-settings: 'FILL' 1;">grid_view</span>
</button>
</div>
</div>
<div class="grid grid-cols-12 gap-gutter">
<!-- Large Featured Event -->
<div class="col-span-12 md:col-span-8 bg-surface-container-lowest border border-primary/10 group p-unit-xl flex flex-col justify-between hover:border-tertiary-fixed transition-colors">
<div>
<div class="flex justify-between items-start mb-unit-lg">
<span class="bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md px-unit-md py-1">CERTIFICATION COHORT</span>
<span class="font-label-lg text-label-lg text-primary">OCT 12 — DEC 20</span>
</div>
<h3 class="font-display-lg text-display-lg text-primary group-hover:text-tertiary-fixed-dim transition-colors mb-unit-md">Mastering Advanced Epistemology</h3>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">A 10-week intensive program focusing on the historical foundations and modern applications of analytical philosophy.</p>
</div>
<div class="mt-unit-xl flex items-center justify-between">
<div class="flex -space-x-4">
<div class="w-12 h-12 rounded-full border-4 border-surface-container-lowest bg-primary-fixed flex items-center justify-center font-bold text-primary">JB</div>
<div class="w-12 h-12 rounded-full border-4 border-surface-container-lowest bg-secondary-fixed flex items-center justify-center font-bold text-secondary">AM</div>
<div class="w-12 h-12 rounded-full border-4 border-surface-container-lowest bg-tertiary-fixed flex items-center justify-center font-bold text-tertiary">+8</div>
</div>
<button class="bg-primary text-on-primary px-unit-xl py-unit-md font-label-lg text-label-lg hover:bg-primary/90 transition-colors uppercase tracking-widest">Register for Cohort</button>
</div>
</div>
<!-- Secondary Small Event 1 -->
<div class="col-span-12 md:col-span-4 bg-surface-container-low border border-primary/10 p-unit-lg flex flex-col justify-between hover:border-tertiary-fixed transition-colors">
<div>
<div class="flex justify-between items-start mb-unit-md">
<span class="text-on-surface-variant font-label-md text-label-md">SYMPOSIUM</span>
<span class="material-symbols-outlined text-primary" data-icon="verified">verified</span>
</div>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">Digital Humanities Summit</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Exploring the intersection of classical study and modern computational analysis.</p>
</div>
<div class="pt-unit-lg border-t border-outline-variant mt-unit-lg">
<p class="font-label-lg text-label-lg text-primary">NOV 05, 2024</p>
<a class="text-tertiary-fixed-variant font-label-md text-label-md uppercase tracking-wider flex items-center gap-1 mt-unit-sm group" href="#">
                            Event Details <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
<!-- Secondary Small Event 2 -->
<div class="col-span-12 md:col-span-4 bg-surface-container-low border border-primary/10 p-unit-lg flex flex-col justify-between hover:border-tertiary-fixed transition-colors">
<div>
<div class="flex justify-between items-start mb-unit-md">
<span class="text-on-surface-variant font-label-md text-label-md">GUEST LECTURE</span>
<span class="material-symbols-outlined text-primary" data-icon="school">school</span>
</div>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">Archive Management</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Preservation techniques for 19th-century manuscript collections and oral histories.</p>
</div>
<div class="pt-unit-lg border-t border-outline-variant mt-unit-lg">
<p class="font-label-lg text-label-lg text-primary">DEC 01, 2024</p>
<a class="text-tertiary-fixed-variant font-label-md text-label-md uppercase tracking-wider flex items-center gap-1 mt-unit-sm group" href="#">
                            Event Details <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
<!-- Large Featured Event 2 -->
<div class="col-span-12 md:col-span-8 relative group overflow-hidden bg-primary text-on-primary p-unit-xl flex flex-col justify-end">
<div class="absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-105" data-alt="A grand historical library interior with towering shelves of leather-bound books, soft golden light filtering through high arched windows, creating a majestic and scholarly atmosphere. The scene is refined and institutional, capturing the essence of academic excellence and timeless knowledge preservation." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsfPhjqa3giorJE4NuFSc3zYtknXjDCMPUNBjZgZuYhKEJ8rDXHfRzut_ULPQKiyj8nMaBV8Qj3PVyhju4Z0foU9MCdlnR9yCA9eoqxTJzXa7Fx9DFm8KRZ_Fcek90szN752xXaPR7gyKwsLbF3c0hdpLBzD-uWgTApVpYgNHX0VKsIUOo5Jne-wDYGQntpDJd_KJRKC5S8j8Wb4KcSWao2VahwTWtCdt2pW2O17NWZz2gVAHUXFbZMLnaeIFmBGMnC9xtjawn9Fo'); background-size: cover; background-position: center;"></div>
<div class="relative z-10">
<span class="font-label-md text-label-md text-tertiary-fixed uppercase mb-unit-sm block">Global Annual Event</span>
<h3 class="font-headline-lg text-headline-lg mb-unit-md">The International Scholarly Assembly</h3>
<p class="font-body-md text-on-primary-container max-w-lg mb-unit-lg">Our flagship gathering of intellectuals, researchers, and institutional leaders from across the globe.</p>
<button class="border-2 border-tertiary-fixed text-tertiary-fixed px-unit-lg py-unit-sm font-label-lg text-label-lg hover:bg-tertiary-fixed hover:text-primary transition-colors uppercase tracking-widest">Secure Your Invite</button>
</div>
</div>
</div>
</section>
<!-- Institutional Data Section -->
<section class="py-unit-2xl border-t border-outline-variant/20">
<div class="grid grid-cols-12 gap-gutter text-center">
<div class="col-span-6 md:col-span-3">
<p class="font-display-lg text-display-lg text-primary">42</p>
<p class="font-label-md text-label-md uppercase text-outline">Active Fellowships</p>
</div>
<div class="col-span-6 md:col-span-3">
<p class="font-display-lg text-display-lg text-primary">128</p>
<p class="font-label-md text-label-md uppercase text-outline">Global Chapters</p>
</div>
<div class="col-span-6 md:col-span-3">
<p class="font-display-lg text-display-lg text-primary">15k</p>
<p class="font-label-md text-label-md uppercase text-outline">Digital Archives</p>
</div>
<div class="col-span-6 md:col-span-3">
<p class="font-display-lg text-display-lg text-primary">850+</p>
<p class="font-label-md text-label-md uppercase text-outline">Certified Scholars</p>
</div>
</div>
</section>
</main>
<!-- Footer (Execution from JSON) -->
<footer class="bg-primary dark:bg-surface-container-lowest border-t border-tertiary-fixed w-full py-unit-2xl px-margin-desktop max-w-container-max mx-auto">
<div class="flex flex-col md:flex-row justify-between items-start gap-unit-xl">
<div class="space-y-unit-md">
<img alt="Footer Logo" class="h-12 invert brightness-0 opacity-80" data-alt="A clean, minimalist monochrome version of the institutional brand logo against a dark navy background. The lighting is sophisticated and professional, reflecting the archival quality of a prestigious academic body. The composition is centered and elegant." src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
<p class="font-body-sm text-body-sm text-on-primary/70 max-w-xs">
                    Preserving academic heritage through curated events and scholarly discourse since 1994.
                </p>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-unit-xl">
<div class="space-y-unit-sm">
<h5 class="font-label-lg text-label-lg text-on-primary uppercase">Institutional</h5>
<ul class="space-y-2">
<li><a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Privacy Policy</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div class="space-y-unit-sm">
<h5 class="font-label-lg text-label-lg text-on-primary uppercase">Resources</h5>
<ul class="space-y-2">
<li><a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Accessibility</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Archive Index</a></li>
</ul>
</div>
<div class="col-span-2 space-y-unit-sm">
<h5 class="font-label-lg text-label-lg text-on-primary uppercase">Join the Registry</h5>
<form class="flex border border-on-primary/20">
<input class="bg-transparent border-none text-on-primary placeholder:text-on-primary/30 w-full focus:ring-0" placeholder="Institutional Email" type="email"/>
<button class="bg-tertiary-fixed text-primary px-unit-md hover:bg-tertiary-fixed-dim transition-colors" type="submit">
<span class="material-symbols-outlined" data-icon="arrow_right_alt">arrow_right_alt</span>
</button>
</form>
</div>
</div>
</div>
<div class="mt-unit-2xl pt-unit-lg border-t border-on-primary/10 flex flex-col md:flex-row justify-between items-center gap-unit-md text-on-primary/50 font-body-sm text-body-sm">
<p>© 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Archives.</p>
<div class="flex gap-unit-lg">
<a class="hover:text-tertiary-fixed transition-colors" href="#">LinkedIn</a>
<a class="hover:text-tertiary-fixed transition-colors" href="#">Academic Network</a>
<a class="hover:text-tertiary-fixed transition-colors" href="#">JSTOR</a>
</div>
</div>
</footer>
<script>
        // Micro-interaction for event card hover effects
        document.querySelectorAll('.group').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
                card.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    </script>

      ` }} />
    </>
  );
}
