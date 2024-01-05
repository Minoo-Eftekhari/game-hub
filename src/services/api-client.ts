import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c5d9b342e0504d23a426c2e31c1d16a5",
  },
});

export default apiClient;