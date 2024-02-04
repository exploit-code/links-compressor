import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../../store/hooks";

export interface IProtectedRouteProps {
  children: JSX.Element;
  anonymous: boolean;
}

export const ProtectedRoute = ({ children, anonymous = false }: IProtectedRouteProps) => {
  const { authorized } = useSelector((store) => store.auth);
  const location = useLocation();
  const from = location.state?.from || "/";

  if (anonymous && authorized) return <Navigate to={from} />;
  else if (!anonymous && !authorized) return <Navigate to="/login" state={{ from: location }} />;
  else return children;
};
