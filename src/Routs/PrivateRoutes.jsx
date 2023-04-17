import React, { useContext } from 'react';
import { Authcontext } from '../Providers/Authproviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(Authcontext)
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' replace={true}></Navigate>
}
export default PrivateRoutes;