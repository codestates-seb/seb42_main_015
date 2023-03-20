import styled, { css } from "styled-components";
import { FONT_STYLE_CONTENT, FONT_STYLE_V1 } from "../../style/fontStyle";
import { PALETTE_V1 } from "../../style/color";
import Ballon1 from "../../asset/ballon1.png";
import Ballon2 from "../../asset/ballon2.png";
import Ballon3 from "../../asset/ballon3.png";
import Ballon4 from "../../asset/ballon4.png";
import Ballon5 from "../../asset/ballon5.png";
import 군대 from "../../asset/letterTheme/군대-theme.png";
import 냥냥편지 from "../../asset/letterTheme/냥냥편지-theme.png";
import 리본 from "../../asset/letterTheme/리본-theme.png";
import 수박 from "../../asset/letterTheme/수박-theme.png";
import 알록달록 from "../../asset/letterTheme/알록달록-theme.png";
import 젖소 from "../../asset/letterTheme/젖소-theme.png";
import 체리 from "../../asset/letterTheme/체리-theme.png";
import 클로버 from "../../asset/letterTheme/클로버-theme.png";

export const PageContainer = styled.div`
  background-color: ${PALETTE_V1.background};
  min-width: max-content;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  overflow-x: none;
`;
export const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FlexColunmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
export const FlexWrapper2 = styled(FlexRowWrapper)`
  justify-content: center;
`;
export const PageWrapper = styled(FlexColunmWrapper)`
  padding: 70px 30px 0 30px;
`;
export const LetterWrapper = styled.div`
  max-height: 1154px;
`;
export const LetterBox = styled(FlexColunmWrapper)`
  aspect-ratio: 3/5;
  justify-content: space-between;
  background-color: #ffffff;
  border: 2px solid #000000;
  padding: 2.5rem 3.5rem 2.5rem 3.5rem;
  min-width: 680px;
  max-width: 680px;
  background-image: ${(props) => {
    switch (props.currentLetterTheme) {
      case "군대":
        return;
      default:
        break;
    }
  }};
`;
export const FlexWrapper1 = styled(FlexRowWrapper)`
  justify-content: space-between;
  padding-top: 0.8rem;
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
  }
  .active-icon {
    background-color: ${PALETTE_V1.yellow_modal_button};
    border-radius: 50%;
  }
`;
export const ThemeIcon = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  .arrow-backward-icon,
  .arrow-forward-icon {
    color: ${PALETTE_V1.text_primary};
  }
`;
export const NameInputWrapper = styled.div`
  ${FONT_STYLE_V1.body.body_12_light}
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid ${PALETTE_V1.text_primary};
  max-width: 250px;
  min-width: 250px;
  width: 250px;
  height: 2rem;
`;
export const NameInput = styled.input`
  ${FONT_STYLE_V1.body.body_10_light}
  border: none;
  background-color: transparent;
  margin-left: 5px;
  margin-bottom: 6px;
  &:focus {
    outline: none;
  }
`;
export const Text = styled.div`
  ${FONT_STYLE_V1.body.body_12_light}
`;
export const Date = styled(Text)``;
export const SendMeWrapper = styled(FlexRowWrapper)`
  align-items: center;
  padding-bottom: 0.5rem;
  padding-top: 20px;
`;
export const SendMeCheckBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 11px;
    height: 11px;
    border: 1px solid ${PALETTE_V1.text_primary};
  }
  &.active::before {
    content: "";
    background-color: rgb(255, 228, 157);
  }
`;
export const SendMeLabel = styled.div`
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
  aspect-ratio: 1/1.6;
  ${(props) => {
    switch (props.font) {
      case "프리텐다드":
        return FONT_STYLE_V1.content.content_10_light;
      case "도스샘물":
        return FONT_STYLE_CONTENT.pixel_10;
      case "강원교육모두체":
        return FONT_STYLE_CONTENT.gangwonedu_10_bold;
      default:
        break;
    }
  }}
  &:focus {
    outline: none;
  }
`;
export const FromWrapper = styled(FlexRowWrapper)`
  justify-content: flex-end;
  padding-bottom: 0.8rem;
`;
export const TextCount = styled.div``;
export const ButtonWrapper = styled(FlexRowWrapper)`
  align-items: center;
  justify-content: flex-end;
  padding-top: 20px;
  padding-bottom: 30px;
  .question-icon {
    color: ${PALETTE_V1.text_primary};
    margin-right: 10px;
    z-index: 110;
  }
  &#sendMeModalButton {
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
  ${FONT_STYLE_V1.body.body_10_light};
  position: absolute;
  z-index: 200;
  padding: 15px 20px;
  padding-left: 50px;
  background-image: url(${Ballon1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 300px;
  max-width: 100%;
  &#ballon1 {
    top: -15px;
    left: 110px;
  }
`;
export const BallonTop = styled.div`
  ${FONT_STYLE_V1.body.body_10_light};
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
  &#ballon2 {
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
`;
export const BallonBottom1 = styled.div`
  ${FONT_STYLE_V1.body.body_10_light};
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
  &#ballon4 {
    max-width: 280px;
    bottom: 50px;
    right: -170px;
  }
  &#ballon6 {
    padding: 40px 15px;
    padding-bottom: 25px;
    top: -93px;
    left: -40px;
  }
  &#ballon7 {
    padding: 10px 20px 28px;
    padding-top: 25px;
    top: -80px;
    right: 10px;
    max-width: 280px;
  }
`;
export const BallonBottom2 = styled.div`
  ${FONT_STYLE_V1.body.body_10_light};
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
  &#ballon5 {
    max-width: 280px;
    bottom: 50px;
    right: 20px;
  }
`;
export const BallonWrapper = styled.div`
  position: relative;
  #check-icon {
    position: absolute;
    top: -10px;
    left: -3px;
    color: ${PALETTE_V1.text_primary};
  }
  &.button {
    padding-left: 20px;
  }
`;
export const ButtonContainer = styled.div`
  max-height: 218px;
`;
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  height: 90%;
`;
export const ModalTitle = styled.div`
  ${FONT_STYLE_V1.title.title_14_medium}
  padding-top: 5px;
  padding-bottom: 30px;
`;
export const TimeBoxWrapper = styled.div`
  ${FONT_STYLE_V1.body.body_12_light}
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 30px;
  .custom-input {
    background-color: #ffffff;
    ${FONT_STYLE_V1.body.body_12_light}
    border: 2px solid ${PALETTE_V1.text_primary};
    border-radius: 0;
    margin-right: 10px;
    padding: 3px 8px;
    height: 34.176px;
    display: flex;
    align-items: center;
    #calendar-icon {
      margin-left: 10px;
    }
  }
  .react-datepicker {
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
      ${FONT_STYLE_V1.body.body_10_light}
    }
    .react-datepicker__day-name {
      ${FONT_STYLE_V1.body.body_8_light}
    }
  }
  .react-datepicker__month {
    ${FONT_STYLE_V1.body.body_8_light}
    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected {
      background-color: ${PALETTE_V1.yellow_primary};
      color: ${PALETTE_V1.orange_dark};
    }
  }
  .react-datepicker__input-time-container {
    .react-datepicker-time__caption {
      ${FONT_STYLE_V1.body.body_9_light}
    }
  }
  .react-datepicker-time__input {
    ${FONT_STYLE_V1.body.body_8_light}
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
  ${FONT_STYLE_V1.body.body_12_light}
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
  ${FONT_STYLE_V1.body.body_9_light}
`;
export const ErrorMessage = styled.p`
  ${FONT_STYLE_V1.body.body_9_light}
  padding-top: 2px;
  color: grey;
`;
export const FontContainer = styled.ul`
  position: absolute;
  background-color: white;
  border: 2px solid ${PALETTE_V1.text_primary};
  width: 120px;
  top: 40px;
`;
export const FontEl = styled.li`
  ${(props) => props.font};
  padding: 5px;
  &.zero-padding {
    padding: 0px;
    padding-left: 5px;
  }
  &:hover {
    background-color: ${PALETTE_V1.yellow_button};
  }
  &.active {
    background-color: ${PALETTE_V1.yellow_modal_button};
    border-radius: 0;
  }
`;
