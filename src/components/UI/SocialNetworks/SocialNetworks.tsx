import styles from "./SocialNetworks.module.scss";
import sprite from "../../../images/socialNetworkSprite.svg";
import SocialNetworkLink from "../SocialNetworkLink/SocialNetworkLink";

const dataIcon = [
  `${sprite}#facebook`,
  `${sprite}#instagram`,
  `${sprite}#diskord`,
  `${sprite}#telegram`,
];

const SocialNetwork = () => {
  return (
    <ul className={styles.social}>
      {dataIcon.map((item) => (
        <SocialNetworkLink width={32} height={32} path={item} />
      ))}
    </ul>
  );
};

export default SocialNetwork;
