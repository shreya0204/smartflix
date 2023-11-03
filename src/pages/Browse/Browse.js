import { useState } from 'react';
import BackgroundVideo from '../../components/Browse/Hero';
import MovieList from '../../components/Browse/MoviesList';
import Header from '../../components/Header/Header';
import useAllMovies from '../../hooks/useAllMovies';
import GPTSearch from '../../components/GPTSearch';

const Browse = () => {

    const [showSearch, setShowSearch] = useState(false);

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

    return (
        <div>
            <Header showSearch={showSearch} setShowSearch={setShowSearch} />
            {
                showSearch ? <GPTSearch /> : <><BackgroundVideo />
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
                    </div></>
            }
        </div>
    );
};

export default Browse;
