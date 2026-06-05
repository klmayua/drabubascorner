import React from 'react';

export const metadata = {
  title: "Member Directory & Networking Hub (Desktop) - Dr. Abuba Portal",
  description: "Verbatim design imported from Stitch project.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .archival-border {
            border: 1px solid rgba(0, 3, 15, 0.1);
        }
        .ivory-gradient {
            background: linear-gradient(to bottom, #F8F9FA, #FFFFFF);
        }
        .gold-accent-top {
            border-top: 3px solid #f1bf51;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #00030f;
        }
    

      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- TopNavBar -->
<header class="bg-surface dark:bg-surface border-b border-on-primary-container/10 h-20 fixed top-0 w-full z-50">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center h-full">
<div class="flex items-center">
<img alt="" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu1ROjOHmXyQhfgSSMMdEn7SI9rFvnohARqGPNqRn5q1ul68lucmmoEehb5YzJOPT42XMztetVTJpn5JGxfQ7Kg6aIx6W8-AmHf2Uou7X8RBpt4rdf01fVEVMas8C4yS_7_5z8XxM0QgKLvO7lBFwyb5B7u0Op_BitaTLxeZscPOPcHSzNOqTaBbcAJffTyEvxMjJSQdxeqcgSaA3KqZ0lyfsibHYOhkf9k3xSsMrBkhULNNrBli5jf707xVuJggTg0DpIuePVfEw"/>
</div>
<nav class="hidden md:flex items-center space-x-unit-lg">
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer active:opacity-80" href="#">Research</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer active:opacity-80" href="#">Publications</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer active:opacity-80" href="#">Lectures</a>
<a class="font-label-lg text-label-lg text-primary dark:text-primary-fixed border-b-2 border-tertiary-fixed-dim pb-1 cursor-pointer active:opacity-80" href="#">Archives</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer active:opacity-80" href="#">Consultancy</a>
<a class="font-label-lg text-label-lg text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer active:opacity-80" href="#">Contact</a>
</nav>
<div class="flex items-center space-x-unit-md">
<span class="material-symbols-outlined text-primary cursor-pointer">search</span>
<div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary-fixed font-label-md">
                    JD
                </div>
</div>
</div>
</header>
<div class="flex pt-20">
<!-- SideNavBar (Desktop) -->
<aside class="hidden lg:flex flex-col py-unit-lg px-unit-md h-[calc(100vh-80px)] w-64 fixed left-0 bg-surface-container-low border-r border-on-primary-container/10">
<div class="mb-unit-xl">
<h2 class="font-headline-sm text-headline-sm text-primary">Member Portal</h2>
<p class="text-on-surface-variant text-label-md">Institutional Access</p>
</div>
<nav class="flex-1 space-y-unit-sm">
<div class="flex items-center space-x-unit-md px-unit-md py-unit-sm text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg cursor-pointer scale-95 duration-150">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</div>
<div class="flex items-center space-x-unit-md px-unit-md py-unit-sm bg-primary text-on-primary rounded-lg cursor-pointer scale-95 duration-150">
<span class="material-symbols-outlined">folder_special</span>
<span class="font-label-md text-label-md">Member Archives</span>
</div>
<div class="flex items-center space-x-unit-md px-unit-md py-unit-sm text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg cursor-pointer scale-95 duration-150">
<span class="material-symbols-outlined">fact_check</span>
<span class="font-label-md text-label-md">Peer Review</span>
</div>
<div class="flex items-center space-x-unit-md px-unit-md py-unit-sm text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg cursor-pointer scale-95 duration-150">
<span class="material-symbols-outlined">payments</span>
<span class="font-label-md text-label-md">Grants</span>
</div>
<div class="flex items-center space-x-unit-md px-unit-md py-unit-sm text-on-surface-variant hover:bg-surface-container-high transition-all rounded-lg cursor-pointer scale-95 duration-150">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</div>
</nav>
<button class="mt-auto bg-primary text-on-primary py-unit-md rounded-lg font-label-lg hover:bg-primary-container transition-colors">
                Submit Paper
            </button>
</aside>
<!-- Main Content Area -->
<main class="flex-1 ml-0 lg:ml-64 bg-surface min-h-screen">
<div class="max-w-[1440px] mx-auto px-margin-desktop py-unit-2xl">
<!-- Hero & Search Header -->
<div class="mb-unit-2xl">
<h1 class="font-display-lg text-display-lg text-primary mb-unit-md">Fellowship Registry</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-unit-xl">
                        Explore our collective of distinguished scholars, researchers, and institutional fellows dedicated to the advancement of cross-disciplinary excellence.
                    </p>
<div class="relative max-w-2xl">
<input class="w-full pl-unit-xl pr-unit-md py-unit-lg bg-surface-container-lowest archival-border rounded-none focus:ring-2 focus:ring-tertiary-fixed-dim focus:border-transparent outline-none text-body-md" placeholder="Search by name, faculty, or field of research..." type="text"/>
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
</div>
</div>
<!-- Bento Grid Directory -->
<div class="grid grid-cols-12 gap-gutter mb-unit-2xl">
<!-- Profile Card 1 -->
<div class="col-span-12 md:col-span-4 bg-surface-container-lowest archival-border gold-accent-top p-unit-lg group hover:shadow-lg transition-all duration-300">
<div class="aspect-square mb-unit-lg overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A professional studio portrait of Prof. Elena Rossi, an elegant scholar with graying hair, wearing a navy blazer. The lighting is soft and academic, set against a backdrop of ancient leather-bound books in a prestigious library. The mood is intellectual, stable, and elite, reflecting a lifetime of archival excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGCNqnSHNFauybDp8wz4v8874y9MXluea-hYlQJrDxDuCSrSCrZXdg6P4C9g11m65tr9mvUKkazrWkjbQDKiCTdVj-hWgfAq1y1pBuifV9Qn_8hxxGB7xKen9xHUpTXOmmx8L0k57kqZJREpPWOZgA3S-g8GmtTVFIZsqYWxjzb60k5VwGE3ZNSSopck8-Zs5N4UzkNHQdq6pb6Q6vfoe3N93mjN_9Dn8P8jjHO_UbZBubB7b75VXc_MFGPdf_3idM0IuDodDZ8Uo"/>
</div>
<div class="space-y-unit-xs">
<p class="font-label-md text-tertiary-fixed-dim uppercase tracking-widest">Senior Fellow</p>
<h3 class="font-headline-sm text-headline-sm text-primary">Prof. Elena Rossi</h3>
<p class="font-body-sm text-on-surface-variant italic">Department of Philology &amp; Archival Science</p>
</div>
<div class="mt-unit-lg pt-unit-md border-t border-on-surface-variant/10 flex justify-between items-center">
<button class="text-primary font-label-lg hover:text-tertiary-fixed-dim transition-colors">View Portfolio</button>
<span class="material-symbols-outlined text-tertiary-fixed-dim">arrow_right_alt</span>
</div>
</div>
<!-- Profile Card 2 -->
<div class="col-span-12 md:col-span-4 bg-surface-container-lowest archival-border gold-accent-top p-unit-lg group hover:shadow-lg transition-all duration-300">
<div class="aspect-square mb-unit-lg overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A high-contrast professional portrait of Marcus Thorne, a distinguished academic with a sharp gaze and intellectual presence. He is dressed in a dark bespoke suit, positioned in a modern glass-walled office overlooking a historic university courtyard at dusk. The aesthetic is corporate modern with a prestigious institutional atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD26VI-BpQlH6SdrAw4-uIteCfFSNd-elTqYhJ1H_OEhDGPl9ijRkIr5TC-Ypr5RhlCX6jkBCxJN5XDHUUc3UyM1Aent-XDTsacNhpWHpwNS-X2WWns9pC_kFJSb_DFkDF9HmIBfmzNs8D0dxZXqjYnQKIvX4yF8KdUjaw-dAecu9ULJft9rO28a30iEWg6CME9N0IX5U7eT3Ym9c2X-4CH0PiK8xPU5mcA6kgmHYttKqgu-umOC7GCc9mUWLPg14I9rBlvxhW9AjI"/>
</div>
<div class="space-y-unit-xs">
<p class="font-label-md text-tertiary-fixed-dim uppercase tracking-widest">Executive Fellow</p>
<h3 class="font-headline-sm text-headline-sm text-primary">Marcus Thorne</h3>
<p class="font-body-sm text-on-surface-variant italic">Chair of Geopolitical Research</p>
</div>
<div class="mt-unit-lg pt-unit-md border-t border-on-surface-variant/10 flex justify-between items-center">
<button class="text-primary font-label-lg hover:text-tertiary-fixed-dim transition-colors">View Portfolio</button>
<span class="material-symbols-outlined text-tertiary-fixed-dim">arrow_right_alt</span>
</div>
</div>
<!-- Hub Protocol / Info Box (Bento Variant) -->
<div class="col-span-12 md:col-span-4 bg-primary text-on-primary p-unit-xl flex flex-col justify-between">
<div>
<span class="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-unit-md">verified_user</span>
<h3 class="font-headline-md text-headline-md mb-unit-md">Hub Protocol</h3>
<p class="font-body-md text-on-primary-container leading-relaxed mb-unit-lg">
                                Membership in the Hub entails a commitment to the highest standards of confidentiality and academic integrity. Members agree to foster discourse that is both rigorous and respectful of institutional traditions.
                            </p>
<ul class="space-y-unit-md">
<li class="flex items-start space-x-unit-sm">
<div class="w-2 h-2 mt-2 bg-tertiary-fixed-dim rotate-45"></div>
<span class="font-label-md">Strict non-disclosure of internal research.</span>
</li>
<li class="flex items-start space-x-unit-sm">
<div class="w-2 h-2 mt-2 bg-tertiary-fixed-dim rotate-45"></div>
<span class="font-label-md">Adherence to peer-review standards.</span>
</li>
<li class="flex items-start space-x-unit-sm">
<div class="w-2 h-2 mt-2 bg-tertiary-fixed-dim rotate-45"></div>
<span class="font-label-md">Intellectual property protection.</span>
</li>
</ul>
</div>
<button class="mt-unit-xl border border-tertiary-fixed-dim text-tertiary-fixed-dim py-unit-md font-label-lg hover:bg-tertiary-fixed-dim hover:text-primary transition-all">
                            Full Protocol Documentation
                        </button>
</div>
<!-- Row 2 -->
<div class="col-span-12 md:col-span-8 bg-surface-container-lowest archival-border p-unit-xl flex flex-col md:flex-row gap-unit-xl">
<div class="flex-1 space-y-unit-md">
<h3 class="font-headline-md text-headline-md text-primary">Interdisciplinary Synergy</h3>
<p class="font-body-md text-on-surface-variant">
                                Our networking hub facilitates real-time collaboration between disparate faculties. By bridging the gap between historical archival data and modern geopolitical analysis, we create a unique ecosystem for breakthrough discoveries.
                            </p>
<div class="pt-unit-md">
<a class="text-primary font-label-lg border-b border-primary hover:text-tertiary-fixed-dim hover:border-tertiary-fixed-dim transition-all inline-block" href="#">Explore Collaborations</a>
</div>
</div>
<div class="flex-1 h-48 md:h-auto overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover grayscale opacity-60" data-alt="A serene wide-angle shot of a grand institutional hall with massive stone pillars and sunlight streaming through high arched windows. The floor is polished marble, reflecting the prestigious and silent atmosphere of a center for higher learning. The color palette is composed of ivory, pale gray, and deep navy shadows, evoking stability and historical depth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm0BVL2znGR3L8xSE--EsKAveuUMiUFLehcV0RF6ZeeiDq6M78CRGy5uwzg9rtMIWfPxXgeibulnP_7_88iuNAY7YP4OTcCYFIz2dJTaG0kZHppJyOLk9ZjWwqYPD6oR67V24QHi7GIx15BL6YKcoapFBMEMzR0MFrQVSKdhpTqkn9kQcQDKNlKWV0awehPaEWSSlw8zB4-g1Fv5pkb9PNfaOrpuru4RFX5PisxT_gbyWE_8MftrVSqi_MMIo7s00brB-Y4erc0m0"/>
</div>
</div>
<div class="col-span-12 md:col-span-4 bg-surface-container-high archival-border p-unit-lg flex flex-col justify-center items-center text-center">
<div class="w-16 h-16 rounded-full bg-white archival-border flex items-center justify-center mb-unit-md">
<span class="material-symbols-outlined text-primary text-3xl">add</span>
</div>
<h4 class="font-headline-sm text-headline-sm text-primary">Propose New Fellow</h4>
<p class="font-body-sm text-on-surface-variant mb-unit-lg">Requires three internal endorsements and institutional board review.</p>
<button class="font-label-lg text-primary underline decoration-tertiary-fixed-dim underline-offset-8 hover:text-tertiary-fixed-dim transition-colors">Start Nomination</button>
</div>
</div>
<!-- Protocol Table Section -->
<section class="mt-unit-2xl">
<div class="mb-unit-xl">
<h2 class="font-headline-lg text-headline-lg text-primary">Institutional Access Hierarchy</h2>
<div class="h-1 w-24 bg-tertiary-fixed-dim mt-unit-sm"></div>
</div>
<div class="overflow-x-auto custom-scrollbar">
<table class="w-full text-left archival-border border-collapse">
<thead class="bg-primary-container text-on-primary-container font-label-lg">
<tr>
<th class="py-unit-md px-unit-lg">Tier Level</th>
<th class="py-unit-md px-unit-lg">Designation</th>
<th class="py-unit-md px-unit-lg">Privileges</th>
<th class="py-unit-md px-unit-lg">Compliance Requirements</th>
</tr>
</thead>
<tbody class="font-body-sm text-on-surface">
<tr class="border-b border-on-surface-variant/10 hover:bg-surface-container transition-colors">
<td class="py-unit-lg px-unit-lg font-bold">Tier I</td>
<td class="py-unit-lg px-unit-lg">Distinguished Fellow</td>
<td class="py-unit-lg px-unit-lg">Full Archival Access, Board Voting, Grant Priority</td>
<td class="py-unit-lg px-unit-lg">Biannual Review, Publication Mandate</td>
</tr>
<tr class="border-b border-on-surface-variant/10 hover:bg-surface-container transition-colors">
<td class="py-unit-lg px-unit-lg font-bold">Tier II</td>
<td class="py-unit-lg px-unit-lg">Research Fellow</td>
<td class="py-unit-lg px-unit-lg">Standard Digital Archives, Network Access</td>
<td class="py-unit-lg px-unit-lg">Protocol Adherence, Peer Review Support</td>
</tr>
<tr class="border-b border-on-surface-variant/10 hover:bg-surface-container transition-colors">
<td class="py-unit-lg px-unit-lg font-bold">Tier III</td>
<td class="py-unit-lg px-unit-lg">Associate Member</td>
<td class="py-unit-lg px-unit-lg">Directory Listing, Public Publications</td>
<td class="py-unit-lg px-unit-lg">Annual Membership Compliance</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</main>
</div>
<!-- Footer -->
<footer class="bg-primary-container dark:bg-primary-container border-t-4 border-tertiary-fixed-dim w-full py-unit-2xl">
<div class="max-w-[1440px] mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-unit-xl">
<div class="text-left">
<span class="font-headline-md text-headline-md text-on-primary-container block">Dr. Ayuba's Corner</span>
<p class="font-body-sm text-on-primary-container/80 mt-unit-sm">© 2024 Dr. Ayuba's Corner. All Rights Reserved. Institutional Excellence.</p>
</div>
<div class="flex flex-wrap justify-center gap-unit-xl">
<a class="font-body-sm text-body-sm text-on-primary-container/80 hover:text-tertiary-fixed transition-colors" href="#">Privacy Policy</a>
<a class="font-body-sm text-body-sm text-on-primary-container/80 hover:text-tertiary-fixed transition-colors" href="#">Terms of Service</a>
<a class="font-body-sm text-body-sm text-tertiary-fixed-dim underline transition-colors" href="#">Institutional Repository</a>
<a class="font-body-sm text-body-sm text-on-primary-container/80 hover:text-tertiary-fixed transition-colors" href="#">Staff Directory</a>
</div>
</div>
</footer>
<script>
        // Simple search interactivity
        const searchInput = document.querySelector('input[type="text"]');
        if(searchInput) {
            searchInput.addEventListener('focus', () => {
                searchInput.parentElement.style.borderColor = '#f1bf51';
            });
            searchInput.addEventListener('blur', () => {
                searchInput.parentElement.style.borderColor = 'rgba(0, 3, 15, 0.1)';
            });
        }
    </script>

      ` }} />
    </>
  );
}
