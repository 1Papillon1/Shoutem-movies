import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native';
import { DrawerActions, NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  MovieList  from "./components/MovieList";
import HomePage from './components/HomePage';





export default function App() {
  


const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="Movies - All" component={MovieList} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}

