import styled, { css } from "styled-components";
import { FONT_STYLE_WRITELETTER } from "../../style/fontStyle";
import { PALETTE_WRITELETTER } from "../../style/color";

export const LetterContainer = styled.div`
  background-color: ${PALETTE_WRITELETTER.background};
  min-height: 95vh;
`;
export const LetterWrapper = styled.div`
  margin: 0 50px;
`;
export const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FlexWrapper1 = styled(FlexRowWrapper)`
  justify-content: space-between;
  padding-top: 2rem;
`;
export const ToInputWrapper = styled.div`
  border: none;
  border-bottom: 1.5px solid #005897;
  max-width: fit-content;
  ${FONT_STYLE_WRITELETTER.body.body_12_light}
`;
export const ToInput = styled.input`
  border: none;
  background-color: transparent;
  ${FONT_STYLE_WRITELETTER.body.body_10_light}
`;
export const Text = styled.div`
  ${FONT_STYLE_WRITELETTER.body.body_12_light}
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
    border: 1.5px solid #005897;
  }
  ${SendMeBtn}:checked & {
    content: "";
    background-color: #005897;
    background-image: url(../asset/icon8-done30.png);
  }
`;
export const SendMeLabel = styled.span`
  color: #005897;
`;
export const ContentContainer = styled.div``;
