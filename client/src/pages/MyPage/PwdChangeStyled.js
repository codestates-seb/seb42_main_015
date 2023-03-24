import styled from "styled-components";
import { FONT_STYLE_LOGIN, FONT_STYLE_V1 } from "../../style/fontStyle";
import { BREAKPOINTMOBILE } from "../../breakpoint";

export const PwdChangeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${FONT_STYLE_V1.title.title_16_medium}
`;

export const PwdChangeContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CardBox = styled.div`
  width: 60rem;
  height: 40rem;
  background-color: #fff59f;
  border: 1px solid black;
  position: absolute;
  margin-left: 1rem;
  z-index: -1;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 30rem;
    height: 42rem;
  }
`;

export const PwdChangeContents = styled.div`
  width: 60rem;
  height: 40rem;
  background-color: #fff;
  border: 1px solid black;
  margin-right: 1.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .next {
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 3rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 30rem;
    height: 42rem;
  }
`;

export const UserBox = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-top: 1rem;
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 50%;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 30px;
    height: 30px;
  }
`;

export const UserName = styled.span`
  ${FONT_STYLE_V1.title.title_16_medium}
  margin-left: 1rem;
`;

export const PwdBox = styled.div`
  width: 100%;
  height: 37rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PwdChangeTitle = styled.div`
  ${FONT_STYLE_LOGIN.title.title_40_medium}
  color: white;
  margin-top: -5rem;
  padding-bottom: 1rem;
  margin-top: 1rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-top: 5rem;
  }
`;

export const Explain = styled.p`
  ${FONT_STYLE_V1.body.body_16_light}
  margin-bottom: 2rem;
  text-align: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  padding: 0 15rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding: 0 3rem;
  }
`;

export const ErrorMsg = styled.div`
  ${FONT_STYLE_V1.body.body_10_light}
  color: red;
  text-align: center;
`;

export const PwdForm = styled.form`
  border-bottom: 1px solid black;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  padding-bottom: 0.5rem;
`;

export const PwdInput = styled.input`
  flex-grow: 2;
  background-color: transparent;
  outline: none;
  border: none;
  margin-left: 1rem;
`;

export const PwdLabel = styled.label`
  ${FONT_STYLE_V1.body.body_8_light}
  color: #ccc;
  margin-top: 1rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: transparent;
  border: 1px solid black;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 80px;
    height: 30px;
    margin-top: 1rem;
  }
`;

export const SuccessWrap = styled.div`
  width: 60rem;
  height: 40rem;
  background-color: #fff;
  border: 1px solid black;
  margin-right: 1.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 30rem;
    height: 42rem;
  }
`;

export const SuccessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
  .suc1 {
    bottom: 10rem;
    right: 10rem;
    transform: rotate(50deg);
  }
  .suc2 {
    width: 20rem;
    top: -3rem;
    right: -3rem;
    transform: rotate(40deg);
  }
  .suc3 {
    top: -3rem;
    left: 10rem;
    transform: rotate(110deg);
  }
  .suc4 {
    bottom: 5rem;
    left: -1rem;
    transform: rotate(-50deg);
  }
  .suc5 {
    top: 7rem;
    left: -5rem;
  }
  .suc6 {
    width: 25rem;
    bottom: -10rem;
    left: 10rem;
    transform: rotate(-20deg);
  }
  .suc7 {
    width: 20rem;
    bottom: -5rem;
    right: -5rem;
    transform: rotate(30deg);
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    .suc1 {
      bottom: 8rem;
      right: -3rem;
      transform: rotate(50deg);
    }
    .suc2 {
      width: 10rem;
      top: 1rem;
      right: -3rem;
      transform: rotate(40deg);
    }
    .suc3 {
      top: 0;
      left: -4rem;
      transform: rotate(110deg);
    }
    .suc4 {
      bottom: 7rem;
      left: -3rem;
      transform: rotate(-50deg);
    }
    .suc5 {
      top: -3.5rem;
      left: 5rem;
    }
    .suc6 {
      width: 10rem;
      bottom: -4rem;
      left: 0rem;
      transform: rotate(-20deg);
    }
    .suc7 {
      width: 15rem;
      bottom: -5rem;
      right: -5rem;
      transform: rotate(30deg);
    }
  }
`;

export const SuccessImg = styled.img`
  position: absolute;
  width: 15rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 10rem;
  }
`;

export const SuccessTitle = styled.div`
  ${FONT_STYLE_V1.title.title_30_medium}
`;

export const SuccessContent = styled.div`
  ${FONT_STYLE_V1.body.body_15_light}
  text-align: center;
  line-height: 1.5;
  margin-top: 2rem;
  margin-bottom: 3.5rem;
`;