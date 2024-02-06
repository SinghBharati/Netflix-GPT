import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import {BG_URL} from "../utils/constants";
function GptSearch() {
    return (
        <>
            <div className="fixed -z-10">
                <img
                    className="h-screen w-screen object-cover"
                    src={BG_URL}
                     alt="backgroung"
                />
            </div>
            <div className="">
                {/*    Gpt Search Bar
                Gpt Movie Suggestion
                */}

                <GptSearchBar/>
                <GptMovieSuggestions/>
            </div>
        </>

    );
}

export default GptSearch;