import { useMutation } from "@tanstack/react-query"
import loginService, { Login } from "../services/login-service"

const useLogin = () => {
  return useMutation({
    mutationFn: loginService.post,

    onSuccess: (newLogin: Login) => {
      console.log(newLogin);
    }
  })
}

export default useLogin;