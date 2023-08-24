import NftTableRow from "../NftTableRow/NftTableRow";

const NftTable = () => {
    return (
        <table>
  <thead>
    <tr>
      <th id="sequenceNumber" scope="col">#</th>
      <th id="name" scope="col">NFT Name</th>
      <th id="level" scope="col">Rarity Level</th>
      <th id="games" scope="col">Total games</th>
      <th id="won" scope="col">Games Won</th>
      <th id="price" scope="col">Price (ETH)</th>
    </tr>
  </thead>
  <tbody>
   <NftTableRow/>
  </tbody>
</table>
    )
}

export default NftTable;