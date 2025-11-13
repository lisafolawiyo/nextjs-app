import React from 'react';

import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'The Archive Edit | Lisa Folawiyo Studio',
  description:
    'Explore Lisa Folawiyo’s Archive Edit. A collection of hand-embellished Ankara, lace, and silk pieces celebrating 20 years of beadwork, craftsmanship, and modern African luxury. ',
  keywords:
    `lisa folawiyo archive edit, lisa folawiyo ss25 archive sale, hand-crafted ankara dress, nigerian luxury fashion, collectible designer pieces, isa folawiyo archive sale, lisa archive sale, lisa folawiyo ss25 collection, lisa folawiyo limited edition dresses, nigerian luxury fashion designer, shop lisa folawiyo online`.split(
      ',',
    ),
};

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
    undefined,
    '2025-11-04T00:00:00',
  );
  const products = product_data.products;
  const totalPages = product_data.total_pages;

  const categories_data = await getProductCategories(1, 100);

  const tags_data = await getProductTags();

  return (
    <section className="pt-24 max-md:px-4">
      <ArchiveSection
        isShop
        products={products}
        totalPages={totalPages}
        page={page ?? '1'}
        categories={categories_data.categories}
        tags={tags_data.tags}
      />
    </section>
  );
}
