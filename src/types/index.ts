export interface InitialValue {
  email: string;
  phone: string;
  password: string;
  confirmPassword?: string;
}

type TitleType = {
  text: string;
  number: string;
};

type ImageData = {
  x1: string;
  x2: string;
  x3: string;
};

export interface FeatureCardProps {
  id: string;
  title: TitleType;
  description: string;
  // imageData: {
  //   mobile: ImageData;
  //   tablet: ImageData;
  //   desktop: ImageData;
  // };
  imageData: ImageData;
}

export interface TopNftsProps {
  id: string;
  avatar: ImageData;
  name: string;
  level: string;
  games: string;
  win: string;
  price: string;
  index?: number;
}
