import styled, { css } from "styled-components";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import { PALETTE_V1 } from "../../style/color";
import Ballon1 from "../../asset/ballon1.png";
import Ballon2 from "../../asset/ballon2.png";
import Ballon3 from "../../asset/ballon3.png";
import Ballon4 from "../../asset/ballon4.png";

export const PageContainer = styled.div`
  background-color: ${PALETTE_V1.background};
  min-width: max-content;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
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
  padding: 70px 50px 0 50px;
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
`;
export const FlexWrapper1 = styled(FlexRowWrapper)`
  justify-content: space-between;
  padding-top: 0.8rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: min-content;
  max-width: 57px;
  .microphone-icon,
  .font-icon {
    color: ${PALETTE_V1.text_primary};
    margin-bottom: 20px;
  }
  .active {
    background-color: green;
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
  border: none;
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
  ${FONT_STYLE_V1.textarea.textarea_10_light}
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
  position: relative;
  z-index: 200;
  padding: 15px 20px;
  padding-left: 50px;
  background-image: url(${Ballon1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 250px;
  max-height: 100%;
  max-width: 100%;
  &#ballon1 {
    left: 10px;
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
    top: 35px;
    left: -30px;
    width: 240px;
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
    padding-bottom: 43px;
    top: -110px;
    left: -40px;
  }
  &#ballon7 {
    padding: 10px 10px 41px;
    padding-top: 35px;
    top: -110px;
    right: 30px;
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
`;
export const ButtonContainer = styled.div`
  max-height: 218px;
`;
