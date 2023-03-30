import axios from "axios";
import { getCookie } from "../pages/Certified/Cookie";

const axiosCall = async (call) => {
  const token = getCookie("accesstoken");
  return axios({
    method: call.method,
    url: call.url,
    data: call?.data,
    headers: {
      "ngrok-skip-browser-warning": "12",
      Authorization: token,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export default axiosCall;
