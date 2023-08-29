import { AnchorHTMLAttributes } from "react";
import styles from "./MainLink.module.scss";

interface MainLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  title: string;
  globalClassName: string;
  localClassName: string;
  additionalClassName?: string;
}

const MainLink = ({
  link,
  title,
  globalClassName,
  localClassName,
  additionalClassName = "",
  ...props
}: MainLinkProps) => {
  return (
    <a
      href={link}
      className={`${globalClassName} ${styles[localClassName]}`}
      {...props}
    >
      <span className={styles[additionalClassName]}>{title}</span>
    </a>
  );
};

export default MainLink;
