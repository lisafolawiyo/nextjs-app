import { Hero, CollectionCarousel, SampleProducts } from '@/components/archive';
import { products } from '@/utils/productsData';

export default function page() {
  return (
    <>
      <Hero />
      <SampleProducts />
      <CollectionCarousel products={products} />
    </>
  );
}
