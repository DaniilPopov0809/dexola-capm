import { ButtonHTMLAttributes } from "react";
import styles from "./MainButton.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  globalClassName:string;
  localClassName:string;
}

const MainButton = ({
  title,
  onClick,
  globalClassName,
  localClassName,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${globalClassName} ${styles[localClassName]}`} onClick={onClick} {...props}>
      {title}
    </button>
  );
};

export default MainButton;
