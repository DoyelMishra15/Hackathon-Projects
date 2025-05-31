import { NavItem, HeroProps, TimelineEvent, SponsorTier, FAQ, TeamMember, PrizeCategory } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Team', href: '#team' },
];

export const heroData: HeroProps = {
  title: "World's Largest Hackathon",
  subtitle: "Join thousands of developers, designers, and innovators for 48 hours of creation and collaboration",
  date: "October 15-17, 2025",
  location: "San Francisco, CA + Virtual Worldwide",
  ctaText: "Register Now",
  ctaLink: "#register"
};

export const timelineEvents: TimelineEvent[] = [
  {
    title: "Applications Open",
    date: "July 1, 2025",
    time: "9:00 AM PST",
    description: "Submit your application to participate in the World's Largest Hackathon."
  },
  {
    title: "Application Deadline",
    date: "September 15, 2025",
    time: "11:59 PM PST",
    description: "Last day to submit your application to participate."
  },
  {
    title: "Participant Announcement",
    date: "September 30, 2025",
    time: "12:00 PM PST",
    description: "Selected participants will be notified via email."
  },
  {
    title: "Kickoff Ceremony",
    date: "October 15, 2025",
    time: "10:00 AM PST",
    description: "Opening remarks, sponsor presentations, and team formation."
  },
  {
    title: "Hacking Begins",
    date: "October 15, 2025",
    time: "12:00 PM PST",
    description: "Start building your projects! Mentors will be available for support."
  },
  {
    title: "Midway Checkpoints",
    date: "October 16, 2025",
    time: "2:00 PM PST",
    description: "Share your progress and get feedback from mentors and judges."
  },
  {
    title: "Hacking Ends",
    date: "October 17, 2025",
    time: "12:00 PM PST",
    description: "All projects must be submitted by this time."
  },
  {
    title: "Judging & Awards",
    date: "October 17, 2025",
    time: "4:00 PM PST",
    description: "Project presentations, judging, and awards ceremony."
  }
];

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Platinum",
    sponsors: [
      {
        name: "Bolt",
        logo: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "https://bolt.com"
      },
      {
        name: "TechCorp",
        logo: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "https://example.com"
      }
    ]
  },
  {
    name: "Gold",
    sponsors: [
      {
        name: "InnovateCo",
        logo: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "https://example.com"
      },
      {
        name: "FutureTech",
        logo: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "https://example.com"
      },
      {
        name: "DevSolutions",
        logo: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "https://example.com"
      }
    ]
  },
  {
    name: "Silver",
    sponsors: [
      {
        name: "CodeCraft",
        logo: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "https://example.com"
      },
      {
        name: "ByteWorks",
        logo: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "https://example.com"
      },
      {
        name: "NexGen",
        logo: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "https://example.com"
      },
      {
        name: "QuantumLabs",
        logo: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "https://example.com"
      }
    ]
  }
];

export const faqs: FAQ[] = [
  {
    question: "Who can participate in the hackathon?",
    answer: "The World's Largest Hackathon is open to developers, designers, and innovators of all skill levels. Whether you're a seasoned programmer or just starting out, there's a place for you in our community."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, participation in the hackathon is completely free. We believe in making innovation accessible to everyone."
  },
  {
    question: "Do I need to have a team to participate?",
    answer: "No, you can register as an individual and form or join a team during the event. We'll have team formation activities to help you find collaborators with complementary skills."
  },
  {
    question: "What should I bring to the in-person event?",
    answer: "For in-person participants, bring your laptop, charger, any hardware you plan to use, and personal items for the 48-hour event. Meals, snacks, and beverages will be provided."
  },
  {
    question: "How will the hybrid format work?",
    answer: "The hackathon will have both in-person and virtual components. Virtual participants will have access to the same resources, mentors, and judging criteria as in-person participants through our dedicated event platform."
  },
  {
    question: "What kind of projects can I build?",
    answer: "You can build anything that aligns with our theme and challenge categories. Projects can range from mobile apps and web platforms to hardware solutions and AI implementations."
  },
  {
    question: "How will projects be judged?",
    answer: "Projects will be evaluated based on innovation, technical complexity, design, practicality, and adherence to the challenge themes. Our panel of judges includes industry experts and tech leaders."
  },
  {
    question: "Will there be mentors available?",
    answer: "Yes, we'll have mentors from various tech backgrounds available throughout the event to provide guidance, technical support, and feedback on your projects."
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Alex Johnson",
    role: "Event Director",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedIn: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com"
  },
  {
    name: "Sam Rivera",
    role: "Technical Lead",
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedIn: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Taylor Kim",
    role: "Partnerships Manager",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedIn: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    name: "Jamie Patel",
    role: "Operations Lead",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedIn: "https://linkedin.com"
  }
];

export const prizeCategories: PrizeCategory[] = [
  {
    title: "Grand Prize",
    prize: "$50,000",
    description: "Awarded to the most innovative and impactful overall project.",
    icon: "trophy"
  },
  {
    title: "AI & Machine Learning",
    prize: "$20,000",
    description: "Best use of AI/ML technologies to solve real-world problems.",
    icon: "brain"
  },
  {
    title: "Web3 & Blockchain",
    prize: "$20,000",
    description: "Most innovative application of blockchain technology.",
    icon: "blocks"
  },
  {
    title: "Social Impact",
    prize: "$15,000",
    description: "Project with the greatest potential for positive social change.",
    icon: "heart-handshake"
  },
  {
    title: "Best Design",
    prize: "$10,000",
    description: "Most well-designed project with exceptional user experience.",
    icon: "palette"
  },
  {
    title: "Best Hardware Hack",
    prize: "$10,000",
    description: "Most innovative hardware or IoT solution.",
    icon: "cpu"
  }
];