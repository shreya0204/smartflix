import { IMAGE_URL } from '../../../utils/constants/configConstants';

const BgVideoInfo = ({ image_id, title, subtitle }) => {
    return (
        <div className="absolute top-1/2 w-5/12 lg:w-4/12 h-fit flex flex-col gap-4 lg:gap-10 translate-x-14 -translate-y-1/2 z-10 text-white p-8 rounded-lg bg-gray-800 bg-opacity-40 hover:bg-opacity-25 transition-all 0.5s ease-in-out">

            <div className='transition-opacity duration-1000 ease-in-out'>
                <img
                    src={`${IMAGE_URL}${image_id}`}
                    alt="movie logo"
                    className="max-h-36 lg:max-h-56 max-w-full aspect-auto object-contain "
                />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-3xl uppercase'>{title}</h1>
                <p className='text-sm text-justify'>{subtitle}</p>
            </div>
            <div className='flex flex-row gap-3'>
                <button className='px-5 py-2 text-black bg-white rounded-md  font-bold hover:opacity-60 outline-none'>⊵ Play</button>
                <button className='px-5 py-2 text-white bg-gray-500 rounded-md font-bold hover:opacity-60 outline-none'> 🛈 More Info</button>
            </div>
        </div>
    );
};

export default BgVideoInfo;
