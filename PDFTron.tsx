import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import React, {Component} from 'react';
import {Platform} from 'react-native';

import {DocumentView, RNPdftron} from 'react-native-pdftron';
import {
  HomeNavigatorParams,
  RootNavigatorParams,
} from './src/types/navigator.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeNavigatorParams, 'PDFTron'>,
  NativeStackScreenProps<RootNavigatorParams>
>;
const PDFTron: React.FC<Props> = ({navigation, route}) => {
  //Access your parameters here
  console.log(route.params);
  RNPdftron.initialize('Insert commercial license key here after purchase');
  RNPdftron.enableJavaScript(true);

  const onLeadingNavButtonPressed = () => {
    if (Platform.OS === 'ios') {
      navigation.goBack();
    } else {
      navigation.goBack();
    }
  };

  const path =
    'https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_mobile_about.pdf';

  return (
    <DocumentView
      document={path}
      showLeadingNavButton={true}
      leadingNavButtonIcon={
        Platform.OS === 'ios'
          ? 'ic_close_black_24px.png'
          : 'ic_arrow_back_white_24dp'
      }
      onLeadingNavButtonPressed={onLeadingNavButtonPressed}
    />
  );
};
export default PDFTron;
