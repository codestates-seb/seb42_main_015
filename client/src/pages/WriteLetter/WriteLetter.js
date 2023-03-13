import React, { useState } from "react";
import * as W from "./WriteStyled";
import { useForm } from "react-hook-form";
import { BiMicrophone, BiFontColor, BiLock, BiLockOpen } from "react-icons/bi";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { SlQuestion } from "react-icons/sl";
import { PALETTE_V1 } from "../../style/color";

function WriteLetter() {
  const { register, watch } = useForm();
  const [useLock, setUseLock] = useState(false);

  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const currentDate = `${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()} ${
    weekday[new Date().getDay()]
  }`;

  return (
    <W.PageContainer>
      <W.PageWrapper>
        <W.FlexWrapper2>
          <W.IconWrapper>
            <BiMicrophone className="microphone-icon" size="30" />
            <BiFontColor className="font-icon" size="30" />
            {useLock ? (
              <BiLock className="lock-icon" size="30" />
            ) : (
              <BiLockOpen className="lockopen-icon" size="30" />
            )}
          </W.IconWrapper>
          <W.ThemeIcon>
            <MdArrowBackIos className="arrow-backward-icon" size="30" />
          </W.ThemeIcon>
          <W.LetterWrapper>
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
            <W.TextCount>0/7000</W.TextCount>
          </W.LetterWrapper>{" "}
          <W.ThemeIcon>
            <MdArrowForwardIos className="arrow-forward-icon" size="30" />
          </W.ThemeIcon>
        </W.FlexWrapper2>
        <W.ButtonWrapper>
          <SlQuestion className="question-icon" size="30" />
          <W.RoundButton backgroundColor={PALETTE_V1.yellow_button}>
            미리보기
          </W.RoundButton>
          <W.RoundButton backgroundColor={PALETTE_V1.yellow_button}>
            편지생성
          </W.RoundButton>
        </W.ButtonWrapper>
      </W.PageWrapper>
    </W.PageContainer>
  );
}

export default WriteLetter;
