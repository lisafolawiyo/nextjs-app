export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  image: string;
  links?: {
    label: string;
    url: string;
  }[];
  exploreMoreUrl?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: 2005,
    title: 'Brand founded (as "Jewel by Lisa")',
    description:
      'Lisa Folawiyo launches her label in Lagos, pioneering intricately hand embellished Ankara as luxury ready-to-wear.',
    image: '/images/timeline/2005.jpg',
    links: [
      {
        label: 'The Business of Fashion',
        url: 'https://jewelbylisa.com.ng',
      },
      {
        label: 'jewelbylisa.com.ng',
        url: 'https://jewelbylisa.com.ng',
      },
    ],
    exploreMoreUrl: 'https://jewelbylisa.com.ng',
  },
  {
    year: 2008,
    title: 'Early growth & runway presence',
    description:
      'Builds a signature around beading and Swarovski-level embellishment on wax prints; begins consistent fashion-week showings (Lagos).',
    image: '/images/timeline/2008.jpg',
    links: [
      {
        label: 'The Business of Fashion',
        url: 'https://jewelbylisa.com.ng',
      },
    ],
  },
  {
    year: 2011,
    title: 'Diffusion line "The J Label" launches',
    description:
      'A younger, more accessibly priced sister to Jewel by Lisa debuts.',
    image: '/images/timeline/2011.jpg',
    links: [
      {
        label: 'YNaija',
        url: 'https://ynaija.com/luxe-diffused-the-j-label-look-book/',
      },
    ],
  },
  {
    year: 2012,
    title: 'International recognition & beauty collab',
    description:
      "Featured by Vogue Italia (Vogue Talents). Wins the African Fashion Award. Collaborates with L'Oréal Italy on limited lipstick & nail polish tied to SS13.",
    image: '/images/timeline/2012.jpg',
    links: [
      {
        label: 'Fashions Finest Africa',
        url: 'https://fashionsfinestafrica.com',
      },
    ],
  },
  {
    year: 2013,
    title: 'Momentum on and off runway',
    description:
      'Lagos Fashion & Design Week collections gain wider press. Named one of WWD\'s "8 Emerging Talents" (2014).',
    image: '/images/timeline/2013.jpg',
    links: [
      {
        label: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Lisa_Folawiyo',
      },
    ],
  },
  {
    year: 2015,
    title: 'Rebrand to eponymous "Lisa Folawiyo"',
    description:
      'The house transitions from "Jewel by Lisa" to Lisa Folawiyo; Folawiyo is also listed in the BoF 500.',
    image: '/images/timeline/2015.jpg',
    links: [
      {
        label: 'Business of Fashion',
        url: 'https://www.businessoffashion.com/community/people/lisa-folawiyo',
      },
    ],
  },
  {
    year: 2016,
    title: 'Global retail & showcases',
    description:
      'Expands international stockists (including Selfridges UK); maintains showrooms in Lagos and New York; hosts trunk shows (e.g., Moda Operandi).',
    image: '/images/timeline/2016.jpg',
    links: [
      {
        label: 'Condé Nast Traveler',
        url: 'https://www.cntraveler.com',
      },
    ],
  },
  {
    year: 2020,
    title: 'Digital spotlights & global platforms',
    description:
      "Lagos Fashion Week's Woven Threads (digital) elevates craft narratives across African brands with Lisa Folawiyo frequently included in this ecosystem.",
    image: '/images/timeline/2020.jpg',
    links: [
      {
        label: 'YouTube',
        url: 'https://youtube.com/shorts/3iM4jqpn55g',
      },
    ],
  },
  {
    year: 2023,
    title: 'London retail pop-up & major capsule collaboration',
    description:
      'Lagos Fashion Week x Selfridges "Woven Threads" pop-up features Lisa Folawiyo pieces in London (May–June). There Was One (Farfetch/New Guards Group) releases an 8-piece capsule co-designed with Lisa Folawiyo (June 7).',
    image: '/images/timeline/2023.jpg',
    links: [
      {
        label: 'Selfridges Facebook',
        url: 'https://web.facebook.com/selfridges',
      },
    ],
  },
  {
    year: 2024,
    title: '"Collection 1/2025" runway presentation (Lagos)',
    description:
      "A sport-inflected, hand-crafted collection is shown poolside at Azuri Towers, previewing the brand's 2025 direction.",
    image: '/images/timeline/2024.jpg',
    links: [
      {
        label: 'Debonair Afrik',
        url: 'https://debonairafrik.com',
      },
    ],
  },
];
