interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  link: string;
}

function TimelineItem({ date, title, description, link }: TimelineItemProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-6 border-t border-[#212529] py-8 xl:min-h-[187px]  xl:grid-cols-[1fr_45%_20%]">
      {/* First Column - Date & Title */}
      <div className="flex flex-col gap-4 md:gap-6 xl:flex-row xl:items-center">
        <div className="flex min-w-[40%] xl:items-start">
          <span className="flex-shrink-0 whitespace-nowrap rounded-full border border-[#212529] px-3 py-1 text-center text-sm font-light capitalize text-[#212529] md:min-w-[170px] md:py-2 md:text-[20px]">
            {date}
          </span>
        </div>
        <h4 className="break-words text-base font-bold text-[#212529]">
          {title}
        </h4>
      </div>

      <div>
        <p className="break-words text-base leading-relaxed text-[#212529] md:text-[20px] xl:ml-20">
          {description}
        </p>
      </div>

      <div className="flex xl:justify-end">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="whitespace-nowrap border border-black px-6 py-2 text-sm  transition-all duration-300 hover:bg-black hover:text-white md:w-[219px] md:text-base">
            DISCOVER MORE
          </button>
        </a>
      </div>
    </div>
  );
}

const timelineData = [
  {
    date: '2024-2025',
    title: 'Continued global visibility',
    description:
      'Ongoing international press and features; brand communications emphasize craftsmanship, Lagos roots, and evolving silhouettes; additional cultural/embassy tie-ins via Woven Threads × Embassy of Sweden showcase.',
    link: 'https://www.instagram.com/lisafolawiyo/',
  },
  {
    date: 'Nov 8, 2024',
    title: '"Collection 1/2025" runway presentation (Lagos)',
    description:
      "A sport-inflected, hand-crafted collection is shown poolside at Azuri Towers, previewing the brand's 2025 direction.",
    link: 'https://www.instagram.com/lisafolawiyo/',
  },
  {
    date: '2023',
    title: 'London retail pop-up & major capsule collaboration',
    description:
      'Lagos Fashion Week x Selfridges "Woven Threads" pop-up features Lisa Folawiyo pieces in London (May–June). There Was One (Farfetch/New Guards Group) releases an 8-piece capsule co-designed with Lisa Folawiyo (June 7).',
    link: 'https://www.facebook.com/lisafolawiyo/',
  },
  {
    date: '2020',
    title: 'Digital spotlights & global platforms',
    description:
      "Lagos Fashion Week's Woven Threads (digital) elevates craft narratives across African brands with Lisa Folawiyo frequently included in this ecosystem.",
    link: 'https://www.youtube.com/@LagosFashionWeek',
  },
  {
    date: '2016-2019',
    title: 'Global retail & showcases',
    description:
      'Expands international stockists (including Selfridges UK); maintains showrooms in Lagos and New York; hosts trunk shows (e.g., Moda Operandi).',
    link: 'https://www.lisafolawiyo.com/',
  },
  {
    date: '2015',
    title: 'Rebrand to eponymous "Lisa Folawiyo"',
    description:
      'The house transitions from "Jewel by Lisa" to Lisa Folawiyo; Folawiyo is also listed in the BoF 500.',
    link: 'https://www.businessoffashion.com/community/people/lisa-folawiyo',
  },
  {
    date: '2013-2014',
    title: 'Momentum on and off runway',
    description:
      'Lagos Fashion & Design Week collections gain wider press. Named one of WWD\'s "8 Emerging Talents" (2014).',
    link: 'https://www.lisafolawiyo.com/',
  },
  {
    date: '2012',
    title: 'International recognition & beauty collab',
    description:
      "Featured by Vogue Italia (Vogue Talents). Wins the African Fashion Award. Collaborates with L'Oréal Italy on limited lipstick & nail polish tied to SS13.",
    link: 'https://en.wikipedia.org/wiki/Lisa_Folawiyo',
  },
  {
    date: 'June 17, 2011',
    title: 'Diffusion line "The J Label" launches',
    description:
      'A younger, more accessibly priced sister to Jewel by Lisa debuts.',
    link: 'https://www.bellanaija.com/',
  },
  {
    date: '2008-2011',
    title: 'Early growth & runway presence',
    description:
      'Builds a signature around beading and Swarovski-level embellishment on wax prints; begins consistent fashion-week showings (Lagos).',
    link: 'https://www.okayafrica.com/',
  },
  {
    date: '2005',
    title: 'Brand founded (as "Jewel by Lisa")',
    description:
      'Lisa Folawiyo launches her label in Lagos, pioneering intricately hand-embellished Ankara as luxury ready-to-wear.',
    link: 'https://www.businessoffashion.com/community/people/lisa-folawiyo',
  },
];

export function Timeline() {
  return (
    <section className="mx-auto px-6  text-[#212529] md:px-8">
      <h3 className="mb-10 text-[40px]  font-light tracking-tight max-md:leading-[45px] md:text-[45px] 2xl:mb-16 2xl:text-[96px]">
        A life in colour; The story so far...
      </h3>
      <div className="">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
