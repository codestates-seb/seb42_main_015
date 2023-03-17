import React, { useState } from "react";
import * as R from "./ReadStyled";
import SecretLetter from "./SecetLetter";
import { PALETTE_V1 } from "../../style/color";
import ShadowButton from "../commons/ShadowButton";
import LoginModal from "./LoginModal";

const ReadLetter = ({ isLogin }) => {
  //비밀번호 쳤는지 안쳤는지
  const [enterPassword, setEnterPassword] = useState(false);
  //보관하기를 클릭했을 때 비로그인(저장X)인지 로그인(저장준비 완료)아닌지
  const [isKeeping, setIsKeeping] = useState(false);

  const onClickLoginModal = () => {
    {
      isKeeping ? <LoginModal /> : <></>;
    }
  };

  return (
    <>
      <LoginModal />
      {isLogin || enterPassword ? (
        <R.Wrapper>
          <div className="ReadContainer">
            <R.EnterSeret>
              비밀번호
              <input placeholder="****" />
            </R.EnterSeret>
            <R.Letterpaper>
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
                >
                  보관하기
                </ShadowButton>
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
  - 이미지로 저장하기 -> 이미지 캡쳐 기능 추가
  - 보관하기 -> 로그인 페이지로 이동
  - 보관완료 -> 로그인 상태를 받아 로그인한 회원이면 보관하기에서-> 보관완료로 이름 변경

//3. 로그인 상태이면
//  - 비밀번호 입력 모달이 안나온다.

! 서버 오픈 후 할일
1. 비밀번호 검증
2. get 요청으로 해당 편지 정보 가져오기
  - 비밀번호 input placeholder로 넣어주기
  - 테마
  - 폰트
  - 편지 to
  - 날짜
  - content
  - 이미지
  - 편지 from
! 음성 APi
  - 편지를 읽어주는 기능 -> 검색하기

! 3/17 오늘 끝내야 할일
//0. 편지 정보 위치 지정하기
  //- to
  //- 날짜
  //- content
  //- from

1. 로그인 모달 만들기
  - 로그인 reaco-form 
  - 로그인되면 로그인 상태로 변환 (헤더 등)
  - 로그인 후 보관하기 버튼 누르면 -> 보관 모드로 상태 변경


! 로그인 / 비로그인 시 로직
? 비회원일시
//1. 비밀번호 입력 페이지가 나옴
2. 버튼
  1) 이미지 저장 -> 이미지를 저장할 수 있음
  2) 보관하기를 누르면 -> 로그인 모달이 뜸 -> 로그인 버튼을 통해 로그인 화면으로 로딩, setIsLogin으로 상태 변경
  3) 보관하기를 누르면 보관처리 -> 이건 백이랑 의논필요
  4) 보관하기가 처리되면 '보관완료'로 이름 변경 및 클릭 안됨

? 회원일 시
//1. 비밀번호 입력 페이지가 안나옴
2. 버튼
  1) 이미지 저장 -> 이미지를 저장할 수 있음
  //2) 보관완료 버튼 -> 클릭 안됨
*/
