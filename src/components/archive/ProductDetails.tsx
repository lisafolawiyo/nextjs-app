'use client';

import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ProductCard } from '@/components/archive';
import { useGsapFadeInChildren } from '@/hooks/useGsapFadeIn';
import { products } from '@/utils/productsData';

function FashionItemCard() {
  return (
    <div className="bg-white ">
      <div className="mx-auto border-blue-500">
        <div className="border-b-2 border-t-2 border-[#212529] p-4">
          <h1 className="text-[20px] font-normal text-black md:text-[40px]">
            ITEM NAME
          </h1>
        </div>

        <div className=" p-4">
          <h2 className="mb-3 text-base  text-black md:text-[32px]">
            DESCRIPTION
          </h2>
          <div className="space-y-3 text-base text-[#212529] md:text-[20px]">
            <p>
              Siobhan shows us just how versatile the Topsy Turvy dress can be,
              styling the bralette-detail version for both a night out and a
              laid-back day look. Worn on its own or mixed as a separate, the
              dress transitions seamlessly between moods. She finishes the look
              with a statement hand beaded shoulder bag from the SS25
              collection.
            </p>
            <p>
              Always have one thing that adds an edge to your outfit, like an
              accessory or piece of clothing or visual proportions of the
              outfit.
            </p>
          </div>
        </div>

        <div className="flex p-4">
          <div className="flex-1">
            <div className="mb-1 text-xs font-bold text-black">YEAR</div>
            <div className="text-base text-black md:text-[24px]">2022</div>
          </div>
          <div className="flex-1">
            <div className="mb-1 text-xs font-bold text-black">
              FABRICATION:
            </div>
            <div className="text-base text-black md:text-[24px]">-</div>
          </div>
          <div className="flex-1">
            <div className="mb-1 text-xs font-bold text-black">
              EMBELLISHMENT TIME:
            </div>
            <div className="text-base text-black md:text-[24px]">-</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductDetails() {
  const contentRef = useGsapFadeInChildren({ delay: 0.2, stagger: 0.2 });
  const router = useRouter();

  return (
    <section className="px-4 pt-28 md:px-8 xl:pt-32">
      <div ref={contentRef as React.RefObject<HTMLDivElement>}>
        <button
          onClick={() => router.back()}
          className="mb-6 flex cursor-pointer items-center gap-2 text-sm text-[#212529] transition-colors hover:text-gray-600 md:text-[24px]"
        >
          <ChevronLeft className="h-4" />
          Back
        </button>

        <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-[40%_1fr]">
          <div className={`group md:border md:border-[#212529]`}>
            <ProductCard
              product={{
                id: 1,
                image: '/images/home-bg-mobile1.jpg',
                title: 'The Soccer Suit (Shorts)',
                subtitle: 'Look 3 (Short)',
                collection: 'COLL 1 2025',
                price: 575,
                year: 2025,
              }}
            />
          </div>
          <FashionItemCard />
        </div>
      </div>
      <>
        <div className="md:border-t-1 md:*:border-b-1 md:*:border-[#212529] lg:*:border-r-1 [&>:first-child:border-l-1 mx-auto mt-10 grid  grid-cols-1 gap-0 border-black md:border-l-[1px] lg:grid-cols-3 lg:gap-0">
          {products.slice(0, 3).map((product, index) => (
            <div
              key={product.id}
              className={`group  ${
                index < products.length - 1
                  ? 'border-r md:border-[#212529]'
                  : ''
              }`}
            >
              <div className=" ">
                <ProductCard product={product} index={index} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex w-full items-center justify-center py-10">
          <Link href="/dev/archive/search">
            <button className="whitespace-nowrap border border-black px-6 py-2 text-sm  transition-all duration-300 hover:bg-black hover:text-white md:w-[219px] md:text-base">
              DISCOVER MORE
            </button>
          </Link>
        </div>
      </>
    </section>
  );
}
