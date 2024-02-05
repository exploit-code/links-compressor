import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "../../store/hooks";
import styles from "./table.module.scss";
import { BASE_URL } from "../../utils/api";
import copy from "clipboard-copy";
import { statisticsThunk } from "../../store/thunks/statistics";
import { ISortStatisticsProps } from "../../models";

export const Table = () => {
  const dispatch = useDispatch();
  const { statistics, loading, x_total_count } = useSelector((store) => store.statistics);
  const { squeeze } = useSelector((store) => store.squeeze);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortDirection, setSortDirection] = useState<ISortStatisticsProps>({
    short: "asc",
    target: "asc",
    counter: "asc",
  });
  const itemsPerPage = 5;
  const totalPages = Math.ceil(Number(x_total_count) / itemsPerPage);

  const handleClipBoardShort = (short: string) => {
    copy(`${BASE_URL}/s/${short}`);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSort = (field: keyof ISortStatisticsProps) => {
    setSortDirection((prevDirection: ISortStatisticsProps) => ({
      ...prevDirection,
      [field]: prevDirection[field] === "asc" ? "desc" : "asc",
    }));
  };

  useEffect(() => {
    dispatch(statisticsThunk(currentPage, itemsPerPage, sortDirection));
  }, [currentPage, sortDirection, dispatch, squeeze]);

  return (
    <article className={styles.table}>
      <table className={styles.table__wrap}>
        <thead className={styles.table__thead}>
          <tr>
            <th onClick={() => handleSort("short")}>SHORT</th>
            <th onClick={() => handleSort("target")}>TARGET</th>
            <th onClick={() => handleSort("counter")}>COUNTER</th>
          </tr>
        </thead>
        <tbody className={styles.table__tbody}>
          {statistics.map((item) => (
            <tr key={item.uuid}>
              <td title={"copy"} onClick={() => handleClipBoardShort(item.short)}>
                {item.short}
              </td>
              <td>{item.target}</td>
              <td>{item.counter}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.table__pagination}>
        <button
          className={styles.table__pagination_button}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
        >
          <span>Prev</span>
        </button>

        <span className={styles.table__pagination_pages}>
          {currentPage} of {totalPages}
        </span>

        <button
          className={styles.table__pagination_button}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!statistics || loading || statistics.length < itemsPerPage}
        >
          <span>Next</span>
        </button>
      </div>
    </article>
  );
};
