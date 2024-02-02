import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import {BG_URL} from "../utils/constants";
function GptSearch() {
    return (
        <div>
        {/*    Gpt Search Bar
                Gpt Movie Suggestion
        */}
            <div className="absolute -z-10">
                <img src={BG_URL}
                     alt="backgroung"/>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    );
}

export default GptSearch;