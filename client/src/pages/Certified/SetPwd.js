import React, { useState } from "react";
import * as C from "./SetPwdStyled";
import { AiOutlineArrowRight, AiOutlineEnter } from "react-icons/ai";
import { BsEnvelopeAt } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

function SetPwd() {
  const navigate = useNavigate();
  const [next, setNext] = useState(2);
  const { page } = useParams();
  const handleNext = () => {
    setNext(next + 1);
    navigate(`/setpwd/${next}`);
  };

  return (
    <C.SetPwdWrap>
      <C.CardBox />
      <C.SetPwdContainer>
        <C.LeftBox>
          {page === undefined && (
            <C.Text>
              비밀번호 변경을 위해 <br /> 이메일 인증이 필요합니다.
            </C.Text>
          )}
          {page === "2" && (
            <C.Text>
              이메일로 전송된 <br /> 인증번호를 입력해주세요.
            </C.Text>
          )}
          {page === "3" && <C.Text>변경할 비밀번호를 설정해주세요.</C.Text>}
        </C.LeftBox>
        <C.RightBox>
          <C.SetPwdTitle>Password</C.SetPwdTitle>
          {page === undefined && (
            <C.InputWrap>
              <C.EmailLabel>Email</C.EmailLabel>
              <C.EmailInputBox>
                <BsEnvelopeAt />
                <C.EmailInput type="email" placeholder="email address" />
                <AiOutlineEnter />
              </C.EmailInputBox>
            </C.InputWrap>
          )}
          {page === "2" && (
            <C.InputWrap>
              <C.AuthLabel>번호를 차례대로 입력해주세요.</C.AuthLabel>
              <C.AuthInputBox>
                <C.AuthInput />
                <C.AuthInput />
                <C.AuthInput />
                <C.AuthInput />
                <C.AuthInput />
              </C.AuthInputBox>
            </C.InputWrap>
          )}
          {page === "3" && (
            <C.InputWrap>
              <C.SetPwdLabel>Password</C.SetPwdLabel>
              <C.SetPwdBox>
                <C.SetPwdInput />
              </C.SetPwdBox>
              <C.SetPwdLabel>Password Confirm</C.SetPwdLabel>
              <C.SetPwdBox>
                <C.SetPwdInput />
              </C.SetPwdBox>
              <C.ButtonBox>
                <C.Button>확인</C.Button>
              </C.ButtonBox>
            </C.InputWrap>
          )}
          {(page === undefined || page === "2") && <AiOutlineArrowRight className="next" onClick={handleNext} />}
          
        </C.RightBox>
      </C.SetPwdContainer>
    </C.SetPwdWrap>
  );
}

export default SetPwd;
