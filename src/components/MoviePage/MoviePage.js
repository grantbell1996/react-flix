import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleMovieFromAPI } from "../MovieManager";

export const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    //location of the fetch is the single movie id in the api
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=e623222adcf057666d3c1dd36f72f3d6`
    )
      //retrieve the data from the api in json format
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [movieId]);

  return (
    <>
      <div className="movie_header">{movie.title}</div>
      <img
        className="movie_page_poster"
        width="300"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            : ``
        }
      />
      <div>{movie.overview}</div>
    </>
  );
};
