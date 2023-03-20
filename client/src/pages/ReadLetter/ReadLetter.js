import { useState, useRef, useEffect, useCallback } from "react";
import * as R from "./ReadStyled";
import { PALETTE_V1 } from "../../style/color";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import SecretLetter from "./SecetLetter";
import ShadowButton from "../commons/ShadowButton";
import Modal from "../commons/Modal";
import LoginModal from "./LoginModal";
import { AiOutlineSound, AiTwotoneSound } from "react-icons/ai";
import { getSpeech } from "./GetSpeech";

const ReadLetter = ({ isLogin }) => {
  //비밀번호 쳤는지 안쳤는지
  const [enterPassword, setEnterPassword] = useState(false);
  //보관하기를 클릭했을 때 비로그인(저장X)인지 로그인(저장준비 완료)아닌지
  const [isKeeping, setIsKeeping] = useState(false);
  //'보관하기' 버튼 누르면 모달 나오는 이벤트 핸들러
  const handleKeeping = () => {
    setIsKeeping(!isKeeping);
  };

  //! 미리보기 사진 저장 기능
  //useRef로 -> DOM 선택
  const LetterRef = useRef();
  //이미지로 저장하기 버튼
  const onDownloadBtn = () => {
    const letter = LetterRef.current;
    domtoimage.toBlob(letter).then((blob) => {
      saveAs(blob, "letter.png");
    });
  };

  //! 음성 tts api
  // const [voiceValue, voiceSetValue] = useState(`${R.LetterEx}`);
  const [voiceValue, voiceSetValue] = useState("안녕");
  const [activeIcon, setActiveIcon] = useState("");
  console.log(voiceValue);

  const handleSpeechButton = () => {
    getSpeech(voiceValue);
    setActiveIcon(activeIcon);
  };

  //음성 변환 목소리 preload
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  return (
    <>
      {isLogin || enterPassword ? (
        <R.Wrapper>
          <div className="ReadContainer">
            <div className="top-sub">
              <AiOutlineSound
                size="45"
                onClick={handleSpeechButton}
                className="speech-icon"
                // className={activeIcon ? "active-speech-icon" : "speech-icon"}
              />
              <R.EnterSeret>
                비밀번호
                <input placeholder="****" />
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
            <R.Buttons>
              <ShadowButton
                backgroundColor={PALETTE_V1.yellow_button}
                state="none-block"
                onClick={onDownloadBtn}
              >
                이미지 저장
              </ShadowButton>
              {isLogin ? (
                <ShadowButton
                  backgroundColor={PALETTE_V1.aready_keep_button}
                  state="block"
                >
                  보관완료
                </ShadowButton>
              ) : (
                <ShadowButton
                  backgroundColor={PALETTE_V1.yellow_button}
                  state="none-block"
                  onClick={handleKeeping}
                >
                  보관하기
                </ShadowButton>
              )}
              {isKeeping ? (
                <R.ModalBackground>
                  <Modal ContainerHeight={"350px"} children={<LoginModal />} />
                </R.ModalBackground>
              ) : (
                <></>
              )}
            </R.Buttons>
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
! 서버 오픈 전 끝내야 할일  
2. 버튼
  //- 이미지로 저장하기 -> 이미지 캡쳐 기능 추가
  //- 보관하기 -> 로그인 페이지로 이동
  //- 보관완료 -> 로그인 상태를 받아 로그인한 회원이면 보관하기에서-> 보관완료로 이름 변경

//3. 로그인 상태이면
//  - 비밀번호 입력 모달이 안나온다.

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
! 음성 APi
  - 편지를 읽어주는 기능 -> 검색하기

! 3/17 오늘 끝내야 할일
//0. 편지 정보 위치 지정하기
  //- to
  //- 날짜
  //- content
  //- from

//1. 로그인 모달 만들기
  //- 로그인 reaco-form 

! 3/20 오늘 할일
  1. 보관완료 상태가 되면 ->  왼쪽 되돌아가기 버튼 -> 우편함으로 이동 "/letterbox"
  2. 음성 APi -> 편지 읽어주는 기능 추가
  3. 로그인 모달 밖 영역 누르면 모달 닫기

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
