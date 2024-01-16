import APIClient from "./api-client";
import { User } from "./users-service";

export default new APIClient<User>('/profile');