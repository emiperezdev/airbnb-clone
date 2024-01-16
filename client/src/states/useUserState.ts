import { create } from "zustand";
import { User } from "../services/users-service";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface UserStateAction {
  user: User | null;
  setUser: (userInfo?: User) => void;
}

const useUserState = create<UserStateAction>((set) => ({
  user: null,
  setUser: (userInfo) => set(() => ({ user: userInfo })),
}));

if (process.env.NODE_ENV === 'development')
  mountStoreDevtool('User State', useUserState);

export default useUserState;
