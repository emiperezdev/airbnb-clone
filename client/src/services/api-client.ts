import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosInstance.defaults.withCredentials = true;

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = () => {
    return axiosInstance.get<T>(this.endpoint).then(res => res.data);
  }

  post = (data: T) => {
    return axiosInstance
      .post(this.endpoint, data)
      .then((res) => res.data);
  };
}

export default APIClient;
