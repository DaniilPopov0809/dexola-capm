import styles from "./TitleBlock.module.scss";

type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  text: string;
  number?: string;
  titleTag: TitleTag;
  globalClassName: string;
  localClassName: string;
  additionalClassName?: string;
}

const TitleBlock = ({
  text,
  number = "",
  titleTag,
  globalClassName,
  localClassName,
  additionalClassName = "",
}: TitleProps) => {
  const TagName = titleTag;

  return (
    <TagName
      className={`${globalClassName} ${styles.title} ${styles[localClassName]}`}
    >
      <span className={styles[additionalClassName]}>{text}</span>
      {number && <span className={styles.title__number}>{number}</span>}
    </TagName>
  );
};

export default TitleBlock;
