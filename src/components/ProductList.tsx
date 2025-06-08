import Link from "next/link";
import { Product } from "@/utils/models";
import { getProducts } from "@/actions/woocommerce/products";
import Pagination from "./Pagination";
import { stripOuterTags } from "@/utils/util";

const ProductList = async ({
  page,
  per_page,
  search,
  category,
  tag
}: {
  page: string;
  per_page: number;
  search: string;
  category: string;
  tag: string
}) => {

  const product_data = await getProducts(search, category, tag, parseInt(page,10), per_page,);
  const products = product_data.products;
  const total_pages = product_data.total_pages;


  return (
    <div className="product-list">
      {products.length > 0 && products.map((product: Product) => (
        <Link
          href={"/product/" + product.slug}
          key={product.id}
          className="product-item"
        >
          <div className="item-images">
            <div
              className="item-image-top"
              style={{
                backgroundImage: `url('${product.images[0].src || "/product.png"}')`
              }}
            />
            {product.images[1] && (
              <div
                // src={product.images[1].src || "/product.png"}
                className="item-image-bottom"
                style={{
                    backgroundImage: `url('${product.images[1].src || "/product.png"}')`
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
              <h3 className="collection-name">{product.categories[0].name}</h3>
              <p className="shop-product-price">${product.price}</p>
          </div>
        </Link>
      ))}

      <Pagination currentPage={parseInt(page,10)} totalPages={total_pages} />
    </div>
  );
};

export default ProductList;
