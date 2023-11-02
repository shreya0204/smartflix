import BackgroundVideo from '../../components/Browse/Hero';
import MovieList from '../../components/Browse/MoviesList';
import Header from '../../components/Header/Header';
import { useNowPlayingMovies } from '../../hooks/useNowPlayingMovies';

const Browse = () => {

    const { nowPlayingMoviesData, isLoading, error } = useNowPlayingMovies();


    return (
        <div>
            <Header />
            <BackgroundVideo />
            <div className='bg-gray-900'>
                <MovieList title={"Now Playing"} movies={nowPlayingMoviesData} />
            </div>
        </div>
    )
}

export default Browse;  