import axios from "axios";
import { getCookie } from "../pages/Certified/Cookie";

const axiosCall = async (call) => {
  const { method, url, data } = call;
  const token = getCookie("accesstoken");
  return axios({
    method,
    url,
    data,
    headers: {
      "ngrok-skip-browser-warning": "12",
      Authorization: token,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export default axiosCall;
