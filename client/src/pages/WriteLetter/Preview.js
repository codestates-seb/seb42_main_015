import { useState, useRef, useEffect } from "react";
import * as W from "../WriteLetter/WriteStyled";
import styled from "styled-components";
import ShadowButton from "../commons/ShadowButton";
import { PALETTE_V1 } from "../../style/color";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
  padding-bottom: 5rem;
  .back-button {
    padding-top: 3rem;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  max-width: 754px;
  display: flex;
  flex-direction: column;
`;
const Card = styled.div`
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
const Preview = () => {
  const { toName, fromName, content, font, theme, image } = JSON.parse(
    sessionStorage.getItem("preview")
  );
  const [rotate, setRotate] = useState(false);
  const handleRotate = () => {
    setRotate(!rotate);
  };

  return (
    <Container>
      <Wrapper>
        <Card className={rotate ? "active-rotate" : ""}>
          <W.LetterBox currentLetterTheme={theme} className="front">
            <div className="top">
              <W.FlexWrapper1>
                <W.NameInputWrapper className="preview">
                  to. {toName}
                </W.NameInputWrapper>
                <W.Date>2023.03.17 금</W.Date>
              </W.FlexWrapper1>
            </div>
            <W.PreviewContent font={font}>{content}</W.PreviewContent>
            <W.FromWrapper>
              <W.NameInputWrapper className="from-input preview">
                From. {fromName}
              </W.NameInputWrapper>
            </W.FromWrapper>
          </W.LetterBox>
          <W.LetterBox className="back">
            <W.BackImg src={image}></W.BackImg>
            <div className="preview-back-content">
              <W.FlexWrapper1>
                <W.Date>2023.03.17 금</W.Date>
              </W.FlexWrapper1>
              <W.FlexWrapper1>
                <W.NameInputWrapper className="preview">
                  {toName}에게
                </W.NameInputWrapper>
                <W.NameInputWrapper className="from-input preview">
                  {fromName}(이)가
                </W.NameInputWrapper>
              </W.FlexWrapper1>
            </div>
          </W.LetterBox>
        </Card>
        <W.ButtonWrapper className="back-button">
          <ShadowButton
            onClick={handleRotate}
            backgroundColor={PALETTE_V1.yellow_button}>
            뒷면보기
          </ShadowButton>
        </W.ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default Preview;
