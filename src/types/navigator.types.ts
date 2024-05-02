import {NavigatorScreenParams} from '@react-navigation/native';

export type RootNavigatorParams = {
  Home: NavigatorScreenParams<HomeNavigatorParams>;
};

export type HomeNavigatorParams = {
  Home: {
    signatureUrl?: string;
  };
  PDFTron: {
    signatureUrl?: string;
    stampUrl?: string;
    pdfUrl?: string;
    fontSize?: string;
  };
};
