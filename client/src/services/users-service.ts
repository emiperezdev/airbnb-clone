import APIClient from "./api-client";

export interface User {
  name: string;
  email: string;
  password: string;
}

export default new APIClient<User>('/register');