import axios from "axios";
import { setCookie } from "../pages/Certified/Cookie";

function Refresh() {
  axios.defaults.withCredentials = true;
  return axios({
    method: "post",
    url: `/api/sendy/auth/reissue`,
    headers: {
      "ngrok-skip-browser-warning": "12",
      Refresh: localStorage.getItem("refreshToken"),
    },
  })
    .then(() => {
      if (res.headers.getAuthorization) {
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
