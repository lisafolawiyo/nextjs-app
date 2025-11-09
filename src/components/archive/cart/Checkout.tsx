'use client';

import { ChevronLeft } from 'lucide-react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  OrderList,
  CHECKOUT_SCHEMA_TYPE,
  CheckoutForm,
} from '@/components/archive';
import { useGsapFadeInChildren } from '@/hooks/useGsapFadeIn';
import useCartStore from '@/hooks/zustand/useCartStore';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import {
  OrderData,
  PaysStackConfig,
  PaystackError,
  PaystackSuccessResponse,
  ShippingRate,
} from '@/types/checkout';
import { createOrder } from '@/actions/woocommerce/orders';

const PaystackWrapper = dynamic(() => import('@/components/PaystackWrapper'), {
  ssr: false,
});

const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? '';

let tempState: OrderData; // 👈 In-memory state variable

export function setTempState(data: OrderData) {
  tempState = data;
}

export function getTempState() {
  return tempState;
}

export function Checkout() {
  const [selectedShippingRate, setSelectedShippingRate] =
    useState<ShippingRate>({
      id: '',
      title: '',
      desc: '',
      delivery_time: '',
      fee: 0,
    });
  const [orderData, setOrderData] = useState<OrderData | null>();
  const [paystackConfig, setPaystackConfig] = useState<PaysStackConfig | null>(
    null,
  );

  const { items, cartTotal } = useCartStore((state) => state);

  const contentRef = useGsapFadeInChildren({ delay: 0.2, stagger: 0.2 });
  const router = useRouter();

  const handleCheckout = (data: CHECKOUT_SCHEMA_TYPE) => {
    const userInfo = {
      payment_method: 'paystack',
      payment_method_title: 'Debit/Credit Cards',
      set_paid: false,
      billing: {
        first_name: data.firstname,
        last_name: data.lastname,
        address_1: data.address,
        city: data.city,
        state: data.state,
        postcode: data.postcode,
        country: data.country,
        email: data.email,
        phone: data.phone,
      },
      shipping: {
        first_name: data.firstname,
        last_name: data.lastname,
        address_1: data.address,
        city: data.city,
        state: data.state,
        postcode: data.postcode,
        country: data.country,
      },
      shipping_lines: [
        {
          method_id: selectedShippingRate.id,
          method_title: selectedShippingRate.desc,
          total: String(selectedShippingRate.fee),
        },
      ],
      meta_data: [
        {
          key: 'order_origin',
          value: 'web - NextJs App',
        },
      ],
    };

    const lineItems = items.map((item) => ({
      product_id: String(item.id),
      quantity: item.quantity,
      name: item.desc,
      meta_data:
        item.product_options.length > 0
          ? item.product_options.map((opt) => ({
              key: opt.name,
              value: opt.value,
            }))
          : [],
    }));
    const _orderData = {
      ...userInfo,
      line_items: lineItems,
    };
    setOrderData(_orderData);

    const reference = `ref_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    setPaystackConfig({
      reference,
      email: data.email,
      amount: (cartTotal() + selectedShippingRate.fee) * 100,
      currency: 'USD',
      publicKey,
    });
  };

  const onSuccess = (ref: PaystackSuccessResponse) => {
    toast.success('Payment successful');
    setPaystackConfig(null);

    if (orderData !== null) {
      const updatedOrderData: OrderData = {
        ...orderData,
        set_paid: true,
        meta_data: [
          ...(orderData.meta_data || []),
          {
            key: 'reference',
            value: ref.reference,
          },
        ],
      };
      createOrder(updatedOrderData);
      setTempState(updatedOrderData);
      router.push('/payment_successful');
    }
  };

  const onClose = () => {
    toast.error('Payment cancelled');
    setPaystackConfig(null);
  };

  const onError = (error: PaystackError) => {
    console.error('Payment failed to initialize:', error);
    toast.error('Payment failed');
    if (orderData !== null) {
      setTempState(orderData);
      router.push('/payment_failed');
    }
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
            <OrderList shippingFee={selectedShippingRate?.fee} />

            <div className="max-h-max sm:px-10 lg:border-[1px] lg:border-[#212529] lg:py-20 2xl:px-20">
              <CheckoutForm
                onSubmit={handleCheckout}
                selectedShippingRate={selectedShippingRate}
                setSelectedShippingRate={setSelectedShippingRate}
              />
            </div>
          </div>

          {paystackConfig && (
            <PaystackWrapper
              config={paystackConfig}
              onSuccess={onSuccess}
              onClose={onClose}
              onError={onError}
            />
          )}
        </div>
      </div>
    </div>
  );
}
