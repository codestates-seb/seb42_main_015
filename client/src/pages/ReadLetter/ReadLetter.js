import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as R from "./ReadStyled";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import SecretLetter from "./SecetLetter";
import { AiOutlineSound } from "react-icons/ai";
import { HiPause } from "react-icons/hi2";
import { getSpeech, pauseSpeech } from "./GetSpeech";
import ReadButtons from "./ReadButtons";
import axios from "axios";

const ReadLetter = ({ isLogin }) => {
  const url = new URL(window.location.href);
  const urlParams = url.searchParams.get("password"); //url파라미터값
  const { id } = useParams();
  console.log(id);

  //todo: useState
  //비밀번호 쳤는지 안쳤는지
  const [enterPassword, setEnterPassword] = useState(false);
  //보관하기를 클릭했을 때 비로그인(저장X)인지 로그인(저장준비 완료)아닌지
  const [isKeeping, setIsKeeping] = useState(false);
  //편지 정보 가져오기
  const [data, setData] = useState([]);

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
    if (isKeeping && !ModalRef.current.contains(e.target)) {
      setIsKeeping(false);
    }
  };

  //! 음성 tts api
  //음성 value 상태
  const voiceValue = `${R.LetterEx}`;

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

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "12",
  };

  //! 전체 편지정보 가져오기
  useEffect(() => {
    const getLetterData = async () => {
      await axios
        .get(`/api/sendy/messages/${id}/${urlParams}`, { headers })
        .then((res) => {
          setData(res.body);
        })
        .catch((err) => {
          // alert(err);
          // console.log(err);
        });
    };
    getLetterData();
  }, [data]);

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
                <p>****</p>
              </R.EnterSeret>
            </div>
            <R.Letterpaper ref={LetterRef}>
              <div className="top">
                <div className="to">To. 김햄찌</div>
                <div className="date">2023.03.17 금</div>
              </div>
              <div className="content">{R.LetterEx}</div>
              <div className="from">From. 오디토</div>
            </R.Letterpaper>
            <ReadButtons
              ModalRef={ModalRef}
              isKeeping={isKeeping}
              setIsKeeping={setIsKeeping}
              isLogin={isLogin}
              onDownloadBtn={onDownloadBtn}
            />
          </div>
        </R.Wrapper>
      ) : (
        <SecretLetter
          enterPassword={enterPassword}
          setEnterPassword={setEnterPassword}
        />
      )}
    </>
  );
};

export default ReadLetter;

/*
! 서버 오픈 후 할일
1. 비밀번호 검증
  - 편지 비밀번호 인증
2. get 요청으로 해당 편지 정보 가져오기
  - 비밀번호 input placeholder로 넣어주기
  - 테마
  - 폰트
  - 편지 to
  - 날짜
  - content
  - 이미지
  - 편지 from
3. 로그인 모달
  - 로그인 처리
  - 로그인되면 로그인 상태로 변환 (헤더 등)
  - 로그인 후 보관하기 버튼 누르면 -> 보관 모드로 상태 변경
  - 왼쪽 되돌아가기 버튼 -> 우편함으로 이동 "/letterbox"


! 로그인 / 비로그인 시 로직
? 비회원일시
//1. 비밀번호 입력 페이지가 나옴
2. 버튼
  // 1) 이미지 저장 -> 이미지를 저장할 수 있음
  // 2) 보관하기를 누르면 -> 로그인 모달이 뜸 
    -> 로그인 버튼을 통해 로그인 화면으로 로딩, setIsLogin으로 상태 변경
  3) 보관하기를 누르면 보관처리 -> 이건 백이랑 의논필요
  // 4) 보관하기가 처리되면 '보관완료'로 이름 변경 및 클릭 안됨

? 회원일 시
//1. 비밀번호 입력 페이지가 안나옴
2. 버튼
  //1) 이미지 저장 -> 이미지를 저장할 수 있음
  //2) 보관완료 버튼 -> 클릭 안됨
*/
