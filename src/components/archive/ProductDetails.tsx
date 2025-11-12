'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import { ChevronLeft, Minus, Plus } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ROUTES } from '@/utils/routes';
import { WhatsApp } from '@/components/Icons';
import { stripOuterTags } from '@/utils/util';
import { ProductCard } from '@/components/archive';
import useCartStore from '@/hooks/zustand/useCartStore';
import { formatCurrency } from '@/utils/formatCurrency';
import { useGsapFadeInChildren } from '@/hooks/useGsapFadeIn';

import { SizeGuideModal } from './SizeGuideModal';
import { ImageGalleryModal } from './ImageGalleryModal';

function ProductOptions({
  product,
  productVariations,
}: {
  product: UnknownObject;
  productVariations: UnknownObject[];
}) {
  const stockNumber = Infinity;

  const [selectedOptions, setSelectedOptions] = useState<UnknownObject[]>([]);

  const [price, setPrice] = useState<string>('0');

  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  // Set default selections on first load
  useEffect(() => {
    const defaultSelections = product?.attributes
      .filter((attr: UnknownObject) => attr.options.length > 0)
      .map((attr: UnknownObject) => ({
        name: attr.name,
        value: attr.options[0],
      }));
    setSelectedOptions(defaultSelections);
  }, [product?.attributes]);

  // Whenever selectedOptions change → check for matching variation
  useEffect(() => {
    if (selectedOptions.length === 0) return;

    const matchedVariation = productVariations.find((variation) => {
      if (!variation.attributes) return false;

      return variation.attributes.every((attr: UnknownObject) => {
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

  const handleVariations = (productOption: UnknownObject) => {
    setSelectedOptions((prevOptions) => {
      const filtered = prevOptions.filter(
        (option: UnknownObject) => option.name !== productOption.name,
      );
      return [...filtered, productOption];
    });
  };

  const handleAddToCart = () => {
    addToCart({
      id: product?.id,
      name: product?.name,
      desc: stripOuterTags(product?.description || ''),
      price: product?.attributes?.length
        ? Number(price)
        : Number(product?.price),
      stock_status: product?.stock_status,
      image: product?.images?.[0]?.src,
      product_options: selectedOptions as ProductOption[],
      quantity,
    });

    setQuantity(1);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi, I'd like to order:\n${product?.name}\n${
      product?.attributes?.length > 0
        ? selectedOptions?.map((option) => {
            return `\n${option?.name}: ${option?.value}`;
          })
        : ''
    }\nQuantity: ${quantity}`;

    const whatsappUrl = `https://wa.me/2348033085416?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-6 border-t border-[#212529] p-4">
      <div className="border-b border-[#212529] pb-4">
        {product?.on_sale === false ? (
          <p className="text-2xl font-light text-black md:text-[40px]">
            {product?.attributes?.length
              ? formatCurrency(Number(price))
              : formatCurrency(Number(product?.price))}
          </p>
        ) : (
          <div className="flex items-center gap-4">
            <p className="text-xl font-light text-gray-500 line-through md:text-[35px]">
              {formatCurrency(product?.regular_price)}
            </p>
            <p className="text-2xl font-light text-black md:text-[40px]">
              {formatCurrency(product?.price)}
            </p>
          </div>
        )}
      </div>

      {product?.attributes?.length > 0 && (
        <>
          {product?.attributes.map((attribute: UnknownObject) => (
            <div key={attribute.slug}>
              <h3 className="mb-3 text-base font-light text-[#6c757d] md:text-[20px]">
                Choose a {attribute.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {attribute.options.map((option: string) => {
                  const isOptionSelected = selectedOptions.some(
                    (selected) =>
                      selected.name === attribute.name &&
                      selected.value === option,
                  );

                  return (
                    <button
                      key={option}
                      onClick={() =>
                        handleVariations({
                          name: attribute.name,
                          value: option,
                        })
                      }
                      className={`min-w-[60px] border-[1px] px-6 py-2 text-sm transition-all md:text-base ${
                        isOptionSelected
                          ? 'border-[#212529] bg-[#212529] text-white'
                          : 'border-[#6c757d] bg-white text-[#6c757d] hover:border-[#212529]'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </>
      )}

      <div>
        <h3 className="mb-3 text-base font-light text-[#6c757d] md:text-[20px]">
          Choose a Quantity
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-gray-100">
              <button
                disabled={quantity === 1}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className={cn(
                  'px-4 py-2 transition-colors',
                  quantity === 1
                    ? 'cursor-not-allowed text-gray-300'
                    : 'text-[#6c757d] hover:text-black',
                )}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-[40px] text-center text-base text-[#6c757d] md:text-[20px]">
                {quantity}
              </span>
              <button
                disabled={quantity >= stockNumber}
                onClick={() => setQuantity(quantity + 1)}
                className={cn(
                  'px-4 py-2 transition-colors',
                  quantity >= stockNumber
                    ? 'cursor-not-allowed text-gray-300'
                    : 'text-black hover:text-[#6c757d]',
                )}
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
          {quantity >= stockNumber && (
            <p className="text-sm italic text-[#6c757d]">
              Only {stockNumber} item{stockNumber > 1 ? 's' : ''} available in
              stock
            </p>
          )}
        </div>
      </div>

      <div>
        <button
          onClick={handleWhatsAppOrder}
          className="flex items-center gap-2 border border-[#212529] bg-white px-6 py-2 text-sm text-[#6c757d] transition-all hover:bg-black hover:text-white md:text-base"
        >
          <WhatsApp className="h-5 w-5" />
          Order On WhatsApp
        </button>
      </div>
    </div>
  );
}

function ProductDetailsCard({
  product,
  onSizeGuideClick,
  productVariations,
}: {
  product: UnknownObject;
  onSizeGuideClick: () => void;
  productVariations: UnknownObject[];
}) {
  return (
    <div className="bg-white ">
      <div className="mx-auto border-blue-500">
        <button
          onClick={onSizeGuideClick}
          className="mb-8 cursor-pointer underline transition-colors hover:text-gray-600 lg:hidden"
        >
          Click here to see size guide
        </button>
        <div className="flex items-center justify-between border-b-2 border-t-2 border-[#212529] p-4">
          <h1 className="text-[20px] font-normal uppercase text-black md:text-[40px]">
            {product?.name}
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
              __html: DOMPurify.sanitize(product?.description),
            }}
          ></div>
        </div>

        <ProductOptions
          product={product}
          productVariations={productVariations}
        />

        {/* <div className="flex p-4">
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
  productVariations,
}: {
  product: UnknownObject;
  relatedProducts: UnknownObject[];
  productVariations: UnknownObject[];
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
              hideAddToCart={true}
            />
          </div>
          <ProductDetailsCard
            product={product}
            productVariations={productVariations}
            onSizeGuideClick={() => setIsSizeGuideOpen(true)}
          />
        </div>
      </div>

      <ImageGalleryModal
        images={product?.images || []}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialIndex={0}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
      <div className="md:border-t-1 md:*:border-b-1 md:*:border-[#212529] lg:*:border-r-1 [&>:first-child:border-l-1 mx-auto mt-10 grid  grid-cols-1 gap-0 border-black md:border-l-[1px] lg:grid-cols-3 lg:gap-0">
        {relatedProducts.map((relatedProduct, index) => (
          <div
            key={relatedProduct?.id}
            className={`group  ${
              index < relatedProduct?.length - 1
                ? 'border-r md:border-[#212529]'
                : ''
            }`}
          >
            <ProductCard product={relatedProduct} index={index} />
          </div>
        ))}
      </div>
      <div className="mt-10 flex w-full items-center justify-center py-10">
        <Link href={ROUTES.SHOP}>
          <button className="whitespace-nowrap border border-black px-6 py-2 text-sm  transition-all duration-300 hover:bg-black hover:text-white md:w-[219px] md:text-base">
            DISCOVER MORE
          </button>
        </Link>
      </div>
    </section>
  );
}
