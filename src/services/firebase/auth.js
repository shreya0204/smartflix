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
            photoURL: "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS5zyiA_uDE4vs9AaQKq7KpZzp9enMkWlZ8tEAVdupwBwH-xsA7pN7Y3cUUYWGtKARFEBN-mUEpPigEi2COFrSUSp7tf3zE.png?r=bd7"
        });
        return { user: { ...user, displayName: name, photoURL: user.photoURL } };
    } catch (error) {
        return { error: error.message, errorCode: error.code };
    }
};
