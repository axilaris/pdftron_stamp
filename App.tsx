import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import PDFTron from './PDFTron';
import {HomeNavigatorParams, RootNavigatorParams} from './src/types/navigator.types';

const HomeStack = createNativeStackNavigator<HomeNavigatorParams>();

const App = () => {
  return (
    <NavigationContainer>
       <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="PDFTron" component={PDFTron} />
        <HomeStack.Screen name="Home" component={Home} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
