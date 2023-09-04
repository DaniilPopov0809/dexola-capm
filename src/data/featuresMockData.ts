import { FeatureCardProps } from "../types";

import image01Mob1x from "../images/features/01_mob@1x.webp";
import image01Mob2x from "../images/features/01_mob@2x.webp";
import image01Mob3x from "../images/features/01_mob@3x.webp";

import image01TabDesk1x from "../images/features/01_tab-desk@1x.webp";
import image01TabDesk2x from "../images/features/01_tab-desk@2x.webp";
import image01TabDesk3x from "../images/features/01_tab-desk@3x.webp";

import image02Mob1x from "../images/features/02_mob@1x.webp";
import image02Mob2x from "../images/features/02_mob@2x.webp";
import image02Mob3x from "../images/features/02_mob@3x.webp";

import image02TabDesk1x from "../images/features/02_tab-desk@1x.webp";
import image02TabDesk2x from "../images/features/02_tab-desk@2x.webp";
import image02TabDesk3x from "../images/features/02_tab-desk@3x.webp";

import image03Mob1x from "../images/features/03_mob@1x.webp";
import image03Mob2x from "../images/features/03_mob@2x.webp";
import image03Mob3x from "../images/features/03_mob@3x.webp";

import image03TabDesk1x from "../images/features/03_tab-desk@1x.webp";
import image03TabDesk2x from "../images/features/03_tab-desk@2x.webp";
import image03TabDesk3x from "../images/features/03_tab-desk@3x.webp";

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
      mobile: {
        x1: image01Mob1x,
        x2: image01Mob2x,
        x3: image01Mob3x,
      },
      tab_desk: {
        x1: image01TabDesk1x,
        x2: image01TabDesk2x,
        x3: image01TabDesk3x,
      },
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
      mobile: {
        x1: image02Mob1x,
        x2: image02Mob2x,
        x3: image02Mob3x,
      },
      tab_desk: {
        x1: image02TabDesk1x,
        x2: image02TabDesk2x,
        x3: image02TabDesk3x,
      },
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
      mobile: {
        x1: image03Mob1x,
        x2: image03Mob2x,
        x3: image03Mob3x,
      },
      tab_desk: {
        x1: image03TabDesk1x,
        x2: image03TabDesk2x,
        x3: image03TabDesk3x,
      },
    },
  },
];

export default featuresMockData;