import { create } from "zustand";
import { User } from "../services/users-service";

interface UserStateAction {
  user: User;
  setUser: (userInfo: User) => void;
}

const useUserState = create<UserStateAction>((set) => ({
  user: {} as User,
  setUser: (userInfo: User) => set(() => ({ user: userInfo })),
}));

export default useUserState;
