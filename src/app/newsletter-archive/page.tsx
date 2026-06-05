import React from 'react';

export const metadata = {
  title: "Newsletter System & Archive (Desktop) - Dr. Abuba Portal",
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
        .editorial-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 32px;
        }
        .bento-card {
            border: 1px solid rgba(0, 3, 15, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bento-card:hover {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
            border-color: #f1bf51;
        }
        .gold-accent-line {
            height: 2px;
            background: linear-gradient(90deg, #f1bf51 0%, transparent 100%);
        }
        .institutional-input:focus {
            box-shadow: 0 0 0 2px #f1bf51;
        }
    

      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar -->
<header class="w-full top-0 sticky bg-surface border-b border-outline-variant z-50">
<div class="max-w-container-max mx-auto px-margin-desktop flex justify-between items-center h-20">
<!-- Brand Logo Only (Per Requirement) -->
<div class="h-12 overflow-hidden flex items-center">
<img alt="Institutional Brand Logo" class="h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc2Ze4CKaGLlVEBnyPeTpDdxU7gyvgTOPE7ai2ZXKMmHmBY7iX_Af-LarE-eY46A9B3ftXxdiWp2w-D7v8V58nh1wGy9dsf_YdH1-_d2NQGWirazMvlwSAxD_-rcHcJ9BN225CWlivWisVNe2Lc1OKjGNRKotaJuPDlIMyVyrwwAZ0po2Qn7_5_YUYke1tKvrmGEI1OaVMLp1X08r7FA5ls3_RGLYSvRGJxKSwLzBoDBENYt4gd9nFf4_3JQrnXzA-gzKElwtmfY4"/>
</div>
<!-- Navigation Links -->
<nav class="hidden md:flex items-center gap-unit-xl">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Articles</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Videos</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Podcast</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Community</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Courses</a>
<a class="font-label-lg text-label-lg text-primary border-b-2 border-tertiary-fixed-dim font-bold pb-1" href="#">Marketplace</a>
</nav>
<!-- Actions -->
<div class="flex items-center gap-unit-md">
<span class="material-symbols-outlined text-primary cursor-pointer p-2" data-icon="search">search</span>
<button class="bg-primary text-on-primary px-unit-lg py-2 font-label-lg text-label-lg hover:bg-opacity-90 transition-all active:scale-95">Sign In</button>
</div>
</div>
</header>
<main class="max-w-container-max mx-auto px-margin-desktop py-unit-2xl">
<!-- Subscription Section: The Weekend Brief -->
<section class="mb-unit-2xl">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center bg-surface-container-low border border-outline-variant overflow-hidden">
<div class="lg:col-span-7 p-unit-xl flex flex-col gap-unit-md">
<div class="flex items-center gap-unit-sm">
<span class="text-tertiary-fixed-dim font-bold tracking-widest uppercase text-xs">Scholarly Communication</span>
<div class="flex-1 h-px bg-outline-variant"></div>
</div>
<h1 class="font-display-lg text-display-lg text-primary leading-tight">The Weekend Brief</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                        A curated editorial synthesized for the modern intellectual. Deep-dives into geopolitical stability, healthcare systemic resilience, and the stewardship of legacy.
                    </p>
<!-- Institutional Email Verification -->
<div class="mt-unit-lg max-w-xl">
<label class="font-label-lg text-label-lg text-primary mb-2 block" for="email">Institutional Email Address</label>
<form class="flex flex-col sm:flex-row gap-unit-sm" onsubmit="event.preventDefault(); alert('Verification link sent to your institution.');">
<input class="flex-1 bg-white border border-outline px-4 py-3 institutional-input focus:outline-none focus:ring-1 focus:ring-tertiary-fixed-dim font-body-md" id="email" placeholder="e.g. j.doe@institution.edu" required="" type="email"/>
<button class="bg-primary text-on-primary px-8 py-3 font-label-lg text-label-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2" type="submit">
                                Subscribe <span class="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</form>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-unit-sm flex items-center gap-2">
<span class="material-symbols-outlined text-xs" data-icon="verified_user">verified_user</span>
                            Subscribers gain exclusive access to the quarterly Faculty Review.
                        </p>
</div>
</div>
<div class="lg:col-span-5 h-full relative min-h-[400px]">
<div class="absolute inset-0 bg-primary opacity-5 z-10"></div>
<div class="absolute inset-0 z-0 bg-cover bg-center" data-alt="A sophisticated still life of a classic fountain pen resting on a handwritten manuscript, illuminated by a soft morning light through a library window. The scene captures the essence of deep intellectual work and archival quality. The color palette is composed of rich sepia tones, charcoal blacks, and pristine off-white paper." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuvQJXtkSv9jCyDkcvaOrtNjxomgxjNxX06X-lgs7kT3iRYHpTansbDLnzDeSGtJkVhugBxX29ooZXKvLCtGFK9AP9S2zyQ6CXGuTFDaXeFnlZpAufuj7LxLW724ezIZFO-N13goqAjN7jZ70Y5MMFuuOzFqz0_bWfozAY_BoQ0UqAfyb801Kd9C0zsQo_ybrVkQHKPVU76VOKUVh1qbKki_0NCqUKkW-fY14HrV_7js0XdKDHGZw-bczeyYJZ2d4roxI1ivY0kFw')"></div>
<div class="absolute bottom-unit-lg right-unit-lg z-20 bg-white/90 backdrop-blur-sm p-unit-md border border-outline-variant">
<p class="font-label-md text-label-md text-primary italic">"Knowledge is the only asset that increases when shared."</p>
</div>
</div>
</div>
</section>
<!-- Archive Filter / Header -->
<div class="flex flex-col md:flex-row justify-between items-end mb-unit-xl border-b border-outline-variant pb-unit-md">
<div>
<h2 class="font-headline-lg text-headline-lg text-primary mb-2">The Editorial Archive</h2>
<div class="gold-accent-line w-24"></div>
</div>
<nav class="flex gap-unit-lg mt-unit-md md:mt-0">
<button class="font-label-lg text-label-lg text-primary border-b-2 border-tertiary-fixed-dim pb-1">All Briefs</button>
<button class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-all">Leadership</button>
<button class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-all">Public Health</button>
<button class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-all">Capital Preservation</button>
</nav>
</div>
<!-- The Archive Grid -->
<div class="editorial-grid">
<!-- Featured Brief -->
<article class="col-span-12 lg:col-span-8 bento-card bg-white p-unit-xl group">
<div class="flex flex-col md:flex-row gap-unit-xl">
<div class="flex-1 flex flex-col justify-between">
<div>
<div class="flex items-center gap-unit-sm mb-unit-md">
<span class="bg-primary-container text-on-primary-container px-3 py-1 text-[10px] font-bold uppercase tracking-tighter">Leadership</span>
<span class="text-on-surface-variant font-label-md text-label-md">June 12, 2024</span>
</div>
<h3 class="font-headline-md text-headline-md text-primary group-hover:text-tertiary-fixed-dim transition-colors mb-unit-md">The Institutional Architect: Building Systems That Outlast Individuals</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg line-clamp-3">
                                Exploring the shift from charismatic leadership to systemic reliability in healthcare administration. This brief analyzes historical case studies of institutions that maintained excellence across century-long transitions.
                            </p>
</div>
<a class="font-label-lg text-label-lg text-primary underline flex items-center gap-2" href="#">
                            Read Full Brief <span class="material-symbols-outlined" data-icon="open_in_new">open_in_new</span>
</a>
</div>
<div class="w-full md:w-64 h-64 md:h-auto overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A macro photograph of the inner workings of a high-end vintage watch, showcasing intricate brass gears and silver springs. The lighting is focused and dramatic, highlighting the precision and complexity of the mechanism. The visual style is premium and archival, reflecting an obsession with system integrity and long-term reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUj1R_9Ba_u3-ypPX-2QxSroyzzpVy3mKI_KLk9uxDBMlEK1rv0IBdTdHu-Z3QeP3j2_BFCuahLLMp7VCnpw_aOot1EN-xkVf8pV3ULdFDT-S_ZZnjWO8gkVcus9q2xCsRAKApS5g5Cwwz91kxjxfmu6bjMzMV7cBKvpgWfGDRRANv5AOWL8lKfGgOpVb37UDIZWVNuWT5lC3Ne7vMoJwUqDnbeGehFXYxt-RjpxCGaJ07FPRQGjzi9H8hO3T8Fud-EYtKyEBW_pU"/>
</div>
</div>
</article>
<!-- Regular Card: Public Health -->
<article class="col-span-12 md:col-span-6 lg:col-span-4 bento-card bg-white p-unit-lg flex flex-col">
<div class="flex items-center gap-unit-sm mb-unit-md">
<span class="bg-secondary-container text-on-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-tighter">Public Health</span>
<span class="text-on-surface-variant font-label-md text-label-md">May 28, 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-md">The Fragility of Urban Care Networks</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg flex-1">
                    An examination of supply chain vulnerabilities in metropolitan health centers and the proposed decentralization of critical medical assets.
                </p>
<div class="flex justify-between items-center pt-unit-md border-t border-outline-variant">
<span class="font-label-md text-label-md italic">12 min read</span>
<button class="text-primary hover:text-tertiary-fixed-dim transition-colors">
<span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
</button>
</div>
</article>
<!-- Regular Card: Capital Preservation -->
<article class="col-span-12 md:col-span-6 lg:col-span-4 bento-card bg-white p-unit-lg flex flex-col">
<div class="flex items-center gap-unit-sm mb-unit-md">
<span class="bg-tertiary-container text-on-tertiary-fixed px-3 py-1 text-[10px] font-bold uppercase tracking-tighter">Capital Preservation</span>
<span class="text-on-surface-variant font-label-md text-label-md">May 15, 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-md">The Multi-Generational Balance Sheet</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg flex-1">
                    Stewardship beyond the fiscal year. How top-tier institutions hedge against inflationary cycles while maintaining social impact objectives.
                </p>
<div class="flex justify-between items-center pt-unit-md border-t border-outline-variant">
<span class="font-label-md text-label-md italic">18 min read</span>
<button class="text-primary hover:text-tertiary-fixed-dim transition-colors">
<span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
</button>
</div>
</article>
<!-- Regular Card: Leadership -->
<article class="col-span-12 md:col-span-6 lg:col-span-4 bento-card bg-white p-unit-lg flex flex-col">
<div class="flex items-center gap-unit-sm mb-unit-md">
<span class="bg-primary-container text-on-primary-container px-3 py-1 text-[10px] font-bold uppercase tracking-tighter">Leadership</span>
<span class="text-on-surface-variant font-label-md text-label-md">May 02, 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-md">The Ethics of Algorithmic Care</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg flex-1">
                    When AI enters the clinical boardroom: Maintaining institutional values in the age of automated decision-making.
                </p>
<div class="flex justify-between items-center pt-unit-md border-t border-outline-variant">
<span class="font-label-md text-label-md italic">15 min read</span>
<button class="text-primary hover:text-tertiary-fixed-dim transition-colors">
<span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
</button>
</div>
</article>
<!-- Regular Card: Public Health -->
<article class="col-span-12 md:col-span-6 lg:col-span-4 bento-card bg-white p-unit-lg flex flex-col">
<div class="flex items-center gap-unit-sm mb-unit-md">
<span class="bg-secondary-container text-on-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-tighter">Public Health</span>
<span class="text-on-surface-variant font-label-md text-label-md">April 19, 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-md">Post-Pandemic Resilience Models</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg flex-1">
                    A retrospective analysis of healthcare adaptability and the emergence of hybrid primary care clusters in emerging markets.
                </p>
<div class="flex justify-between items-center pt-unit-md border-t border-outline-variant">
<span class="font-label-md text-label-md italic">10 min read</span>
<button class="text-primary hover:text-tertiary-fixed-dim transition-colors">
<span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
</button>
</div>
</article>
</div>
<!-- Pagination / Load More -->
<div class="mt-unit-2xl flex flex-col items-center gap-unit-md">
<button class="border border-primary text-primary px-unit-2xl py-unit-md font-label-lg text-label-lg hover:bg-primary hover:text-white transition-all duration-300">
                Access Full Archives
            </button>
<p class="font-body-sm text-body-sm text-on-surface-variant italic">Showing 6 of 142 briefings</p>
</div>
</main>
<!-- Footer -->
<footer class="w-full mt-auto bg-primary-container text-on-primary-container border-t border-outline-variant">
<div class="max-w-container-max mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter">
<!-- Branding -->
<div class="col-span-1 md:col-span-1">
<div class="h-10 mb-unit-md overflow-hidden">
<img alt="Brand Logo" class="h-full object-contain filter brightness-0 invert opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc2Ze4CKaGLlVEBnyPeTpDdxU7gyvgTOPE7ai2ZXKMmHmBY7iX_Af-LarE-eY46A9B3ftXxdiWp2w-D7v8V58nh1wGy9dsf_YdH1-_d2NQGWirazMvlwSAxD_-rcHcJ9BN225CWlivWisVNe2Lc1OKjGNRKotaJuPDlIMyVyrwwAZ0po2Qn7_5_YUYke1tKvrmGEI1OaVMLp1X08r7FA5ls3_RGLYSvRGJxKSwLzBoDBENYt4gd9nFf4_3JQrnXzA-gzKElwtmfY4"/>
</div>
<p class="font-body-sm text-body-sm opacity-70">
                    Advancing the standard of institutional stewardship and intellectual leadership in global health.
                </p>
</div>
<!-- Links 1 -->
<div>
<h4 class="font-label-lg text-label-lg text-secondary-fixed mb-unit-md">Institutional</h4>
<ul class="flex flex-col gap-unit-sm font-body-sm text-body-sm">
<li><a class="opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Faculty Directory</a></li>
<li><a class="opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Institutional Research</a></li>
<li><a class="opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Academic Calendar</a></li>
</ul>
</div>
<!-- Links 2 -->
<div>
<h4 class="font-label-lg text-label-lg text-secondary-fixed mb-unit-md">Legal &amp; Access</h4>
<ul class="flex flex-col gap-unit-sm font-body-sm text-body-sm">
<li><a class="opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Privacy Policy</a></li>
<li><a class="opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Terms of Service</a></li>
<li><a class="opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Sitemap</a></li>
</ul>
</div>
<!-- Connect -->
<div>
<h4 class="font-label-lg text-label-lg text-secondary-fixed mb-unit-md">Connect</h4>
<ul class="flex flex-col gap-unit-sm font-body-sm text-body-sm">
<li><a class="opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all" href="#">Contact Us</a></li>
<li class="flex gap-unit-sm mt-unit-sm">
<a class="p-2 border border-white/20 hover:border-tertiary-fixed transition-colors" href="#">
<span class="material-symbols-outlined text-sm" data-icon="share">share</span>
</a>
<a class="p-2 border border-white/20 hover:border-tertiary-fixed transition-colors" href="#">
<span class="material-symbols-outlined text-sm" data-icon="rss_feed">rss_feed</span>
</a>
</li>
</ul>
</div>
</div>
<div class="max-w-container-max mx-auto px-margin-desktop py-unit-md border-t border-white/10 flex justify-between items-center text-[10px] tracking-widest uppercase opacity-50">
<span>© 2024 Dr. Ayuba's Corner. All rights reserved.</span>
<span>Intellectual Property of the Institution</span>
</div>
</footer>
<!-- Micro-interaction Script -->
<script>
        // Subtle scroll reveal effect
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.bento-card').forEach(card => {
            card.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
            observer.observe(card);
        });
    </script>

      ` }} />
    </>
  );
}
