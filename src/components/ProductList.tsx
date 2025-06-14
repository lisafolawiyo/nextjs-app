'use client';
import Link from "next/link";
import { Product } from "@/utils/models";
import Pagination from "./Pagination";
import { stripOuterTags } from "@/utils/util";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ProductList = ({
  products,
  page,
  totalPages
}: {
  products: Product[];
  page: string;
  totalPages: number;
}) => {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  return (
    <div className="product-list">
      {products.length > 0 && products.map((product: Product) => (
        <Link
          href={"/product/" + product.slug}
          key={product.id}
          className="product-item"
        >
          <div className="item-images">
            {product.images && (
              <div
              className="item-image-top"
              style={{
                backgroundImage: `url('${product.images[0]?.src || '/media/images/placeholder.png'}')`
              }}
              />
             )}
            {product.images[1] && (
              <div
                className="item-image-bottom"
                style={{
                    backgroundImage: `url('${product.images[1]?.src || product.images[0]?.src}')`
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
              <p className="shop-product-name">{stripOuterTags(product.short_description)}</p>
              <h3 className="collection-name">{product.categories[0]?.name}</h3>
              <p className="shop-product-price">${product.price}</p>
          </div>
        </Link>
      ))}

      <Pagination currentPage={parseInt(page,10)} totalPages={totalPages} />
    </div>
  );
};

export default ProductList;
