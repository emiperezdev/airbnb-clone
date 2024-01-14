import { useMutation, useQueryClient } from "@tanstack/react-query";
import usersService, { User } from "../services/users-service";
import { CACHE_KEY_USERS } from "../constants";

interface AddUserContext {
  previousUsers: User[];
}

const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, User, AddUserContext>({
    mutationFn: usersService.post,

    onSuccess: (savedUser: User, newUser: User) => {
      queryClient.setQueryData<User[]>(CACHE_KEY_USERS, (users) =>
        users?.map((user) => (user === newUser ? savedUser : user))
      );
    },

    onError: (error, newUser, context) => {
      if (!context) return;

      queryClient.setQueryData<User[]>(CACHE_KEY_USERS, context.previousUsers);
    },
  });
};

export default useAddUser;
