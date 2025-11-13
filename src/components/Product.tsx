'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

const Product = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  return <></>;
};

export default Product;
