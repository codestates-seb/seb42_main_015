//axios headers
export const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "12",
};

//set cookie options
export const options = {
  path: "/",
  secure: true,
  sameSite: "Strict",
  HttpOnly: " HttpOnly ",
  // maxAge: 3600
};

export const GoogleOauthLogin = () => {
  window.location.href = `api/oauth2/authorization/google`;
  // //! refreshToken -> local storage에 저장
  // localStorage.setItem("refreshToken", res.headers.get("Refresh"));
  // //! accessToken -> cookie에 저장
  // setCookie(
  //   "accesstoken",
  //   `Bearer ${res.headers.get("Authorization").split(" ")[1]}`,
  //   {
  //     options,
  //   }
  // );
  // //! accessToken expire  -> cookie에 저장(60분)
  // setCookie("accesstoken_expire", `${res.headers.get("Date")}`, {
  //   options,
  // });
  // navigate("/");
  // window.location.reload();
};
