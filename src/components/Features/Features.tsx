import BlockTitle from "../UI/BlockTitle/BlockTitle";
import FeaturesList from "../UI/FeaturesList/FeaturesList";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={styles.features}>
      <BlockTitle
        text={"Features"}
        number={"02"}
        className={"features"}
        titleTag={"h2"}
      />
      <div className={styles.features__descriptionWrap}>
        <h3 className={`title__h3 ${styles.features__subtitle}`}>
          About StarRunner
        </h3>
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
