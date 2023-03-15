import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as S from "./FormStyled";
import Google from "../../asset/구글.png";
import Kakao from "../../asset/카카오.png";

function SignUp() {
  //handleSubmit을 가져옵니다.
  const { register, watch, handleSubmit } = useForm();
  //"제출"을 했을 때 무슨일이 일어나는지 확인해봅시다.
  const onValid = (data) => console.log(data, "onvalid");
  const onInvalid = (data) => console.log(data, "onInvalid");

  return (
    <>
      <S.Background>
        <S.Container>
          <S.S_BackgroundYellow />
          <S.SignForm onSubmit={handleSubmit(onValid, onInvalid)}>
            <li className="formLeft">
              <ul className="login-form">
                <li className="loginText">Sign up</li>
                <input
                  className="userInput"
                  {...register("user")}
                  type="text"
                  placeholder="user Nickname"
                />
                <input
                  className="idInput"
                  {...register("id")}
                  type="text"
                  placeholder="email address"
                />
                <input
                  className="pwdInput"
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                />
                <input
                  className="pwdInput"
                  {...register("password")}
                  type="password"
                  placeholder="Confirm Password"
                />
                <input className="btn" type="submit" value="Sign up" />
                <div className="sub-form ">
                  <Link to="/login">
                    <li>Log in</li>
                  </Link>
                </div>
                <div className="oauth-form">
                  <div className="oauth-head">Sign up With</div>
                  <div className="oauth">
                    <img src={Google} alt="Googole" />
                    <img src={Kakao} alt="Kakao" />
                  </div>
                </div>
              </ul>
            </li>
            <li className="formRight">
              <ui className="welcome">welcome!</ui>
              <div className="oauth-form">
                <div className="oauth-head">Sign up With</div>
                <div className="oauth">
                  <img src={Google} alt="Googole" />
                  <img src={Kakao} alt="Kakao" />
                </div>
              </div>
            </li>
          </S.SignForm>
        </S.Container>
      </S.Background>
    </>
  );
}

export default SignUp;
