import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AlreadySigninRoute = ({ children }) => {
  const { token } = useAuth();
  return <>{!token ? children : <Navigate to="/" />}</>;
};

export default AlreadySigninRoute;
