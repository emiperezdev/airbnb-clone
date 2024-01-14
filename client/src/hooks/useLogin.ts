import { useMutation } from "@tanstack/react-query"
import loginService, { Login } from "../services/login-service"
import { useNavigate } from "react-router-dom"

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginService.post,

    onSuccess: (newLogin: Login) => {
      navigate('/');
    }
  })
}

export default useLogin;