'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { gsap } from 'gsap';

interface FilterState {
  typology: string[];
  gender: string[];
  season: string[];
  year: string[];
  line: string[];
  themes: string[];
}

const typologyData = [
  { label: 'COLLECTIONS', count: 43 },
  { label: 'LOOKS', count: 57 },
];

const genderData = [
  { label: 'MAN', count: 23 },
  { label: 'WOMAN', count: 77 },
];

const seasonData = [
  { label: 'FALL-WINTER', count: 45 },
  { label: 'SPRING-SUMMER', count: 54 },
];

const yearData = [
  { label: '1980', count: 3 },
  { label: '1981', count: 2 },
  { label: '1984', count: 3 },
  { label: '1986', count: 4 },
  { label: '1988', count: 2 },
  { label: '1989', count: 6 },
  { label: '1990', count: 8 },
  { label: '1991', count: 2 },
  { label: '1992', count: 3 },
  { label: '1993', count: 7 },
  { label: '1994', count: 7 },
  { label: '1996', count: 2 },
];

interface FilterSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function FilterSection({
  title,
  isExpanded,
  onToggle,
  children,
}: FilterSectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isExpanded) {
      gsap.fromTo(
        contentRef.current,
        {
          height: 0,
          opacity: 0,
        },
        {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        },
      );
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [isExpanded]);

  return (
    <div className="border-b border-white/20 pb-6">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-sm tracking-widest text-white transition-colors hover:text-white/60"
      >
        <span>{title}</span>
        <span className="transition-transform duration-300">
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden">
        <div className="mt-4 space-y-2">{children}</div>
      </div>
    </div>
  );
}

interface FilterItemProps {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

function FilterItem({ label, count, isActive, onClick }: FilterItemProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center justify-between py-1.5 text-sm transition-colors ${
        isActive ? 'text-white' : 'text-white/60 hover:text-white'
      }`}
    >
      <span className={isActive ? 'font-medium' : ''}>{label}</span>
      <span
        className={`text-xs ${
          isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'
        }`}
      >
        {count}
      </span>
    </button>
  );
}

export function ArchiveFilter() {
  const [showFilters, setShowFilters] = useState(false);
  const filterContainerRef = useRef<HTMLDivElement>(null);
  const [expandedSections, setExpandedSections] = useState({
    typology: true,
    gender: true,
    season: true,
    year: true,
    line: false,
    themes: false,
  });

  useEffect(() => {
    if (!filterContainerRef.current) return;

    if (showFilters) {
      gsap.fromTo(
        filterContainerRef.current,
        {
          height: 0,
          opacity: 0,
          y: -20,
        },
        {
          height: 'auto',
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        },
      );
    } else {
      gsap.to(filterContainerRef.current, {
        height: 0,
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [showFilters]);

  const [filters, setFilters] = useState<FilterState>({
    typology: [],
    gender: [],
    season: [],
    year: [],
    line: [],
    themes: [],
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const newFilters = {
        ...prev,
        [category]: prev[category].includes(value)
          ? prev[category].filter((v) => v !== value)
          : [value],
      };
      console.log('Active Filters:', newFilters);
      return newFilters;
    });
  };

  const removeFilter = (category: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((v) => v !== value),
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      typology: [],
      gender: [],
      season: [],
      year: [],
      line: [],
      themes: [],
    });
  };

  const allActiveFilters = Object.entries(filters).flatMap(
    ([category, values]) =>
      values.map((value: string) => ({
        category: category as keyof FilterState,
        value,
      })),
  );

  return (
    <div className="mb-8">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="inline-flex items-center gap-2 border border-[#212529] px-6 py-2 text-sm tracking-wider text-[#212529] transition-colors hover:border-[#212529]/60"
      >
        FILTER
        {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {allActiveFilters.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-sm text-[#212529]/60">
            Active filters:
          </span>
          {allActiveFilters.map(({ category, value }) => (
            <button
              key={`${category}-${value}`}
              onClick={() => removeFilter(category, value)}
              className="group inline-flex items-center gap-2 bg-[#212529] px-3 py-1.5 text-sm text-white transition-colors hover:bg-[#212529]/90"
            >
              {value}
              <X
                size={14}
                className="transition-transform group-hover:scale-110"
              />
            </button>
          ))}
          <button
            onClick={clearAllFilters}
            className="ml-2 text-sm text-[#212529]/60 underline transition-colors hover:text-[#212529]"
          >
            Clear all
          </button>
        </div>
      )}

      <div ref={filterContainerRef} className="overflow-hidden">
        <div className="mt-8  bg-[#212529] p-8">
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            <FilterSection
              title="Typology"
              isExpanded={expandedSections.typology}
              onToggle={() => toggleSection('typology')}
            >
              {typologyData.map(({ label, count }) => (
                <FilterItem
                  key={label}
                  label={label}
                  count={count}
                  isActive={filters.typology.includes(label)}
                  onClick={() => toggleFilter('typology', label)}
                />
              ))}
            </FilterSection>

            <FilterSection
              title="Gender"
              isExpanded={expandedSections.gender}
              onToggle={() => toggleSection('gender')}
            >
              {genderData.map(({ label, count }) => (
                <FilterItem
                  key={label}
                  label={label}
                  count={count}
                  isActive={filters.gender.includes(label)}
                  onClick={() => toggleFilter('gender', label)}
                />
              ))}
            </FilterSection>

            <FilterSection
              title="Season"
              isExpanded={expandedSections.season}
              onToggle={() => toggleSection('season')}
            >
              {seasonData.map(({ label, count }) => (
                <FilterItem
                  key={label}
                  label={label}
                  count={count}
                  isActive={filters.season.includes(label)}
                  onClick={() => toggleFilter('season', label)}
                />
              ))}
            </FilterSection>

            <FilterSection
              title="Year"
              isExpanded={expandedSections.year}
              onToggle={() => toggleSection('year')}
            >
              <div className="max-h-64 overflow-y-auto pr-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/30 hover:[&::-webkit-scrollbar-thumb]:bg-white/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar]:w-2">
                {yearData.map(({ label, count }) => (
                  <FilterItem
                    key={label}
                    label={label}
                    count={count}
                    isActive={filters.year.includes(label)}
                    onClick={() => toggleFilter('year', label)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection
              title="Line"
              isExpanded={expandedSections.line}
              onToggle={() => toggleSection('line')}
            >
              <div className="py-2 text-sm text-white/40">No items</div>
            </FilterSection>

            <FilterSection
              title="Themes"
              isExpanded={expandedSections.themes}
              onToggle={() => toggleSection('themes')}
            >
              <div className="py-2 text-sm text-white/40">No items</div>
            </FilterSection>
          </div>
        </div>
      </div>
    </div>
  );
}
