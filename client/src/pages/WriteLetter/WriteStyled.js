import styled, { css } from "styled-components";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import { PALETTE_V1 } from "../../style/color";

export const PageContainer = styled.div`
  background-color: ${PALETTE_V1.background};
  min-height: 95vh;
  min-width: max-content;
  width: 100vw;
`;
export const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FlexColunmWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FlexWrapper2 = styled(FlexRowWrapper)``;
export const PageWrapper = styled(FlexColunmWrapper)`
  padding: 70px 50px 0 50px;
`;
export const LetterWrapper = styled.div`
  width: 100%;
`;
export const LetterBox = styled(FlexColunmWrapper)`
  aspect-ratio: 3/5;
  background-color: #ffffff;
  border: 2px solid #000000;
  padding: 0.5rem 1rem 0.5rem 1rem;
  min-width: 400px;
`;
export const FlexWrapper1 = styled(FlexRowWrapper)`
  justify-content: space-between;
  padding-top: 0.8rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .microphone-icon,
  .font-icon,
  .lockopen-icon,
  .lock-icon {
    color: ${PALETTE_V1.text_primary};
    margin-bottom: 20px;
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
  border: none;
  border-bottom: 2px solid ${PALETTE_V1.text_primary};
  max-width: fit-content;
  height: 2rem;
  ${FONT_STYLE_V1.body.body_12_light}
`;
export const NameInput = styled.input`
  border: none;
  background-color: transparent;
  ${FONT_STYLE_V1.body.body_10_light}
`;
export const Text = styled.div`
  ${FONT_STYLE_V1.body.body_12_light}
`;
export const Date = styled(Text)``;
export const SendMeWrapper = styled(FlexRowWrapper)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
export const SendMeBtn = styled.input.attrs({
  type: "checkbox",
  id: "sendMe",
})`
  appearance: none;
`;
export const SendMeCheckBox = styled.label.attrs({ htmlfor: "sendMe" })`
  cursor: pointer;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 11px;
    height: 11px;
    border: 1px solid ${PALETTE_V1.text_primary};
  }
  ${SendMeBtn}:checked & {
    content: "";
    background-color: ${PALETTE_V1.text_primary};
    background-image: url(../asset/icon8-done30.png);
  }
`;
export const SendMeLabel = styled.span`
  color: ${PALETTE_V1.text_primary};
`;
export const ContentContainer = styled.div``;
export const ContentTextarea = styled.textarea`
  background-color: transparent;
  border: none;
  resize: none;
  aspect-ratio: 1/1.5;
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
  min-width: 570px;
  .question-icon {
    color: ${PALETTE_V1.text_primary};
    margin-right: 10px;
  }
`;
