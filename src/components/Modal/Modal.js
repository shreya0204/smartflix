import { FcRating } from "react-icons/fc";
import { MdReviews } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import React, { useEffect, useRef } from 'react';
import { IMAGE_URL } from "../../utils/constants/configConstants";
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../services/redux/slices/modalSlice';

const Modal = () => {
    const dispatch = useDispatch();
    const modalRef = useRef();
    const { isOpen, movie } = useSelector(state => state.modal);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            dispatch(closeModal());
        }
    };
    const handleClose = () => {
        dispatch(closeModal());
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!movie) return null;
    const { original_title, title, release_date, overview, genres, backdrop_path, poster_path, vote_average, vote_count } = movie;
    if (!isOpen) return null;
    return (
        <div className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none text-white">
            <div className="relative w-9/12" ref={modalRef}>
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-950 outline-none focus:outline-none">
                    <div
                        style={{
                            backgroundImage: `url('${IMAGE_URL}${backdrop_path}')`
                        }}
                        className={`flex flex-row justify-end bg-cover bg-no-repeat w-full object-cover h-36 bg-center rounded-t-lg border-b`}>
                        <div className="p-2 cursor-pointer" onClick={handleClose}>
                            <IoIosCloseCircle className="text-5xl text-white" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-full flex flex-row justify-between items-start h-full">
                            <div className="relative w-5/12 p-10 pb-0 -top-10">
                                <img src={`${IMAGE_URL}${poster_path}`} alt="poster" className="z-10 h-[400px] w-[300px] -mt-10 border-2" />
                            </div>
                            <div className="w-7/12 flex flex-col gap-6 pt-20 pb-10 pr-10">
                                <p className="text-5xl font-semibold tracking-wider text-gray-300">{original_title ? original_title : title}</p>
                                <p className="text-[15px] text-gray-500">{overview} </p>
                                <p className="w-fit p-2 pl-0 text-gray-400">Release Date: {release_date} </p>
                                <div className="flex flex-row gap-4 flew">
                                    {
                                        genres?.length > 0 && genres.map((genre) => {
                                            return <p key={genre.id} className="w-fit border border-gray-600 bg-gray-700 bg-opacity-30 text-white px-6 py-2 text-[14px]">{genre.name}</p>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="w-5/12 flex items-center justify-start pb-8 pl-10">
                            <div className="flex flex-row gap-10 ">
                                <div className="flex flex-row gap-3 items-center justify-center">
                                    <FcRating className="text-3xl opacity-70" />
                                    <p className="text-xl text-gray-400">{vote_average}</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-center">
                                    <MdReviews className="text-3xl opacity-75 text-blue-500" />
                                    <p className="text-xl text-gray-400">{vote_count}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Modal;