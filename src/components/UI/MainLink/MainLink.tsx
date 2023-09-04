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
  link,                        //link to recourse
  title,                      //text in link
  globalClassName,            //the global class is styles/common
  localClassName,             //class is MainLink.module.scss
  additionalClassName = "",   //class is MainLink.module.scss
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
