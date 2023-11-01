import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            navigate('/error');
        }
    };

    return (
        <div>
            <div className="w-screen absolute h-24 bg-gradient-to-b from-gray-900 z-10 top-0 left-0 ">
                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="logo" className="h-full object-contain" />
            </div>

            {user && <div className="z-20 h-16 absolute top-0 right-0 mr-5 mt-5 cursor-pointer flex gap-4">
                <img src={user?.photoURL}
                    alt="user-icon"
                    className="h-3/4 cursor-pointer"
                />
                <button onClick={handleSignOut} className="h-fit w-fit text-center bold p-3 bg-red-500 text-white rounded-md">Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;