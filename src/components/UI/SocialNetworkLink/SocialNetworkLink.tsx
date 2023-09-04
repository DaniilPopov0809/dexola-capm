import styles from "./SocialNetworkLink.module.scss";

interface SocialNetworkLinkProps {
  width: number;
  height: number;
  path: string;
  label: string;
}

const SocialNetworkLink = ({
  width,
  height,
  path,
  label,
}: SocialNetworkLinkProps) => {
  return (
    <li className={styles.social__item}>
      <a
        className={styles.social__link}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <svg width={width} height={height}>
          <use href={path} />
        </svg>
      </a>
    </li>
  );
};

export default SocialNetworkLink;
