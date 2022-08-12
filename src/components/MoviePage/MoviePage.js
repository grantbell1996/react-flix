import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import reactflixHeader from "../images/reactflix_header.png";
import "./MoviePage.css";

export const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
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
  }, []);

  useEffect(() => {
    //location of the fetch is the single movie id in the api
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=e623222adcf057666d3c1dd36f72f3d6&language=en-US&page=1`
    )
      //retrieve the data from the api in json format
      .then((res) => res.json())
      .then((data) => {
        setSimilarMovies(data.results);
      });
  }, []);

  return (
    <>
      <Link to={"/"}>
        <img className="site_header" src={reactflixHeader} />
      </Link>
      <h1 className="movie_header">{movie.title}</h1>
      <div className="movie_cont">
        <img
          className="movie_page_poster"
          width="300"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : ``
          }
        />
        <div className="movie_details">
          <div className="movie_overview">{movie.overview}</div>
          <div className="movie_runtime">{movie.runtime} min</div>
        </div>
      </div>
      <h2 className="movie_header">Similar Titles</h2>
      <div className="movie_tile">
        {similarMovies.map((movie) => (
          <Link
            className="movieBody"
            key={`${movie.id}`}
            to={`/${movie.id}`}
            onClick={() => window.location.replace()}
          >
            <img
              className="movie_poster"
              width="200"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                  : ``
              }
            />
          </Link>
        ))}
      </div>
    </>
  );
};
