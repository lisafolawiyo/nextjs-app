'use client';

import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';

import {
  OrderList,
  CHECKOUT_SCHEMA_TYPE,
  CheckoutForm,
} from '@/components/archive';
import { useGsapFadeInChildren } from '@/hooks/useGsapFadeIn';

export function Checkout() {
  const contentRef = useGsapFadeInChildren({ delay: 0.2, stagger: 0.2 });
  const router = useRouter();
  const [shippingFee, setShippingFee] = React.useState(0);

  const handleCheckout = (data: CHECKOUT_SCHEMA_TYPE) => {
    console.log('Checkout data:', data);
  };

  return (
    <div>
      <div className="min-h-screen bg-white pt-28">
        <div className="px-4 py-8 md:px-8">
          <button
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-1 text-base text-gray-600 hover:text-gray-900 md:text-[20px]"
          >
            <ChevronLeft size={16} />
            Back
          </button>
          <div className="max-lg:flex max-lg:items-center max-lg:justify-center">
            <h1 className="mb-8 text-[30px] font-normal  md:text-[48px]">
              YOUR ORDER
            </h1>
          </div>

          <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className="grid gap-20  md:gap-10 lg:grid-cols-2"
          >
            <OrderList shippingFee={shippingFee} />

            <div className="max-h-max sm:px-10 lg:border-[1px] lg:border-[#212529] lg:py-20 2xl:px-20">
              <CheckoutForm
                onSubmit={handleCheckout}
                onShippingChange={setShippingFee}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
