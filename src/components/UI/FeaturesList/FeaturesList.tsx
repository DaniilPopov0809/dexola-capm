import { featuresMockData } from "../../../data/mockData";
import FeatureCard from "../FeatureCard/FeatureCard";
import styles from "./FeaturesList.module.scss";

const FeaturesList = () => {
  return (
    <ul className={styles.featuresList}>
      {featuresMockData.map(({ id, title, description, imageData }) => {
        return (
          <FeatureCard
            key={id}
            id={id}
            title={title}
            description={description}
            imageData={imageData}
          />
        );
      })}
    </ul>
  );
};

export default FeaturesList;
