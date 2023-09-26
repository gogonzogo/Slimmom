//external
import { Navigate } from 'react-router-dom';

//internal
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const {loggedIn} = useAuth();
    return (
        <>
            {loggedIn ? children : <Navigate to="/" />}
        </>)
};

export default PrivateRoute;