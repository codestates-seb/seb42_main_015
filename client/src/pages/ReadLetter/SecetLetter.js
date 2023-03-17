import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./ReadStyled";

const ReadLetter = ({ enterPassword, setEnterPassword }) => {
  const formShema = yup.object({
    password: yup
      .string()
      .required("숫자로 이루어진 비밀번호 4자리를 입력해주세요.")
      .matches(
        /^(?=.*?[0-9]).{4}$/,
        "숫자로 이루어진 비밀번호 4자리를 입력해주세요."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formShema) });

  const onSubmit = (data) => {
    alert("비밀번호가 일치합니다! 어떤 편지가 왔을까요?");
    setEnterPassword(!enterPassword);
    //! 추후 비밀번호가 맞는지 검증절차 필요
  };

  return (
    <>
      <S.SWrapper theme="scret">
        <S.Secretform onSubmit={handleSubmit(onSubmit)}>
          <div className="head">편지 비밀번호를 입력해주세요.</div>
          <input
            className="pwdInput"
            name="password"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <input
            className="btn"
            type="submit"
            value="확인"
            disabled={isSubmitting}
          />
        </S.Secretform>
      </S.SWrapper>
    </>
  );
};

export default ReadLetter;
