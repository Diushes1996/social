import { useMemo } from "react";
import s from "./Users.module.css";

export const Pagination = ({ totalUsersCount, currentPage, setPageNumber }) => {
  const slicedPages = useMemo(() => {
    const pagesCount = Math.ceil(totalUsersCount / 5);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    const curPF = currentPage - 5 < 0 ? 0 : currentPage - 5;
    const curPL = currentPage + 5;
    return pages.slice(curPF, curPL);
  }, [totalUsersCount, currentPage]);

  return (
    <div>
      {slicedPages.map((p, index) => {
        return (
          <span
            className={currentPage === p && s.selectedPage}
            onClick={() => {
              setPageNumber(p);
            }}
            key={index}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
