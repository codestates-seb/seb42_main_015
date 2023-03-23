import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as L from "./ReadStyled";
import * as yup from "yup";
import axios from "axios";
import { setCookie } from "../Certified/Cookie";
import { header, GoogleOauthLogin, options } from "../Certified/setupCertified";

const LoginModal = ({ ModalRef, setIsKeeping }) => {
  //로그인되면 모달 닫기
  const CloseModal = () => {
    alert("로그인되었습니다.");
    setIsKeeping(false);
  };

  const formShema = yup.object({
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
  } = useForm({ mode: "onChange", resolver: yupResolver(formShema) });

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "12",
  };

  //! 로그인 제출 버튼
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
        CloseModal();
        if (res.headers.getAuthorization) {
          //! refresh token은 -> local storage에 저장
          localStorage.setItem("refreshToken", res.headers.get("Refresh"));
          //! access token은 -> cookie에 저장
          setCookie(
            "accesstoken",
            res.headers.get("Authorization").split(" ")[1],
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
        alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
      });
  };

  return (
    <L.ModalWrapper ref={ModalRef}>
      <div className="loginText">Log in</div>
      <div className="oauth">
        <img
          src={require("../../asset/구글.png")}
          alt="Googole"
          onClick={GoogleOauthLogin}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          disabled={isSubmitting}
          onClick={CloseModal}
        />
      </form>
      <div className="sub">
        <Link to="/setpwd">
          <li>forget Password</li>
        </Link>
        <Link to="/signup">
          <li>sign up</li>
        </Link>
      </div>
    </L.ModalWrapper>
  );
};

export default LoginModal;
