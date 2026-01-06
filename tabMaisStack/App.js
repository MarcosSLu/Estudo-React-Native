import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routs from './src/routes';

export default function App(){
  return(
    <NavigationContainer>
      <Routs/>
    </NavigationContainer>
  )
}