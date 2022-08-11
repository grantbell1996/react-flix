import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import reactflixHeader from "../images/reactflix_header.png";

export const HomePage = () => {
  const [popMovies, setPopMovies] = useState([]);
  const [trendMovies, setTrendMovies] = useState([]);
  const [moviePick, setMoviePick] = useState({});
  const [actionMovies, setActionMovies] = useState([]);
  const movieId = Math.floor(Math.random() * 5) + 1;

  useEffect(() => {
    //location of the fetch is the single movie id in the api
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=e623222adcf057666d3c1dd36f72f3d6`
    )
      //retrieve the data from the api in json format
      .then((res) => res.json())
      .then((data) => {
        setMoviePick(data);
      });
  }, [movieId]);

  useEffect(() => {
    //location of the fetch is the customers in the api
    fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=e623222adcf057666d3c1dd36f72f3d6`)
      //retrieve the data from the api in json format
      .then((res) => res.json())
      .then((data) => {
        //use the second parameter of the useState to make the array of customers from the api in javascript
        setPopMovies(data.results);
      });
  }, []);

  useEffect(() => {
    //location of the fetch is the customers in the api
    fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=e623222adcf057666d3c1dd36f72f3d6`)
      //retrieve the data from the api in json format
      .then((res) => res.json())
      .then((data) => {
        //use the second parameter of the useState to make the array of customers from the api in javascript
        setPopMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/trending/all/day?api_key=e623222adcf057666d3c1dd36f72f3d6`)
      //retrieve the data from the api in json format
      .then((res) => res.json())
      .then((data) => {
        setTrendMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie/?with_genres=28&api_key=e623222adcf057666d3c1dd36f72f3d6`
    )
      //retrieve the data from the api in json format
      .then((res) => res.json())
      .then((data) => {
        setActionMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie/?with_genres=28&api_key=e623222adcf057666d3c1dd36f72f3d6`
    )
      //retrieve the data from the api in json format
      .then((res) => res.json())
      .then((data) => {
        setActionMovies(data.results);
      });
  }, []);

  return (
    <>
      <img src={reactflixHeader} className="site_header"></img>
      <div className="picks_container">
        <div className="picks_cont_left">
          <h1 className="movie_header">
            {moviePick.original_title
              ? moviePick.original_title
              : moviePick.title}
          </h1>
          <div className="pick_details">
            <h2 className="pick_date">{moviePick?.release_date}</h2>
            <h2 className="pick_runtime">{moviePick?.runtime} min</h2>
          </div>
          <div className="pick_overview">{moviePick?.overview}</div>
        </div>
        <div className="picks_cont_right">
          <img
            className="pick_backdrop"
            src={
              moviePick.poster_path
                ? `https://image.tmdb.org/t/p/original/${moviePick?.poster_path}`
                : ``
            }
          ></img>
        </div>
      </div>
      <h2 className="genre_header">Popular Titles</h2>
      <div className="pop_movie_bar">
        <div className="movie_tile">
          {popMovies.map((movie) => (
            <Link className="movieBody" key={`${movie.id}`} to={`/${movie.id}`}>
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
        <h2 className="genre_header">Trending Titles</h2>
        <div className="trend_movie_bar">
          <div className="movie_tile">
            {trendMovies.map((movie) => (
              <Link
                className="movieBody"
                key={`${movie.id}`}
                to={`/${movie.id}`}
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
        </div>
        <h2 className="genre_header">Action Movies</h2>
        <div className="movie_tile">
          {actionMovies.map((movie) => (
            <Link className="movieBody" key={`${movie.id}`} to={`/${movie.id}`}>
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
      </div>
    </>
  );
};
