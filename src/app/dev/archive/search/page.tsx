import { ArchiveSection } from '@/components/archive/archive-section/ArchiveSection';
import React from 'react';
import { products } from '../page';

export default function page() {
  return (
    <section className="pt-24">
      <ArchiveSection products={products} />
    </section>
  );
}
