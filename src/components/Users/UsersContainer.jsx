import React from "react";
import { Users } from "./Users";
import Preloader from "./../common/Preloader/Preloader";
import { useFetchData } from "./hooks/useFetchData";
import { Pagination } from "./Pagination";

export const UsersContainer = () => {
  const { users, isLoading, total, setPageNumber, pageNumber } = useFetchData();

  return (
    <>
      <Pagination
        totalUsersCount={total}
        currentPage={pageNumber}
        setPageNumber={setPageNumber}
      />
      {isLoading ? <Preloader /> : <Users users={users} />}
    </>
  );
};