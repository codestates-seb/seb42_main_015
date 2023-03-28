import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as R from "./ReadStyled";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import SecretLetter from "./SecretLetter";
import { AiOutlineSound } from "react-icons/ai";
import { HiPause } from "react-icons/hi2";
import { getSpeech, pauseSpeech } from "./GetSpeech";
import ReadButtons from "./ReadButtons";
import axios from "axios";
import { getCookie } from "../Certified/Cookie";
import useStore from "../../store/store";

//{isLogin} props 제거
const ReadLetter = ({ isLogin }) => {
  const { urlName } = useParams();
  const { letterPassword, setLetterPassword } = useStore((state) => state);

  //todo: useState
  //비밀번호 쳤는지 안쳤는지
  const [enterPassword, setEnterPassword] = useState(false);
  //보관하기를 클릭했을 때 비로그인(저장X)인지 로그인(저장준비 완료)아닌지
  const [isKeeping, setIsKeeping] = useState("");
  //편지 정보 가져오기
  const [data, setData] = useState([]);
  //모달 클릭
  const [isClickModal, setIsClickModal] = useState(false);

  //! 이미지 저장 기능
  //useRef로 -> DOM 선택
  const LetterRef = useRef();
  //이미지로 저장하기 버튼
  const onDownloadBtn = () => {
    const letter = LetterRef.current;
    domtoimage.toBlob(letter).then((blob) => {
      saveAs(blob, "letter.png");
    });
  };

  //! 모달 영역 밖 클릭 시 모달 닫기
  const ModalRef = useRef();
  const handleModal = (e) => {
    if (isClickModal && !ModalRef.current.contains(e.target)) {
      setIsClickModal(false);
    }
  };

  //! 음성 tts api
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

  //음성 변환 목소리 preload
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const getLetter = async () => {
    await axios
      .get(`/api/sendy/messages/${urlName}`, {
        headers: {
          "ngrok-skip-browser-warning": "12",
          Authorization: `${getCookie("accesstoken")}`,
        },
      })
      .then((res) => {
        //편지 정보 담기
        setData(res.data);
        //messageSaved 정보 담기
        setIsKeeping(res.data.messageSaved);
        //편지 비밀번호가 없다면(null이라면) -> setEnterPassword(true)처리해서 SecretLetter로 안가겠금
        if (res.data.password === null) {
          setEnterPassword(true);
        }
        //편지 비밀번호가 있다면(null이 아니라면) -> setLetterPassword에 패스워드 저장
        else if (res.data.password !== null) {
          setLetterPassword(res.data.password);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  useEffect(() => {
    getLetter();
  }, []);

  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const LetterDate = `${new Date(`${data.createdAt}`).getFullYear()}.${(
    "00" +
    (new Date(`${data.createdAt}`).getMonth() + 1)
  ).slice(-2)}.${("00" + new Date(`${data.createdAt}`).getDate()).slice(-2)} ${
    weekday[new Date(`${data.createdAt}`).getDay()]
  }`;

  //편지 넘기기
  const [rotate, setRotate] = useState(false);
  const handleRotate = () => {
    setRotate(!rotate);
  };

  return (
    <>
      {isLogin || enterPassword ? (
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
                <div className="top">
                  <div className="to">To. {data.toName}</div>
                  <div className="date">{LetterDate}</div>
                </div>
                <div className="content" font={data.fontName}>
                  {data.content}
                </div>
                <div className="from">From. {data.fromName}</div>
              </R.Letterpaper>
              <R.Letterpaper className="back" onClick={handleRotate}>
                <div>뒷장</div>
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
                <div className="top">
                  <div className="to">To. {data.toName}</div>
                  <div className="date">{LetterDate}</div>
                </div>
                <div className="content" font={data.fontName}>
                  {data.content}
                </div>
                <div className="from">From. {data.fromName}</div>
              </R.Letterpaper>
              <R.Letterpaper
                className="back"
                LetterTheme={data.themeName}
                onClick={handleRotate}
              >
                <div>뒷장</div>
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
      )}
    </>
  );
};

export default ReadLetter;
