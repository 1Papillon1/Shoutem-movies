import React, { UseState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useApi from '../networking/useApi';
import { useState } from 'react';

export default function MovieDetails({ navigation }) {

    

    const [url, setUrl] = useState("https://api.themoviedb.org/3/movie/663712?api_key=");


  const { isLoading, data } = useApi(url);
  
    
  
      return(
        <View>

        </View>

      )
}