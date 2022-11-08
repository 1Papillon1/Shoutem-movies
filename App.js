import { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { DrawerActions, NavigationContainer, StackActions, FlatList } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MovieList  from "./modules/movies/components/MovieList";
import About from './modules/about/screens/About';
import MovieDetails from "./modules/movies/components/MovieDetails";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        <LeftDrawer.Screen 
        options={{
          drawerItemStyle: { height: 0 }
        }}
        name="MovieDetails" 
        component={MovieDetails} />
      </LeftDrawer.Navigator>
  );
}

//stack navigator


const Stack = createNativeStackNavigator();

export default function App() {
  


  return(
    <NavigationContainer>
      <LeftDrawerScreen />
      
  </NavigationContainer>
  )
}

