import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import loginService from "../services/login-service";
import useUserState from "../states/useUserState";
import { User } from "../services/users-service";

const useLogin = () => {
  const navigate = useNavigate();
  const setUser = useUserState((s) => s.setUser);

  return useMutation({
    mutationFn: loginService.post,

    onSuccess: (user: User) => {
      setUser(user);
      navigate("/");
    },
  });
};

export default useLogin;
