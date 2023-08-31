import Title from "../UI/Title/Title";
import FeaturesList from "../UI/FeaturesList/FeaturesList";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={`container ${styles.features}`}>
      <Title
        text={"Features"}
        number={"02"}
        titleTag={"h2"}
        globalClassName={"title__h2"}
        localClassName={"features"}
      />
      <div className={styles.features__descriptionWrap}>
        <div className={styles.features__subTitleWrap}>
          <Title
            text={"About StarRunner"}
            titleTag={"h3"}
            globalClassName={"title__h3"}
            localClassName={"subTitle"}
          />
        </div>
        {/* <h3 className={`title__h3 ${styles.features__subtitle}`}>
          About StarRunner
        </h3> */}
        <p className={styles.features__description}>
          The StarRunner Blockchain Ecosystem isn't a mere playground; it's a
          living, evolving entity that adapts to the desires and creativity of
          its players.
        </p>
      </div>
      <FeaturesList />
    </section>
  );
};

export default Features;
