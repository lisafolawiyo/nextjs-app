'use client';

import Add from '@/components/Add';
import DOMPurify from 'isomorphic-dompurify';
import ProductImagesTwo from '@/components/ProductImagesTwo';
import SizeGuideButton from '@/components/SizeGuideButton';
import { stripOuterTags } from '@/utils/util';
import { ProductType } from '@/types/product';
import { Suspense } from 'react';

const SingleProduct = ({ product }: { product: ProductType }) => {
  return (
    <section className="single-product-section">
      <div className="single-product-wrapper">
        <Suspense fallback={'...Loading'}>
          <ProductImagesTwo items={product.images} />
        </Suspense>
        <div className="single-product-right">
          <div className="flex w-full flex-col gap-6">
            <Suspense fallback={'...Loading'}>
              <h1 className="text-4xl font-medium uppercase">{product.name}</h1>
              <div
                className="text-base text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.description),
                }}
              ></div>
              <SizeGuideButton />
              <div className="h-[2px] bg-gray-100" />
              {product.on_sale === false ? (
                <h2 className="text-2xl font-medium">${product.price}</h2>
              ) : (
                <div className="flex items-center gap-4">
                  <h3 className="text-xl text-gray-500 line-through">
                    ${product.regular_price}
                  </h3>
                  <h2 className="text-2xl font-medium">${product.price}</h2>
                </div>
              )}
              <div className="h-[2px] bg-gray-100" />
              <Add
                product_id={product.id}
                name={product.name}
                desc={stripOuterTags(product.short_description)}
                price={product.price}
                stock_status={product.stock_status}
                image_src={product.images[0].src}
                product_options={[]}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
