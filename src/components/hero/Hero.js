import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Hero = ({movies}) => {
    // console.log(" list of movies in HERO js" +movies);
    return (
        <div className='movies-carousel-container'>
            <Carousel>
                {
                    movies.map((movie) => {
                        return (
                            <Paper>
                                <div className='movie-card-container'>
                                    <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={movie.poster} alt=" " />
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </Paper>

                        )
                    })
                }
            </Carousel>

        </div>
    )
}

export default Hero;