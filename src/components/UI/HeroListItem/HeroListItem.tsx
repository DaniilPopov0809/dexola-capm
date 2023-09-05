import styles from "./HeroListItem.module.scss";
import { HeroData } from "../../../types";

interface HeroListItemProps {
  images: HeroData[];
  className: string;
}

const HeroListItem = ({ images, className }: HeroListItemProps) => {
  return (
    <li className={styles.hero__item}>
      {images.map(({ mobile, tab_desk }) => (
        <div key={mobile.x1} className={styles[className]}>
          <picture>
            <source
              srcSet={`
        ${tab_desk.x1} 1x,
        ${tab_desk.x2} 2x,
        ${tab_desk.x3} 3x
      `}
              media="(min-width: 480px)"
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
              className={styles.hero_image}
              width={163}
              height={311}
            />
          </picture>
        </div>
      ))}
    </li>
  );
};

export default HeroListItem;
