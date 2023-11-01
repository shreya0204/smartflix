import { auth } from './index';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const signIn = async (isSignIn, email, password) => {
    try {
        let userCredential;
        if (isSignIn) {
            userCredential = await signInWithEmailAndPassword(auth, email, password);
        } else {
            userCredential = await createUserWithEmailAndPassword(auth, email, password);
        }
        return { user: userCredential.user };
    } catch (error) {
        return { error: error.message, errorCode: error.code };
    }
};
