import styles from "./MainLink.module.scss";

interface MainLinkProps {
  link: string;
  title: string;
  target: "_blank"| "_self"|"_parent"|"_top"|"framename";
  globalClassName: string;
  localClassName: string;
  rel?: string;
}

const MainLink = ({
  link,
  title,
  target,
  globalClassName,
  localClassName,
  rel = "",
}: MainLinkProps) => {
  const compositeClassName: string = `${globalClassName} ${styles[localClassName]}`;
  return (
    <a href={link} className={compositeClassName} target={target} rel={rel}>
      {title}
    </a>
  );
};

export default MainLink;
