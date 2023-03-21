import React, { forwardRef, useEffect, useRef, useState } from "react";
import * as W from "./WriteStyled";
import { BiMicrophone, BiFontColor } from "react-icons/bi";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { SlQuestion } from "react-icons/sl";
import { PALETTE_V1 } from "../../style/color";
import LetterContent from "./LetterContent";
import SendMeModal from "./SendMeModal";
import Modal from "../commons/Modal";
import FontMenu from "./FontMenu";
import ShadowButton from "../commons/ShadowButton";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MakeLetter from "./MakeLetter";

function WriteLetter() {
  const [openExplaination, setOpenExplaination] = useState(false);
  const [sendMeChecked, setSendMeChecked] = useState(false);
  const [openSendMe, setOpenSendMe] = useState(false);
  const [activeIcon, setActiveIcon] = useState("");
  const [openMakeLetter, setOpenMakeLetter] = useState(false);
  const [startDate, setStartDate] = useState(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 1
    )
  );
  const [contentLength, setContentLength] = useState(0);
  const [currentLetterTheme, setCurrentLetterTheme] = useState("군대");
  const letterTheme = [
    "군대",
    "냥냥편지",
    "리본",
    "수박",
    "알록달록",
    "체리",
    "클로버",
    "정월대보름",
    "얼룩",
    "오리",
  ];
  const sendMeModalRef = useRef();
  const makeLetterModalRef = useRef();
  const {
    transcript,
    listening,
    resetTranscript,
    finalTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleOpenExplanation = () => {
    setOpenExplaination(!openExplaination);
  };
  const handleActiveIcon = (e) => {
    if (e.currentTarget.id === "음성인식") {
      if (activeIcon === "음성인식") {
        SpeechRecognition.stopListening();
        setActiveIcon("");
      } else {
        setActiveIcon("음성인식");
        navigator.mediaDevices.getUserMedia({ audio: true }).catch((err) => {
          alert(
            "오른쪽 상단에서 마이크 허용이 필요합니다. 마이크 허용 후 페이지를 새로고침해주세요."
          );
        });
        SpeechRecognition.startListening({ continuous: true, language: "ko" });
      }
    } else if (e.currentTarget.id === "폰트변경") {
      setActiveIcon("폰트변경");
    }
  };
  const handleModal = (e) => {
    if (openSendMe && !sendMeModalRef.current.contains(e.target)) {
      setOpenSendMe(false);
    } else if (
      openMakeLetter &&
      !makeLetterModalRef.current.contains(e.target)
    ) {
      setOpenMakeLetter(false);
    }
  };
  const handleThemeLeft = () => {
    if (letterTheme.indexOf(currentLetterTheme) === 0) {
      setCurrentLetterTheme(letterTheme[letterTheme.length - 1]);
    } else {
      setCurrentLetterTheme(
        letterTheme[letterTheme.indexOf(currentLetterTheme) - 1]
      );
    }
  };
  const handleThemeRight = () => {
    if (letterTheme.indexOf(currentLetterTheme) === letterTheme.length - 1) {
      setCurrentLetterTheme(letterTheme[0]);
    } else {
      setCurrentLetterTheme(
        letterTheme[letterTheme.indexOf(currentLetterTheme) + 1]
      );
    }
  };
  const handleOpenMakeLetter = (e) => {
    setOpenMakeLetter(!openMakeLetter);
  };

  return (
    <W.PageContainer onClick={handleModal}>
      {openExplaination || openSendMe || openMakeLetter ? (
        <W.ExplainationBackground />
      ) : (
        <></>
      )}
      {openSendMe ? (
        <Modal
          ContainerHeight={"350px"}
          children={
            <SendMeModal
              sendMeModalRef={sendMeModalRef}
              startDate={startDate}
              setStartDate={setStartDate}
              setOpenSendMe={setOpenSendMe}
              setSendMeChecked={setSendMeChecked}
            />
          }
        />
      ) : (
        <></>
      )}
      {openMakeLetter ? (
        <Modal
          ContainerWidth="450px"
          ContainerHeight="700px"
          children={<MakeLetter makeLetterModalRef={makeLetterModalRef} />}
        />
      ) : (
        <></>
      )}
      <W.PageWrapper>
        <W.FlexWrapper2>
          <W.IconWrapper>
            {!browserSupportsSpeechRecognition ? (
              <div>음성인식이 불가능한 브라우저</div>
            ) : (
              <BiMicrophone
                onClick={handleActiveIcon}
                className={
                  listening ? "active-icon microphone-icon" : "microphone-icon"
                }
                size="50"
                id="음성인식"
              />
            )}

            <W.BallonWrapper>
              <BiFontColor
                onClick={handleActiveIcon}
                className={
                  activeIcon === "폰트변경"
                    ? "active-icon font-icon"
                    : "font-icon"
                }
                size="50"
                id="폰트변경"
              />
              {activeIcon === "폰트변경" ? <FontMenu /> : <></>}
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
            <MdArrowBackIos
              onClick={handleThemeLeft}
              className="arrow-backward-icon"
              size="30"
            />
          </W.ThemeIcon>
          <W.LetterWrapper>
            <LetterContent
              sendMeChecked={sendMeChecked}
              setSendMeChecked={setSendMeChecked}
              openExplaination={openExplaination}
              openSendMe={openSendMe}
              setOpenSendMe={setOpenSendMe}
              startDate={startDate}
              setContentLength={setContentLength}
              transcript={transcript}
              finalTranscript={finalTranscript}
              resetTranscript={resetTranscript}
              currentLetterTheme={currentLetterTheme}
            />
            <W.BallonWrapper>
              <W.TextCount>{contentLength}/7000</W.TextCount>
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
            <MdArrowForwardIos
              onClick={handleThemeRight}
              className="arrow-forward-icon"
              size="30"
            />
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
              <ShadowButton
                onClick={handleOpenMakeLetter}
                backgroundColor={PALETTE_V1.yellow_button}>
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
