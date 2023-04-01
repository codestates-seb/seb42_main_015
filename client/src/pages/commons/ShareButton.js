import React from "react";
import styled from "styled-components";

const Button = styled.div`
  margin-top: 3rem;
`;

function ShareButton({ urlName }) {
  const shareKakao = () => {
    const Kakao = window.Kakao;
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "지금 당신에게 온 편지가 있어요!",
        description:
          "친구가 보낸 편지를 열어보세요. 두근두근 어떤 마음이 담겨있을까요?",
        imageUrl: "https://ifh.cc/g/ZbfmbT.png",
        link: {
          mobileWebUrl: `http://localhost:3000/readletter/${urlName}`,
          webUrl: `http://localhost:3000/readletter/${urlName}`,
        },
      },
      itemContent: {
        profileText: "SENDY",
        profileImageUrl: "https://ifh.cc/g/G0xoHF.png",
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: `http://localhost:3000/readletter/${urlName}`,
            webUrl: `http://localhost:3000/readletter/${urlName}`,
          },
        },
      ],
    });
  };
  return (
    <Button className="kakao-btn" onClick={shareKakao}>
      <img src={require("../../asset/카카오.png")} alt="kakao" />
    </Button>
  );
}

export default ShareButton;
