import {
  getProductCategories,
  getProducts,
} from '@/actions/woocommerce/products';
import {
  CollectionCarousel,
  Hero,
  SampleProducts,
  ShoppingExperience,
} from '@/components/archive';

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
      <ShoppingExperience />
    </>
  );
}
