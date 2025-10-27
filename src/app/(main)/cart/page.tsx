'use client';

import React from 'react';
import { useGsapFadeIn } from '@/hooks/useGsapFadeIn';

function Cart() {
  const containerRef = useGsapFadeIn({ delay: 0.2 });

  return <div ref={containerRef as React.RefObject<HTMLDivElement>}>Cart</div>;
}

export default Cart;
