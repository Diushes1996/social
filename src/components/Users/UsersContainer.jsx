import React from "react";
import { Users } from "./Users";
import Preloader from "./../common/Preloader/Preloader";
import { useFetchData } from "./hooks/useFetchData";
import { Pagination } from "./Pagination";
import s from "./Users.module.css";

export const UsersContainer = () => {
  const { users, isLoading, total, setPageNumber, pageNumber } = useFetchData();

  return (
    <div className={s.users_container}>
      <Pagination
        totalUsersCount={total}
        currentPage={pageNumber}
        setPageNumber={setPageNumber}
      />
      {isLoading ? <Preloader /> : <Users users={users} />}
    </div>
  );
};