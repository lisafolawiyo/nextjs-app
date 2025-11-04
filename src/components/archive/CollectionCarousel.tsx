'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

import { ProductCard } from '@/components/archive';
import { useGsapFadeIn } from '@/hooks/useGsapFadeIn';

interface Collection {
  id: string;
  name: string;
  products: UnknownObject[];
}

// interface CollectionCarouselProps {
//   products: Product[];
// }

const DUMMY_COLLECTIONS: Collection[] = [
  {
    id: '1',
    name: 'SS22',
    products: [
      {
        id: 1,
        title: 'Floral Print Dress',
        subtitle: 'Spring Summer Collection',
        collection: 'SS22',
        price: 450,
        image: '/images/product-1.jpg',
        year: 2022,
        name: 'Floral Print Dress',
        short_description: 'Elegant floral print dress',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Dresses' }],
      },
      {
        id: 2,
        title: 'Embroidered Jacket',
        subtitle: 'Spring Summer Collection',
        collection: 'SS22',
        price: 680,
        image: '/images/product-2.jpg',
        year: 2022,
        name: 'Embroidered Jacket',
        short_description: 'Handcrafted embroidered jacket',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Outerwear' }],
      },
      {
        id: 3,
        title: 'Silk Blouse',
        subtitle: 'Spring Summer Collection',
        collection: 'SS22',
        price: 320,
        image: '/images/product-3.jpg',
        year: 2022,
        name: 'Silk Blouse',
        short_description: 'Luxurious silk blouse',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Tops' }],
      },
    ],
  },
  {
    id: '2',
    name: 'FW22',
    products: [
      {
        id: 4,
        title: 'Velvet Evening Gown',
        subtitle: 'Fall Winter Collection',
        collection: 'FW22',
        price: 890,
        image: '/images/product-4.jpg',
        year: 2022,
        name: 'Velvet Evening Gown',
        short_description: 'Luxurious velvet evening gown',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Dresses' }],
      },
      {
        id: 5,
        title: 'Wool Coat',
        subtitle: 'Fall Winter Collection',
        collection: 'FW22',
        price: 750,
        image: '/images/product-5.jpg',
        year: 2022,
        name: 'Wool Coat',
        short_description: 'Premium wool coat',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Outerwear' }],
      },
      {
        id: 6,
        title: 'Cashmere Sweater',
        subtitle: 'Fall Winter Collection',
        collection: 'FW22',
        price: 420,
        image: '/images/product-6.jpg',
        year: 2022,
        name: 'Cashmere Sweater',
        short_description: 'Soft cashmere sweater',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Tops' }],
      },
    ],
  },
  {
    id: '3',
    name: 'SS23',
    products: [
      {
        id: 7,
        title: 'Linen Midi Dress',
        subtitle: 'Spring Summer Collection',
        collection: 'SS23',
        price: 520,
        image: '/images/product-7.jpg',
        year: 2023,
        name: 'Linen Midi Dress',
        short_description: 'Breathable linen midi dress',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Dresses' }],
      },
      {
        id: 8,
        title: 'Cotton Blazer',
        subtitle: 'Spring Summer Collection',
        collection: 'SS23',
        price: 590,
        image: '/images/product-8.jpg',
        year: 2023,
        name: 'Cotton Blazer',
        short_description: 'Tailored cotton blazer',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Outerwear' }],
      },
      {
        id: 9,
        title: 'Printed Shirt',
        subtitle: 'Spring Summer Collection',
        collection: 'SS23',
        price: 280,
        image: '/images/product-9.jpg',
        year: 2023,
        name: 'Printed Shirt',
        short_description: 'Vibrant printed shirt',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Tops' }],
      },
    ],
  },
  {
    id: '4',
    name: 'FW23',
    products: [
      {
        id: 10,
        title: 'Leather Jacket',
        subtitle: 'Fall Winter Collection',
        collection: 'FW23',
        price: 920,
        image: '/images/product-10.jpg',
        year: 2023,
        name: 'Leather Jacket',
        short_description: 'Classic leather jacket',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Outerwear' }],
      },
      {
        id: 11,
        title: 'Knit Dress',
        subtitle: 'Fall Winter Collection',
        collection: 'FW23',
        price: 480,
        image: '/images/product-11.jpg',
        year: 2023,
        name: 'Knit Dress',
        short_description: 'Cozy knit dress',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Dresses' }],
      },
      {
        id: 12,
        title: 'Turtleneck Top',
        subtitle: 'Fall Winter Collection',
        collection: 'FW23',
        price: 340,
        image: '/images/product-12.jpg',
        year: 2023,
        name: 'Turtleneck Top',
        short_description: 'Warm turtleneck top',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Tops' }],
      },
    ],
  },
  {
    id: '5',
    name: 'SS24',
    products: [
      {
        id: 13,
        title: 'Tropical Print Dress',
        subtitle: 'Spring Summer Collection',
        collection: 'SS24',
        price: 560,
        image: '/images/product-13.jpg',
        year: 2024,
        name: 'Tropical Print Dress',
        short_description: 'Bold tropical print dress',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Dresses' }],
      },
      {
        id: 14,
        title: 'Denim Jacket',
        subtitle: 'Spring Summer Collection',
        collection: 'SS24',
        price: 440,
        image: '/images/product-14.jpg',
        year: 2024,
        name: 'Denim Jacket',
        short_description: 'Classic denim jacket',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Outerwear' }],
      },
      {
        id: 15,
        title: 'Silk Camisole',
        subtitle: 'Spring Summer Collection',
        collection: 'SS24',
        price: 290,
        image: '/images/product-15.jpg',
        year: 2024,
        name: 'Silk Camisole',
        short_description: 'Delicate silk camisole',
        images: [{ src: '/media/images/placeholder.png' }],
        categories: [{ name: 'Tops' }],
      },
    ],
  },
];

// export const CollectionCarousel = ({ products }: CollectionCarouselProps) => {
export const CollectionCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useGsapFadeIn({ delay: 0.3, y: 30 });
  const [currentCollectionIndex, setCurrentCollectionIndex] = useState(0);

  // console.log(products);

  const currentCollection = DUMMY_COLLECTIONS[currentCollectionIndex];

  const navigateCollection = (direction: 'prev' | 'next') => {
    setCurrentCollectionIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex > 0 ? prevIndex - 1 : DUMMY_COLLECTIONS.length - 1;
      } else {
        return prevIndex < DUMMY_COLLECTIONS.length - 1 ? prevIndex + 1 : 0;
      }
    });

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
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
                {currentCollection.name}
              </p>
              <div className="flex  gap-6">
                <button
                  onClick={() => navigateCollection('prev')}
                  className="flex h-6 w-6 items-center justify-center border border-gray-400 transition-colors hover:bg-gray-50"
                  aria-label="Previous collection"
                >
                  <ArrowLeft className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={() => navigateCollection('next')}
                  className="flex h-6 w-6 items-center justify-center border border-gray-400 transition-colors hover:bg-gray-50"
                  aria-label="Next collection"
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
            {currentCollection.products.map((product, index) => (
              <div
                key={product.id}
                className={`group w-full flex-shrink-0 md:w-1/2  ${
                  index < currentCollection.products.length - 1
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
