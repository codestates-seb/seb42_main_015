import { useState, useRef, useEffect } from "react";
import * as W from "../WriteLetter/WriteStyled";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 5%;
  width: 100%;
  align-items: center;
`;
const Filp = styled.div`
  width: 68rem;
  height: 113.3rem;
  position: relative;
  perspective: 1100px;
  &:hover .card {
    transform: rotateY(180deg);
  }
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .back {
    transform: rotateY(180deg);
  }
`;
const Preview = ({ isLogin }) => {
  const [isKeeping, setIsKeeping] = useState(false);
  //편지 정보 가져오기
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  return (
    <W.PageContainer>
      <Container>
        <Filp>
          <Card className="card">
            <W.LetterBox className="front">
              <div className="top">
                <div className="to">To. 김햄찌</div>
                <div className="date">2023.03.17 금</div>
              </div>
              <div className="content"></div>
              <div className="from">From. 오디토</div>
            </W.LetterBox>
            <W.LetterBox className="back">
              <img src=""></img>
              <div className="to">To. 김햄찌</div>
              <div className="date">2023.03.17 금</div>
              <div className="from">From. 오디토</div>
            </W.LetterBox>
          </Card>
        </Filp>
      </Container>
    </W.PageContainer>
  );
};

export default Preview;
