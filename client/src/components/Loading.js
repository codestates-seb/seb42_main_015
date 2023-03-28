import styled from "styled-components";
import { BREAKPOINTMOBILE } from "../breakpoint";

const LoadingBody = styled.div`
  background-color: rgba(251, 251, 250, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 102;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: 2s linear infinite svg-animation;
    max-width: 150px;
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      max-width: 100px;
    }
  }

  // SVG animation.
  @keyframes svg-animation {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  // Circle styles.
  circle {
    animation: 1.4s ease-in-out infinite both circle-animation;
    display: block;
    fill: transparent;
    stroke: #ffcb12;
    stroke-linecap: round;
    stroke-dasharray: 283;
    stroke-dashoffset: 280;
    stroke-width: 10px;
    transform-origin: 50% 50%;
  }

  // Circle animation.
  @keyframes circle-animation {
    0%,
    25% {
      stroke-dashoffset: 280;
      transform: rotate(0);
    }

    50%,
    75% {
      stroke-dashoffset: 75;
      transform: rotate(45deg);
    }

    100% {
      stroke-dashoffset: 280;
      transform: rotate(360deg);
    }
  }
`;

export const Loading = () => {
  return (
    <LoadingBody>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" />
      </svg>
    </LoadingBody>
  );
};
