'use client';

import { useState } from 'react';

import Image from 'next/image';

import { ChevronDown } from '@/components/Icons';
import { timelineEvents } from '@/data/timelineData';

export function Timeline() {
  const [selectedYear, setSelectedYear] = useState(2005);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const selectedEvent = timelineEvents.find(
    (event) => event.year === selectedYear,
  );

  const years = timelineEvents.map((event) => event.year);

  const handleYearChange = (year: number) => {
    if (year !== selectedYear) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedYear(year);
        setIsDropdownOpen(false);
        setTimeout(() => setIsAnimating(false), 50);
      }, 300);
    } else {
      setIsDropdownOpen(false);
    }
  };

  return (
    <section className="mx-auto flex flex-col px-4 py-8 text-[#212529] md:px-8 md:py-12 lg:h-screen">
      <h3 className="mb-6 text-[32px] uppercase font-light tracking-tight max-md:leading-[36px] md:text-[40px] md:mb-8 2xl:mb-10 2xl:text-[64px]">
        A life in colour; The story so far...
      </h3>

      <div className="lg:hidden flex-1 flex flex-col overflow-hidden border border-[#212529]">
        <div className="border-b border-[#212529]">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-full items-center justify-between bg-transparent px-4 py-6 hover:bg-transparent md:px-6"
          >
            <h2 className="text-4xl font-light md:text-6xl">{selectedYear}</h2>
            <ChevronDown
              className={`h-6 w-6 flex-shrink-0 text-[#212529] transition-transform duration-300 md:h-8 md:w-8 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div
              className="hide-scrollbar max-h-[200px] space-y-2 overflow-y-scroll border-t border-[#e0e0e0] px-4 py-4 md:px-6"
              onWheel={(e) => {
                e.stopPropagation();
                const container = e.currentTarget;
                container.scrollTop += e.deltaY;
              }}
            >
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={`block w-full border-b border-[#e0e0e0] pb-3 pt-1 text-left text-lg font-light transition-all duration-300 hover:text-[#212529] hover:translate-x-2 md:text-xl ${
                    selectedYear === year
                      ? 'font-normal text-[#212529]'
                      : 'text-[#999]'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedEvent && (
          <div
            className={`flex-1 flex flex-col overflow-y-auto transition-all duration-500 ${
              isAnimating ? 'translate-x-8 scale-95' : 'translate-x-0 scale-100'
            }`}
          >
            <div className="space-y-6 px-4 pt-6 pb-6">
              <h4 className="text-2xl font-normal leading-relaxed text-[#212529]">
                {selectedEvent.title}
              </h4>

              <p className="text-base leading-relaxed text-[#212529]">
                {selectedEvent.description}
              </p>

              <div className="space-y-3">
                {selectedEvent.links && selectedEvent.links.length > 0 && (
                  <>
                    {selectedEvent.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <button className="w-full border border-[#212529] px-8 py-3 text-sm font-normal uppercase tracking-wide text-[#212529] transition-all duration-300 hover:bg-[#212529] hover:text-white">
                          {link.label}
                        </button>
                      </a>
                    ))}
                  </>
                )}

                {selectedEvent.exploreMoreUrl && (
                  <a
                    href={selectedEvent.exploreMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="w-full border border-[#212529] px-8 py-3 text-sm font-normal uppercase tracking-wide text-[#212529] transition-all duration-300 hover:bg-[#212529] hover:text-white">
                      Explore More
                    </button>
                  </a>
                )}
              </div>

              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <Image
                  src={selectedEvent.image}
                  alt={`${selectedEvent.year} - ${selectedEvent.title}`}
                  fill
                  className={`object-cover object-top transition-transform duration-700 ${
                    isAnimating ? 'scale-110' : 'scale-100'
                  }`}
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="hidden grid-cols-[400px_1fr_1fr] gap-0 border border-[#212529] lg:grid xl:grid-cols-[450px_1fr_1fr] flex-1 overflow-hidden">
        <div className="flex h-full flex-col justify-between border-r border-[#212529] px-10 pb-12 pt-12 xl:px-12">
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="mb-8 flex w-full items-center justify-center gap-4 border-b border-[#212529] pb-8"
            >
              <h2 className="text-8xl font-light xl:text-9xl">
                {selectedYear}
              </h2>
              <ChevronDown
                className={`h-10 w-10 flex-shrink-0 text-[#212529] transition-transform duration-300 xl:h-12 xl:w-12 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div
                className="hide-scrollbar w-full max-h-[180px] space-y-4 overflow-y-scroll"
                onWheel={(e) => {
                  e.stopPropagation();
                  const container = e.currentTarget;
                  container.scrollTop += e.deltaY;
                }}
              >
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearChange(year)}
                    className={`block w-full border-b border-[#e0e0e0] pb-3 text-center text-lg font-light transition-all duration-300 hover:text-[#212529] hover:scale-105 xl:text-xl ${
                      selectedYear === year
                        ? 'font-normal text-[#212529]'
                        : 'text-[#999]'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>

          {selectedEvent && (
            <div
              className={`mt-auto text-center transition-all duration-500 ${
                isAnimating ? 'translate-y-4' : 'translate-y-0'
              }`}
            >
              <h4 className="text-3xl font-normal leading-relaxed text-[#212529] xl:text-4xl">
                {selectedEvent.title}
              </h4>
            </div>
          )}
        </div>

        {selectedEvent && (
          <div
            className={`flex h-full flex-col justify-between space-y-8 border-r border-[#212529] px-10 pb-12 pt-12 xl:px-12 transition-all duration-500 ${
              isAnimating ? 'translate-x-8 scale-95' : 'translate-x-0 scale-100'
            }`}
          >
            <div>
              <p className="text-xl leading-relaxed text-[#212529] xl:text-2xl">
                {selectedEvent.description}
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                {selectedEvent.links && selectedEvent.links.length > 0 && (
                  <>
                    {selectedEvent.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <button className="w-full border border-[#212529] px-10 py-4 text-lg font-normal uppercase tracking-wide text-[#212529] transition-all duration-300 hover:bg-[#212529] hover:text-white xl:text-xl">
                          {link.label}
                        </button>
                      </a>
                    ))}
                  </>
                )}

                {selectedEvent.exploreMoreUrl && (
                  <a
                    href={selectedEvent.exploreMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="w-full border border-[#212529] px-10 py-4 text-lg font-normal uppercase tracking-wide text-[#212529] transition-all duration-300 hover:bg-[#212529] hover:text-white xl:text-xl">
                      Explore More
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {selectedEvent && (
          <div className="relative h-full w-full overflow-hidden bg-gray-100">
            <Image
              src={selectedEvent.image}
              alt={`${selectedEvent.year} - ${selectedEvent.title}`}
              fill
              className={`object-cover object-top transition-transform duration-700 ${
                isAnimating ? 'scale-110' : 'scale-100'
              }`}
              sizes="33vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
