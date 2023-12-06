import { useSelector, useDispatch } from 'react-redux';
import { IMAGE_URL } from '../../utils/constants/configConstants';
import GPTMovieShimmer from '../Shimmer/gptMoviesShimmer';
import { openModal } from '../../services/redux/slices/modalSlice';
import { getMovieDetailsById } from '../../services/api/movies';

const GPTSuggestions = () => {
    const dispatch = useDispatch();
    const gptRecommendedMovies = useSelector(store => store.gpt.gptResultMovies);
    const searchResultsFound = useSelector(store => store.gpt.searchResultsFound);
    const isSearching = useSelector(store => store.gpt.isSearching);

    const showMessage = gptRecommendedMovies.length > 0;

    const handleMovieClick = async (movie) => {
        const selectedMovie = await getMovieDetailsById(movie.id);
        if (!selectedMovie) return;
        dispatch(openModal(selectedMovie));
    };

    return (
        <>
            {isSearching && <GPTMovieShimmer />}
            {!isSearching && (
                <div className="flex flex-col px-16 gap-6 mt-24 justify-center items-center">
                    {showMessage && (
                        <h1 className="text-2xl text-white">
                            {searchResultsFound ? 'Here are some movies you might like' : 'No results found'}
                        </h1>
                    )}
                    <div className="flex flex-row gap-8 flex-wrap">
                        {gptRecommendedMovies?.map((movie, index) => (
                            <div key={movie?.id} className="flex flex-col gap-2 cursor-pointer" onClick={() => handleMovieClick(movie)}>
                                <img src={`${IMAGE_URL}/${movie?.poster_path ? movie.poster_path : movie.backdrop_path}`} alt={movie?.title} className="h-72 aspect-auto" />
                                <h1 className="text-white">{movie?.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default GPTSuggestions;
