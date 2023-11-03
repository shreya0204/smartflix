import { useSelector } from "react-redux";
import { lang } from "../../utils/constants/gptLanguageConstants";


const GPTSearchBar = () => {

    const selectedLanguage = useSelector(store => store.config.preferredLanguage)

    return (
        <div className=" flex justify-center">
            <div className=" w-9/12 mt-32 bg-gray-500 rounded-lg bg-opacity-50">
                <form className="p-4 m-2 flex flex-row gap-4">
                    <input className="w-3/4 px-2 rounded-md outline-none" placeholder={lang[selectedLanguage].searchPlaceholder} />
                    <button className="w-1/4 p-3 px-4 bg-red-700 hover:bg-opacity-75 text-white rounded-md">{lang[selectedLanguage].search}</button>
                </form>
            </div>
        </div>
    )
}

export default GPTSearchBar;