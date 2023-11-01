import { useRef, useState } from 'react';
import { checkValiddata } from '../../utils/validate';
const LoginForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessages, setErrorMessages] = useState({
        email: '',
        password: '',
    });
    const email = useRef();
    const password = useRef();

    const handleSigninSignupButton = () => {
        setErrorMessages(checkValiddata(email, password));
    };
    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    };
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className=" w-6/12 lg:w-4/12 lg:h-fit p-12 bg-black bg-opacity-75">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col justify-between items-center gap-2"
                >
                    {!isSignIn && (
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-2 m-2 w-8/12 outline-none bg-[#333333] text-white"
                        />
                    )}

                    <div className="w-8/12 justify-start ">
                        <input
                            ref={email}
                            type="email"
                            placeholder="Email or phone number"
                            className="w-full p-2 outline-none bg-[#333333] text-white"
                        />
                        <p className="text-red-600 text-sm italic mt-1 mb-2">
                            {errorMessages.email}
                        </p>
                    </div>
                    <div className="w-8/12 justify-start ">
                        <input
                            ref={password}
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 outline-none bg-[#333333] text-white"
                        />
                        <p className="text-red-600 text-sm italic mt-1 mb-2">
                            {errorMessages.password}
                        </p>
                    </div>
                    <button
                        className="p-3 m-4 w-8/12 bg-red-600 text-white rounded-md"
                        onClick={handleSigninSignupButton}
                    >
                        {isSignIn ? 'Sign in now' : 'Sign up now'}
                    </button>
                    <div className="mt-4">
                        <span className="text-white">
                            {isSignIn ? 'New to Netflix?' : 'Already have an account?'}
                        </span>
                        <span
                            className="text-red-600 cursor-pointer mx-2"
                            onClick={toggleSignInForm}
                        >
                            {isSignIn ? 'Sign up now' : 'Sign in'}
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
