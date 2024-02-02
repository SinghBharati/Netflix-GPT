import MovieCard from "./MovieCard";
function MovieList({title, movies}) {
    if(!movies) return null;
    console.log(movies)
    return (
        <div className="px-6">
            <h1 className="py-4 text-3xl text-white">{title}</h1>

            <div className="flex  overflow-x-scroll">
                <div className="flex">
                    {movies.map(movie =>  <MovieCard key={movie.id} poster_path={movie.poster_path}/>)}
                </div>
            </div>

        </div>
    );
}

export default MovieList;