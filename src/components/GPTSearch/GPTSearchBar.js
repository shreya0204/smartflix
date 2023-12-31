import { useSelector } from "react-redux";
import { lang } from "../../utils/constants/gptLanguageConstants";
import { useRef } from "react";
import useGPTSearch from "../../hooks/useGPTSearch";

const GPTSearchBar = ({ onKeyChange }) => {
    const searchText = useRef(null);
    const selectedLanguage = useSelector(store => store.config.preferredLanguage);
    const { handleGPTSearch, isSearching, error, setError } = useGPTSearch(); // Use custom hook

    const handleInputChange = () => {
        if (error) setError("");
    };

    const handleUpdateKey = () => {
        onKeyChange()
    }

    const onSearchClick = () => {
        handleGPTSearch(searchText.current.value);
    };

    return (
        <div className="flex justify-center">
            <div className="w-10/12 mt-32 bg-gray-500 rounded-lg bg-opacity-50">
                <form className="p-4 m-2 flex sm:flex-row flex-col gap-4 items-center" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="w-full sm:w-3/4 px-2 py-3 rounded-md outline-none"
                        placeholder={lang[selectedLanguage].searchPlaceholder}
                        ref={searchText}
                        onChange={handleInputChange}
                    />
                    <button
                        className={`w-full sm:w-fit p-3 px-16 ${isSearching ? 'bg-gray-400' : 'bg-red-700 hover:bg-opacity-75'} text-white rounded-md`}
                        type="submit"
                        onClick={onSearchClick}
                        disabled={isSearching}
                    >
                        {isSearching ? 'Loading' : lang[selectedLanguage].search}
                    </button>
                    <p className="text-white text-sm w-fit sm:border sm:border-white py-3 px-2 hover:bg-gray-500 cursor-pointer" onClick={handleUpdateKey}>
                        Update Key</p>
                </form>
                {error && <p className="text-red-500 m-2 px-4">{error}</p>}
            </div>
        </div>
    );
};
export default GPTSearchBar;
