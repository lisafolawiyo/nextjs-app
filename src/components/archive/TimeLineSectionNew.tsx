'use client';

import { useState } from 'react';

import Image from 'next/image';

import { timelineEvents } from '@/data/timelineData';

export function TimelineSectionNew() {
  const [selectedYear, setSelectedYear] = useState(2005);

  const selectedEvent = timelineEvents.find(
    (event) => event.year === selectedYear,
  );

  const years = timelineEvents.map((event) => event.year);

  return (
    <section className="mx-auto px-6 py-16 text-[#212529] md:px-8">
      <h3 className="mb-10 text-[40px] font-light tracking-tight max-md:leading-[45px] md:text-[45px] 2xl:mb-16 2xl:text-[96px]">
        A life in colour; The story so far...
      </h3>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[340px_1fr] xl:grid-cols-[400px_1fr]">
        {/* Left Column - Year Selector */}
        <div className="flex flex-col">
          {/* Selected Year Display */}
          <div className="mb-8 flex items-center gap-4 border-b border-[#212529] pb-6">
            <h2 className="text-6xl font-light md:text-7xl">{selectedYear}</h2>
            <svg
              className="h-8 w-8 text-[#212529]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Scrollable Year List */}
          <div className="scrollbar-hide max-h-[400px] space-y-6 overflow-y-auto pr-4 lg:max-h-[600px]">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`w-full border-b border-[#212529] pb-4 text-left text-3xl font-light transition-all duration-300 hover:text-[#666] md:text-4xl ${
                  selectedYear === year
                    ? 'font-normal text-[#212529]'
                    : 'text-[#999]'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Content Display */}
        {selectedEvent && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Text Content */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h4 className="mb-4 text-xl font-normal leading-relaxed text-[#212529] md:text-2xl">
                  {selectedEvent.title}
                </h4>
                <p className="text-base leading-relaxed text-[#212529] md:text-lg">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Links Section */}
              {selectedEvent.links && selectedEvent.links.length > 0 && (
                <div className="space-y-4">
                  <h5 className="text-lg font-normal text-[#212529]">
                    Discover More
                  </h5>
                  <div className="space-y-2">
                    {selectedEvent.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border-b border-[#212529] pb-2 text-sm text-[#212529] underline transition-colors hover:text-[#666] md:text-base"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
              <Image
                src={selectedEvent.image}
                alt={`${selectedEvent.year} - ${selectedEvent.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
