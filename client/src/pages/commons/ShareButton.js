import React from "react";
import styled from "styled-components";

const Button = styled.div`
  margin-top: 3rem;
`;

function ShareButton({ urlName }) {
  const shareKakao = (urlName) => {
    const Kakao = window.Kakao;
    Kakao.Share.sendScrap({
      requestUrl: `http://localhost:3000/readletter/`, // 페이지 url
      templateId: 91983, // 메시지템플릿 번호
      templateArgs: {
        PROFILE: "프로필 이미지 주소",
        THUMB: "썸네일 주소", // 썸네일 주소 ${THUMB}
        TITLE: "제목 텍스트입니다", // 제목 텍스트 ${TITLE}
        DESC: "설명 텍스트입니다", // 설명 텍스트 ${DESC}
      },
    });
  };
  return (
    <Button className="kakao-btn" onClick={shareKakao}>
      <img src={require("../../asset/카카오.png")} alt="kakao" />
    </Button>
  );
}

export default ShareButton;
