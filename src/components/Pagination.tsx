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
    <div className="pagination-container">
      <div className="shop-pagination">
        <button
          onClick={() => createPageUrl(currentPage - 1)}
          disabled={currentPage <= 1}
          className="prev-btn"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => createPageUrl(page)}
            className={`pagination-button ${page === currentPage && 'current'}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => createPageUrl(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="next-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}
