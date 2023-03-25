import axios from "axios";
import { getCookie } from "../pages/Certified/Cookie";

const axiosCall = async (call) => {
  // const { method, url, data } = call;
  const token = getCookie("accesstoken");
  return axios({
    method: call.method,
    url: call.url,
    data: call?.data,
    headers: {
      "ngrok-skip-browser-warning": "12",
      // Authorization: token,
      Authorization:
        "Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlcyI6WyJVU0VSIl0sIm1lbWJlcklkIjo5LCJ1c2VybmFtZSI6InVzZXIxOTk3QGdtYWlsLmNvbSIsInN1YiI6InVzZXIxOTk3QGdtYWlsLmNvbSIsImlhdCI6MTY3OTcyMTMyNiwiZXhwIjoxNjc5NzIzMTI2fQ.zhuxBaDkJ5qT00QrLnRwh0q5yXRW8z0OwjJx4BefSWYRf3xa9QIFfwkQFkMmUYKx",
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export default axiosCall;
