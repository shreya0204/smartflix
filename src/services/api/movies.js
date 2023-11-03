import { API_OPTIONS, MOVIES_BASE_URL } from '../../utils/constants/urlConstants';

export const fetchAllMoviesData = async () => {

    const MOVIE_TYPES = ["popular", "top_rated", "upcoming"];

    try {
        const moviePromises = MOVIE_TYPES.map(async (type) => {

            const response = await fetch(`${MOVIES_BASE_URL}${type}?page=1`, API_OPTIONS);

            if (!response.ok) {
                throw new Error("Failed to fetch movies.");
            }

            const data = await response.json();
            return { [type]: data.results };
        });

        const moviesData = await Promise.all(moviePromises);
        const movies = Object.assign({}, ...moviesData);

        return movies;
    } catch (error) {
        throw error;
    }
};

export const getMovieTrailerById = async (movie_id) => {
    const movieVideosData = await fetch(MOVIES_BASE_URL + movie_id + '/videos', API_OPTIONS)

    const movieVideos = await movieVideosData.json()
    if (movieVideos.results && movieVideos.results.length > 0) {
        const trailerVideo = movieVideos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        return trailerVideo ? trailerVideo.key : movieVideos.results[0].key;
    }
}