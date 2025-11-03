import { ProductDetails } from '@/components/archive';
import React from 'react';
import { notFound } from 'next/navigation';
import {
  getProductVariations,
  getRelatedProducts,
  getSingleProductData,
} from '@/actions/woocommerce/products';
import { Metadata } from 'next';
import { ProductVariation } from '@/types/product';
import { stripOuterTags } from '@/utils/util';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product_slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).product_slug;

  const product = await getSingleProductData(slug);

  if (!product) {
    return {};
  }
  return {
    title: product.name,
    description: stripOuterTags(product.short_description),
    openGraph: {
      title: product?.title,
      description: stripOuterTags(product.short_description),
      images: [
        {
          url: product.images?.[0]?.src,
          width: 1200,
          height: 630,
          alt: product?.title,
        },
      ],
      // url: siteConfig.url,
      // siteName: siteConfig.name,
      // publishedTime: new Date(post?.date).toISOString();
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ product_slug: string }>;
}) {
  const slug = (await params).product_slug;

  const product_data = await getSingleProductData(slug);
  const relatedProducts = await getRelatedProducts(
    product_data.upsell_ids,
    1,
    9,
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

  console.log('productVariations: ', productVariations);
  return (
    <ProductDetails
      product={product_data}
      relatedProducts={relatedProducts?.products}
    />
  );
}
