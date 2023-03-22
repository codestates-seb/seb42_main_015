import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./FormStyled";
import axios from "axios";
import { GoogleOauthLogin } from "./OauthGoogle";
import { formSchema, headers } from "./formShema";

function SignUp() {
  const navigate = useNavigate();
  //유저네임 중복검사
  const [nameValid, setNameValid] = useState(false);
  //이메일 중복검사
  const [emailValid, setEmailValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  //sign up 제출 버튼
  const onSubmit = async (data) => {
    const { email, username, password } = data;

    if (!nameValid || !emailValid) {
      alert("유저네임 및 이메일 중복 체크를 진행해주세요.");
      return;
    }

    await axios
      .post(
        `/api/sendy/users/signup`,
        { email: email, nickname: username, password: password },
        {
          headers,
        }
      )
      .then(() => {
        alert("회원가입 되었습니다.");
        navigate("/completesignup");
      })
      .catch((err) => {
        console.log(err);
        alert("유저네임 및 이메일 중복 체크를 진행해주세요.");
      });
  };

  //유저네임 중복체크
  const usernameCheck = async (data) => {
    const { username } = data;
    if (username) {
      axios
        .post(
          `/api/sendy/users/nickname`,
          {
            nickname: username,
          },
          {
            headers,
          }
        )
        .then((res) => {
          if (res.status === 409) {
            alert("이미 존재하는 유저네임입니다.");
          } else {
            alert("사용 가능한 유저네임입니다.");
            setNameValid(!nameValid);
          }
        })
        .catch((res) => {
          console.log(res.data);
        });
    }
  };

  //이메일 중복체크
  const emailCheck = async (data) => {
    const { email } = data;
    if (email) {
      axios
        .post(
          `/api/sendy/users/email`,
          {
            email: email,
          },
          {
            headers,
          }
        )
        .then((res) => {
          if (res.status === 409) {
            alert("이미 존재하는 이메일입니다.");
          } else {
            alert("사용 가능한 이메일입니다.");
            setEmailValid(!emailValid);
          }
        })
        .catch((res) => {
          console.log(res.data);
        });
    }
  };

  return (
    <>
      <S.Container>
        <S.BackgroundYellow theme="signup" />
        <S.LogForm theme="signup" onSubmit={handleSubmit(onSubmit)}>
          <li className="formLeft">
            <ul className="login-form">
              <li className="loginText">Sign up</li>
              <label>
                <input
                  className="userInput"
                  name="username"
                  type="text"
                  placeholder="user name"
                  {...register("username")}
                />
                {nameValid ? (
                  <button className="duplicate-check">체크완료</button>
                ) : (
                  <button className="duplicate" onClick={usernameCheck}>
                    중복체크
                  </button>
                )}
              </label>
              {errors.nickname && <p>{errors.nickname.message}</p>}
              <label>
                <input
                  className="emailInput"
                  type="email"
                  name="email"
                  placeholder="email address"
                  {...register("email")}
                />
                {emailValid ? (
                  <button className="duplicate">체크완료</button>
                ) : (
                  <button className="duplicate" onClick={emailCheck}>
                    중복체크
                  </button>
                )}
              </label>
              {errors.email && <p>{errors.email.message}</p>}
              <input
                className="pwdInput"
                name="password"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
              <input
                className="pwdInput"
                type="password"
                name="passwordConfirm"
                placeholder="Confirm Password"
                {...register("passwordConfirm")}
              />
              {errors.passwordConfirm && (
                <p>{errors.passwordConfirm.message}</p>
              )}
              {/* 로그인버튼의 disabled 속성에 isSubmitting값을 부여하면 -> 제출 처리가 끝날 때까지 버튼이 비활성화 된다. */}
              <input
                className="btn"
                type="submit"
                value="Sign up"
                disabled={isSubmitting}
              />
              <div className="sub-form ">
                <Link to="/login">
                  <li>Log in</li>
                </Link>
              </div>
              <div className="oauth-form">
                <div className="oauth-head">Sign up With</div>
                <div className="oauth">
                  <img
                    src={require("../../asset/구글.png")}
                    alt="Googole"
                    onClick={GoogleOauthLogin}
                  />
                </div>
              </div>
            </ul>
          </li>
          <li className="formRight">
            <div className="welcome">welcome!</div>
            <div className="imgWrapper">
              <img src={require("../../asset/CatDog.png")} alt="CatandDog" />
            </div>
            <div className="oauth-form">
              <div className="oauth-head">Sign up With</div>
              <div className="oauth">
                <img
                  src={require("../../asset/구글.png")}
                  alt="Googole"
                  onClick={GoogleOauthLogin}
                />
              </div>
            </div>
          </li>
        </S.LogForm>
      </S.Container>
    </>
  );
}

export default SignUp;

/* 
  ! YUP : 런타임 값 구문 분석 및 유효성 검사를 위한 스키마 빌더이다.  
    - yup을 사용하면 좀 더 편하게 유효성 검증로직을 구현할 수 있다.
    - yup.object을 통해 schema를 만들어 검증로직, 에러메세지를 한번에 정의할 수 있다.
  ? Schema.oneOf(arrayOfValues: Array<any>, message?: string | function):
    - oneOf(값) : 값만 true로 반환한다.
    [예제]
    let schema = yup.oneOf(['jimmy', 42]);
    await schema.isValid(42); // => true
    await schema.isValid('jimmy'); // => true
    await schema.isValid(new Date()); // => false         
*/
/*  
  ! useForm
  ? register : form의 유효성을 확인하는 메서드
  ? handleSubmit : form을 제출하는 함수
  ? watch : 입력폼에 적힌 값을 확인 하는 옵션
    - e.target.value와 동일하다
  ? formState : form의 현재 상태를 담고 있다.
    - 중복 제출 방지 : isSubmitting (초기값 : false)
      formState에 isSubmitting 속성을 부여하면 -> form이 현재 제출중인 상태인지 아닌지를 알 수 있다.
      즉 -> event.preventDefault()를 사용하지 않아도 된다.
  */
