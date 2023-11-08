import { IMAGE_URL } from "../../../utils/constants/configConstants";

const MovieCard = ({ imageId }) => {
    return (
        <div>
            <div className="w-60 lg:w-64">
                <img src={`${IMAGE_URL}${imageId}`} alt="" />
            </div>
        </div>
    )
}

export default MovieCard;