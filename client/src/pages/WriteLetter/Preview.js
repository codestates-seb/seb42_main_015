import { useState, useRef, useEffect } from "react";
import * as W from "../WriteLetter/WriteStyled";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const Filp = styled.div`
  width: 68rem;
  height: 113.3rem;
  position: relative;

  /* &:hover .card {
    transform: rotateY(180deg);
  } */
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
  perspective: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
  .front,
  .back {
    backface-visibility: hidden;
  }
  .back {
    position: absolute;
    transform: rotateY(180deg);
  }
`;
const Preview = () => {
  const { toName, fromName, content, font, theme } = JSON.parse(
    sessionStorage.getItem("preview")
  );

  return (
    <W.PageContainer className="container">
      <Card>
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
          <img src=""></img>
          <div className="to">to. {toName}</div>
          <div className="date">2023.03.17 금</div>
          <div className="from">From. {fromName}</div>
        </W.LetterBox>
      </Card>
    </W.PageContainer>
  );
};

export default Preview;
