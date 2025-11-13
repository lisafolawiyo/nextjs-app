export default function CartLoading() {
  return (
    <div className="animate-pulse px-4 pt-32 md:px-8">
      <div className="mx-auto max-w-7xl ">
        {/* Page Title Skeleton */}
        <div className="mb-8 h-12 w-48 bg-gray-200 md:h-16 md:w-64" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]">
          {/* Cart Items Section */}
          <div className="space-y-6">
            {/* Cart Item Skeleton */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex gap-4 border border-gray-200 p-4 md:gap-6"
              >
                {/* Product Image */}
                <div className="h-32 w-32 flex-shrink-0 bg-gray-200 md:h-40 md:w-40" />

                {/* Product Details */}
                <div className="flex flex-1 flex-col justify-between">
                  <div className="space-y-2">
                    <div className="h-6 w-3/4 bg-gray-200" />
                    <div className="h-4 w-1/2 bg-gray-200" />
                    <div className="h-4 w-1/3 bg-gray-200" />
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 bg-gray-200" />
                      <div className="h-6 w-8 bg-gray-200" />
                      <div className="h-8 w-8 bg-gray-200" />
                    </div>

                    {/* Price */}
                    <div className="h-6 w-20 bg-gray-200" />
                  </div>
                </div>

                {/* Remove Button */}
                <div className="h-6 w-6 bg-gray-200" />
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="h-fit space-y-6 border border-gray-200 p-6">
            <div className="h-8 w-40 bg-gray-200" />

            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="h-5 w-24 bg-gray-200" />
                <div className="h-5 w-20 bg-gray-200" />
              </div>
              <div className="flex justify-between">
                <div className="h-5 w-24 bg-gray-200" />
                <div className="h-5 w-20 bg-gray-200" />
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4">
                <div className="h-6 w-24 bg-gray-200" />
                <div className="h-6 w-24 bg-gray-200" />
              </div>
            </div>

            {/* Checkout Button */}
            <div className="h-12 w-full bg-gray-200" />

            {/* Continue Shopping Link */}
            <div className="mx-auto h-5 w-40 bg-gray-200" />
          </div>
        </div>

        {/* Empty Cart Message (Alternative State) */}
        <div className="hidden">
          <div className="mx-auto max-w-md space-y-6 py-16 text-center">
            <div className="mx-auto h-24 w-24 bg-gray-200" />
            <div className="mx-auto h-8 w-48 bg-gray-200" />
            <div className="mx-auto h-5 w-64 bg-gray-200" />
            <div className="mx-auto h-12 w-48 bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
