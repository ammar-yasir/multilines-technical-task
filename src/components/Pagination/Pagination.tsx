import ReactPaginate from "react-paginate";

type Props = {
  pageCount: number;
  selectedPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

const Pagination = ({ pageCount, onPageChange, selectedPage }: Props) => (
  <ReactPaginate
    breakLabel="…"
    nextLabel=">"
    previousLabel="<"
    forcePage={selectedPage-1}
    onPageChange={onPageChange}
    pageRangeDisplayed={3}
    marginPagesDisplayed={2}
    pageCount={pageCount}
    containerClassName="flex items-center justify-center gap-2 text-sm mt-6"
    pageClassName=""
    pageLinkClassName="px-3 py-1 border border-gray-100 rounded hover:bg-gray-300 transition cursor-pointer"
    previousClassName=""
    previousLinkClassName="px-3 py-1 border border-gray-100 rounded hover:bg-gray-300 transition cursor-pointer"
    nextClassName=""
    nextLinkClassName="px-3 py-1 border border-gray-100 rounded hover:bg-gray-300 transition cursor-pointer"
    breakClassName="text-secondary"
    activeClassName="bg-primary text-white border-primary py-2 rounded"
    disabledClassName="opacity-40 pointer-events-none"
  />
);

export default Pagination;