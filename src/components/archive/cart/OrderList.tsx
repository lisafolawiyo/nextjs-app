'use client';

import React from 'react';
import useCartStore from '@/hooks/zustand/useCartStore';
import { OrderItem } from '@/components/archive';
import { useGsapFadeInChildren } from '@/hooks/useGsapFadeIn';
import { formatCurrency } from '@/utils/formatCurrency';

interface OrderListProps {
  shippingFee?: number;
}

export function OrderList({ shippingFee = 0 }: OrderListProps) {
  const items = useCartStore((state) => state.items);
  const updateQty = useCartStore((state) => state.updateQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const itemsRef = useGsapFadeInChildren({ delay: 0.1, stagger: 0.15 });

  const handleUpdateQuantity = (
    cart_id: string,
    type: 'increment' | 'decrement',
  ) => {
    updateQty(type, cart_id);
  };

  const handleRemoveItem = (cart_id: string) => {
    removeFromCart(cart_id);
  };

  if (items.length === 0) {
    return (
      <div className="md:px-3 lg:border-[1px] lg:border-[#212529] lg:py-10 2xl:px-10">
        <div className="flex min-h-[200px] items-center justify-center">
          <p className="text-[20px] text-[#212529]">Your cart is empty</p>
        </div>
      </div>
    );
  }

  const subtotal = cartTotal();
  const shipping = shippingFee;
  const total = subtotal + shipping;

  return (
    <div className="md:px-3 lg:border-[1px] lg:border-[#212529] lg:py-10 2xl:px-10">
      <div
        ref={itemsRef as React.RefObject<HTMLDivElement>}
        className="space-y-8"
      >
        {items.map((item) => (
          <OrderItem
            key={item.cart_id}
            item={item}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemoveItem}
          />
        ))}

        <div className="space-y-4 border-t border-[#212529] pt-6">
          <div className="flex items-center justify-between text-[#212529]">
            <span className="text-[16px] lg:text-[18px]">Subtotal</span>
            <span className="text-[16px] font-medium lg:text-[18px]">
              {formatCurrency(subtotal)}
            </span>
          </div>
          <div className="flex items-center justify-between text-[#212529]">
            <span className="text-[16px] lg:text-[18px]">Shipping</span>
            <span className="text-[16px] font-medium lg:text-[18px]">
              {formatCurrency(shipping)}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-[#212529] pt-4 text-[#212529]">
            <span className="text-[20px] font-medium lg:text-[24px]">
              Total
            </span>
            <span className="text-[20px] font-medium lg:text-[24px]">
              {formatCurrency(total)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
