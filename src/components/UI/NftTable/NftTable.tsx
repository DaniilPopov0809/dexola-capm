import { useEffect, useState } from "react";
import nftMockData from "../../../data/NftMockData";
import NftTableRow from "../NftTableRow/NftTableRow";
import NftTableRowMobile from "../NftTableRowMobile/NftTableRowMobile";
import styles from "./NftTable.module.scss";

const NftTable = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 744);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 744);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <table className={styles.table}>
      {!isMobile && (
        <thead className={`title__h3 ${styles.table__head}`}>
          <tr className={styles.table__headRow}>
            <th
              id="avatar"
              scope="col"
              className={`${styles.table__headCell}`}
            ></th>
            <th id="name" scope="col" className={styles.table__headCell}>
              NFT Name
            </th>
            <th id="level" scope="col" className={styles.table__headCell}>
              Rarity Level
            </th>
            <th id="games" scope="col" className={styles.table__headCell}>
              Total games
            </th>
            <th id="won" scope="col" className={styles.table__headCell}>
              Games Won
            </th>
            <th id="price" scope="col" className={styles.table__headCell}>
              Price (ETH)
            </th>
          </tr>
        </thead>
      )}
      <tbody className={`${styles.table_body}`}>
        {nftMockData.map(
          ({ id, avatar, name, level, games, win, price }, index) => {
            if (!isMobile) {
              return (
                <NftTableRow
                  key={id}
                  id={id}
                  avatar={avatar}
                  name={name}
                  level={level}
                  games={games}
                  win={win}
                  price={price}
                />
              );
            } else {
              return (
                <NftTableRowMobile
                  key={id}
                  id={id}
                  avatar={avatar}
                  name={name}
                  level={level}
                  games={games}
                  win={win}
                  price={price}
                  index={index}
                />
              );
            }
          }
        )}
      </tbody>
    </table>
  );
};

export default NftTable;
