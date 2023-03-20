import styled from "styled-components";
import { FONT_STYLE_LOGIN, FONT_STYLE_V1 } from "../../style/fontStyle";

export const SetPwdWrap = styled.div`
  width: 100%;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${FONT_STYLE_V1.title.title_14_medium}
`;

export const CardBox = styled.div`
  width: 60rem;
  height: 40rem;
  background-color: #fff59f;
  border: 1px solid black;
  position: absolute;
  margin-left: 1rem;
  z-index: -1;
`;

export const SetPwdContainer = styled.div`
  width: 60rem;
  height: 40rem;
  background-color: #fff;
  border: 1px solid black;
  margin-right: 1.5rem;
  margin-bottom: 2.5rem;
  display: flex;
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
    font-size: 2rem;
  }
`;

export const SetPwdTitle = styled.div`
  ${FONT_STYLE_LOGIN.title.title_40_medium}
  color: white;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
`;
export const ErrorMsg = styled.div`
  ${FONT_STYLE_V1.body.body_8_light}
  color: red;
  text-align: center;
`

export const EmailLabel = styled.label`
  margin-top: 3rem;
`;

export const EmailInputForm = styled.form`
  border-bottom: 1px solid black;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  padding-bottom: 0.5rem;
`;

export const EmailInput = styled.input`
  flex-grow: 2;
  background-color: transparent;
  outline: none;
  border: none;
  margin-left: 1rem;
`;

export const AuthLabel = styled.label`
  ${FONT_STYLE_V1.body.body_10_light}
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
  &:focus {
    background-color: #ddd;
  }
`;

export const SetPwdLabel = styled.label`
  ${FONT_STYLE_V1.body.body_8_light}
  color: #ccc;
  margin-top: 1rem;
`;

export const SetPwdBox = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  margin-bottom: 1rem;
`;

export const SetPwdInput = styled.input`
  outline: none;
  border: none;
  flex-grow: 2;
  margin-top: 1.7rem;
  font-size: 1.2rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: transparent;
  border: 1px solid black;
`