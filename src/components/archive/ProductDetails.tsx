'use client';

import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ProductCard } from '@/components/archive';
import { useGsapFadeInChildren } from '@/hooks/useGsapFadeIn';
import DOMPurify from 'isomorphic-dompurify';
import { ROUTES } from '@/utils/routes';

function FashionItemCard({ product }: { product: UnknownObject }) {
  return (
    <div className="bg-white ">
      <div className="mx-auto border-blue-500">
        <div className="border-b-2 border-t-2 border-[#212529] p-4">
          <h1 className="text-[20px] font-normal uppercase text-black md:text-[40px]">
            {product.name}
          </h1>
        </div>

        <div className=" p-4">
          <h2 className="mb-3 text-base  text-black md:text-[32px]">
            DESCRIPTION
          </h2>
          <div
            className="space-y-3 text-base text-[#212529] md:text-[20px]"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.description),
            }}
          ></div>
        </div>
        {/* 
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
        </div> */}
      </div>
    </div>
  );
}

export function ProductDetails({
  product,
  relatedProducts,
}: {
  product: UnknownObject;
  relatedProducts: UnknownObject[];
}) {
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
            <ProductCard product={product} />
          </div>
          <FashionItemCard product={product} />
        </div>
      </div>
      <>
        <div className="md:border-t-1 md:*:border-b-1 md:*:border-[#212529] lg:*:border-r-1 [&>:first-child:border-l-1 mx-auto mt-10 grid  grid-cols-1 gap-0 border-black md:border-l-[1px] lg:grid-cols-3 lg:gap-0">
          {relatedProducts.map((relatedProduct, index) => (
            <div
              key={relatedProduct.id}
              className={`group  ${
                index < relatedProduct.length - 1
                  ? 'border-r md:border-[#212529]'
                  : ''
              }`}
            >
              <ProductCard product={relatedProduct} index={index} />
            </div>
          ))}
        </div>
        <div className="mt-10 flex w-full items-center justify-center py-10">
          <Link href={ROUTES.LISA_ARCHIVE_SEARCH}>
            <button className="whitespace-nowrap border border-black px-6 py-2 text-sm  transition-all duration-300 hover:bg-black hover:text-white md:w-[219px] md:text-base">
              DISCOVER MORE
            </button>
          </Link>
        </div>
      </>
    </section>
  );
}
