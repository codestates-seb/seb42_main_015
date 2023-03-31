import { useState } from "react";
import * as W from "../WriteLetter/WriteStyled";
import styled from "styled-components";
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
const Triangle = styled.div`
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
    top: 0px;
    right: 0px;
    width: 0;
    height: 0;
    position: absolute;
    border: 4.35rem solid white;
    border-top-color: transparent;
    border-right-color: transparent;
    z-index: 100;
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
  @media screen and (max-width: 590px) {
    width: 7.6rem;
    height: 7.6rem;
    background-color: ${PALETTE_V1.background};
    border-left: 0.2rem solid;
    border-bottom: 0.2rem solid;
    &::after {
      border: 3.8rem solid white;
      border-top-color: transparent;
      border-right-color: transparent;
    }
    &::before {
      top: -1.6rem;
      left: 3.6rem;
      width: 0.1rem;
      height: 10.6rem;
    }
  }
  @media screen and (max-width: 490px) {
    width: 6rem;
    height: 6rem;
    background-color: ${PALETTE_V1.background};
    border-left: 0.2rem solid;
    border-bottom: 0.2rem solid;
    &::after {
      border: 2.6rem solid white;
      border-top-color: transparent;
      border-right-color: transparent;
    }
    &::before {
      top: -1.2rem;
      left: 2.8rem;
      width: 0.1rem;
      height: 8.4rem;
    }
  }
  @media screen and (max-width: 380px) {
    width: 4.6rem;
    height: 4.6rem;
    background-color: ${PALETTE_V1.background};
    border-left: 0.2rem solid;
    border-bottom: 0.2rem solid;
    &::after {
      border: 2.25rem solid white;
      border-top-color: transparent;
      border-right-color: transparent;
    }
    &::before {
      top: -0.8rem;
      left: 2.1rem;
      width: 0.1rem;
      height: 6.1rem;
    }
  }
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
  .front {
    &::after {
      position: absolute;
      content: "";
      background-color: ${PALETTE_V1.background};
      width: 10rem;
      height: 10rem;
      top: -1rem;
      right: -2rem;
    }
    @media screen and (max-width: 590px) {
      &::after {
        top: -2.5rem;
        right: -2.5rem;
      }
    }
    @media screen and (max-width: 490px) {
      &::after {
        top: -4rem;
        right: -4rem;
      }
    }
    @media screen and (max-width: 380px) {
      &::after {
        top: -5.5rem;
        right: -5.5rem;
      }
    }
  }
  .back {
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
    @media screen and (max-width: 590px) {
      &::after {
        top: -2.5rem;
        left: -2.5rem;
      }
    }
    @media screen and (max-width: 490px) {
      &::after {
        top: -4rem;
        left: -4rem;
      }
    }
    @media screen and (max-width: 380px) {
      &::after {
        top: -5.5rem;
        left: -5.5rem;
      }
    }
  }
  &.active-rotate {
    transform: rotateY(180deg);
  }
`;
const Preview = () => {
  const { toName, fromName, content, fontName, themeName, image } = JSON.parse(
    sessionStorage.getItem("preview")
  );
  const [rotate, setRotate] = useState(false);
  const handleRotate = () => {
    setRotate(!rotate);
  };
  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const currentDate = `${new Date().getFullYear()}.${(
    "00" +
    (new Date().getMonth() + 1)
  ).slice(-2)}.${("00" + new Date().getDate()).slice(-2)} ${
    weekday[new Date().getDay()]
  }`;
  return (
    <Container>
      <Wrapper>
        <Card className={rotate ? "active-rotate" : ""}>
          <Triangle onClick={handleRotate} />
          <W.LetterBox currentLetterTheme={themeName} className="front">
            <div className="top">
              <W.FlexWrapper1>
                <W.NameInputWrapper font={fontName} className="preview">
                  to. {toName}
                </W.NameInputWrapper>
                <W.Date font={fontName}>{currentDate}</W.Date>
              </W.FlexWrapper1>
            </div>
            <W.PreviewContent font={fontName}>{content}</W.PreviewContent>
            <W.FromWrapper>
              <W.NameInputWrapper
                font={fontName}
                className="from-input preview">
                From. {fromName}
              </W.NameInputWrapper>
            </W.FromWrapper>
          </W.LetterBox>
          <W.LetterBox className="back">
            <W.FlexWrapper1>
              <W.Date font={fontName}></W.Date>
            </W.FlexWrapper1>
            <W.BackImg src={image}></W.BackImg>
            <div className="preview-back-content">
              <W.FlexWrapper1>
                <W.NameInputWrapper font={fontName} className="preview">
                  {toName}에게
                </W.NameInputWrapper>
                <W.NameInputWrapper
                  font={fontName}
                  className="from-input preview">
                  {fromName}(이)가
                </W.NameInputWrapper>
              </W.FlexWrapper1>
            </div>
          </W.LetterBox>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Preview;
