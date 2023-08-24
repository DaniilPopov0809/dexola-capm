import { FeatureCardProps } from "../types";

 const featuresMockData: FeatureCardProps[] = [
  {
    id: "1",
    title: {
      text: "STRU Token sale",
      number: "01",
    },
    description:
      "The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation.",
    imageData: {
      x1: "/src/images/features/01_@1x.webp",
      x2: "/src/images/features/01_@2x.webp",
      x3: "/src/images/features/01_@3x.webp",
    },
  },
  {
    id: "2",
    title: {
      text: "Staking",
      number: "02",
    },
    description:
      "Join a community of stakers, united by their passion for exploration, strategy, and gaming.",
    imageData: {
      x1: "/src/images/features/02_@1x.webp",
      x2: "/src/images/features/02_@2x.webp",
      x3: "/src/images/features/02_@3x.webp",
    },
  },
  {
    id: "3",
    title: {
      text: "NFT minting",
      number: "03",
    },
    description:
      "Every StarRunner NFT tells a story – YOUR story. This NFT encapsulates the essence of your journey.",
    imageData: {
      x1: "/src/images/features/03_@1x.webp",
      x2: "/src/images/features/03_@2x.webp",
      x3: "/src/images/features/03_@3x.webp",
    },
  },
];

export default featuresMockData;