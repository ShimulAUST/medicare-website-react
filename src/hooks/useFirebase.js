import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const signUpUsingEmailAndPass = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    const signInUsingEmailAndPass = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const signInUsinGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
        // .then(result => {
        //     console.log(result.user);
        //     setUser(result.user);
        // })
        // .catch(error => {
        //     setError(error.message);
        // })
        // .finally(() => {
        //     setIsLoading(false);
        // })


    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, []);

    return {
        user,
        error,
        isLoading,
        setIsLoading,
        setError,
        logOut,
        signInUsinGoogle,
        signUpUsingEmailAndPass,
        signInUsingEmailAndPass
    }


}

export default useFirebase;