import React, { useEffect, useRef, useState } from "react";
import * as W from "./WriteStyled";
import { BiMicrophone, BiFontColor, BiLock, BiLockOpen } from "react-icons/bi";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { SlQuestion } from "react-icons/sl";
import { PALETTE_V1 } from "../../style/color";
import LetterContent from "./LetterContent";
import axiosCall from "../../util/axiosCall";
import AudioRecord from "./AudioRecord";
import SquareButton from "../commons/SquareButton";
import SendMeModal from "./SendMeModal";
import Modal from "../commons/Modal";
import FontMenu from "./FontMenu";
import ShadowButton from "../commons/ShadowButton";

function WriteLetter() {
  const [openExplaination, setOpenExplaination] = useState(false);
  const [sendMe, setSendMe] = useState(false);
  const [openFont, setOpenFont] = useState(false);

  const handleOpenExplanation = () => {
    setOpenExplaination(!openExplaination);
  };
  const handleOpenFont = () => {
    setOpenFont(!openFont);
  };

  return (
    <W.PageContainer>
      {openExplaination || sendMe ? <W.ExplainationBackground /> : <></>}
      {sendMe ? (
        <Modal
          ContainerHeight={"350px"}
          children={<SendMeModal sendMe={sendMe} setSendMe={setSendMe} />}
        />
      ) : (
        <></>
      )}
      <W.PageWrapper>
        <W.FlexWrapper2>
          <W.IconWrapper>
            {/* <AudioRecord /> */}
            <BiMicrophone className="microphone-icon" size="30" />
            <W.BallonWrapper>
              <BiFontColor
                onClick={handleOpenFont}
                className="font-icon"
                size="30"
              />
              {openFont ? <FontMenu /> : <></>}
              {openExplaination ? (
                <W.BallonTop id="ballon2">
                  글씨체를 변경할 수 있습니다.
                </W.BallonTop>
              ) : (
                <></>
              )}
            </W.BallonWrapper>
          </W.IconWrapper>
          <W.ThemeIcon>
            <MdArrowBackIos className="arrow-backward-icon" size="30" />
          </W.ThemeIcon>
          <W.LetterWrapper>
            <LetterContent
              openExplaination={openExplaination}
              sendMe={sendMe}
              setSendMe={setSendMe}
            />
            <W.BallonWrapper>
              <W.TextCount>0/7000</W.TextCount>
              {openExplaination ? (
                <W.BallonTop id="ballon3">
                  글자 수를 확인할 수 있습니다.
                </W.BallonTop>
              ) : (
                <></>
              )}
            </W.BallonWrapper>
          </W.LetterWrapper>
          <W.ThemeIcon>
            <MdArrowForwardIos className="arrow-forward-icon" size="30" />
          </W.ThemeIcon>
        </W.FlexWrapper2>
        <W.ButtonContainer>
          <W.ButtonWrapper>
            <SlQuestion
              onClick={handleOpenExplanation}
              className="question-icon"
              size="30"
            />
            <W.BallonWrapper className="button">
              {openExplaination ? (
                <W.BallonBottom2 id="ballon5">
                  작성한 편지를 미리 볼 수 있습니다.
                </W.BallonBottom2>
              ) : (
                <></>
              )}
              <ShadowButton backgroundColor={PALETTE_V1.yellow_button}>
                미리보기
              </ShadowButton>
            </W.BallonWrapper>
            <W.BallonWrapper className="button">
              {openExplaination ? (
                <W.BallonBottom1 id="ballon4">
                  작성을 마무리하고 편지를 생성합니다.
                </W.BallonBottom1>
              ) : (
                <></>
              )}
              <ShadowButton backgroundColor={PALETTE_V1.yellow_button}>
                편지생성
              </ShadowButton>
            </W.BallonWrapper>
          </W.ButtonWrapper>
        </W.ButtonContainer>
      </W.PageWrapper>
    </W.PageContainer>
  );
}

export default WriteLetter;
