import React, {useEffect, useState, Component} from "react";
import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, View, Pressable, ActivityIndicator, FlatList, Image, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from '../styles/MoviesStyle.js';
import {API_KEY} from '@env';
import { Chip } from "react-native-paper";


export default function MovieList({ navigation }) {


    // states
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const [isLoadingCategories, setLoadingCategories] = useState(true);
    const [dataCategories, setDataCategories] = useState([]);

    const [genre, setGenre] = useState("action");
    const [genreId, setGenreId] = useState(28);
    // fetch movies
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
    
    // fetch categories
    const getCategories = async () => {
      try {
       const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY);
       const json = await response.json();
       setDataCategories(json.genres);
     } catch (error) {
       console.error(error);
     } finally {
       setLoadingCategories(false);
     }
    }


    // use effect
    useEffect(() => {
    getMovies();
    }, []);
    
    useEffect(() => {
      getCategories();
    }, []);



      return (
      <View>
        <View style={{flexDirection: 'row', flexWrap: "wrap", justifyContent: 'flex-start'}}>
        {dataCategories.map((currentGenre) => (
          
            <Button onPress={() => {setGenre(currentGenre.name); 
            setGenreId(currentGenre.id)}} title={currentGenre.name}>
              
              {currentGenre.name}
              
            </Button>
          
          ))}

        </View>
          <View>
            <Text>{genre.toUpperCase()}</Text>
          </View>
          <FlatList 
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => {
                for (let i = 0; i < item.genre_ids.length; i++) {
                  if (item.genre_ids[i] == genreId) {
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
                <Text style={styles.rowSecondary}>Genres: 
                  
                </Text>
                
                </View>
                  )
                }}}}
            />
    
      </View>
      )
    }

