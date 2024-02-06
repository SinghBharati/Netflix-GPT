import lang from "../utils/languageConstants";
import {useSelector} from "react-redux";

function GptSearchBar() {
    const langKey = useSelector((store) => store.config.lang)
    return (
        <div className="pt-[10%] flex justify-center">
            <form
                className="w-1/2 bg-black grid grid-cols-12"
                action=""
            >
                <input
                    className="p-4 m-4 rounded col-span-9"
                    type="text"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button
                    className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3"
                >{lang[langKey].search}</button>
            </form>
        </div>
    );
}

export default GptSearchBar;