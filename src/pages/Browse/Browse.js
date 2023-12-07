import { useEffect, useState } from 'react';
import BackgroundVideo from '../../components/Browse/Hero';
import MovieList from '../../components/Browse/MoviesList';
import Header from '../../components/Header/Navbar';
import useAllMovies from '../../hooks/useAllMovies';
import GPTSearch from '../../components/GPTSearch';
import Modal from '../../components/Modal/Modal';
import { addUserGPTKey } from '../../services/redux/slices/gptSlice';
import { useDispatch } from 'react-redux';

const Browse = () => {
    const dispatch = useDispatch();
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

    useEffect(() => {
        const key = localStorage.getItem('userGPTKey');
        console.log(key);
        if (key) {
            dispatch(addUserGPTKey(key));
        }
    }, [dispatch]);

    return (
        <div className='h-screen'>
            <Modal />
            <Header showSearch={showSearch} setShowSearch={setShowSearch} />
            {
                showSearch ? <GPTSearch /> : <><BackgroundVideo />
                    <div className='bg-gray-800 flex flex-col gap-4'>
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
                </>
            }
        </div>
    );
};

export default Browse;
