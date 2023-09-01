import styles from "./SocialNetworks.module.scss";
import sprite from "../../../images/socialNetworkSprite.svg";
import SocialNetworkLink from "../SocialNetworkLink/SocialNetworkLink";

type DataIcon = {
  id: string;
  path: string;
  label: string;
};

const dataIcon: DataIcon[] = [
  { id: "1", path: `${sprite}#facebook`, label:"Link to facebook"},
  { id: "2", path: `${sprite}#instagram`, label:"Link to instagram" },
  { id: "3", path: `${sprite}#diskord`, label:"Link to diskord" },
  { id: "4", path: `${sprite}#telegram`, label:"Link to telegram" },
];

const SocialNetwork = () => {
  return (
    <ul className={styles.social}>
      {dataIcon.map((item) => (
        <SocialNetworkLink width={32} height={32} path={item.path} label={item.label} key={item.id} />
      ))}
    </ul>
  );
};

export default SocialNetwork;
