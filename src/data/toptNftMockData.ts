import { TopNftsProps } from "../types";

import hero10x1 from "../images/topNfts/10@1x.webp";
import hero10x2 from "../images/topNfts/10@2x.webp";
import hero10x3 from "../images/topNfts/10@3x.webp";

import hero3x1 from "../images/topNfts/3@1x.webp";
import hero3x2 from "../images/topNfts/3@2x.webp";
import hero3x3 from "../images/topNfts/3@3x.webp";

import hero5x1 from "../images/topNfts/5@1x.webp";
import hero5x2 from "../images/topNfts/5@2x.webp";
import hero5x3 from "../images/topNfts/5@3x.webp";

import hero2x1 from "../images/topNfts/2@1x.webp";
import hero2x2 from "../images/topNfts/2@2x.webp";
import hero2x3 from "../images/topNfts/2@3x.webp";

import hero7x1 from "../images/topNfts/7@1x.webp";
import hero7x2 from "../images/topNfts/7@2x.webp";
import hero7x3 from "../images/topNfts/7@3x.webp";

const nftMockData: TopNftsProps[] = [
  {
    id: "1",
    avatar: {
      x1: hero10x1,
      x2: hero10x2,
      x3: hero10x3,
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
      x1: hero3x1,
      x2: hero3x2,
      x3: hero3x3,
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
      x1: hero5x1,
      x2: hero5x2,
      x3: hero5x3,
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
      x1: hero2x1,
      x2: hero2x2,
      x3: hero2x3,
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
      x1: hero7x1,
      x2: hero7x2,
      x3: hero7x3,
    },
    name: "Heroic Blade",
    level: "Epic",
    games: "56",
    win: "15",
    price: "0.5",
  },
];

export default nftMockData;
