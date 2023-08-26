import MainLink from "../MainLink/MainLink";
import BlockTitle from "../BlockTitle/BlockTitle";
import styles from "./FeatureCard.module.scss";
import { FeatureCardProps } from "../../../types";

const FeatureCard = ({ title, description, imageData }: FeatureCardProps) => {
  const { mobile, tablet, desktop } = imageData;
  return (
    <li className={styles.featureCard}>
      <div className={styles.featureCard__content}>
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
            alt={`${title.text} image`}
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
          <div className={styles.featureCard__descriptionWrap}>
            <p className={styles.featureCard__description}>{description}</p>
          </div>
          <div className={styles.featureCard__linkWrap}>
            <MainLink
              link={"#"}
              title={"discover now"}
              target={"_blank"}
              globalClassName={"linkButton"}
              localClassName={"featureCard__link"}
              rel={"noopener nofollow noreferrer"}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default FeatureCard;
