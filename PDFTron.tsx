import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  BackHandler,
  NativeModules,
  Alert,
} from 'react-native';

import {DocumentView, RNPdftron} from 'react-native-pdftron';

type Props = {};
const PDFTron: React.FC<any> = ({route}) => {
  RNPdftron.initialize('Insert commercial license key here after purchase');
  RNPdftron.enableJavaScript(true);

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
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default PDFTron;
