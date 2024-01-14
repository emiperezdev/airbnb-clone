import APIClient from "./api-client";

export interface Login {
  email: string;
  password: string;
}

export default new APIClient<Login>('/login');