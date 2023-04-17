import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Providers/Authproviders';

const Header = () => {
    const { user, logOut } = useContext(Authcontext)
    console.log(logOut);
    const handelLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }
    return (
        <div >
            <h2>this is header</h2>

            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth master</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/order">Orders</Link>
                {
                    user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>
                }
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handelLogout} className="btn btn-xs">signOut</button>
                    </> :
                        <Link to='/login'>Login</Link>

                }
            </div>




        </div>
    );
};

export default Header;