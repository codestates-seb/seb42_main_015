import React, { useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import ShareButton from "../commons/ShareButton";
import { IoShareSocialSharp } from "react-icons/io5";
import { PALETTE_V1 } from "../../style/color";

const rotateAnimation = keyframes`
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: rotate(0deg)
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: rotate(720deg)
  }
`;
const backRotateAnimation = keyframes`
  0% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: rotate(720deg)
  }
  100% {
    -webkit-transform: translate3d(0%, 0, 0);
    transform: rotate(0deg)
  }
`;

const SendButton = styled.div`
  width: 5rem;
  height: 5rem;
  border: 0.08rem solid black;
  border-radius: 50%;
  position: fixed;
  bottom: 2.4rem;
  right: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  background-color: ${PALETTE_V1.orange_dark};
  color: white;
  cursor: pointer;
  z-index: 99;
  &.active {
    animation: ${rotateAnimation} 600ms ease-in-out forwards;
  }
  &.unactive {
    animation: ${backRotateAnimation} 600ms ease-in-out forwards;
  }
`;

function ShareButtons({ urlName }) {
  const [showButtons, setShowButtons] = useState(null);
  const handleShowButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <>
      <SendButton
        onClick={handleShowButtons}
        className={
          showButtons ? "active" : showButtons !== null ? "unactive" : ""
        }>
        <IoShareSocialSharp />
      </SendButton>
      <ShareButton showButtons={showButtons} urlName={urlName} />
    </>
  );
}

export default ShareButtons;
