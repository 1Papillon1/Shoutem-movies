import React from 'react';
import {View, ScrollView, FlatList, Image, Text, Button, ActivityIndicator} from 'react-native';
import styles from '../styles/MovieDetailsStyle';
import useApiMovieDetails from "../networking/useApiMovieDetails";
import { useState } from 'react';

export default function MovieDetails({ route, navigation }) {

    const {movieId} = route.params;


    const [url, setUrl] = useState("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=");
    const { isLoading, data } = useApiMovieDetails(url)
    

    
   

      return(
        <View>
      
          {
          isLoading && (
            <ActivityIndicator />
          )
          }
          {
          !isLoading && data && (
              <View>
                
                <Image
                style={styles.image}
                source={{uri:data.backdrop_path}}
                />
                <Text style={styles.row}>
                  {data.title}
                </Text>
                <Text style={styles.rowSecondary}>
                  {data.release_date}
                </Text>
                <Text style={styles.paragraph}>
                  {data.overview}
                </Text>
                <Text style={styles.row}>
                  Popularity: {data.popularity}
                </Text>

              </View>
            )
          }
        </View>

      )
}

