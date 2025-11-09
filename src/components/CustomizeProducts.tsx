'use client';

import React, { useEffect, useState } from 'react';

import { stripOuterTags } from '@/utils/util';
import { ProductType, ProductVariation } from '@/types/product';

import Add from './Add';

// type Attribute = {
//   id: number;
//   name: string;
//   slug: string;
//   position: number;
//   visible: boolean;
//   variation: boolean;
//   options: string[];
// };

const CustomizeProducts = ({
  product,
  price,
  setPrice,
  productVariations,
}: {
  product: ProductType;
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  productVariations: ProductVariation[];
}) => {
  const [selectedOptions, setSelectedOptions] = useState<ProductOption[]>([]);

  // Set default selections on first load
  useEffect(() => {
    const defaultSelections = product.attributes
      .filter((attr) => attr.options.length > 0)
      .map((attr) => ({
        name: attr.name,
        value: attr.options[0],
      }));
    setSelectedOptions(defaultSelections);
  }, [product.attributes]);

  // Whenever selectedOptions change → check for matching variation
  useEffect(() => {
    if (selectedOptions.length === 0) return;

    const matchedVariation = productVariations.find((variation) => {
      if (!variation.attributes) return false;

      return variation.attributes.every((attr) => {
        const selected = selectedOptions.find(
          (opt) =>
            opt.name.toLowerCase() === attr.name.toLowerCase() &&
            opt.value.toLowerCase() === attr.option.toLowerCase(),
        );
        return !!selected;
      });
    });

    if (matchedVariation) {
      setPrice(matchedVariation.price);
    }
  }, [selectedOptions, productVariations, setPrice]);

  const handleVariations = (productOption: ProductOption) => {
    setSelectedOptions((prevOptions) => {
      const filtered = prevOptions.filter(
        (option) => option.name !== productOption.name,
      );
      return [...filtered, productOption];
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {product.attributes.map((attribute) => (
        <div className="flex flex-col gap-4" key={attribute.slug}>
          <h4 className="font-medium">Choose a {attribute.name}</h4>
          <ul className="flex flex-wrap items-center gap-3">
            {attribute.options.map((option) => {
              const isOptionSelected = selectedOptions.some(
                (selected) =>
                  selected.name === attribute.name && selected.value === option,
              );

              return (
                <li
                  key={option}
                  onClick={() =>
                    handleVariations({ name: attribute.name, value: option })
                  }
                  className={`cursor-pointer rounded-md px-4 py-1 text-sm text-gray-600 ring-1 ring-gray-600 transition duration-200 
                    ${isOptionSelected ? 'bg-pink-300' : 'hover:bg-pink-100'}`}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <Add
        product_id={product.id}
        name={product.name}
        desc={stripOuterTags(product.short_description)}
        price={price}
        stock_status={product.stock_status}
        image_src={product.images[0].src}
        product_options={selectedOptions}
      />
    </div>
  );
};

export default CustomizeProducts;
