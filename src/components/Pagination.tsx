'use client';

import { useTransition } from 'react';

import { useRouter } from 'next/navigation';
import { parseAsString, useQueryState } from 'nuqs';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();

  const [, startTransition] = useTransition();
  const [pageState, setPage] = useQueryState(
    'page',
    parseAsString.withDefault(currentPage.toString() || ''),
  );

  const handleChangePage = (value: number) => {
    startTransition(async () => {
      await setPage(value.toString());
      router.refresh();
    });
  };
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex justify-center">
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleChangePage(Number(pageState) - 1)}
          disabled={Number(pageState) <= 1}
          className="border border-[#212529] bg-white px-6 py-2 text-sm text-[#212529] transition-all hover:bg-[#212529] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#212529] md:text-base"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handleChangePage(page)}
            className={`border px-4 py-2 text-sm transition-all md:text-base ${
              page === Number(pageState)
                ? 'border-[#212529] bg-[#212529] text-white'
                : 'border-[#212529] bg-white text-[#212529] hover:bg-[#212529] hover:text-white'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handleChangePage(Number(pageState) + 1)}
          disabled={Number(pageState) >= totalPages}
          className="border border-[#212529] bg-white px-6 py-2 text-sm text-[#212529] transition-all hover:bg-[#212529] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#212529] md:text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
}
