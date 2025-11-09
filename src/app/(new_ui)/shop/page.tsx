import React from 'react';

import type { SearchParams } from 'nuqs/server';
import { createSearchParamsCache, parseAsString } from 'nuqs/server';

import { ArchiveSection } from '@/components/archive/archive-section/ArchiveSection';
import {
  getProductCategories,
  getProductTags,
  getProducts,
} from '@/actions/woocommerce/products';

const searchParamsCache = createSearchParamsCache({
  page: parseAsString,
  search: parseAsString,
  category: parseAsString,
  tag: parseAsString,
});

export const dynamic = 'force-dynamic';

export default async function SearchShop({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const per_page = 12;

  const { page, search, category, tag } =
    await searchParamsCache.parse(searchParams);

  const product_data = await getProducts(
    search ?? '',
    category ?? '',
    tag ?? '',
    parseInt(page ?? '1', 10),
    per_page,
  );
  const products = product_data.products;
  const totalPages = product_data.total_pages;

  const categories_data = await getProductCategories();
  const tags_data = await getProductTags();

  return (
    <section className="pt-24 max-md:px-4">
      <ArchiveSection
        products={products}
        totalPages={totalPages}
        page={page ?? '1'}
        categories={categories_data.categories}
        tags={tags_data.tags}
      />
    </section>
  );
}
