'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

import { Product, ProductCard } from '@/components/archive';
import { useGsapFadeIn } from '@/hooks/useGsapFadeIn';

interface CollectionCarouselProps {
  products: Product[];
}

export const CollectionCarousel = ({ products }: CollectionCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useGsapFadeIn({ delay: 0.3, y: 30 });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth / 2;
      const newScrollLeft =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="my-10 md:py-16"
    >
      <h3 className="mb-6 px-4 pb-3 text-[40px] font-light uppercase tracking-tight  max-md:mx-4  max-md:border-b max-md:border-[#000000] max-md:leading-[45px] md:mb-10  md:text-[96px]">
        Collections
      </h3>
      <div className=" my-6 lg:border lg:border-[#212529]">
        <div className="grid md:grid-cols-[541px_1fr]">
          <div className="flex flex-col  justify-between p-4 md:p-8 md:py-20 lg:border-r lg:border-[#212529]">
            <h1 className="mb-8 text-[24px] font-light text-[#1a1a1a] md:text-[32px] md:leading-[36px]">
              Explore LISA FOLAWIYO
              <br />
              Collections
            </h1>

            <div className="mt-5 flex items-center justify-between gap-3 border-[#000000] max-lg:border-b-[1px] max-md:mb-3 max-md:pb-3 md:mt-32">
              <p className="text-4xl font-light text-[#000000] md:text-[96px]">
                SS22
              </p>
              <div className="flex  gap-6">
                <button
                  onClick={() => scroll('left')}
                  className="flex h-6 w-6 items-center justify-center border border-gray-400 transition-colors hover:bg-gray-50"
                >
                  <ArrowLeft className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="flex h-6 w-6 items-center justify-center border border-gray-400 transition-colors hover:bg-gray-50"
                >
                  <ArrowRight className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="scrollbar-hide flex overflow-x-auto max-md:mx-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group w-full flex-shrink-0 md:w-1/2  ${
                  index < products.length - 1
                    ? 'xl:border-r xl:border-[#212529]'
                    : ''
                }`}
              >
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
