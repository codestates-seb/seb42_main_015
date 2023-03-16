import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import * as S from "./ReadStyled";

const ReadLetter = () => {
  return (
    <>
      <S.SWrapper theme="scret">
        <S.CheckContainer>
          <div className="head">편지 비밀번호를 입력해주세요.</div>
          <input placeholder="Password" />
          <button>확인</button>
        </S.CheckContainer>
      </S.SWrapper>
    </>
  );
};

export default ReadLetter;
