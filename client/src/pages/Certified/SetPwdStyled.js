import styled from "styled-components";
import { FONT_STYLE_LOGIN, FONT_STYLE_V1 } from "../../style/fontStyle";
import { BREAKPOINTMOBILE } from "../../breakpoint";

export const SetPwdWrap = styled.div`
  width: 100%;
  height: 73vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${FONT_STYLE_V1.title.title_18_medium}
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

export const SetPwdContainer = styled.div`
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

export const LeftBox = styled.div`
  width: 25rem;
  height: 40rem;
  /* background-color: #ddd; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid black;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    display: none;
  }
`;

export const Text = styled.div``;

export const RightBox = styled.div`
  width: 35rem;
  height: 40rem;
  /* background-color: #ccc; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .next {
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 3rem;
    cursor: pointer;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 30rem;
    height: 42rem;
  }
`;

export const SetPwdTitle = styled.div`
  ${FONT_STYLE_LOGIN.title.title_42_medium}
  color: white;
  margin-top: 7rem;
  margin-bottom: 2rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-top: 6rem;
    margin-bottom: 4rem;
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding: 0 3rem;
  }
`;

export const ErrorMsg = styled.div`
  ${FONT_STYLE_V1.body.body_10_light}
  color: red;
  text-align: center;
`;

export const EmailLabel = styled.label`
  margin-top: 3rem;
`;

export const Duplicate = styled.button`
  ${FONT_STYLE_LOGIN.button.button_4_light};
  width: 4.3rem;
  height: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #505050;
  background-color: ${(props) =>
    props.background ? props.background : "#ffcb12"};
  cursor: pointer;
  -webkit-box-pack: center;
  border-radius: 50px;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 3.7rem;
    height: 3rem;
  }
  &:hover {
    box-shadow: 0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent,
      0px 6px 16px rgb(0 0 0 / 12%);
    transform: scale(1.02);
  }
`;

export const Code = styled.button`
  ${FONT_STYLE_LOGIN.button.button_4_light};
  width: 4.3rem;
  height: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #505050;
  background-color: #f14343;
  color: white;
  cursor: pointer;
  -webkit-box-pack: center;
  border-radius: 50px;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 3.7rem;
    height: 3rem;
  }
  &:hover {
    box-shadow: 0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent,
      0px 6px 16px rgb(0 0 0 / 12%);
    transform: scale(1.02);
  }
`;

export const InputForm = styled.form`
  border-bottom: 1px solid black;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
`;

export const Input = styled.input`
  flex-grow: 2;
  width: 50px;
  background-color: transparent;
  outline: none;
  border: none;
  margin-left: 1rem;
`;

export const AuthLabel = styled.label`
  text-align: center;
  margin-bottom: 3rem;
`;

export const AuthInputBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const AuthInput = styled.input`
  width: 50px;
  height: 60px;
  margin-right: 0.5rem;
  font-size: 3rem;
  text-align: center;
  outline: none;
  border: 1px solid black;
  &:focus {
    background-color: #ffe9ab;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 30px;
    height: 40px;
  }
`;

export const SetPwdLabel = styled.label`
  ${FONT_STYLE_V1.body.body_12_light}
  color: #ccc;
  margin-top: 1rem;
`;

export const SetPwdForm = styled.form`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const SetPwdInput = styled.input`
  outline: none;
  border: none;
  flex-grow: 2;
  margin-top: 1.7rem;
  border-bottom: 1px solid black;
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
  margin-top: 1rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 80px;
    height: 30px;
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
