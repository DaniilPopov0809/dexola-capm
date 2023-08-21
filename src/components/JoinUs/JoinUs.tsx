import RegistrationForm from "../RegistrationForm/RegistrationFormForm";
import styles from "./JoinUs.module.scss";

const JoinUs = () => {
  return (
    <section className={styles.joinUs}>
    <h2 className={`title__h2 ${styles.joinUs__title}`}>
      <span className={styles.joinUs__titleText}>Join Us</span>
      <span className={styles.joinUs__titleNumber}>03</span>
    </h2>
    <div className={styles.joinUs__wrap}>
    <div className={styles.joinUs__descriptionWrap}>
    <h3 className={`title__h3 ${styles.joinUs__subtitle}`}>
      Experience the Power of StarRunner
    </h3>
    <p className={styles.joinUs__description}>
      Join Our Community and Embark on a Journey of Opportunities. Discover the
      full range of our services that cater to your needs. We've got you covered
      with top-notch solutions.
    </p>
    </div>
    <RegistrationForm />
    </div>
  </section>
  );
};

export default JoinUs;
