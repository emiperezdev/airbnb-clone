import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = (data: T) => {
    return axiosInstance.post(this.endpoint, data).then(res => res.data);
  }
}

export default APIClient;


