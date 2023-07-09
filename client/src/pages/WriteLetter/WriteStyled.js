import styled, { css } from "styled-components";
import { FONT_STYLE_CONTENT, FONT_STYLE_V1 } from "../../style/fontStyle";
import { PALETTE_V1 } from "../../style/color";
import Ballon1 from "../../asset/ballon1.png";
import Ballon2 from "../../asset/ballon2.png";
import Ballon3 from "../../asset/ballon3.png";
import Ballon4 from "../../asset/ballon4.png";
import Ballon5 from "../../asset/ballon5.png";
import ballonSmall from "../../asset/ballon-small.png";
import transparentImg from "../../asset/transparent-background.png";
import {
  BREAKPOINTMOBILE,
  BREAKPOINTTABLET,
  BREAKPOINTMOBILE2,
} from "../../breakpoint";
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

export const PageContainer = styled.div`
  background-color: ${PALETTE_V1.background};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  overflow-x: none;
`;
export const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  &.align-items {
    align-items: center;
  }
  &.URL-wrapper {
    ${FONT_STYLE_V1.body.body_15_light}
    justify-content: space-between;
    align-items: center;
    .done-check-icon {
      font-size: 2rem;
    }
  }
  &.button-wrapper {
    width: 100%;
    justify-content: flex-end;
  }
  #necessity {
    ${FONT_STYLE_V1.body.body_12_light}
    padding-left: 10px;
  }
  &.upload-box {
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
  .position-relative {
    position: relative;
  }
  @media screen and (max-width: 1024px) {
    .check-button {
      position: absolute;
      left: 350px;
      min-width: 50px;
      width: 50px;
      height: 25px;
    }
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    .check-button {
      position: absolute;
      top: 140px;
      left: 130px;
      min-width: 50px;
      width: 50px;
      height: 25px;
    }
    &.URL-input {
      flex-direction: column;
      align-items: flex-start;
    }
    &.button-wrapper {
      width: 100%;
      justify-content: space-evenly;
    }
  }
`;
export const FlexColunmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &.align-center {
    align-items: center;
  }
  &.letter {
    max-width: 756px;
    width: 81%;
  }
  .position-relative {
    position: relative;
  }
`;
export const FlexWrapper2 = styled(FlexRowWrapper)`
  justify-content: center;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const PageWrapper = styled(FlexColunmWrapper)`
  padding-top: 5%;
  width: 100%;
  align-items: center;
  @media screen and (min-width: 1095px) {
    padding-top: 54px;
  }
`;
export const LetterWrapper = styled.div`
  .active-icon {
    background-color: ${PALETTE_V1.yellow_modal_button};
    border-radius: 50%;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    .microphone-icon,
    .font-icon {
      font-size: 30px;
      margin-right: 15px;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE2}px) {
    .microphone-icon,
    .font-icon {
      font-size: 25px;
      margin-right: 15px;
      margin-bottom: 5px;
    }
  }
`;
export const LetterBox = styled(FlexColunmWrapper)`
  aspect-ratio: 680/1133;
  justify-content: space-between;
  border: 2px solid #000000;
  padding: 15% 11% 15%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 0;
  max-width: 754px;
  background-color: #ffffff;
  ${(props) => {
    switch (props.currentLetterTheme) {
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
  &.back {
    justify-content: space-evenly;
    .preview-back-content {
      height: 14%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;
export const FlexWrapper1 = styled(FlexRowWrapper)`
  justify-content: space-between;
  width: 100%;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: min-content;
  .microphone-icon,
  .font-icon {
    color: ${PALETTE_V1.text_primary};
    margin-bottom: 20px;
    padding: 10px;
    cursor: pointer;
  }
  .active-icon {
    background-color: ${PALETTE_V1.yellow_modal_button};
    border-radius: 50%;
  }
  @media screen and (min-width: ${BREAKPOINTTABLET}px) {
    .microphone-icon,
    .font-icon {
      font-size: 50px;
    }
  }
`;
export const ThemeIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1%;
  margin-right: 1%;
  .arrow-backward-icon,
  .arrow-forward-icon {
    color: ${PALETTE_V1.text_primary};
    font-size: 4rem;
  }
  @media screen and (max-width: 420px) {
    .arrow-backward-icon,
    .arrow-forward-icon {
      font-size: 3rem;
    }
  }
`;
export const NameInputWrapper = styled.div`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid ${PALETTE_V1.text_primary};
  height: 100%;
  &.preview {
    border: none;
  }
`;
export const NameInput = styled.input.attrs({ autoComplete: "off" })`
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
  border: none;
  background-color: transparent;
  margin-left: 5px;
  margin-bottom: 6px;
  overflow: hidden;
  &.from-input {
    text-align: right;
  }
  &:focus {
    outline: none;
  }
`;
export const Text = styled.div`
  ${FONT_STYLE_V1.body.body_20_light}
`;
export const Date = styled.div`
  height: fit-content;
  white-space: nowrap;
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
export const SendMeWrapper = styled(FlexRowWrapper)`
  align-items: center;
  padding-bottom: 0.5rem;
  padding-top: 2rem;
`;
export const SendMeCheckBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 1.1rem;
    height: 1.1rem;
    border: 1px solid ${PALETTE_V1.text_primary};
  }
  &.active::before {
    content: "";
    background-color: rgb(255, 228, 157);
  }
`;
export const SendMeLabel = styled.div`
  ${FONT_STYLE_V1.body.body_18_light}
  color: ${PALETTE_V1.text_primary};
  vertical-align: middle;
  max-height: 21px;
  padding-left: 5px;
`;
export const ContentContainer = styled.div``;
export const ContentTextarea = styled.textarea`
  background-color: transparent;
  border: none;
  resize: none;
  aspect-ratio: 1/1.4;
  padding-right: 1rem;
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
  line-height: 3rem;
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
export const FromWrapper = styled(FlexRowWrapper)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.8rem;
`;
export const TextCount = styled.div`
  ${FONT_STYLE_V1.body.body_17_light}
`;
export const ButtonWrapper = styled(FlexRowWrapper)`
  align-items: center;
  justify-content: flex-end;
  padding-top: 2%;
  padding-bottom: 5%;
  width: 100%;
  .question-icon {
    color: ${PALETTE_V1.text_primary};
    margin-right: 10px;
    z-index: 200;
    font-size: 30px;
    @media screen and (max-width: 540px) {
      font-size: 23px;
    }
  }
  &#sendme-modal-button-wrapper {
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 30px;
  }
`;
export const ExplainationWrapper = styled.div``;
export const ExplainationBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
export const BallonLeft = styled.div`
  ${FONT_STYLE_V1.body.body_17_light};
  position: absolute;
  z-index: 200;
  padding: 15px 20px;
  padding-left: 30px;
  background-image: url(${Ballon1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 300px;
  &#ballon1 {
    top: -10px;
    left: 125px;
    padding: 10px 0px 10px 50px;
  }
  &.change-font {
    min-width: 210px;
    background-image: url(${ballonSmall});
    padding-left: 35px;
    top: -15px;
    right: -200px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 17px;
  }
`;
export const BallonTop = styled.div`
  ${FONT_STYLE_V1.body.body_17_light};
  position: absolute;
  z-index: 200;
  padding: 20px 20px;
  padding-top: 22px;
  padding-left: 30px;
  background-image: url(${Ballon2});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  max-width: 300px;
  white-space: nowrap;
  &.ballon2 {
    background-image: url(${Ballon5});
    height: 110px;
    padding-top: 82px;
    padding-left: 50px;
    top: 45px;
    left: -45px;
    width: 300px;
  }
  &#ballon3 {
    top: 20px;
    left: -30px;
    width: 240px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 17px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE2}px) {
    &.ballon2 {
      top: 22px;
      left: -60px;
      padding-top: 60px;
      padding-left: 70px;
      background-size: 200px;
    }
    &.stt-button {
      padding: 20px 10px 20px 10px;
      left: -35px;
      top: 22px;
    }
  }
`;
export const BallonBottom1 = styled.div`
  ${FONT_STYLE_V1.body.body_17_light};
  position: absolute;
  z-index: 200;
  padding: 20px 20px;
  padding-bottom: 25px;
  background-image: url(${Ballon3});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  max-width: 100%;
  min-width: 280px;
  &#ballon6 {
    padding: 40px 15px;
    padding-bottom: 25px;
    top: -93px;
    left: -40px;
  }
  &#ballon7 {
    padding: 10px 0px 25px 20px;
    padding-top: 25px;
    top: -80px;
    right: 00px;
    max-width: 300px;
  }
  &.stt-button {
    top: -65px;
    left: -30px;
    padding: 20px 10px 25px 10px;
    min-width: 300px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 17px;
  }
`;
export const BallonBottom2 = styled.div`
  ${FONT_STYLE_V1.body.body_17_light};
  position: absolute;
  z-index: 200;
  padding: 20px 30px;
  padding-bottom: 25px;
  background-image: url(${Ballon4});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  max-width: 100%;
  min-width: 280px;
  &.make-letter-button {
    padding: 20px 10px 27px 20px;
    top: -80px;
    left: -130px;
    min-width: 300px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 17px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE2}px) {
    &.make-letter-button {
      min-width: 243px;
      padding: 10px 0px 23px 20px;
      top: -50px;
      left: -160px;
    }
  }
`;
export const BallonWrapper = styled.div`
  position: relative;
  width: fit-content;
  #check-icon {
    position: absolute;
    top: -1rem;
    left: -0.3rem;
    font-size: 2.4rem;
    color: ${PALETTE_V1.text_primary};
  }
  &.button {
    padding-left: 5%;
  }
  &.to-wrapper,
  &.from-wrapper {
    width: 50%;
  }
`;
export const ButtonContainer = styled.div`
  max-height: 218px;
`;
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4%;
  height: 95%;
  &.make-letter {
    justify-content: space-around;
    padding-left: 30px;
    padding-right: 30px;
  }
  &.sendme-modal {
    align-items: center;
    justify-content: space-around;
  }
`;
export const ModalTitle = styled.div`
  ${FONT_STYLE_V1.title.title_25_medium}
  padding-top: 5px;
  padding-bottom: 5%;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
export const TimeBoxWrapper = styled.div`
  ${FONT_STYLE_V1.body.body_22_light}
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 30px;
  .custom-input {
    background-color: #ffffff;
    ${FONT_STYLE_V1.body.body_22_light}
    border: 2px solid ${PALETTE_V1.text_primary};
    border-radius: 0;
    margin-right: 10px;
    padding: 3px 8px;
    min-height: 34.176px;
    display: flex;
    align-items: center;
    #calendar-icon {
      margin-left: 10px;
    }
  }
  .react-datepicker-popper {
    width: 300px;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      width: 200px;
    }
  }
  .react-datepicker {
    width: 100%;
    border-radius: 0px;
    border: 2px solid ${PALETTE_V1.text_primary};
  }
  .react-datepicker__triangle {
    &::before {
      content: none !important;
    }
    &::after {
      content: none !important;
    }
  }
  .react-datepicker__header {
    border-bottom: 2px solid ${PALETTE_V1.text_primary};
    .react-datepicker__current-month {
      ${FONT_STYLE_V1.body.body_20_light}
    }
    .react-datepicker__day-name {
      ${FONT_STYLE_V1.body.body_18_light}
    }
  }
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 2.5rem;
    line-height: 2.5rem;
    margin: 0.3rem;
  }
  .react-datepicker__month {
    ${FONT_STYLE_V1.body.body_18_light}
    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected {
      background-color: ${PALETTE_V1.yellow_primary};
      color: ${PALETTE_V1.orange_dark};
    }
  }
  .react-datepicker__input-time-container {
    .react-datepicker-time__caption {
      ${FONT_STYLE_V1.body.body_19_light}
    }
  }
  .react-datepicker-time__input {
    ${FONT_STYLE_V1.body.body_18_light}
  }
`;
export const DateBox = styled.div`
  border: 2px solid ${PALETTE_V1.text_primary};
  padding: 3px 5px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  #arrow-down-icon {
    padding-left: 5px;
  }
`;
export const TimeBox = styled.select`
  ${FONT_STYLE_V1.body.body_22_light}
  border: 2px solid ${PALETTE_V1.text_primary};
  border-radius: 0;
  margin-right: 10px;
  padding: 3px 5px;
  &.select {
    border-radius: 0;
  }
`;
export const TimeOption = styled.option``;
export const ReservationText = styled.div`
  ${FONT_STYLE_V1.body.body_15_light}
  text-align: center;
`;
export const ErrorMessage = styled.p`
  ${FONT_STYLE_V1.body.body_13_light}
  position: absolute;
  padding-top: 2px;
  color: grey;
  width: max-content;
  &.make-letter {
    top: 4.5rem;
  }
  &.url-verify-error {
    top: 4.5rem;
  }
  &.password-error {
    top: 2.5rem;
  }
`;
export const FontContainer = styled.ul`
  position: absolute;
  z-index: 100;
  background-color: white;
  overflow-y: auto;
  border: 2px solid ${PALETTE_V1.text_primary};
  width: 12rem;
  height: 15rem;
  top: 40px;
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
export const FontEl = styled.li`
  ${(props) => props.font};
  padding: 5px;
  &:hover {
    background-color: ${PALETTE_V1.yellow_button};
  }
  &.active {
    background-color: ${PALETTE_V1.yellow_modal_button};
    border-radius: 0;
  }
`;
export const Label = styled.label`
  ${FONT_STYLE_V1.title.title_18_medium}
`;
export const MakeLetterInput = styled.input`
  ${FONT_STYLE_V1.body.body_15_light}
  border: none;
  border-bottom: 1px solid ${PALETTE_V1.text_primary};
  height: 2.3rem;
  width: 10rem;
  background-image: url(${(props) => props.backgroundImg});
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: left center;
  margin-top: 3px;
  padding-left: 25px;
  &:focus {
    outline: none;
    background-color: ${PALETTE_V1.yellow_light};
  }
  &.URL-input {
    padding: 0 5px;
    margin-right: 18px;
  }
  &.password-input {
    width: 9rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    &.password-input {
      background-size: 14px;
    }
  }
`;
export const UploadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .high-light {
    background-color: ${PALETTE_V1.yellow_button};
  }
  .drag-file {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 2px dashed ${PALETTE_V1.text_primary};
    margin-top: 1%;
    .image {
      width: 40px;
      height: 40px;
    }
    .message {
      ${FONT_STYLE_V1.body.body_15_light}
    }
    .preview-container {
      position: relative;
    }
    .preview {
      width: 100px;
      height: fit-content;
      max-height: 170px;
      border: 1px solid ${PALETTE_V1.text_primary};
      background-image: url(${transparentImg});
    }
    .icon-container {
      position: absolute;
      top: 0px;
      padding: 2px;
      .x-icon {
        background-color: #ffffff;
        border-radius: 50%;
        height: 1rem;
        width: 1rem;
      }
    }
  }
  .file-label {
    ${FONT_STYLE_V1.body.body_13_light}
    border: 2px solid ${PALETTE_V1.text_primary};
    border-radius: 0px;
    background-color: #d9d9d9;
    padding: 4px 6px;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      background-color: #989898;
      color: #ffffff;
    }
  }
  .file {
    display: none;
  }
`;
export const PreviewContent = styled.div`
  aspect-ratio: 1/1.4;
  white-space: pre-wrap;
  overflow-y: auto;
  padding-right: 1rem;
  ${FONT_STYLE_V1.body.body_18_light}
  ${(props) => {
    switch (props.font) {
      case "프리텐다드":
        return FONT_STYLE_V1.body.body_20_light;
      case "도스샘물":
        return FONT_STYLE_CONTENT.pixel_20;
      case "강원교육모두체":
        return FONT_STYLE_CONTENT.gangwonedu_20_bold;
      case "에스코어 드림":
        return FONT_STYLE_CONTENT.scoredream_20;
      case "태백 은하수체":
        return FONT_STYLE_CONTENT.taebaek_20;
      case "다채사랑":
        return FONT_STYLE_CONTENT.dachelove_20;
      case "백의의 천사":
        return FONT_STYLE_CONTENT.whiteangle_20;
      case "고딕 아니고 고딩":
        return FONT_STYLE_CONTENT.gothicgoding_20;
      case "혁이체":
        return FONT_STYLE_CONTENT.hyukee_20;
      case "이서윤체":
        return FONT_STYLE_CONTENT.leeseoyun_20;
      case "신비는 일곱살":
        return FONT_STYLE_CONTENT.sangsang_20;
      case "카페24 고운밤":
        return FONT_STYLE_CONTENT.cafe24oneprettynight_20;
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
  line-height: 3rem;
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
export const BackImg = styled.img`
  border: 2px solid;
`;
