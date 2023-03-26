import React from "react";
import styled from "styled-components";
import cat from "../asset/404cat.png";
import sorryCat from "../asset/sorryCat.png";
import { FONT_STYLE_V1 } from "../style/fontStyle";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding-left: 5rem;
  padding-right: 5rem;
  .cat-img {
    width: 35rem;
    object-fit: contain;
  }
`;
const WordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  .inform-wrapper {
    margin-top: 5rem;
  }
`;
const Title = styled.h1`
  ${FONT_STYLE_V1.title.title_100_bold}
`;
const Inform = styled.div`
  ${FONT_STYLE_V1.body.body_20_light}
`;

function NotFound() {
  return (
    <NotFoundWrapper>
      <WordWrapper>
        <div className="title-wrapper">
          <Title>404</Title>
          <Title>Not Found</Title>
        </div>
        <div className="inform-wrapper">
          <Inform>길을 잘못 드신 것 같아요!</Inform>
          <Inform>찾으시는 URL이 존재하지 않습니다.</Inform>
        </div>
      </WordWrapper>
      <div className="img-wrapper">
        <img className="cat-img" src={cat}></img>
        <img className="sorry-cat-img" src={sorryCat}></img>
      </div>
    </NotFoundWrapper>
  );
}

export default NotFound;
