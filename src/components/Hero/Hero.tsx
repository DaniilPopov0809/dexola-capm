import styles from "./Hero.module.scss";
import Title from "../UI/Title/Title";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__wrap}>
        <img
          srcSet="../../images/origin/10_mob@1x.jpg    1x"
          src="../../images/origin/10_mob@1x.jpg    1x"
          alt="Hero image"
          height="311"
        />
        <img
          srcSet="../../images/converted/5_mob@x1.webp    1x"
          src="../../images/converted/5_mob@x1.webp    1x"
          alt="Hero image"
          height="311"
        />
      </div>
      <div className={styles.hero__titleContainer}>
        <Title
          children="dexola camp"
          titleTag={"h1"}
          globalClassName={"title__h1"}
          localClassName={"hero"}
        />
      </div>
      <p className={styles.hero__description}>
        Prepare to be transported beyond the boundaries of traditional gaming
        with the StarRunner Ecosystem – the beating heart that drives the
        adrenaline-charged galactic P2E odyssey of 'StarRunner.'
      </p>
    </section>
  );
};

export default Hero;
