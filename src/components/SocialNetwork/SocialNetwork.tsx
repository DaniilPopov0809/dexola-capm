import styles from "./SocialNetwork.module.scss";
import sprite from "../../image/sprite.svg";

const SocialNetwork = () => {
  return (
    <ul className={styles.social}>
      <li className={styles.social__item}>
        <a className={styles.social__link} href="#" target="_blank" rel="noopener noreferrer">
          <svg width={32} height={32}>
            <use href={`${sprite}#facebook`} />
          </svg>
        </a>
      </li>
      <li className={styles.social__item}>
        <a className={styles.social__link} href="#" target="_blank" rel="noopener noreferrer">
          <svg width={32} height={32}>
            <use href={`${sprite}#instagram`} />
          </svg>
        </a>
      </li>
      <li className={styles.social__item}>
        <a className={styles.social__link} href="#" target="_blank" rel="noopener noreferrer">
          <svg width={32} height={32}>
            <use href={`${sprite}#diskord`} />
          </svg>
        </a>
      </li>
      <li className={styles.social__item}>
        <a className={styles.social__link} href="#" target="_blank" rel="noopener noreferrer">
          <svg width={32} height={32}>
            <use href={`${sprite}#telegram`} />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialNetwork;
