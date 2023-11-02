import { API_OPTIONS } from '../../utils/constants';

export const getNowPlayingMovies = async () => {
    const moviesData = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)

    const data = await moviesData.json()
    return data.results;
}

