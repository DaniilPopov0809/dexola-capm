import styles from "./Title.module.scss";
import {ReactNode} from "react";
type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  children: ReactNode;
  number?: string;
  titleTag: TitleTag;
  globalClassName: string;
  localClassName: string;
  additionalClassName?: string;
}

const Title = ({
  children,
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
      <span className={styles[additionalClassName]}>{children}</span>
      {number && <span className={styles.title__number}>{number}</span>}
    </TagName>
  );
};

export default Title;
