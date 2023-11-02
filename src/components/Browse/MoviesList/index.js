import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

    console.log("MovieList", title, movies);

    return (
        <div className="flex flex-col gap-2 bg-transparent p-6 -translate-y-2/3" >
            < div >
                <h1 className="text-white font-semibold">{title}</h1>
            </div >
            <div className="flex flex-row gap-2 overflow-x-scroll">
                {
                    movies?.map((movie) => {
                        return <MovieCard key={movie.id} imageId={movie.backdrop_path} />
                    })
                }
            </div>
        </div >
    )
}

export default MovieList;