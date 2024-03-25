import { getPaginationItems } from '@/lib/pagination';
import PageLink from './page-link';

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
  setOffset: (offset: number) => void;
};

export default function Pagination({
  currentPage,
  lastPage,
  maxLength,
  setCurrentPage,
  setOffset
}: Props) {
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength);


  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * lastPage) % maxLength;
    setOffset(newOffset);
  };

  return (
    <nav className="flex flex-wrap" aria-label="Pagination"  onClick={(e) => handlePageClick(e)}>
      <PageLink
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink
          key={idx}
          active={currentPage === pageNum}
          disabled={isNaN(pageNum)}
          onClick={() => setCurrentPage(pageNum)}
        >
          {!isNaN(pageNum) ? pageNum : '...'}
        </PageLink>
      ))}
      <PageLink
        disabled={currentPage === lastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </PageLink>
    </nav>
  );
}