import React from 'react';

export const metadata = {
  title: "Procurement & Checkout (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .diamond-list {
            list-style: none;
        }
        .diamond-list li::before {
            content: "◆";
            color: #f1bf51; /* tertiary-fixed-dim / Gold */
            display: inline-block;
            width: 1.5em;
            margin-left: -1.5em;
            font-size: 0.75rem;
        }
        .tonal-layer {
            background-color: #ffffff;
            border: 1px solid rgba(0, 3, 15, 0.1);
        }
    

      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- Top Navigation Header - Transactional Mode (Simplified) -->
<header class="w-full top-0 sticky bg-surface border-b border-outline-variant z-50">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-center items-center h-20">
<img alt="Institutional Logo" class="h-12 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6y5W2xGOv8fkD37td7IkRAowmLGLnWpQ6hqUYjBsyx0Z7qTmJTCk3JGtz7ehmt2J66vxgHHUFWaEIojc0RUUM-vLB7Mq02fybYShY4-2Ts7VIKS8gj1rZIwVXcJUCxPVuISPT4oS7DiZYJ9MsfSF6uCXr9I4_FFLI9lxpoB-5Z3K4zDys_IMsL154LD7VOZs7e06HfSU0RGU127hmV61AQkGLgB4H6Fe2MxXQkZHoFkNEuULybCrwiUBSIc-Pql6oTqiGQ0SNU5E"/>
</div>
</header>
<main class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl">
<div class="grid grid-cols-12 gap-gutter">
<!-- Left Column: Checkout Details (8 columns) -->
<div class="col-span-12 lg:col-span-8 flex flex-col gap-unit-xl">
<!-- Section: Item Summary -->
<section>
<h2 class="font-headline-sm text-headline-sm text-primary mb-unit-lg">Procurement Summary</h2>
<div class="tonal-layer p-unit-lg flex gap-unit-lg items-start">
<div class="w-32 h-40 bg-surface-container-high flex-shrink-0 flex items-center justify-center overflow-hidden">
<img class="w-full h-full object-cover grayscale opacity-80" data-alt="A sophisticated digital report cover for a medical research institution. The cover features minimalist architectural lines and deep navy blue typography. The lighting is cold and professional, suggesting a scholarly environment. The overall aesthetic is elite, archival, and deeply intellectual." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxwSwHGoXxZILFJXTWSaByvkDNTpPS0exmunFaPcYd4SmD54beJpSCAY1nSGtAF5WqDM8Gz9IHZxR9XfHR3UJDbPDDNJVP57AmT5fZmi0nL0HjPHt2CDRLfUy5Sz4QV12bVDxFvM2VCv5fyw2MqhySEeANNlZp0nKG_rEReR329OIL88W_NevrvJE7fF8QOXm2z2oW-1AW19gZZEHaHjbnbR_PF9jX4E5vDpZRkPN49DQudKmw4_UhS_kU9nH2_tEvoaL32K5rPvM"/>
</div>
<div class="flex-grow">
<div class="flex justify-between items-start">
<div>
<h3 class="font-headline-sm text-headline-sm text-primary">2024 Global Health Equity Report</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-unit-xs">Digital Publication • Faculty Authored</p>
</div>
<span class="font-headline-sm text-headline-sm text-primary">$499.00</span>
</div>
<ul class="diamond-list mt-unit-md ml-6 text-on-surface-variant font-label-lg">
<li>Full PDF Access with Institutional Archiving Rights</li>
<li>Raw Data Sets (JSON/CSV) included</li>
<li>Quarterly Updates for 12 months</li>
</ul>
</div>
</div>
</section>
<!-- Section: Licensing Selection -->
<section>
<h2 class="font-headline-sm text-headline-sm text-primary mb-unit-lg">Licensing Model</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-unit-md">
<!-- Individual Option -->
<label class="relative cursor-pointer group">
<input checked="" class="sr-only peer" name="license" type="radio"/>
<div class="tonal-layer p-unit-lg transition-all peer-checked:border-secondary peer-checked:bg-surface-container-low">
<div class="flex justify-between items-start">
<div>
<h4 class="font-label-lg text-label-lg text-primary">Individual Practitioner</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-unit-xs">Single-user access with standard usage rights.</p>
</div>
<div class="h-4 w-4 rounded-full border border-outline flex items-center justify-center peer-checked:border-secondary">
<div class="h-2 w-2 rounded-full bg-secondary opacity-0 peer-checked:opacity-100"></div>
</div>
</div>
<div class="mt-unit-md font-headline-sm text-headline-sm text-primary">Included</div>
</div>
</label>
<!-- Institutional Option -->
<label class="relative cursor-pointer group">
<input class="sr-only peer" name="license" type="radio"/>
<div class="tonal-layer p-unit-lg transition-all peer-checked:border-secondary peer-checked:bg-surface-container-low border-gold">
<div class="flex justify-between items-start">
<div>
<h4 class="font-label-lg text-label-lg text-primary">Institutional / Faculty</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-unit-xs">Unlimited access for members of your domain.</p>
</div>
<div class="h-4 w-4 rounded-full border border-outline flex items-center justify-center peer-checked:border-secondary">
<div class="h-2 w-2 rounded-full bg-secondary opacity-0 peer-checked:opacity-100"></div>
</div>
</div>
<div class="mt-unit-md font-headline-sm text-headline-sm text-primary">+$1,500.00</div>
</div>
</label>
</div>
</section>
<!-- Section: Secure Payment -->
<section>
<h2 class="font-headline-sm text-headline-sm text-primary mb-unit-lg">Secure Payment Section</h2>
<div class="tonal-layer p-unit-lg">
<div class="space-y-unit-lg">
<div class="flex gap-unit-md items-center mb-unit-md">
<div class="bg-surface-container-highest p-2 rounded">
<span class="material-symbols-outlined text-primary">credit_card</span>
</div>
<h4 class="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Credit or Debit Card</h4>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-unit-md">
<div class="flex flex-col gap-unit-xs">
<label class="font-label-lg text-label-lg text-on-surface-variant">Cardholder Name</label>
<input class="bg-transparent border border-outline-variant focus:border-primary focus:ring-0 p-unit-md font-body-md" placeholder="Dr. John Smith" type="text"/>
</div>
<div class="flex flex-col gap-unit-xs">
<label class="font-label-lg text-label-lg text-on-surface-variant">Card Number</label>
<input class="bg-transparent border border-outline-variant focus:border-primary focus:ring-0 p-unit-md font-body-md" placeholder="•••• •••• •••• ••••" type="text"/>
</div>
<div class="flex flex-col gap-unit-xs">
<label class="font-label-lg text-label-lg text-on-surface-variant">Expiration Date</label>
<input class="bg-transparent border border-outline-variant focus:border-primary focus:ring-0 p-unit-md font-body-md" placeholder="MM/YY" type="text"/>
</div>
<div class="flex flex-col gap-unit-xs">
<label class="font-label-lg text-label-lg text-on-surface-variant">CVV</label>
<input class="bg-transparent border border-outline-variant focus:border-primary focus:ring-0 p-unit-md font-body-md" placeholder="•••" type="text"/>
</div>
</div>
<div class="flex items-center gap-unit-sm pt-unit-md border-t border-outline-variant">
<input class="w-4 h-4 text-primary border-outline-variant rounded-none" id="save-info" type="checkbox"/>
<label class="font-body-sm text-body-sm text-on-surface-variant" for="save-info">Securely save payment details for future institutional procurement.</label>
</div>
</div>
</div>
</section>
</div>
<!-- Right Column: Order Sidebar (4 columns) -->
<div class="col-span-12 lg:col-span-4">
<div class="sticky top-28 flex flex-col gap-unit-lg">
<!-- Price Breakdown -->
<div class="tonal-layer p-unit-xl bg-primary-container text-on-primary-container">
<h2 class="font-headline-sm text-headline-sm text-white mb-unit-lg">Order Total</h2>
<div class="space-y-unit-md border-b border-white/10 pb-unit-md">
<div class="flex justify-between font-body-md">
<span>Subtotal</span>
<span>$499.00</span>
</div>
<div class="flex justify-between font-body-md">
<span>Licensing Fee</span>
<span>$0.00</span>
</div>
<div class="flex justify-between font-body-md">
<span>Institutional Tax (3%)</span>
<span>$14.97</span>
</div>
</div>
<div class="flex justify-between items-baseline pt-unit-lg">
<span class="font-label-lg uppercase tracking-widest text-white/70">Total (USD)</span>
<span class="font-headline-md text-headline-md text-white">$513.97</span>
</div>
<button class="w-full bg-on-primary-container text-primary-container font-label-lg uppercase tracking-widest py-unit-lg mt-unit-xl hover:bg-white transition-colors active:scale-95 duration-150">
                            Finalize Procurement
                        </button>
<p class="text-center font-body-sm text-body-sm mt-unit-md text-white/60">
                            Access granted immediately upon confirmation.
                        </p>
</div>
<!-- Trust Badges -->
<div class="tonal-layer p-unit-lg flex flex-col gap-unit-md">
<div class="flex items-start gap-unit-md">
<div class="text-secondary">
<span class="material-symbols-outlined text-[32px]">shield_person</span>
</div>
<div>
<h4 class="font-label-lg text-label-lg text-primary">Institutional Security</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Encrypted through 256-bit institutional-grade SSL standards.</p>
</div>
</div>
<div class="flex items-start gap-unit-md border-t border-outline-variant pt-unit-md">
<div class="text-secondary">
<span class="material-symbols-outlined text-[32px]">verified_user</span>
</div>
<div>
<h4 class="font-label-lg text-label-lg text-primary">Data Ethics Compliance</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">We strictly adhere to the AI Data Ethics Framework of 2024.</p>
</div>
</div>
</div>
<!-- Promo Code -->
<div class="tonal-layer p-unit-md flex gap-unit-sm">
<input class="bg-transparent flex-grow border border-outline-variant focus:border-primary focus:ring-0 px-unit-md py-unit-sm font-label-lg" placeholder="Faculty Promo Code" type="text"/>
<button class="font-label-lg text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors">Apply</button>
</div>
</div>
</div>
</div>
</main>
<!-- Footer - Shared Component Logic -->
<footer class="w-full mt-auto bg-primary-container dark:bg-tertiary-container border-t border-outline-variant">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-4 gap-gutter text-on-primary-container">
<div class="col-span-1 md:col-span-2">
<h3 class="font-headline-md text-headline-md text-on-primary-container mb-unit-md">Dr. Ayuba's Corner</h3>
<p class="font-body-sm text-body-sm opacity-80 max-w-sm mb-unit-lg">
                    Providing elite medical research and institutional knowledge transfer for the modern era of medicine.
                </p>
<p class="font-body-sm text-body-sm opacity-60">
                    © 2024 Dr. Ayuba's Corner. All rights reserved. Intellectual Property of the Institution.
                </p>
</div>
<div>
<h4 class="font-label-lg text-label-lg uppercase tracking-widest mb-unit-lg text-on-primary-container/60">Navigation</h4>
<ul class="space-y-unit-sm">
<li><a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="#">Privacy Policy</a></li>
<li><a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="#">Terms of Service</a></li>
<li><a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="#">Faculty Directory</a></li>
</ul>
</div>
<div>
<h4 class="font-label-lg text-label-lg uppercase tracking-widest mb-unit-lg text-on-primary-container/60">Resources</h4>
<ul class="space-y-unit-sm">
<li><a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="#">Institutional Research</a></li>
<li><a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="#">Contact Us</a></li>
<li><a class="text-on-primary-container opacity-80 hover:opacity-100 font-body-sm text-body-sm" href="#">Sitemap</a></li>
</ul>
</div>
</div>
</footer>
<script>
        // Micro-interaction for license selection
        const radioButtons = document.querySelectorAll('input[name="license"]');
        const licenseFeeDisplay = document.querySelector('.flex.justify-between.font-body-md:nth-child(2) span:last-child');
        const taxDisplay = document.querySelector('.flex.justify-between.font-body-md:nth-child(3) span:last-child');
        const totalDisplay = document.querySelector('.font-headline-md.text-headline-md');

        radioButtons.forEach((radio, index) => {
            radio.addEventListener('change', () => {
                const basePrice = 499.00;
                let licenseFee = 0;
                
                if (index === 1) { // Institutional
                    licenseFee = 1500.00;
                }

                const subtotal = basePrice + licenseFee;
                const tax = subtotal * 0.03;
                const total = subtotal + tax;

                licenseFeeDisplay.textContent = \`$\${licenseFee.toFixed(2)}\`;
                taxDisplay.textContent = \`$\${tax.toFixed(2)}\`;
                totalDisplay.textContent = \`$\${total.toLocaleString(undefined, {minimumFractionDigits: 2})}\`;
            });
        });

        // Simple form validation styling toggle
        const inputs = document.querySelectorAll('input[type="text"]');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('border-primary');
            });
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('border-primary');
            });
        });
    </script>

      ` }} />
    </>
  );
}
