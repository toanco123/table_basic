import { createContext, useState } from "react";
import { UserData } from "../component/TableBodyChild";
import { userDatas } from "../Data/Datas";
import { useToggle } from "react-use";
import { orderBy } from "lodash";

export const AppContext = createContext({});

export const AppProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useToggle(false);
  const [users, setUsers] = useState(userDatas);
  const [search, setSearch] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [sortProperty, setSortProperty] = useState<keyof UserData>("id");
  const [isDesc, setIsDesc] = useState(false);

  //Table Sorting
  const handleColumnClick = (name: keyof UserData) => {
    const isCurrent = sortProperty === name;
    setSortProperty(name);
    setIsDesc((prev) => (isCurrent ? !prev : false));
  };
  const order = isDesc ? "desc" : "asc";
  const sorted = orderBy(users, sortProperty, order);

  //Search element in userDatas
  const filtered = users.filter((user) =>
    user.firstname.toLowerCase().includes(search.toLowerCase())
  );

  //Select & select all check box
  const handleUserClick = (id: string) => {
    const userCopy = [...users];
    const index = userCopy.findIndex((users) => users.id === id);
    userCopy[index] = {
      ...userCopy[index],
      active: !userCopy[index].active,
    };
    // userCopy[index].active = !userCopy[index].active;
    if (!userCopy[index].active && selectAll) {
      handleSelectAll();
    }
    setUsers(userCopy);
    // console.log(userCopy[index]);
  };

  const handleSelectAll = () => {
    setSelectAll((prevState) => !prevState);
    setUsers(users.map((user) => ({ ...user, active: !selectAll })));
  };

  //RemoveUser click

  const handleRemoveUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleRemoveUserClick = () => {
    const list = [...users];
    const rows = list.filter((li) => !li.active);
    setUsers(rows);
    console.log(setUsers.length);
  };

  const value = {
    sorted,
    users,
    selectAll,
    filtered,
    search,
    isOpen,
    setIsOpen,
    setSearch,
    setUsers,
    handleSelectAll,
    handleUserClick,
    handleRemoveUserClick,
    handleRemoveUser,
    handleColumnClick,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
