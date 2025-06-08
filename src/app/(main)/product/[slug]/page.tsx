import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import { getRelatedProducts, getSingleProductData } from "@/actions/woocommerce/products";
import ProductImagesTwo from "@/components/ProductImagesTwo";
import SizeGuideButton from "@/components/SizeGuideButton";
import RelatedProducts from "@/components/RelatedProducts";
import { stripOuterTags } from "@/utils/util";
import Skeleton from "@/components/Skeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lisa Folawiyo Online Store | Shop Luxury Fashion",
  description: "Shop Lisa Folawiyo’s online store for luxury fashion pieces, from dresses to accessories.",
};




const SinglePage = async ({ params, }: {params: Promise<{slug: string}>;}) => {
  const slug = (await params).slug;
  const product = await getSingleProductData(slug)
  const relatedProduct = await getRelatedProducts(product.upsell_ids,1,10);
  if (!product) {
    return notFound();
  }


  return (
    <div className="master-single-product">
      <section className="single-product-section">
        <div className="section-wrapper single-product-wrapper">
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
                  <h2 className="font-medium text-2xl">${product.price}</h2>
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
                {/* <div className="h-[2px] bg-gray-100" />
                <SizeGuideButton /> */}
                <div className="h-[2px] bg-gray-100" />
                {product.attributes.length > 0 ? (
                  <CustomizeProducts
                    product_id = {product.id}
                    name = {product.name}
                    desc = {stripOuterTags(product.short_description)}
                    price = {product.price}
                    stock_status = {product.stock_status}
                    image_src = {product.images[0].src}
                    attributes={product.attributes}
                  />
                ) : (
                  <Add
                    product_id = {product.id}
                    name = {product.name}
                    desc = {stripOuterTags(product.short_description)}
                    price = {product.price}
                    stock_status = {product.stock_status}
                    image_src = {product.images[0].src}
                    product_options = {[]}
                  />
                )}
              </Suspense>
            </div>

          </div>
        </div>
      </section>

      <section className="more-options-section">
        <div className="section-wrapper more-options-wrapper">
              <div className="more-options-title-wrap">
                  <h3>You may also like</h3>
              </div>
              <div className="shop-products-inner-wrap">
                <Suspense fallback={<Skeleton/>}>
                  <RelatedProducts 
                    related_products={relatedProduct.products}
                  />
                </Suspense>    
              </div>
          </div>
      </section>
    </div>
  );
};

export default SinglePage;
