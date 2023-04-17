import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firbase.config';
export const Authcontext = createContext(null)

const auth = getAuth(app);

const Authproviders = ({ children }) => {

    // const user = { displayname: 'sagor nodi' }
    const [user, setuser] = useState(null)

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIN = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            console.log('auth state change', currentuser);
            setuser(currentuser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const userinfo = {
        user,
        createuser,
        signIN,
        logOut,
    }

    return (
        <Authcontext.Provider value={userinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authproviders;