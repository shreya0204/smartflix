import { API_OPTIONS, MOVIES_BASE_URL, MOVIE_SEARCH_BASE_URL, MOVIE_TYPES } from '../../utils/constants/configConstants';

export const fetchAllMoviesData = async () => {
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

export const getMovieDetailsById = async (movie_id) => {
    const movieDetailsData = await fetch(MOVIES_BASE_URL + movie_id, API_OPTIONS)

    const movieDetails = await movieDetailsData.json()
    return movieDetails;
}

const searchGPTMovie = async (movieName) => {
    const data = await fetch(`${MOVIE_SEARCH_BASE_URL}${movieName}`, API_OPTIONS)
    const movie = await data.json();
    return movie?.results[0];
}

export const getGPTRecommendedMovies = async ({ gptRecommendedMoviesArray }) => {
    const promiseResultArray = gptRecommendedMoviesArray.map(movie => searchGPTMovie(movie));

    const results = await Promise.allSettled(promiseResultArray);
    const successfulResults = results
        .filter(result => result.status === 'fulfilled' && result.value)
        .map(result => result.value);

    return successfulResults;
}
