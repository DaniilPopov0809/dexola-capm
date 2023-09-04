import MainLink from "../MainLink/MainLink";
import Title from "../Title/Title";
import styles from "./FeatureCard.module.scss";
import { FeatureCardProps } from "../../../types";

const FeatureCard = ({ title, description, imageData }: FeatureCardProps) => {
  const { mobile, tab_desk } = imageData;
  return (
    <li className={styles.featureCard}>
      <div className={styles.featureCard__content}>
        <picture>
          <source
            srcSet={`
            ${tab_desk.x1} 1x,
            ${tab_desk.x2} 2x,
            ${tab_desk.x3} 3x
          `}
            media="(min-width: 420px)"
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
            loading="lazy"
            width="100%"
            height="232"
          />
        </picture>
        <div className={styles.featureCard__wrap}>
          <Title
            text={title.text}
            number={title.number}
            globalClassName={"title__h4"}
            localClassName={"featureCard"}
            titleTag={"h4"}
            additionalClassName={"featureCardText"}
          />
          <div className={styles.featureCard__descriptionWrap}>
            <p className={styles.featureCard__description}>{description}</p>
          </div>
          <MainLink
            link="#"
            title="discover now"
            target="_blank"
            globalClassName="linkButton"
            localClassName="featureCard__link"
            additionalClassName="featureCard__linkTextWrap"
            rel="noopener nofollow noreferrer"
          />
        </div>
      </div>
    </li>
  );
};

export default FeatureCard;
