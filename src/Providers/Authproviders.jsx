import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firbase.config';
export const Authcontext = createContext(null)

const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const Authproviders = ({ children }) => {

    // const user = { displayname: 'sagor nodi' }
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIN = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInwithgoogle = () => {
        return signInWithPopup(auth, googleprovider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            console.log('auth state change', currentuser);
            setuser(currentuser)
            setloading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const userinfo = {
        user,
        loading,
        createuser,
        signIN,
        signInwithgoogle,
        logOut,
    }

    return (
        <Authcontext.Provider value={userinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authproviders;