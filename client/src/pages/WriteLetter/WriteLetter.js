import React, { useRef, useState } from "react";
import * as W from "./WriteStyled";
import { useForm } from "react-hook-form";
import { BiMicrophone, BiFontColor, BiLock, BiLockOpen } from "react-icons/bi";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { SlQuestion } from "react-icons/sl";
import { PALETTE_V1 } from "../../style/color";
import LetterContent from "./LetterContent";
import axiosCall from "../../util/axiosCall";
import clovaApi from "./clovaApi";
import AudioRecord from "./AudioRecord";
import SquareButton from "../commons/SquareButton";
import Explanation from "./Explanation";

function WriteLetter() {
  const { register, watch } = useForm();
  const [openExplanation, setOpenExplanation] = useState(false);
  const handleOpenExplanation = () => {
    setOpenExplanation(!openExplanation);
  };
  return (
    <W.PageContainer>
      {openExplanation ? <Explanation /> : <></>}
      <W.PageWrapper>
        <W.FlexWrapper2>
          <W.IconWrapper>
            <AudioRecord />
            <BiMicrophone className="microphone-icon" size="30" />
            <BiFontColor className="font-icon" size="30" />
            <W.BallonTop id="ballon2">글씨체를 변경할 수 있습니다.</W.BallonTop>
          </W.IconWrapper>
          <W.ThemeIcon>
            <MdArrowBackIos className="arrow-backward-icon" size="30" />
          </W.ThemeIcon>
          <W.LetterWrapper>
            <LetterContent openExplaination={openExplanation} />
            <W.TextCount>0/7000</W.TextCount>
            {openExplanation ? (
              <W.BallonTop id="ballon3">
                글자 수를 확인할 수 있습니다.
              </W.BallonTop>
            ) : (
              <></>
            )}
          </W.LetterWrapper>
          <W.ThemeIcon>
            <MdArrowForwardIos className="arrow-forward-icon" size="30" />
          </W.ThemeIcon>
        </W.FlexWrapper2>
        <W.ExplanationWrapper>
          <W.ButtonWrapper>
            <SlQuestion
              onClick={handleOpenExplanation}
              className="question-icon"
              size="30"
            />
            <SquareButton backgroundColor={PALETTE_V1.yellow_button}>
              미리보기
            </SquareButton>
            <SquareButton backgroundColor={PALETTE_V1.yellow_button}>
              편지생성
            </SquareButton>
          </W.ButtonWrapper>
          <W.BallonBottom1 id="ballon4">
            작성을 마무리하고 편지를 생성합니다.
          </W.BallonBottom1>
        </W.ExplanationWrapper>
      </W.PageWrapper>
    </W.PageContainer>
  );
}

export default WriteLetter;
