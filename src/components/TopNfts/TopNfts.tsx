import BlockTitle from "../UI/BlockTitle/BlockTitle";
import NftTable from "../UI/NftTable/NftTable";

const TopNfts = () => {
  return (
    <section>
      <BlockTitle
        text={"Top NFTs"}
        number={"02"}
        className={"topNfts"}
        titleTag={"h2"}
      />
    <NftTable/>
    </section>
  );
};

export default TopNfts;
