import { useQuery } from "@tanstack/react-query";
import profileService from "../services/profile-service";
import ms from "ms";
import { User } from "../services/users-service";

const useProfile = () =>
  useQuery<User, Error>({
    queryKey: ["profile"],
    queryFn: profileService.get,
    staleTime: ms("5s"),
  });

export default useProfile;
