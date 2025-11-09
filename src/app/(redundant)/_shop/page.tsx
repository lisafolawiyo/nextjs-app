import { getProducts } from '@/actions/woocommerce/products';
import ProductList from '@/components/ProductList';
import Skeleton from '@/components/Skeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Lisa Folawiyo Online Store | Shop Luxury Fashion',
  description:
    "Shop Lisa Folawiyo's online store for luxury fashion pieces, from dresses to accessories.",
};

export default async function ListPage({
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
    <div className="page-container shop-container">
      <div className="page-inner-div shop-inner-div">
        <Suspense fallback={<Skeleton />}>
          <ProductList
            products={products}
            totalPages={totalPages}
            page={page}
          />
        </Suspense>
      </div>
    </div>
  );
}
