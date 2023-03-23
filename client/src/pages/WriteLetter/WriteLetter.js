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
import { BREAKPOINTMOBILE2 } from "../../breakpoint";

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
  const [browserSize, setBrowserSize] = useState();
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
  const getBrowserSize = () => {
    if (window.innerWidth > BREAKPOINTMOBILE2) {
    } else {
      setBrowserSize(window.innerWidth);
    }
  };
  window.addEventListener("resize", getBrowserSize);
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
          {browserSize > 360 ? (
            <W.IconWrapper>
              {!browserSupportsSpeechRecognition ? (
                <div>음성인식이 불가능한 브라우저</div>
              ) : (
                <BiMicrophone
                  onClick={handleActiveIcon}
                  className={
                    listening
                      ? "active-icon microphone-icon"
                      : "microphone-icon"
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
                  <W.BallonTop className="ballon2">
                    글씨체를 변경할 수 있습니다.
                  </W.BallonTop>
                ) : (
                  <></>
                )}
              </W.BallonWrapper>
            </W.IconWrapper>
          ) : (
            <></>
          )}
          <W.ThemeIcon>
            <MdArrowBackIos
              onClick={handleThemeLeft}
              className="arrow-backward-icon"
              size="30"
            />
          </W.ThemeIcon>
          <W.FlexColunmWrapper>
            <W.LetterWrapper>
              {browserSize <= 360 ? (
                <W.FlexRowWrapper>
                  {!browserSupportsSpeechRecognition ? (
                    <div>음성인식이 불가능한 브라우저</div>
                  ) : (
                    <BiMicrophone
                      onClick={handleActiveIcon}
                      className={
                        listening
                          ? "active-icon microphone-icon"
                          : "microphone-icon"
                      }
                      size="25"
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
                      size="25"
                      id="폰트변경"
                    />
                    {activeIcon === "폰트변경" ? <FontMenu /> : <></>}
                    {openExplaination ? (
                      browserSize > 360 ? (
                        <W.BallonTop className="ballon2">
                          글씨체를 변경할 수 있습니다.
                        </W.BallonTop>
                      ) : (
                        <W.BallonBottom1>
                          글씨체를 변경할 수 있습니다.
                        </W.BallonBottom1>
                      )
                    ) : (
                      <></>
                    )}
                  </W.BallonWrapper>
                </W.FlexRowWrapper>
              ) : (
                <></>
              )}
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
                  browserSize > 360 ? (
                    <W.BallonTop id="ballon3">
                      글자 수를 확인할 수 있습니다.
                    </W.BallonTop>
                  ) : (
                    <W.BallonTop className="ballon2">
                      글자 수를 확인할 수 있습니다.
                    </W.BallonTop>
                  )
                ) : (
                  <></>
                )}
              </W.BallonWrapper>
            </W.LetterWrapper>
            <W.ButtonWrapper>
              <SlQuestion
                onClick={handleOpenExplanation}
                className="question-icon"
                size="30"
              />
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
          </W.FlexColunmWrapper>
          <W.ThemeIcon>
            <MdArrowForwardIos
              onClick={handleThemeRight}
              className="arrow-forward-icon"
              size="30"
            />
          </W.ThemeIcon>
        </W.FlexWrapper2>
      </W.PageWrapper>
    </W.PageContainer>
  );
}

export default WriteLetter;
