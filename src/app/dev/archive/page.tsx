import { Hero, CollectionCarousel, SampleProducts } from '@/components/archive';
import { products } from '@/utils/productsData';

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
