import { ButtonHTMLAttributes } from "react";
import styles from "./MainButton.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  globalClassName: string;
  localClassName: string;
  additionalClassName?: string;
}

const MainButton = ({
  title,
  onClick,
  globalClassName,
  localClassName,
  additionalClassName = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${globalClassName} ${styles[localClassName]}`}
      onClick={onClick}
      {...props}
    >
      <span className={styles[additionalClassName]}>{title}</span>
    </button>
  );
};

export default MainButton;
