import { USER_AVATAR } from '../../utils/constants/urlConstants';
import { auth } from './index';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const signIn = async (isSignIn, name, email, password) => {
    try {
        const userCredential = isSignIn
            ? await signInWithEmailAndPassword(auth, email, password)
            : await createUserWithEmailAndPassword(auth, email, password);

        console.log("User Credentials", userCredential);

        if (!isSignIn) {
            // Wait for the user profile update to complete before returning the user
            const updatedUser = await updateUserProfile(userCredential.user, name);
            console.log("Updated User", updatedUser);
            return { user: updatedUser };
        }

        // For sign-in, return the user directly
        return { user: userCredential.user };
    } catch (error) {
        // Return both error message and code
        return { error: error.message, errorCode: error.code };
    }
};

export const updateUserProfile = async (user, name) => {
    try {
        // Update the user's profile
        await updateProfile(user, {
            displayName: name,
            photoURL: USER_AVATAR,
        });
        return { user: { ...user, displayName: name, photoURL: user.photoURL } };
    } catch (error) {
        return { error: error.message, errorCode: error.code };
    }
};
