
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import MovieDetails from "./page/MovieDetails";
import Movies from "./page/Movies";
import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = "HD MOVIE"
  },[])

  return (
    <Router basename="/hd-movie-search">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movie/:id" element={<MovieDetails/>}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
