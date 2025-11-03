'use client';

import React from 'react';
import { Product } from '@/utils/models';
import Link from 'next/link';

const RelatedProducts = ({
  related_products,
}: {
  related_products: Product[];
}) => {
  const products = related_products;

  const stripOuterTags = (str: string) => {
    return str
      .replace(/<[^>]*>/g, '') // remove all tags
      .replace(/\n/g, '') // remove newline characters
      .trim();
  };

  return (
    <div className="product-list">
      {products.length > 0 &&
        products.map((product: Product) => (
          <Link
            href={'/product/' + product.slug}
            key={product.id}
            className="product-item"
          >
            <div className="item-images">
              <div
                className="item-image-top"
                style={{
                  backgroundImage: `url('${
                    product.images?.[0]?.src || '/media/images/placeholder.png'
                  }')`,
                }}
              />
              {product.images[1] && (
                <div
                  // src={product.images[1].src || "/product.png"}
                  className="item-image-bottom"
                  style={{
                    backgroundImage: `url('${
                      product.images[1].src || '/product.png'
                    }')`,
                  }}
                />
              )}
            </div>
            {/* <div className="flex justify-between items-baseline">
            <span className="font-thin text-xs text-gray-500 uppercase">{product.name}</span>
            <span className="text-sm">${product.price}</span>
          </div> */}
            <div className="shop-product-detail-wrap">
              <h3 className="look">{product.name}</h3>
              <p className="shop-product-name">
                {stripOuterTags(product.short_description)}
              </p>
              <h3 className="collection-name">{product.categories[0].name}</h3>
              <p className="shop-product-price">${product.price}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default RelatedProducts;
