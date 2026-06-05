import React from 'react';

export const metadata = {
  title: "Member Profile & Portfolio (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-surface text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-lowest": "#ffffff",
                        "tertiary": "#050300",
                        "primary-container": "#0b1d3a",
                        "on-primary-container": "#7585a8",
                        "outline": "#75777e",
                        "surface-bright": "#f8f9fa",
                        "error": "#ba1a1a",
                        "on-tertiary-fixed-variant": "#5c4300",
                        "inverse-on-surface": "#f0f1f2",
                        "on-error-container": "#93000a",
                        "on-background": "#191c1d",
                        "primary-fixed-dim": "#b6c7ec",
                        "secondary": "#476729",
                        "surface": "#f8f9fa",
                        "background": "#f8f9fa",
                        "secondary-container": "#c7efa1",
                        "secondary-fixed": "#c7efa1",
                        "on-tertiary-container": "#a87f0f",
                        "tertiary-fixed-dim": "#f1bf51",
                        "surface-tint": "#4f5e7f",
                        "on-secondary-fixed-variant": "#304f13",
                        "on-primary": "#ffffff",
                        "on-error": "#ffffff",
                        "primary": "#00030f",
                        "tertiary-fixed": "#ffdf9f",
                        "surface-container-high": "#e7e8e9",
                        "on-tertiary": "#ffffff",
                        "error-container": "#ffdad6",
                        "on-secondary-fixed": "#0d2000",
                        "on-primary-fixed": "#091b38",
                        "inverse-primary": "#b6c7ec",
                        "on-primary-fixed-variant": "#374766",
                        "primary-fixed": "#d7e2ff",
                        "on-surface": "#191c1d",
                        "secondary-fixed-dim": "#acd287",
                        "tertiary-container": "#281b00",
                        "on-secondary": "#ffffff",
                        "surface-container-low": "#f3f4f5",
                        "on-tertiary-fixed": "#261a00",
                        "surface-container-highest": "#e1e3e4",
                        "on-surface-variant": "#44474d",
                        "surface-container": "#edeeef",
                        "inverse-surface": "#2e3132",
                        "surface-dim": "#d9dadb",
                        "surface-variant": "#e1e3e4",
                        "outline-variant": "#c5c6ce",
                        "on-secondary-container": "#4c6e2e"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "unit-md": "16px",
                        "container-max": "1440px",
                        "unit-sm": "8px",
                        "margin-desktop": "80px",
                        "unit-2xl": "80px",
                        "unit-lg": "24px",
                        "unit-xs": "4px",
                        "gutter": "32px",
                        "unit-xl": "48px"
                    },
                    "fontFamily": {
                        "display-xl": ["Playfair Display"],
                        "label-lg": ["Inter"],
                        "body-md": ["Inter"],
                        "body-lg": ["Inter"],
                        "display-lg": ["Playfair Display"],
                        "body-sm": ["Inter"],
                        "headline-md": ["Playfair Display"],
                        "label-md": ["Inter"],
                        "headline-sm": ["Playfair Display"],
                        "headline-lg": ["Playfair Display"]
                    },
                    "fontSize": {
                        "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
                        "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                        "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                        "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}],
                        "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                        "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .diamond-bullet::before {
            content: "◆";
            color: #a87f0f;
            font-size: 0.6rem;
            margin-right: 12px;
            vertical-align: middle;
        }
        .texture-bg {
            background-image: radial-gradient(#c5c6ce 0.5px, transparent 0.5px);
            background-size: 24px 24px;
            opacity: 0.15;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar -->
<header class="bg-surface fixed top-0 w-full z-50 border-b border-outline-variant opacity-100">
<div class="flex justify-between items-center h-24 w-full px-margin-desktop max-w-container-max mx-auto">
<div class="flex items-center">
<img alt="Dr. Ayuba's Corner Institutional Logo" class="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFoX-3dHftfPHI-hUUogU0PigoOfEtQvjlI_kQDoHlDV--sAaWFwmBCl9Ruv0r6Rk21YUkFaNik9WO3pR8Aqca2Rl_Plnwnw4waB7wBSFXvmnDadjjket30NsSi7ZkCaZkvrPtq2uxJYf50_zfZ-i1WYGZs_hr_oGDh1c8UvDHxkz-re-QDn2jsqfnRb0hyGH_t97531MUIqUORYdPofZjshwG5fDtu7JSmZ9trYJ_5lnrVHvhVBlihWws9pK1Wb24Gq7B7rnUl3o"/>
</div>
<nav class="hidden md:flex items-center space-x-unit-xl">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Archives</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Research</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed transition-colors duration-200" href="#">Lectures</a>
<a class="font-label-lg text-label-lg text-primary border-b-2 border-tertiary-fixed pb-1" href="#">Fellowship</a>
</nav>
<div class="flex items-center space-x-unit-md">
<span class="material-symbols-outlined text-primary cursor-pointer" data-icon="account_circle">account_circle</span>
</div>
</div>
</header>
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-screen z-40 flex flex-col bg-surface-container-low w-80 border-r border-outline-variant pt-32 hidden xl:flex">
<div class="px-unit-lg mb-unit-xl">
<h2 class="font-headline-sm text-headline-sm text-primary">Institutional Menu</h2>
<p class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mt-1">Academic Excellence</p>
</div>
<nav class="flex-1">
<a class="flex items-center py-unit-md font-label-lg text-label-lg text-on-surface-variant pl-4 hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-unit-md" data-icon="menu_book">menu_book</span>
                Archives
            </a>
<a class="flex items-center py-unit-md font-label-lg text-label-lg text-on-surface-variant pl-4 hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-unit-md" data-icon="science">science</span>
                Research
            </a>
<a class="flex items-center py-unit-md font-label-lg text-label-lg text-on-surface-variant pl-4 hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-unit-md" data-icon="school">school</span>
                Lectures
            </a>
<a class="flex items-center py-unit-md font-label-lg text-label-lg text-primary font-bold border-l-4 border-tertiary-fixed pl-4 bg-surface-container-highest translate-x-1" href="#">
<span class="material-symbols-outlined mr-unit-md" data-icon="account_balance">account_balance</span>
                Faculty
            </a>
<a class="flex items-center py-unit-md font-label-lg text-label-lg text-on-surface-variant pl-4 hover:bg-surface-container-highest transition-all group" href="#">
<span class="material-symbols-outlined mr-unit-md" data-icon="mail">mail</span>
                Contact
            </a>
</nav>
<div class="p-unit-lg border-t border-outline-variant/30">
<div class="bg-primary p-unit-md rounded">
<p class="text-on-primary font-body-sm text-body-sm opacity-80">System Status</p>
<p class="text-tertiary-fixed font-label-lg text-label-lg">Registry Active</p>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="xl:pl-80 pt-24 min-h-screen">
<div class="max-w-container-max mx-auto px-unit-lg md:px-margin-desktop py-unit-2xl">
<!-- Hero Profile Section -->
<section class="relative mb-unit-2xl">
<div class="absolute inset-0 texture-bg -z-10"></div>
<div class="flex flex-col md:flex-row items-center gap-unit-xl">
<div class="relative">
<div class="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-tertiary-fixed p-2 overflow-hidden bg-white">
<img alt="Academic Profile Portrait" class="w-full h-full object-cover rounded-full" data-alt="A professional close-up portrait of a scholarly man with a warm, intellectual expression. He is wearing a dark, well-tailored academic or corporate suit with a subtle pattern. The background is a soft, neutral studio gray, creating a high-end institutional feel. The lighting is balanced and sophisticated, emphasizing clear skin and professional maturity. The overall mood is one of authority and academic prestige." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVA3Q9HbZ2YRjRqWONYImhOOxW7xfzLTS3muclDITIqLY9qTpN31Kmetbk3vd_4VgZVfKg4p3CkRLmY4ukR4GQuiJhYZ1RsUWERuliIfFtoM6tvbEi4REvW7O5bjhlg_ndqhGvBTnalSkhfTwoZr_7-T9y31DAx14Jvpt_LKP6EsZp6QIA06rtnK4kNvw_GLV8QPs9_QxCgCnHy4mxvYUL8DUhkjiZil6bdjCndBNntqUbDdkn02Os13PjqDZB3AZvyHVaJtKo-Fg"/>
</div>
<div class="absolute bottom-4 right-4 bg-secondary text-on-secondary px-4 py-1 rounded-full font-label-md text-label-md shadow-lg">
                            Senior Fellow
                        </div>
</div>
<div class="flex-1 text-center md:text-left">
<h1 class="font-display-xl text-display-xl text-primary mb-2">Professor Ibrahim Ayuba</h1>
<p class="font-headline-sm text-headline-sm text-on-surface-variant italic mb-6">Distinguished Fellow of Institutional Archives &amp; Global Pedagogy</p>
<div class="flex flex-wrap justify-center md:justify-start gap-unit-md">
<div class="flex items-center text-on-surface-variant font-label-lg text-label-lg">
<span class="material-symbols-outlined mr-2 text-tertiary-fixed-dim" data-icon="location_on">location_on</span>
                                Cambridge Research Center
                            </div>
<div class="flex items-center text-on-surface-variant font-label-lg text-label-lg">
<span class="material-symbols-outlined mr-2 text-tertiary-fixed-dim" data-icon="verified">verified</span>
                                ID: FAC-AY-2024-001
                            </div>
</div>
</div>
</div>
</section>
<!-- Bento Grid of Credentials -->
<section class="mb-unit-2xl">
<div class="flex items-center justify-between mb-unit-lg">
<h2 class="font-headline-md text-headline-md text-primary border-l-4 border-secondary pl-4">Earned Credentials</h2>
<button class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary underline transition-all">View All Diplomas</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Credential 1 -->
<div class="bg-surface-container-lowest border border-primary/10 p-unit-xl flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
<div class="mb-unit-lg">
<span class="material-symbols-outlined text-4xl text-tertiary-fixed-dim mb-4" data-icon="military_tech">military_tech</span>
<h3 class="font-headline-sm text-headline-sm text-primary mb-2">Fellowship Excellence Award</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Granted for outstanding contributions to the 2023 Academic Repository Initiative.</p>
</div>
<div class="pt-unit-md border-t border-outline-variant/30 flex justify-between items-center">
<span class="font-label-md text-label-md text-secondary uppercase tracking-widest">Validated</span>
<span class="font-body-sm text-body-sm text-on-surface-variant opacity-60">Nov 2023</span>
</div>
</div>
<!-- Credential 2 -->
<div class="bg-surface-container-lowest border border-primary/10 p-unit-xl flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
<div class="mb-unit-lg">
<span class="material-symbols-outlined text-4xl text-tertiary-fixed-dim mb-4" data-icon="history_edu">history_edu</span>
<h3 class="font-headline-sm text-headline-sm text-primary mb-2">Master Archivist Certification</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Specialized training in the preservation of digital and physical historical datasets.</p>
</div>
<div class="pt-unit-md border-t border-outline-variant/30 flex justify-between items-center">
<span class="font-label-md text-label-md text-secondary uppercase tracking-widest">Level III</span>
<span class="font-body-sm text-body-sm text-on-surface-variant opacity-60">Jan 2024</span>
</div>
</div>
<!-- Credential 3 -->
<div class="bg-primary text-on-primary p-unit-xl flex flex-col justify-between group shadow-lg">
<div class="mb-unit-lg">
<span class="material-symbols-outlined text-4xl text-tertiary-fixed mb-4" data-icon="account_balance">account_balance</span>
<h3 class="font-headline-sm text-headline-sm mb-2">Faculty Board Chair</h3>
<p class="font-body-sm text-body-sm opacity-80">Appointed lead for the Curriculum Oversight Committee of Dr. Ayuba's Corner.</p>
</div>
<div class="pt-unit-md border-t border-white/10 flex justify-between items-center">
<span class="font-label-md text-label-md text-tertiary-fixed uppercase tracking-widest">Active Tenure</span>
<span class="font-body-sm text-body-sm opacity-60">2024 - 2026</span>
</div>
</div>
</div>
</section>
<!-- Authored Papers - Asymmetric Layout -->
<section class="mb-unit-2xl">
<div class="flex flex-col lg:flex-row gap-gutter">
<!-- Papers List -->
<div class="lg:w-2/3">
<div class="flex items-center mb-unit-lg">
<h2 class="font-headline-md text-headline-md text-primary border-l-4 border-secondary pl-4">Authored Papers</h2>
</div>
<div class="space-y-gutter">
<article class="p-unit-lg border border-primary/10 bg-white hover:border-tertiary-fixed-dim transition-colors cursor-pointer group">
<div class="flex justify-between items-start mb-2">
<h4 class="font-headline-sm text-headline-sm text-primary group-hover:text-tertiary-fixed-variant transition-colors">The Digital Renaissance: Archiving Intellectual Property in the AI Era</h4>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-md">Published in the *Global Academic Review*, Vol. 42. Exploring the intersection of traditional archiving and modern generative technologies.</p>
<div class="flex gap-4">
<span class="px-3 py-1 bg-surface-container-low font-label-md text-label-md text-primary rounded">Whitepaper</span>
<span class="px-3 py-1 bg-surface-container-low font-label-md text-label-md text-primary rounded">8,400 Citations</span>
</div>
</article>
<article class="p-unit-lg border border-primary/10 bg-white hover:border-tertiary-fixed-dim transition-colors cursor-pointer group">
<div class="flex justify-between items-start mb-2">
<h4 class="font-headline-sm text-headline-sm text-primary group-hover:text-tertiary-fixed-variant transition-colors">Pedagogical Frameworks for the 21st Century Fellowship</h4>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-unit-md">A foundational document defining the core mission of Dr. Ayuba's Corner educational ecosystem.</p>
<div class="flex gap-4">
<span class="px-3 py-1 bg-surface-container-low font-label-md text-label-md text-primary rounded">Journal</span>
<span class="px-3 py-1 bg-surface-container-low font-label-md text-label-md text-primary rounded">Faculty Choice</span>
</div>
</article>
</div>
</div>
<!-- Institutional Standing Sidebar (Within Content) -->
<div class="lg:w-1/3">
<div class="bg-surface-container border border-primary/5 p-unit-xl h-full">
<h3 class="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-unit-lg border-b border-outline-variant pb-2">Institutional Standing</h3>
<ul class="space-y-unit-md">
<li class="diamond-bullet font-body-md text-body-md text-on-surface-variant">Member since October 2018</li>
<li class="diamond-bullet font-body-md text-body-md text-on-surface-variant">Ethics Oversight Committee Member</li>
<li class="diamond-bullet font-body-md text-body-md text-on-surface-variant">Primary Mentor: Level IV Fellows</li>
<li class="diamond-bullet font-body-md text-body-md text-on-surface-variant">Global Conference Speaker 2024</li>
</ul>
<div class="mt-unit-xl">
<h3 class="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-unit-md border-b border-outline-variant pb-2">Next Milestone</h3>
<div class="w-full bg-surface-container-high h-2 mb-2">
<div class="bg-secondary h-full w-[85%]"></div>
</div>
<p class="font-label-md text-label-md text-on-surface-variant">85% to *Emeritus Fellow* Status</p>
</div>
<button class="w-full mt-unit-xl bg-primary text-on-primary py-unit-md font-label-lg text-label-lg hover:bg-primary-container transition-colors">
                                Request Academic Collaboration
                            </button>
</div>
</div>
</div>
</section>
</div>
</main>
<!-- Footer -->
<footer class="bg-primary dark:bg-surface-container-lowest w-full mt-auto">
<div class="w-full py-unit-2xl px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto border-t border-tertiary-fixed">
<div class="mb-unit-lg md:mb-0">
<p class="font-headline-md text-headline-md text-on-primary">Dr. Ayuba's Corner</p>
<p class="font-body-sm text-body-sm text-on-primary/70 mt-2">© 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Archives.</p>
</div>
<div class="flex flex-wrap justify-center gap-unit-xl">
<a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Accessibility</a>
<a class="font-body-sm text-body-sm text-on-primary/70 hover:text-tertiary-fixed transition-colors" href="#">Archive Index</a>
</div>
</div>
</footer>
<script>
        // Micro-interactions for hovering cards
        document.querySelectorAll('article, .bg-surface-container-lowest').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0px)';
            });
        });

        // Sticky header transition
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('shadow-md');
                header.classList.remove('opacity-100');
                header.style.backgroundColor = 'rgba(248, 249, FA, 0.95)';
                header.style.backdropFilter = 'blur(8px)';
            } else {
                header.classList.remove('shadow-md');
                header.style.backgroundColor = '#f8f9fa';
                header.style.backdropFilter = 'none';
            }
        });
    </script>

      ` }} />
    </div>
  );
}
