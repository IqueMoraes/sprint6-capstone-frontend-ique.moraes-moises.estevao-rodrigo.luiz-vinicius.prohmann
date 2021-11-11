import axios from "axios";

export const api = axios.create({
  baseURL: "https://capstone-backend-tchau-mamae.herokuapp.com/",
});
