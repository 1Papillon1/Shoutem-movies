import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MovieList  from "./modules/movies/components/MovieList";
import About from './modules/about/screens/About';
import MovieDetails from "./modules/movies/components/MovieDetails";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerScreen({ navigation }) {
  return (

      <Drawer.Navigator 
        initialRouteName="Movies"
        id="LeftDrawer">
        <Drawer.Screen 
        name="Movies" 
        component={MovieList}

        />
        <Drawer.Screen name="About" component={About} />
        
      </Drawer.Navigator>
  );
}





export default function App() {
  


  return(
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="DrawerScreen" component={DrawerScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
      
  </NavigationContainer>
  )
}

