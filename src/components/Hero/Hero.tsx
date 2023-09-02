import styles from "./Hero.module.scss";
import heroMockData from "../../data/heroMockData";
import Title from "../UI/Title/Title";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero__wrap}`}>
        <ul className={styles.hero__list}>
          <li className={styles.hero__item}>
            {heroMockData[0].map(({ mobile, tab_desk }) => (
              // <img
              //   key={item.x1}
              //   srcSet={`${item.x1} 1x,
              // ${item.x2} 2x,
              // ${item.x3} 3x`}
              //   src={item.x1}
              //   alt="Hero image"
              //   className={styles.hero_imageLeft}
              // />
              <div className={styles.hero_imageContainerLeft}>
                <picture key={mobile.x1}>
                  <source
                    srcSet={`
            ${tab_desk.x1} 1x,
            ${tab_desk.x2} 2x,
            ${tab_desk.x3} 3x
          `}
                    media="(min-width: 744px)"
                  />

                  <source
                    srcSet={`
            ${mobile.x1} 1x,
            ${mobile.x2} 2x,
            ${mobile.x3} 3x
          `}
                    media="(min-width: 375px)"
                  />

                  <img
                    src={`${mobile.x1}`}
                    alt="Hero image"
                    aria-hidden="true"
                    loading="lazy"
                    className={styles.hero_image}
                    width={163}
                    height={311}
                  />
                </picture>
              </div>
            ))}
          </li>
          <li className={styles.hero__item}>
            {heroMockData[1].map(({ mobile, tab_desk }) => (
              // <img
              //   key={item.x1}
              //   srcSet={`${item.x1} 1x,
              // ${item.x2} 2x,
              // ${item.x3} 3x`}
              //   src={item.x1}
              //   alt="Hero image"
              //   className={styles.hero_imageRight}
              // />
              <div className={styles.hero_imageContainerRight}>
              <picture key={mobile.x1}>
                <source
                  srcSet={`
              ${tab_desk.x1} 1x,
              ${tab_desk.x2} 2x,
              ${tab_desk.x3} 3x
            `}
                  media="(min-width: 744px)"
                />

                <source
                  srcSet={`
              ${mobile.x1} 1x,
              ${mobile.x2} 2x,
              ${mobile.x3} 3x
            `}
                  media="(min-width: 375px)"
                />

                <img
                  src={`${mobile.x1}`}
                  alt="Hero image"
                  aria-hidden="true"
                  loading="lazy"
                  className={styles.hero_image}
                  width={163}
                  height={311}
                />
              </picture>
              </div>
            ))}
          </li>
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
