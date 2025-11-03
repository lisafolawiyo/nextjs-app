import { ArchiveSection } from '@/components/archive/archive-section/ArchiveSection';
import React from 'react';
import { getProducts } from '@/actions/woocommerce/products';

export default async function SearchShop({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    search?: string;
    category?: string;
    tag?: string;
  }>;
}) {
  const per_page = 12;
  const { page = '1' } = await searchParams;
  const { search = '' } = await searchParams;
  const { category = '' } = await searchParams;
  const { tag = '' } = await searchParams;

  const product_data = await getProducts(
    search,
    category,
    tag,
    parseInt(page, 10),
    per_page,
  );
  const products = product_data.products;
  const totalPages = product_data.total_pages;

  return (
    <section className="pt-24 max-md:px-4">
      <ArchiveSection products={products} totalPages={totalPages} page={page} />
    </section>
  );
}
