import { useSelector } from "../../store/hooks";
import styles from "./table.module.scss";
import { BASE_URL } from "../../utils/api";
import copy from "clipboard-copy";

export const Table = () => {
  const { statistics } = useSelector((store) => store.statistics);

  const handleShortClick = (short: string) => {
    copy(`${BASE_URL}/s/${short}`);
  };

  return (
    <article className={styles.table}>
      <table className={styles.table__wrap}>
        <thead className={styles.table__thead}>
          <tr>
            <th>SHORT</th>
            <th>TARGET</th>
            <th>COUNTER</th>
          </tr>
        </thead>
        <tbody className={styles.table__tbody}>
          <>
            {statistics?.map((item) => (
              <tr key={item.uuid}>
                <td title={"copy"} onClick={() => handleShortClick(item.short)}>
                  {item.short}
                </td>
                <td>{item.target}</td>
                <td>{item.counter}</td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </article>
  );
};
