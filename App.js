import React, {useEffect, useState, Component} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native';



export default function App() {

// states
const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);




// fetch
  const getMovies = async () => {
    try {
     const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1');
     const json = await response.json();
     setData(json.results);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

 useEffect(() => {
  getMovies();
}, []);

return (
  <View>
    <View style={styles.header}>
      <View style={styles.menuBar}></View>
      <View style={styles.menuBar}></View>
      <View style={styles.menuBar}></View>
    </View>
      
    <FlatList 
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
            
            <Image
            style={styles.image}
            source={{uri:'https://image.tmdb.org/t/p/w500' + item.backdrop_path}}
            />
            <Text style={styles.row}>
              {item.title}
            </Text>
            <Text style={styles.rowSecondary}>
              {item.release_date}
            </Text>
            </View>
          )}
        />

  </View>


);
}



const styles = StyleSheet.create({
  header: {
    paddingTop: 35,
    paddingBottom: 5,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderColor: "#5f3734",

  },
  menuBar: {
    width: 30,
    height: 3,
    backgroundColor: "#5f3734",
    margin: 5
  },
  row: {
    backgroundColor: "#e0d9c7",
    fontSize: 24,
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  rowSecondary: {
    borderStyle: "solid",
    borderBottomWidth: 5,
    borderColor: "white",
    backgroundColor: "#e0d9c7",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 15,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
  },
});
