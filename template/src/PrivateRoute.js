import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider'; // adjust this import to your actual auth context

function PrivateRoute({ path, element }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Route path={path} element={element} /> : <Navigate to="/login" />;
}

export default PrivateRoute;