import { useState } from 'react';

export default function usePage(start: number) {
  const [page, setPage] = useState(start);

  return {
    page,
    onPageDown: () => setPage((page) => page - 1),
    onPageUp: () => setPage((page) => page + 1),
  };
}
