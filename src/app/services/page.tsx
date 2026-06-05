import React from 'react';

export const metadata = {
  title: "Institutional Services Directory (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

    body {
      background-color: #F8F9FA;
      color: #191c1d;
    }
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    .institutional-gradient {
      background: linear-gradient(to right, #0b1d3a, #1a2e4e);
    }
    .gold-accent-line {
      height: 2px;
      background: #c79a2e;
    }
    .card-hover:hover {
      box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
      border-color: rgba(199, 154, 46, 0.3);
      transform: translateY(-4px);
    }
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  

      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar (Shared Component Template) -->
<nav class="w-full top-0 bg-surface dark:bg-surface-dim border-b border-primary/10 z-50">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center py-unit-md">
<!-- Institutional Crest (Logo Only as requested) -->
<div class="flex items-center">
<img alt="Institutional Crest" class="h-20 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASH9WMhmjE4FnW9vCGweml54Hex76Z0eGCYqtzcsvwYA1T5Ti6lOde_uu7wkBad8p4-13lsrZnJ5aLGG3T46Rf-n-G5XHslZGlE5ggDz-Zm3xrjbX24lMdeR-0_QfC6Mu_uMV7s2CsS-YwH6LQY8MJ-EhbgLH5Hx68x7GgVUW5SYqilEzotSjPsFvKlE89awiu1K6xprpdL_19O3vjq2FLTr8A-0OWaDqwscuRKP56ic_3xGkKpnzdhr2RIqgACN7Tfomkmyx8Obs"/>
</div>
<!-- Desktop Navigation Clusters -->
<div class="hidden md:flex items-center gap-unit-xl">
<div class="flex items-center gap-unit-lg">
<a class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-tertiary-fixed transition-colors duration-300 cursor-pointer active:opacity-70" href="#">Research</a>
<a class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-tertiary-fixed transition-colors duration-300 cursor-pointer active:opacity-70" href="#">Publications</a>
<a class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-tertiary-fixed transition-colors duration-300 cursor-pointer active:opacity-70" href="#">Lectures</a>
<a class="font-label-lg text-label-lg uppercase tracking-widest text-primary dark:text-primary-fixed border-b-2 border-tertiary-fixed pb-1 cursor-pointer active:opacity-70" href="#">Consultancy</a>
<a class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-tertiary-fixed transition-colors duration-300 cursor-pointer active:opacity-70" href="#">Archives</a>
<a class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-tertiary-fixed transition-colors duration-300 cursor-pointer active:opacity-70" href="#">Contact</a>
</div>
<!-- Search Bar -->
<div class="relative flex items-center bg-surface-container rounded-full px-unit-md py-unit-xs group border border-transparent focus-within:border-primary/20 transition-all">
<span class="material-symbols-outlined text-outline group-focus-within:text-primary" style="font-size: 20px;">search</span>
<input class="bg-transparent border-none focus:ring-0 font-label-md text-on-surface placeholder:text-outline ml-unit-sm w-40" placeholder="Search Archives..." type="text"/>
</div>
</div>
</div>
</nav>
<main class="max-w-[1440px] mx-auto px-margin-desktop">
<!-- Hero Section -->
<header class="py-unit-2xl grid grid-cols-12 gap-gutter items-center">
<div class="col-span-7">
<div class="inline-flex items-center gap-unit-sm mb-unit-md text-on-primary-container">
<span class="gold-accent-line w-12"></span>
<span class="font-label-lg text-label-lg uppercase tracking-[0.2em] text-[#c79a2e]">Consultancy &amp; Advisory</span>
</div>
<h1 class="font-display-xl text-display-xl text-primary mb-unit-lg">Services Directory</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Leveraging decades of institutional heritage and academic rigor to provide high-authority strategic solutions for global organizations, academic bodies, and policy-makers.
        </p>
</div>
<div class="col-span-5 relative">
<div class="aspect-square bg-surface-container-high rounded-xl overflow-hidden border border-primary/10">
<img alt="Institutional Excellence" class="w-full h-full object-cover" data-alt="A sophisticated, high-authority portrait of an African male leader in a bespoke pinstripe suit, seated in a high-end academic office surrounded by leather-bound books and global artifacts. The lighting is soft and cinematic, emphasizing a professional, intellectual atmosphere with a palette of deep navy blues and warm wooden textures. The mood is one of profound leadership, reliability, and institutional depth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDow-J05RIYQsUk-5reYu_iB_YPZnt1hBTcCBy2Tyuf_KpJLpj9vD0c4BQ9hLeUd3wpv3S1WjuAspyDa6EmCWZg9PuFzDBlee2L8lFvzvQwZmrQlp34Gc7HBlotPEL9CuPbX48-njn9IOb2xSBMhDBr6auTFLR0LgeFz3XxubUeHTzVNo7h1mUDTgdJwz8TUiJYgywk7MTBlBsVWDKqsxQoi6hvk20RraVpXuE7gvYXxl2RSXBhUpYupZXjKPtEQhYrnwuZiBdqhhY"/>
</div>
<div class="absolute -bottom-6 -left-6 bg-primary p-unit-lg text-white rounded shadow-xl max-w-[240px]">
<p class="font-label-lg text-label-lg uppercase tracking-widest text-[#c79a2e] mb-unit-sm">Established</p>
<p class="font-headline-sm text-headline-sm italic">Academic Heritage &amp; Excellence</p>
</div>
</div>
</header>
<!-- Services Grid (Bento Style) -->
<section class="py-unit-2xl border-t border-primary/5">
<div class="grid grid-cols-12 gap-gutter">
<!-- Keynote Speaking (Large Card) -->
<article class="col-span-8 bg-white border border-primary/10 p-unit-xl card-hover transition-all duration-500 flex flex-col justify-between group">
<div>
<div class="flex justify-between items-start mb-unit-xl">
<span class="material-symbols-outlined text-primary text-[48px]" style="font-variation-settings: 'FILL' 0;">record_voice_over</span>
<span class="font-label-md text-label-md text-outline uppercase tracking-widest">01 / GLOBAL ENGAGEMENT</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-primary mb-unit-md">Keynote Speaking</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg max-w-xl">
              Delivering transformative addresses at the intersection of leadership, innovation, and social equity. Each keynote is meticulously researched to align with the specific challenges and aspirations of the host institution.
            </p>
<div class="flex flex-wrap gap-unit-md mb-unit-xl">
<span class="px-unit-md py-unit-xs bg-surface-container border border-primary/5 font-label-md text-label-md">Global Policy</span>
<span class="px-unit-md py-unit-xs bg-surface-container border border-primary/5 font-label-md text-label-md">Educational Leadership</span>
<span class="px-unit-md py-unit-xs bg-surface-container border border-primary/5 font-label-md text-label-md">Cultural Dynamics</span>
</div>
</div>
<a class="inline-flex items-center gap-unit-sm text-[#c79a2e] font-label-lg text-label-lg uppercase tracking-widest group-hover:gap-unit-md transition-all" href="#">
            Inquire for Availability <span class="material-symbols-outlined">arrow_forward</span>
</a>
</article>
<!-- Institutional Audit -->
<article class="col-span-4 bg-primary text-white p-unit-xl card-hover transition-all duration-500 relative overflow-hidden group">
<div class="relative z-10">
<span class="material-symbols-outlined text-[#c79a2e] text-[40px] mb-unit-xl">fact_check</span>
<h3 class="font-headline-md text-headline-md mb-unit-md">Institutional Audit</h3>
<p class="font-body-sm text-body-sm text-white/70 mb-unit-xl">
              Rigorous evaluative frameworks designed to optimize institutional performance and compliance within international standards.
            </p>
<ul class="space-y-unit-sm mb-unit-xl">
<li class="flex items-center gap-unit-sm text-body-sm">
<span class="w-1.5 h-1.5 bg-[#c79a2e] rotate-45"></span> Process Optimization
              </li>
<li class="flex items-center gap-unit-sm text-body-sm">
<span class="w-1.5 h-1.5 bg-[#c79a2e] rotate-45"></span> Compliance Mapping
              </li>
<li class="flex items-center gap-unit-sm text-body-sm">
<span class="w-1.5 h-1.5 bg-[#c79a2e] rotate-45"></span> Cultural Assessment
              </li>
</ul>
</div>
<div class="absolute bottom-0 right-0 p-unit-lg opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-[120px]">account_balance</span>
</div>
</article>
<!-- Strategic Advisory -->
<article class="col-span-4 bg-white border border-primary/10 p-unit-xl card-hover transition-all duration-500 flex flex-col group">
<span class="material-symbols-outlined text-primary text-[40px] mb-unit-xl">strategy</span>
<h3 class="font-headline-md text-headline-md text-primary mb-unit-md">Strategic Advisory</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-unit-lg">
            Confidential consultation for C-suite executives and board members focused on long-term institutional sustainability and heritage preservation in a volatile digital landscape.
          </p>
<div class="h-px w-full bg-primary/10 mb-unit-lg"></div>
<span class="font-label-lg text-label-lg text-primary uppercase tracking-widest">Heritage Consulting</span>
</article>
<!-- Curriculum Development -->
<article class="col-span-8 bg-surface-container-low border border-primary/10 p-unit-xl card-hover transition-all duration-500 flex flex-row gap-gutter group">
<div class="w-1/3 overflow-hidden rounded">
<img alt="Academic Resources" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="An artistic, macro photograph of high-quality vellum paper and a classic fountain pen resting on a dark walnut desk. The lighting is focused and warm, highlighting the texture of the materials and creating a scholarly, archival aesthetic. The color palette is composed of rich browns, deep navys, and hints of gold, reflecting elite academic standards and intellectual depth." src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
</div>
<div class="w-2/3 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start mb-unit-lg">
<h3 class="font-headline-md text-headline-md text-primary">Curriculum Development</h3>
<span class="font-label-md text-label-md text-[#c79a2e] uppercase tracking-widest">Pedagogical Design</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-lg">
                Engineering world-class educational pathways that bridge traditional scholarship with modern technological integration. We specialize in bespoke module creation for elite vocational and higher-ed institutions.
              </p>
</div>
<div class="flex items-center gap-unit-xl">
<div class="text-center">
<p class="font-headline-sm text-headline-sm text-primary">150+</p>
<p class="font-label-md text-label-md text-outline">Modules Built</p>
</div>
<div class="text-center">
<p class="font-headline-sm text-headline-sm text-primary">24</p>
<p class="font-label-md text-label-md text-outline">Partner Org</p>
</div>
</div>
</div>
</article>
</div>
</section>
<!-- Consultation CTA -->
<section class="py-unit-2xl">
<div class="institutional-gradient rounded-xl p-unit-2xl relative overflow-hidden flex items-center justify-between">
<div class="relative z-10 max-w-2xl">
<h2 class="font-display-lg text-display-lg text-white mb-unit-lg">Elevate Your Institutional Standard</h2>
<p class="font-body-lg text-body-lg text-white/80 mb-unit-xl">
            Book a preliminary strategy session to discuss how Dr. Ayuba's Corner can facilitate your organization's transition to global excellence.
          </p>
<div class="flex items-center gap-unit-lg">
<button class="bg-[#c79a2e] text-primary px-unit-xl py-unit-md font-label-lg text-label-lg uppercase tracking-widest hover:bg-[#d4a945] transition-colors shadow-lg active:scale-95">
              Request Prospectus
            </button>
<button class="border border-white/30 text-white px-unit-xl py-unit-md font-label-lg text-label-lg uppercase tracking-widest hover:bg-white/10 transition-all">
              Direct Contact
            </button>
</div>
</div>
<div class="hidden lg:block relative z-10 w-1/4">
<img alt="Seal of Excellence" class="w-full" data-alt="A macro, elegant 3D render of a gold institutional seal or medallion, deeply embossed with scholarly symbols like an open book and a laurel wreath. The surface is polished but textured with age, catching highlights from a sophisticated soft-box lighting setup. The background is a velvety deep navy blue, creating a high-contrast, premium, and archival aesthetic." src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
</div>
<!-- Decorative Background Element -->
<div class="absolute right-[-10%] top-[-20%] w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px]"></div>
</div>
</section>
</main>
<!-- Footer (Shared Component Template) -->
<footer class="w-full bg-primary dark:bg-primary-container border-t border-tertiary-fixed/20 mt-unit-2xl">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl flex flex-col md:flex-row justify-between items-start gap-gutter">
<div class="flex flex-col gap-unit-md max-w-md">
<img alt="Institutional Crest" class="h-16 w-auto object-contain brightness-0 invert opacity-90 self-start" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASH9WMhmjE4FnW9vCGweml54Hex76Z0eGCYqtzcsvwYA1T5Ti6lOde_uu7wkBad8p4-13lsrZnJ5aLGG3T46Rf-n-G5XHslZGlE5ggDz-Zm3xrjbX24lMdeR-0_QfC6Mu_uMV7s2CsS-YwH6LQY8MJ-EhbgLH5Hx68x7GgVUW5SYqilEzotSjPsFvKlE89awiu1K6xprpdL_19O3vjq2FLTr8A-0OWaDqwscuRKP56ic_3xGkKpnzdhr2RIqgACN7Tfomkmyx8Obs"/>
<p class="font-body-sm text-body-sm text-on-primary/80">
          Dedicated to the advancement of intellectual heritage, strategic governance, and global institutional excellence through a legacy of scholarship.
        </p>
</div>
<div class="grid grid-cols-2 gap-unit-xl">
<div class="flex flex-col gap-unit-md">
<p class="font-label-lg text-label-lg text-[#c79a2e] uppercase tracking-widest mb-unit-sm">Governance</p>
<a class="font-body-sm text-body-sm text-on-primary/80 hover:text-tertiary-fixed transition-all" href="#">Institutional Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary/80 hover:text-tertiary-fixed transition-all" href="#">Academic Terms of Service</a>
</div>
<div class="flex flex-col gap-unit-md">
<p class="font-label-lg text-label-lg text-[#c79a2e] uppercase tracking-widest mb-unit-sm">Support</p>
<a class="font-body-sm text-body-sm text-on-primary/80 hover:text-tertiary-fixed transition-all" href="#">Accessibility Standards</a>
<a class="font-body-sm text-body-sm text-on-primary/80 hover:text-tertiary-fixed transition-all" href="#">Contact Dean's Office</a>
</div>
</div>
</div>
<div class="max-w-[1440px] mx-auto px-margin-desktop py-unit-lg border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-unit-md">
<p class="font-body-sm text-body-sm text-on-primary/60">
        © 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Heritage &amp; Academic Excellence.
      </p>
<div class="flex gap-unit-lg">
<span class="material-symbols-outlined text-on-primary/40 cursor-pointer hover:text-[#c79a2e] transition-colors">public</span>
<span class="material-symbols-outlined text-on-primary/40 cursor-pointer hover:text-[#c79a2e] transition-colors">school</span>
<span class="material-symbols-outlined text-on-primary/40 cursor-pointer hover:text-[#c79a2e] transition-colors">verified</span>
</div>
</div>
</footer>
<script>
    // Micro-interactions for smooth scrolling or hover effects
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Add subtle reveal animation on scroll
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('article').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });
  </script>

      ` }} />
    </>
  );
}
