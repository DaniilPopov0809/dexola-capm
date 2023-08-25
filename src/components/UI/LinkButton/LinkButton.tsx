import { ButtonHTMLAttributes } from "react";
import styles from "./LinkButton.module.scss";

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  title: string;
  onClick?: () => void;
  className?: string;
}

const LinkButton = ({
  link,
  title,
  onClick,
  className,
  ...buttonProps
}: LinkButtonProps) => {

  let compositeClassName: string = "";
  if (className) {
    compositeClassName = `${styles.linkButton} ${styles[className] || ""}`;
  }
  if (link) {
    return (
      <a
        href={link}
        className={compositeClassName}
        target="_blank"
        rel="noopener nofollow noreferrer"
      >
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
