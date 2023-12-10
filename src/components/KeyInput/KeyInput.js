import { useEffect, useRef } from "react";
import { addUserGPTKey } from "../../services/redux/slices/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import { initializeOpenAI } from "../../services/openai/openai";

const KeyInput = ({ onKeyChange }) => {
    const dispatch = useDispatch();
    const inputKey = useRef(null);
    const userGPTKey = useSelector(store => store.gpt.userGPTKey);

    const onSumbitClick = (e) => {
        e.preventDefault();
        localStorage.setItem('userGPTKey', JSON.stringify(inputKey.current.value));
        dispatch(addUserGPTKey(inputKey.current.value));
        onKeyChange();
    }
    useEffect(() => {
        if (userGPTKey) {
            initializeOpenAI(userGPTKey);
        }
    }, [userGPTKey]);

    return (
        <div className="flex justify-center">
            <div className="w-10/12 mt-32 bg-gray-500 rounded-lg bg-opacity-50">
                <form className="p-4 m-2 flex sm:flex-row flex-col gap-4 items-center justify-center">
                    <input
                        className="w-full sm:w-3/4 px-2 py-3 rounded-md outline-none"
                        placeholder={userGPTKey ? `You previous Key : ${userGPTKey}` : "Enter your GPT key here to enjoy!"}
                        ref={inputKey}
                    />
                    <button
                        className={`w-full sm:w-fit p-3 px-16 bg-red-700 hover:bg-opacity-75 text-white rounded-md`}
                        type="submit"
                        onClick={(e) => onSumbitClick(e)}
                    >
                        Submit
                    </button>
                    {
                        userGPTKey && <p className="text-white text-sm w-fit sm:border border-white py-3 px-2 hover:bg-gray-500 cursor-pointer"
                            onClick={onKeyChange}
                        >
                            Go Back
                        </p>
                    }
                </form>
            </div>
        </div>
    )
}

export default KeyInput;