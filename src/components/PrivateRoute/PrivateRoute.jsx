//external
import { Navigate } from 'react-router-dom';

//internal
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const {loggedIn} = useAuth();
    return (
        <div>
            {loggedIn ? children : <Navigate to="/" />}
        </div>)
};

export default PrivateRoute;