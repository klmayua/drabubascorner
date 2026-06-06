'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface DashboardPersona {
  key: string;
  name: string;
  roleName: string;
  subtitle: string;
  avatarInitials: string;
  metrics: { label: string; value: string; icon: string }[];
  sidebarLinks: { name: string; icon: string; href: string }[];
  actionBtnText: string;
  widgets: React.ReactNode;
}

export default function Page() {
  const [selectedPersona, setSelectedPersona] = useState<string>('member');
  const [searchQuery, setSearchQuery] = useState('');
  const [inboxCount, setInboxCount] = useState(3);

  // Define personas
  const personas: Record<string, DashboardPersona> = {
    public: {
      key: 'public',
      name: 'Guest Reader',
      roleName: 'Public Visitor',
      subtitle: 'Welcome to the public archive portal. Log in or upgrade to access exclusive research panels.',
      avatarInitials: 'GR',
      metrics: [
        { label: 'Articles Read', value: '3', icon: 'auto_stories' },
        { label: 'Free Lectures Available', value: '15', icon: 'slideshow' },
        { label: 'Resource Downloads', value: '2', icon: 'download' }
      ],
      sidebarLinks: [
        { name: 'Public Dashboard', icon: 'dashboard', href: '/dashboard' },
        { name: 'Courses Directory', icon: 'school', href: '/catalog' },
        { name: 'Public Articles', icon: 'menu_book', href: '/' },
        { name: 'Podcasts', icon: 'mic', href: '/podcast' },
        { name: 'FAQ & Help', icon: 'help', href: '/about' }
      ],
      actionBtnText: 'Upgrade to Member',
      widgets: (
        <div className="space-y-gutter">
          <h3 className="font-headline-sm text-headline-sm text-primary">Recommended Public Research</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-lg">
            <div className="bg-surface-container-lowest border border-outline-variant p-unit-lg rounded-lg premium-shadow-hover">
              <span className="text-[10px] text-secondary font-bold tracking-wider uppercase bg-secondary-container px-2 py-1">READING</span>
              <h4 className="font-headline-sm text-[22px] leading-tight mt-2 mb-unit-sm">The Foundations of Epistemology</h4>
              <p className="text-on-surface-variant text-body-sm mb-4">A simple summary introduction of philosophical frameworks for decision-making.</p>
              <Link href="/research-detail" className="text-secondary font-bold hover:underline flex items-center gap-1 text-sm">
                Start Reading <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-unit-lg rounded-lg premium-shadow-hover">
              <span className="text-[10px] text-secondary font-bold tracking-wider uppercase bg-secondary-container px-2 py-1">WELLNESS</span>
              <h4 className="font-headline-sm text-[22px] leading-tight mt-2 mb-unit-sm">Longevity through Biomarker Analysis</h4>
              <p className="text-on-surface-variant text-body-sm mb-4">A brief guide on tracking metabolic biomarkers to improve physical and mental health.</p>
              <Link href="/library" className="text-secondary font-bold hover:underline flex items-center gap-1 text-sm">
                Open Guide <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      )
    },
    member: {
      key: 'member',
      name: 'Dr. Julian',
      roleName: 'Member',
      subtitle: 'Your research on clinical neuroplasticity has been cited 12 times this week. Continue your curriculum below.',
      avatarInitials: 'JA',
      metrics: [
        { label: 'Research Points', value: '2,450', icon: 'military_tech' },
        { label: 'Courses In Progress', value: '2', icon: 'school' },
        { label: 'Library Saved Items', value: '8', icon: 'bookmark' }
      ],
      sidebarLinks: [
        { name: 'Member Dashboard', icon: 'dashboard', href: '/dashboard' },
        { name: 'My Learning', icon: 'school', href: '/catalog' },
        { name: 'Research Papers', icon: 'menu_book', href: '/research-search' },
        { name: 'Inbox', icon: 'mail', href: '#' },
        { name: 'Subscriptions', icon: 'loyalty', href: '#' },
        { name: 'Settings', icon: 'settings', href: '#' }
      ],
      actionBtnText: 'Upgrade Plan',
      widgets: (
        <div className="space-y-gutter">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-sm text-headline-sm text-primary">Curriculum Progress</h3>
            <Link href="/catalog" className="text-secondary font-label-lg text-label-lg hover:underline">View All Courses</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-lg">
            <div className="bg-surface-container-lowest border border-outline-variant p-unit-lg rounded-lg premium-shadow-hover cursor-pointer">
              <div className="flex justify-between items-start mb-unit-lg">
                <div className="bg-secondary-container p-unit-sm rounded text-secondary">
                  <span className="material-symbols-outlined">neurology</span>
                </div>
                <span className="font-label-md text-label-md bg-surface-container px-2 py-1">Advanced Genetics</span>
              </div>
              <h4 className="font-headline-sm text-[22px] leading-tight mb-2">Molecular Pathology II</h4>
              <div className="space-y-2 mt-unit-xl">
                <div className="flex justify-between text-label-lg text-on-surface-variant">
                  <span>Progress</span>
                  <span className="text-secondary font-bold">84%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container overflow-hidden rounded-full">
                  <div className="h-full bg-secondary w-[84%] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-unit-lg rounded-lg premium-shadow-hover cursor-pointer">
              <div className="flex justify-between items-start mb-unit-lg">
                <div className="bg-tertiary-fixed p-unit-sm rounded text-tertiary-container">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <span className="font-label-md text-label-md bg-surface-container px-2 py-1">Methodology</span>
              </div>
              <h4 className="font-headline-sm text-[22px] leading-tight mb-2">Statistical Meta-Analysis</h4>
              <div className="space-y-2 mt-unit-xl">
                <div className="flex justify-between text-label-lg text-on-surface-variant">
                  <span>Progress</span>
                  <span className="text-secondary font-bold">32%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container overflow-hidden rounded-full">
                  <div className="h-full bg-secondary w-[32%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    admin: {
      key: 'admin',
      name: 'Admin Director',
      roleName: 'System Admin',
      subtitle: 'All backend micro-services are operating nominally. 4 security audits completed today.',
      avatarInitials: 'AD',
      metrics: [
        { label: 'System Uptime', value: '99.98%', icon: 'cloud_done' },
        { label: 'Total Users', value: '48,290', icon: 'group' },
        { label: 'Pending Audits', value: '2', icon: 'assignment_late' }
      ],
      sidebarLinks: [
        { name: 'System Status', icon: 'dashboard', href: '/dashboard' },
        { name: 'User Management', icon: 'group', href: '/admin' },
        { name: 'Access Control', icon: 'lock', href: '#' },
        { name: 'Security Audits', icon: 'shield', href: '#' },
        { name: 'Global Config', icon: 'settings', href: '#' }
      ],
      actionBtnText: 'Maintenance Mode',
      widgets: (
        <div className="space-y-gutter animate-fade-in-up">
          <h3 className="font-headline-sm text-headline-sm text-primary">Admin System Operations Log</h3>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-unit-xl space-y-unit-md premium-shadow">
            <div className="flex items-center justify-between text-sm border-b pb-2">
              <span className="font-bold text-primary">System Node</span>
              <span className="font-bold text-primary">Status</span>
            </div>
            <div className="flex justify-between text-body-md py-1 border-b border-outline-variant/30">
              <span className="text-on-surface-variant">Database Replication Node A</span>
              <span className="text-secondary font-bold">Active / Synced</span>
            </div>
            <div className="flex justify-between text-body-md py-1 border-b border-outline-variant/30">
              <span className="text-on-surface-variant">API Cache Invalidation Queue</span>
              <span className="text-secondary font-bold">0 Pending</span>
            </div>
            <div className="flex justify-between text-body-md py-1">
              <span className="text-on-surface-variant">Vercel Auto-Deployment Node</span>
              <span className="text-on-tertiary-container font-bold">Idle / Success</span>
            </div>
          </div>
        </div>
      )
    },
    partner: {
      key: 'partner',
      name: 'Elena Vance (Vanguard Holdings)',
      roleName: 'Brand Partner',
      subtitle: 'Co-branded campaign metrics are up 24% following the Annual Leadership Symposium.',
      avatarInitials: 'EV',
      metrics: [
        { label: 'Campaign Reach', value: '142K', icon: 'campaign' },
        { label: 'Shared Assets', value: '12', icon: 'folder_shared' },
        { label: 'Inbound Inquiries', value: '45', icon: 'chat' }
      ],
      sidebarLinks: [
        { name: 'Partner Dashboard', icon: 'dashboard', href: '/dashboard' },
        { name: 'Active Campaigns', icon: 'campaign', href: '#' },
        { name: 'Media Assets', icon: 'folder_shared', href: '/media' },
        { name: 'Lead Pipeline', icon: 'connect_without_contact', href: '/partners' },
        { name: 'Brand Kit Settings', icon: 'settings', href: '#' }
      ],
      actionBtnText: 'Review Brand Kit',
      widgets: (
        <div className="space-y-gutter">
          <h3 className="font-headline-sm text-headline-sm text-primary">Co-Branded Assets & Agreements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-lg">
            <div className="bg-surface-container-lowest border border-outline-variant p-unit-lg rounded-lg premium-shadow-hover">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary">description</span>
                <span className="text-xs font-bold text-on-surface-variant uppercase">Agreement</span>
              </div>
              <h4 className="font-headline-sm text-[22px] leading-tight mb-2">Sovereign Leadership Series: Keynotes</h4>
              <p className="text-on-surface-variant text-body-sm">Status: <span className="text-secondary font-bold">Active & Signed</span></p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-unit-lg rounded-lg premium-shadow-hover">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-on-tertiary-container">edit_document</span>
                <span className="text-xs font-bold text-on-surface-variant uppercase">Drafting</span>
              </div>
              <h4 className="font-headline-sm text-[22px] leading-tight mb-2">Longevity Protocols Co-Authoring</h4>
              <p className="text-on-surface-variant text-body-sm">Status: <span className="text-on-tertiary-container font-bold">Under Faculty Review</span></p>
            </div>
          </div>
        </div>
      )
    },
    sponsor: {
      key: 'sponsor',
      name: 'Arthur Pendelton',
      roleName: 'Institutional Sponsor',
      subtitle: 'Thank you for your generous endowment. Your sponsorship funds 4 active research cohorts.',
      avatarInitials: 'AP',
      metrics: [
        { label: 'Grants Allocated', value: '$250,000', icon: 'payments' },
        { label: 'Active Cohorts', value: '4', icon: 'groups' },
        { label: 'Impact Rating', value: '98%', icon: 'grade' }
      ],
      sidebarLinks: [
        { name: 'Endowment Portal', icon: 'dashboard', href: '/dashboard' },
        { name: 'Sponsored Cohorts', icon: 'groups', href: '#' },
        { name: 'Impact Reports', icon: 'analytics', href: '/impact' },
        { name: 'Tax Statements', icon: 'receipt_long', href: '#' }
      ],
      actionBtnText: 'Manage Grants',
      widgets: (
        <div className="space-y-gutter">
          <h3 className="font-headline-sm text-headline-sm text-primary">Sponsored Cohort Milestones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-lg">
            <div className="bg-surface-container-lowest border border-outline-variant p-unit-lg rounded-lg premium-shadow-hover">
              <h4 className="font-label-lg text-label-lg text-secondary mb-1">COHORT A</h4>
              <h5 className="font-headline-sm text-xl mb-3">Stoic Neuro-Regulation Study</h5>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mb-2">
                <div className="bg-secondary h-full w-[85%] rounded-full"></div>
              </div>
              <p className="text-xs text-on-surface-variant">Fund allocation status: <span className="font-bold">85% disbursed</span></p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-unit-lg rounded-lg premium-shadow-hover">
              <h4 className="font-label-lg text-label-lg text-secondary mb-1">COHORT B</h4>
              <h5 className="font-headline-sm text-xl mb-3">Metabolic Longevity Protocol</h5>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mb-2">
                <div className="bg-secondary h-full w-[100%] rounded-full"></div>
              </div>
              <p className="text-xs text-on-surface-variant">Fund allocation status: <span className="font-bold">100% disbursed</span></p>
            </div>
          </div>
        </div>
      )
    },
    moderator: {
      key: 'moderator',
      name: 'Sarah Mod',
      roleName: 'Community Moderator',
      subtitle: '4 pending forum threads and 2 member flag warnings require moderator attention.',
      avatarInitials: 'SM',
      metrics: [
        { label: 'Pending Flags', value: '2', icon: 'flag' },
        { label: 'Active Forums', value: '14', icon: 'forum' },
        { label: 'Daily Reports', value: '5', icon: 'report_problem' }
      ],
      sidebarLinks: [
        { name: 'Mod Queue', icon: 'dashboard', href: '/dashboard' },
        { name: 'Flagged Content', icon: 'flag', href: '#' },
        { name: 'Member Verification', icon: 'verified_user', href: '/members' },
        { name: 'Rules & FAQ Editor', icon: 'rule', href: '#' }
      ],
      actionBtnText: 'Review Guidelines',
      widgets: (
        <div className="space-y-gutter">
          <h3 className="font-headline-sm text-headline-sm text-primary">Moderation Flags Queue</h3>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-unit-xl space-y-unit-md premium-shadow">
            <div className="flex justify-between items-center py-2 border-b border-outline-variant/30">
              <div>
                <h5 className="font-bold text-primary">Thread: Ethical CRISPR Applications</h5>
                <p className="text-xs text-on-surface-variant">Flag reason: formatting issues & citations missing</p>
              </div>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded text-xs font-bold uppercase">Resolve</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <h5 className="font-bold text-primary">Post: Asymmetric Investment Strategies</h5>
                <p className="text-xs text-on-surface-variant">Flag reason: promotional/advertisement warning</p>
              </div>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded text-xs font-bold uppercase">Resolve</span>
            </div>
          </div>
        </div>
      )
    }
  };

  const activePersona = personas[selectedPersona] || personas.member;

  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      
      {/* Sidebar Navigation */}
      <aside className="h-screen w-64 sticky left-0 bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline flex flex-col py-8 gap-unit z-20 shrink-0">
        <div className="px-6 mb-10">
          <img
            alt="Dr. Ayuba's Corner"
            className="w-full h-auto object-contain hover:translate-y-[-1px] transition-transform"
            src="/images/Dr_Abuba_Logo_Full-no_bg.png"
          />
        </div>
        
        <nav className="flex-grow flex flex-col">
          {activePersona.sidebarLinks.map((link, idx) => {
            const isActive = idx === 0; // Simulate first item as active
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-6 py-3 font-label-lg text-label-lg transition-all duration-150 ease-in-out border-l-4 ${
                  isActive
                    ? 'text-primary dark:text-primary-fixed font-bold border-secondary bg-surface-container-high'
                    : 'text-on-surface-variant dark:text-on-surface-variant border-transparent hover:bg-surface-container-high/40'
                }`}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="px-6 mt-auto">
          <button className="w-full bg-primary text-on-primary py-3 px-4 font-label-lg text-label-lg rounded-none hover:bg-opacity-95 transition-opacity">
            {activePersona.actionBtnText}
          </button>
        </div>
      </aside>

      {/* Main Panel Content Area */}
      <main className="flex-grow flex flex-col h-screen overflow-y-auto custom-scrollbar bg-surface">
        
        {/* Top Header Panel */}
        <header className="w-full h-20 px-margin-desktop flex justify-between items-center bg-surface dark:bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-10 shrink-0">
          <div className="flex flex-col flex-shrink-0">
            <span className="font-headline-sm text-headline-sm text-primary font-bold">
              {activePersona.roleName} Dashboard
            </span>
          </div>
          
          <div className="flex items-center gap-gutter flex-nowrap ml-unit-lg">
            <div className="relative flex-shrink-0">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">search</span>
              <input
                className="pl-10 pr-4 py-2 bg-surface-container border border-outline-variant rounded-full text-body-sm focus:outline-none focus:ring-1 focus:ring-primary w-64"
                placeholder="Search metrics..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-unit-md flex-shrink-0">
              <button 
                onClick={() => setInboxCount(0)}
                className="relative p-1 hover:bg-surface-container rounded-full"
                aria-label="Notifications"
              >
                <span className="material-symbols-outlined text-primary block">notifications</span>
                {inboxCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-secondary w-2 h-2 rounded-full"></span>
                )}
              </button>
              
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold shadow-sm">
                {activePersona.avatarInitials}
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Dashboard View */}
        <div className="p-margin-desktop space-y-unit-2xl max-w-container-max mx-auto w-full flex-grow animate-fade-in-up">
          
          {/* Persona Switcher widget */}
          <div className="w-full glass-panel rounded-lg p-unit-md flex flex-wrap items-center gap-unit-md border border-outline-variant/30 premium-shadow">
            <span className="text-xs font-bold font-label-lg text-primary uppercase tracking-widest">Active Experience:</span>
            <div className="flex flex-wrap gap-1">
              {Object.keys(personas).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedPersona(key)}
                  className={`px-3 py-1.5 text-xs font-label-lg transition-all rounded ${
                    selectedPersona === key
                      ? 'bg-secondary text-white font-bold'
                      : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  {personas[key].roleName}
                </button>
              ))}
            </div>
          </div>

          {/* Welcome & Citations Section */}
          <section className="flex flex-col md:flex-row justify-between items-end gap-gutter">
            <div className="space-y-unit-sm">
              <p className="font-label-lg text-label-lg text-secondary tracking-widest uppercase">Overview</p>
              <h2 className="font-display-lg text-display-lg text-primary leading-tight">
                Good Morning, {activePersona.name}.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                {activePersona.subtitle}
              </p>
            </div>
            
            <div className="bg-primary-container p-unit-lg rounded-xl flex items-center gap-unit-lg text-on-primary-container border border-outline-variant/10 shadow-sm">
              {activePersona.metrics.map((metric, idx) => (
                <React.Fragment key={metric.label}>
                  {idx > 0 && <div className="w-[1px] h-12 bg-on-primary-container/20 hidden sm:block"></div>}
                  <div className="text-right">
                    <p className="font-label-md text-label-md opacity-80">{metric.label}</p>
                    <p className="font-headline-sm text-headline-sm font-bold">{metric.value}</p>
                  </div>
                </React.Fragment>
              ))}
              <span className="material-symbols-outlined text-4xl text-on-tertiary-container">military_tech</span>
            </div>
          </section>

          {/* Bento Grids of Widgets & Event sidebars */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            
            {/* Dynamic Widgets Column */}
            <div className="lg:col-span-8 space-y-gutter">
              {activePersona.widgets}
              
              {/* Saved Reading List (High Contrast Bento) */}
              <div className="space-y-unit-lg pt-unit-xl">
                <h3 className="font-headline-sm text-headline-sm text-primary">Saved Library Folders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-unit-md">
                  
                  <div className="group relative overflow-hidden h-64 bg-primary flex items-end p-unit-md premium-shadow rounded-lg cursor-pointer">
                    <div 
                      className="absolute inset-0 opacity-40 group-hover:translate-y-[-1px] transition-transform duration-150 bg-cover bg-center" 
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhGBEUnzW4i2oCnG_EveRrz5wyOwC7_r_L3b6s4mmQ-MFosnKWnZpEpZx4gSx-8LW2tEJjP08Ks8_hnpCRa2_iao0Ut22y__gMJcQo_ZzayrXz2XDaAzMpZeG74UMIyaAAfuWYdO2u-pUTZLjEOdS4hBbqE37NwbGb1yxCz89GF6uTgZigp7wo2xZBWanvbQ_Ot_-_O40Oc3ybOWGGibrI2rCQPEAs2KbVZduvhJtwuWBK5J2HddEEHo6IDnVppI7wRCb0kmIggho')" }}
                    />
                    <div className="relative z-10 space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-secondary-fixed bg-secondary/80 px-2 py-0.5 font-bold">Article</span>
                      <h5 className="text-on-primary font-headline-sm text-lg leading-snug">CRISPR Neonatal Ethics</h5>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden h-64 bg-primary flex items-end p-unit-md premium-shadow rounded-lg cursor-pointer">
                    <div 
                      className="absolute inset-0 opacity-40 group-hover:translate-y-[-1px] transition-transform duration-150 bg-cover bg-center" 
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrg3TImOU2X5siC_lzv96kI5Em6NbkcUki80Xi0SG8q1dJzDLy_h5exAdcTTL7Zs1p-BdwJI9sVVYfoxv-xi3sk_Yqf6Z-Cb1fIhaAkBEBg23OUIZnjkBzG2W-mh596laNf03RxhQWDAAii9hs7P6ngQ0KyO3a5j__CNdx1rKiPVTtWQCJbhtKaGmXrh3SaecLML7bEwJlS02rv6LwqZy310JgnZDYCxy13QLA0aU2_PsiabNDXL4Ib5Lz40gcBmqrfw5lmPjMCqI')" }}
                    />
                    <div className="relative z-10 space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-tertiary-fixed bg-tertiary/80 px-2 py-0.5 font-bold font-label-md">Podcast</span>
                      <h5 className="text-on-primary font-headline-sm text-lg leading-snug">Neural Mapping</h5>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden h-64 bg-primary flex items-end p-unit-md premium-shadow rounded-lg cursor-pointer">
                    <div 
                      className="absolute inset-0 opacity-40 group-hover:translate-y-[-1px] transition-transform duration-150 bg-cover bg-center" 
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCy9x9V5lkCi-pvIvtqJVZo9-zi2lPLcqwGNvlB8iODYV5mPBcgeapHSBzAIPlKDnH9o14J7_ia-_3mPPCIv9KZ7M1bJi5mNi_5qKMjcv5QnmWw0AHHkTJfFiTMo-p6s8RB5S8XuyYM1qsZ92VD5lP1aottaBZSq9kIlMoajj70CUINM0nA7d6LRjBHBXKRwdQvIu7IFOwVS2Mxyl9ZhcQZisevE5gHx2EhjbwnlFe-6RlNe0Waqfe4A4H_th6nqJd-nrWXo05cQ-8')" }}
                    />
                    <div className="relative z-10 space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-primary-fixed bg-primary/80 px-2 py-0.5 font-bold font-label-md">Report</span>
                      <h5 className="text-on-primary font-headline-sm text-lg leading-snug">Global Health Trends</h5>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Sidebar: Premium Events */}
            <div className="lg:col-span-4 space-y-gutter">
              <div className="bg-primary-container text-on-primary-container p-unit-xl rounded-lg border border-primary flex flex-col gap-unit-lg h-full shadow-md">
                <div className="space-y-unit-sm">
                  <h3 className="font-headline-sm text-headline-sm text-white font-bold">Upcoming Premium Events</h3>
                  <p className="font-body-sm text-body-sm opacity-75">Exclusively for Institutional Members</p>
                </div>
                
                <div className="space-y-gutter mt-unit-lg">
                  <div className="group cursor-pointer">
                    <p className="font-label-lg text-secondary-container font-bold mb-1">JUNE 14 • 10:00 AM</p>
                    <h4 className="font-headline-sm text-xl text-white group-hover:text-secondary-container transition-colors">Global Oncology Symposium</h4>
                    <p className="font-body-sm text-body-sm opacity-70 mt-2">Featuring keynote speakers from Johns Hopkins and the WHO.</p>
                    <div className="mt-4 flex gap-unit-sm items-center text-label-md uppercase tracking-widest text-white">
                      <span>Register</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                    <div className="w-full h-[1px] bg-white/10 mt-6"></div>
                  </div>

                  <div className="group cursor-pointer">
                    <p className="font-label-lg text-secondary-container font-bold mb-1">JUNE 22 • 02:00 PM</p>
                    <h4 className="font-headline-sm text-xl text-white group-hover:text-secondary-container transition-colors">Digital Health Ethics</h4>
                    <p className="font-body-sm text-body-sm opacity-70 mt-2">Interactive session on AI-driven diagnostics and patient privacy.</p>
                    <div className="mt-4 flex gap-unit-sm items-center text-label-md uppercase tracking-widest text-white">
                      <span>Join Waitlist</span>
                      <span className="material-symbols-outlined text-sm">hourglass_empty</span>
                    </div>
                    <div className="w-full h-[1px] bg-white/10 mt-6"></div>
                  </div>

                  <div className="group cursor-pointer">
                    <p className="font-label-lg text-secondary-container font-bold mb-1">JULY 05 • ALL DAY</p>
                    <h4 className="font-headline-sm text-xl text-white group-hover:text-secondary-container transition-colors">Annual Gala Dinner</h4>
                    <p className="font-body-sm text-body-sm opacity-70 mt-2">Join us for the 15th annual celebration of intellectual achievements.</p>
                    <div className="mt-4 flex gap-unit-sm items-center text-label-md uppercase tracking-widest text-white">
                      <span>Download Invite</span>
                      <span className="material-symbols-outlined text-sm">download</span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-unit-xl">
                  <div className="bg-white/5 p-unit-md border-l-2 border-secondary-container rounded">
                    <p className="italic font-body-sm text-white/95">&quot;Education is the most powerful weapon which you can use to change the world.&quot;</p>
                    <p className="text-secondary-container font-label-md mt-2 text-right">— Nelson Mandela</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Integrated Institutional Footer */}
        <footer className="w-full bg-primary-container text-on-primary-container border-t border-outline-variant py-8 px-margin-desktop mt-unit-2xl">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-unit-md text-xs">
            <p className="opacity-70">© {new Date().getFullYear()} Dr. Ayuba&apos;s Corner. Institutional Integrity assured.</p>
            <div className="flex gap-4 opacity-70">
              <Link href="/about" className="hover:underline">Privacy Policy</Link>
              <Link href="/about" className="hover:underline">Terms of Service</Link>
              <Link href="/about" className="hover:underline">System Logs</Link>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
