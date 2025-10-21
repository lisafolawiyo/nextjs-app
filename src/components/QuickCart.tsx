'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import CartModal from './CartModal';
import useCartStore from '@/hooks/zustand/useCartStore';

function QuickCart() {
  const { items: cartItems } = useCartStore((state) => state);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image
          src="/media/images/bag-icon.png"
          alt="shop bag icon"
          width={22}
          height={10}
        />
        <div className="absolute -right-4 -top-4 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-sm text-white">
          {cartItems.length}
        </div>
      </div>
      {isCartOpen && <CartModal setIsCartOpen={setIsCartOpen} />}
    </div>
  );
}

export default QuickCart;
