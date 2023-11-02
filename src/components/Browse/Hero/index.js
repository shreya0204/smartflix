import { useSelector } from "react-redux";
import BgVideoInfo from "./BgVideoInfo";
import BgVideo from "./BgVideo";

const BrowseHero = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    const bgMovie = movies[Math.floor(Math.random() * movies.length)];
    // const bgMovie = movies[0];

    return (

        <div>
            <BgVideoInfo image_id={bgMovie?.backdrop_path} title={bgMovie?.title} subtitle={bgMovie?.overview} />
            <BgVideo movie_id={bgMovie?.id} />

        </div>
    )
}

export default BrowseHero;