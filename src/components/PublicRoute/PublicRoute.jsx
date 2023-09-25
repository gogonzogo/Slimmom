// external
import { Navigate } from 'react-router-dom';

//internal
import { useAuth } from '../../hooks/useAuth';

const PublicRoute = ({ children }) => {
    const {loggedIn} = useAuth();
    return (
        <div>
            {!loggedIn ? children : <Navigate to="/diary" replace/>}
        </div>)
};

export default PublicRoute;