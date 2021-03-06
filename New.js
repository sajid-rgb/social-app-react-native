import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp'
import {createStackNavigator}from '@react-navigation/stack'
import {NavigationContainer}from '@react-navigation/native'
import Posts from './components/Posts/Posts';
import Provider from './components/Authentications/Provider'
const AppStack=createStackNavigator()
export default function New() {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen  name="Login" component={Login} />
        <AppStack.Screen  name="Signup" component={SignUp} />
        <AppStack.Screen  name="posts" component={Posts} />
        <Provider />
      </AppStack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
