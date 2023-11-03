import GPTSearchBar from './GPTSearchBar';
import GPTSuggestions from './GPTSuggestion';

const GPTSearch = () => {
    return (
        <div className="h-screen bg-black bg-gradient-to-l from-gray-700">
            <GPTSearchBar />
            <GPTSuggestions />
        </div>
    );
};

export default GPTSearch;
