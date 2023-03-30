import axios from "axios";
import { setCookie, removeCookie } from "../pages/Certified/Cookie";

function Refresh() {
  axios.defaults.withCredentials = true;
  //기존 액세스토큰 삭제
  removeCookie("accesstoken");
  return axios({
    method: "post",
    url: `/api/sendy/auth/reissue`,
    headers: {
      "ngrok-skip-browser-warning": "12",
      Refresh: localStorage.getItem("refreshToken"),
    },
  })
    .then((res) => {
      if (res.headers.getAuthorization) {
        //액세스토큰 재발급
        setCookie(
          "accesstoken",
          `Bearer ${res.headers.get("Authorization").split(" ")[1]}`,
          {
            path: "/",
            sucure: true,
            sameSite: "Strict",
            HttpOnly: " HttpOnly ",
          }
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export default Refresh;
