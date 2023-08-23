import styles from "./BlockTitle.module.scss";


type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  text: string;
  number: string;
  titleTag: TitleTag;
  className: string;
  additionalClassName?: string;
}

const BlockTitle  = ({ text, number, className, titleTag, additionalClassName=''}: TitleProps) => {
  const TagName = titleTag;

  return (
    <TagName className={`title__h2 ${styles.title} ${styles[className]}`}>
      <span className={`${styles.title__text} ${styles[additionalClassName]}`}>{text}</span>
      <span className={styles.title__number}>{number}</span>
    </TagName>
  );
};

export default BlockTitle;
