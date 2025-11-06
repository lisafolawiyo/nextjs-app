'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { useGsapFadeInChildren } from '@/hooks/useGsapFadeIn';
import { ProductCard, ArchiveFilter, SearchBar } from '@/components/archive';
import Pagination from '@/components/Pagination';
import { useDebounce } from '@/utils/useDebounce';
import { useQueryState, parseAsString } from 'nuqs';

interface Product {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  collection: string;
  price: number;
  year: number;
}

interface ArchiveSectionProps {
  products: Product[];
  totalPages: number;
  page: string;
}

export const ArchiveSection = ({
  products,
  totalPages,
  page,
}: ArchiveSectionProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useQueryState(
    'search',
    parseAsString.withDefault(searchParams.get('search') || ''),
  );
  const search = useDebounce(searchQuery);

  useEffect(() => {
    router.refresh();
  }, [search]);

  const contentRef = useGsapFadeInChildren({ delay: 0.2, stagger: 0.15 });

  return (
    <div
      ref={contentRef as React.RefObject<HTMLDivElement>}
      className="py-12 md:px-8"
    >
      <button
        onClick={() => router.back()}
        className="mb-6 flex cursor-pointer items-center gap-2 text-sm text-[#212529] transition-colors hover:text-gray-600 md:text-[24px]"
      >
        <ChevronLeft className="h-4 w-4" />
        Back
      </button>

      <div className="mx-auto max-w-7xl">
        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <ArchiveFilter />
      </div>

      <div className="sm:border-t-1 sm:*:border-b-1 sm:*:border-[#212529] sm:*:border-r-1 [&>:first-child:border-l-1 mx-auto grid  grid-cols-1 border-black sm:border-l-[1px] lg:grid-cols-3">
        {products.map((product, index) => (
          <div key={product?.id} className="group">
            <ProductCard product={product} index={index} />
          </div>
        ))}
      </div>

      <Pagination currentPage={parseInt(page, 10)} totalPages={totalPages} />
    </div>
  );
};
