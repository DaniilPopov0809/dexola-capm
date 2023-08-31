import Title from "../UI/Title/Title";
import NftTable from "../UI/NftTable/NftTable";
import styles from "./TopNfts.module.scss";

const TopNfts = () => {
  return (
    <section className={`container ${styles.topNfts}`}>
      <Title
        text={"Top NFTs"}
        number={"02"}
        titleTag={"h2"}
        globalClassName={"title__h2"}
        localClassName={"topNfts"}
      />
      <NftTable />
    </section>
  );
};

export default TopNfts;
