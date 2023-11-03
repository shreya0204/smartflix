import { useEffect } from 'react';
import BackgroundVideo from '../../components/Browse/Hero';
import MovieList from '../../components/Browse/MoviesList';
import Header from '../../components/Header/Header';
import useAllMovies from '../../hooks/useAllMovies';

const Browse = () => {
    const {
        popularMovies,
        topRatedMovies,
        upcomingMovies,
        isLoading,
        error,
    } = useAllMovies();

    const movieTypes = [
        { title: "Popular", movies: popularMovies },
        { title: "Top Rated", movies: topRatedMovies },
        { title: "Upcoming", movies: upcomingMovies },
    ];

    useEffect(() => {
        // Optionally dispatch actions here to store the data in Redux if needed.
        // For example, dispatch(setNowPlayingMovies(nowPlayingMovies));
        // Do the same for other types.
    }, [popularMovies, topRatedMovies, upcomingMovies]);

    return (
        <div className='bg-gray-900'>
            <Header />
            <BackgroundVideo />
            <div>
                {error && <p>Error: {error}</p>}
                {movieTypes.map((movieType) => (
                    <MovieList
                        key={movieType.title}
                        title={movieType.title}
                        movies={movieType.movies}
                        isLoading={isLoading}
                    />
                ))}
            </div>
        </div>
    );
};

export default Browse;
