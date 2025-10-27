import { Hero, CollectionCarousel, SampleProducts } from '@/components/archive';

export const products = [
  {
    id: 1,
    image: '/images/home-bg-mobile1.jpg',
    title: 'The Soccer Suit (Shorts)',
    subtitle: 'Look 3 (Short)',
    collection: 'COLL 1',
    price: 575,
    year: 2025,
  },
  {
    id: 2,
    image: '/images/home-bg-mobile2.jpg',
    title: 'The Soccer Suit (Shorts)',
    subtitle: 'Look 3 (Short)',
    collection: 'COLL 1 ',
    price: 575,
    year: 2025,
  },
  {
    id: 3,
    image: '/images/home-bg-mobile3.jpg',
    title: 'The Soccer Suit (Shorts)',
    subtitle: 'Look 3 (Short)',
    collection: 'COLL 3',
    price: 575,
    year: 2025,
  },
  {
    id: 4,
    image: '/images/home-bg-mobile4.jpg',
    title: 'The Soccer Suit (Shorts)',
    subtitle: 'Look 3 (Short)',
    collection: 'COLL 4',
    price: 575,
    year: 2025,
  },
  {
    id: 110,
    image: '/images/lisa_picture.jpg',
    title: 'The Soccer Suit (Shorts)',
    subtitle: 'Look 3 (Short)',
    collection: 'COLL 1 ',
    price: 575,
    year: 2025,
  },
  {
    id: 11,
    image: '/images/home-bg-mobile1.jpg',
    title: 'The Soccer Suit (Shorts)',
    subtitle: 'Look 3 (Short)',
    collection: 'COLL 1 ',
    price: 575,
    year: 2025,
  },
  {
    id: 10,
    image: '/images/home-bg-mobile2.jpg',
    title: 'The Soccer Suit (Shorts)',
    subtitle: 'Look 3 (Short)',
    collection: 'COLL 1 2025',
    price: 575,
    year: 2025,
  },
];

// const archiveProducts = [
//   {
//     id: 5,
//     image: '/images/home-bg-mobile3.jpg',
//     title: 'The Soccer Suit (Shorts)',
//     subtitle: 'Look 3 (Short)',
//     collection: 'COLL 1 2025',
//     price: 575,
//   },
//   {
//     id: 6,
//     image: '/images/home-bg-mobile4.jpg',
//     title: 'The Soccer Suit (Shorts)',
//     subtitle: 'Look 3 (Short)',
//     collection: 'COLL 1 2025',
//     price: 575,
//   },
// ];

export default function page() {
  return (
    <>
      <Hero />
      <SampleProducts />
      <CollectionCarousel products={products} />
    </>
  );
}
