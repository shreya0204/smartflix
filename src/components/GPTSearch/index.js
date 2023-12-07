import { useSelector } from 'react-redux';
import GPTSearchBar from './GPTSearchBar';
import GPTSuggestions from './GPTSuggestion';
import KeyInput from '../KeyInput/KeyInput';

const GPTSearch = () => {

    const userGPTKey = useSelector(store => store.gpt.userGPTKey);
    return (
        <div className="bg-black bg-gradient-to-l from-gray-700 h-full">
            {
                !userGPTKey ? <KeyInput /> : <><GPTSearchBar />
                    <GPTSuggestions /></>
            }
        </div>
    );
};

export default GPTSearch;
