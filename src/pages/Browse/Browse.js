import { useState } from 'react';
import BackgroundVideo from '../../components/Browse/Hero';
import MovieList from '../../components/Browse/MoviesList';
import Header from '../../components/Header/Navbar';
import useAllMovies from '../../hooks/useAllMovies';
import GPTSearch from '../../components/GPTSearch';
import Modal from '../../components/Modal/Modal';
import { getMovieDetailsById } from '../../services/api/movies';

const Browse = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

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

    const handleMovieClick = async (movie) => {
        const selectedMovie = await getMovieDetailsById(movie.id);
        setSelectedMovie(selectedMovie);
        setIsModalOpen(true);
    };

    return (
        <div className='h-screen'>
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
                                onMovieClick={handleMovieClick}
                            />
                        ))}
                        {isModalOpen && <Modal movie={selectedMovie} onClose={() => setIsModalOpen(false)} />}
                    </div></>
            }
        </div>
    );
};

export default Browse;
