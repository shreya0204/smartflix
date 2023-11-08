import { useDispatch, useSelector } from "react-redux";
import { lang } from "../../utils/constants/gptLanguageConstants";
import { useRef } from "react";
import { addGptResultMovies } from "../../services/redux/slices/gptSlice";
import { fetchUserQueryMovies } from "../../services/api/openai";
import { getGPTRecommendedMovies } from "../../services/api/movies";

const GPTSearchBar = () => {

    const searchText = useRef(null);
    const dispatch = useDispatch();
    const selectedLanguage = useSelector(store => store.config.preferredLanguage)

    const handleGPTSearchClick = async () => {
        const gptRecommendedMoviesArray = await fetchUserQueryMovies({ userQuery: searchText.current.value })
        if (gptRecommendedMoviesArray.length === 0) {
            dispatch(addGptResultMovies([]));
        }
        const recommendedMovies = await getGPTRecommendedMovies({ gptRecommendedMoviesArray });
        dispatch(addGptResultMovies(recommendedMovies));
    }

    return (
        <div className=" flex justify-center">
            <div className=" w-9/12 mt-32 bg-gray-500 rounded-lg bg-opacity-50">
                <form className="p-4 m-2 flex flex-row gap-4" onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <input className="w-3/4 px-2 rounded-md outline-none" placeholder={lang[selectedLanguage].searchPlaceholder} ref={searchText} />
                    <button className="w-1/4 p-3 px-4 bg-red-700 hover:bg-opacity-75 text-white rounded-md" type="submit" onClick={handleGPTSearchClick}>{lang[selectedLanguage].search}</button>
                </form>
            </div>
        </div>
    )
}

export default GPTSearchBar;