'use client';

import { useEffect } from 'react';

import { ChevronLeft } from 'lucide-react';
import { parseAsString, useQueryState } from 'nuqs';
import { useRouter, useSearchParams } from 'next/navigation';

import Pagination from '@/components/Pagination';
import { useDebounce } from '@/utils/useDebounce';
import { useGsapFadeInChildren } from '@/hooks/useGsapFadeIn';
import { ArchiveFilter, ProductCard, SearchBar } from '@/components/archive';

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
  categories: UnknownObject[];
  tags: UnknownObject[];
  isShop?: boolean;
}

export const ArchiveSection = ({
  products,
  totalPages,
  page,
  categories,
  tags,
  isShop = false,
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
        <ArchiveFilter categories={categories} tags={tags} isShop={isShop} />
      </div>

      <div className="mb-10 md:mb-16">
        {isShop ? (
          <h3 className="pb-3 text-[40px] font-light capitalize tracking-tight  max-md:mx-4 max-md:border-b max-md:border-[#000000] md:text-[64px]">
            Shop
          </h3>
        ) : (
          <>
            <h3 className="pb-3 text-[40px] font-light capitalize tracking-tight  max-md:mx-4 max-md:border-b max-md:border-[#000000] md:text-[64px] mb-5">
              The Archive Edit
            </h3>
            <p className="md:text-[20px]">
              Step into The Archive Edit — a rare curation of Lisa Folawiyo’s
              most iconic designs, celebrating two decades of exquisite hand
              embellishment, intricate beadwork, and masterful craftsmanship.
            </p>
            <p className="md:text-[20px]">
              Each piece is a labour of love, hand-finished in Lagos by skilled
              artisans and designed to embody modern African luxury. From richly
              beaded Ankara dresses to sculptural silk gowns and playful
              co-ords, every silhouette tells a story of heritage, innovation,
              and individuality.
            </p>
            <p className="md:text-[20px]">
              Discover the artistry. Celebrate the legacy.
            </p>
          </>
        )}
      </div>

      {products.length > 0 ? (
        <>
          <div className="sm:border-t-1 sm:*:border-b-1 sm:*:border-[#212529] sm:*:border-r-1 [&>:first-child:border-l-1 mx-auto grid grid-cols-1 border-black sm:border-l-[1px] lg:grid-cols-3">
            {products.map((product, index) => (
              <div key={product?.id} className="group flex">
                <ProductCard
                  product={product}
                  index={index}
                  hideAddToCart={isShop}
                />
              </div>
            ))}
          </div>

          <Pagination
            currentPage={parseInt(page, 10)}
            totalPages={totalPages}
          />
        </>
      ) : (
        <div className="mx-auto flex min-h-[400px] w-full flex-col items-center justify-center border border-[#212529] p-12 md:p-20">
          <p className="mb-2 text-xl font-light text-[#1a1a1a] md:text-2xl">
            No Results Found
          </p>
          <p className="text-center text-sm text-gray-500 md:text-base">
            We couldn&apos;t find any products matching your search. Try
            adjusting your filters or search terms.
          </p>
        </div>
      )}
    </div>
  );
};
