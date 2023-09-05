import styles from "./Hero.module.scss";
import heroMockData from "../../data/heroMockData";
import Title from "../UI/Title/Title";
import HeroListItem from "../UI/HeroListItem/HeroListItem";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero__wrap}`}>
        <ul className={styles.hero__list}>
          <HeroListItem
            images={heroMockData[0]}
            className={"hero_imageContainerLeft"}
          />
          <HeroListItem
            images={heroMockData[1]}
            className={"hero_imageContainerRight"}
          />
        </ul>
        <div className={styles.hero__titleContainer}>
          <Title
            text="dexola camp"
            titleTag={"h1"}
            globalClassName={"title__h1"}
            localClassName={"hero"}
          />
        </div>
        <div className={styles.hero__descriptionContainer}>
          <p className={styles.hero__description}>
            Prepare to be transported beyond the boundaries of traditional
            gaming with the StarRunner Ecosystem – the beating heart that drives
            the adrenaline-charged galactic P2E odyssey of 'StarRunner.'
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
