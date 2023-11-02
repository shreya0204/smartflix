import { IMAGE_URL } from '../../../utils/constants';

const BgVideoInfo = ({ image_id, title, subtitle }) => {
    return (
        <div className="w-5/12 lg:w-3/12 flex flex-col gap-4 ml-8">
            <img
                src={`${IMAGE_URL}${image_id}`}
                alt="movie logo"
                className="w-full h-40"
            />
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-3xl uppercase'>{title}</h1>
                <p className='text-sm text-justify'>{subtitle}</p>
            </div>
            <div className='flex flex-row gap-3'>
                <button className='px-5 py-2 text-balck bg-white rounded-md  font-bold hover:opacity-60 outline-none'>⊵ Play</button>
                <button className='px-5 py-2 text-white bg-gray-500 rounded-md font-bold hover:opacity-60 outline-none'> 🛈 More Info</button>
            </div>
        </div>
    );
};

export default BgVideoInfo;
