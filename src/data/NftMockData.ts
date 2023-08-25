import { TopNftsProps } from "../types";

const nftMockData: TopNftsProps[] =  [
    {
    id: "1",
    avatar: {
        x1: "/src/images/topNfts/10@1x.webp",
        x2: "/src/images/topNfts/10@2x.webp",
        x3: "/src/images/topNfts/10@3x.webp",
    }, 
    name: "Legendary Artifact",
    level: "Legendary",
    games: "189",
    win: "125",
    price: "2.5",
},
{
    id: "2",
    avatar: {
        x1: "/src/images/topNfts/3@1x.webp",
        x2: "/src/images/topNfts/3@2x.webp",
        x3: "/src/images/topNfts/3@3x.webp",
    }, 
    name: "Epic Warrior",
    level: "Rare",
    games: "134",
    win: "100",
    price: "1.5",
},
{
    id: "3",
    avatar: {
        x1: "/src/images/topNfts/5@1x.webp",
        x2: "/src/images/topNfts/5@2x.webp",
        x3: "/src/images/topNfts/5@3x.webp",
    }, 
    name: "Mystic Spellbook",
    level: "Common",
    games: "133",
    win: "43",
    price: "1.2",
},
{
    id: "4",
    avatar: {
        x1: "/src/images/topNfts/2@1x.webp",
        x2: "/src/images/topNfts/2@2x.webp",
        x3: "/src/images/topNfts/2@3x.webp",
    },  
    name: "Common Potion",
    level: "Heroic",
    games: "87",
    win: "23",
    price: "2.8",
},
{   
    id: "5",
    avatar: {
        x1: "/src/images/topNfts/7@1x.webp",
        x2: "/src/images/topNfts/7@2x.webp",
        x3: "/src/images/topNfts/7@3x.webp",
    }, 
    name: "Heroic Blade",
    level: "Epic",
    games: "56",
    win: "15",
    price: "0.5",
}
]

export default nftMockData;