import { useEffect, useRef } from "react";
import { addUserGPTKey } from "../../services/redux/slices/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import { initializeOpenAI } from "../../services/openai/openai";

const KeyInput = () => {
    const dispatch = useDispatch();
    const inputKey = useRef(null);
    const userGPTKey = useSelector(store => store.gpt.userGPTKey);

    const onSumbitClick = (e) => {
        e.preventDefault();
        dispatch(addUserGPTKey(inputKey.current.value));
    }
    useEffect(() => {
        if (userGPTKey) {
            initializeOpenAI(userGPTKey);
        }
    }, [userGPTKey]);

    return (
        <div className="flex justify-center">
            <div className="w-9/12 mt-32 bg-gray-500 rounded-lg bg-opacity-50">
                <form className="p-4 m-2 flex flex-row gap-4">
                    <input
                        className="w-3/4 px-2 rounded-md outline-none"
                        placeholder="Enter your GPT key here to enjoy!"
                        ref={inputKey}
                    />
                    <button
                        className={`w-1/4 p-3 px-4 bg-red-700 hover:bg-opacity-75 text-white rounded-md`}
                        type="submit"
                        onClick={(e) => onSumbitClick(e)}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default KeyInput;