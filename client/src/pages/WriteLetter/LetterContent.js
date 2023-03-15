import React, { useEffect, useState } from "react";
import * as W from "./WriteStyled";

function LetterContent({ openExplaination }) {
  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const currentDate = `${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()} ${
    weekday[new Date().getDay()]
  }`;
  const [checked, setChecked] = useState(false);
  const handleCheckBox = () => {
    setChecked(!checked);
  };

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
        <W.SendMeCheckBox
          checked={checked}
          onClick={handleCheckBox}></W.SendMeCheckBox>
        <W.SendMeLabel>나에게보내기</W.SendMeLabel>
        {openExplaination ? (
          <W.BallonLeft id="ballon1">
            나에게 편지를 작성할 수 있습니다.
          </W.BallonLeft>
        ) : (
          <></>
        )}
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
