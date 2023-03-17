import React from "react";
import styled from "styled-components";
import { CardContents, CardContents2 } from "./PwdCardContents";
import { AiOutlineArrowRight } from "react-icons/ai";

function PwdChange() {
  return (
    <PwdChangeWrap>
      <Gradient>
        <Gnb>
          <div>내정보</div>
          <div className="on">비밀번호 수정</div>
          <div>휴지통</div>
        </Gnb>
        <Container>
          <Card>
            <CardContents />
            {/* <CardContents2 /> */}
            <div className="contents-next">
              <AiOutlineArrowRight className="next" />
            </div>
          </Card>
        </Container>
      </Gradient>
    </PwdChangeWrap>
  );
}

export default PwdChange;

const PwdChangeWrap = styled.div`
  height: 90vh;
  background-color: #fcfbf4;
  overflow: hidden;
`;
const Gradient = styled.div`
  height: 300px;
  background: linear-gradient(
    180deg,
    rgba(255, 155, 99, 1) 0%,
    rgba(255, 155, 99, 0) 100%
  );
`;
const Gnb = styled.div`
  display: flex;
  /* border: 1px solid; */
  padding: 1rem;
  margin: 0 5rem;
  div {
    padding: 1rem;
    margin-right: 3rem;
  }
  .on {
    background-color: #ff843f;
    border-radius: 50%;
  }
`;
const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  overflow: hidden;
  width: 60vw;
  height: 61vh;
  background-color: #fff;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  .contents-next {
    flex-grow: 1;
    width: 100%;
    text-align: right;
    .next {
      font-size: 2rem;
      margin-right: 1rem;
    }
  }
`;
