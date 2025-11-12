'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
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
    <section className="mx-auto px-6 py-16 text-[#212529] md:px-8">
      <h3 className="mb-10 text-[40px] uppercase font-light tracking-tight max-md:leading-[45px] md:text-[45px] 2xl:mb-16 2xl:text-[96px]">
        A life in colour; The story so far...
      </h3>

      <div className="lg:hidden">
        <div className="border border-[#212529] pb-6">
          <Button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-full items-center justify-between"
          >
            <h2 className="text-5xl font-light md:text-6xl">{selectedYear}</h2>
            <ChevronDown
              className={`h-8 w-8 flex-shrink-0 text-[#212529] transition-transform duration-300 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </Button>

          {isDropdownOpen && (
            <div
              className="hide-scrollbar mt-6 max-h-[150px] space-y-3 overflow-y-scroll"
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
                  className={`block w-full border-b border-[#e0e0e0] pb-2 text-left text-base font-light transition-all duration-300 hover:text-[#212529] hover:translate-x-2 ${
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
            className={`space-y-8 pt-8 transition-all duration-500 ${
              isAnimating ? 'translate-x-8 scale-95' : 'translate-x-0 scale-100'
            }`}
          >
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
                className={`object-cover transition-transform duration-700 ${
                  isAnimating ? 'scale-110' : 'scale-100'
                }`}
                sizes="100vw"
              />
            </div>
          </div>
        )}
      </div>

      <div className="hidden grid-cols-[400px_1fr_1fr] gap-0 border-t border-[#212529] lg:grid xl:grid-cols-[450px_1fr_1fr]">
        <div className="flex min-h-[941px] flex-col justify-between border-r border-[#212529] px-10 pb-12 pt-12 xl:px-12">
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
            className={`flex min-h-[941px] flex-col justify-between space-y-8 border-r border-[#212529] px-10 pb-12 pt-12 xl:px-12 transition-all duration-500 ${
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
          <div className="relative min-h-[941px] w-full overflow-hidden bg-gray-100">
            <Image
              src={selectedEvent.image}
              alt={`${selectedEvent.year} - ${selectedEvent.title}`}
              fill
              className={`object-cover transition-transform duration-700 ${
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
