import styled, { css } from "styled-components";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import { PALETTE_V1 } from "../../style/color";

export const PageContainer = styled.div`
  background-color: ${PALETTE_V1.background};
  min-height: 95vh;
  min-width: max-content;
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
export const LetterWrapper = styled.div``;
export const LetterBox = styled(FlexColunmWrapper)`
  aspect-ratio: 3/5;
  justify-content: space-between;
  background-color: #ffffff;
  border: 2px solid #000000;
  padding: 0.8rem 1.5rem 0.8rem 1.5rem;
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
  .microphone-icon,
  .font-icon,
  .lockopen-icon,
  .lock-icon {
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
export const SendMeCheckBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 11px;
    height: 11px;
    border: 1px solid ${PALETTE_V1.text_primary};
    ${(props) => {
      props.checked
        ? css`
             {
              /* background-color: ${PALETTE_V1.text_primary}; */
              background-color: red;
              background-image: url(../asset/icon8-done30.png);
            }
          `
        : css``;
    }}
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
  padding-top: 20px;
  padding-bottom: 30px;
  .question-icon {
    color: ${PALETTE_V1.text_primary};
    margin-right: 10px;
  }
`;
