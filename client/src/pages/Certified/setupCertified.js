//axios headers
export const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "12",
};

//set cookie options
export const options = {
  path: "/",
  sucure: true,
  sameSite: "Strict",
  HttpOnly: " HttpOnly ",
};

export const GoogleOauthLogin = () => {
  window.location.href = `api/oauth2/authorization/google`;
};
