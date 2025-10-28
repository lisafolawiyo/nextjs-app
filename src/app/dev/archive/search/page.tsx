import { ArchiveSection } from '@/components/archive/archive-section/ArchiveSection';
import React from 'react';
import { products } from '@/utils/productsData';

export default function page() {
  return (
    <section className="pt-24 max-md:px-4">
      <ArchiveSection products={products} />
    </section>
  );
}
