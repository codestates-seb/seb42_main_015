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
import 구름 from "../../asset/letterTheme/구름-theme.png";

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
      width: 100%;
      justify-content: flex-end;
      margin: 0.2rem 0 2rem 0rem;
      z-index: 201;

      .soundButtons {
        display: flex;
        justify-content: space-evenly;
        background: #d3d3d3;
        border-radius: 3rem;
        padding: 7px 5px 0px 5px;
        width: 9rem;
        height: 3.5rem;
        cursor: pointer;
        z-index: 202;

        @media screen and (max-width: 1024px) {
          height: 3.6rem;
          padding: 3px 4px 20px 4px;
        }

        @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
          padding: 0px 4px 30px 4px;
        }
      }
      .speech-icon,
      .pause-icon {
        padding: 3px;
        z-index: 203;
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
  width: 100%;
  min-height: 100%;
  background: #ffffff00;
  position: absolute;
  z-index: 300;
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
    width: 7.2rem;
    height: 2.6rem;
    border: 1.4px solid #000;
    background-color: #fcfbf4;
    ${FONT_STYLE_READ.btn_12_light}
    margin-left: 75%;
    cursor: pointer;

    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      margin-left: 65%;
    }
  }
  p {
    color: red;
    margin: -6rem 0 -2rem;
    ${FONT_STYLE_READ.body_12_light}
    @media screen and (max-width: 1024px) {
      margin: -8rem 0 -2rem;
    }
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      margin: -11rem 0 -2rem;
    }
  }
`;

//todo : 편지 조회 페이지에서 맨위 비밀번호 input
export const EnterSeret = styled.div`
  display: flex;
  justify-content: center;
  width: 14.5rem;
  padding: 0.7rem 0.7rem 0.7rem 0rem;
  border: 2px solid #000000;
  margin-left: 2rem;
  ${FONT_STYLE_READ.body_14_Medium}
  z-index: 204;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding: 0.7rem 0rem 0.7rem 0rem;
  }

  p {
    ${FONT_STYLE_READ.body_14_light}
    border: none;
    background-color: initial;
    margin-left: 10px;
    width: 4rem;
    letter-spacing: 6px;
    z-index: 204;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      width: 5rem;
      letter-spacing: 4px;
    }
  }
`;

//todo : 편지 letter wrapper
export const FlexColunmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &.align-ce#d1e9ae
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
  padding: 17% 11% 15%;
  min-height: 0;
  min-width: 680px;
  max-width: 680px;
  background-color: #ffffff;
  justify-content: space-between;

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
      case "구름":
        return css`
          background-image: url(${구름});
        `;
      default:
        break;
    }
  }};

  ${(props) => {
    switch (props.LetterBackround) {
      case "군대":
        return css`
          background: #dfeace;
        `;
      case "냥냥편지":
        return css`
          background: #f3e016;
        `;
      case "리본":
        return css`
          background: #fdf6b2;
        `;
      case "수박":
        return css`
          background: #f5c5b9;
        `;
      case "알록달록":
        return css`
          background: #a9e0ff;
        `;
      case "얼룩":
        return css`
          background: #c4c6c8;
        `;
      case "체리":
        return css`
          background: #d3e3e2;
        `;
      case "클로버":
        return css`
          background: #d0ffe6;
        `;
      case "정월대보름":
        return css`
          background: #71b2c5;
        `;
      case "오리":
        return css`
          background: #daffff;
        `;
      case "구름":
        return css`
          background: #a9e0ff;
        `;
      default:
        break;
    }
  }};

  .letterContent {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 3rem;
    text-align: justify;
    color: ${PALETTE_V1.text_primary};
  }
`;

export const Text = styled.div`
  ${(props) => {
    switch (props.font) {
      case "프리텐다드":
        return FONT_STYLE_V1.body.body_20_light;
      case "도스샘물":
        return FONT_STYLE_CONTENT.pixel_20;
      case "강원교육모두체":
        return FONT_STYLE_CONTENT.gangwonedu_22_bold;
      case "에스코어 드림":
        return FONT_STYLE_CONTENT.scoredream_20;
      case "태백 은하수체":
        return FONT_STYLE_CONTENT.taebaek_20;
      case "다채사랑":
        return FONT_STYLE_CONTENT.dachelove_22;
      case "백의의 천사":
        return FONT_STYLE_CONTENT.whiteangle_22;
      case "고딕 아니고 고딩":
        return FONT_STYLE_CONTENT.gothicgoding_22;
      case "혁이체":
        return FONT_STYLE_CONTENT.hyukee_22;
      case "이서윤체":
        return FONT_STYLE_CONTENT.leeseoyun_20;
      case "신비는 일곱살":
        return FONT_STYLE_CONTENT.sangsang_26;
      case "카페24 고운밤":
        return FONT_STYLE_CONTENT.cafe24oneprettynight_22;
      case "제주명조":
        return FONT_STYLE_CONTENT.jejumyeongjo_20;
      case "리디바탕":
        return FONT_STYLE_CONTENT.ridibatang_20;
      case "나눔스퀘어 네오":
        return FONT_STYLE_CONTENT.nanumneo_20;
      default:
        break;
    }
  }}
`;

export const To = styled(Text)``;

export const From = styled(Text)`
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.div`
  aspect-ratio: 1/1.5;
  padding: 0 1rem 0 0;
  background-color: transparent;
  border: none;
  resize: none;
  letter-spacing: 2px;
  ${(props) => {
    switch (props.font) {
      case "프리텐다드":
        return FONT_STYLE_V1.body.body_18_light;
      case "도스샘물":
        return FONT_STYLE_CONTENT.pixel_18;
      case "강원교육모두체":
        return FONT_STYLE_CONTENT.gangwonedu_20_bold;
      case "에스코어 드림":
        return FONT_STYLE_CONTENT.scoredream_18;
      case "태백 은하수체":
        return FONT_STYLE_CONTENT.taebaek_18;
      case "다채사랑":
        return FONT_STYLE_CONTENT.dachelove_20;
      case "백의의 천사":
        return FONT_STYLE_CONTENT.whiteangle_20;
      case "고딕 아니고 고딩":
        return FONT_STYLE_CONTENT.gothicgoding_20;
      case "혁이체":
        return FONT_STYLE_CONTENT.hyukee_20;
      case "이서윤체":
        return FONT_STYLE_CONTENT.leeseoyun_18;
      case "신비는 일곱살":
        return FONT_STYLE_CONTENT.sangsang_24;
      case "카페24 고운밤":
        return FONT_STYLE_CONTENT.cafe24oneprettynight_20;
      case "제주명조":
        return FONT_STYLE_CONTENT.jejumyeongjo_18;
      case "리디바탕":
        return FONT_STYLE_CONTENT.ridibatang_18;
      case "나눔스퀘어 네오":
        return FONT_STYLE_CONTENT.nanumneo_18;
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
  @media screen and (min-width: 420px) and (max-width: ${BREAKPOINTTABLET}px) {
    padding: 0rem 0rem 0rem 3.5rem;
  }
  @media screen and (min-width: 421px) and (max-width: 540px) {
    padding: 0rem 0rem 0rem 6rem;
  }
  @media screen and (max-width: 420px) {
    padding: 0rem 0rem 0rem 7rem;
  }

  .button {
    font-size: 1.4rem;
  }

  //버튼 각 요소들
  > div {
    display: flex;
    padding-left: 1.4rem;
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
    @media screen and (min-width: 420px) and (max-width: ${BREAKPOINTTABLET}px) {
      margin: 0.2rem 6rem 0 -3rem;
      width: 2.8rem;
      height: 2.8rem;
    }
    @media screen and (min-width: 421px) and (max-width: 540px) {
      margin: 0.2rem 8rem 0 -5rem;
      width: 2.8rem;
      height: 2.8rem;
    }
    @media screen and (max-width: 420px) {
      margin: 0.2rem 10.5rem 0 -6rem;
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
      padding: 0rem 2.5rem;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #000;
      background-repeat: no-repeat;
      background-position: left;
      background-size: 1.7rem;
      font-size: 1.2rem;
      margin-top: 0.7rem;
      margin-bottom: 0.4rem;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        width: 25rem;
        margin-top: 2.5rem;
      }
    }
    .emailInput {
      background-image: url("${email}");
    }
    .pwdInput {
      background-image: url("${pwd}");
      background-size: 1.8rem;
    }
    .btn {
      width: 13rem;
      height: 3.2rem;
      border: 1px solid #000;
      ${FONT_STYLE_LOGIN.button.button_13_light}
      background: #fff06c;
      margin: 1.5rem 0;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        margin: 4rem 0 2rem;
      }
    }
    p {
      color: red;
      padding: 0 30px;
      ${FONT_STYLE_READ.body_10_light}
    }
  }
  .sub {
    display: flex;
    ${FONT_STYLE_LOGIN.body.body_9_light}
  }
  li {
    ${FONT_STYLE_READ.body_10_light}
    padding: 0 10px;
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

  /* 앞장 */
  .front {
    backface-visibility: hidden;
    &::after {
      position: absolute;
      content: "";
      background-color: ${PALETTE_V1.background};
      width: 10rem;
      height: 10rem;
      top: -1rem;
      right: -2rem;
    }
    @media screen and (max-width: 1024px) {
      &::after {
        top: -1rem;
        right: -2rem;
      }
    }
    @media screen and (max-width: 767px) {
      &::after {
        top: -4rem;
        right: -4rem;
      }
    }
    @media screen and (max-width: 380px) {
      &::after {
        top: -4rem;
        right: -4rem;
      }
    }
  }
  /* 뒷장 */
  .back {
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    transform: rotateY(180deg);
    &::after {
      position: absolute;
      content: "";
      background-color: ${PALETTE_V1.background};
      width: 10rem;
      height: 10rem;
      top: -1rem;
      left: -2rem;
    }
    @media screen and (max-width: 1024px) {
      &::after {
        top: -1rem;
        left: -2rem;
      }
    }
    @media screen and (max-width: 767px) {
      &::after {
        top: -4rem;
        left: -4rem;
      }
    }
    @media screen and (max-width: 380px) {
      &::after {
        top: -4rem;
        left: -4rem;
      }
    }
  }
  &.active-rotate {
    transform: rotateY(180deg);
  }
`;

//TODO : 편지 뒷장
export const Date = styled(Text)`
  display: flex;
  height: fit-content;
  white-space: nowrap;
`;
export const BackImg = styled.img`
  display: flex;
  border: 2px solid;
  margin: 1rem 0;
`;
export const FlexWrapper1 = styled(W.FlexRowWrapper)`
  justify-content: space-between;
  width: 100%;
`;

//todo 편지 접힌 부분
export const Triangle = styled.div`
  position: absolute;
  top: 0px;
  right: 0rem;
  width: 9rem;
  height: 9rem;
  background-color: ${PALETTE_V1.background};
  border-left: 0.2rem solid;
  border-bottom: 0.2rem solid;
  z-index: 100;
  &::after {
    content: "";
    top: 3px;
    right: 3px;
    width: 0;
    height: 0;
    position: absolute;
    z-index: 100;
    /* 꼬다리 색깔 */
    border: 4.35rem solid;
    ${(props) => {
      switch (props.bordercolor) {
        case "군대":
          return css`
            border-color: #81c200;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "냥냥편지":
          return css`
            border-color: #84e524;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "리본":
          return css`
            border-color: #f297b4;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "수박":
          return css`
            border-color: #ed927e;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "알록달록":
          return css`
            border-color: #ffe093;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "얼룩":
          return css`
            border-color: #fbfdd9;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "체리":
          return css`
            border-color: #b4ded6;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "클로버":
          return css`
            border-color: #64f6a0;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "정월대보름":
          return css`
            border-color: #85cbdf;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "오리":
          return css`
            border-color: #00dafb;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        case "구름":
          return css`
            border-color: #ffffff;
            border-top-color: transparent;
            border-right-color: transparent;
          `;
        default:
          break;
      }
    }};
  }
  &::before {
    content: "";
    position: absolute;
    transform: rotate(-45deg);
    top: -1.7rem;
    left: 4.2rem;
    width: 0.2rem;
    height: 12.4rem;
    background-color: black;
    z-index: 200;
  }
  @media screen and (max-width: 1024px) {
    &::after {
      top: 3px;
      right: 3px;
      border: 4.3rem solid;
      ${(props) => {
        switch (props.bordercolor) {
          case "군대":
            return css`
              border-color: #81c200;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "냥냥편지":
            return css`
              border-color: #84e524;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "리본":
            return css`
              border-color: #f297b4;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "수박":
            return css`
              border-color: #ed927e;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "알록달록":
            return css`
              border-color: #ffe093;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "얼룩":
            return css`
              border-color: #fbfdd9;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "체리":
            return css`
              border-color: #b4ded6;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "클로버":
            return css`
              border-color: #64f6a0;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "정월대보름":
            return css`
              border-color: #85cbdf;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "오리":
            return css`
              border-color: #00dafb;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "구름":
            return css`
              border-color: #ffffff;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          default:
            break;
        }
      }};
    }
    &::before {
      top: -1.7rem;
      left: 4.2rem;
      width: 0.2rem;
      height: 12.4rem;
    }
  }
  @media screen and (max-width: 767px) {
    width: 6rem;
    height: 6rem;
    background-color: ${PALETTE_V1.background};
    border-left: 0.2rem solid;
    border-bottom: 0.2rem solid;
    &::after {
      top: 5px;
      right: 4.3px;
      height: 0;
      border: 2.7rem solid;
      ${(props) => {
        switch (props.bordercolor) {
          case "군대":
            return css`
              border-color: #81c200;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "냥냥편지":
            return css`
              border-color: #84e524;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "리본":
            return css`
              border-color: #f297b4;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "수박":
            return css`
              border-color: #ed927e;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "알록달록":
            return css`
              border-color: #ffe093;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "얼룩":
            return css`
              border-color: #fbfdd9;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "체리":
            return css`
              border-color: #b4ded6;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "클로버":
            return css`
              border-color: #64f6a0;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "정월대보름":
            return css`
              border-color: #85cbdf;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "오리":
            return css`
              border-color: #00dafb;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "구름":
            return css`
              border-color: #ffffff;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          default:
            break;
        }
      }};
    }
    &::before {
      top: -1.2rem;
      left: 2.7rem;
      width: 0.1rem;
      height: 8.4rem;
    }
  }
  @media screen and (max-width: 380px) {
    width: 6rem;
    height: 6rem;
    background-color: ${PALETTE_V1.background};
    border-left: 0.2rem solid;
    border-bottom: 0.2rem solid;
    &::after {
      top: 4.7px;
      right: 2.9px;
      border: 2.8rem solid;
      ${(props) => {
        switch (props.bordercolor) {
          case "군대":
            return css`
              border-color: #81c200;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "냥냥편지":
            return css`
              border-color: #84e524;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "리본":
            return css`
              border-color: #f297b4;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "수박":
            return css`
              border-color: #ed927e;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "알록달록":
            return css`
              border-color: #ffe093;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "얼룩":
            return css`
              border-color: #fbfdd9;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "체리":
            return css`
              border-color: #b4ded6;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "클로버":
            return css`
              border-color: #64f6a0;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "정월대보름":
            return css`
              border-color: #85cbdf;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "오리":
            return css`
              border-color: #00dafb;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          case "구름":
            return css`
              border-color: #ffffff;
              border-top-color: transparent;
              border-right-color: transparent;
            `;
          default:
            break;
        }
      }};
    }
    &::before {
      top: -0.9rem;
      left: 2.8rem;
      width: 0.2rem;
      height: 8.2rem;
    }
  }
`;
