import React, { useEffect, useState } from "react";
import * as W from "./WriteStyled";
import { HiOutlineCheck } from "react-icons/hi";

function LetterContent({ openExplaination, sendMe, setSendMe }) {
  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const currentDate = `${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()} ${
    weekday[new Date().getDay()]
  }`;
  const handleSendMe = () => {
    setSendMe(!sendMe);
  };
  return (
    <W.LetterBox>
      <W.FlexWrapper1>
        <W.NameInputWrapper>
          To
          {openExplaination ? (
            <W.BallonBottom1 id="ballon6">
              편지를 받을 사람 이름을 적습니다.
            </W.BallonBottom1>
          ) : (
            <></>
          )}
          <W.NameInput></W.NameInput>
        </W.NameInputWrapper>
        <W.Date>{currentDate}</W.Date>
      </W.FlexWrapper1>
      <W.SendMeWrapper>
        <W.BallonWrapper>
          <W.SendMeCheckBox
            className={sendMe ? "active" : ""}
            onClick={handleSendMe}></W.SendMeCheckBox>
          {sendMe ? (
            <HiOutlineCheck id="check-icon" size="25" onClick={handleSendMe} />
          ) : (
            <></>
          )}
        </W.BallonWrapper>

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
          {openExplaination ? (
            <W.BallonBottom1 id="ballon7">
              편지를 보내는 사람 이름을 적습니다.
            </W.BallonBottom1>
          ) : (
            <></>
          )}
          <W.NameInput></W.NameInput>
        </W.NameInputWrapper>
      </W.FromWrapper>
    </W.LetterBox>
  );
}

export default LetterContent;
