import styled from "styled-components";
import BREAKPOINTMOBILE from "../../breakpoint";
import { FONT_STYLE_READ, FONT_STYLE_LOGOUT } from "../../style/fontStyle";
import pwd from "../../asset/pwd.png";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 87vh;
  padding: 3rem 2rem;
  overflow: hidden;
`;

export const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 87vh;
  padding: 3rem 2rem;
  overflow: hidden;
`;

export const Secretform = styled.form`
  /* background: #fffb95; */
  display: flex;
  margin-top: -5rem;
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
    font-family: "B612", sans-serif;
    font-size: 0.8rem;
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
`;
