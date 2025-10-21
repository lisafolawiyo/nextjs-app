'use client';

import { Productimage } from '@/types/product';
import React from 'react';
import { useState } from 'react';

const ProductImagesTwo = ({ items }: { items: Productimage[] }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="single-product-left">
      <div className="single-product-img-wrap">
        <div
          className="single-product-img"
          style={{
            backgroundImage: `url('${items[index].src}')`,
          }}
        ></div>
      </div>
      <div className="single-product-alt-img-wrap">
        {items.map((item: Productimage, i: number) => (
          <div
            key={item.id}
            onClick={() => setIndex(i)}
            className="single-product-alt-img-item"
          >
            <div
              className={`single-product-alt-img ${i === index && 'active'}`}
              style={{
                backgroundImage: `url('${item.src}')`,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImagesTwo;
