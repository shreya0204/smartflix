import { useEffect, useState } from 'react';
import { getMovieTrailerById } from '../../../services/api/movies';
import { YOUTUBE_VIDEO_URL } from '../../../utils/constants/urlConstants';

const BgVideo = ({ movie_id }) => {

    const [trailerId, setTrailerId] = useState(null);

    useEffect(() => {
        getMovieTrailerById(movie_id).then(trailerId => setTrailerId(trailerId));
    }, [movie_id]);

    return (
        <div className='relative w-full h-screen'>
            <iframe
                className='w-full h-full '
                src={`${YOUTUBE_VIDEO_URL}${trailerId}?autoplay=1&vq=hd720&mute=1&disablekb=1&showinfo=0&logo=0&controls=0&autohide=1&modestbranding=0&rel=0&loop=1&playlist=${trailerId}`}
                title="YouTube video player"
            ></iframe>
        </div >
    );
};
export default BgVideo;
