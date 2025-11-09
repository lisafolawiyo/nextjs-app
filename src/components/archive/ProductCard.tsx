'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useFadeIn } from '@/hooks/useFadeIn';
import { stripOuterTags } from '@/utils/util';
import { formatCurrency } from '@/utils/formatCurrency';

export interface Product {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  collection: string;
  price: number;
  year: number;
}

interface ProductCardProps {
  product: UnknownObject;
  index?: number;
  onImageClick?: () => void;
}

export const ProductCard = ({
  product,
  index,
  onImageClick,
}: ProductCardProps) => {
  const fadeInProps = useFadeIn(index ?? 0, 0.2);
  // const addToCart = useCartStore((state) => state.addToCart);
  // const removeFromCart = useCartStore((state) => state.removeFromCart);
  // const items = useCartStore((state) => state.items);
  const router = useRouter();

  // const cartItem = items.find(
  //   (item) =>
  //     item.id === product.id &&
  //     item.product_options.some(
  //       (opt) => opt.name === 'Collection' && opt.value === product.collection,
  //     ) &&
  //     item.product_options.some(
  //       (opt) => opt.name === 'Year' && opt.value === product.year.toString(),
  //     ),
  // );

  // const isInCart = !!cartItem;

  // const handleToggleCart = (e: React.MouseEvent) => {
  //   e.stopPropagation();

  //   if (isInCart && cartItem) {
  //     removeFromCart(cartItem.cart_id);
  //   } else {
  //     addToCart({
  //       id: product.id,
  //       name: product.title,
  //       desc: product.subtitle,
  //       price: product.price,
  //       stock_status: 'instock',
  //       image: product.image,
  //       product_options: [
  //         { name: 'Collection', value: product.collection },
  //         { name: 'Year', value: product.year.toString() },
  //       ],
  //       quantity: 1,
  //     });
  //   }
  // };

  const handleCardClick = () => {
    if (product?.slug) {
      router.push(`/product/${product.slug}`);
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onImageClick) {
      onImageClick();
    }
  };

  return (
    <div
      {...fadeInProps}
      onClick={onImageClick ? undefined : handleCardClick}
      className="w-full cursor-pointer  transition-colors duration-500 group-hover:bg-black/90 md:p-10 "
    >
      <div className="relative cursor-pointer overflow-hidden bg-white transition-all duration-500 hover:scale-[1] hover:shadow-2xl">
        <div
          onClick={onImageClick ? handleImageClick : undefined}
          className="relative z-10 cursor-pointer"
        >
          <Image
            src={product.images?.[0]?.src ?? '/media/images/placeholder.png'}
            alt={product.name}
            width={521}
            height={521}
            className="h-[530px] w-full object-cover object-top brightness-75 transition-transform duration-700 group-hover:scale-[1.05]"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 w-full justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
        {/* <div className="absolute bottom-4 flex w-full items-center justify-center">
          <button
            onClick={handleToggleCart}
            className={`transform border px-4 py-1.5 text-sm tracking-wider transition-all duration-500 group-hover:translate-y-0 md:min-w-[219px] md:text-base ${
              isInCart
                ? 'border-white bg-white text-black hover:bg-transparent hover:text-white'
                : 'border-white bg-transparent text-white hover:bg-white hover:text-black'
            }`}
          >
            {isInCart ? 'REMOVE FROM CART' : 'ADD TO CART'}
          </button>
        </div> */}
      </div>

      <div className="py-4 transition-colors duration-500 max-md:px-2">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-[#000000] transition-colors duration-500 group-hover:text-gray-300 md:text-[20px]">
              {product.name}
            </p>
            <p className="text-sm font-bold text-[#000000] transition-colors duration-500 group-hover:text-white md:text-[20px]">
              {stripOuterTags(product.short_description)}
            </p>
            <p className="text-sm text-gray-500 transition-colors duration-500 group-hover:text-white md:text-base">
              {product.categories[0]?.name}
            </p>
          </div>
          <p className="text-base text-gray-900 transition-colors duration-500 group-hover:text-white md:text-[24px]">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
    </div>
  );
};
