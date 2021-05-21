import {useEffect, useState} from 'react';
import axios from 'axios';
import {DB_KEY, DB_URL} from '@env';

export const useFetchMovie = (movieType) => {
  const [movies, setMovies] = useState([]);

  const movieUrl = {
    popular: `${DB_URL}/movie/popular?api_key=${DB_KEY}&language=en-US&page=1`,
    cinema: `${DB_URL}/movie/now_playing?api_key=${DB_KEY}&language=en-US&page=1`,
    comedy: `${DB_URL}/discover/movie?api_key=${DB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
    interesting: `${DB_URL}/movie/top_rated?api_key=${DB_KEY}&language=en-US&page=1`,
    default: `${DB_URL}/discover/movie?api_key=${DB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
  };

  const getMovies = async (type) => {
    switch (type) {
      case 'popular':
        try {
          const {data} = await axios.get(movieUrl.popular);

          setMovies(data.results);
        } catch (error) {
          console.log(error);
        }
        break;
      case 'comedy':
        try {
          const {data} = await axios.get(movieUrl.comedy);

          setMovies(data.results);
        } catch (error) {
          console.log(error);
        }

        break;
      case 'interesting':
        try {
          const {data} = await axios.get(movieUrl.interesting);

          setMovies(data.results);
        } catch (error) {
          console.log(error);
        }
        break;
      case 'cinema':
        try {
          const {data} = await axios.get(movieUrl.cinema);

          setMovies(data.results);
        } catch (error) {
          console.log(error);
        }
        break;
      case "default":
        try {
          const {data} = await axios.get(movieUrl.default);

          setMovies(data.results);
        } catch (error) {
          console.log(error);
        }
    }
  };

  useEffect(() => {
    getMovies(movieType);
  }, []);

  return movies;
};
