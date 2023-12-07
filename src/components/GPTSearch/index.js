import { useSelector } from 'react-redux';
import GPTSearchBar from './GPTSearchBar';
import GPTSuggestions from './GPTSuggestion';
import KeyInput from '../KeyInput/KeyInput';
import { useState } from 'react';

const GPTSearch = () => {

    const userGPTKey = useSelector(store => store.gpt.userGPTKey);
    const [showKeyInput, setShowKeyInput] = useState(false);

    const handleKeyInputChange = () => {
        setShowKeyInput(!showKeyInput);
    };

    return (
        <div className="bg-black bg-gradient-to-l from-gray-700 h-full">
            {
                showKeyInput || !userGPTKey ? <KeyInput onKeyChange={handleKeyInputChange} /> : <><GPTSearchBar onKeyChange={handleKeyInputChange} />
                    <GPTSuggestions /></>
            }
        </div>
    );
};

export default GPTSearch;
