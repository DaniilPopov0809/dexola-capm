import sprite from "../images/socialNetworkSprite.svg";

type DataIcon = {
    id: string;
    path: string;
    label: string;
  };
  
  const socialNetworkIconMockData: DataIcon[] = [
    { id: "1", path: `${sprite}#facebook`, label: "Link to facebook" },
    { id: "2", path: `${sprite}#instagram`, label: "Link to instagram" },
    { id: "3", path: `${sprite}#diskord`, label: "Link to diskord" },
    { id: "4", path: `${sprite}#telegram`, label: "Link to telegram" },
  ];

  export default socialNetworkIconMockData;