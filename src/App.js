import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage.js"
import { MoviePage } from "./components/MoviePage/MoviePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="" element={<HomePage/>}></Route>

          <Route path="/:movieId" element={ <MoviePage /> } ></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
