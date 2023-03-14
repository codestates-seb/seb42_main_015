import React from "react";
import * as W from "./WriteStyled";

function LetterContent() {
  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const currentDate = `${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()} ${
    weekday[new Date().getDay()]
  }`;

  return (
    <W.LetterBox>
      <W.FlexWrapper1>
        <W.NameInputWrapper>
          To
          <W.NameInput></W.NameInput>
        </W.NameInputWrapper>
        <W.Date>{currentDate}</W.Date>
      </W.FlexWrapper1>
      <W.SendMeWrapper>
        <W.SendMeBtn></W.SendMeBtn>
        <W.SendMeCheckBox></W.SendMeCheckBox>
        <W.SendMeLabel>나에게보내기</W.SendMeLabel>
      </W.SendMeWrapper>
      <W.ContentTextarea></W.ContentTextarea>
      <W.FromWrapper>
        <W.NameInputWrapper>
          From
          <W.NameInput></W.NameInput>
        </W.NameInputWrapper>
      </W.FromWrapper>
    </W.LetterBox>
  );
}

export default LetterContent;
