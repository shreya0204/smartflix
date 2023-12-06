import { getMovieDetailsById } from "../../../services/api/movies";
import { IMAGE_URL } from "../../../utils/constants/configConstants";
import { useDispatch } from "react-redux";
import { openModal } from "../../../services/redux/slices/modalSlice";

const MovieCard = ({ imageId, movie }) => {
    const dispatch = useDispatch();

    const handleMovieClick = async (movie) => {
        const selectedMovie = await getMovieDetailsById(movie.id);
        if (!selectedMovie) return;
        dispatch(openModal(selectedMovie));
    }

    return (
        <div>
            <div className="w-60 lg:w-64 cursor-pointer" onClick={() => handleMovieClick(movie)}>
                <img src={`${IMAGE_URL}${imageId}`} alt="movie" />
            </div>
        </div>
    )
}

export default MovieCard;