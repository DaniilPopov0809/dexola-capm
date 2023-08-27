import TitleBlock from "../UI/TitleBlock/TitleBlock";
import NftTable from "../UI/NftTable/NftTable";

const TopNfts = () => {
  return (
    <section>
      <TitleBlock
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
