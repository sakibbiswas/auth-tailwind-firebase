import React, { useContext } from 'react';
import { Authcontext } from '../Providers/Authproviders';

const Home = () => {

    const { user } = useContext(Authcontext)
    console.log(user);
    return (
        <div>
            <h2>This is home {user && <span>{user.displayname}</span>}</h2>
        </div>
    );
};

export default Home;