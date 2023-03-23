import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as L from "./FormStyled";
import axios from "axios";
import { setCookie, getCookie } from "./Cookie";
import { GoogleOauthLogin } from "./OauthGoogle";
import { formSchema, headers, options } from "./FormSchema";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  //TODO :로그인 제출 버튼
  const onFormSubmit = async (data) => {
    const { email, password } = data;
    await axios
      .post(
        `/api/sendy/auth/login`,
        { username: email, password: password },
        {
          headers,
        }
      )
      .then((res) => {
        alert("로그인되었습니다.");
        if (res.headers.getAuthorization) {
          //! refresh token은 -> local storage에 저장
          localStorage.setItem("refreshToken", res.headers.get("Refresh"));
          //! access token은 -> cookie에 저장
          setCookie(
            "accesstoken",
            res.headers.get("Authorization").split(" ")[1],
            {
              options,
            }
          );
          console.log("accesstoken", getCookie("accesstoken"));
          console.log("refreshToken", localStorage.getItem("refreshToken"));
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
      });
  };

  return (
    <>
      <L.Container>
        <L.BackgroundYellow theme="login" />
        <L.LogForm theme="login" onSubmit={handleSubmit(onFormSubmit)}>
          <div className="formLeft">
            <div className="login-form">
              <div className="loginText">Log in</div>
              <input
                className="emailInput"
                {...register("email")}
                type="email"
                name="email"
                placeholder="email address"
              />
              {errors.email && <p>{errors.email.message}</p>}
              <input
                className="pwdInput"
                {...register("password")}
                type="password"
                name="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
              <input
                className="btn"
                type="submit"
                value="Log in"
                disabled={isSubmitting && (errors || watch())}
              />

              <div className="sub-form ">
                <Link to="/setpwd">
                  <li>forget Password</li>
                </Link>
                <Link to="/signup">
                  <li>sign up</li>
                </Link>
              </div>
              <div className="oauth-form">
                <div className="oauth-head">Log in With</div>
                <div className="oauth">
                  <img
                    src={require("../../asset/구글.png")}
                    alt="Googole"
                    onClick={GoogleOauthLogin}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="formRight">
            <div className="welcome">welcome!</div>
            <div className="imgWrapper">
              <div className="section1">
                <img
                  src={require("../../asset/해바라기.png")}
                  alt="Sunflower"
                ></img>
                <span className="box">sunflower</span>
              </div>
              <div className="section2">
                <img src={require("../../asset/하늘.png")} alt="Sky"></img>
                <span className="box">cloud</span>
              </div>
            </div>
            <div className="oauth-form">
              <div className="oauth-head">Log in With</div>
              <div className="oauth">
                <img
                  src={require("../../asset/구글.png")}
                  alt="Googole"
                  onClick={GoogleOauthLogin}
                />
              </div>
            </div>
          </div>
        </L.LogForm>
      </L.Container>
    </>
  );
}

export default Login;
