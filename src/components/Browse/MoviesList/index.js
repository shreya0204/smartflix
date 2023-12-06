import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, isLoading, onMovieClick }) => {

    return (
        <div className="flex flex-col gap-4 bg-transparent pl-14 -translate-y-3/4 lg:-translate-y-2/3" >
            < div >
                <h1 className="text-white font-semibold text-lg ">{title}</h1>
            </div >
            <div className="flex flex-row gap-2 overflow-x-scroll scrollbar-hide">
                {
                    movies?.map((movie) => {
                        return <MovieCard key={movie.id} movie={movie} imageId={movie.backdrop_path} onClick={() => onMovieClick(movie)} />
                    })
                }
            </div>
        </div >
    )
}

export default MovieList;