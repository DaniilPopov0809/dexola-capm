import styles from "./Foter.module.scss";
import SocialNetwork from "../UI/SocialNetworks/SocialNetworks";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__wrap}`}>
        <div className={styles.footer__social}>
        <SocialNetwork/>
        </div>
        <div className={styles.footer__designer}>
          <p>
            Designed by Dexola - {new Date().getFullYear()}
          </p>
          </div>
          <div className={styles.footer__rights}>
          <p>© All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
