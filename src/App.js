import './App.css';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';


function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {

      const response = await api.get("api/v1/movies");

      console.log("list of movies in APP js: " + response.data);

      setMovies(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
