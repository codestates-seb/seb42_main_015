import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  width: 20rem;
  justify-content: space-evenly;
`;
const Button = styled.div`
  width: fit-content;
  height: fit-content;
  img {
    width: 5rem;
    height: 5rem;
  }
`;

function ShareButton({ urlName }) {
  const pageUrl = `https://www.sendy.site/readletter/${urlName}`;
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
          mobileWebUrl: pageUrl,
          webUrl: pageUrl,
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
            mobileWebUrl: pageUrl,
            webUrl: pageUrl,
          },
        },
      ],
    });
  };

  const shareTwitter = () => {
    const sendText = "지금 당신에게 온 편지가 있어요!";
    window.open(
      `https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`
    );
  };

  const shareFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
  };

  return (
    <ButtonContainer>
      <Button className="kakao-btn" onClick={shareKakao}>
        <img src={require("../../asset/카카오.png")} alt="kakao" />
      </Button>
      <Button onClick={shareTwitter}>
        <img src={require("../../asset/twitter.png")} alt="twitter" />
      </Button>
      <Button onClick={shareFacebook}>
        <img src={require("../../asset/facebook.png")} alt="facebook" />
      </Button>
    </ButtonContainer>
  );
}

export default ShareButton;
