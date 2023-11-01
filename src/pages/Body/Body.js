import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { appRoutes } from "../../routes/routes";
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../../services/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../../services/redux/userSlice'

const Body = () => {
    const dispatch = useDispatch();
    const router = createBrowserRouter(appRoutes);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //sign in 
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }))
            } else {
                // sign out
                dispatch(removeUser())
            }
        })
    }, []);


    return (
        <RouterProvider router={router} />
    )
}

export default Body;