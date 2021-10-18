import { useEffect, useState } from "react"
import initializAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

initializAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsinGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside');
                setUser(user);
            }

        })
    }, []);
    return {
        user,
        error,
        logOut,
        signInUsinGoogle
    }


}

export default useFirebase;