import { AnchorHTMLAttributes } from "react";
import styles from "./MainLink.module.scss";

interface MainLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>  {
  link: string;
  title: string;
  globalClassName: string;
  localClassName: string;
}

const MainLink = ({
  link,
  title,
  globalClassName,
  localClassName,
  ...props
}: MainLinkProps) => {
  return (
    <a
      href={link}
      className={`${globalClassName} ${styles[localClassName]}`}
      {...props}
    >
      {title}
    </a>
  );
};

export default MainLink;
