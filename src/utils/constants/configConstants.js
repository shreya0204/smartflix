export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const USER_AVATAR = "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS5zyiA_uDE4vs9AaQKq7KpZzp9enMkWlZ8tEAVdupwBwH-xsA7pN7Y3cUUYWGtKARFEBN-mUEpPigEi2COFrSUSp7tf3zE.png?r=bd7"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmY2MTIyMWVlN2MyNjU4ZWQ3NjhjNjM2MTM3MTdlMCIsInN1YiI6IjY1NDM3ZDBlNmJlYWVhMDBjOWZhNzU0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XfMGa1H9N8wRKR_tTKXBaheUDB_rVxzQQr1MSqRyRoE'
    }
};

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

export const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/embed/'

export const MOVIES_BASE_URL = 'https://api.themoviedb.org/3/movie/';

export const MOVIE_SEARCH_BASE_URL = 'https://api.themoviedb.org/3/search/movie?query=';

export const SUPPORTED_LANGUAGES = [
    {
        id: 'en',
        name: 'English'
    },
    {
        id: 'hi',
        name: 'Hindi'
    },
    {
        id: 'es',
        name: 'Spanish'
    }
]

export const GPT_QUERY = "Act as a movie recommender system. Suggest some movies based on the query : ";
export const GPT_QUERY_2 = "Only give me name of 5 movies based on the query. It should be strictly comma separated. For example: The Dark Knight, The Godfather, The Shawshank Redemption, The Godfather: Part II, The Lord of the Rings: The Return of the King. If the query isn't related to movies, series or isn't appropriate, against your rules, violate rules then strictly return an empty string like this : ''";