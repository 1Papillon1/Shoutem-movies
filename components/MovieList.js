import React, {useEffect, useState, Component} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, Button } from 'react-native';
import styles from '../styles/Movies.style.js';
import {API_KEY} from '@env';


export default function MovieList({ navigation }) {



    // states
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    
    
    
    // fetch
    const getMovies = async () => {
      try {
       const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY);
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
          
          
        <FlatList 
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
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
                </View>
              )}
            />
    
      </View>
      )
    }


