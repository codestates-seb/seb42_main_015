import styled, { css } from "styled-components";
import {
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
  BREAKPOINTMOBILE2,
} from "../../breakpoint";
import {
  FONT_STYLE_READ,
  FONT_STYLE_LOGIN,
  FONT_STYLE_CONTENT,
  FONT_STYLE_V1,
} from "../../style/fontStyle";
import * as W from "../WriteLetter/WriteStyled";
import pwd from "../../asset/pwd.png";
import email from "../../asset/mail.png";
import { PALETTE_V1 } from "../../style/color";
import 군대 from "../../asset/letterTheme/군대-theme.png";
import 냥냥편지 from "../../asset/letterTheme/냥냥편지-theme.png";
import 리본 from "../../asset/letterTheme/리본-theme.png";
import 수박 from "../../asset/letterTheme/수박-theme.png";
import 알록달록 from "../../asset/letterTheme/알록달록-theme.png";
import 체리 from "../../asset/letterTheme/체리-theme.png";
import 클로버 from "../../asset/letterTheme/클로버-theme.png";
import 정월대보름 from "../../asset/letterTheme/정월대보름-theme.png";
import 얼룩 from "../../asset/letterTheme/얼룩-theme.png";
import 오리 from "../../asset/letterTheme/오리-theme.png";

//todo : 전체 편지지 wrapper
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 87vh;
  padding: 3rem 2rem;
  overflow: hidden;
  padding-bottom: 70px;
  position: relative;

  .ReadContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      max-width: 39rem;
    }

    .top-sub {
      display: flex;
      justify-content: space-evenly;
      margin: 0 0 0 32rem;
      @media screen and (max-width: 1024px) {
        margin: 0 0 0 44rem;
      }
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        margin: 0 0 0 15rem;
      }
      .soundButtons {
        display: flex;
        justify-content: space-evenly;
        background: #d3d3d3;
        border-radius: 3rem;
        padding: 4px 5px 0px 5px;
        width: 8rem;
        height: 3rem;
        margin-top: 0.2rem;
        cursor: pointer;
        @media screen and (max-width: 1024px) {
          margin-top: 0rem;
          width: 9rem;
          height: 3.6rem;
          padding: 3px 4px 20px 5px;
        }

        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          margin-top: -0.1rem;
          height: 3.3rem;
          padding: 0px 4px 30px 4px;
        }
      }
      .speech-icon,
      .pause-icon {
        padding: 3px;
        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          padding: 6px;
        }

        &:hover {
          padding: 3px;
          background: white;
          border-radius: 50%;
          @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
            padding: 6px;
          }
        }
      }
    }
  }
`;

//todo :비밀번호 편지 페이지 wrapper
export const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: #ffffff00;
  position: absolute;
  z-index: 100;
  &::before {
    content: "";
    backdrop-filter: blur(50px);
  }
  backdrop-filter: blur(50px);
`;

//todo : 비밀번호 입력 form
export const Secretform = styled.form`
  display: flex;
  padding: 3rem 3rem;
  height: 40vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  div {
    display: flex;
    ${FONT_STYLE_READ.title_19_medium}

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 16px;
    }
  }
  .pwdInput {
    display: flex;
    width: 27rem;
    height: 3rem;
    background-size: 1.5rem;
    padding: 1rem 4rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1.4px solid #000;
    background-image: url("${pwd}");
    background-color: initial;
    background-repeat: no-repeat;
    background-position: left;
    background-size: 21px;
    letter-spacing: 3px;

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      width: 24rem;
      font-size: 1.5rem;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 2.5rem;
    border: 1.4px solid #000;
    background-color: #fcfbf4;
    ${FONT_STYLE_READ.btn_8_light}
    font-size: 15px;
    margin-left: 75%;
    cursor: pointer;

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      width: 60px;
      height: 23px;
      font-size: 12px;
      margin-left: 65%;
    }
    @media screen and (max-width: 1024px) {
      height: 25px;
      font-size: 13px;
      height: 2.8rem;
    }
  }
  p {
    color: red;
    margin: -7rem 0 -2rem;
    font-size: 16px;
    @media screen and (max-width: 1024px) {
      margin: -100px 0 -30px;
      font-size: 13px;
    }
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      margin: -20px 0 0px;
      font-size: 7px;
    }
  }
`;

//todo : 편지 조회 페이지에서 맨위 비밀번호 input
export const EnterSeret = styled.div`
  display: flex;
  justify-content: center;
  width: 12rem;
  padding: 0.7rem 0.7rem 0.7rem 0.7rem;
  border: 2px solid #000000;
  ${FONT_STYLE_READ.body_8_Medium}
  font-size : 1rem;
  margin: 0.2rem 0 2rem 2rem;
  @media screen and (max-width: 1024px) {
    width: 13rem;
    font-size: 1.2rem;
    padding: 0.7rem 0.5rem 0.7rem 0.5rem;
  }

  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin: 0rem 0 1.2rem 2rem;
    padding: 0.7rem 0.5rem 0.7rem 0.5rem;
    height: 3.4rem;
    font-size: 0.7rem;
    width: 13rem;
  }

  p {
    ${FONT_STYLE_READ.body_8_light}
    font-size : 1rem;
    border: none;
    background-color: initial;
    margin-left: 10px;
    padding: 0 5px;
    width: 4rem;
    letter-spacing: 6px;

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      margin-left: 5px;
      width: 5rem;
      letter-spacing: 3px;
    }
  }
`;

//todo : 편지 letter wrapper
export const FlexColunmWrapper = styled.div`
  /* width: fit-content; */
  display: flex;
  flex-direction: column;
  &.align-center {
    align-items: center;
  }
  &.letter {
    max-width: 756px;
    width: 82%;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 39rem;
  }
`;

//편지 내용(To, 날짜 , content, from)
export const Letterpaper = styled(FlexColunmWrapper)`
  aspect-ratio: 680/1133;
  background-size: cover;
  flex-direction: column;
  border: 2px solid #000000;
  padding: 15% 11% 15%;
  min-height: 0;
  min-width: 680px;
  max-width: 680px;
  background-color: #ffffff;

  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    min-width: 18rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE2}px) {
    min-width: 18rem;
  }

  ${(props) => {
    switch (props.LetterTheme) {
      case "군대":
        return css`
          background-image: url(${군대});
        `;
      case "냥냥편지":
        return css`
          background-image: url(${냥냥편지});
        `;
      case "리본":
        return css`
          background-image: url(${리본});
        `;
      case "수박":
        return css`
          background-image: url(${수박});
        `;
      case "알록달록":
        return css`
          background-image: url(${알록달록});
        `;
      case "얼룩":
        return css`
          background-image: url(${얼룩});
        `;
      case "체리":
        return css`
          background-image: url(${체리});
        `;
      case "클로버":
        return css`
          background-image: url(${클로버});
        `;
      case "정월대보름":
        return css`
          background-image: url(${정월대보름});
        `;
      case "오리":
        return css`
          background-image: url(${오리});
        `;
      default:
        break;
    }
  }};

  .top {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 1rem;
    ${FONT_STYLE_V1.body.body_20_light}
  }

  .content {
    letter-spacing: 2px;
    line-height: 3rem;
    padding: 0 1rem 0 0;
    background-color: transparent;
    border: none;
    resize: none;
    aspect-ratio: 1/1.5;
    ${FONT_STYLE_V1.body.body_20_light}
    font-size: 1.8rem;

    ${(props) => {
      switch (props.font) {
        case "프리텐다드":
          return FONT_STYLE_V1.body.body_18_light;
        case "도스샘물":
          return FONT_STYLE_CONTENT.pixel_18;
        case "강원교육모두체":
          return FONT_STYLE_CONTENT.gangwonedu_18_bold;
        default:
          break;
      }
    }}
    overflow: auto;
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 1rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #d9d9d9;
      border-radius: 7px;
      border: 1.5px solid;
    }
    &::-webkit-scrollbar-track {
      background-color: ${PALETTE_V1.background};
      border-radius: 7px;
      border: 1.5px solid;
    }
  }

  .from {
    display: flex;
    font-size: 1.6rem;
    justify-content: flex-end;
    font-size: 1.5rem;
    ${FONT_STYLE_V1.body.body_20_light}
  }

  justify-content: space-between;

  .back-add {
    display: flex;
    background: #ffffff00;
    /* border: none; */
    &::before {
      content: "";
      backdrop-filter: blur(100px);
    }
    backdrop-filter: blur(10px);
  }
`;

//todo : 아래 버튼들(우편함 돌아가기, 휴지통, 이미지저장, 보관하기)
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8rem;
  padding: 0rem 0rem 0rem 31rem;

  @media screen and (max-width: 1024px) {
    padding: 0rem 0rem 0rem 38rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding: 0rem 0rem 0rem 9.2rem;
  }
  @media screen and (min-width: 420px) and (max-width: ${BREAKPOINTTABLET}px) {
    padding: 0rem 0rem 0rem 5rem;
  }

  .button {
    font-size: 1.2rem;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 1.4rem;
    }
    @media screen and (max-width: 1024px) {
      font-size: 1.4rem;
    }
  }

  > div {
    display: flex;
    padding-left: 1.5rem;
    @media screen and (max-width: 1024px) {
      padding-left: 1.6rem;
    }

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      padding-left: 0.9rem;
    }
  }
  .goback {
    display: flex;
    margin: 0.2rem 20rem 0 -31rem;
    cursor: pointer;
    visibility: ${(props) => props.visibility};

    @media screen and (max-width: 1024px) {
      margin: 0.2rem 35rem 0 -37rem;
    }
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      margin: 0.2rem 10rem 0 -9rem;
      width: 2.8rem;
      height: 2.8rem;
    }
  }

  .trash {
    display: flex;
    margin-right: 8px;
    cursor: pointer;
    visibility: ${(props) => props.visibility};
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      width: 3rem;
      height: 3rem;
    }
  }
`;

//todo : 보관하기 로그인 모달
export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px 20px;

  .loginText {
    ${FONT_STYLE_LOGIN.title.title_34_medium}
    margin: 0em 0px 1.5rem;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      ${FONT_STYLE_LOGIN.title.title_42_medium}
      margin: 1rem 0px 3rem;
    }
  }
  .oauth {
    justify-content: space-around;
    margin-bottom: 0.5rem;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      margin-bottom: 1.5rem;
    }

    img {
      width: 2.5rem;
      margin: 0 10px;
      cursor: pointer;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        width: 3rem;
      }
    }
  }
  form {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 22rem;
      height: 3rem;
      margin: 1rem 0 0;
      padding: 0rem 2.2rem;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #000;
      background-repeat: no-repeat;
      background-position: left;
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        width: 23rem;
        margin-bottom: 2rem;
      }
    }
    .emailInput {
      background-image: url("${email}");
      background-size: 1.5rem;
    }
    .pwdInput {
      background-image: url("${pwd}");
      background-size: 1.6rem;
    }
    .btn {
      width: 13rem;
      height: 3rem;
      border: 1px solid #000;
      ${FONT_STYLE_LOGIN.button.button_13_light}
      font-size: 13px;
      background: #fff06c;
      margin: 1.5rem 0;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        height: 3.3rem;
        margin: 4rem 0 2rem;
      }
    }
    p {
      color: red;
      padding: 0 30px;
      ${FONT_STYLE_READ.body_10_light}
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        ${FONT_STYLE_READ.body_7_light}
        padding: 0 12px;
      }
    }
  }
  .sub {
    display: flex;
    ${FONT_STYLE_LOGIN.body.body_9_light}
  }
  li {
    padding: 0 10px;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      padding: 0 7px;
    }
  }
`;

//todo : 보관하기 로그인 모달 백그라운드
export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

//todo : 편지 넘기기
export const Card = styled.div`
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
  perspective: 1100px;
  .front,
  .back {
    backface-visibility: hidden;
  }
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    transform: rotateY(180deg);
  }
  &.active-rotate {
    transform: rotateY(180deg);
  }
`;
//TODO : 편지 뒷장
export const Text = styled.div`
  ${FONT_STYLE_V1.body.body_20_light}
  display: flex;
`;
export const Date = styled(Text)`
  height: fit-content;
  white-space: nowrap;
`;
export const BackImg = styled.img`
  border: 2px solid;
  margin: 1rem 0;
`;
export const FlexWrapper1 = styled(W.FlexRowWrapper)`
  justify-content: space-between;
  width: 100%;
`;
export const NameInputWrapper = styled.div`
  ${FONT_STYLE_V1.body.body_22_light}
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${PALETTE_V1.text_primary};
  height: 100%;
  &.preview {
    border: none;
  }
`;
