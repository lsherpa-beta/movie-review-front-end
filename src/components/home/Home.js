import React from "react";
import Hero from "../hero/Hero";

const Home = ({ movies }) => {
    // console.log("list of movies in HOME" + movies)
    return (
        <Hero movies={movies} />
    )
}
export default Home