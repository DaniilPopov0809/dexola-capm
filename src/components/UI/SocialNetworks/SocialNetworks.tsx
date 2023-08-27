import styles from "./SocialNetworks.module.scss";
import sprite from "../../../images/sprite.svg";
import SocialNetworkLink from "../SocialNetworkLink/SocialNetworkLink";

const SocialNetwork = () => {
  return (
    <ul className={styles.social}>
      <SocialNetworkLink width={32} height={32} path={`${sprite}#facebook`}/>
      <SocialNetworkLink width={32} height={32} path={`${sprite}#instagram`}/>
      <SocialNetworkLink width={32} height={32} path={`${sprite}#diskord`}/>
      <SocialNetworkLink width={32} height={32} path={`${sprite}#telegram`}/>
    </ul>
  );
};

export default SocialNetwork;
