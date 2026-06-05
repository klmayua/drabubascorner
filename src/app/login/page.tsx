'use client';

import React, { useEffect, useRef } from 'react';

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Find all script tags inside the container
    const scripts = Array.from(containerRef.current.querySelectorAll('script'));
    
    // Execute scripts sequentially to preserve execution order dependencies (like Tailwind -> tailwind.config)
    const runScriptsSequentially = async (index = 0) => {
      if (index >= scripts.length) return;
      const oldScript = scripts[index];
      const newScript = document.createElement('script');
      
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      
      newScript.textContent = oldScript.textContent;
      
      if (newScript.src) {
        newScript.onload = () => runScriptsSequentially(index + 1);
        newScript.onerror = () => runScriptsSequentially(index + 1);
        oldScript.parentNode?.replaceChild(newScript, oldScript);
      } else {
        oldScript.parentNode?.replaceChild(newScript, oldScript);
        runScriptsSequentially(index + 1);
      }
    };
    
    runScriptsSequentially();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col min-h-screen" 
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
                    "on-error-container": "#93000a",
                    "on-tertiary-container": "#a87f0f",
                    "on-secondary-fixed-variant": "#304f13",
                    "on-secondary-container": "#4c6e2e",
                    "secondary-fixed-dim": "#acd287",
                    "on-primary-fixed": "#091b38",
                    "tertiary-fixed": "#ffdf9f",
                    "on-surface-variant": "#44474d",
                    "surface-container-low": "#f3f4f5",
                    "outline": "#75777e",
                    "on-primary-fixed-variant": "#374766",
                    "surface-container-high": "#e7e8e9",
                    "on-secondary": "#ffffff",
                    "primary-fixed": "#d7e2ff",
                    "on-error": "#ffffff",
                    "surface-container": "#edeeef",
                    "error-container": "#ffdad6",
                    "secondary-container": "#c7efa1",
                    "on-primary-container": "#7585a8",
                    "surface-container-lowest": "#ffffff",
                    "on-surface": "#191c1d",
                    "inverse-surface": "#2e3132",
                    "tertiary-fixed-dim": "#f1bf51",
                    "surface-dim": "#d9dadb",
                    "on-primary": "#ffffff",
                    "surface": "#f8f9fa",
                    "primary": "#00030f",
                    "primary-container": "#0b1d3a",
                    "on-tertiary-fixed-variant": "#5c4300",
                    "background": "#f8f9fa",
                    "tertiary": "#050300",
                    "inverse-primary": "#b6c7ec",
                    "on-background": "#191c1d",
                    "outline-variant": "#c5c6ce",
                    "secondary": "#476729",
                    "tertiary-container": "#281b00",
                    "on-tertiary": "#ffffff",
                    "inverse-on-surface": "#f0f1f2",
                    "on-tertiary-fixed": "#261a00",
                    "primary-fixed-dim": "#b6c7ec",
                    "surface-variant": "#e1e3e4",
                    "on-secondary-fixed": "#0d2000",
                    "surface-container-highest": "#e1e3e4",
                    "error": "#ba1a1a",
                    "secondary-fixed": "#c7efa1",
                    "surface-tint": "#4f5e7f",
                    "surface-bright": "#f8f9fa"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "unit-md": "16px",
                    "unit-lg": "24px",
                    "gutter": "32px",
                    "container-max": "1440px",
                    "margin-desktop": "80px",
                    "unit-2xl": "80px",
                    "unit-xs": "4px",
                    "unit-xl": "48px",
                    "unit-sm": "8px"
            },
            "fontFamily": {
                    "display-lg": ["Playfair Display"],
                    "headline-md": ["Playfair Display"],
                    "headline-sm": ["Playfair Display"],
                    "body-md": ["Inter"],
                    "body-sm": ["Inter"],
                    "label-lg": ["Inter"],
                    "display-xl": ["Playfair Display"],
                    "body-lg": ["Inter"],
                    "headline-lg": ["Playfair Display"],
                    "label-md": ["Inter"]
            },
            "fontSize": {
                    "display-lg": ["60px", {"lineHeight": "72px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "headline-md": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
                    "headline-sm": ["28px", {"lineHeight": "36px", "fontWeight": "500"}],
                    "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "400"}],
                    "body-sm": ["14px", {"lineHeight": "22px", "fontWeight": "400"}],
                    "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-xl": ["72px", {"lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-lg": ["20px", {"lineHeight": "32px", "fontWeight": "400"}],
                    "headline-lg": ["48px", {"lineHeight": "56px", "fontWeight": "600"}],
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "500"}]
            }
          },
        },
      }
    </script>
<style>
        body {
            background-color: #F8F9FA; /* Ivory-like clean background */
            -webkit-font-smoothing: antialiased;
        }
        .login-card {
            box-shadow: 0px 4px 20px rgba(11, 29, 58, 0.05);
            border: 1px solid rgba(0, 3, 15, 0.1);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .gold-accent-line {
            height: 2px;
            width: 40px;
            background-color: #f1bf51; /* Gold accent */
        }
        input:focus {
            outline: none;
            border-width: 2px !important;
            border-color: #0b1d3a !important;
        }
    </style>

<!-- Header Section -->
<header class="w-full flex justify-center py-unit-2xl bg-transparent">
<img alt="Dr. Ayuba's Corner Brand Logo" class="h-24 md:h-32 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6y5W2xGOv8fkD37td7IkRAowmLGLnWpQ6hqUYjBsyx0Z7qTmJTCk3JGtz7ehmt2J66vxgHHUFWaEIojc0RUUM-vLB7Mq02fybYShY4-2Ts7VIKS8gj1rZIwVXcJUCxPVuISPT4oS7DiZYJ9MsfSF6uCXr9I4_FFLI9lxpoB-5Z3K4zDys_IMsL154LD7VOZs7e06HfSU0RGU127hmV61AQkGLgB4H6Fe2MxXQkZHoFkNEuULybCrwiUBSIc-Pql6oTqiGQ0SNU5E"/>
</header>
<!-- Main Content: Login Canvas -->
<main class="flex-grow flex items-center justify-center px-4 mb-unit-2xl">
<div class="login-card bg-surface-container-lowest p-unit-xl md:p-unit-2xl w-full max-w-[480px] rounded-DEFAULT">
<!-- Contextual Branding -->
<div class="mb-unit-xl text-center">
<div class="flex justify-center mb-unit-sm">
<div class="gold-accent-line"></div>
</div>
<h1 class="font-headline-md text-headline-md text-primary mb-2">Institutional Access</h1>
<p class="font-body-sm text-body-sm text-on-surface-variant">Please authenticate using your faculty or student credentials.</p>
</div>
<!-- Login Form -->
<form action="#" class="space-y-unit-lg" method="POST">
<!-- Email Field -->
<div class="space-y-unit-xs">
<label class="font-label-lg text-label-lg text-primary block" for="email">Institutional Email</label>
<div class="relative">
<input class="w-full bg-surface-container-low border border-outline-variant px-unit-md py-4 font-body-md text-primary focus:bg-surface-container-lowest transition-all" id="email" name="email" placeholder="username@institution.edu" required="" type="email"/>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">alternate_email</span>
</div>
</div>
<!-- Password Field -->
<div class="space-y-unit-xs">
<div class="flex justify-between items-center">
<label class="font-label-lg text-label-lg text-primary" for="password">Password</label>
<a class="font-label-md text-label-md text-tertiary-fixed-variant hover:underline decoration-tertiary-fixed-dim" href="#">Forgot Password?</a>
</div>
<div class="relative">
<input class="w-full bg-surface-container-low border border-outline-variant px-unit-md py-4 font-body-md text-primary focus:bg-surface-container-lowest transition-all" id="password" name="password" placeholder="••••••••" required="" type="password"/>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60">lock</span>
</div>
</div>
<!-- Remember Me & Policy -->
<div class="flex items-center space-x-3">
<input class="h-4 w-4 border-outline-variant text-primary focus:ring-primary rounded-sm cursor-pointer" id="remember" name="remember" type="checkbox"/>
<label class="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none" for="remember">Remember this device for 30 days</label>
</div>
<!-- Primary Action -->
<div class="pt-unit-md">
<button class="w-full bg-primary-container text-on-primary border-b-4 border-tertiary-fixed-dim py-5 font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary transition-all active:scale-[0.98] active:border-b-0 shadow-lg" type="submit">
                        Sign In
                    </button>
</div>
</form>
<!-- Support Note -->
<div class="mt-unit-xl border-t border-outline-variant pt-unit-md text-center">
<p class="font-body-sm text-body-sm text-on-surface-variant">
                    Technical issues? <a class="text-primary font-semibold hover:underline" href="#">Contact Institutional Support</a>
</p>
</div>
</div>
</main>
<!-- Footer Section -->
<footer class="bg-primary-container py-unit-lg mt-auto">
<div class="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-unit-md">
<p class="font-body-sm text-body-sm text-on-primary-container">
                © 2024 Dr. Ayuba's Corner. Intellectual Property of the Institution.
            </p>
<div class="flex space-x-unit-lg">
<a class="font-label-lg text-label-lg text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all underline decoration-tertiary-fixed-dim decoration-1 underline-offset-4" href="#">
                    Institutional Privacy
                </a>
<a class="font-label-lg text-label-lg text-on-primary-container opacity-80 hover:opacity-100 hover:text-tertiary-fixed transition-all underline decoration-tertiary-fixed-dim decoration-1 underline-offset-4" href="#">
                    Terms of Service
                </a>
</div>
</div>
</footer>
<!-- Interactive Layer -->
<script>
        // Subtle micro-interaction for the sign-in button
        const loginBtn = document.querySelector('button[type="submit"]');
        loginBtn.addEventListener('mouseenter', () => {
            loginBtn.style.transform = 'translateY(-2px)';
        });
        loginBtn.addEventListener('mouseleave', () => {
            loginBtn.style.transform = 'translateY(0)';
        });

        // Focus field logic
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.querySelector('.material-symbols-outlined').style.opacity = '1';
                input.parentElement.querySelector('.material-symbols-outlined').style.color = '#0b1d3a';
            });
            input.addEventListener('blur', () => {
                input.parentElement.querySelector('.material-symbols-outlined').style.opacity = '0.6';
                input.parentElement.querySelector('.material-symbols-outlined').style.color = '';
            });
        });
    </script>

      ` }} />
    </div>
  );
}
