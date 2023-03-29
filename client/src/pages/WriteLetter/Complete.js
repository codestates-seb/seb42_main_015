import React from "react";
import * as W from "./WriteStyled";
import styled from "styled-components";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import completeCat from "../../asset/completeCat.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;
const Title = styled.div`
  ${FONT_STYLE_V1.title.title_30_medium}
`;

function Complete() {
  return (
    <Container>
      <Title>편지가 완성되었어요!</Title>
      <img src={completeCat} />
      <div>url 주소를 친구에게 전송해보세요!</div>
    </Container>
  );
}

export default Complete;
