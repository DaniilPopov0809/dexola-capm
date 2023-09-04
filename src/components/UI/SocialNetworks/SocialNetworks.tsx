import styles from "./SocialNetworks.module.scss";
import dataIcon from "../../../data/socialNetworkIconMockData";
import SocialNetworkLink from "../SocialNetworkLink/SocialNetworkLink";

const SocialNetwork = () => {
  return (
    <ul className={styles.social}>
      {dataIcon.map((item) => (
        <SocialNetworkLink
          width={32}
          height={32}
          path={item.path}
          label={item.label}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default SocialNetwork;
