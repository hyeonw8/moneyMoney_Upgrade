import axios from "axios";

const api = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});


export default api;