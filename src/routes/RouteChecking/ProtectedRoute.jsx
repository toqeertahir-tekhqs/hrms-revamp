import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.states.token);
  return auth ? <Navigate to="/" /> : children;
};

export default ProtectedRoute;
