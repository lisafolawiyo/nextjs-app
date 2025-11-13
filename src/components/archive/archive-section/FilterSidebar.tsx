export const FilterSidebar = () => {
  return (
    <div>
      <h2 className="mb-6 text-xl font-light  md:text-[35px]">
        FILTER BY CATEGORY
      </h2>
      <div className="space-y-3">
        <button className="block text-left text-xl transition-colors hover:text-gray-600">
          Collection Year
        </button>
        <button className="block text-left text-xl transition-colors hover:text-gray-600">
          Gender
        </button>
        <button className="block text-left text-xl transition-colors hover:text-gray-600">
          Accessories
        </button>
      </div>
    </div>
  );
};
