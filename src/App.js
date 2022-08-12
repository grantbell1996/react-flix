import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage.js"
import { MoviePage } from "./components/MoviePage/MoviePage";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <div className="application"> 
      <BrowserRouter>
        <Routes>
          
          <Route path="" element={<HomePage/>}></Route>

          <Route path="/:movieId" element={ <MoviePage /> } ></Route>

        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
