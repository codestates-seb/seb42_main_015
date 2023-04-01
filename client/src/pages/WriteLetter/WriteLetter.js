import React, { useEffect, useRef, useState } from "react";
import * as W from "./WriteStyled";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { SlQuestion } from "react-icons/sl";
import { PALETTE_V1 } from "../../style/color";
import LetterContent from "./LetterContent";
import SendMeModal from "./SendMeModal";
import Modal from "../commons/Modal";
import ShadowButton from "../commons/ShadowButton";
import MakeLetter from "./MakeLetter";
import useStore from "../../store/store";
import MenuBar from "./MenuBar";
import { useSpeechRecognition } from "react-speech-recognition";
import { useNavigate } from "react-router-dom";

function WriteLetter() {
  const navigate = useNavigate();
  if (!sessionStorage.getItem("memberId")) {
    navigate("/");
  }
  const [openExplaination, setOpenExplaination] = useState(false);
  const [sendMeChecked, setSendMeChecked] = useState(false);
  const [openSendMe, setOpenSendMe] = useState(false);
  const [openMakeLetter, setOpenMakeLetter] = useState(false);
  const [isContentVaild, setIsContentVaild] = useState(false);
  const [startDate, setStartDate] = useState(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 1
    )
  );
  const [contentLength, setContentLength] = useState(0);
  const letterTheme = [
    "구름",
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
  const { transcript, resetTranscript, finalTranscript } =
    useSpeechRecognition();
  const [browserSize, setBrowserSize] = useState();

  const { letterContents, setLetterContents } = useStore();
  const sendMeModalRef = useRef();
  const makeLetterModalRef = useRef();

  const handleOpenExplanation = () => {
    setOpenExplaination(!openExplaination);
  };

  const handleModal = (e) => {
    if (openSendMe && !sendMeModalRef.current.contains(e.target)) {
      setOpenSendMe(false);
    } else if (
      openMakeLetter &&
      !makeLetterModalRef.current.contains(e.target)
    ) {
      setOpenMakeLetter(false);
      setLetterContents({ ...letterContents, password: null, urlName: null });
    }
  };
  const handleThemeLeft = () => {
    if (letterTheme.indexOf(letterContents.themeName) === 0) {
      setLetterContents({
        ...letterContents,
        themeName: letterTheme[letterTheme.length - 1],
      });
    } else {
      setLetterContents({
        ...letterContents,
        themeName:
          letterTheme[letterTheme.indexOf(letterContents.themeName) - 1],
      });
    }
  };
  const handleThemeRight = () => {
    if (
      letterTheme.indexOf(letterContents.themeName) ===
      letterTheme.length - 1
    ) {
      setLetterContents({ ...letterContents, themeName: letterTheme[0] });
    } else {
      setLetterContents({
        ...letterContents,
        themeName:
          letterTheme[letterTheme.indexOf(letterContents.themeName) + 1],
      });
    }
  };
  const handleOpenMakeLetter = (e) => {
    setOpenMakeLetter(!openMakeLetter);
  };
  const getBrowserSize = () => {
    setBrowserSize(window.innerWidth);
  };

  window.addEventListener("resize", getBrowserSize);

  useEffect(() => {
    setBrowserSize(window.innerWidth);
    setLetterContents({
      toName: null,
      fromName: null,
      content: null,
      password: null,
      urlName: null,
      fontName: "프리텐다드",
      themeName: letterTheme[contentLength],
    });
  }, []);

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
              browserSize={browserSize}
              setBrowserSize={setBrowserSize}
            />
          }
        />
      ) : (
        <></>
      )}
      {openMakeLetter ? (
        <Modal
          className="make-letter-modal"
          ContainerWidth={
            browserSize > 767 ? "500px" : browserSize < 360 ? "240px" : "300px"
          }
          ContainerHeight={browserSize > 767 ? "800px" : "600px"}
          children={<MakeLetter makeLetterModalRef={makeLetterModalRef} />}
        />
      ) : (
        <></>
      )}
      <W.PageWrapper id="page-wrapper">
        <W.FlexWrapper2 id="flex-wrapper">
          {browserSize > 767 ? (
            <W.IconWrapper>
              <MenuBar openExplaination={openExplaination} />
            </W.IconWrapper>
          ) : (
            <></>
          )}
          <W.ThemeIcon>
            <IoIosArrowBack
              onClick={handleThemeLeft}
              className="arrow-backward-icon"
            />
          </W.ThemeIcon>
          <W.FlexColunmWrapper className="letter">
            <W.LetterWrapper>
              {browserSize <= 767 ? (
                <W.FlexRowWrapper>
                  <MenuBar openExplaination={openExplaination} />
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
                currentLetterTheme={letterContents.themeName}
                browserSize={browserSize}
                setIsContentVaild={setIsContentVaild}
              />
              <W.BallonWrapper>
                <W.TextCount>{contentLength}/7000</W.TextCount>
                {openExplaination ? (
                  browserSize > 767 ? (
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
              />
              <W.BallonWrapper className="button">
                {openExplaination ? (
                  browserSize > 767 ? (
                    <W.BallonBottom2 className="make-letter-button">
                      작성을 마무리하고 편지를 생성합니다.
                    </W.BallonBottom2>
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
                <ShadowButton
                  onClick={isContentVaild ? handleOpenMakeLetter : () => {}}
                  backgroundColor={
                    isContentVaild ? PALETTE_V1.yellow_button : "#d9d9d9"
                  }>
                  편지생성
                </ShadowButton>
              </W.BallonWrapper>
            </W.ButtonWrapper>
          </W.FlexColunmWrapper>
          <W.ThemeIcon>
            <IoIosArrowForward
              onClick={handleThemeRight}
              className="arrow-forward-icon"
            />
          </W.ThemeIcon>
        </W.FlexWrapper2>
      </W.PageWrapper>
    </W.PageContainer>
  );
}

export default WriteLetter;
