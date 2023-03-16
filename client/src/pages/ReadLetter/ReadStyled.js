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
  background: #fffb95;
`;

export const CheckContainer = styled.div`
  display: flex;
  background: #d7e5df;
  padding: 2rem 2rem;
  width: 50vw;
  height: 30vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: space-around;
  div {
    ${FONT_STYLE_READ.title_20_medium}
  }
  input {
    width: 23rem;
    height: 2.3rem;
    background-image: url("${pwd}");
    background-size: 1.5rem;
    padding: 0rem 3rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000;
    background-repeat: no-repeat;
    background-position: left;
    background-size: 1.5rem;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      background-size: 1.2rem;
    }
  }
  button {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    background-color: #fcfbf4;
    font-family: "B612", sans-serif;
    font-size: 0.8rem;
    margin-top: 3rem;
    width: 7rem;
    height: 2.1rem;
    cursor: pointer;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      margin-top: 2rem;
      width: 10rem;
      height: 3rem;
      ${FONT_STYLE_LOGOUT.title_9_medium}
    }
  }
`;
