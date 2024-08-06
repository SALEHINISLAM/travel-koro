import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location=useLocation();
    if (loading) {
        <div className="min-h-screen w-screen bg-white">
        <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to={`/login`} state={location.pathname}/>
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.object,
};

export default PrivateRoutes;