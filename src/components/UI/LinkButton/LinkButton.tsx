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
  let compositeClassName: string = "";
  if (className) {
    compositeClassName = `${styles.linkButton} ${styles[className] || ""}`;
  }
  if (link) {
    return (
        <a href={link} className={compositeClassName} target="_blank" rel="noopener nofollow noreferrer">
          {title}
        </a>
    );
  }

  return (
      <button className={compositeClassName} onClick={onClick} {...buttonProps}>
        {title}
    </button>
  );
};

export default LinkButton;
