import {API_KEY} from '@env';


export const getMovies = async () => {
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