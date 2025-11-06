'use client';

import React from 'react';
import useCartStore from '@/hooks/zustand/useCartStore';
import { OrderItem } from '@/components/archive';
import { useGsapFadeInChildren } from '@/hooks/useGsapFadeIn';
import { formatCurrency } from '@/utils/formatCurrency';

export function OrderList() {
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

        <div className="flex items-center justify-between border-b border-t border-[#212529]  py-4 ">
          <span className="text-[20px] text-[#212529] lg:text-[24px]">
            Total
          </span>
          <span className="font-[#212529] text-[20px] lg:text-[24px] ">
            {formatCurrency(cartTotal())}
          </span>
        </div>
      </div>
    </div>
  );
}
