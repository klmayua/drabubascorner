import React from 'react';

export const metadata = {
  title: "Speaking & Consulting (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <div 
      className="bg-background text-on-background font-body-md" 
      style={ {} }
    >
      <div dangerouslySetInnerHTML={{ __html: `
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet">
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
        }
        .diamond-bullet {
            position: relative;
            padding-left: 24px;
        }
        .diamond-bullet::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
            width: 8px;
            height: 8px;
            background-color: #a87f0f;
        }
        .editorial-border {
            border-left: 1px solid #c5c6ce;
        }
    </style>
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar -->
<header class="w-full top-0 sticky bg-surface dark:bg-surface-container-lowest border-b border-outline-variant dark:border-outline z-50">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-20">
<div class="flex items-center gap-unit-md">
<img alt="Dr. Ayuba's Corner" class="h-14 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBakJIFgTScVI66asZ-xJcOmkht13d8rX84MYLqyVWxK4gSb3nDIvuY4yIy4Vw2qJrOyWmx7UDzdx-UEOGLa3PQ0ospji8eg_SANMkv4fNoUsEg3sMkv7oabjaNvAFc0KOyCO7-RxMIPlK3RoqzEhhGi15JDLHd0zPy-Py--4Q75gQmVmQTRcQdIRzN1jaTEqKLRm3MvNyVPnVdpqiR3qhGB8A3RgGrSV5PSMoJC6Jsl5qRQ843vpD1-xTD3Jxe6x4P8kdiwEK1-Y">
</div>
<nav class="hidden md:flex gap-unit-xl">
<a class="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors" href="#">Articles</a>
<a class="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors" href="#">Videos</a>
<a class="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors" href="#">Podcast</a>
<a class="text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors" href="#">Community</a>
<a class="text-primary dark:text-primary-fixed border-b-2 border-on-tertiary-container font-bold pb-1 font-label-lg text-label-lg" href="#">Consulting</a>
</nav>
<div class="flex items-center gap-unit-lg">
<button class="bg-primary text-on-primary px-unit-lg py-unit-sm font-label-lg text-label-lg rounded-DEFAULT hover:opacity-90 active:scale-95 transition-all">
                    Sign In
                </button>
<span class="material-symbols-outlined text-primary cursor-pointer text-2xl" data-icon="account_circle">account_circle</span>
</div>
</div>
</header>
<main>
<!-- High-Impact Hero Section -->
<section class="relative bg-surface-container-low overflow-hidden">
<div class="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter py-unit-2xl items-center">
<div class="md:col-span-7 space-y-unit-lg z-10">
<div class="inline-flex items-center gap-unit-xs px-3 py-1 bg-primary text-on-primary rounded-full">
<span class="material-symbols-outlined text-[14px]" data-icon="verified" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="font-label-md text-label-md uppercase tracking-widest">Global Academician &amp; Advisor</span>
</div>
<h1 class="font-display-xl text-display-xl text-primary leading-none">
                        Dr. Ayuba <br>
<span class="text-on-tertiary-container">MBBS, PhD, FRCP</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                        Pioneering the intersection of institutional healthcare strategy and grassroots medical education. Dr. Ayuba provides bespoke consulting and high-impact speaking engagements for the world's leading medical institutions.
                    </p>
<div class="flex flex-wrap gap-unit-md pt-unit-md">
<button class="bg-primary text-on-primary px-10 py-5 font-label-lg text-label-lg uppercase tracking-widest hover:bg-opacity-90 transition-all">Book Keynote</button>
<button class="border border-on-tertiary-container text-on-tertiary-container px-10 py-5 font-label-lg text-label-lg uppercase tracking-widest hover:bg-on-tertiary-container hover:text-white transition-all">Inquiry Services</button>
</div>
</div>
<div class="md:col-span-5 relative">
<div class="absolute -top-12 -right-12 w-64 h-64 bg-on-tertiary-container/10 rounded-full blur-3xl"></div>
<div class="relative border-4 border-white shadow-xl">
<img alt="Dr. Ayuba Portrait" class="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmT7Zk5gjXba1wIAnpi561kzCbLKH7ccp8Dh1RMTKBjIPeV0PJDQti1VhuU3PxhoX12kGkbxzI8s3yScI7oJbsN1FXxn3pKpdlKEAy2Je2Y5GWfSFr4Gx9gbXK6bobP_DJUGShrXWqnmxY4u4UVRy7zRmtJsrzbp93NsNgOX2f-Ggfw82TJnc1HXfIrNBPzgDpy5jow_kUOUlxlaWj8--mdyRb-Vs6OghtIAdStjm2Ra6bKJfE-P4kPcP85h_nKTmzLrokk1cbRRk">
</div>
</div>
</div>
</section>
<!-- Advisory Services: Bento Grid -->
<section class="py-unit-2xl bg-white">
<div class="max-w-[1440px] mx-auto px-margin-desktop">
<div class="mb-unit-xl border-b border-outline-variant pb-unit-md flex justify-between items-end">
<div>
<span class="font-label-lg text-label-lg text-on-tertiary-container uppercase tracking-widest">Consultancy</span>
<h2 class="font-headline-lg text-headline-lg text-primary">Advisory Services</h2>
</div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-xs text-right">Strategic transformation for healthcare systems and private academic institutions.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Service 1 -->
<div class="p-unit-xl border border-outline-variant hover:border-on-tertiary-container transition-colors group">
<div class="w-12 h-12 bg-surface-container flex items-center justify-center mb-unit-lg group-hover:bg-on-tertiary-container group-hover:text-white transition-all">
<span class="material-symbols-outlined" data-icon="account_balance">account_balance</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">Institutional Policy</h3>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">Developing robust governance frameworks for medical faculties and regional health authorities with a focus on ethical sustainability.</p>
</div>
<!-- Service 2 -->
<div class="p-unit-xl border border-outline-variant bg-primary text-on-primary group">
<div class="w-12 h-12 bg-white/10 flex items-center justify-center mb-unit-lg group-hover:bg-on-tertiary-container transition-all">
<span class="material-symbols-outlined text-white" data-icon="hub">hub</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-white mb-unit-sm">Clinical Strategy</h3>
<p class="font-body-md text-body-md text-on-primary-container opacity-90 leading-relaxed">Optimization of clinical workflows through data-driven academic research and real-world practitioner feedback loops.</p>
</div>
<!-- Service 3 -->
<div class="p-unit-xl border border-outline-variant hover:border-on-tertiary-container transition-colors group">
<div class="w-12 h-12 bg-surface-container flex items-center justify-center mb-unit-lg group-hover:bg-on-tertiary-container group-hover:text-white transition-all">
<span class="material-symbols-outlined" data-icon="school">school</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-primary mb-unit-sm">Curriculum Design</h3>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">End-to-end modernization of postgraduate medical education tracks, integrating modern technology and traditional clinical values.</p>
</div>
</div>
</div>
</section>
<!-- Keynote Topics: High-Density List -->
<section class="py-unit-2xl bg-surface-container-low">
<div class="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div>
<span class="font-label-lg text-label-lg text-on-tertiary-container uppercase tracking-widest">Speaking</span>
<h2 class="font-headline-lg text-headline-lg text-primary mb-unit-lg">Signature Keynote Topics</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-unit-xl">
                        Dr. Ayuba delivers powerful narratives that challenge conventional medical thinking, blending deep scientific rigor with engaging storytelling.
                    </p>
<div class="flex items-center gap-unit-md p-unit-lg bg-white border border-outline-variant">
<div class="flex-shrink-0">
<span class="material-symbols-outlined text-on-tertiary-container text-4xl" data-icon="download">download</span>
</div>
<div>
<h4 class="font-label-lg text-label-lg text-primary">Media Kit 2024</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Bio, headshots, and technical requirements (PDF, 12MB)</p>
</div>
<a class="ml-auto text-on-tertiary-container font-label-lg text-label-lg border-b border-on-tertiary-container pb-1 hover:text-primary transition-colors" href="#">Download</a>
</div>
</div>
<div class="editorial-border pl-gutter space-y-unit-xl">
<article class="relative">
<span class="absolute -left-10 top-2 font-display-lg text-on-tertiary-container/20">01</span>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-xs">The African Medical Renaissance</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Exploring how home-grown medical innovation is shaping the global health landscape of the next century.</p>
</article>
<article class="relative">
<span class="absolute -left-10 top-2 font-display-lg text-on-tertiary-container/20">02</span>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-xs">Ethics in the Era of AI Diagnosis</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Navigating the philosophical and practical challenges of machine-assisted medical decision making.</p>
</article>
<article class="relative">
<span class="absolute -left-10 top-2 font-display-lg text-on-tertiary-container/20">03</span>
<h4 class="font-headline-sm text-headline-sm text-primary mb-unit-xs">Leadership in Crisis Management</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Lessons from the frontlines of institutional healthcare during global health emergencies.</p>
</article>
</div>
</div>
</section>
<!-- Inquiry Form Section -->
<section class="py-unit-2xl bg-white border-t border-outline-variant">
<div class="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<div class="lg:col-span-4 bg-primary p-unit-xl text-on-primary">
<h2 class="font-headline-md text-headline-md text-white mb-unit-md">Direct Inquiry</h2>
<p class="font-body-md text-body-md opacity-80 mb-unit-xl">For urgent consulting requests or international speaking engagements, please provide detailed information.</p>
<ul class="space-y-unit-md">
<li class="flex gap-unit-md">
<span class="material-symbols-outlined text-on-tertiary-container" data-icon="mail">mail</span>
<span class="font-label-lg text-label-lg">office@ayubascorner.com</span>
</li>
<li class="flex gap-unit-md">
<span class="material-symbols-outlined text-on-tertiary-container" data-icon="location_on">location_on</span>
<span class="font-label-lg text-label-lg">Lagos • London • Geneva</span>
</li>
</ul>
</div>
<div class="lg:col-span-8 p-unit-xl border border-outline-variant bg-surface-container-low">
<form class="grid grid-cols-1 md:grid-cols-2 gap-unit-lg">
<div class="flex flex-col gap-unit-xs">
<label class="font-label-lg text-label-lg text-primary uppercase tracking-wider">Full Name</label>
<input class="bg-white border border-outline p-unit-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" type="text">
</div>
<div class="flex flex-col gap-unit-xs">
<label class="font-label-lg text-label-lg text-primary uppercase tracking-wider">Organization</label>
<input class="bg-white border border-outline p-unit-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Institution Name" type="text">
</div>
<div class="flex flex-col gap-unit-xs">
<label class="font-label-lg text-label-lg text-primary uppercase tracking-wider">Inquiry Type</label>
<select class="bg-white border border-outline p-unit-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
<option>Speaking Engagement</option>
<option>Institutional Advisory</option>
<option>Curriculum Consulting</option>
<option>Media Request</option>
</select>
</div>
<div class="flex flex-col gap-unit-xs">
<label class="font-label-lg text-label-lg text-primary uppercase tracking-wider">Proposed Date</label>
<input class="bg-white border border-outline p-unit-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" type="date">
</div>
<div class="md:col-span-2 flex flex-col gap-unit-xs">
<label class="font-label-lg text-label-lg text-primary uppercase tracking-wider">Brief Description</label>
<textarea class="bg-white border border-outline p-unit-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Please describe the scope of your request..." rows="4"></textarea>
</div>
<div class="md:col-span-2 pt-unit-md">
<button class="w-full bg-primary text-on-primary py-5 font-label-lg text-label-lg uppercase tracking-widest hover:opacity-90 transition-all flex justify-center items-center gap-unit-md" type="submit">
                                Send Inquiry
                                <span class="material-symbols-outlined text-[18px]" data-icon="send">send</span>
</button>
</div>
</form>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-auto bg-primary-container dark:bg-tertiary-container border-t border-outline-variant">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div class="md:col-span-1 space-y-unit-md">
<img alt="Dr. Ayuba's Corner" class="h-12 brightness-0 invert opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBakJIFgTScVI66asZ-xJcOmkht13d8rX84MYLqyVWxK4gSb3nDIvuY4yIy4Vw2qJrOyWmx7UDzdx-UEOGLa3PQ0ospji8eg_SANMkv4fNoUsEg3sMkv7oabjaNvAFc0KOyCO7-RxMIPlK3RoqzEhhGi15JDLHd0zPy-Py--4Q75gQmVmQTRcQdIRzN1jaTEqKLRm3MvNyVPnVdpqiR3qhGB8A3RgGrSV5PSMoJC6Jsl5qRQ843vpD1-xTD3Jxe6x4P8kdiwEK1-Y">
<p class="font-body-sm text-body-sm text-on-primary-container opacity-80">
                    Dedicated to medical excellence and academic leadership through strategic insight.
                </p>
</div>
<div>
<h5 class="font-label-lg text-label-lg text-white mb-unit-md uppercase tracking-widest">Navigation</h5>
<ul class="space-y-unit-sm">
<li><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Sitemap</a></li>
</ul>
</div>
<div>
<h5 class="font-label-lg text-label-lg text-white mb-unit-md uppercase tracking-widest">Institutional</h5>
<ul class="space-y-unit-sm">
<li><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Faculty Directory</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Institutional Research</a></li>
<li><a class="font-body-sm text-body-sm text-on-primary-container opacity-80 hover:opacity-100 transition-opacity" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h5 class="font-label-lg text-label-lg text-white mb-unit-md uppercase tracking-widest">Social Connection</h5>
<div class="flex gap-unit-md">
<span class="material-symbols-outlined text-white opacity-60 hover:opacity-100 cursor-pointer" data-icon="share">share</span>
<span class="material-symbols-outlined text-white opacity-60 hover:opacity-100 cursor-pointer" data-icon="public">public</span>
<span class="material-symbols-outlined text-white opacity-60 hover:opacity-100 cursor-pointer" data-icon="podcasts">podcasts</span>
</div>
</div>
</div>
<div class="max-w-[1440px] mx-auto px-margin-desktop py-unit-md border-t border-white/10">
<p class="font-body-sm text-body-sm text-on-primary-container opacity-60 text-center">
                © 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.
            </p>
</div>
</footer>
<script>
        // Micro-interactions for form focus states
        document.querySelectorAll('input, select, textarea').forEach(el => {
            el.addEventListener('focus', () => {
                el.parentElement.querySelector('label').classList.add('text-on-tertiary-container');
            });
            el.addEventListener('blur', () => {
                el.parentElement.querySelector('label').classList.remove('text-on-tertiary-container');
            });
        });

        // Simple scroll reveal effect
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

        document.querySelectorAll('section > div').forEach(section => {
            section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(section);
        });
    </script>

      ` }} />
    </div>
  );
}
