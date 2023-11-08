import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../../services/redux/slices/userSlice';
import { LOGO_URL } from '../../utils/constants/configConstants';
import LanguageDropDown from './LanguageDropDown';

const Header = ({ showSearch, setShowSearch }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            navigate('/error');
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //sign in
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate('/browse');
            } else {
                // sign out
                dispatch(removeUser());
                navigate('/');
            }
        });

        return () => {
            // clean up - unsubscribe when component is unmount
            unsubscribe();
        }
    }, []);

    return (
        <div>
            <div className={`w-full absolute h-24 bg-gradient-to-b from-gray-900 z-20 top-0 left-0 ${user ? 'bg-gray-950' : ''}`}>
                <img
                    src={LOGO_URL}
                    alt="logo"
                    className="h-full object-contain"
                />
            </div>

            {
                user && (
                    <div className="z-20 h-16 absolute top-0 right-0 mr-5 mt-5 cursor-pointer flex gap-4">
                        {
                            showSearch && <LanguageDropDown />
                        }
                        <button className="h-fit w-fit text-center font-semibold p-3 text-white rounded-sm hover:bg-gray-300 hover:text-gray-900 transition-all 1.5s ease-in-out" onClick={
                            () => setShowSearch(!showSearch)
                        }>
                            {showSearch ? 'Go Back' : 'GPT Search'}
                        </button>
                        <div>
                            <img
                                src={user?.photoURL}
                                alt="user-icon"
                                className="h-3/4 cursor-pointer"
                            />
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="h-fit w-fit text-center bold p-3 text-white rounded-sm bg-gray-700"
                        >
                            Sign Out
                        </button>
                    </div>
                )
            }
        </div >
    );
};

export default Header;
