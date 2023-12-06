import Modal from '../Modal/Modal';
import GPTSearchBar from './GPTSearchBar';
import GPTSuggestions from './GPTSuggestion';

const GPTSearch = () => {
    return (
        <div className="bg-black bg-gradient-to-l from-gray-700 h-full">
            <GPTSearchBar />
            <GPTSuggestions />
            <Modal />
        </div>
    );
};

export default GPTSearch;
