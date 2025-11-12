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
  hideAddToCart?: boolean;
}

export const ProductCard = ({
  product,
  index,
  onImageClick,
  hideAddToCart = false,
}: ProductCardProps) => {
  const fadeInProps = useFadeIn(index ?? 0, 0.2);
  const router = useRouter();

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Cart functionality will be implemented later
    console.log('Add to cart clicked for:', product.name);
  };

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
      className="flex h-full w-full cursor-pointer flex-col transition-colors duration-500 group-hover:bg-black/90 md:p-10"
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

        <div className="pointer-events-none absolute inset-0 z-10 w-full justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
        {!hideAddToCart && (
          <div className="absolute bottom-4 z-20 flex w-full items-center justify-center">
            <button
              onClick={handleAddToCartClick}
              className="pointer-events-auto transform border border-white bg-transparent px-4 py-1.5 text-sm tracking-wider text-white transition-all duration-500 hover:bg-white hover:text-black group-hover:translate-y-0 md:min-w-[219px] md:text-base"
            >
              ADD TO CART
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 py-4 transition-colors duration-500 max-md:px-2">
        <div className="flex h-full items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-bold uppercase text-[#000000] transition-colors duration-500 group-hover:text-gray-300 md:text-[20px]">
              {product.name}
            </p>
            <p className="text-xs text-[#000000] transition-colors duration-500 group-hover:text-white md:text-[20px]">
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
