import { useState } from "react";
import styles from "./SkipButton.module.scss";
import { toast } from "react-toastify";

const SkipButton = () => {
  const [disable, setDisable] = useState(false);

  let count: number = 0;

  const handleClick = () => {
    count++;
    switch (count) {
      case 1:
        toast.info(
          "Good job👏, click the button 4 more times and get a gift🎁!"
        );
        break;
      case 2:
        toast.info("Click 3 more times 👇");
        break;
      case 3:
        toast.info("Continue doing that 😉");
        break;
      case 4:
        toast.info("Don't stop now!");
        break;
      case 5:
        toast.info("It's a joke, sorry 😁");
        setDisable(true);
        break;
    }
  };
  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
      disabled={disable}
    >
      <div className={`${styles.button__arrow} ${styles.arrowOne}`}></div>
      <div className={`${styles.button__arrow} ${styles.arrowTwo}`}></div>
      <div className={`${styles.button__arrow} ${styles.arrowThree}`}></div>
    </button>
  );
};

export default SkipButton;
