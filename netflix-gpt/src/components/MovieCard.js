import {IMAGE_CDN_URL} from "../utils/constants";

function MovieCard({poster_path}) {
    if(!poster_path) return null;

    return (
        <div className="w-48 pr-4">
            <img
                src={IMAGE_CDN_URL + poster_path}
                alt="Movie Card"
            />
        </div>
    );
}

export default MovieCard;