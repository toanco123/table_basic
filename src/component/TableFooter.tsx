import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import { AppContext } from "../Context/AppContext";

const TableFooter = () => {
  const { users }: any = useContext(AppContext);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col lg:flex-row items-center space-x-2 text-xs">
        <button className="py-2 px-4 bg-white text-gray-600 font-medium rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
          10 items
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <p className="text-gray-500 mt-4 lg:mt-0">
          Showing 11 to 20 of 95 entires
        </p>
      </div>

      {/* <nav
        aria-label="Pagination"
        className="flex justify-center items-center text-gray-600 mt-8 lg:mt-0"
      >
        <a href="#1" className="p-2 mr-4 rounded hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>
        <a href="#1" className="px-4 py-2 rounded hover:bg-gray-100">
          {" "}
          1{" "}
        </a>
        <a
          href="#1"
          className="px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100"
        >
          {" "}
          2{" "}
        </a>
        <a href="#1" className="px-4 py-2 rounded hover:bg-gray-100">
          {" "}
          3{" "}
        </a>
        <a href="#1" className="px-4 py-2 rounded hover:bg-gray-100">
          {" "}
          ...{" "}
        </a>
        <a href="#1" className="px-4 py-2 rounded hover:bg-gray-100">
          {" "}
          9{" "}
        </a>
        <a href="#1" className="p-2 ml-4 rounded hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </nav> */}
      <ReactPaginate
        className="flex"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default TableFooter;
