import React from "react";
import * as W from "./WriteStyled";
import { useForm } from "react-hook-form";

function WriteLetter() {
  const { register, watch } = useForm();

  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const currentDate = `${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()} ${
    weekday[new Date().getDay()]
  }`;

  return (
    <W.LetterContainer>
      <W.LetterWrapper>
        <W.FlexWrapper1>
          <W.ToInputWrapper>
            To
            <W.ToInput></W.ToInput>
          </W.ToInputWrapper>
          <W.Date>{currentDate}</W.Date>
        </W.FlexWrapper1>
        <W.SendMeWrapper>
          <W.SendMeBtn></W.SendMeBtn>
          <W.SendMeCheckBox></W.SendMeCheckBox>
          <W.SendMeLabel>나에게보내기</W.SendMeLabel>
        </W.SendMeWrapper>
      </W.LetterWrapper>
    </W.LetterContainer>
  );
}

export default WriteLetter;
