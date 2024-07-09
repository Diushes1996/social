import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = () => {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [total, setTotal] = useState(1);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=5&page=${pageNumber}`
      )
      .then((response) => response.data)
      .then((res) => {
        setIsLoading(false);
        setUsers(res.items);
        setTotal(res.totalCount);
      })
      .catch(() => setIsLoading(false));
  }, [pageNumber]);

  return { users, isLoading, total, setPageNumber, pageNumber };
};
