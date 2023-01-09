import "../index.css";
import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import { AppContext } from "../Context/AppContext";
import TableBodyChild, { UserData } from "./TableBodyChild";

const TableBody = () => {
  const {
    handleSelectAll,
    selectAll,
    handleColumnClick,
    filtered,
    sorted,
    users,
    setIsOpen,
  }: any = useContext(AppContext);

  // console.log("users", users);
  // const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <div className="overflow-auto p-1.5 w-full inline-block align-middle">
      <div className="border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3 pl-4">
                <div className="flex items-center h-5">
                  <input
                    checked={selectAll}
                    onChange={handleSelectAll}
                    onClick={setIsOpen}
                    type="checkbox"
                    className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox" className="sr-only">
                    All Select
                  </label>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 cursor-pointer py-3 text-xs font-bold text-left text-gray-500 uppercase "
                onClick={() => handleColumnClick("id")}
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 cursor-pointer py-3 text-xs font-bold text-left text-gray-500 uppercase "
                onClick={() => handleColumnClick("firstname")}
              >
                Firstname
              </th>
              <th
                scope="col"
                className="px-6 cursor-pointer py-3 text-xs font-bold text-left text-gray-500 uppercase "
                onClick={() => handleColumnClick("lastname")}
              >
                Lastname
              </th>
              <th
                scope="col"
                className="px-6 cursor-pointer py-3 text-xs font-bold text-left text-gray-500 uppercase "
                onClick={() => handleColumnClick("email")}
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 cursor-pointer py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                Edit
              </th>
              <th
                scope="col"
                className="px-6 cursor-pointer py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filtered
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((userData: UserData) => {
                return <TableBodyChild {...userData} key={userData.id} />;
              })}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        className="flex absolute bottom-[80px] right-[80px]"
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

export default TableBody;
