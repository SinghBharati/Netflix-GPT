import {useSelector} from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
function MainContainer() {
    const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

    if(!movies) return ;

    const mainMove = movies[0];
    //console.log(mainMove)

    const { original_title, overview, id} = mainMove;
    return (
        <div>
            <VideoTitle title = {original_title} overview = {overview}/>
            <VideoBackground movieId = {id}/>
        </div>
    );
}

export default MainContainer;