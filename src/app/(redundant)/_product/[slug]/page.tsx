import { Suspense } from 'react';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Skeleton from '@/components/Skeleton';
import { ProductVariation } from '@/types/product';
import SingleProduct from '@/components/SingleProduct';
import RelatedProducts from '@/components/RelatedProducts';
import VariableProduct from '@/components/VariableProduct';
import {
  getProductVariations,
  getRelatedProducts,
  getSingleProductData,
} from '@/actions/woocommerce/products';

export const metadata: Metadata = {
  title: 'Lisa Folawiyo Online Store | Shop Luxury Fashion',
  description:
    'Shop Lisa Folawiyo’s online store for luxury fashion pieces, from dresses to accessories.',
};

const SinglePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const product_data = await getSingleProductData(slug);
  const relatedProduct = await getRelatedProducts(
    product_data.upsell_ids,
    1,
    10,
  );
  let productVariations: ProductVariation[] = [];
  if (!product_data) {
    return notFound();
  }
  if (product_data.attributes.length > 0) {
    const _productVariations = await getProductVariations(
      product_data.id,
      1,
      100,
    );
    productVariations = _productVariations.variations;
  }

  const product = {
    id: product_data.id,
    name: product_data.name,
    slug: product_data.slug,
    type: product_data.type,
    status: product_data.status,
    description: product_data.description,
    sku: product_data.sku,
    price: product_data.price,
    regular_price: product_data.regular_price,
    sale_price: product_data.sale_price,
    on_sale: product_data.on_sale,
    upsell_ids: product_data.upsell_ids,
    categories: product_data.categories,
    tags: product_data.tags,
    images: product_data.images,
    attributes: product_data.attributes,
    variations: product_data.variations,
    related_ids: product_data.related_ids,
    meta_data: product_data.meta_data,
    stock_status: product_data.stock_status,
  };

  return (
    <div className="page-container product-container">
      <div className="product-inner-div">
        {product_data.attributes.length > 0 && productVariations.length > 0 ? (
          <VariableProduct
            product={product}
            productVariations={productVariations}
          />
        ) : (
          <SingleProduct product={product} />
        )}

        <section className="more-options-section">
          <div className="more-options-wrapper">
            <div className="more-options-title-wrap">
              <h3>You may also like</h3>
            </div>
            <div className="shop-products-inner-wrap">
              <Suspense fallback={<Skeleton />}>
                <RelatedProducts related_products={relatedProduct.products} />
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SinglePage;
