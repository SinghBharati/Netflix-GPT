import {useSelector} from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggestions() {
    const gpt = useSelector((store) => store.gpt);
    const {movieNames, movieResults} = gpt;

    if(!movieNames) return null;

    return (
        <div className="p-4 m-4 bg-black bg-opacity-90 text-white">
            <div>
                {movieNames.map(
                    (movieName, index) => (
                        <MovieList
                            key={movieName}
                            title={movieName}
                            movies={movieResults[index]}
                        />
                    ))}
            </div>
        </div>
    );
}

export default GptMovieSuggestions;