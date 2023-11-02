import { useEffect } from 'react';
import { getMovieTrailerById } from '../../../services/api/movies';

const BgVideo = ({ movie_id }) => {
    useEffect(() => {
        getMovieTrailerById(movie_id);
        // console.log(movieVideoData);
    }, [movie_id]);

    return (
        <div>
            <iframe

                src="https://www.youtube.com/embed/sxlDlo6iOVY?autoplay=1&mute=1&loop=1&controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};
export default BgVideo;
