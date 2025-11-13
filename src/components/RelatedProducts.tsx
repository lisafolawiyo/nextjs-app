'use client';

import React from 'react';

import Link from 'next/link';

import { Product } from '@/utils/models';

const RelatedProducts = ({
  related_products,
}: {
  related_products: Product[];
}) => {
  const products = related_products;

  const stripOuterTags = (str: string) => {
    return str
      .replace(/<[^>]*>/g, '')
      .replace(/\n/g, '')
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
                  className="item-image-bottom"
                  style={{
                    backgroundImage: `url('${
                      product.images[1].src || '/product.png'
                    }')`,
                  }}
                />
              )}
            </div>
            <div className="shop-product-detail-wrap">
              <h3 className="look">{product.name}</h3>
              <p className="shop-product-name">
                {stripOuterTags(product.description)}
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
