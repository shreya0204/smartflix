import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../../services/redux/userSlice';
import { LOGO_URL } from '../../utils/constants';

const Header = () => {
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
            <div className="w-screen absolute h-24 bg-gradient-to-b from-gray-900 z-10 top-0 left-0 ">
                <img
                    src={LOGO_URL}
                    alt="logo"
                    className="h-full object-contain"
                />
            </div>

            {user && (
                <div className="z-20 h-16 absolute top-0 right-0 mr-5 mt-5 cursor-pointer flex gap-4">
                    <img
                        src={user?.photoURL}
                        alt="user-icon"
                        className="h-3/4 cursor-pointer"
                    />
                    <button
                        onClick={handleSignOut}
                        className="h-fit w-fit text-center bold p-3 text-white rounded-sm bg-gray-900"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
