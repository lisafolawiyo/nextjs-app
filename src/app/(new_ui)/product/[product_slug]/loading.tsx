export default function ProductDetailLoading() {
  return (
    <div className="animate-pulse px-4 pt-28 md:px-8 xl:pt-32">
      {/* Back Button Skeleton */}
      <div className="mb-6 h-6 w-24 bg-gray-200" />

      {/* Product Detail Grid */}
      <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-[40%_1fr]">
        {/* Product Image Skeleton */}
        <div className="border border-gray-200 md:p-10">
          <div className="h-[530px] w-full bg-gray-200" />
          <div className="mt-4 space-y-2 px-2">
            <div className="h-6 w-3/4 bg-gray-200" />
            <div className="h-5 w-1/2 bg-gray-200" />
            <div className="h-5 w-20 bg-gray-200" />
          </div>
        </div>

        {/* Product Info Skeleton */}
        <div className="space-y-6">
          {/* Title */}
          <div className="border-b-2 border-t-2 border-gray-200 p-4">
            <div className="h-10 w-3/4 bg-gray-200 md:h-12" />
          </div>

          {/* Description */}
          <div className="space-y-3 p-4">
            <div className="h-8 w-48 bg-gray-200" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200" />
              <div className="h-4 w-full bg-gray-200" />
              <div className="h-4 w-3/4 bg-gray-200" />
            </div>
          </div>

          {/* Product Options */}
          <div className="space-y-6 border-t border-gray-200 p-4">
            {/* Price */}
            <div className="border-b border-gray-200 pb-4">
              <div className="h-10 w-32 bg-gray-200 md:h-12 md:w-40" />
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <div className="h-6 w-32 bg-gray-200" />
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-16 bg-gray-200" />
                ))}
              </div>
            </div>

            {/* Item Selection */}
            <div className="space-y-3">
              <div className="h-6 w-32 bg-gray-200" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-32 bg-gray-200 md:w-40" />
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-3">
              <div className="h-6 w-40 bg-gray-200" />
              <div className="flex items-center gap-4">
                <div className="h-12 w-32 bg-gray-200" />
                <div className="h-12 w-40 bg-gray-200" />
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="h-12 w-48 bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Related Products Skeleton */}
      <div className="mt-10">
        <div className="mb-6 h-8 w-48 bg-gray-200" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4 border border-gray-200 p-4">
              <div className="h-[400px] w-full bg-gray-200" />
              <div className="space-y-2">
                <div className="h-6 w-3/4 bg-gray-200" />
                <div className="h-4 w-1/2 bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Discover More Button */}
      <div className="mt-10 flex w-full items-center justify-center py-10">
        <div className="h-12 w-48 bg-gray-200" />
      </div>
    </div>
  );
}
