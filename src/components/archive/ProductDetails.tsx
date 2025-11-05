'use client';

import { ChevronLeft, Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ProductCard } from '@/components/archive';
import { useGsapFadeInChildren } from '@/hooks/useGsapFadeIn';
import DOMPurify from 'isomorphic-dompurify';
import { ROUTES } from '@/utils/routes';
import { useState } from 'react';
import useCartStore from '@/hooks/zustand/useCartStore';
import { formatCurrency } from '@/utils/formatCurrency';
import { ImageGalleryModal } from './ImageGalleryModal';
import { SizeGuideModal } from './SizeGuideModal';
import toast from 'react-hot-toast';
import { stripOuterTags } from '@/utils/util';

function ProductOptions({ product }: { product: UnknownObject }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const sizes = ['S', 'M', 'L', 'XL'];
  const items = ['Full set', 'Jersey Non Embellished', 'Embellished', 'Short'];

  const handleAddToCart = () => {
    if (!selectedSize || !selectedItem) {
      toast.error('Please select size and item');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      desc: stripOuterTags(product.short_description || ''),
      price: product.price,
      stock_status: 'instock',
      image: product.images?.[0]?.src,
      product_options: [
        { name: 'Size', value: selectedSize },
        { name: 'Item', value: selectedItem },
      ],
      quantity: quantity,
    });

    toast.success('Added to cart successfully!');
    setSelectedSize('');
    setSelectedItem('');
    setQuantity(1);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi, I'd like to order:\n${product.name}\nSize: ${selectedSize}\nItem: ${selectedItem}\nQuantity: ${quantity}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-6 border-t border-[#212529] p-4">
      <div className="border-b border-[#212529] pb-4">
        <p className="text-2xl font-light text-black md:text-[40px]">
          {formatCurrency(product.price)}
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-base font-light text-[#6c757d] md:text-[20px]">
          Choose a size
        </h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`min-w-[60px] border-[1px] px-6 py-2 text-sm transition-all md:text-base ${
                selectedSize === size
                  ? 'border-[#212529] bg-[#212529] text-white'
                  : 'border-[#6c757d] bg-white text-[#6c757d] hover:border-[#212529]'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-base font-light text-[#6c757d] md:text-[20px]">
          Choose an item
        </h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedItem(item)}
              className={`border px-4 py-2 text-sm transition-all md:text-base ${
                selectedItem === item
                  ? 'border-[#212529] bg-[#212529] text-white'
                  : 'border-[#6c757d] bg-white text-[#6c757d] hover:border-[#212529]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-base font-light text-[#6c757d] md:text-[20px]">
          Choose a Quantity
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-100">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 text-[#6c757d] transition-colors hover:text-black"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-[40px] text-center text-base text-[#6c757d] md:text-[20px]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 text-[#6c757d] transition-colors hover:text-black"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="border border-[#212529] bg-white px-8 py-2 text-sm text-[#6c757d] transition-all hover:bg-black hover:text-white md:text-base"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* WhatsApp Order Button */}
      <div>
        <button
          onClick={handleWhatsAppOrder}
          className="flex items-center gap-2 border border-[#212529] bg-white px-6 py-2 text-sm text-[#6c757d] transition-all hover:bg-black hover:text-white md:text-base"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Order On WhatsApp
        </button>
      </div>
    </div>
  );
}

function FashionItemCard({
  product,
  onSizeGuideClick,
}: {
  product: UnknownObject;
  onSizeGuideClick: () => void;
}) {
  return (
    <div className="bg-white ">
      <div className="mx-auto border-blue-500">
        <button
          onClick={onSizeGuideClick}
          className="mb-4 cursor-pointer underline transition-colors hover:text-gray-600 lg:hidden"
        >
          Click here to see size guide
        </button>
        <div className="flex items-center justify-between border-b-2 border-t-2 border-[#212529] p-4">
          <h1 className="text-[20px] font-normal uppercase text-black md:text-[40px]">
            {product.name}
          </h1>
          <button
            onClick={onSizeGuideClick}
            className="hidden cursor-pointer underline transition-colors hover:text-gray-600 lg:block"
          >
            Click here to see size guide
          </button>
        </div>

        <div className=" p-4">
          <h2 className="mb-3 text-base  text-black md:text-[32px]">
            DESCRIPTION
          </h2>
          <div
            className="space-y-3 text-base text-[#212529] md:text-[20px]"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.description),
            }}
          ></div>
        </div>

        <ProductOptions product={product} />
        {/* 
        <div className="flex p-4">
          <div className="flex-1">
            <div className="mb-1 text-xs font-bold text-black">YEAR</div>
            <div className="text-base text-black md:text-[24px]">2022</div>
          </div>
          <div className="flex-1">
            <div className="mb-1 text-xs font-bold text-black">
              FABRICATION:
            </div>
            <div className="text-base text-black md:text-[24px]">-</div>
          </div>
          <div className="flex-1">
            <div className="mb-1 text-xs font-bold text-black">
              EMBELLISHMENT TIME:
            </div>
            <div className="text-base text-black md:text-[24px]">-</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export function ProductDetails({
  product,
  relatedProducts,
}: {
  product: UnknownObject;
  relatedProducts: UnknownObject[];
}) {
  const contentRef = useGsapFadeInChildren({ delay: 0.2, stagger: 0.2 });
  const router = useRouter();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  return (
    <section className="px-4 pt-28 md:px-8 xl:pt-32">
      <div ref={contentRef as React.RefObject<HTMLDivElement>}>
        <button
          onClick={() => router.back()}
          className="mb-6 flex cursor-pointer items-center gap-2 text-sm text-[#212529] transition-colors hover:text-gray-600 md:text-[24px]"
        >
          <ChevronLeft className="h-4" />
          Back
        </button>

        <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-[40%_1fr]">
          <div className={`group md:border md:border-[#212529]`}>
            <ProductCard
              product={product}
              onImageClick={() => setIsGalleryOpen(true)}
            />
          </div>
          <FashionItemCard
            product={product}
            onSizeGuideClick={() => setIsSizeGuideOpen(true)}
          />
        </div>
      </div>

      <ImageGalleryModal
        images={product.images || []}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialIndex={0}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      <>
        <div className="md:border-t-1 md:*:border-b-1 md:*:border-[#212529] lg:*:border-r-1 [&>:first-child:border-l-1 mx-auto mt-10 grid  grid-cols-1 gap-0 border-black md:border-l-[1px] lg:grid-cols-3 lg:gap-0">
          {relatedProducts.map((relatedProduct, index) => (
            <div
              key={relatedProduct.id}
              className={`group  ${
                index < relatedProduct.length - 1
                  ? 'border-r md:border-[#212529]'
                  : ''
              }`}
            >
              <ProductCard product={relatedProduct} index={index} />
            </div>
          ))}
        </div>
        <div className="mt-10 flex w-full items-center justify-center py-10">
          <Link href={ROUTES.LISA_ARCHIVE_SEARCH}>
            <button className="whitespace-nowrap border border-black px-6 py-2 text-sm  transition-all duration-300 hover:bg-black hover:text-white md:w-[219px] md:text-base">
              DISCOVER MORE
            </button>
          </Link>
        </div>
      </>
    </section>
  );
}
