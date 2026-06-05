import React from 'react';

export const metadata = {
  title: "Podcast Platform (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-background text-on-background font-body-md selection:bg-on-tertiary-container selection:text-white" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&amp;family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
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
                      "secondary-container": "#c7efa1"
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .diamond-bullet::before {
            content: "◆";
            color: #a87f0f;
            margin-right: 0.5rem;
            font-size: 0.75rem;
        }
        .editorial-shadow {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
        }
        .max-w-max-width {
            max-width: 1440px;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- Top Navigation Bar -->
<header class="w-full top-0 sticky z-50 bg-surface border-b border-outline-variant">
<div class="max-w-max-width mx-auto px-margin-desktop flex justify-between items-center h-20">
<div class="flex items-center gap-unit-md">
<img alt="Dr. Ayuba's Corner" class="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBakJIFgTScVI66asZ-xJcOmkht13d8rX84MYLqyVWxK4gSb3nDIvuY4yIy4Vw2qJrOyWmx7UDzdx-UEOGLa3PQ0ospji8eg_SANMkv4fNoUsEg3sMkv7oabjaNvAFc0KOyCO7-RxMIPlK3RoqzEhhGi15JDLHd0zPy-Py--4Q75gQmVmQTRcQdIRzN1jaTEqKLRm3MvNyVPnVdpqiR3qhGB8A3RgGrSV5PSMoJC6Jsl5qRQ843vpD1-xTD3Jxe6x4P8kdiwEK1-Y">
</div>
<nav class="hidden md:flex gap-unit-lg items-center">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Articles</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Videos</a>
<a class="font-body-md text-body-md text-primary font-bold border-b-2 border-on-tertiary-container pb-1" href="#">Podcast</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Community</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Courses</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Marketplace</a>
</nav>
<div class="flex items-center gap-unit-md">
<div class="relative group">
<input class="bg-surface-container border border-outline-variant px-unit-md py-unit-xs rounded-full focus:outline-none focus:border-primary transition-all w-48 focus:w-64" placeholder="Search archives..." type="text">
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline">search</span>
</div>
<button class="flex items-center gap-unit-xs text-primary font-label-lg">
<span class="material-symbols-outlined">account_circle</span>
<span>Sign In</span>
</button>
</div>
</div>
</header>
<main class="max-w-max-width mx-auto px-margin-desktop py-unit-xl">
<!-- Hero Section: Featured Series -->
<section class="mb-unit-2xl">
<div class="grid grid-cols-12 gap-gutter items-stretch">
<div class="col-span-12 lg:col-span-8 bg-primary-container text-white p-unit-xl rounded-lg flex flex-col justify-center relative overflow-hidden">
<div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0); background-size: 24px 24px;"></div>
<div class="relative z-10">
<span class="font-label-lg text-label-lg text-tertiary-fixed uppercase tracking-widest mb-unit-sm block">Featured Series</span>
<h1 class="font-display-lg text-display-lg mb-unit-md">The Elder Discourse</h1>
<p class="font-body-lg text-body-lg text-primary-fixed mb-unit-lg max-w-2xl">
                            Unveiling centuries of indigenous wisdom through modern intellectual lenses. Join Dr. Ayuba as he explores the intersection of heritage and high-stakes leadership.
                        </p>
<div class="flex gap-unit-md">
<button class="bg-secondary text-white px-unit-lg py-unit-md rounded-lg font-label-lg flex items-center gap-unit-xs hover:scale-105 transition-transform">
<span class="material-symbols-outlined">play_arrow</span>
                                LISTEN NOW
                            </button>
<button class="border border-tertiary-fixed text-tertiary-fixed px-unit-lg py-unit-md rounded-lg font-label-lg hover:bg-tertiary-fixed hover:text-primary-container transition-all">
                                VIEW SERIES
                            </button>
</div>
</div>
</div>
<!-- Meet the Host Sidebar -->
<div class="col-span-12 lg:col-span-4 bg-surface border border-outline-variant p-unit-lg rounded-lg flex flex-col items-center text-center editorial-shadow">
<div class="w-48 h-48 rounded-full overflow-hidden border-4 border-on-tertiary-container mb-unit-md">
<img alt="Dr. Ayuba" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmT7Zk5gjXba1wIAnpi561kzCbLKH7ccp8Dh1RMTKBjIPeV0PJDQti1VhuU3PxhoX12kGkbxzI8s3yScI7oJbsN1FXxn3pKpdlKEAy2Je2Y5GWfSFr4Gx9gbXK6bobP_DJUGShrXWqnmxY4u4UVRy7zRmtJsrzbp93NsNgOX2f-Ggfw82TJnc1HXfIrNBPzgDpy5jow_kUOUlxlaWj8--mdyRb-Vs6OghtIAdStjm2Ra6bKJfE-P4kPcP85h_nKTmzLrokk1cbRRk">
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-xs">Meet Your Host</h3>
<p class="font-label-lg text-label-lg text-on-tertiary-container italic mb-unit-sm">Dr. Ayuba, Institutional Lead</p>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg">
                        A scholar dedicated to bridging the gap between traditional African governance structures and global modern administration.
                    </p>
<div class="w-full h-px bg-outline-variant mb-unit-md"></div>
<div class="flex justify-center gap-unit-md">
<a class="text-primary hover:text-on-tertiary-container transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
<a class="text-primary hover:text-on-tertiary-container transition-colors" href="#"><span class="material-symbols-outlined">mail</span></a>
<a class="text-primary hover:text-on-tertiary-container transition-colors" href="#"><span class="material-symbols-outlined">rss_feed</span></a>
</div>
</div>
</div>
</section>
<!-- Episode Filters -->
<section class="mb-unit-xl">
<div class="flex flex-col md:flex-row justify-between items-end gap-unit-md pb-unit-md border-b border-outline-variant">
<div>
<h2 class="font-headline-md text-headline-md text-primary mb-unit-xs">Recent Episodes</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Exploring the intellectual frontier of the African diaspora.</p>
</div>
<div class="flex gap-unit-sm">
<button class="px-unit-md py-unit-xs bg-primary text-white rounded-lg font-label-md">All</button>
<button class="px-unit-md py-unit-xs bg-surface-container-high text-on-surface-variant rounded-lg font-label-md hover:bg-outline-variant">Wisdom</button>
<button class="px-unit-md py-unit-xs bg-surface-container-high text-on-surface-variant rounded-lg font-label-md hover:bg-outline-variant">Health</button>
<button class="px-unit-md py-unit-xs bg-surface-container-high text-on-surface-variant rounded-lg font-label-md hover:bg-outline-variant">Wealth</button>
</div>
</div>
</section>
<!-- Episodes Grid -->
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-unit-2xl">
<!-- Episode Card 1 -->
<article class="bg-surface border border-outline-variant p-unit-lg rounded-lg hover:border-on-tertiary-container transition-all group flex flex-col">
<div class="flex justify-between items-start mb-unit-md">
<span class="px-unit-sm py-unit-xs bg-secondary-container text-on-secondary-fixed-variant font-label-md rounded text-[10px] uppercase tracking-wider">Wisdom</span>
<span class="text-on-surface-variant font-label-md flex items-center gap-1">
<span class="material-symbols-outlined !text-sm">schedule</span> 45 min
                    </span>
</div>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm leading-tight group-hover:text-on-tertiary-container transition-colors">The Architecture of Silence: Navigating Corporate Noise</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-unit-lg">
                    In this session, we dissect the strategic value of calculated pauses in institutional negotiation.
                </p>
<div class="flex items-center justify-between mt-auto pt-unit-md border-t border-surface-container-highest">
<a class="text-on-tertiary-container font-label-lg flex items-center gap-1 hover:underline underline-offset-4" href="#">
<span class="material-symbols-outlined">description</span> Read Transcript
                    </a>
<button class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-secondary transition-colors">
<span class="material-symbols-outlined">play_arrow</span>
</button>
</div>
</article>
<!-- Episode Card 2 -->
<article class="bg-surface border border-outline-variant p-unit-lg rounded-lg hover:border-on-tertiary-container transition-all group flex flex-col">
<div class="flex justify-between items-start mb-unit-md">
<span class="px-unit-sm py-unit-xs bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md rounded text-[10px] uppercase tracking-wider">Health</span>
<span class="text-on-surface-variant font-label-md flex items-center gap-1">
<span class="material-symbols-outlined !text-sm">schedule</span> 52 min
                    </span>
</div>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm leading-tight group-hover:text-on-tertiary-container transition-colors">Indigenous Nutrition &amp; High-Performance Biology</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-unit-lg">
                    Analyzing the biochemical impact of ancient dietary habits on contemporary neurological health.
                </p>
<div class="flex items-center justify-between mt-auto pt-unit-md border-t border-surface-container-highest">
<a class="text-on-tertiary-container font-label-lg flex items-center gap-1 hover:underline underline-offset-4" href="#">
<span class="material-symbols-outlined">description</span> Read Transcript
                    </a>
<button class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-secondary transition-colors">
<span class="material-symbols-outlined">play_arrow</span>
</button>
</div>
</article>
<!-- Episode Card 3 -->
<article class="bg-surface border border-outline-variant p-unit-lg rounded-lg hover:border-on-tertiary-container transition-all group flex flex-col">
<div class="flex justify-between items-start mb-unit-md">
<span class="px-unit-sm py-unit-xs bg-primary-fixed text-on-primary-fixed-variant font-label-md rounded text-[10px] uppercase tracking-wider">Wealth</span>
<span class="text-on-surface-variant font-label-md flex items-center gap-1">
<span class="material-symbols-outlined !text-sm">schedule</span> 38 min
                    </span>
</div>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm leading-tight group-hover:text-on-tertiary-container transition-colors">Generational Equity in Traditional Kingdoms</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-unit-lg">
                    A deep dive into inheritance models that sustain legacy across multiple centuries.
                </p>
<div class="flex items-center justify-between mt-auto pt-unit-md border-t border-surface-container-highest">
<a class="text-on-tertiary-container font-label-lg flex items-center gap-1 hover:underline underline-offset-4" href="#">
<span class="material-symbols-outlined">description</span> Read Transcript
                    </a>
<button class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-secondary transition-colors">
<span class="material-symbols-outlined">play_arrow</span>
</button>
</div>
</article>
<!-- Episode Card 4 -->
<article class="bg-surface border border-outline-variant p-unit-lg rounded-lg hover:border-on-tertiary-container transition-all group flex flex-col">
<div class="flex justify-between items-start mb-unit-md">
<span class="px-unit-sm py-unit-xs bg-secondary-container text-on-secondary-fixed-variant font-label-md rounded text-[10px] uppercase tracking-wider">Wisdom</span>
<span class="text-on-surface-variant font-label-md flex items-center gap-1">
<span class="material-symbols-outlined !text-sm">schedule</span> 60 min
                    </span>
</div>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm leading-tight group-hover:text-on-tertiary-container transition-colors">The Philosophy of the African Square</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-unit-lg">
                    Reviewing community governance and consensus building as a framework for modern startups.
                </p>
<div class="flex items-center justify-between mt-auto pt-unit-md border-t border-surface-container-highest">
<a class="text-on-tertiary-container font-label-lg flex items-center gap-1 hover:underline underline-offset-4" href="#">
<span class="material-symbols-outlined">description</span> Read Transcript
                    </a>
<button class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-secondary transition-colors">
<span class="material-symbols-outlined">play_arrow</span>
</button>
</div>
</article>
<!-- Episode Card 5 -->
<article class="bg-surface border border-outline-variant p-unit-lg rounded-lg hover:border-on-tertiary-container transition-all group flex flex-col">
<div class="flex justify-between items-start mb-unit-md">
<span class="px-unit-sm py-unit-xs bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md rounded text-[10px] uppercase tracking-wider">Health</span>
<span class="text-on-surface-variant font-label-md flex items-center gap-1">
<span class="material-symbols-outlined !text-sm">schedule</span> 42 min
                    </span>
</div>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm leading-tight group-hover:text-on-tertiary-container transition-colors">Mental Fortitude: The Griot's Discipline</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-unit-lg">
                    Mnemonic techniques and mental clarity exercises passed down through oral historians.
                </p>
<div class="flex items-center justify-between mt-auto pt-unit-md border-t border-surface-container-highest">
<a class="text-on-tertiary-container font-label-lg flex items-center gap-1 hover:underline underline-offset-4" href="#">
<span class="material-symbols-outlined">description</span> Read Transcript
                    </a>
<button class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-secondary transition-colors">
<span class="material-symbols-outlined">play_arrow</span>
</button>
</div>
</article>
<!-- Episode Card 6 -->
<article class="bg-surface border border-outline-variant p-unit-lg rounded-lg hover:border-on-tertiary-container transition-all group flex flex-col">
<div class="flex justify-between items-start mb-unit-md">
<span class="px-unit-sm py-unit-xs bg-primary-fixed text-on-primary-fixed-variant font-label-md rounded text-[10px] uppercase tracking-wider">Wealth</span>
<span class="text-on-surface-variant font-label-md flex items-center gap-1">
<span class="material-symbols-outlined !text-sm">schedule</span> 55 min
                    </span>
</div>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-sm leading-tight group-hover:text-on-tertiary-container transition-colors">Trans-Saharan Trade: Lessons for Modern Logistics</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant flex-grow mb-unit-lg">
                    Decoding the economic resilience and networking strategies of historical trade caravans.
                </p>
<div class="flex items-center justify-between mt-auto pt-unit-md border-t border-surface-container-highest">
<a class="text-on-tertiary-container font-label-lg flex items-center gap-1 hover:underline underline-offset-4" href="#">
<span class="material-symbols-outlined">description</span> Read Transcript
                    </a>
<button class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-secondary transition-colors">
<span class="material-symbols-outlined">play_arrow</span>
</button>
</div>
</article>
</section>
<!-- CTA Section -->
<section class="bg-surface border border-outline p-unit-xl rounded-lg text-center editorial-shadow">
<h2 class="font-headline-md text-headline-md text-primary mb-unit-md">Never Miss a Discourse</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-unit-xl max-w-2xl mx-auto">
                Subscribe to our institutional newsletter to receive exclusive academic citations and supplementary readings for every episode.
            </p>
<form class="flex flex-col md:flex-row gap-unit-md justify-center max-w-xl mx-auto">
<input class="flex-grow bg-white border border-outline-variant px-unit-lg py-unit-md rounded-lg focus:border-on-tertiary-container outline-none font-body-md" placeholder="Institutional Email" type="email">
<button class="bg-primary text-white px-unit-xl py-unit-md rounded-lg font-label-lg hover:bg-on-tertiary-container transition-colors">SUBSCRIBE</button>
</form>
</section>
</main>
<!-- Institutional Footer -->
<footer class="w-full bg-primary-container text-white mt-unit-2xl">
<div class="max-w-max-width mx-auto px-margin-desktop py-unit-2xl grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div class="flex flex-col gap-unit-md">
<img alt="Dr. Ayuba's Corner" class="h-12 w-auto object-contain brightness-0 invert self-start" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBakJIFgTScVI66asZ-xJcOmkht13d8rX84MYLqyVWxK4gSb3nDIvuY4yIy4Vw2qJrOyWmx7UDzdx-UEOGLa3PQ0ospji8eg_SANMkv4fNoUsEg3sMkv7oabjaNvAFc0KOyCO7-RxMIPlK3RoqzEhhGi15JDLHd0zPy-Py--4Q75gQmVmQTRcQdIRzN1jaTEqKLRm3MvNyVPnVdpqiR3qhGB8A3RgGrSV5PSMoJC6Jsl5qRQ843vpD1-xTD3Jxe6x4P8kdiwEK1-Y">
<p class="font-body-sm text-body-sm opacity-80 leading-relaxed">
                    The intersection of intellectual depth and historical legacy. Curating the future through the preservation of past wisdom.
                </p>
</div>
<div class="flex flex-col gap-unit-md">
<h5 class="font-label-lg text-label-lg text-tertiary-fixed border-b border-primary-fixed-dim/20 pb-2">Navigation</h5>
<ul class="flex flex-col gap-2 font-body-sm opacity-80">
<li class="hover:text-tertiary-fixed transition-colors"><a href="#">Articles Archive</a></li>
<li class="hover:text-tertiary-fixed transition-colors text-secondary-fixed font-bold underline"><a href="#">Podcast Home</a></li>
<li class="hover:text-tertiary-fixed transition-colors"><a href="#">Community Portal</a></li>
<li class="hover:text-tertiary-fixed transition-colors"><a href="#">Courses &amp; Faculty</a></li>
</ul>
</div>
<div class="flex flex-col gap-unit-md">
<h5 class="font-label-lg text-label-lg text-tertiary-fixed border-b border-primary-fixed-dim/20 pb-2">Institutional</h5>
<ul class="flex flex-col gap-2 font-body-sm opacity-80">
<li class="hover:text-tertiary-fixed transition-colors"><a href="#">Faculty Directory</a></li>
<li class="hover:text-tertiary-fixed transition-colors"><a href="#">Institutional Research</a></li>
<li class="hover:text-tertiary-fixed transition-colors"><a href="#">Ethics &amp; Privacy</a></li>
<li class="hover:text-tertiary-fixed transition-colors"><a href="#">Contact Us</a></li>
</ul>
</div>
<div class="flex flex-col gap-unit-md">
<h5 class="font-label-lg text-label-lg text-tertiary-fixed border-b border-primary-fixed-dim/20 pb-2">Newsletter</h5>
<p class="font-body-sm opacity-80">Subscribe for executive summaries.</p>
<div class="flex gap-2">
<input class="bg-white/10 border border-white/20 px-3 py-2 rounded text-sm w-full focus:outline-none focus:border-tertiary-fixed" type="text">
<button class="bg-tertiary-fixed text-primary px-3 py-2 rounded font-label-md hover:scale-105 transition-transform"><span class="material-symbols-outlined">send</span></button>
</div>
</div>
</div>
<div class="max-w-max-width mx-auto px-margin-desktop py-unit-md border-t border-white/10 flex justify-between items-center text-[12px] opacity-60">
<p>© 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.</p>
<div class="flex gap-unit-lg">
<a class="hover:underline" href="#">Privacy Policy</a>
<a class="hover:underline" href="#">Terms of Service</a>
<a class="hover:underline" href="#">Sitemap</a>
</div>
</div>
</footer>
<script>
        // Micro-interaction: Active state handling and hover effects
        document.querySelectorAll('article').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    </script>

      ` }} />
    </div>
  );
}
