import { ButtonHTMLAttributes } from "react";
import styles from "./ShowPasswordButton.module.scss";

interface ShowPasswordButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowPasswordButton = ({ isOpen, setIsOpen, ...props }: ShowPasswordButtonProps) => {
  return (
    <button
      className={`mainFontSize ${styles.form__toggle} ${
        isOpen ? styles.open : ""
      }`}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    ></button>
  );
};

export default ShowPasswordButton;
