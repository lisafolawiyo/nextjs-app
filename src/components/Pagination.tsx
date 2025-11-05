'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex justify-center">
      <div className="flex items-center gap-3">
        <button
          onClick={() => createPageUrl(currentPage - 1)}
          disabled={currentPage <= 1}
          className="border border-[#212529] bg-white px-6 py-2 text-sm text-[#212529] transition-all hover:bg-[#212529] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#212529] md:text-base"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => createPageUrl(page)}
            className={`border px-4 py-2 text-sm transition-all md:text-base ${
              page === currentPage
                ? 'border-[#212529] bg-[#212529] text-white'
                : 'border-[#212529] bg-white text-[#212529] hover:bg-[#212529] hover:text-white'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => createPageUrl(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="border border-[#212529] bg-white px-6 py-2 text-sm text-[#212529] transition-all hover:bg-[#212529] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#212529] md:text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
}
