import React, {useEffect, useState, useRef} from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, FlatList, Image, Button, ActivityIndicator } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from '../styles/MovieListStyle';
import {API_KEY} from '@env';
import useApi from "../networking/useApi";
import MovieList from "../components/MovieList";

export default function Movies({ navigation }) {



  

    return(
      <View>
        <MovieList />
      </View>
    )
    }

