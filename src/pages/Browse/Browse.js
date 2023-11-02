import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { getNowPlayingMovies } from '../../services/api/movies';

const Browse = () => {

    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        setMoviesData(getNowPlayingMovies());
    }, [])

    return (
        <div>
            <Header />
        </div>
    )
}

export default Browse;