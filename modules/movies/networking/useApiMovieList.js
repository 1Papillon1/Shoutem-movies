import {API_KEY} from '@env';
import { useEffect, useState } from "react"

const useApiMovieList = (url) => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = () => {
    fetch(url + API_KEY) 
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json)
      setLoading(false)
      setData(json.results)
    })
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return { isLoading, data, setData }
};

export default useApiMovieList;



