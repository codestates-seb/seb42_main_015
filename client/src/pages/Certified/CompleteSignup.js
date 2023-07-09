import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./FormStyled";
import * as P from "./SetPwdStyled";

const CompleteSignup = () => {
  const navigate = useNavigate();

  return (
    <>
      <P.SetPwdWrap>
        <C.CompleteContainer>
          <P.SuccessContainer>
            <C.SuccessImges />
            <C.CompleteTitle>Sendy에 오실걸 환영합니다.</C.CompleteTitle>
            <button onClick={() => navigate("/login")}>Log in</button>
          </P.SuccessContainer>
        </C.CompleteContainer>
      </P.SetPwdWrap>
    </>
  );
};

export default CompleteSignup;
