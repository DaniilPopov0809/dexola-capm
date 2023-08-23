import LinkButton from "../LinkButton/LinkButton";
import BlockTitle from "../BlockTitle/BlockTitle";
import styles from "./FeatureCard.module.scss";
import { FeatureCardProps } from "../../../types"; 

const FeatureCard = ({ title, description, imageData }: FeatureCardProps) => {
  return (
    <li className={styles.featureCard}>
        <img
            className={styles.featureCard__img}
            srcSet={`${imageData.x1} 1x,
                    ${imageData.x2} 2x,
                    ${imageData.x3} 3x`}
            src={imageData.x1}
            alt="Astronaut"
            // width="370"
            
        />
      <div className={styles.featureCard__wrap}>
        <BlockTitle
          text={title.text}
          number={title.number}
          className={"featureCard"}
          titleTag={"h4"}
          additionalClassName={"featureCardText"}
        />
        <p className={styles.featureCard__description}>{description}</p>
        <LinkButton
          link={"#"}
          title={"discover now"}
          className={"featureCard__link"}
        />
      </div>
    </li>
  );
};

export default FeatureCard;
