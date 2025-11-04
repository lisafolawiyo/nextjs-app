import { Hero, CollectionCarousel, SampleProducts } from '@/components/archive';
import {
  getProducts,
  getProductCategories,
} from '@/actions/woocommerce/products';

export default async function page() {
  const product_data = await getProducts('', '', '', 1, 6);
  const products = product_data.products;

  const categories_data = await getProductCategories();
  const categories = categories_data.categories;

  return (
    <>
      <Hero />
      <SampleProducts products={products} />
      <CollectionCarousel initialProducts={products} categories={categories} />
    </>
  );
}
