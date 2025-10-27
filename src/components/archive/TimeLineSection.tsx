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
      "Ongoing international press and features; brand collections featured in global trade shows and platforms. Lisa Folawiyo's work continues to shape the evolving aesthetic conversation at the core of contemporary African fashion etc. Inc etc.",
    link: 'https://www.lisafolawiyo.com/',
  },
  {
    date: 'Nov 8, 2024',
    title: 'Collection 1:2025* runway presentation (Lagos)',
    description:
      "A quilt-inflected, hand-crafted collection; Lagunan palettes at Àsìkò Towani pre-viewing the brand's 2025 direction.",
    link: 'https://www.lisafolawiyo.com/',
  },
  {
    date: '2025',
    title: 'London retail pop-up & major capsule collaboration',
    description:
      'Lagos fashion Wks x Selfridges "Women Treasure" pop-up space; New Lisa Folawiyo x John Lewis Collection; the evolution of Siya-Badun further expands with more collaborations on bespoke capsule co-designed with Lisa Folawiyo.',
    link: 'https://www.lisafolawiyo.com/',
  },
  {
    date: 'Q2 2025',
    title: 'Paris Fashion Week debut',
    description:
      'First official presentation at Paris Fashion Week, showcasing the "Harmattan Gold" collection featuring innovative textile techniques and sustainable materials.',
    link: 'https://www.lisafolawiyo.com/',
  },
  {
    date: 'Sep 2025',
    title: 'New York flagship store opening',
    description:
      'Opening of first US flagship location in SoHo, featuring exclusive retail designs and an immersive brand experience space.',
    link: 'https://www.lisafolawiyo.com/',
  },
  {
    date: 'Jan 2026',
    title: 'Sustainable textiles initiative launch',
    description:
      'Partnership with African textile artisans to develop eco-friendly fabric innovations and establish ethical production standards across the supply chain.',
    link: 'https://www.lisafolawiyo.com/',
  },
  {
    date: 'Mar 2026',
    title: 'Digital fashion collection drop',
    description:
      'Launch of first NFT fashion collection alongside physical garments, bridging traditional craftsmanship with digital innovation.',
    link: 'https://www.lisafolawiyo.com/',
  },
  {
    date: 'Jun 2026',
    title: 'Museum exhibition retrospective',
    description:
      'Major retrospective at the Victoria and Albert Museum showcasing 15 years of design evolution and cultural impact.',
    link: 'https://www.lisafolawiyo.com/',
  },
  {
    date: 'Oct 2026',
    title: 'Milan design collaboration',
    description:
      'Limited edition furniture and home goods collection in partnership with leading Italian design house, expanding into lifestyle categories.',
    link: 'https://www.lisafolawiyo.com/',
  },
  {
    date: '2027',
    title: 'Global retail expansion',
    description:
      'Opening of flagship stores in Tokyo, Dubai, and Seoul, establishing permanent international retail presence across three continents.',
    link: 'https://www.lisafolawiyo.com/',
  },
  {
    date: '2028',
    title: 'Design education foundation launch',
    description:
      'Establishment of the Folawiyo Creative Foundation to support emerging African designers through mentorship programs and educational initiatives.',
    link: 'https://www.lisafolawiyo.com/',
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
