import { useState } from 'react';
import Header from '../../components/Header/Header';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div className="relative">
            <Header />
            <div className="bg-cover bg-no-repeat bg-clip-border">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="login_background_image"
                />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <div className=" w-6/12 lg:w-4/12 lg:h-fit p-12 bg-black bg-opacity-75">
                    <form className="flex flex-col justify-between items-center ">

                        {
                            !isSignIn && <input
                                type="text"
                                placeholder="Name"
                                className="p-2 m-2 w-8/12 outline-none bg-[#333333] text-white"
                            />
                        }
                        <input
                            type="email"
                            placeholder="Email or phone number"
                            className="p-2 m-2 w-8/12 outline-none bg-[#333333] text-white"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-2 m-2 w-8/12 outline-none bg-[#333333] text-white"
                        /> 
                        <button className="p-3 m-4 w-8/12 bg-red-600 text-white rounded-md">
                            {isSignIn ? "Sign in now" : "Sign up now"}
                        </button>
                        <div className='mt-4'>
                            <span className="text-white">
                                {isSignIn ? "New to Netflix?" : "Already have an account?"}
                            </span>
                            <span className="text-red-600 cursor-pointer mx-2" onClick={toggleSignInForm}>
                                {isSignIn ? "Sign up now" : "Sign in"}
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
