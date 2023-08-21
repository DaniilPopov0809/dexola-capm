import LinkButton from "../LinkButton/LinkButton";
import logo from "../../image/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__wrap}`}>
        <a className={styles.header__linkLogo} href="/">
          <img src={logo} alt="logo" width={35} height={20}/>
        </a>
        <LinkButton link="#" title="Join Now" className="header__link" />
      </div>
    </header>
  );
};

export default Header;
