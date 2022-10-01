import { StatusBar } from 'expo-status-bar';
import React from 'react';
import About from './components/About'
import Search from './components/Search';
import {View, Text} from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="About" component={About}/>
        <Tabs.Screen name="Search" component={Search}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

