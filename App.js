import React from 'react';
// import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/screens/Home';
import Register from './app/screens/Register';
import SignUp from './app/screens/SignUp';
import LogIn from './app/screens/LogIn';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Log In" component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
