import { useMutation } from "@tanstack/react-query";
import logoutService from "../services/logout-service";
import { useNavigate } from "react-router-dom";
import useUserState from "../states/useUserState";

const useLogout = () => {
  const navigate = useNavigate();
  const setUser = useUserState((s) => s.setUser);

  return useMutation({
    mutationFn: logoutService.post,

    onSuccess: () => {
      setUser();
      navigate("/");
    },
  });
};

export default useLogout;
