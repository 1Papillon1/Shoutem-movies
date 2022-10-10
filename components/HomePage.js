import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, StackActions, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieList from './MovieList';


export default function HomePage({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading screen</Text>
          <Button 
            title="Movie list"
            onPress={() => navigation.navigate("Movies - All", {name: "Custom Movie list"})}
            />
        </View>
      );


}