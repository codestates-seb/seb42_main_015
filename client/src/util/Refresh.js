// import axios from "axios";
// import { setCookie, getCookie } from "../pages/Certified/Cookie";

// function Refresh() {
//   axios.defaults.withCredentials = true;
//   return axios
//     .post(`/api/sendy/auth/reissue`, {
//       headers: { "ngrok-skip-browser-warning": "12" },
//     })
//     .then((res) => {
//       localStorage.setItem("jwtToken", res.headers.authorization);
//     });

//     await axios({
//       method: "post",
//       url: `/api/sendy/auth/reissue`,
//       headers: {
//         "ngrok-skip-browser-warning": "12",
//         Refresh: localStorage.getItem("refreshToken"),
//       },
//     })
//       .then(() => {
//         localStorage.clear();
//         removeCookie("accesstoken");
//         navigate("/completeLogout");
//         window.location.reload();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
// }

// export default Refresh;
