import { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { DrawerActions, NavigationContainer, StackActions, FlatList } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MovieList  from "./components/MovieList";
import About from './components/About';
import styles from './styles/IconStyle.js';
import { Picker } from '@react-native-picker/picker';
import {API_KEY} from '@env';

// left drawer
const LeftDrawer = createDrawerNavigator();
function LeftDrawerScreen({ navigation }) {
  return (

      <LeftDrawer.Navigator 
        initialRouteName="Movies"
        id="LeftDrawer">
        <LeftDrawer.Screen 
        name="Movies" 
        component={MovieList}

        />
        <LeftDrawer.Screen name="About" component={About} />
      </LeftDrawer.Navigator>
  );
}




export default function App() {
  


  return(
    <NavigationContainer>
      <LeftDrawerScreen />
      
  </NavigationContainer>
  )
}

