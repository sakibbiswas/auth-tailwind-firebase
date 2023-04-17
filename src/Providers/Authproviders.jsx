import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

    const userinfo = {
        user,
        createuser,
        signIN,
    }

    return (
        <Authcontext.Provider value={userinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authproviders;