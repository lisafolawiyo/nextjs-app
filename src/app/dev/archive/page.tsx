import { Hero, CollectionCarousel, SampleProducts } from '@/components/archive';
import { getProducts } from '@/actions/woocommerce/products';

export default async function page() {
  const product_data = await getProducts('', '', '', 1, 6);
  const products = product_data.products;
  return (
    <>
      <Hero />
      <SampleProducts products={products} />
      <CollectionCarousel products={products} />
    </>
  );
}
