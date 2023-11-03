import Header from '../../components/Header/Header';
import LoginForm from '../../components/Login/LoginForm';
import { BG_URL } from '../../utils/constants/urlConstants';

const Login = () => {

    return (

        <div className="relative w-screen h-screen overflow-hidden">
            <Header />
            <img
                src={BG_URL}
                alt="login_background_image"
                className="absolute w-full h-full object-cover z-0"
            />
            <LoginForm />
        </div>

    );
};

export default Login;
