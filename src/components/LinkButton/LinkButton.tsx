import React, { ButtonHTMLAttributes } from "react";
import styles from "./LinkButton.module.scss";

type LinkButtonProps = {
  link?: string;
  title: string;
  onClick?: () => void;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const LinkButton: React.FC<LinkButtonProps> = ({
  link,
  title,
  onClick,
  className,
  ...buttonProps
}) => {
  let compositeClassName: string = '';
  if(className) {
  compositeClassName = `${styles.linkbutton} ${styles[className] || ""}`;
}
  if (link) {
    return (
      <div className={styles.linkbutton__wrap}>
        <a href={link} className={compositeClassName}>
          <span>{title}</span>
        </a>
      </div>
    );
  }

  return (
    <div className={styles.linkbutton__wrap}>
      <button className={compositeClassName} onClick={onClick} {...buttonProps}>
        {title}
      </button>
    </div>
  );
};

export default LinkButton;
