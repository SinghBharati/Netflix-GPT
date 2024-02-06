import openai from "../utils/openai";
import lang from "../utils/languageConstants";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {API_OPTIONS} from "../utils/constants";
import {addGptMovieResult} from "../utils/gptSlice";

function GptSearchBar() {
    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef(null)
    const dispatch = useDispatch();

    // Search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+
            movie +
            "&include_adult=false&language=en-US&page=1", API_OPTIONS)

        const json = await data.json();

        return json.result;
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value)
        // Make an API Call to GPT API and get movie result.

        const gptQuery = "Act as a Movie Recommendation System and suggest some movie for the query" +
            searchText.current.value +
            ". only give me names of 5 movies , comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResult = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: gptQuery}],
            stream: true,
        });

        // if(!gptResult.choices) { TODO: Write Error Handling }

        console.log(gptResult.choices?.[0]?.message?.content);

        const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

        // For each movie I will search TMDB API
        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResult({movieNames : gptMovies, movieResults : tmdbResults}));
    }

    return (
        <div className="pt-[55%] md:pt-[10%] flex justify-center">
            <form
                className="w-full md:w-1/2 bg-black grid grid-cols-12"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    className="p-4 m-4 rounded col-span-9"
                    type="text"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button
                    className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3"
                    onClick={handleGptSearchClick}
                >{lang[langKey].search}</button>
            </form>
        </div>
    );
}

export default GptSearchBar;