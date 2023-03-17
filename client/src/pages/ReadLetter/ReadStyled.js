import styled from "styled-components";
import BREAKPOINTMOBILE from "../../breakpoint";
import { FONT_STYLE_READ } from "../../style/fontStyle";
import { PALETTE_V1 } from "../../style/color";
import pwd from "../../asset/pwd.png";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 87vh;
  padding: 3rem 2rem;
  overflow: hidden;
  padding-bottom: 70px;

  .ReadContainer {
    display: flex;
    flex-direction: column;
  }
`;

export const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 87vh;
  padding: 3rem 2rem;
  overflow: hidden;
  padding-bottom: 300px;
`;

export const Secretform = styled.form`
  display: flex;
  /* margin-top: -5rem; */
  padding: 5rem 5rem;
  width: 50vw;
  height: 40vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding: 5rem 1rem;
  }
  div {
    display: flex;
    ${FONT_STYLE_READ.title_20_medium}
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 1rem;
    }
  }
  .pwdInput {
    display: flex;
    width: 23rem;
    height: 2.3rem;
    background-size: 1.5rem;
    padding: 0rem 3rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000;
    background-image: url("${pwd}");
    background-color: initial;
    background-repeat: no-repeat;
    background-position: left;
    background-size: 1.5rem;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      background-size: 1.2rem;
      width: 13rem;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6.7rem;
    height: 2.1rem;
    border: 1px solid #838383;
    background-color: #fcfbf4;
    ${FONT_STYLE_READ.btn_8_light}
    margin-left: 70%;
    cursor: pointer;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      width: 5rem;
      height: 1.6rem;
      font-size: 0.5rem;
      margin-left: 55%;
    }
  }
  p {
    color: red;
    margin: -2rem 0 1rem;
    font-size: 14px;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 11px;
    }
  }
`;

export const EnterSeret = styled.div`
  display: flex;
  justify-content: center;
  width: 12rem;
  padding: 0.5rem 0.7rem 0.5rem 1.5rem;
  border: 1px solid #838383;
  ${FONT_STYLE_READ.body_9_light}
  margin-bottom: 2rem;
  margin: 0 0 2rem 30.5rem;

  input {
    ${FONT_STYLE_READ.body_8_light}
    border: none;
    background-color: initial;
    margin-left: 20px;
    padding: 0 5px;
    width: 4rem;
    letter-spacing: 6px;
  }
`;

export const FlexColunmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Letterpaper = styled(FlexColunmWrapper)`
  aspect-ratio: 3/5;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #000000;
  padding: 2.5rem 3.5rem 2.5rem 3.5rem;
  min-width: 680px;
  max-width: 680px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 10rem;
  padding: 0rem 0rem 2rem 19rem;

  button {
    background: ${PALETTE_V1.yellow_primary};
    border: 1px solid ${PALETTE_V1.text_primary};
    ${FONT_STYLE_READ.btn_7_light}
    padding: 0.5rem 1rem;
    min-width: 100px;
    height: 30px;
    cursor: pointer;
  }
`;
