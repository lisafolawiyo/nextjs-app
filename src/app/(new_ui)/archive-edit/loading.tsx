export default function SearchLoading() {
  return (
    <div className="animate-pulse pt-24 max-md:px-4">
      <div className="px-4 md:px-8">
        {/* Header with Search and Filters Skeleton */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search Bar Skeleton */}
          <div className="h-12 w-full bg-gray-200 md:w-96" />

          {/* Filter Buttons Skeleton */}
          <div className="flex gap-3">
            <div className="h-10 w-24 bg-gray-200" />
            <div className="h-10 w-24 bg-gray-200" />
            <div className="h-10 w-24 bg-gray-200" />
          </div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-[400px] w-full bg-gray-200 md:h-[530px]" />
              <div className="space-y-2">
                <div className="h-6 w-3/4 bg-gray-200" />
                <div className="h-4 w-1/2 bg-gray-200" />
                <div className="h-5 w-20 bg-gray-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <div className="h-10 w-10 bg-gray-200" />
          <div className="h-10 w-10 bg-gray-200" />
          <div className="h-10 w-10 bg-gray-200" />
          <div className="h-10 w-10 bg-gray-200" />
          <div className="h-10 w-10 bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
