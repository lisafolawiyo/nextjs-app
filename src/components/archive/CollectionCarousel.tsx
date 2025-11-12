'use client';

import { useRef, useState } from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import { useGsapFadeIn } from '@/hooks/useGsapFadeIn';
import { Product, ProductCard } from '@/components/archive';
import { getProducts } from '@/actions/woocommerce/products';

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface CollectionCarouselProps {
  initialProducts: Product[];
  categories: Category[];
}

const ProductCardSkeleton = () => (
  <div className="w-full flex-shrink-0 md:w-1/2">
    <div className="w-full animate-pulse md:p-10">
      <div className="relative overflow-hidden bg-white">
        <div className="h-[530px] w-full bg-gray-200" />
      </div>
      <div className="py-4 max-md:px-2">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-2">
            <div className="h-5 w-3/4 bg-gray-200 md:h-6" />
            <div className="h-5 w-2/3 bg-gray-200 md:h-6" />
            <div className="h-4 w-1/2 bg-gray-200" />
          </div>
          <div className="h-6 w-20 bg-gray-200 md:h-7" />
        </div>
      </div>
    </div>
  </div>
);

export const CollectionCarousel = ({
  initialProducts,
  categories,
}: CollectionCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useGsapFadeIn({ delay: 0.3, y: 30 });

  const filteredCategories = categories.filter(
    (cat) =>
      cat.slug.toLowerCase() !== 'uncategorised' &&
      cat.slug.toLowerCase() !== 'uncategorized',
  );

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductsByCategory = async (categoryId: number) => {
    setIsLoading(true);
    try {
      const product_data = await getProducts(
        '',
        categoryId.toString(),
        '',
        1,
        6,
      );
      setProducts(product_data.products);

      // Reset scroll position
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Failed to fetch products for category:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateCategory = (direction: 'left' | 'right') => {
    if (filteredCategories.length === 0) return;

    let newIndex = currentCategoryIndex;
    if (direction === 'left') {
      newIndex =
        currentCategoryIndex === 0
          ? filteredCategories.length - 1
          : currentCategoryIndex - 1;
    } else {
      newIndex =
        currentCategoryIndex === filteredCategories.length - 1
          ? 0
          : currentCategoryIndex + 1;
    }

    setCurrentCategoryIndex(newIndex);
    fetchProductsByCategory(filteredCategories[newIndex].id);
  };

  return (
    <section
      id="retrospective"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="my-10 md:py-16"
    >
      <h3 className="mb-6 px-4 pb-3 text-[40px] font-light uppercase tracking-tight  max-md:mx-4  max-md:border-b max-md:border-[#000000] max-md:leading-[45px] md:mb-10  md:text-[96px]">
        The Retrospective
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
                {filteredCategories.length > 0
                  ? filteredCategories[currentCategoryIndex].name
                  : 'All'}
              </p>
              <div className="flex  gap-6">
                <button
                  onClick={() => navigateCategory('left')}
                  disabled={isLoading || filteredCategories.length === 0}
                  className="flex h-6 w-6 items-center justify-center border border-gray-400 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ArrowLeft className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={() => navigateCategory('right')}
                  disabled={isLoading || filteredCategories.length === 0}
                  className="flex h-6 w-6 items-center justify-center border border-gray-400 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ArrowRight className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex overflow-x-auto max-md:mx-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {isLoading ? (
              <>
                <ProductCardSkeleton />
                <ProductCardSkeleton />
              </>
            ) : products.length > 0 ? (
              products.map((product, index) => (
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
              ))
            ) : (
              <div className="flex w-full flex-col items-center justify-center p-12 md:p-20">
                <p className="mb-2 text-xl font-light text-[#1a1a1a] md:text-2xl">
                  No Products Available
                </p>
                <p className="text-center text-sm text-gray-500 md:text-base">
                  This collection is currently empty. Check back soon for new
                  arrivals.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
