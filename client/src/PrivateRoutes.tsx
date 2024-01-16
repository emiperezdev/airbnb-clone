import useUserState from "./states/useUserState";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const user = useUserState((s) => s.user);
  if (user === null) return <Navigate to="/login" />;
  
  return <Outlet />;
};
