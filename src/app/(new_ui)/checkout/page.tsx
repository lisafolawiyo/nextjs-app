'use client';

import dynamic from 'next/dynamic';

const Checkout = dynamic(
  () =>
    import('@/components/archive').then((mod) => ({ default: mod.Checkout })),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen items-center justify-center">
        <div>Loading...</div>
      </div>
    ),
  },
);

export default function page() {
  return <Checkout />;
}
