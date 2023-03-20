import React, { useState } from "react";
import * as M from "./PwdChangeStyled";
import {
  AiOutlineArrowRight,
  AiOutlineEnter,
  AiOutlineLock,
} from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import GNB from "./GNB";

function PwdChange() {
  const navigate = useNavigate();
  const [next, setNext] = useState(2);
  const { page } = useParams();
  const handleNext = () => {
    setNext(next + 1);
    navigate(`/pwdchange/${next}`);
  };

  const formSchma = yup.object({
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
    <M.PwdChangeWrap>
      <GNB />
      <M.PwdChangeContainer>
        <M.CardBox />
        <M.PwdChangeContents>
          <M.UserBox>
            <M.UserImg />
            <M.UserName>김햄찌</M.UserName>
          </M.UserBox>
          <M.PwdBox>
            <M.PwdChangeTitle>Password</M.PwdChangeTitle>
            {page === undefined && (
              <M.InputContainer>
                <M.Explain>
                  비밀번호 변경을 위해 <br /> 기존 비밀번호 확인이 필요합니다.
                </M.Explain>
                <M.PwdForm>
                  <AiOutlineLock />
                  <M.PwdInput
                    type="password"
                    name="password"
                    placeholder="password"
                    {...register("password")}
                  />
                  <AiOutlineEnter />
                </M.PwdForm>
                <M.ErrorMsg>비밀번호를 틀렸습니다.</M.ErrorMsg>
                <AiOutlineArrowRight className="next" onClick={handleNext} />
              </M.InputContainer>
            )}
            {page === "2" && (
              <M.InputContainer>
                <M.PwdLabel>Password</M.PwdLabel>
                <M.PwdForm>
                  <M.PwdInput
                    name="password"
                    type="password"
                    {...register("password")}
                  />
                </M.PwdForm>
                {errors.password && (
                  <M.ErrorMsg>{errors.password.message}</M.ErrorMsg>
                )}
                <M.PwdLabel>Password Confirm</M.PwdLabel>
                <M.PwdForm>
                  <M.PwdInput
                    type="password"
                    name="passwordConfirm"
                    {...register("passwordConfirm")}
                  />
                </M.PwdForm>
                {errors.passwordConfirm && (
                  <M.ErrorMsg>{errors.passwordConfirm.message}</M.ErrorMsg>
                )}
                <M.ButtonBox>
                  <M.Button>확인</M.Button>
                </M.ButtonBox>
              </M.InputContainer>
            )}
          </M.PwdBox>
        </M.PwdChangeContents>
      </M.PwdChangeContainer>
    </M.PwdChangeWrap>
  );
}

export default PwdChange;
