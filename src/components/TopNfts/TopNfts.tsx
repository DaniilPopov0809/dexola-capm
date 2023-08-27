import Title from "../UI/Title/Title";
import NftTable from "../UI/NftTable/NftTable";

const TopNfts = () => {
  return (
    <section>
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
