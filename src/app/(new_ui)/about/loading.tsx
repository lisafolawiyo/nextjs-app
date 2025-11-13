export default function AboutLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="mt-16 flex items-center justify-center pb-4 md:mt-32 lg:bg-gray-200">
        <div className="w-full pt-2 md:px-8">
          <div className="grid grid-cols-1 gap-0 pt-2 lg:grid-cols-[25%_1fr]">
            {/* Vertical Title Skeleton */}
            <div className="flex py-10 md:items-center md:py-16 lg:justify-center lg:bg-gray-200">
              <div className="h-16 w-64 bg-gray-300 max-lg:mx-6 lg:h-96 lg:w-24" />
            </div>

            {/* Content Grid Skeleton */}
            <div className="grid grid-cols-1 gap-3 max-md:px-4 lg:grid-cols-2">
              {/* Left Card */}
              <div className="border-4 border-gray-200 bg-gray-100 px-4 py-12 max-lg:mt-10 sm:px-6 sm:py-16 lg:h-[900px]">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="mx-auto h-12 w-48 bg-gray-300 md:h-16 md:w-64" />
                    <div className="mx-auto h-12 w-56 bg-gray-300 md:h-16 md:w-72" />
                  </div>
                  <div className="space-y-3 px-4">
                    <div className="h-4 w-full bg-gray-300" />
                    <div className="h-4 w-full bg-gray-300" />
                    <div className="h-4 w-3/4 bg-gray-300" />
                  </div>
                  <div className="mx-auto h-10 w-48 bg-gray-300" />
                </div>
              </div>

              {/* Right Image */}
              <div className="h-[400px] bg-gray-200 lg:h-[900px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Mission/Vision Section Skeleton */}
      <div className="px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="h-8 w-32 bg-gray-200" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200" />
              <div className="h-4 w-full bg-gray-200" />
              <div className="h-4 w-2/3 bg-gray-200" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-8 w-32 bg-gray-200" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200" />
              <div className="h-4 w-full bg-gray-200" />
              <div className="h-4 w-2/3 bg-gray-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid Skeleton */}
      <div className="px-4 py-16 md:px-8">
        <div className="mb-10 h-12 w-64 bg-gray-200" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
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
    </div>
  );
}
