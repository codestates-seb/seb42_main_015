import React, { useState } from "react";
import * as C from "./SetPwdStyled";
import { AiOutlineArrowRight, AiOutlineEnter } from "react-icons/ai";
import { BsEnvelopeAt, BsEnvelopePaper } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ShadowButton from "../commons/ShadowButton";
import axios from "axios";
import { Loading } from "../../components/Loading";
import Refresh from "../../util/Refresh";

function SetPwd() {
  const navigate = useNavigate();
  const [next, setNext] = useState(1);
  const { page } = useParams();
  const handleNext = () => {
    setNext(+page + 1);
    navigate(`/setpwd/${next}`);
  };
  const [changePwd, setChangePwd] = useState();
  const [email, setEmail] = useState();
  //이메일 중복검사
  const [emailValid, setEmailValid] = useState(false);
  //이메일 인증코드
  const [isCode, setCode] = useState("");
  //이메일 인증번호 일치
  const [isEmailCode, setEmailCode] = useState(false);
  //로딩상태
  const [isLoading, setIsLoading] = useState(false);

  const FormSchema = yup.object({
    email: yup
      .string()
      .required("이메일을 입력해주세요")
      .email("이메일 형식이 아닙니다."),
    code: yup.string().required("이메일로 발송된 인증코드를 입력해주세요."),
    password: yup
      .string()
      .required("영문 소문자, 숫자, 특수문자를 포함한 8~16자리를 입력해주세요.")
      .min(8, "최소 8자리 이상 입력해주세요.")
      .max(16, "최대 16자까지 가능합니다.")
      .matches(
        /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/,
        "영문 소문자, 숫자, 특수문자를 포함한 8~16자리를 입력해주세요."
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(FormSchema) });

  //이메일 중복체크
  const handleEmailCheck = async () => {
    if (watch("email")) {
      await axios({
        method: "post",
        url: "/api/sendy/users/verify/email",
        headers: {
          "ngrok-skip-browser-warning": "230328",
        },
        data: { email: watch("email") },
      })
        .then((res) => {
          alert("회원가입 되지 않은 이메일입니다.");
        })
        .catch((err) => {
          if (err.response.status === 409) {
            alert("회원가입 된 이메일입니다.");
          }
          setEmailValid(!emailValid);
          if (err.response.status === 401) {
            Refresh().then(() => handleEmailCheck());
          }
        });
    }
  };

  //인증 코드 발송
  const handleSendCode = async () => {
    setIsLoading(true);
    await axios({
      method: "post",
      url: `/api/sendy/email/send-code-email`,
      headers: {
        "ngrok-skip-browser-warning": "230328",
      },
      data: { email: watch("email") },
    })
      .then((res) => {
        setIsLoading(false);
        setTimeout(() => {
          alert("인증코드가 발송되었습니다. 이메일을 확인해주세요!");
        }, 300);
        setCode(res.data.code);
        // console.log(res.data.code);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        if (err.response.status === 401) {
          Refresh().then(() => handleSendCode());
        }
      });
  };

  //인증코드 확인
  const handleCheckCode = () => {
    if (watch("code").length !== 0 && watch("code") === isCode) {
      setEmailCode(true);
      alert("인증되었습니다.");
      setTimeout(() => {
        navigate(`/setpwd/3`);
      }, 1000);
    } else {
      alert("올바른 인증코드를 입력해주세요.");
    }
  };

  // sign up 제출 버튼
  const onSubmit = async () => {
    await axios({
      method: "patch",
      url: `/api/sendy/users/password`,
      headers: {
        "ngrok-skip-browser-warning": "230327",
      },
      data: { email: email, newPassword: changePwd },
    })
      .then(() => navigate("/setpwd/4"))
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => onSubmit());
        }
      });
  };

  return (
    <C.SetPwdWrap>
      {isLoading ? <Loading /> : ""}
      <C.CardBox />
      {page !== "4" && (
        <C.SetPwdContainer>
          <C.LeftBox>
            {page === "1" && (
              <C.Text>
                비밀번호 변경을 위해 <br /> 이메일 인증이 필요합니다.
              </C.Text>
            )}
            {page === "2" && (
              <C.Text>
                이메일로 전송된 <br /> 인증번호를 입력해주세요.
              </C.Text>
            )}
            {page === "3" && <C.Text>변경할 비밀번호를 설정해주세요.</C.Text>}
          </C.LeftBox>
          <C.RightBox>
            <C.SetPwdTitle>Password</C.SetPwdTitle>
            {page === "1" && (
              <>
                <C.InputWrap>
                  <C.EmailLabel>Email</C.EmailLabel>
                  <C.InputForm>
                    <BsEnvelopeAt />
                    {emailValid ? (
                      <C.Input className="emailInput" disabled="disabled" />
                    ) : (
                      <C.Input
                        className="emailInput"
                        type="email"
                        name="email"
                        placeholder="email address"
                        {...register("email")}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    )}
                    {emailValid ? (
                      isCode ? (
                        <C.Duplicate background="#d3d3d3">
                          발송 완료
                        </C.Duplicate>
                      ) : (
                        <C.Code onClick={handleSendCode}>코드 받기</C.Code>
                      )
                    ) : (
                      <C.Duplicate onClick={handleEmailCheck}>
                        중복 체크
                      </C.Duplicate>
                    )}
                  </C.InputForm>
                  {errors.email && (
                    <C.ErrorMsg>{errors.email.message}</C.ErrorMsg>
                  )}
                </C.InputWrap>
                <AiOutlineArrowRight className="next" onClick={handleNext} />
              </>
            )}
            {page === "2" && (
              <C.InputWrap>
                <C.AuthLabel>인증번호를 차례대로 입력해주세요.</C.AuthLabel>
                <C.InputForm>
                  <BsEnvelopePaper />
                  <C.Input
                    type="code"
                    name="code"
                    placeholder="Enter code"
                    {...register("code")}
                  />
                  <AiOutlineEnter onClick={handleCheckCode} />
                </C.InputForm>
                {errors.code && <C.ErrorMsg>{errors.code.message}</C.ErrorMsg>}
              </C.InputWrap>
            )}
            {page === "3" && (
              <C.InputWrap>
                <C.SetPwdLabel>Password</C.SetPwdLabel>
                <C.SetPwdForm onSubmit={handleSubmit(onSubmit)}>
                  <C.SetPwdInput
                    name="password"
                    type="password"
                    {...register("password")}
                    onChange={(e) => setChangePwd(e.target.value)}
                  />
                  {errors.password && (
                    <C.ErrorMsg>{errors.password.message}</C.ErrorMsg>
                  )}
                  <C.SetPwdLabel>Password Confirm</C.SetPwdLabel>
                  <C.SetPwdInput
                    type="password"
                    name="passwordConfirm"
                    {...register("passwordConfirm")}
                  />
                  {errors.passwordConfirm && (
                    <C.ErrorMsg>{errors.passwordConfirm.message}</C.ErrorMsg>
                  )}
                  <C.ButtonBox>
                    <C.Button
                      className="btn"
                      type="submit"
                      value="확인"
                      disabled={isSubmitting}
                    />
                  </C.ButtonBox>
                </C.SetPwdForm>
              </C.InputWrap>
            )}
          </C.RightBox>
        </C.SetPwdContainer>
      )}
      {page === "4" && (
        <C.SetPwdContainer>
          <C.SuccessContainer>
            <C.SuccessImg
              className="suc1"
              src={require("../../asset/뽀시래기/보라 뽀시래기.png")}
              alt=""
            />
            <C.SuccessImg
              className="suc2"
              src={require("../../asset/뽀시래기/빨주노 뽀시래기.png")}
              alt=""
            />
            <C.SuccessImg
              className="suc3"
              src={require("../../asset/뽀시래기/초록 뽀시래기.png")}
              alt=""
            />
            <C.SuccessImg
              className="suc4"
              src={require("../../asset/뽀시래기/파랑 뽀시래기.png")}
              alt=""
            />
            <C.SuccessImg
              className="suc5"
              src={require("../../asset/뽀시래기/핑크 뽀시래기.png")}
              alt=""
            />
            <C.SuccessImg
              className="suc6"
              src={require("../../asset/뽀시래기/핑크 여러개 뽀시래기.png")}
              alt=""
            />
            <C.SuccessImg
              className="suc7"
              src={require("../../asset/뽀시래기/하트 뽀시래기.png")}
              alt=""
            />
            <C.SuccessTitle>비밀번호 변경 완료</C.SuccessTitle>
            <C.SuccessContent>
              비밀번호 변경이 완료되었습니다.
              <br />
              로그인 페이지에서 로그인 해주세요.
            </C.SuccessContent>
            <ShadowButton
              backgroundColor="#FFFB95"
              onClick={() => navigate("/login")}
            >
              Login
            </ShadowButton>
          </C.SuccessContainer>
        </C.SetPwdContainer>
      )}
    </C.SetPwdWrap>
  );
}

export default SetPwd;
