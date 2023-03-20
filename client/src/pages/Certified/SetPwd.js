import React, { useState } from "react";
import * as C from "./SetPwdStyled";
import { AiOutlineArrowRight, AiOutlineEnter } from "react-icons/ai";
import { BsEnvelopeAt } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SetPwd() {
  const navigate = useNavigate();
  const [next, setNext] = useState(2);
  const { page } = useParams();
  const handleNext = () => {
    setNext(next + 1);
    navigate(`/setpwd/${next}`);
  };

  const formSchma = yup.object({
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
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchma) });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <C.SetPwdWrap>
      <C.CardBox />
      <C.SetPwdContainer>
        <C.LeftBox>
          {page === undefined && (
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
          {page === undefined && (
            <C.InputWrap>
              <C.EmailLabel>Email</C.EmailLabel>
              <C.EmailInputForm onSubmit={handleSubmit(onSubmit)}>
                <BsEnvelopeAt />
                <C.EmailInput
                  type="email"
                  name="email"
                  placeholder="email address"
                  {...register("email")}
                />
                <AiOutlineEnter />
              </C.EmailInputForm>
              {errors.email && <C.ErrorMsg>{errors.email.message}</C.ErrorMsg>}
            </C.InputWrap>
          )}
          {page === "2" && (
            <C.InputWrap>
              <C.AuthLabel>번호를 차례대로 입력해주세요.</C.AuthLabel>
              <C.AuthInputBox>
                <C.AuthInput />
                <C.AuthInput />
                <C.AuthInput />
                <C.AuthInput />
                <C.AuthInput />
              </C.AuthInputBox>
            </C.InputWrap>
          )}
          {page === "3" && (
            <C.InputWrap>
              <C.SetPwdLabel>Password</C.SetPwdLabel>
              <C.SetPwdBox>
                <C.SetPwdInput
                  name="password"
                  type="password"
                  {...register("password")}
                />
              </C.SetPwdBox>
              {errors.password && <C.ErrorMsg>{errors.password.message}</C.ErrorMsg>}
              <C.SetPwdLabel>Password Confirm</C.SetPwdLabel>
              <C.SetPwdBox>
                <C.SetPwdInput
                  type="password"
                  name="passwordConfirm"
                  {...register("passwordConfirm")}
                />
              </C.SetPwdBox>
              {errors.passwordConfirm && (
                <C.ErrorMsg>{errors.passwordConfirm.message}</C.ErrorMsg>
              )}
              <C.ButtonBox>
                <C.Button>확인</C.Button>
              </C.ButtonBox>
            </C.InputWrap>
          )}
          {(page === undefined || page === "2") && (
            <AiOutlineArrowRight className="next" onClick={handleNext} />
          )}
        </C.RightBox>
      </C.SetPwdContainer>
    </C.SetPwdWrap>
  );
}

export default SetPwd;
