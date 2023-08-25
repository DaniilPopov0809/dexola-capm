import LinkButton from "../LinkButton/LinkButton";
import BlockTitle from "../BlockTitle/BlockTitle";
import styles from "./FeatureCard.module.scss";
import { FeatureCardProps } from "../../../types";

const FeatureCard = ({ title, description, imageData }: FeatureCardProps) => {
  const { mobile, tablet, desktop } = imageData;
  return (
    <li className={styles.featureCard}>
      <div className={styles.featureCard__content}>
        {/* <img
            className={styles.featureCard__img}
            srcSet={`${imageData.x1} 1x,
                    ${imageData.x2} 2x,
                    ${imageData.x3} 3x`}
            src={imageData.x1}
            alt="Astronaut"
            // width="370"
            
        /> */}
        <picture>
          <source
            srcSet={`
                    ${desktop.x1} 1x,
                    ${desktop.x2} 2x,
                    ${desktop.x3} 3x
                  `}
            media="(min-width: 1440px)"
          />

          <source
            srcSet={`
            ${tablet.x1} 1x,
            ${tablet.x2} 2x,
            ${tablet.x3} 3x
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
            alt="Astronaut"
            className={styles.featureCard__img}
          />
        </picture>
        <div className={styles.featureCard__wrap}>
          <BlockTitle
            text={title.text}
            number={title.number}
            className={"featureCard"}
            titleTag={"h4"}
            additionalClassName={"featureCardText"}
          />
          <p className={styles.featureCard__description}>{description}</p>
          <div className={styles.featureCard__linkWrap}>
            <LinkButton
              link={"#"}
              title={"discover now"}
              className={"featureCard__link"}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default FeatureCard;
