import React from "react";
import * as W from "./WriteStyled";
import { BiMicrophone, BiFontColor } from "react-icons/bi";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import FontMenu from "./FontMenu";

function MenuBar({ openExplaination, activeIcon, setActiveIcon, fontMenuRef }) {
  const { listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
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
        SpeechRecognition.startListening({
          continuous: true,
          language: "ko",
        });
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

  return (
    <>
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
            activeIcon === "폰트변경" ? "active-icon font-icon" : "font-icon"
          }
          id="폰트변경"
        />
        {activeIcon === "폰트변경" ? (
          <FontMenu fontMenuRef={fontMenuRef} />
        ) : (
          <></>
        )}
        {openExplaination ? (
          <W.BallonTop className="ballon2">
            글씨체를 변경할 수 있습니다.
          </W.BallonTop>
        ) : (
          <></>
        )}
      </W.BallonWrapper>
    </>
  );
}

export default MenuBar;
