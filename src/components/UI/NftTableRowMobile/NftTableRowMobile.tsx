import styles from "./NftTableRowMobile.module.scss"
import { TopNftsProps } from "../../../types";

const NftTableRowMobile = ({
  avatar,
  name,
  level,
  games,
  win,
  price,
  index=0,
}: TopNftsProps ) => {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>
        <div className={`title__h3 ${styles.cell__wrapHead}`}>
        <span>{`${index+1}. ${name}`}</span><span>{`${price} ETH`}</span>
        </div>
        <div className={styles.cell__wrapBody}>
        <img
          className={styles.cell__img}
          srcSet={`${avatar.x1} 1x,
                    ${avatar.x2} 2x,
                    ${avatar.x3} 3x`}
          src={avatar.x1}
          alt="Astronaut"
          width="64"
          height="64"
        />
        <ul className={styles.cell__list}>
          <li className={styles.cell__listItem}><span>Rarity:</span><span>{level}</span></li>
          <li className={styles.cell__listItem}><span>Total games:</span><span>{games}</span></li>
          <li className={styles.cell__listItem}><span>Games Won:</span><span>{win}</span></li>
        </ul>
        </div>
      </td>
    </tr>
  );
};

export default NftTableRowMobile;
