import React from 'react';

export const metadata = {
  title: "Editorial Article Hub - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .reading-progress-container {
            height: 2px;
            background: rgba(74, 107, 44, 0.1);
        }
        .reading-progress-bar {
            height: 100%;
            background: #476729; /* secondary green */
            width: 0%;
            transition: width 0.1s ease-out;
        }
        .bento-card:hover .card-image {
            transform: scale(1.05);
        }
        .card-image {
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .custom-scroll::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
            background: #44474d;
            border-radius: 10px;
        }
    

    body {
      min-height: max(884px, 100dvh);
    }
  

      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- Top Navigation (Shell) -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-surface border-b border-outline-variant">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
<img alt="Logo" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVEpW7RAcXSmFOH7Iz-MB80FbKTlHRZ5P2aHpI2WbSbL10KNhW3xiEozMrEGnWcv-vfAlTX7AJe1Z06z41CNkauF5hf9XHEGpruSuL8ulesawyAUq7wjEs-ioBim-yxUQkysEd7eHZ7vBY31H8-DEqy-jmAwGJEgddYrHUcUXMUscybHtYrE7U_PrRr_MZN8jtp9cdP-X3Z0vhSNOnduYLWXzReaVpc6G3tdYrGStEKYWdvLxdL166ZlhQudh6Bk8Vwtb4_gIUvkM"/>
</div>
<h1 class="font-headline-md text-headline-md font-bold text-primary">Dr. Ayuba's Corner</h1>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="font-label-lg text-label-lg text-primary font-bold" href="#">Articles</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">About</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Community</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors" href="#">Resources</a>
</nav>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined p-2 text-on-surface-variant hover:text-primary transition-colors" data-icon="search">search</button>
<button class="bg-primary text-on-primary px-6 py-2 font-label-lg text-label-lg rounded-full hover:opacity-80 transition-opacity">Member Access</button>
</div>
</header>
<!-- Reading Progress Bar (Contextual) -->
<div class="fixed top-[73px] left-0 w-full z-50 reading-progress-container">
<div class="reading-progress-bar" id="progressBar"></div>
</div>
<!-- Main Content -->
<main class="pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
<!-- Header Section -->
<header class="mb-16">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant pb-12">
<div class="max-w-2xl">
<span class="font-label-lg text-label-lg text-secondary mb-4 block uppercase tracking-widest">Editorial Collective</span>
<h2 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">Wisdom curated for the modern legacy.</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">Exploring the intersections of health, leadership, and prosperity. A curated digital library designed to help you flourish in every dimension of life.</p>
</div>
<div class="flex flex-wrap gap-2 md:mb-1">
<button class="px-4 py-1.5 rounded-full border border-outline text-label-md font-label-md bg-secondary text-on-secondary border-secondary transition-all">All Articles</button>
<button class="px-4 py-1.5 rounded-full border border-outline text-label-md font-label-md text-on-surface-variant hover:border-secondary hover:text-secondary transition-all">Family Health</button>
<button class="px-4 py-1.5 rounded-full border border-outline text-label-md font-label-md text-on-surface-variant hover:border-secondary hover:text-secondary transition-all">Leadership</button>
<button class="px-4 py-1.5 rounded-full border border-outline text-label-md font-label-md text-on-surface-variant hover:border-secondary hover:text-secondary transition-all">Wealth Creation</button>
<button class="px-4 py-1.5 rounded-full border border-outline text-label-md font-label-md text-on-surface-variant hover:border-secondary hover:text-secondary transition-all">Human Flourishing</button>
</div>
</div>
</header>
<!-- Article Bento Grid -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Featured Large Card -->
<article class="md:col-span-8 group bento-card relative overflow-hidden bg-white border border-outline-variant rounded-xl flex flex-col md:flex-row transition-all hover:border-secondary/30">
<div class="w-full md:w-1/2 h-80 md:h-full overflow-hidden">
<img class="w-full h-full object-cover card-image" data-alt="A sophisticated black and white cinematic portrait of an older, distinguished professional man in a sharp wool coat looking thoughtfully over a modern cityscape at dusk. The lighting is low-key with soft amber highlights from city lights, creating an intellectual and authoritative mood that feels premium and editorial. The overall aesthetic is clean, minimalist, and deeply focused on the concept of visionary leadership." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS0_ucyL_654UaXYNc6Y7ghX9X3hFB2tG7o2WiWF2OHb7VZWXDca6LKI58Yrub-BPXUyZLON4827f1xsbWzQQPx7bjG04mzF27yvA6qRnbxowTKH82pM-BGoD5aE-aZqS3XkBo-DBsXT8HSiJ--PNOKygfq5l8O_K55_K_pQtm6ADAerjrZNvwBBT-7JmJ_xNgKzi5C0-PRhE5SJWNx_5kPgs56f9NVgEoi3piOKJHUu4kBE4-onrvFj5q0bttMFht9bJUKeSeg_Y"/>
</div>
<div class="w-full md:w-1/2 p-10 flex flex-col justify-between">
<div>
<div class="flex items-center gap-4 mb-6">
<span class="bg-secondary/10 text-secondary px-3 py-1 font-label-md text-label-md rounded-full">Leadership</span>
<span class="text-on-surface-variant font-label-md text-label-md flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span> 12 min read
                            </span>
</div>
<h3 class="font-headline-xl text-headline-xl mb-6 group-hover:text-secondary transition-colors">The Architect of Legacy: Leading Beyond the Quarter.</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">In an era of rapid disruption, true leadership isn't about immediate results but about the enduring structures we build for those who follow. We explore the philosophy of multi-generational vision.</p>
</div>
<div class="flex items-center justify-between mt-auto">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
<img alt="Author" class="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAspqR7Nk1w50NquwhM_D8RcfTDgJkKcL_gaLiVVy_ygWoSe7FQDK4ERxRYy7L8NZD8vT-Sa-VYOEGOYjyBXfar-gs8uCLY8faAP8E8BLHzdpCgI7_n6xJq7-7x6iVjHcaxEs5WDnUsBsD0ECSxI01k06gsCAcQk2U00KaiMHFusr-U5a-u-yxlAqemIPUmJdaiKXBJdDKoQMtv6_CCxxnZU792s-2BqSov-6cAzRIvg2oeaYEzCtvu7bHqEkM7nJuWxR2HT8VqicY"/>
</div>
<span class="font-label-lg text-label-lg">Dr. Ayuba</span>
</div>
<a class="text-secondary font-label-lg text-label-lg underline hover:no-underline transition-all" href="#">Read Article</a>
</div>
</div>
</article>
<!-- Side Card 1 -->
<article class="md:col-span-4 group bento-card bg-white border border-outline-variant rounded-xl p-8 flex flex-col transition-all hover:border-secondary/30">
<div class="aspect-video w-full rounded-lg overflow-hidden mb-6">
<img class="w-full h-full object-cover card-image" data-alt="A lush, sun-drenched organic garden scene with vibrant green vegetables and herbs growing in neat, architectural wooden beds. The sunlight is warm and golden, filtering through leaves to create a serene, nurturing atmosphere. The style is bright and high-end editorial, evoking a sense of holistic wellness and family health without clinical imagery. Deep greens and earthy browns dominate the palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_EHSWNE070Z_15DUCUl0RajCxZWYfBv7JOrv3ncQQ0ytrSO8Mo9ZPM1nYWWnpSCt1JzQIxD4VSExUu9wZFxkMUVEbaA34trboTbfysJsqigSxns7wcWwKgGCxL6MFrCJHn1X70yllbyJ1TvUBkV-pHM221fFXfyshoJ4vDWHr5jBQXbc_LKCmmi2tCwTbhjxBfTDNviEnZmYV0SD5s1GEnWPzY6QTBpNm3ZnhF1-UU7-wBAt3YWtvIEs4NRCDhsipUOmGHsejKqI"/>
</div>
<div class="flex flex-col flex-grow">
<div class="flex items-center gap-3 mb-4">
<span class="bg-secondary/10 text-secondary px-3 py-1 font-label-md text-label-md rounded-full">Family Health</span>
</div>
<h3 class="font-headline-md text-headline-md mb-4 group-hover:text-secondary transition-colors">Nutritional Foundations for Growing Legacies.</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">Beyond calories: How metabolic health in early childhood dictates cognitive development and long-term vitality.</p>
<div class="pt-6 border-t border-outline-variant flex justify-between items-center">
<span class="text-on-surface-variant font-label-md text-label-md">8 min read</span>
<button class="material-symbols-outlined text-secondary" data-icon="arrow_forward">arrow_forward</button>
</div>
</div>
</article>
<!-- Newsletter Card -->
<aside class="md:col-span-4 bg-primary text-on-primary rounded-xl p-10 flex flex-col justify-center relative overflow-hidden">
<!-- Background Decoration -->
<div class="absolute -right-10 -bottom-10 opacity-10">
<span class="material-symbols-outlined text-[200px]" data-icon="mail">mail</span>
</div>
<h4 class="font-headline-lg text-headline-lg mb-4">The Weekend Brief.</h4>
<p class="font-body-md text-body-md text-on-primary-container mb-8">Join 15,000+ members receiving weekly insights on better wisdom, health, and wealth.</p>
<form class="space-y-4 relative z-10">
<div class="group">
<label class="font-label-md text-label-md text-on-primary-container mb-2 block uppercase tracking-widest" for="email">Email Address</label>
<input class="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:border-secondary outline-none transition-all placeholder:text-white/20" id="email" placeholder="you@legacy.com" type="email"/>
</div>
<button class="w-full bg-white text-primary font-label-lg text-label-lg py-4 rounded-lg hover:bg-secondary transition-all">Subscribe Now</button>
</form>
<p class="text-[10px] text-on-primary-container/60 mt-6 text-center">No spam. Only curated wisdom. Unsubscribe anytime.</p>
</aside>
<!-- Small Content Card 1 -->
<article class="md:col-span-4 group bento-card bg-white border border-outline-variant rounded-xl p-8 transition-all hover:border-secondary/30">
<div class="flex flex-col h-full">
<span class="bg-secondary/10 text-secondary px-3 py-1 font-label-md text-label-md rounded-full w-fit mb-6">Wealth Creation</span>
<h3 class="font-headline-md text-headline-md mb-4 group-hover:text-secondary transition-colors italic">"Wealth is not the goal; it is the fuel for flourishing."</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-8">Redefining capital beyond the balance sheet. Understanding social, intellectual, and relational assets.</p>
<div class="mt-auto flex items-center justify-between border-t border-outline-variant pt-6">
<span class="text-on-surface-variant font-label-md text-label-md">15 min read</span>
<div class="flex gap-1">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="w-2 h-2 rounded-full bg-outline-variant"></span>
<span class="w-2 h-2 rounded-full bg-outline-variant"></span>
</div>
</div>
</div>
</article>
<!-- Image Card -->
<article class="md:col-span-4 group bento-card relative overflow-hidden rounded-xl border border-outline-variant">
<img class="w-full h-full object-cover card-image" data-alt="A clean, minimalist high-end interior workspace featuring a stack of premium linen-bound books next to a single elegant fountain pen on a white marble desk. Soft morning light streams through a window, casting long, peaceful shadows. The environment feels studious, sophisticated, and focused on intellectual growth and human flourishing. The color palette is composed of soft whites, light grays, and natural wood tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHhAeQKYhT_hz4p6DMc07D8kENTUBmNNXR5LyHA6EqvpvSzk3SPOLrdSEX0ibP66b06s47D8hBdthOfO_d_C0bIlB7RS8sBL8tFJhMYD4UvaoNdTlTu5-rFTqwiRG0v0DQf_XlqxFxX54R7putGADBpkbxGVEBlcIaBwNCZVmG3Ki7mifGgMhrEU4Zlh_kiwLIEdDunS1HWzU_usBeE5aP1yvPsy4ueRPCMPjkitfS4f1CEV6iSX8UP8lcYqFnRZo1tdnROuq-wfE"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
<span class="font-label-md text-label-md uppercase tracking-widest text-secondary-fixed mb-2">Human Flourishing</span>
<h3 class="font-headline-md text-headline-md mb-2">The Quiet Mind: Stoicism in the Modern Boardroom.</h3>
<p class="text-white/70 font-body-sm text-body-sm mb-4">Finding internal stillness amidst external chaos.</p>
<a class="font-label-lg text-label-lg underline hover:text-secondary transition-all" href="#">Read More</a>
</div>
</article>
</section>
<!-- Quotes Section -->
<section class="mt-32 border-l-4 border-tertiary-fixed-dim pl-12 py-4">
<blockquote class="max-w-4xl">
<p class="font-headline-xl italic leading-tight text-on-surface mb-6">"Education is not the learning of facts, but the training of the mind to think and the heart to care."</p>
<cite class="font-label-lg text-label-lg text-on-surface-variant">— Dr. Ayuba, Editorial Intro, Vol. 04</cite>
</blockquote>
</section>
<!-- Secondary Grid -->
<section class="mt-32">
<div class="flex items-center justify-between mb-12">
<h3 class="font-headline-lg text-headline-lg">Deep Dives &amp; Resources</h3>
<a class="font-label-lg text-label-lg text-secondary flex items-center gap-2 hover:gap-3 transition-all" href="#">
                    View Archive <span class="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Resource 1 -->
<div class="p-8 bg-surface-container-low rounded-xl border border-transparent hover:border-outline-variant transition-all cursor-pointer">
<span class="material-symbols-outlined text-secondary mb-6 text-4xl" data-icon="library_books">library_books</span>
<h4 class="font-headline-md text-headline-md mb-3">The Flourish Framework</h4>
<p class="text-on-surface-variant font-body-sm text-body-sm mb-6">A downloadable 40-page guide on balancing the pillars of health, wealth, and impact.</p>
<span class="font-label-md text-label-md text-secondary border-b border-secondary">Download PDF</span>
</div>
<!-- Resource 2 -->
<div class="p-8 bg-surface-container-low rounded-xl border border-transparent hover:border-outline-variant transition-all cursor-pointer">
<span class="material-symbols-outlined text-secondary mb-6 text-4xl" data-icon="podcasts">podcasts</span>
<h4 class="font-headline-md text-headline-md mb-3">The Wisdom Series</h4>
<p class="text-on-surface-variant font-body-sm text-body-sm mb-6">Audio conversations with global leaders on building institutional trust and lasting family health.</p>
<span class="font-label-md text-label-md text-secondary border-b border-secondary">Listen Now</span>
</div>
<!-- Resource 3 -->
<div class="p-8 bg-surface-container-low rounded-xl border border-transparent hover:border-outline-variant transition-all cursor-pointer">
<span class="material-symbols-outlined text-secondary mb-6 text-4xl" data-icon="event">event</span>
<h4 class="font-headline-md text-headline-md mb-3">Legacy Masterclass</h4>
<p class="text-on-surface-variant font-body-sm text-body-sm mb-6">An immersive digital course for rising leaders seeking to integrate wealth and wellness.</p>
<span class="font-label-md text-label-md text-secondary border-b border-secondary">Join Cohort</span>
</div>
</div>
</section>
</main>
<!-- Footer (Shell) -->
<footer class="w-full py-20 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter bg-surface-container-lowest border-t border-outline-variant">
<div class="md:col-span-4">
<h5 class="font-headline-lg text-headline-lg text-primary mb-6">Dr. Ayuba's Corner</h5>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-8 max-w-xs leading-relaxed">Better Wisdom, Better Health, Better Wealth. An institutional home for those who lead and the families they protect.</p>
<div class="flex gap-4">
<a class="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-white transition-all" href="#"><span class="material-symbols-outlined text-[20px]" data-icon="language">language</span></a>
<a class="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-white transition-all" href="#"><span class="material-symbols-outlined text-[20px]" data-icon="mail">mail</span></a>
<a class="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-white transition-all" href="#"><span class="material-symbols-outlined text-[20px]" data-icon="rss_feed">rss_feed</span></a>
</div>
</div>
<div class="md:col-span-2">
<h6 class="font-label-lg text-label-lg text-primary mb-6 uppercase tracking-widest">Library</h6>
<ul class="space-y-4">
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary" href="#">Family Health</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary" href="#">Leadership</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary" href="#">Wealth Creation</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary" href="#">Archive</a></li>
</ul>
</div>
<div class="md:col-span-2">
<h6 class="font-label-lg text-label-lg text-primary mb-6 uppercase tracking-widest">Institution</h6>
<ul class="space-y-4">
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary" href="#">About Us</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary" href="#">Credentials</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary" href="#">Speaking</a></li>
<li><a class="font-body-sm text-body-sm text-on-surface-variant hover:text-primary" href="#">Contact</a></li>
</ul>
</div>
<div class="md:col-span-4 flex flex-col md:items-end justify-between h-full">
<div class="flex gap-6 mb-8 md:mb-0">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary" href="#">Privacy Policy</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary" href="#">Terms of Service</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary" href="#">Sitemap</a>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant text-right">© 2024 Dr. Ayuba's Corner. Better Wisdom, Better Health, Better Wealth.</p>
</div>
</footer>
<script>
        // Reading Progress Logic
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";
        });

        // Search Interaction Placeholder
        const searchBtn = document.querySelector('button[data-icon="search"]');
        searchBtn.addEventListener('click', () => {
            alert('Opening sophisticated search overlay...');
        });
        
        // Micro-interaction for tags
        const tags = document.querySelectorAll('button.rounded-full');
        tags.forEach(tag => {
            tag.addEventListener('click', () => {
                tags.forEach(t => {
                    t.classList.remove('bg-secondary', 'text-on-secondary', 'border-secondary');
                    t.classList.add('text-on-surface-variant');
                });
                tag.classList.add('bg-secondary', 'text-on-secondary', 'border-secondary');
                tag.classList.remove('text-on-surface-variant');
            });
        });
    </script>

      ` }} />
    </>
  );
}
