import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNowPlayingMovies } from '../services/api/movies';
import { addNowPlayingMovies } from '../services/redux/slices/moviesSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getNowPlayingMovies()
            .then(data => {
                dispatch(addNowPlayingMovies(data));
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });
    }, [dispatch]);

    const movies = useSelector(state => state.movies.nowPlayingMovies);
    return { movies, isLoading, error };
};

export { useNowPlayingMovies };
