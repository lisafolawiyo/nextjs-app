'use client';

import React from 'react';

import Link from 'next/link';

import { ROUTES } from '@/utils/routes';
import { ProductCard } from '@/components/archive';
import { useGsapFadeIn } from '@/hooks/useGsapFadeIn';

export function SampleProducts({ products }: { products: UnknownObject }) {
  const sectionRef = useGsapFadeIn({ delay: 0.2, y: 30 });

  return (
    <>
      <h3 className="mb-6 px-4 pb-3 text-[32px] font-light capitailize tracking-tight  max-md:mx-4  max-md:border-b max-md:border-[#000000] max-md:leading-[36px] md:mb-10  md:text-[64px]">
        Shop the edits
      </h3>
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="xl:border-t-1 xl:*:border-b-1 xl:*:border-[#212529] lg:*:border-r-1 [&>:first-child:border-l-1 grid grid-cols-1 gap-0 max-md:gap-4 max-md:px-4 lg:grid-cols-3 xl:gap-0 xl:border-l-[1px] xl:border-black"
      >
        {products.map((product: UnknownObject, index: number) => (
          <div
            key={product.id}
            className={`group flex ${
              index < products.length - 1
                ? 'xl:border-r xl:border-[#212529]'
                : ''
            }`}
          >
            <ProductCard product={product} index={index} />
          </div>
        ))}
      </div>
      <div className="mt-10 flex w-full items-center justify-center py-10">
        <Link href={ROUTES.SHOP}>
          <button className="whitespace-nowrap border border-black px-6 py-2 text-sm  transition-all duration-300 hover:bg-black hover:text-white md:w-[219px] md:text-base">
            DISCOVER MORE
          </button>
        </Link>
      </div>
    </>
  );
}
