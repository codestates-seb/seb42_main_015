import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as L from "./FormStyled";
import axios from "axios";
import { setCookie, getCookie } from "./Cookie";
import { headers, options, GoogleOauthLogin } from "./setupCertified";

function Login() {
  const navigate = useNavigate();

  const FormSchema = yup.object({
    email: yup
      .string()
      .required("이메일을 입력해주세요")
      .email("이메일 형식이 아닙니다."),
    password: yup
      .string()
      .required("영문 소문자, 숫자, 특수문자를 포함한 8~16자리를 입력해주세요.")
      .min(8, "최소 8자리 이상 입력해주세요.")
      .max(16, "최대 16자까지 가능합니다.")
      .matches(
        /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "영문 소문자, 숫자, 특수문자를 포함한 8~16자리를 입력해주세요."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(FormSchema) });

  //TODO :로그인 제출 버튼
  const onSubmit = async (data) => {
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
        //! 멤버Id -> 세션 스토리지에 저장
        sessionStorage.setItem("memberId", res.data.memberId);
        if (res.headers.getAuthorization) {
          //! refreshToken -> local storage에 저장
          localStorage.setItem("refreshToken", res.headers.get("Refresh"));
          //! accessToken -> cookie에 저장
          setCookie(
            "accesstoken",
            `Bearer ${res.headers.get("Authorization").split(" ")[1]}`,
            {
              options,
            }
          );
          //! accessToken expire  -> cookie에 저장(60분)
          setCookie("accesstoken_expire", `${res.headers.get("Date")}`, {
            options,
          });
          navigate("/");
          window.location.reload();
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
        <L.LogForm theme="login" onSubmit={handleSubmit(onSubmit)}>
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
              {errors.email && (
                <div className="err">{errors.email.message}</div>
              )}
              <input
                className="pwdInput"
                {...register("password")}
                type="password"
                name="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <div className="err">{errors.password.message}</div>
              )}
              <input
                className="btn"
                type="submit"
                value="Log in"
                disabled={isSubmitting}
              />

              <div className="sub-form ">
                <Link to="/setpwd/1">
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
