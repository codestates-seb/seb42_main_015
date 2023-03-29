import { useState, useRef, useEffect, useLayoutEffect } from "react";
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

//{isLogin} props 제거
const ReadLetter = ({ isLogin }) => {
  const { urlName } = useParams();
  const { letterPassword, setLetterPassword, messageId, setMessageId } =
    useStore();
  const [isLoading, setIsLoading] = useState(false);

  //todo useState
  //비밀번호 쳤는지 안쳤는지
  const [enterPassword, setEnterPassword] = useState(false);
  //보관하기를 클릭했을 때 비로그인(저장X)인지 로그인(저장준비 완료)아닌지
  const [isKeeping, setIsKeeping] = useState(false);
  //편지 정보 가져오기
  const [data, setData] = useState([]);
  //모달 클릭
  const [isClickModal, setIsClickModal] = useState(false);
  //편지 rotate
  const [rotate, setRotate] = useState(false);

  //todo 이미지 저장 기능
  //useRef로 -> DOM 선택
  const LetterRef = useRef();
  //이미지로 저장하기 버튼
  const onDownloadBtn = () => {
    setIsLoading(true);
    const letter = LetterRef.current;
    domtoimage.toBlob(letter).then((blob) => {
      setTimeout(() => {
        alert("편지가 저장되었어요!");
      }, 100);
      saveAs(blob, "letter.png");
      setIsLoading(false);
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
        if (res.status === 401) {
          Refresh();
          getLetter();
        }
        //편지 정보 담기
        setData(res.data);
        //messageSaved 정보 담기
        setIsKeeping(res.data.messageSaved);
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
        console.log(err);
        alert(err);
      });
  };

  //음성 변환 목소리 preload
  useEffect(() => {
    window.speechSynthesis.getVoices();
    getLetter();
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <>
      {isLoading ? <Loading /> : ""}
      {/* islogin && */}
      {/* 비밀번호가 없거나 저장되어 있는 상태면 -> 비밀번호를 입력하지 않음  */}
      {enterPassword || isKeeping ? (
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
              <R.EnterSeret>
                비밀번호
                <p>{data.password}</p>
              </R.EnterSeret>
            </div>
            <R.Card className={rotate ? "active-rotate" : ""}>
              <R.Letterpaper
                className="front"
                ref={LetterRef}
                LetterTheme={data.themeName}
                onClick={handleRotate}
              >
                <div className="letterContent" Font={data.fontName}>
                  <div className="to" Font={data.fontName}>
                    To. {data.toName}
                  </div>
                  <div className="date">{LetterDate}</div>
                </div>
                <div className="content" Font={data.fontName}>
                  {data.content}
                </div>
                <div className="from" Font={data.fontName}>
                  From. {data.fromName}
                </div>
              </R.Letterpaper>
              <R.Letterpaper className="back" onClick={handleRotate}>
                <R.Date>{LetterDate}</R.Date>
                <R.BackImg src={data.messageImageUrl}></R.BackImg>
                <div className="preview-back-content">
                  <R.FlexWrapper1></R.FlexWrapper1>
                  <R.FlexWrapper1>
                    <R.NameInputWrapper className="preview">
                      {data.toName}에게
                    </R.NameInputWrapper>
                    <R.NameInputWrapper className="from-input preview">
                      {data.fromName}(이)가
                    </R.NameInputWrapper>
                  </R.FlexWrapper1>
                </div>
              </R.Letterpaper>
            </R.Card>
            <ReadButtons
              ModalRef={ModalRef}
              isKeeping={isKeeping}
              setIsKeeping={setIsKeeping}
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
      )}
    </>
  );
};

export default ReadLetter;
