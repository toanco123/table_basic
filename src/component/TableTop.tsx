import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const TableTop = () => {
  const { search, setSearch, isOpen, users, handleRemoveUserClick }: any =
    useContext(AppContext);
  // console.log(search);

  return (
    <>
      <div className="flex justify-between py-3 pl-2">
        <div className="relative max-w-xs">
          <label htmlFor="hs-table-search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            name="hs-table-search"
            id="hs-table-search"
            className="bg-[#F9FAFB] block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="h-3.5 w-3.5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
              <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </div>
                <div
                  onClick={handleRemoveUserClick}
                  className="hidden sm:block"
                >
                  Delete
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* {isOpen && (
        <div className="flex justify-between py-3 pl-2 mt-[-60px] bg-white z-10">
          <div className="relative max-w-xs">{users.length} Selected</div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                  <div>
                    <svg className="w-3 h-3" data-testid="DeleteIcon">
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                  </div>
                  <div onClick={handleClick} className="hidden sm:block">
                    Delete
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default TableTop;
