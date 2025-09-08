'use client';

import CustomizeProducts from "@/components/CustomizeProducts";
import DOMPurify from "isomorphic-dompurify";
import ProductImagesTwo from "@/components/ProductImagesTwo";
import SizeGuideButton from "@/components/SizeGuideButton";
import { ProductType, ProductVariation } from "@/types/product";
import { Suspense, useState } from "react";


const VariableProduct = ({
  product,
  productVariations,
}: {
  product: ProductType;
  productVariations: ProductVariation[];
}) => 
{
  const [price, setPrice] = useState<string>("0");
  return (
          <section className="single-product-section">
            <div className="single-product-wrapper">
              <Suspense fallback={"...Loading"}>
                <ProductImagesTwo items={product.images} />
              </Suspense>
              <div className="single-product-right">
                <div className="w-full flex flex-col gap-6">
                  <Suspense fallback={"...Loading"}>
                    <h1 className="text-4xl font-medium uppercase">{product.name}</h1>
                    <div
                      className="text-base text-gray-500"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          product.description
                        ),
                      }}
                    ></div>
                    <SizeGuideButton />
                    <div className="h-[2px] bg-gray-100" />
                    {product.on_sale === false ? (
                      <h2 className="font-medium text-2xl">${price}</h2>
                    ) : (
                      <div className="flex items-center gap-4">
                        <h3 className="text-xl text-gray-500 line-through">
                          ${product.regular_price}
                        </h3>
                        <h2 className="font-medium text-2xl">
                          ${product.price}
                        </h2>
                      </div>
                    )}
                    <div className="h-[2px] bg-gray-100" />
                      <CustomizeProducts
                        product = {product}
                        price = {price}
                        setPrice = {setPrice}
                        productVariations = {productVariations}
                      />
                  </Suspense>
                </div>

              </div>
            </div>
          </section>
  );
};

export default VariableProduct;
