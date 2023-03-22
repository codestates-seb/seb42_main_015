export const GoogleOauthLogin = () => {
  window.location.href = `api/oauth2/authorization/google`;
  // window.location.assign(oauthURL);
};

// const oauthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=972730796553-kmbi1dbe3h5u0qvqbh1b8mic4mhalvrt.apps.googleusercontent.com&
// response_type=token&
// redirect_uri=http://localhost:3000&
// scope=https://www.googleapis.com/auth/userinfo.email`;
