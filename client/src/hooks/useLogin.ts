import { useMutation } from "@tanstack/react-query"
import loginService from "../services/login-service"
import { useNavigate } from "react-router-dom"
import { User } from "../services/users-service";
import useUserState from "../states/useUserState";

const useLogin = () => {
  const navigate = useNavigate();
  const setUser = useUserState(s => s.setUser);

  return useMutation({
    mutationFn: loginService.post,

    onSuccess: (registeredUser: User) => {
      setUser(registeredUser);
      navigate('/');
    }
  })
}

export default useLogin;