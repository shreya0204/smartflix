import Header from '../../components/Header/Header';
import LoginForm from '../../components/Login/LoginForm';

const Login = () => {

    return (

        <div className="relative w-screen h-screen overflow-hidden">
            <Header />
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt="login_background_image"
                className="absolute w-full h-full object-cover z-0"
            />
            <LoginForm />
        </div>

    );
};

export default Login;
