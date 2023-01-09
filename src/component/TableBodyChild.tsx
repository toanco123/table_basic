import { FC, useContext } from "react";
import { AppContext } from "../Context/AppContext";

export interface UserData {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  active: boolean;
}

const TableBodyChild: FC<UserData> = (props) => {
  const { handleUserClick, handleRemoveUser }: any = useContext(AppContext);
  // console.log("handleUserClick", props.id);

  return (
    <tr className="hover:bg-gray-100">
      <td className="py-3 pl-4">
        <div className="flex items-center h-5">
          <input
            checked={props.active}
            onChange={() => handleUserClick(props.id)}
            type="checkbox"
            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500 cursor-pointer"
          />
          <label htmlFor="checkbox" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        {props.id}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {props.firstname}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {props.lastname}
      </td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
        {props.email}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <a className="text-green-500 hover:text-green-700" href="#1">
          Edit
        </a>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <a
          className="text-red-500 hover:text-red-700"
          href="#1"
          onClick={() => {
            handleRemoveUser(props.id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default TableBodyChild;
