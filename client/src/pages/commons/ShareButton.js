import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const moveAnimation = keyframes`
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translateY(-8.5rem);
    opacity: 1;
  }
`;
const backAnimation = keyframes`
  0%{
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translateY(-8.5rem);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateY(0);
    opacity: 0;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  width: 20rem;
  justify-content: space-evenly;
  &.active {
    flex-direction: column;
    width: fit-content;
    position: fixed;
    bottom: 2.4rem;
    right: 2.4rem;
    z-index: 99;
    animation: ${moveAnimation} 300ms ease-in-out forwards;
  }
  &.unactive {
    flex-direction: column;
    width: fit-content;
    position: fixed;
    bottom: 2.4rem;
    right: 2.4rem;
    z-index: 99;
    animation: ${backAnimation} 300ms ease-in-out forwards;
  }
  &.display-none {
    display: none;
  }
`;
const Button = styled.div`
  width: fit-content;
  height: fit-content;
  img {
    width: 5rem;
    height: 5rem;
  }
`;

function ShareButton({ urlName, showButtons }) {
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

  const [displayNone, setDisplayNone] = useState(true);
  window.addEventListener("animationend", (e) => {
    if (showButtons) {
      setDisplayNone(false);
    } else {
      setDisplayNone(true);
    }
  });

  return (
    <ButtonContainer
      className={
        showButtons
          ? "active"
          : showButtons !== null
          ? displayNone
            ? "unactive display-none"
            : "unactive"
          : displayNone
          ? "display-none"
          : ""
      }>
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
