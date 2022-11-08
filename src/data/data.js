import axios from "axios";

const api = axios.create({
  baseURL: "https://yro.herokuapp.com/",
});

export default api;