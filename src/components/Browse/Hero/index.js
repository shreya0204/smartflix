import { useSelector } from "react-redux";
import BgVideoInfo from "./BgVideoInfo";
import BgVideo from "./BgVideo";

const BrowseHero = () => {

    const movies = useSelector(store => store.movies?.topRatedMovies,
    );
    const bgMovie = movies[Math.floor(Math.random() * movies.length)];

    return (

        <div>
            <BgVideoInfo image_id={bgMovie?.backdrop_path} title={bgMovie?.title} subtitle={bgMovie?.overview} />
            <BgVideo movie_id={bgMovie?.id} />

        </div>
    )
}

export default BrowseHero;