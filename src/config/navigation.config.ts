export interface NavLink {
  name: string;
  href: string;
}

export const PUBLIC_LINKS: NavLink[] = [
  { name: 'About', href: '/about' },
  { name: 'Articles', href: '/editorial' },
  { name: 'Videos', href: '/video-archive' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'Community', href: '/community-networking-hub-desktop-refined' },
  { name: 'Courses', href: '/catalog' },
  { name: 'Marketplace', href: '/marketplace' },
];

export const DASHBOARD_LINKS: NavLink[] = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Members Only', href: '/members' },
  { name: 'Admin Console', href: '/admin' },
  { name: 'My Profile', href: '/profile' },
  { name: 'Public Portal', href: '/' },
];

export const ACTIVE_STATE_MAPPING: Record<string, string> = {
  '/about': 'About',
  '/editorial': 'Articles',
  '/editorial-legacy': 'Articles',
  '/video-archive': 'Videos',
  '/video-archive-legacy': 'Videos',
  '/podcast': 'Podcast',
  '/podcast-archive': 'Podcast',
  '/community-networking-hub-desktop': 'Community',
  '/community-networking-hub-desktop-refined': 'Community',
  '/catalog': 'Courses',
  '/catalog-legacy': 'Courses',
  '/marketplace': 'Marketplace',
};
