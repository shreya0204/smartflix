import { API_OPTIONS, NOW_PLAYING_MOVIE_URL, VIDEO_URL } from '../../utils/constants';

export const getNowPlayingMovies = async () => {
    const moviesData = await fetch(NOW_PLAYING_MOVIE_URL, API_OPTIONS)

    const movies = await moviesData.json()
    return movies.results;
}


export const getMovieTrailerById = async (movie_id) => {
    const movieVideosData = await fetch(VIDEO_URL + movie_id + '/videos', API_OPTIONS)

    const movieVideos = await movieVideosData.json()
    if (movieVideos.results && movieVideos.results.length > 0) {
        // Find the first YouTube trailer video, if available
        const trailerVideo = movieVideos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        return trailerVideo ? trailerVideo.key : movieVideos.results[0].key;
    }
}