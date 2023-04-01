import { useState, useRef, useEffect, useLocation, useCallback } from "react";
import { useParams } from "react-router-dom";
import * as R from "./ReadStyled";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import SecretLetter from "./SecretLetter";
import { AiOutlineSound } from "react-icons/ai";
import { HiPause } from "react-icons/hi2";
import { getSpeech, pauseSpeech } from "./GetSpeech";
import ReadButtons from "./ReadButtons";
import { getCookie } from "../Certified/Cookie";
import useStore from "../../store/store";
import { Loading } from "../../components/Loading";
import axios from "axios";
import Refresh from "../../util/Refresh";
import ShareButtons from "./ShareButtons";

const ReadLetter = ({ isLogin }) => {
  const { urlName } = useParams();
  const { letterPassword, setLetterPassword, setMessageId } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  //todo useState
  //비밀번호 쳤는지 안쳤는지
  const [enterPassword, setEnterPassword] = useState(false);
  //편지 정보 가져오기
  const [data, setData] = useState({});
  //모달 클릭
  const [isClickModal, setIsClickModal] = useState(false);
  //편지 rotate
  const [rotate, setRotate] = useState(false);

  //todo 이미지 저장 기능
  //useRef로 -> DOM 선택
  const LetterFrontRef = useRef();
  const LetterBackRef = useRef();

  //이미지로 저장하기 버튼
  const onDownloadBtn = () => {
    setIsLoading(true);
    domtoimage
      .toBlob(rotate ? LetterBackRef.current : LetterFrontRef.current)
      .then((Blob) => {
        setIsLoading(false);
        alert("편지가 저장되었어요!");
        saveAs(Blob, "letter.png");
      });
  };

  //todo 모달 영역 밖 클릭 시 모달 닫기
  const ModalRef = useRef();
  const handleModal = (e) => {
    if (isClickModal && !ModalRef.current.contains(e.target)) {
      setIsClickModal(false);
    }
  };

  //todo 음성 tts api
  //음성 value 상태
  const voiceValue = `${data.content}`;

  //음성tts speech 버튼
  const handleSpeechButton = () => {
    getSpeech(voiceValue);
  };
  //음성tts pause 버튼
  const handlePauseButton = () => {
    getSpeech(pauseSpeech());
  };

  //todo : 보관하기 상태 변경
  const handleMessageSaved = useCallback((value) => {
    setData((prevState) => ({ ...prevState, messageSaved: value }));
  }, []);

  //todo 메세지 정보 가져오기
  const getLetter = async () => {
    setIsLoading(true);
    await axios
      .get(`/api/sendy/messages/${urlName}`, {
        headers: {
          "ngrok-skip-browser-warning": "12",
          Authorization: `${getCookie("accesstoken")}`,
        },
      })
      .then((res) => {
        setLetterPassword("");
        //편지 정보 담기
        setData(res.data);
        //messageId 정보 담기
        setMessageId(res.data.messageId);
        //편지 비밀번호가 없다면(null이라면) -> setEnterPassword(true)처리해서 SecretLetter로 안가겠금
        if (res.data.password === null) {
          setEnterPassword(true);
        }
        //편지 비밀번호가 있다면(null이 아니라면) -> setLetterPassword에 패스워드 저장
        else if (res.data.password !== null) {
          setLetterPassword(res.data.password);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        while (err.response.status === 401) {
          Refresh().then(() => getLetter());
        }
      });
  };

  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const LetterDate = `${new Date(`${data.createdAt}`).getFullYear()}.${(
    "00" +
    (new Date(`${data.createdAt}`).getMonth() + 1)
  ).slice(-2)}.${("00" + new Date(`${data.createdAt}`).getDate()).slice(-2)} ${
    weekday[new Date(`${data.createdAt}`).getDay()]
  }`;

  //편지 넘기기
  const handleRotate = () => {
    setRotate(!rotate);
  };

  //todo : useEffect
  //음성 변환 목소리 preload
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  useEffect(() => {
    getLetter();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : ""}
      {/* 비밀번호가 없거나 저장되어data.messageSaved> 비밀번호를 입력하지 않음  */}
      {enterPassword || data.messageSaved ? (
        <R.Wrapper>
          <div className="ReadContainer" onClick={handleModal}>
            <div className="top-sub">
              <div className="soundButtons">
                <AiOutlineSound
                  size="30"
                  onClick={handleSpeechButton}
                  className="speech-icon"
                />
                <HiPause
                  size="30"
                  onClick={handlePauseButton}
                  className="pause-icon"
                />
              </div>
              {letterPassword ? (
                <R.EnterSeret>
                  비밀번호
                  <p>{data.password}</p>
                </R.EnterSeret>
              ) : (
                <></>
              )}
            </div>
            <R.Card className={rotate ? "active-rotate" : ""}>
              {/* 편지 앞장 이미지 저장 */}
              <div ref={LetterFrontRef}>
                <R.Triangle
                  onClick={handleRotate}
                  bordercolor={data.themeName}
                />
                <R.Letterpaper className="front" LetterTheme={data.themeName}>
                  <div className="letterContent" font={data.fontName}>
                    <R.To font={data.fontName}>To. {data.toName}</R.To>
                    <R.To font={data.fontName}>{LetterDate}</R.To>
                  </div>
                  <R.Content font={data.fontName}>{data.content}</R.Content>
                  <R.From font={data.fontName}>From. {data.fromName}</R.From>
                </R.Letterpaper>
              </div>
              {/* 편지 뒷장 이미지 저장 */}
              <R.Letterpaper
                className="back"
                LetterBackround={data.themeName}
                ref={LetterBackRef}
              >
                <R.Date font={data.fontName}>{LetterDate}</R.Date>
                {data.messageImageUrl ? (
                  // 이미지 있으면
                  <R.BackImg src={data.messageImageUrl}></R.BackImg>
                ) : (
                  // 이미지 없으면
                  <R.BackImg
                    src={require("../../asset/completeCat.png")}
                    border="none"
                  ></R.BackImg>
                )}
                <div className="preview-back-content">
                  <R.FlexWrapper1>
                    <R.Text font={data.fontName}>{data.toName}에게</R.Text>
                    <R.Text font={data.fontName}>{data.fromName}(이)가</R.Text>
                  </R.FlexWrapper1>
                </div>
              </R.Letterpaper>
            </R.Card>
            <ReadButtons
              isKeeping={data.messageSaved}
              handleMessageSaved={handleMessageSaved}
              ModalRef={ModalRef}
              isLogin={isLogin}
              onDownloadBtn={onDownloadBtn}
              isClickModal={isClickModal}
              setIsClickModal={setIsClickModal}
            />
          </div>
        </R.Wrapper>
      ) : (
        <R.Wrapper>
          <SecretLetter setEnterPassword={setEnterPassword} />
          <div className="ReadContainer" onClick={handleModal}>
            <div className="top-sub">
              <div className="soundButtons">
                <AiOutlineSound size="30" className="speech-icon" />
                <HiPause size="30" className="pause-icon" />
              </div>
              <R.EnterSeret>
                비밀번호 : <p>{data.password}</p>
              </R.EnterSeret>
            </div>
            <R.Letterpaper className="front" LetterTheme={data.themeName}>
              <div className="top">
                <div className="to">To. {data.toName}</div>
                <div className="date">{LetterDate}</div>
              </div>
              <div className="content" font={data.fontName}>
                {data.content}
              </div>
              <div className="from">From. {data.fromName}</div>
            </R.Letterpaper>
            <ReadButtons />
          </div>
        </R.Wrapper>
      )}{" "}
      <ShareButtons />
    </>
  );
};

export default ReadLetter;
