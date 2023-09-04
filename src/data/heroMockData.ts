import { ImageData } from "../types";

type HeroData = {
  mobile: ImageData;
  tab_desk: ImageData;
};

type HeroMockData = [HeroData[], HeroData[]];

import hero1mob_1x from "../images/hero/hero_1mob@1x.webp";
import hero1mob_2x from "../images/hero/hero_1mob@2x.webp";
import hero1mob_3x from "../images/hero/hero_1mob@3x.webp";

import hero1tabDesk_1x from "../images/hero/hero_1tab-desk@1x.webp";
import hero1tabDesk_2x from "../images/hero/hero_1tab-desk@2x.webp";
import hero1tabDesk_3x from "../images/hero/hero_1tab-desk@3x.webp";

import hero2mob_1x from "../images/hero/hero_2mob@1x.webp";
import hero2mob_2x from "../images/hero/hero_2mob@2x.webp";
import hero2mob_3x from "../images/hero/hero_2mob@3x.webp";

import hero2tabDesk_1x from "../images/hero/hero_2tab-desk@1x.webp";
import hero2tabDesk_2x from "../images/hero/hero_2tab-desk@2x.webp";
import hero2tabDesk_3x from "../images/hero/hero_2tab-desk@3x.webp";

import hero3mob_1x from "../images/hero/hero_3mob@1x.webp";
import hero3mob_2x from "../images/hero/hero_3mob@2x.webp";
import hero3mob_3x from "../images/hero/hero_3mob@3x.webp";

import hero3tabDesk_1x from "../images/hero/hero_3tab-desk@1x.webp";
import hero3tabDesk_2x from "../images/hero/hero_3tab-desk@2x.webp";
import hero3tabDesk_3x from "../images/hero/hero_3tab-desk@3x.webp";

import hero4mob_1x from "../images/hero/hero_4mob@1x.webp";
import hero4mob_2x from "../images/hero/hero_4mob@2x.webp";
import hero4mob_3x from "../images/hero/hero_4mob@3x.webp";

import hero4tabDesk_1x from "../images/hero/hero_4tab-desk@1x.webp";
import hero4tabDesk_2x from "../images/hero/hero_4tab-desk@2x.webp";
import hero4tabDesk_3x from "../images/hero/hero_4tab-desk@3x.webp";

import hero5mob_1x from "../images/hero/hero_5mob@1x.webp";
import hero5mob_2x from "../images/hero/hero_5mob@2x.webp";
import hero5mob_3x from "../images/hero/hero_5mob@3x.webp";

import hero5tabDesk_1x from "../images/hero/hero_5tab-desk@1x.webp";
import hero5tabDesk_2x from "../images/hero/hero_5tab-desk@2x.webp";
import hero5tabDesk_3x from "../images/hero/hero_5tab-desk@3x.webp";

import hero6mob_1x from "../images/hero/hero_6mob@1x.webp";
import hero6mob_2x from "../images/hero/hero_6mob@2x.webp";
import hero6mob_3x from "../images/hero/hero_6mob@3x.webp";

import hero6tabDesk_1x from "../images/hero/hero_6tab-desk@1x.webp";
import hero6tabDesk_2x from "../images/hero/hero_6tab-desk@2x.webp";
import hero6tabDesk_3x from "../images/hero/hero_6tab-desk@3x.webp";

import hero7mob_1x from "../images/hero/hero_7mob@1x.webp";
import hero7mob_2x from "../images/hero/hero_7mob@2x.webp";
import hero7mob_3x from "../images/hero/hero_7mob@3x.webp";

import hero7tabDesk_1x from "../images/hero/hero_7tab-desk@1x.webp";
import hero7tabDesk_2x from "../images/hero/hero_7tab-desk@2x.webp";
import hero7tabDesk_3x from "../images/hero/hero_7tab-desk@3x.webp";

import hero8mob_1x from "../images/hero/hero_8mob@1x.webp";
import hero8mob_2x from "../images/hero/hero_8mob@2x.webp";
import hero8mob_3x from "../images/hero/hero_8mob@3x.webp";

import hero8tabDesk_1x from "../images/hero/hero_8tab-desk@1x.webp";
import hero8tabDesk_2x from "../images/hero/hero_8tab-desk@2x.webp";
import hero8tabDesk_3x from "../images/hero/hero_8tab-desk@3x.webp";

import hero9mob_1x from "../images/hero/hero_9mob@1x.webp";
import hero9mob_2x from "../images/hero/hero_9mob@2x.webp";
import hero9mob_3x from "../images/hero/hero_9mob@3x.webp";

import hero9tabDesk_1x from "../images/hero/hero_9tab-desk@1x.webp";
import hero9tabDesk_2x from "../images/hero/hero_9tab-desk@2x.webp";
import hero9tabDesk_3x from "../images/hero/hero_9tab-desk@3x.webp";

import hero10mob_1x from "../images/hero/hero_10mob@1x.webp";
import hero10mob_2x from "../images/hero/hero_10mob@2x.webp";
import hero10mob_3x from "../images/hero/hero_10mob@3x.webp";

import hero10tabDesk_1x from "../images/hero/hero_10tab-desk@1x.webp";
import hero10tabDesk_2x from "../images/hero/hero_10tab-desk@2x.webp";
import hero10tabDesk_3x from "../images/hero/hero_10tab-desk@3x.webp";

const heroMockData: HeroMockData = [
  [
    {
      mobile: { x1: hero10mob_1x, x2: hero10mob_2x, x3: hero10mob_3x },
      tab_desk: {
        x1: hero10tabDesk_1x,
        x2: hero10tabDesk_2x,
        x3: hero10tabDesk_3x,
      },
    },

    {
      mobile: { x1: hero8mob_1x, x2: hero8mob_2x, x3: hero8mob_3x },
      tab_desk: {
        x1: hero8tabDesk_1x,
        x2: hero8tabDesk_2x,
        x3: hero8tabDesk_3x,
      },
    },
    {
      mobile: { x1: hero6mob_1x, x2: hero6mob_2x, x3: hero6mob_3x },
      tab_desk: {
        x1: hero6tabDesk_1x,
        x2: hero6tabDesk_2x,
        x3: hero6tabDesk_3x,
      },
    },
    {
      mobile: { x1: hero4mob_1x, x2: hero4mob_2x, x3: hero4mob_3x },
      tab_desk: {
        x1: hero4tabDesk_1x,
        x2: hero4tabDesk_2x,
        x3: hero4tabDesk_3x,
      },
    },
    {
      mobile: { x1: hero2mob_1x, x2: hero2mob_2x, x3: hero2mob_3x },
      tab_desk: {
        x1: hero2tabDesk_1x,
        x2: hero2tabDesk_2x,
        x3: hero2tabDesk_3x,
      },
    },
  ],
  [
    {
      mobile: { x1: hero9mob_1x, x2: hero9mob_2x, x3: hero9mob_3x },
      tab_desk: {
        x1: hero9tabDesk_1x,
        x2: hero9tabDesk_2x,
        x3: hero9tabDesk_3x,
      },
    },
    {
      mobile: { x1: hero7mob_1x, x2: hero7mob_2x, x3: hero7mob_3x },
      tab_desk: {
        x1: hero7tabDesk_1x,
        x2: hero7tabDesk_2x,
        x3: hero7tabDesk_3x,
      },
    },
    {
      mobile: { x1: hero5mob_1x, x2: hero5mob_2x, x3: hero5mob_3x },
      tab_desk: {
        x1: hero5tabDesk_1x,
        x2: hero5tabDesk_2x,
        x3: hero5tabDesk_3x,
      },
    },
    {
      mobile: { x1: hero3mob_1x, x2: hero3mob_2x, x3: hero3mob_3x },
      tab_desk: {
        x1: hero3tabDesk_1x,
        x2: hero3tabDesk_2x,
        x3: hero3tabDesk_3x,
      },
    },
    {
      mobile: { x1: hero1mob_1x, x2: hero1mob_2x, x3: hero1mob_3x },
      tab_desk: {
        x1: hero1tabDesk_1x,
        x2: hero1tabDesk_2x,
        x3: hero1tabDesk_3x,
      },
    },
  ],
];

export default heroMockData;
