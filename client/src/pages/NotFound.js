import React from "react";
import styled from "styled-components";
import cat from "../asset/404cat.png";
import sorryCat from "../asset/sorryCat.png";
import { FONT_STYLE_V1 } from "../style/fontStyle";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 95vh;
  align-items: center;
  justify-content: center;
  padding-left: 5rem;
  padding-right: 5rem;
  .img-wrapper {
    display: flex;
    align-items: flex-end;
    .cat-img {
      width: 25rem;
      object-fit: contain;
    }
    .sorry-cat-img {
      width: 23rem;
      object-fit: contain;
    }
  }
  @media screen and (max-width: 555px) {
    .img-wrapper {
      flex-direction: row;
    }
  }
  @media screen and (max-width: 417px) {
    .img-wrapper {
      .cat-img {
        width: 15rem;
      }
      .sorry-cat-img {
        width: 13rem;
      }
    }
  }
`;
const WordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      text-align: center;
    }
  }
  .inform-wrapper {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 555px) {
  }
`;
const Title = styled.h1`
  ${FONT_STYLE_V1.title.title_100_bold}
  font-family: "White_angel";
`;
const Inform = styled.div`
  ${FONT_STYLE_V1.body.body_30_light}
  font-family: "White_angel";
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
        <img className="cat-img" src={cat} alt="노란 고양이 그림"></img>
        <img
          className="sorry-cat-img"
          src={sorryCat}
          alt="사과하는 고양이 그림"></img>
      </div>
    </NotFoundWrapper>
  );
}

export default NotFound;
