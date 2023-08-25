import { TopNftsProps } from "../../../types";
import styles from "./NftTableRow.module.scss";

const NftTableRow = ({
  avatar,
  name,
  level,
  games,
  win,
  price,
}: TopNftsProps, ) => {
  return (
    <tr className={styles.row}>
      <td headers="avatar" className={`${styles.row__cellAvatar}`}>
        <img
          className={styles.row__img}
          srcSet={`${avatar.x1} 1x,
                    ${avatar.x2} 2x,
                    ${avatar.x3} 3x`}
          src={avatar.x1}
          alt="Astronaut"
          width="64"
          height="64"
        />
      </td>
      <td headers="name" className={`${styles.row__cell} ${styles.row__cellName}`}>{name}</td>
      <td headers="level" className={`${styles.row__cell} ${styles.row__cellLevel}`}>{level}</td>
      <td headers="games" className={`${styles.row__cell} ${styles.row__cellGames}`}>{games}</td>
      <td headers="win" className={`${styles.row__cell} ${styles.row__cellWin}`}>{win}</td>
      <td headers="price" className={`${styles.row__cell} ${styles.row__cellPrice}`}>{price}</td>
    </tr>
  );
};

export default NftTableRow;
