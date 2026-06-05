import React from 'react';

export const metadata = {
  title: "Impact & Outcomes Hub (Desktop) - Dr. Abuba Portal",
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
        .academic-overlay {
            background: linear-gradient(to bottom, transparent 0%, rgba(0, 3, 15, 0.7) 100%);
        }
        .bento-card {
            transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .bento-card:hover {
            transform: translateY(-4px);
            border-color: #f1bf51;
        }
        .scroll-reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }
    

      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- Top Navigation -->
<header class="bg-surface border-b border-on-primary-container/10 fixed top-0 w-full z-50">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-20">
<div class="flex items-center gap-unit-md">
<div class="font-headline-sm text-headline-sm text-primary uppercase tracking-tighter">DR. AYUBA</div>
</div>
<nav class="hidden md:flex items-center gap-unit-xl">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Research</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Publications</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Lectures</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Archives</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" href="#">Consultancy</a>
<a class="font-label-lg text-label-lg text-primary border-b-2 border-tertiary-fixed-dim pb-1" href="#">Impact</a>
</nav>
<div class="cursor-pointer active:opacity-80 md:hidden">
<span class="material-symbols-outlined text-primary">menu</span>
</div>
</div>
</header>
<!-- Hero Header with Mandatory Image -->
<section class="relative h-[80vh] flex items-end overflow-hidden mt-20">
<img alt="" class="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu1ROjOHmXyQhfgSSMMdEn7SI9rFvnohARqGPNqRn5q1ul68lucmmoEehb5YzJOPT42XMztetVTJpn5JGxfQ7Kg6aIx6W8-AmHf2Uou7X8RBpt4rdf01fVEVMas8C4yS_7_5z8XxM0QgKLvO7lBFwyb5B7u0Op_BitaTLxeZscPOPcHSzNOqTaBbcAJffTyEvxMjJSQdxeqcgSaA3KqZ0lyfsibHYOhkf9k3xSsMrBkhULNNrBli5jf707xVuJggTg0DpIuePVfEw"/>
<div class="absolute inset-0 bg-black/30 bg-gradient-to-t from-primary/90 to-transparent"></div>
<div class="relative z-10 max-w-[1440px] mx-auto px-margin-desktop w-full pb-unit-2xl">
<div class="max-w-3xl">
<span class="font-label-lg text-label-lg text-tertiary-fixed-dim uppercase tracking-[0.2em] mb-unit-md block">Annual Outcome Report</span>
<h1 class="font-display-xl text-display-xl text-white mb-unit-lg leading-tight">Generational Impact: A Medical &amp; Social Report</h1>
<p class="font-body-lg text-body-lg text-white/80 border-l-2 border-tertiary-fixed-dim pl-unit-md">An extensive analysis of multi-decade interventions in health equity and institutional progress under the stewardship of Dr. Ayuba.</p>
</div>
</div>
</section>
<!-- Key Statistics -->
<section class="bg-primary text-white py-unit-2xl">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
<div class="md:col-span-4 border-r border-white/10 pr-gutter">
<h2 class="font-headline-md text-headline-md mb-unit-sm">Core Metrics</h2>
<p class="font-body-sm text-body-sm text-white/60">Longitudinal data verified by independent institutional peer review committees (2020-2024).</p>
</div>
<div class="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-gutter">
<div class="flex flex-col">
<span class="font-display-lg text-display-lg text-tertiary-fixed-dim">1.2M+</span>
<span class="font-label-lg text-label-lg uppercase tracking-widest text-white/70">Lives Impacted</span>
</div>
<div class="flex flex-col">
<span class="font-display-lg text-display-lg text-tertiary-fixed-dim">+42%</span>
<span class="font-label-lg text-label-lg uppercase tracking-widest text-white/70">Growth Index</span>
</div>
<div class="flex flex-col">
<span class="font-display-lg text-display-lg text-tertiary-fixed-dim">180</span>
<span class="font-label-lg text-label-lg uppercase tracking-widest text-white/70">Institutions Supported</span>
</div>
</div>
</div>
</div>
</section>
<!-- Community Projects Bento Grid -->
<section class="py-unit-2xl bg-surface">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<div class="flex justify-between items-end mb-unit-xl">
<div>
<h2 class="font-headline-lg text-headline-lg text-primary">Strategic Initiatives</h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-xl mt-unit-sm">Deploying targeted resources to address systemic healthcare gaps in urban and rural environments.</p>
</div>
<button class="px-unit-lg py-unit-sm border border-tertiary-fixed-dim text-tertiary-fixed-dim font-label-lg uppercase tracking-widest hover:bg-tertiary-fixed-dim hover:text-primary transition-all">
                    View Registry
                </button>
</div>
<div class="grid grid-cols-12 gap-unit-md grid-rows-2 h-[800px]">
<!-- Urban Health Initiative -->
<div class="col-span-12 md:col-span-8 row-span-1 relative bento-card overflow-hidden group">
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A cinematic black and white high-contrast photograph of a modern glass medical building in a dense urban environment, reflecting a clear sky. The image is sophisticated and architectural, emphasizing clean lines and institutional progress in a light-mode aesthetic with deep navy shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO8lEfNKrsKEre5R5mBf9MZ4nZpJ1LO0n6hos7cGPF5T8PDQ9jOA4c3LCmmOum_xvBZ_X-3YooAZ3Pnonj4f0war32xCCWrbthJgTE3mMlCUFH_AcBkiSxo6woFkQsy_97gluiJ9R7irRsE_2yKRN_Yv5L9XkqFrbwTkbTCtde9OdMemAmqdXywIMI8X1lWwtHVrOhMST0svXzo-E5WET2XDXQDPgqtHJPyQajPmtlvELDBpYPeyMrnbHQ13Sw4wXfWpXBku9ZODk"/>
<div class="absolute inset-0 academic-overlay"></div>
<div class="absolute bottom-0 left-0 p-unit-lg text-white">
<span class="inline-block px-3 py-1 bg-tertiary-fixed-dim text-primary font-label-md uppercase mb-unit-sm">Active Project</span>
<h3 class="font-headline-md text-headline-md">Urban Health Initiative</h3>
<p class="font-body-md text-white/80 max-w-md">Bridging the gap in tertiary care accessibility across metro-centers through collaborative staffing.</p>
</div>
</div>
<!-- Rural Diagnostic Network -->
<div class="col-span-12 md:col-span-4 row-span-2 relative bento-card border border-primary/10 overflow-hidden group">
<img class="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" data-alt="An artistic black and white close-up of a vintage microscope and medical research papers arranged on a mahogany desk in an old university library. The lighting is focused and warm, creating an atmosphere of deep scholarship and archival discovery, utilizing a navy and ivory color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHWeMo1k3e_1q-vZeaaju7VYzja3k7EGQ6xFcd3l4bB5tyzzaZB7fiB4UrBGMrzf9R0xAgYt3kOS579EbpcxhcxlANXVXfeiWzXHMtcyw5chUSLLFmkBJaWDzdyCQnoJgmjl-h43S2W2y6mNvigGH5f03S9aLV3vGiurLQrmk6ObyXzWC5L6IL_sJompT0_6wfmxwbslHfWUW_k6HbdB_WPTYKwte1caMqjJQxrsA7f_K-tOsQ3M64mzaXyTV91Qynps2Wa9Xq8ls"/>
<div class="absolute inset-0 bg-primary/20"></div>
<div class="absolute inset-x-0 bottom-0 p-unit-lg bg-surface flex flex-col justify-end">
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">Rural Diagnostic Network</h3>
<p class="font-body-sm text-on-surface-variant mb-unit-md">Implementing decentralized laboratory systems in five remote districts to reduce patient transit time by 60%.</p>
<div class="flex items-center gap-unit-xs text-primary font-label-lg group-hover:gap-unit-md transition-all">
                            EXPLORE DATA <span class="material-symbols-outlined">arrow_right_alt</span>
</div>
</div>
</div>
<!-- Academic Exchange -->
<div class="col-span-12 md:col-span-4 row-span-1 bg-primary text-white p-unit-lg flex flex-col justify-between bento-card">
<span class="material-symbols-outlined text-tertiary-fixed-dim text-[40px]">history_edu</span>
<div>
<h3 class="font-headline-sm text-headline-sm mb-unit-sm">Academic Exchange</h3>
<p class="font-body-sm text-white/70">Over 500 scholars participated in the 2023 Fellowship program, producing 42 peer-reviewed journals.</p>
</div>
</div>
<!-- Policy Reform -->
<div class="col-span-12 md:col-span-4 row-span-1 relative bento-card overflow-hidden group">
<img class="absolute inset-0 w-full h-full object-cover brightness-75" data-alt="A clean, minimalist composition of an ivory-colored fountain pen resting on a crisp white ledger book. The scene is bright and airy with high-key lighting, emphasizing an elite institutional aesthetic of law, order, and precise medical record-keeping. The style is professional and archival." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqXIfYBqu7bOfeYxiYaEN_pTQW1Cddh7I_u0oTG7gAOwQgpPZXwCU4yridQep24NlyBIZrhzJzJMe7Tuqaprd9JfMOcZ-CcbCpRdApJPetNRAV7T58hAL76brKMFF8gFkLxzwFAAgOGgoM_GxLNm9c26aWIQwvzsYkVbjnWc36wLkJwH9HJyE4wrUE9Zf6ZcNJRKBmu0E_QlA3PWP144P9zXi7jx3PeB2wya56zJz6v_yPpfYHTgokJHWprVuVnbRUv5pjzpTwVNs"/>
<div class="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/20 transition-colors"></div>
<div class="relative p-unit-lg h-full flex flex-col justify-between text-white">
<span class="material-symbols-outlined">gavel</span>
<h3 class="font-headline-sm text-headline-sm">Policy Reform Support</h3>
</div>
</div>
</div>
</div>
</section>
<!-- Success Stories / Testimonials -->
<section class="py-unit-2xl bg-surface-container-low overflow-hidden">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<div class="grid grid-cols-12 gap-gutter items-center">
<div class="col-span-12 lg:col-span-5">
<h2 class="font-headline-lg text-headline-lg text-primary mb-unit-lg">Voices of Success</h2>
<div class="space-y-unit-xl">
<div class="border-l-4 border-tertiary-fixed-dim pl-unit-lg py-unit-sm">
<p class="font-display-lg text-display-lg text-primary/10 absolute -mt-10 -ml-16 select-none">"</p>
<p class="font-headline-sm text-headline-sm italic text-on-surface mb-unit-md leading-relaxed">
                                "The integration of Dr. Ayuba's protocols transformed our regional hub from a reactive clinic to a proactive health powerhouse. The data density of the training was unmatched."
                            </p>
<div class="flex items-center gap-unit-md">
<div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Professional headshot of a distinguished male community leader, Chief El-Bakri, with a serene and authoritative expression. High-end portrait lighting, soft focus background, corporate editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWBEG76pYvSlk7VbQG6U8ia_-VYQkRx7kuO-RoUQMjuTTuAvG0ggmy6kw3dyDhMQG5hcHdSqZVD4I8Qn6XTzKri4e89nGEfppQiF5fO74ArvwW2qbgkvLGPeT4xo_0x-Bk0Ey17sPh_D1qBldR1jJic-SnAq0KmYabMkoMCqglBG-2IQNykFP59Ru4t7e7MYPGgIoXNgDYFbqfY2kUAsi8_hZOtw6O3jA-4A_zRw4OTo9OEy5FO8oVW9fnivl3zp746Vp9u7F2f60"/>
</div>
<div>
<p class="font-label-lg text-label-lg text-primary uppercase">Chief El-Bakri</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Director, Coastal Health Council</p>
</div>
</div>
</div>
<div class="border-l-4 border-primary pl-unit-lg py-unit-sm">
<p class="font-headline-sm text-headline-sm italic text-on-surface mb-unit-md leading-relaxed">
                                "Through the Institutional Grant program, we achieved a 100% digital transformation in patient records. This milestone defines our legacy for the next decade."
                            </p>
<div class="flex items-center gap-unit-md">
<div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Professional portrait of a focused female medical doctor, Dr. Sarah Jenkins, wearing a white coat and stethoscope. The background is a clean, modern medical facility with clinical but soft lighting, suggesting intelligence and empathy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyuMNx_wZNRZvJ8fvMcrpFS1GF1QiV3PbQgsf2I6qdTSIL3QpCCNTQZBmbFZeLJlQtix0D09quqHabkYHnGqFkyCdKTOkmH1gbWJZ7xBx6-wX68RxHZ0jJPX_lcBQo1zZZ5tIPlC5t9OIOwtwFcr25l3WHCxUsUr-fp2ipMzjvKr8Lqw7ts7b2CyF0wPE6_pou8eqpfhtd8QCiS0GRsOJv9hSpVDRwe4y3vwi6s5SWC8jdHwQMz9AtiSyfrBZR7MvLl0UlLiupljw"/>
</div>
<div>
<p class="font-label-lg text-label-lg text-primary uppercase">Dr. Sarah Jenkins</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">Lead Researcher, Metropolis Med-Tech</p>
</div>
</div>
</div>
</div>
</div>
<div class="col-span-12 lg:col-span-7 relative flex justify-end">
<div class="w-[500px] h-[600px] bg-primary relative overflow-hidden">
<img class="w-full h-full object-cover opacity-60" data-alt="A grand academic hall with tall mahogany bookshelves, large arched windows casting pillars of soft natural light, and a long dark wooden table. The mood is one of prestigious historical significance and silent intellectual pursuit, rendered in deep navy and gold tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKjE47S9IFkqF8d6wYJMUjfqS_kpINsn0mFmDsgNOs5h3IQSaS5U3oeH5IjvbmhQkYm-bJJcvpdeOU2Y9hX7PYzZ-L5rfkYWO_DCn9Gmz8_F2VZJlQY79Fr0EbFSGgqMIR6j9QAhwc_yphjjpAfd6TuiMhOlKJH7nAJjKNqBKT5zugYUSucToRZEla4EUOzfQCOg0lNFXym4YL6Ale-GS57vTMtO0Ourwzx-7kKDEo7CVUoh0fPr_g3C_iJrcXBdWlo0OLofBhDSo"/>
<div class="absolute inset-0 flex items-center justify-center">
<div class="w-24 h-24 border border-tertiary-fixed-dim flex items-center justify-center cursor-pointer hover:scale-110 transition-transform group">
<span class="material-symbols-outlined text-white text-[48px] group-hover:text-tertiary-fixed-dim">play_arrow</span>
</div>
</div>
<div class="absolute bottom-unit-lg right-unit-lg text-right text-white">
<p class="font-label-md uppercase tracking-widest text-tertiary-fixed-dim">Watch Documentary</p>
<p class="font-headline-sm">The Ayuba Legacy: 30 Years</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-primary-container py-unit-2xl border-t-4 border-tertiary-fixed-dim">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-unit-xl">
<div class="max-w-md">
<div class="font-headline-md text-headline-md text-white mb-unit-md">Dr. Ayuba's Corner</div>
<p class="font-body-sm text-body-sm text-on-primary-container mb-unit-lg">
                    A dedicated platform for the advancement of institutional medical practice, policy research, and generational health equity outcomes.
                </p>
<div class="flex gap-unit-md">
<a class="w-10 h-10 border border-on-primary-container/30 flex items-center justify-center text-white hover:border-tertiary-fixed-dim hover:text-tertiary-fixed-dim transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">share</span>
</a>
<a class="w-10 h-10 border border-on-primary-container/30 flex items-center justify-center text-white hover:border-tertiary-fixed-dim hover:text-tertiary-fixed-dim transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">mail</span>
</a>
</div>
</div>
<div class="grid grid-cols-2 md:grid-cols-2 gap-unit-xl">
<div class="flex flex-col gap-unit-sm">
<h4 class="font-label-lg text-label-lg text-white uppercase tracking-widest mb-unit-sm">Resources</h4>
<a class="font-body-sm text-on-primary-container hover:text-tertiary-fixed-dim transition-colors" href="#">Staff Directory</a>
<a class="font-body-sm text-on-primary-container hover:text-tertiary-fixed-dim transition-colors" href="#">Institutional Repository</a>
<a class="font-body-sm text-on-primary-container hover:text-tertiary-fixed-dim transition-colors" href="#">Grants &amp; Funding</a>
</div>
<div class="flex flex-col gap-unit-sm">
<h4 class="font-label-lg text-label-lg text-white uppercase tracking-widest mb-unit-sm">Legal</h4>
<a class="font-body-sm text-on-primary-container hover:text-tertiary-fixed-dim transition-colors" href="#">Privacy Policy</a>
<a class="font-body-sm text-on-primary-container hover:text-tertiary-fixed-dim transition-colors" href="#">Terms of Service</a>
<a class="font-body-sm text-on-primary-container hover:text-tertiary-fixed-dim transition-colors" href="#">Data Ethics</a>
</div>
</div>
</div>
<div class="max-w-[1440px] mx-auto px-margin-desktop mt-unit-2xl pt-unit-lg border-t border-white/5 flex justify-between items-center text-on-primary-container font-body-sm">
<p>© 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Excellence.</p>
<p class="hidden md:block">Established 1994 • Research Council Verified</p>
</div>
</footer>
<script>
        // Micro-interactions and reveals
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Apply reveal classes
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.classList.add('scroll-reveal');
                observer.observe(section);
            });
            
            // Animation for stats
            const stats = document.querySelectorAll('.font-display-lg');
            const animateStats = (el) => {
                const target = parseFloat(el.innerText.replace(/[^0-9.]/g, ''));
                const suffix = el.innerText.replace(/[0-9.]/g, '');
                let count = 0;
                const duration = 2000;
                const increment = target / (duration / 16);
                
                const update = () => {
                    count += increment;
                    if (count < target) {
                        el.innerText = (target > 100 ? Math.floor(count) : count.toFixed(1)) + suffix;
                        requestAnimationFrame(update);
                    } else {
                        el.innerText = target + suffix;
                    }
                };
                update();
            };

            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateStats(entry.target);
                        statsObserver.unobserve(entry.target);
                    }
                });
            });

            stats.forEach(stat => statsObserver.observe(stat));
        });
    </script>

      ` }} />
    </>
  );
}
