import { IMAGE_URL } from "../../../utils/constants/configConstants";

const MovieCard = ({ imageId, onClick }) => {
    return (
        <div>
            <div className="w-60 lg:w-64 cursor-pointer" onClick={onClick}>
                <img src={`${IMAGE_URL}${imageId}`} alt="movie" />
            </div>
        </div>
    )
}

export default MovieCard;