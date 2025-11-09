export default function ArchiveLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero Skeleton */}
      <div className="h-[60vh] bg-gray-200 md:h-[80vh]" />

      {/* Sample Products Skeleton */}
      <div className="px-4 py-16 md:px-8">
        <div className="mb-10 h-12 w-64 bg-gray-200 md:h-20 md:w-96" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-[530px] w-full bg-gray-200" />
              <div className="space-y-2">
                <div className="h-6 w-3/4 bg-gray-200" />
                <div className="h-4 w-1/2 bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collections Carousel Skeleton */}
      <div className="my-10 px-4 md:px-8 md:py-16">
        <div className="mb-10 h-12 w-64 bg-gray-200 md:h-20 md:w-96" />
        <div className="border border-gray-200 lg:border">
          <div className="grid md:grid-cols-[541px_1fr]">
            <div className="border-r border-gray-200 p-8">
              <div className="mb-8 h-8 w-48 bg-gray-200" />
              <div className="mt-32 flex items-center justify-between">
                <div className="h-16 w-32 bg-gray-200" />
                <div className="flex gap-6">
                  <div className="h-6 w-6 bg-gray-200" />
                  <div className="h-6 w-6 bg-gray-200" />
                </div>
              </div>
            </div>
            <div className="flex gap-4 overflow-hidden p-4">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="h-[530px] w-full flex-shrink-0 bg-gray-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Skeleton */}
      <div className="px-6 py-16 md:px-8">
        <div className="mb-10 h-12 w-96 bg-gray-200 md:h-20" />
        <div className="space-y-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-6 border-t border-gray-200 py-8 xl:grid-cols-[1fr_45%_20%]"
            >
              <div className="flex gap-4">
                <div className="h-10 w-32 bg-gray-200" />
                <div className="h-6 w-48 bg-gray-200" />
              </div>
              <div className="h-20 bg-gray-200" />
              <div className="h-10 w-full bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
