import { TopNftsProps } from "../../../types";
import styles from "./NftTableRow.module.scss";

const NftTableRow = ({
  avatar,
  name,
  level,
  games,
  win,
  price,
  index,
}: TopNftsProps) => {
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
      <td
        headers="name"
        className={`${styles.row__cell} ${styles.row__cellName}`}
      >
        <span className={styles.row__number}>{`${index+1}.`}</span><span>{name}</span>
      </td>
      <td
        headers="level"
        className={`${styles.row__cell} ${styles.row__cellLevel}`}
      >
        <span className={styles.row__cellLabel}>Rarity:</span>{" "}
        <span>{level}</span>
      </td>
      <td
        headers="games"
        className={`${styles.row__cell} ${styles.row__cellGames}`}
      >
        <span className={styles.row__cellLabel}>Total games:</span>
        <span>{games}</span>
      </td>
      <td
        headers="win"
        className={`${styles.row__cell} ${styles.row__cellWin}`}
      >
        <span className={styles.row__cellLabel}>Games Won:</span>
        <span>{win}</span>
      </td>
      <td
        headers="price"
        className={`${styles.row__cell} ${styles.row__cellPrice}`}
      >
        {price}
      </td>
    </tr>
  );
};

export default NftTableRow;
