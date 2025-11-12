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
    title: "Brand founded as 'Jewel by Lisa'",
    description:
      'Lisa Folawiyo launches her label in Lagos, pioneering intricately hand-embellished Ankara as ready-to-wear.',
    image: '/images/2005_image.png',
    links: [
      {
        label: 'Discover More',
        url: 'https://youtube.com/watch?si=BjI1qHyD82YPudNf&v=2jwilRPrf4I&feature=youtu.be',
      },
    ],
  },
  {
    year: 2009,
    title: 'Early growth & runway presence',
    description:
      'Builds a signature around beading and high-quality embellishment on wax prints. The brand begins consistent Lagos Fashion Week showings.',
    image: '/images/2008_image.jpg',
    links: [
      {
        label: 'Discover More',
        url: 'https://www.bellanaija.com/2009/09/afro-chic-in-the-city-jewel-by-lisa-springsummer-2010-arise-promise/',
      },
    ],
  },
  {
    year: 2011,
    title: "'The J Label' Diffusion line launches",
    description:
      'A younger, more accessibly priced sister to Jewel by Lisa debuts.',
    image: '/images/2011_image.jpg',
    links: [
      {
        label: 'Discover More',
        url: 'https://www.bellanaija.com/2011/06/young-cool-affordable-luxe-jewel-by-lisa-launches-diffusion-line-the-j-label/',
      },
    ],
  },
  {
    year: 2012,
    title: 'International recognition (Vogue Italia feature)',
    description:
      "Collaboration with L'Oréal Italy on limited lipstick and nail polish tied to the SS13 collection.",
    image: '/images/2012_image.jpg',
    links: [
      {
        label: 'Discover More',
        url: 'https://www.vogue.it/talents/concorsi-e-altro/2012/09/jewel-by-lisa',
      },
    ],
    exploreMoreUrl:
      'https://www.bellanaija.com/2012/12/bn-style-bytes-jewel-by-lisa-debuts-lipstick-nail-polish-in-collaboration-with-loreal-italy-exclusive-look-at-the-springsummer-2013-lookbook/',
  },
  {
    year: 2013,
    title: 'Momentum on and off the runway',
    description:
      'The Lagos Fashion Week and Design Week collections gain wider press. Simultaneously, Lisa Folawiyo is named one of WWD\'s "8 Emerging Talents" in 2014.',
    image: '/images/2013_image.jpg',
    links: [
      {
        label: 'Discover More',
        url: 'https://www.okayafrica.com/tag/jewel-by-lisa',
      },
    ],
  },
  {
    year: 2015,
    title: 'The rebrand to eponymous "Lisa Folawiyo"',
    description:
      'The house transitions from "Jewel by Lisa" to Lisa Folawiyo. Lisa Folawiyo, our founder, is also listed in the BOF 500.',
    image: '/images/2015_image.jpg',
    links: [
      {
        label: 'Discover More',
        url: 'https://www.businessoffashion.com/people/lisa-folawiyo/',
      },
    ],
  },
  {
    year: 2019,
    title: 'Global retail and showcases',
    description:
      'Expands international stockists including Selfridges UK, whilst maintaining showrooms in Lagos and New York. The brand also hosted trunk shows in partnership with global retailers such as Moda Operandi.',
    image: '/images/2019_image.jpg',
    exploreMoreUrl: '#',
  },
  {
    year: 2023,
    title: 'London Retail Pop-Up & major capsule collaboration',
    description:
      'Lagos Fashion Week x Selfridges "Woven Threads" pop-up features Lisa Folawiyo pieces in London between May to June. Also, There Was One (Farfetch/New Guards Group) releases an 8-piece capsule co-designed with Lisa Folawiyo.',
    image: '/images/2023_image.png',
    links: [
      {
        label: 'Discover More',
        url: 'https://us.fashionnetwork.com/news/Farfetch-s-there-was-one-in-womenswear-collab-with-lisa-folawiyo,1524216.html',
      },
    ],
  },
  {
    year: 2024,
    title: '"Collection 1/2025" runway presentation',
    description:
      "A sport-inflected, hand-crafted collection is shown poolside at Azuri Towers, previewing the brand's fresh direction.",
    image: '/images/2024_image.jpg',
    links: [
      {
        label: 'Discover More',
        url: 'https://marieclaire.ng/high-fashion-meets-athletic-energy-lisa-folawiyos-collection-1-2025/',
      },
    ],
  },
  {
    year: 2025,
    title: '20th year anniversary & continued global visibility',
    description:
      'Ongoing international press features emphasizing craftsmanship, Lagos roots, and evolving silhouettes. The brand had further cultural tie-ins via Woven Threads x Embassy of Sweden showcase.',
    image: '/images/2025_image.jpg',
    links: [
      {
        label: 'Discover More',
        url: 'https://www.instagram.com/p/DIy24IxqHom/',
      },
    ],
  },
];
