import {useEffect, useState} from 'react';
import axios from 'axios';
import {DB_KEY} from '@env';

export const useFetchMovie = (movieType) => {
  const [movies, setMovies] = useState([]);

  const movieUrl = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${DB_KEY}&language=en-US&page=1`,
    cinema: `https://api.themoviedb.org/3/movie/now_playing?api_key=${DB_KEY}&language=en-US&page=1`,
    comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${DB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
    interesting: `https://api.themoviedb.org/3/movie/top_rated?api_key=${DB_KEY}&language=en-US&page=1`,
    default: `https://api.themoviedb.org/3/discover/movie?api_key=${DB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
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
      default:
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
