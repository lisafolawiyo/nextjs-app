"use client";

import React from 'react'
import { useState } from "react";
import Image from "next/image";
import CartModal from './CartModal';
import useCartStore from '@/hooks/zustand/useCartStore';


function QuickCart() {
  const { items:  cartItems } = useCartStore((state) => state);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <div className="relative">
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/media/images/bag-icon.png" alt="shop bag icon" width={22} height={10} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-pink-500 rounded-full text-white text-sm flex items-center justify-center">
          {cartItems.length}
        </div>
      </div>
        {isCartOpen && <CartModal />}
    </div>
  )
}

export default QuickCart