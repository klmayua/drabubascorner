'use client';

import React, { useEffect, useRef } from 'react';




export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      
      
      <main ref={containerRef} className="animate-fade-in-up flex-grow">
        <div dangerouslySetInnerHTML={{ __html: "<!-- Header Section -->\n\n<!-- Main Content: Login Canvas -->\n<main class=\"flex-grow flex items-center justify-center px-4 mb-unit-2xl\">\n<div class=\"login-card bg-surface-container-lowest p-unit-xl md:p-unit-2xl w-full max-w-[480px] rounded-DEFAULT\">\n<!-- Contextual Branding -->\n<div class=\"mb-unit-xl text-center\">\n<div class=\"flex justify-center mb-unit-sm\">\n<div class=\"gold-accent-line\"></div>\n</div>\n<h1 class=\"font-headline-md text-headline-md text-primary mb-2\">Institutional Access</h1>\n<p class=\"font-body-sm text-body-sm text-on-surface-variant\">Please authenticate using your faculty or student credentials.</p>\n</div>\n<!-- Login Form -->\n<form action=\"#\" class=\"space-y-unit-lg\" method=\"POST\">\n<!-- Email Field -->\n<div class=\"space-y-unit-xs\">\n<label class=\"font-label-lg text-label-lg text-primary block\" for=\"email\">Institutional Email</label>\n<div class=\"relative\">\n<input class=\"w-full bg-surface-container-low border border-outline-variant px-unit-md py-4 font-body-md text-primary focus:bg-surface-container-lowest transition-all\" id=\"email\" name=\"email\" placeholder=\"username@institution.edu\" required=\"\" type=\"email\"/>\n<span class=\"material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60\">alternate_email</span>\n</div>\n</div>\n<!-- Password Field -->\n<div class=\"space-y-unit-xs\">\n<div class=\"flex justify-between items-center\">\n<label class=\"font-label-lg text-label-lg text-primary\" for=\"password\">Password</label>\n<a class=\"font-label-md text-label-md text-tertiary-fixed-variant hover:underline decoration-tertiary-fixed-dim\" href=\"/\">Forgot Password?</a>\n</div>\n<div class=\"relative\">\n<input class=\"w-full bg-surface-container-low border border-outline-variant px-unit-md py-4 font-body-md text-primary focus:bg-surface-container-lowest transition-all\" id=\"password\" name=\"password\" placeholder=\"••••••••\" required=\"\" type=\"password\"/>\n<span class=\"material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60\">lock</span>\n</div>\n</div>\n<!-- Remember Me & Policy -->\n<div class=\"flex items-center space-x-3\">\n<input class=\"h-4 w-4 border-outline-variant text-primary focus:ring-primary rounded-sm cursor-pointer\" id=\"remember\" name=\"remember\" type=\"checkbox\"/>\n<label class=\"font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none\" for=\"remember\">Remember this device for 30 days</label>\n</div>\n<!-- Primary Action -->\n<div class=\"pt-unit-md\">\n<button class=\"w-full bg-primary-container text-on-primary border-b-4 border-tertiary-fixed-dim py-5 font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary transition-all active:translate-y-0 active:border-b-0 shadow-lg\" type=\"submit\">\n                        Sign In\n                    </button>\n</div>\n</form>\n<!-- Support Note -->\n<div class=\"mt-unit-xl border-t border-outline-variant pt-unit-md text-center\">\n<p class=\"font-body-sm text-body-sm text-on-surface-variant\">\n                    Technical issues? <a class=\"text-primary font-semibold hover:underline\" href=\"/partners\">Contact Institutional Support</a>\n</p>\n</div>\n</div>\n</main>\n<!-- Footer Section -->\n\n<!-- Interactive Layer -->" }} />
      </main>
      
    </>
  );
}
