'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { products } from '@/app/dev/archive/page';
import { ProductCard } from '@/components/archive';
import { useGsapFadeInChildren } from '@/hooks/useGsapFadeIn';

export function AboutPage() {
  const contentRef = useGsapFadeInChildren({ delay: 0.2, stagger: 0.2 });

  return (
    <>
      <div
        ref={contentRef as React.RefObject<HTMLDivElement>}
        className="mt-16 flex items-center justify-center pb-4 md:mt-32 lg:bg-[#2B3135]"
      >
        <div className="pt-2 md:px-8">
          <div className="grid grid-cols-1  gap-0 pt-2 lg:grid-cols-[25%_1fr]">
            <div className="flex py-10 md:items-center md:py-16 lg:justify-center lg:bg-[#2B3135]">
              <div className="lg:rotate-180 lg:[writing-mode:vertical-lr]">
                <span className="text-[48px] font-light uppercase text-black max-lg:px-6 lg:text-[96px] lg:text-white">
                  ABOUT US
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 max-md:px-4  lg:grid-cols-2">
              <div className="relative flex flex-col items-center border-[4px] bg-[#ECECEC]  px-4 py-16 max-lg:mt-10 lg:h-[900px] lg:border-[#212529] lg:px-14 ">
                <div className="flex h-full w-full flex-col justify-between space-y-8 text-center">
                  <h1 className="space-y-0">
                    <div className="text-[40px] font-light uppercase text-[#212529]  sm:text-[56px] xl:text-[96px]">
                      LISA
                    </div>
                    <div className="text-[40px] font-light uppercase text-[#212529]  sm:text-[56px] xl:text-[96px]">
                      FOLAWIYO
                    </div>
                  </h1>

                  <div className="">
                    <p className="text-center text-base tracking-[0.01em]  text-[#212529] sm:text-[20px] lg:text-[26px]">
                      Lisa Folawiyo is a boundary-pushing fashion brand
                      redefining what it means to be designed in Africa. With a
                      visionary approach to craftsmanship and creativity, we are
                      forerunners in the world of elevated African fashion,
                      transforming traditional fabrics into globally resonant
                      expressions of style.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden border-[4px] border-l-0 bg-[#C5D2E6] p-10 max-lg:h-[700px] lg:border-[#2B3135]">
                <Image
                  src="/images/lisa_picture.jpg"
                  alt="Lisa Folawiyo"
                  className="absolute inset-0  h-full w-full object-cover object-center"
                  height={1000}
                  width={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:justify-end">
        <div className="mt-8 px-4 text-base md:w-1/2  md:text-[24px]">
          <p className="mb-3">
            We harness the rich heritage of local textiles such as Adire,
            Ankara, reimagining them through meticulous craftsmanship and
            refined tailoring. Each piece is a testament to elegantly offering
            not just clothing but wearable art that transcends borders and
            celebrates African fashion through a lens of sophistication,
            individuality, and artistry.
          </p>
          <p>
            Lisa Folawiyo seamlessly integrates West African textiles into
            contemporary, globally resonant fashion. Our aesthetic is defined by
            intricate fabric art blending a with modern tailoring and intricate
            hand-beaded embellishments. Her work has garnered international
            acclaim, as showcased at prestigious events including New York
            Fashion Week.
          </p>
        </div>
      </div>
      <div className="mt-10 px-4">
        <div className="md:border-t-1 md:*:border-b-1 md:*:border-[#212529] lg:*:border-r-1 [&>:first-child:border-l-1 mx-auto mt-10 mt-10 grid  grid-cols-1 gap-0 border-black md:border-l-[1px] lg:grid-cols-3 lg:gap-0">
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
      </div>
    </>
  );
}
