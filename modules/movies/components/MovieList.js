import React, {useState, } from "react";
import { Text, View, FlatList, Image, Button, ActivityIndicator } from 'react-native';
import styles from '../styles/MovieListStyle';
import useApi from "../networking/useApi";


export default function MovieList({ navigation }) {

  const [url, setUrl] = useState("https://api.themoviedb.org/3/movie/upcoming?api_key=");


  const { isLoading, data } = useApi(url)

  

    return(
      <View>
        <View style={styles.flexButtons}>

        <View style={styles.buttonWrapper}>
          <Button 
          onPress={() => {setUrl("https://api.themoviedb.org/3/movie/popular?api_key=");
          }} title={"popular"}>   
                
          </Button>
        </View>

        <View style={styles.buttonWrapper}>
          <Button 
          onPress={() => {setUrl("https://api.themoviedb.org/3/movie/top_rated?api_key=");
          }} title={"top rated"}>   
                
          </Button>
        </View>
        
        <View style={styles.buttonWrapper}>
          <Button 
          onPress={() => {setUrl("https://api.themoviedb.org/3/movie/upcoming?api_key=");
          }} title={"upcoming"}>   
                
          </Button>
        </View>

        <View style={styles.buttonWrapper}>
          <Button 
          onPress={() => {setUrl("https://api.themoviedb.org/3/movie/now_playing?api_key=");
          }} title={"now playing"}>   
                
          </Button>
        </View>
        
        </View>

        {isLoading ? <ActivityIndicator /> : <FlatList 
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => {
                 
                  
                 return (
                <View style={styles.box}>
                
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
                <View style={styles.buttonWrapperSecondary}>

                <Button 
                    
                    onPress={() => {
                    navigation.navigate('MovieDetails', {movieOverview: item.overview, movieRelease: item.release_date,movieImg: 'https://image.tmdb.org/t/p/w500' + item.backdrop_path, movieTitle: item.title, moviePopularity: item.popularity})}
                } 
                    title={"See Details"}>   
                
                </Button>

                </View>
                </View>
                  )
              }}
            />
            }
      </View>
    
    )
    }