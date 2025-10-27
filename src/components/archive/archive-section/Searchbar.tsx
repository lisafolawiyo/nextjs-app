import { ArrowRight } from '@/components/Icons';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className="mb-8">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="SEARCH ARCHIVE"
          className="h-[50px] w-full border border-[#212529] px-6 py-3 text-sm transition-colors  placeholder:text-base placeholder:text-gray-900 focus:border-gray-900 focus:outline-none md:h-[66px]"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 transition-colors hover:bg-gray-100 md:right-10">
          <button className="flex h-6 w-6 items-center justify-center border border-[#212529] transition-colors hover:bg-gray-50">
            <ArrowRight className="h-4 w-4 text-[#212529]" />
          </button>
        </button>
      </div>
    </div>
  );
};
