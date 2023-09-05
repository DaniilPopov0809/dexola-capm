import MainLink from "../UI/MainLink/MainLink";
import logo from "../../images/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__wrap}`}>
        <a className={styles.header__linkLogo} href="/">
          <img src={logo} alt="logo" width={35} height={20} />
        </a>
        <nav className={styles.header__nav}>
          <MainLink
            link="#joinUs"
            title="Join Now"
            globalClassName="linkButton"
            localClassName="header__link"
            additionalClassName="header__linkTextWrap"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
