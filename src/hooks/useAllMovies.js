import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from '../services/redux/slices/moviesSlice';
import { fetchAllMoviesData } from "../services/api/movies";

const useAllMovies = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(state => state.movies);


    useEffect(() => {
        setIsLoading(true);
        if (popularMovies.length === 0 && topRatedMovies.length === 0 && upcomingMovies.length === 0)
            fetchAllMoviesData()
                .then(data => {
                    dispatch(setMovies(data)); // Dispatch the movies data to Redux store
                    setIsLoading(false);
                })
                .catch(err => {
                    dispatch(setError(err.message)); // Dispatch the error message to Redux store
                    setIsLoading(false);
                });
    }, []);


    return { popularMovies, topRatedMovies, upcomingMovies, isLoading, error };
};

export default useAllMovies;