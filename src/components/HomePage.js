import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //location of the fetch is the customers in the api
    fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=e623222adcf057666d3c1dd36f72f3d6`)
      //retrieve the data from the api in json format
      .then((res) => res.json())
      .then((data) => {
        //use the second parameter of the useState to make the array of customers from the api in javascript
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <h1>ReactFlix</h1>
      <div>Popular Titles</div>
      <div className="movie_bar">
        <div className="movie_tile">
          {movies.map((movie) => (
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
