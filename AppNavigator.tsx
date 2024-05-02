import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import PDFTron from './PDFTron';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PDFTron" component={PDFTron} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
