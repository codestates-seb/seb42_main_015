import React, { useEffect, useRef, useState } from "react";
import * as W from "./WriteStyled";
import { BiMicrophone, BiFontColor } from "react-icons/bi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
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
import useStore from "../../store/store";

function WriteLetter() {
  const [openExplaination, setOpenExplaination] = useState(false);
  const [sendMeChecked, setSendMeChecked] = useState(false);
  const [openSendMe, setOpenSendMe] = useState(false);
  const [activeIcon, setActiveIcon] = useState("");
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

  const { letterContents, setLetterContents } = useStore((state) => state);

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
      if (activeIcon === "폰트변경") {
        setActiveIcon("");
      } else {
        if (listening) {
          SpeechRecognition.stopListening();
        }
        setActiveIcon("폰트변경");
      }
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
      setLetterContents({
        ...letterContents,
        theme: letterTheme[letterTheme.length - 1],
      });
    } else {
      setCurrentLetterTheme({
        ...letterContents,
        theme: letterTheme[letterTheme.indexOf(currentLetterTheme) - 1],
      });
      setLetterContents({
        ...letterContents,
        theme: letterTheme[letterTheme.indexOf(currentLetterTheme) - 1],
      });
    }
  };
  const handleThemeRight = () => {
    if (letterTheme.indexOf(currentLetterTheme) === letterTheme.length - 1) {
      setCurrentLetterTheme(letterTheme[0]);
      setLetterContents({ ...letterContents, theme: letterTheme[0] });
    } else {
      setCurrentLetterTheme(
        letterTheme[letterTheme.indexOf(currentLetterTheme) + 1]
      );
      setLetterContents({
        ...letterContents,
        theme: letterTheme[letterTheme.indexOf(currentLetterTheme) + 1],
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
  }, []);

  useEffect(() => {
    setLetterContents({ ...letterContents, theme: letterTheme[contentLength] });
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
          ContainerWidth={browserSize > 767 ? "500px" : "300px"}
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
              <W.BallonWrapper>
                {!browserSupportsSpeechRecognition ? (
                  <div>음성인식이 불가능한 브라우저</div>
                ) : (
                  <BiMicrophone
                    onClick={handleActiveIcon}
                    className={
                      listening && activeIcon === "음성인식"
                        ? "active-icon microphone-icon"
                        : "microphone-icon"
                    }
                    id="음성인식"
                  />
                )}
                {openExplaination ? (
                  <W.BallonBottom1 className="stt-button">
                    음성인식으로 편지를 작성할 수 있습니다.
                  </W.BallonBottom1>
                ) : (
                  <></>
                )}
              </W.BallonWrapper>

              <W.BallonWrapper>
                <BiFontColor
                  onClick={handleActiveIcon}
                  className={
                    activeIcon === "폰트변경"
                      ? "active-icon font-icon"
                      : "font-icon"
                  }
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
            <IoIosArrowBack
              onClick={handleThemeLeft}
              className="arrow-backward-icon"
            />
          </W.ThemeIcon>
          <W.FlexColunmWrapper className="letter">
            <W.LetterWrapper>
              {browserSize <= 767 ? (
                <W.FlexRowWrapper>
                  <W.BallonWrapper>
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
                        id="음성인식"
                      />
                    )}
                    {openExplaination ? (
                      <W.BallonTop className="stt-button">
                        음성인식으로 편지를 작성할 수 있습니다.
                      </W.BallonTop>
                    ) : (
                      <></>
                    )}
                  </W.BallonWrapper>

                  <W.BallonWrapper>
                    <BiFontColor
                      onClick={handleActiveIcon}
                      className={
                        activeIcon === "폰트변경"
                          ? "active-icon font-icon"
                          : "font-icon"
                      }
                      id="폰트변경"
                    />
                    {activeIcon === "폰트변경" ? <FontMenu /> : <></>}
                    {openExplaination ? (
                      browserSize > 767 ? (
                        <W.BallonTop className="ballon2">
                          글씨체를 변경할 수 있습니다.
                        </W.BallonTop>
                      ) : (
                        <W.BallonLeft className="change-font">
                          글씨체를 변경할 수 있습니다.
                        </W.BallonLeft>
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
