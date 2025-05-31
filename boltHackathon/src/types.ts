export interface NavItem {
  label: string;
  href: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  ctaText: string;
  ctaLink: string;
}

export interface TimelineEvent {
  title: string;
  date: string;
  time: string;
  description: string;
}

export interface SponsorTier {
  name: string;
  sponsors: Sponsor[];
}

export interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedIn?: string;
  twitter?: string;
  github?: string;
}

export interface PrizeCategory {
  title: string;
  prize: string;
  description: string;
  icon: string;
}