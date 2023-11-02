import BackgroundVideo from '../../components/Browse/Hero';
import Header from '../../components/Header/Header';
import { useNowPlayingMovies } from '../../hooks/useNowPlayingMovies';

const Browse = () => {

    const { movies, isLoading, error } = useNowPlayingMovies();


    return (
        <div>
            <Header />
            {/* Main Container - Video Player and Video Description*/}
            <BackgroundVideo />


            {/* Movies Lists Container */}
        </div>
    )
}

export default Browse;  