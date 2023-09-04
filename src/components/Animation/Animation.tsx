import SkipButton from "../UI/SkipButton/SkipButton";
import { useInView } from "react-intersection-observer";
import styles from "./Animation.module.scss";

const Animation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className={styles.animation}>
      {inView && (
        <div className={`container ${styles.animation__wrap}`}>
          <div className={styles.animantion__wrapTitle}>
            <p className={styles.animantion__subTitle}>
              Explore Cyberpunk Space Adventures in
            </p>
            <p className={styles.animation__title}>StarRunner ecosystem</p>
          </div>
          <div className={styles.animation__backgroundGradient}></div>
          <div
            className={`${styles.animation__circle} ${styles.animation__circleOne}`}
          ></div>
          <div
            className={`${styles.animation__circle} ${styles.animation__circleTwo}`}
          ></div>
          <div
            className={`${styles.animation__circle} ${styles.animation__circleThree}`}
          ></div>
          <div
            className={`${styles.animation__circle} ${styles.animation__circleFour}`}
          ></div>
          <div
            className={`${styles.animation__circle} ${styles.animation__circleFive}`}
          ></div>
          <div
            className={`${styles.animation__circle} ${styles.animation__circleSix}`}
          ></div>
          <SkipButton />
        </div>
      )}
    </section>
  );
};

export default Animation;
