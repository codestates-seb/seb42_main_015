import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import * as R from "./ReadStyled";
import SecretLetter from "./SecetLetter";

const ReadLetter = ({ isLogin }) => {
  const [enterPassword, setEnterPassword] = useState(false);

  return (
    <>
      {enterPassword ? (
        <R.Wrapper theme="open">
          <div className="ReadContainer">
            <R.EnterSeret>
              비밀번호
              <input placeholder="****" />
            </R.EnterSeret>
            <R.Letterpaper></R.Letterpaper>
            <R.Buttons>
              <button>이미지로 저장하기</button>
              <button>보관하기</button>
              <button>닫기</button>
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


! 3/17 오늘 끝내야 할일
0. 편지 정보 위치 지정하기
  - to
  - 날짜
  - content
  - from

1. 버튼
  - 이미지로 저장하기 -> 이미지 캡쳐 기능 추가
  - 보관하기 -> 로그인 페이지로 이동
  - 닫기 -> ??? 비밀번호 설정으로 돌아가야 하나??
2. 로그인 상태이면
  - 비밀번호 입력 모달이 안나온다.
*/
