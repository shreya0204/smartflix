import { useDispatch, useSelector } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../../utils/constants/urlConstants";
import { setPreferredLanguage } from '../../services/redux/slices/configSlice';

const LanguageDropDown = () => {

    const dispatch = useDispatch();

    const handleLanguageChange = (event) => {
        const { value } = event.target;
        dispatch(setPreferredLanguage(value));
    }

    return (

        <div >
            <select className=" p-2 m-2 rounded-sm outline-none text-white border-gray-200 border border-opacity-50 bg-transparent" onChange={handleLanguageChange}>
                {
                    SUPPORTED_LANGUAGES.map((language) => (
                        <option value={language.id} key={language.id} className="bg-transparent text-gray-900">
                            {language.name}
                        </option>
                    ))
                }

            </select>
        </div >


    )
}

export default LanguageDropDown;