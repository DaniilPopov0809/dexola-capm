import RegistrationForm from "../UI/RegistrationForm/RegistrationFormForm";
import BlockTitle from "../UI/BlockTitle/BlockTitle";
import styles from "./JoinUs.module.scss";
import longArrow from "../../images/longArrow.svg";

const JoinUs = () => {
  return (
    <section className={styles.joinUs}>
      <BlockTitle
        text={"Join Us"}
        number={"03"}
        className={"joinUs"}
        titleTag={"h2"}
      />
      <div className={styles.joinUs__wrap}>
        <div className={styles.joinUs__descriptionWrap}>
          <h3 className={`title__h3 ${styles.joinUs__subtitle}`}>
            Experience the Power of StarRunner
          </h3>
          <p className={styles.joinUs__description}>
            Join Our Community and Embark on a Journey of Opportunities.
            Discover the full range of our services that cater to your needs.
            We've got you covered with top-notch solutions.
          </p>
          <img
            src={longArrow}
            alt="Arrow"
            width={44}
            height={44}
            className={styles.joinUs__image}
          />
        </div>
        <RegistrationForm />
      </div>
    </section>
  );
};

export default JoinUs;
