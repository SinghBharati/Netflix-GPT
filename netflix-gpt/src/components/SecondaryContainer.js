import MovieList from "./MovieList";
import {useSelector} from "react-redux";
function SecondaryContainer() {

    const movies = useSelector((store) => store?.movies)

    return (
        movies && (
            <div className="bg-black">
                <div className="-mt-52 pl-12 relative z-40 ">
                    <MovieList title = {"Now Playing"} movies = {movies?.nowPlayingMovies}/>
                    <MovieList title = {"Top Rated"} movies = {movies?.topRatedMovies}/>
                    <MovieList title = {"Upcoming Movies"} movies = {movies?.upcomingMovies}/>
                    <MovieList title = {"Popular"} movies = {movies?.popularMovies}/>
                    <MovieList title = {"Horror"} movies = {movies?.nowPlayingMovies}/>

                </div>
            </div>
        )
    );
}

export default SecondaryContainer;