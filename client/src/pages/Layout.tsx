import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { axiosInstance } from "../services/api-client";
import { User } from "../services/users-service";
import useUserState from "../states/useUserState";

export const Layout = () => {
  const user = useUserState((s) => s.user);
  const setUser = useUserState((s) => s.setUser);

  useEffect(() => {
    if (!user) {
      axiosInstance.get<User>("/profile").then((res) => setUser(res.data));
    }
  }, []);

  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};
