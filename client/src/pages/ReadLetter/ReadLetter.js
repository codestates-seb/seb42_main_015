import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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

const ReadLetter = ({ isLogin }) => {
  const url = new URL(window.location.href);
  const urlParams = url.searchParams.get("password"); //url파라미터값
  const { id } = useParams();

  //todo: useState
  //비밀번호가 있는지 없는지
  const [isPassword, setIsPassword] = useState(false);
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

  //! 전체 편지정보 가져오기
  // useEffect(() => {
  //   const getLetterData = async () => {
  //     await axios
  //       .get(`/api/sendy/messages/${id}/${urlParams}`, { headers })
  //       .then((res) => {
  //         setData(res.body);
  //       })
  //       .catch((err) => {
  //         // alert(err);
  //         // console.log(err);
  //       });
  //   };
  //   getLetterData();
  // }, [data]);

  const getLetter = async () => {
    await axios
      //hisdf -> {urlName}
      .get(`/api/sendy/messages/hisdf`, {
        headers: {
          "ngrok-skip-browser-warning": "12",
          Authorization: `${getCookie("accesstoken")}`,
        },
      })
      .then((res) => {
        setData(res.data);
        //편지 정보 담기
        if (res.data.password !== null) {
          setIsPassword(true);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  useEffect(() => {
    getLetter();
  }, [data]);
  //! data --> 몇번 렌더링 되는지 확인!

  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const LetterDate = `${new Date(`${data.createdAt}`).getFullYear()}.${(
    "00" +
    (new Date(`${data.createdAt}`).getMonth() + 1)
  ).slice(-2)}.${("00" + new Date(`${data.createdAt}`).getDate()).slice(-2)} ${
    weekday[new Date().getDay()]
  }`;

  return (
    <>
      {isLogin || isPassword ? (
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
            <R.Letterpaper ref={LetterRef}>
              <div className="top">
                <div className="to">To. {data.toName}</div>
                <div className="date">{LetterDate}</div>
              </div>
              <div className="content">{data.content}</div>
              <div className="from">From. {data.fromName}</div>
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
          isPassword={isPassword}
          setIsPassword={setIsPassword}
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

/*
if (res.body.password === numberpassword) {
          alert("비밀번호가 일치합니다! 어떤 편지가 왔을까요?");
          //todo : numberpassword -> Zstand에 넣어서 readletter에게 전달
          setEnterPassword(!enterPassword);
        } else {
          alert("비밀번호가 일치하지 않습니다. 편지를 열 수 없어요.");
        }

*/
//비밀번호가 있으면 -> 1)시크릿레터로 이동하고, 2)해당 비밀번호도 props로 함께 전달
//보관여부 -> 보관완료/보관하기 버튼 바꾸기
//보관하기(messageSaved) 어떻게 할건지 -> 월요일 회의때 논의 !
//비밀번호 있으면 -> 보여주고, 없으면 ---- 표시로 바꿔주기.
//폰트랑 테마는 어떻게 전달할거 ???
//url 정보 어떻게 받아올꺼 ?
