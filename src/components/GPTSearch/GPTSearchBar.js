import { useDispatch, useSelector } from "react-redux";
import { lang } from "../../utils/constants/gptLanguageConstants";
import { useRef, useState } from "react"; // Import useState
import { addGptResultMovies, updateSearchResultStatus, updateIsSearching } from "../../services/redux/slices/gptSlice";
import { fetchUserQueryMovies } from "../../services/api/openai";
import { getGPTRecommendedMovies } from "../../services/api/movies";

const GPTSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const selectedLanguage = useSelector(store => store.config.preferredLanguage);
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState('');

    const handleGPTSearchClick = async () => {
        if (!searchText.current.value.trim()) {
            setError('Please enter something to search');
            return;
        }
        setError("");
        setIsSearching(true);
        dispatch(updateIsSearching(true));

        try {
            const gptRecommendedMoviesArray = await fetchUserQueryMovies({ userQuery: searchText.current.value });

            if (gptRecommendedMoviesArray.length === 0) {
                dispatch(addGptResultMovies([]));
                dispatch(updateSearchResultStatus(false));
            } else {
                const recommendedMovies = await getGPTRecommendedMovies({ gptRecommendedMoviesArray });
                if (recommendedMovies.length === 0) {
                    // If no successful API calls, set an error message and update status
                    setError('Something went wrong. Try again.');
                    dispatch(updateSearchResultStatus(false));
                    dispatch(addGptResultMovies([]));
                } else {
                    dispatch(addGptResultMovies(recommendedMovies));
                    dispatch(updateSearchResultStatus(true));
                }
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            setError('Something went wrong. Try again.');
            dispatch(updateSearchResultStatus(false));
        } finally {
            setIsSearching(false);
            dispatch(updateIsSearching(false));
        }
    };


    const handleInputChange = () => {
        if (error) setError("");
    };

    return (
        <div className="flex justify-center">
            <div className="w-9/12 mt-32 bg-gray-500 rounded-lg bg-opacity-50">
                <form className="p-4 m-2 flex flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="w-3/4 px-2 rounded-md outline-none"
                        placeholder={lang[selectedLanguage].searchPlaceholder}
                        ref={searchText}
                        onChange={handleInputChange}
                    />
                    <button
                        className={`w-1/4 p-3 px-4 ${isSearching ? 'bg-gray-400' : 'bg-red-700 hover:bg-opacity-75'} text-white rounded-md`}
                        type="submit"
                        onClick={handleGPTSearchClick}
                        disabled={isSearching}
                    >
                        {isSearching ? 'Loading...' : lang[selectedLanguage].search}
                    </button>
                </form>
                {error && <p className="text-red-500 m-2 px-4">{error}</p>}
            </div>
        </div>
    );
};
export default GPTSearchBar;
