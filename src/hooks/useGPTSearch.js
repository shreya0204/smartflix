import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGptResultMovies, updateSearchResultStatus, updateIsSearching } from "../services/redux/slices/gptSlice";
import { fetchUserQueryMovies } from "../services/api/openai";
import { getGPTRecommendedMovies } from "../services/api/movies";

const useGPTSearch = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleGPTSearch = async (searchText) => {
        if (!searchText.trim()) {
            setError('Please enter something to search');
            return;
        }
        setError("");
        setIsSearching(true);
        dispatch(updateIsSearching(true));

        try {
            const gptRecommendedMoviesArray = await fetchUserQueryMovies({ userQuery: searchText });

            if (gptRecommendedMoviesArray.length === 0) {
                dispatch(addGptResultMovies([]));
                dispatch(updateSearchResultStatus(false));
            } else {
                const recommendedMovies = await getGPTRecommendedMovies({ gptRecommendedMoviesArray });
                if (recommendedMovies.length === 0) {
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

    return { handleGPTSearch, isSearching, error, setError };
};

export default useGPTSearch;
