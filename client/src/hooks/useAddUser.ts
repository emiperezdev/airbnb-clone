import { useMutation } from "@tanstack/react-query";
import usersService, { User } from "../services/users-service";

interface AddUserContext {
  previousUsers: User[];
}

const useAddUser = () => {
  return useMutation<User, Error, User, AddUserContext>({
    mutationFn: usersService.post,

    onSuccess: (savedUser: User) => {
      console.log(savedUser);
    },
  });
};

export default useAddUser;
