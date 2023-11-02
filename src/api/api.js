import axios from "axios";

const metroAPI = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

// == LOGIN == //

export const login = (userData) => {
  return metroAPI.post("user/login", userData);
};
