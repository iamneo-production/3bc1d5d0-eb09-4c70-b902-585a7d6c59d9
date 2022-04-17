import axios from "axios";

axios.defaults.withCredentials = true
const URL = "http://localhost:8080";

const instance = axios.create({
    baseURL: URL,
    headers: {
      "Content-Type": "application/json",
    },
});

export default instance;