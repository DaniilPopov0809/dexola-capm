import RegistrationForm from "../UI/RegistrationForm/RegistrationFormForm";
import Title from "../UI/Title/Title";
import styles from "./JoinUs.module.scss";
import longArrow from "../../images/longArrow.svg";

const JoinUs = () => {
  return (
    <section id="joinUs" className={styles.joinUs}>
      <Title
        text={"Join Us"}
        number={"03"}
        titleTag={"h2"}
        globalClassName={"title__h2"}
        localClassName={"joinUs"}
      />
      <div className={styles.joinUs__wrap}>
        <div className={styles.joinUs__descriptionBlockWrap}>
          <div className={styles.features__subTitleWrap}>
            <Title
              text={"Experience the Power of StarRunner"}
              titleTag={"h3"}
              globalClassName={"title__h3"}
              localClassName={"subTitle"}
            />
          </div>
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
