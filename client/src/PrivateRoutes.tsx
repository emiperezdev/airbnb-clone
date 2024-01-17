import useUserState from "./states/useUserState";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const user = useUserState((s) => s.user);
  if (!user || !user.name) return <Navigate to="/login" />;
  
  return <Outlet />;
};
