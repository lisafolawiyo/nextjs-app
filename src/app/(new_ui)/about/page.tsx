import React from 'react';

import { AboutPage } from '@/components/archive';
import { getProducts } from '@/actions/woocommerce/products';

export default async function page() {
  const product_data = await getProducts('', '', '', 2, 3);
  const products = product_data.products;

  return <AboutPage products={products} />;
}
