'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { gsap } from 'gsap';
import { useQueryState, parseAsString } from 'nuqs';
import { useSearchParams, useRouter } from 'next/navigation';

interface FilterState {
  collection: string[];
  year: string[];
  gender: string[];
  tag: string[];
}

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
      <span className={isActive ? 'font-medium capitalize' : 'capitalize'}>
        {label}
      </span>
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

export function ArchiveFilter({
  categories,
  tags,
}: {
  categories: UnknownObject[];
  tags: UnknownObject[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [showFilters, setShowFilters] = useState(false);
  const filterContainerRef = useRef<HTMLDivElement>(null);
  const [expandedSections, setExpandedSections] = useState({
    collection: true,
    year: true,
    gender: true,
    tag: true,
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
    collection: [],
    year: [],
    gender: [],
    tag: [],
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
      collection: [],
      year: [],
      gender: [],
      tag: [],
    });
  };

  const allActiveFilters = Object.entries(filters).flatMap(
    ([category, values]) =>
      values.map((value: string) => ({
        category: category as keyof FilterState,
        value,
      })),
  );

  const [, setCategory] = useQueryState(
    'category',
    parseAsString.withDefault(searchParams.get('category') || ''),
  );

  console.log('filters: ', filters);

  useEffect(() => {
    startTransition(async () => {
      if (filters.collection?.length) {
        await setCategory(JSON.parse(filters.collection[0])?.id);
        router.refresh();
      } else {
        await setCategory('');
        router.refresh();
      }

      // await setPage(value.toString());
      // router.refresh();
    });
  }, [filters]);

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
              className="group inline-flex items-center gap-2 bg-[#212529] px-3 py-1.5 text-sm capitalize text-white transition-colors hover:bg-[#212529]/90"
            >
              {JSON.parse(value)?.name}
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
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <FilterSection
              title="Collection"
              isExpanded={expandedSections.collection}
              onToggle={() => toggleSection('collection')}
            >
              {categories?.map(({ id, name, count }) => (
                <FilterItem
                  key={id}
                  label={name}
                  count={count}
                  isActive={filters.collection.includes(
                    JSON.stringify({ id, name }),
                  )}
                  onClick={() =>
                    toggleFilter('collection', JSON.stringify({ id, name }))
                  }
                />
              ))}
            </FilterSection>

            <FilterSection
              title="Tags"
              isExpanded={expandedSections.tag}
              onToggle={() => toggleSection('tag')}
            >
              {tags?.map(({ id, name, count }) => (
                <FilterItem
                  key={id}
                  label={name}
                  count={count}
                  isActive={filters.collection.includes(
                    JSON.stringify({ id, name }),
                  )}
                  onClick={() =>
                    toggleFilter('tag', JSON.stringify({ id, name }))
                  }
                />
              ))}
            </FilterSection>
          </div>
        </div>
      </div>
    </div>
  );
}
