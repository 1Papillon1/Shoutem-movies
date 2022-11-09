import React from 'react';
import {View, Image, Text } from 'react-native';
import styles from '../styles/MovieDetailsStyle';

export default function MovieDetails({ route, navigation }) {

    const {movieOverview, movieRelease, movieImg, movieTitle, moviePopularity} = route.params;
  

    
      return(
        <View style={styles.box}>

              <Image
                style={styles.image}
                source={{uri:movieImg}}
                />
                <Text style={styles.row}>
                  {movieTitle}
                </Text>
                <Text style={styles.rowSecondary}>
                  {movieRelease}
                </Text>
                <Text style={styles.paragraph}>
                  {movieOverview}
                </Text>
                <Text style={styles.row}>
                  Popularity: {moviePopularity}
                </Text>
        </View>

      )
}