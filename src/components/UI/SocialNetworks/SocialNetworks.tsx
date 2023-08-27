import styles from "./SocialNetworks.module.scss";
import sprite from "../../../images/socialNetworkSprite.svg";
import SocialNetworkLink from "../SocialNetworkLink/SocialNetworkLink";

type DataIcon = {
  id: string;
  path: string;
};

const dataIcon: DataIcon[] = [
  { id: "1", path: `${sprite}#facebook` },
  { id: "2", path: `${sprite}#instagram` },
  { id: "3", path: `${sprite}#diskord` },
  { id: "4", path: `${sprite}#telegram` },
];

const SocialNetwork = () => {
  return (
    <ul className={styles.social}>
      {dataIcon.map((item) => (
        <SocialNetworkLink width={32} height={32} path={item.path} key={item.id} />
      ))}
    </ul>
  );
};

export default SocialNetwork;
