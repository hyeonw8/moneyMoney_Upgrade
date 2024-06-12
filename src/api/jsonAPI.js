// src > axios > api.js
import axios from "axios";

// axios.create의 입력값으로 들어가는 객체는 configuration 객체입니다.
// https://axios-http.com/docs/req_config 를 참고하세요!
const api = axios.create({
  baseURL: "http://localhost:4000",
});

export default api;