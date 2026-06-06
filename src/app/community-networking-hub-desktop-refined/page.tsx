'use client';

import React, { useRef } from 'react';
import UnifiedPageHero from '@/components/UnifiedPageHero';
import CommunityCard from '@/components/CommunityCard';
import ContinueExploring, { ContinueExploringItem } from '@/components/ContinueExploring';

const relatedItems: ContinueExploringItem[] = [
  {
    title: 'Strategic Leadership in Complex Ecosystems',
    description: 'Navigating high-stakes institutional environments with ethical clarity and decisive strategic action.',
    href: '/catalog',
    type: 'course',
    categoryOrDiscipline: 'EXECUTIVE PROGRAM',
    duration: '6 Months',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJRoVLUR5g9fNqenbPDGtO8BXasLzaoCD966cbnzrv1e-Jxt_41fNHy646U2MbOhaJU7RwP25oNSAzhKXQMrlRQqQRkUo_Bo5H7ZygSlluytjzgDDV1BB5tTccz1jgyuK-nnPNEPrGj79U6ZI2vsraaWTHb62cOCIS6Y8Bm0ogZoA0wyt1Iz3ncWUXzwxFKX_Ugo2Iee7OEBrNg_cNG5_xD3_e5bJ-twsIwLqDqSVGW78F5SegCu0TDCoV9TDgCvCpKAMyy1gssVc',
  },
  {
    title: 'The Architect of Legacy: Governing Family Interests Across Generations',
    description: 'Dr. Ayuba explores the intersection of corporate governance and familial bonds within institutional structures.',
    href: '/editorial',
    type: 'article',
    categoryOrDiscipline: 'LEADERSHIP',
    duration: '12 MIN READ',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkdeztzdSpdvgqJQ-SCj_OW_jTDVJeSn-U634ES1rjty4dN8wbn5fKQYSDC_BVZrkSTTggDLPbMvXuzNCwmZ342mb84kOr1Cs-eg0dSqNCPpGMIQXUBp_4IeT8KPVvWyJRW6AAu3clrd_u6dgkr6gTNzOP099utAJNbSX94isCMRdLHaj1wAysAxO7JEXX_iWi83qxKA65fNoTrE2Y40cz3V3wEjOUsLgxEUPtp9z4ktTa-gqu--6AtHq2DXZreZDDy-FLcl4bwDY',
  },
  {
    title: 'Transgenerational Capital Strategies',
    description: 'Understanding the foundational principles of wealth preservation through institutional frameworks and strategic assets.',
    href: '/video-archive',
    type: 'video',
    categoryOrDiscipline: 'Wealth',
    duration: '32 mins',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuMTT9OGinnh_qwJG6Kl4fBTS-RKvAQg9aI0k49XXzvFKsrROWQb_8cdUQoZPuieRj9l0CT1agt4GPCphwPo5Wbe81VOIqcl959BSxotKreVYSBLoaIQejy9hR_LgANVFur_LRhrUXoc3LKoxOG7n0Ji1xsrgDEE4aXFH7O6jlEOuvd83EmPSZlCUJ_-Bq_q4PdFwJveV-VtvxxhANbkzEN0xla3ZQWi_FLnIGQPL2346ONbMX4KE4EnWlJ_VeMOZstTIPXPtzy_0',
  },
];

const boards = [
  {
    title: 'The Future of Institutional Philanthropy',
    description: 'Analyzing 2024 trends in high-net-worth impact investing and community-first wealth distribution models.',
    status: 'Active',
    contributorsCount: 14,
    contributorAvatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKj8J0jcVTPsswC4H_S4mE8-0j5cNUzi9KXKsPVYCyFX7dRkqVRPHX0gxLtr_T4Msm-ZUb_0usmadAF4rrEa7XrNsK3pPjIQqSo22XlPF7ysgN-JEHtuv1d315WZ6UjBGkImH4TCdz9_lQ1bDst8QhLiUWEAUYUkBXQZNUym8LwHOq1kO9Faqg7nTxQ32IxsS5qM-s44rY_GxskdSYR5NLHaBP9_fHXlIrWkchTmDhbMFKQRYHd-gfvPuzldQbihzkHK2LSHAZUJg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvUm3H6rnPosqyw8CX3C0AHPNtLgdoBhK_9wmCpESY7kwU82EgN85QesFsotmGIscxjl9GVCoboswRP_gxeuqNtxIGS8qNERehA2Qr5LCl4BilSgmWZldZEWCbm-xbPcWkzucDo-HKUfLF2KO8YG_n-a28GxdtjtaSsK6dq3KUkt47wvyLe32li7euwT0R7xa_mfHxYUKgnv9fEJbkR37M-NgYQatMNnxSw5skxIXQ9lsWkhSQX_77BoBa361EMpJbvNBpZUZSeVY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCi0ZGUt_krq2PntKEoKx2yuu6my52eNsgN8fLaPqoqPk7_yQIqKYCtZnpf6rgdWlYD4i4E-CtGFC5UwhGUUYUdP8F9HFuQAg4pmniH_AXrCqdn0Os5T-G7-09W6obVU_gKA_38M9qUFG68_g7fe0-K4SsvKLWCbAHPOfPWBPzLQlXQMB2a2VylK57XvRwzv3K_8iGX3kyZZDfoFzY6SSdF-sN7K2Z-SQrmwKpsYJxBosDgD4hmdM4u9iF8jUuUD6Isgw--2xvg0iM',
    ],
  },
  {
    title: 'Neuro-Linguistic Patterns in Leadership',
    description: 'Peer-reviewed findings on how specific speech patterns influence organizational stability and trust.',
    status: 'Archived',
    contributorsCount: 28,
    contributorAvatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCuRssjGX7CJ4DgJs1-bSjlyFnPr2pPwEGBkto6cfxrq6vg3_kuoCZwfSlqm8fkPXrd7_1-Z6XoXNQmVXhIadyxEPnOffPSlFSh4TwRWt1qTsYPuOwlhZovtw8Wxp8b8bg_nF3I-8hDroQdXa7omoBk26kvvljSbn5oP7B6iuRu__LiQBTcG0Y76UypnwSl2nJvbP5JelbKXu8GJK2g0PCo6rJ8P-H3xQYHG6kLupC6s3_m0XYzIxyA3q4NpghRRzsAJae6hh2ncmM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBfvOUt0aD8HKMpEK7MPVTHz53rirv2RPzX-lPzTFl6aExZeoItAhGGlJeiGezA4FBw-BXTULM7QeDEIwxFjH4mV15ai4Ee3gW7biJdW7b6wVdxqRSCQnUuAyY_i0lgaGwKkooezva2phFLatjP5iSsdZjwem77WbG613k-DmAR4Rh549tMCwJpK7zmeOVEcgAE7sSjp4zcLXygtmDJIeubnXX9jgEHRdtTmcnU7Q0nmMFIx9f7Giui82hWAtQrFfZCa9OjhPEEgxs',
    ],
  },
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="animate-fade-in-up flex-grow">
      {/* Unified Page Header */}
      <UnifiedPageHero
        sectionLabel="Community Hub"
        pageTitle="Member Networking Hub"
        supportingDescription="Connect with fellow scholars, share research developments, and collaborate on private councils."
      />

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-gutter mt-unit-lg items-start">
        {/* Research Board Highlights (Left Column - 8 cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-gutter">
          {/* Main Board Card */}
          <section className="bg-white border border-outline-variant/30 p-unit-lg rounded-xl premium-shadow">
            <div className="flex justify-between items-center mb-unit-lg pb-3 border-b border-outline-variant/10">
              <div className="flex items-center gap-unit-md">
                <span className="material-symbols-outlined text-secondary text-[24px]">science</span>
                <h2 className="font-headline-sm text-headline-sm text-primary">Collaborative Research Boards</h2>
              </div>
              <button className="text-accent-gold font-label-lg text-label-lg hover:underline transition-all">View All Boards</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-lg">
              {boards.map((board, idx) => (
                <CommunityCard
                  key={idx}
                  title={board.title}
                  description={board.description}
                  status={board.status}
                  contributorsCount={board.contributorsCount}
                  contributorAvatars={board.contributorAvatars}
                  href="#"
                />
              ))}
            </div>
          </section>

          {/* Activity Feed */}
          <section className="bg-white border border-outline-variant/30 p-unit-lg rounded-xl premium-shadow">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-unit-lg pb-3 border-b border-outline-variant/10">Global Member Activity</h2>
            <div className="space-y-unit-lg">
              <div className="flex gap-unit-md border-b border-outline-variant/10 pb-unit-md">
                <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0"></div>
                <div className="flex-grow">
                  <p className="font-body-md text-body-md"><span className="font-bold text-primary">Dr. Julian Vance</span> shared a new perspective in <span className="text-secondary underline cursor-pointer">Private Wealth Strategies</span>.</p>
                  <p className="font-label-md text-label-md text-on-surface-variant mt-1">2 hours ago • 14 Comments</p>
                </div>
              </div>
              <div className="flex gap-unit-md border-b border-outline-variant/10 pb-unit-md">
                <div className="w-10 h-10 rounded-full bg-secondary flex-shrink-0"></div>
                <div className="flex-grow">
                  <p className="font-body-md text-body-md"><span className="font-bold text-primary">Institutional Council</span> announced the <span className="text-secondary underline cursor-pointer">Winter 2024 Research Grant</span> recipients.</p>
                  <p className="font-label-md text-label-md text-on-surface-variant mt-1">5 hours ago • Official Update</p>
                </div>
              </div>
              <div className="flex gap-unit-md">
                <div className="w-10 h-10 rounded-full bg-tertiary flex-shrink-0"></div>
                <div className="flex-grow">
                  <p className="font-body-md text-body-md"><span className="font-bold text-primary">Sarah Kensington</span> published an archival brief: <span className="text-secondary underline cursor-pointer">\"The Ethics of Legacy\"</span>.</p>
                  <p className="font-label-md text-label-md text-on-surface-variant mt-1">1 day ago • 52 Likes</p>
                </div>
              </div>
            </div>
            <button className="mt-unit-lg w-full py-3 border border-primary text-primary font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-all rounded-lg">Load Earlier Discussions</button>
          </section>
        </div>

        {/* Member Directory Sidebar (Right Column - 4 cols) */}
        <div className="col-span-12 lg:col-span-4 space-y-gutter">
          {/* Find Member Section */}
          <section className="bg-surface-container p-unit-lg rounded-xl border border-outline-variant/30">
            <h3 className="font-headline-sm text-[20px] text-primary mb-unit-md">Find a Member</h3>
            <div className="space-y-unit-md">
              <div>
                <label className="font-label-lg text-label-lg text-primary block mb-2">Search by Name or Field</label>
                <div className="relative">
                  <input className="w-full bg-white border border-outline-variant px-4 py-2 focus:border-primary outline-none transition-all font-body-sm text-body-sm rounded-lg" placeholder="e.g. Health Research" type="text" />
                  <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant">search</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-white border border-outline-variant/30 rounded-full text-[12px] font-label-md text-on-surface-variant hover:border-secondary cursor-pointer transition-all">Philanthropy</span>
                <span className="px-3 py-1 bg-white border border-outline-variant/30 rounded-full text-[12px] font-label-md text-on-surface-variant hover:border-secondary cursor-pointer transition-all">Medicine</span>
                <span className="px-3 py-1 bg-white border border-outline-variant/30 rounded-full text-[12px] font-label-md text-on-surface-variant hover:border-secondary cursor-pointer transition-all">Wealth Management</span>
              </div>
            </div>
          </section>

          {/* Directory List */}
          <section className="bg-white border border-outline-variant/30 p-unit-lg rounded-xl premium-shadow">
            <div className="flex justify-between items-center mb-unit-md border-b border-outline-variant/10 pb-2">
              <h3 className="font-headline-sm text-[20px] text-primary">Directory</h3>
              <span className="w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
            </div>
            <div className="space-y-unit-md">
              <div className="flex items-center gap-4 group cursor-pointer py-1">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant/30">
                  <img alt="Member 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvUm3H6rnPosqyw8CX3C0AHPNtLgdoBhK_9wmCpESY7kwU82EgN85QesFsotmGIscxjl9GVCoboswRP_gxeuqNtxIGS8qNERehA2Qr5LCl4BilSgmWZldZEWCbm-xbPcWkzucDo-HKUfLF2KO8YG_n-a28GxdtjtaSsK6dq3KUkt47wvyLe32li7euwT0R7xa_mfHxYUKgnv9fEJbkR37M-NgYQatMNnxSw5skxIXQ9lsWkhSQX_77BoBa361EMpJbvNBpZUZSeVY" />
                </div>
                <div className="flex-grow">
                  <p className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Prof. Elena Rossi</p>
                  <p className="font-label-md text-label-md text-on-surface-variant">Cognitive Neuroscience</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer py-1">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant/30">
                  <img alt="Member 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi0ZGUt_krq2PntKEoKx2yuu6my52eNsgN8fLaPqoqPk7_yQIqKYCtZnpf6rgdWlYD4i4E-CtGFC5UwhGUUYUdP8F9HFuQAg4pmniH_AXrCqdn0Os5T-G7-09W6obVU_gKA_38M9qUFG68_g7fe0-K4SsvKLWCbAHPOfPWBPzLQlXQMB2a2VylK57XvRwzv3K_8iGX3kyZZDfoFzY6SSdF-sN7K2Z-SQrmwKpsYJxBosDgD4hmdM4u9iF8jUuUD6Isgw--2xvg0iM" />
                </div>
                <div className="flex-grow">
                  <p className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Marcus Thorne</p>
                  <p className="font-label-md text-label-md text-on-surface-variant">Asset Diversification</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer py-1">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant/30">
                  <img alt="Member 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuRssjGX7CJ4DgJs1-bSjlyFnPr2pPwEGBkto6cfxrq6vg3_kuoCZwfSlqm8fkPXrd7_1-Z6XoXNQmVXhIadyxEPnOffPSlFSh4TwRWt1qTsYPuOwlhZovtw8Wxp8b8bg_nF3I-8hDroQdXa7omoBk26kvvljSbn5oP7B6iuRu__LiQBTcG0Y76UypnwSl2nJvbP5JelbKXu8GJK2g0PCo6rJ8P-H3xQYHG6kLupC6s3_m0XYzIxyA3q4NpghRRzsAJae6hh2ncmM" />
                </div>
                <div className="flex-grow">
                  <p className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Dr. Sarah Kensington</p>
                  <p className="font-label-md text-label-md text-on-surface-variant">Bio-Ethics Council</p>
                </div>
              </div>
            </div>
            <button className="mt-unit-lg w-full py-2 bg-surface-container-high text-primary font-label-lg text-label-lg hover:bg-surface-variant transition-colors rounded-lg">View Institutional Registry</button>
          </section>

          {/* Hub Protocol Card */}
          <section className="bg-primary text-on-primary p-unit-lg rounded-xl">
            <h3 className="font-headline-sm text-[20px] text-white mb-unit-md border-b border-white/10 pb-2">Hub Protocol</h3>
            <ul className="diamond-list space-y-unit-sm font-body-sm text-body-sm text-primary-fixed-dim">
              <li className="diamond-bullet">Confidentiality of all research data.</li>
              <li className="diamond-bullet">Respectful academic discourse.</li>
              <li className="diamond-bullet">Verified institutional credentials only.</li>
              <li className="diamond-bullet">No unsolicited commercial outreach.</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Discovery Module */}
      <ContinueExploring items={relatedItems} />
    </div>
  );
}
