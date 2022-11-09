import React, { UseState } from 'react';
import { Button, View, Image, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useApi from '../networking/useApi';
import { useState } from 'react';
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