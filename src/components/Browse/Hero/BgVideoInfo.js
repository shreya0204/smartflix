import { IMAGE_URL } from '../../../utils/constants/configConstants';

const BgVideoInfo = ({ image_id, title, subtitle }) => {
    return (
        <div className="p-4 absolute top-1/2 w-fit lg:w-4/12 h-fit flex flex-col sm:gap-4 lg:gap-10 lg:translate-x-14 -translate-y-1/2 z-10 text-white lg:p-8 rounded-lg bg-gray-800 bg-opacity-40 hover:bg-opacity-25 transition-all 0.5s ease-in-out">

            <div className='transition-opacity duration-1000 ease-in-out'>
                <img
                    src={`${IMAGE_URL}${image_id}`}
                    alt="movie logo"
                    className="max-h-20 sm:max-h-36 lg:max-h-56 aspect-auto object-contain "
                />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold sm:text-3xl uppercase'>{title}</h1>
                <p className='sm:text-sm text-[10px] text-justify w-3/4'>{subtitle}</p>
            </div>
            <div className='flex flex-row gap-3'>
                <button className='sm:px-5 px-2 py-2 text-black bg-white rounded-md  sm:font-bold hover:opacity-60 outline-none'>⊵ Play</button>
                <button className='sm:px-5 px-2 py-2 text-white bg-gray-500 rounded-md sm:font-bold hover:opacity-60 outline-none'> 🛈 More Info</button>
            </div>
        </div>
    );
};

export default BgVideoInfo;
