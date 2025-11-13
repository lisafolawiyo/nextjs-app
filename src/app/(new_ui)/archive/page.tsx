import { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: 'A Life in Colour | Lisa Folawiyo Studio',
  description:
    'Marking two decades of artistry, Lisa Folawiyo presents A Life in Colour. A celebration of hand embellishment, beadwork, and modern African luxury through archive and retrospective pieces. ',
  keywords:
    `lisa folawiyo archive edit, lisa folawiyo exhibition pieces, lisa folawiyo 20th anniversary, hand-embellished fashion, nigerian luxury designer,
african craftsmanship, collectible runway pieces, lisa folawiyo ss26 collection, modern african luxury, lisa folawiyo, lisa folawiyo studio`.split(
      ',',
    ),
};

export default async function page() {
  const product_data = await getProducts(
    '',
    '',
    '',
    1,
    6,
    '2025-11-04T00:00:00',
  );
  const products = product_data.products;

  const categories_data = await getProductCategories(1, 100);
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
