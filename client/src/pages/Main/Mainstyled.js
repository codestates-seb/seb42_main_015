import styled, { keyframes } from "styled-components";
import { PALETTE_MAIN } from "../../style/color";
import { FONT_STYLE_V1, FONT_STYLE_LOGO } from "../../style/fontStyle";
import { BREAKPOINTMOBILE } from "../../breakpoint";

export const MainWrap = styled.div``;

export const Column1 = styled.div`
  background-color: ${PALETTE_MAIN.background[0]};
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Column2 = styled.div`
  background-color: ${PALETTE_MAIN.background[1]};
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    flex-direction: column;
  }
  @media screen and (max-height: 667px) {
    justify-content: flex-start;
    padding-top: 5rem;
  }
`;

export const Column3 = styled.div`
  background-color: ${PALETTE_MAIN.background[0]};
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    flex-direction: column;
  }
`;

export const Column4 = styled.div`
  background-color: ${PALETTE_MAIN.background[1]};
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    flex-direction: column;
  }
  @media screen and (max-height: 667px) {
    justify-content: flex-start;
    padding-top: 5rem;
  }
`;

export const Column5 = styled.div`
  background-color: ${PALETTE_MAIN.background[0]};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LeftImgBox = styled.div`
  .left1 {
    position: absolute;
    bottom: 160px;
    left: -100px;
  }
  .left2 {
    position: absolute;
    bottom: 30px;
    left: -80px;
  }
  .left3 {
    position: absolute;
    bottom: 160px;
    left: 90px;
  }
  .left4 {
    position: absolute;
    bottom: 280px;
    left: -80px;
  }
  .left5 {
    position: absolute;
    bottom: -10px;
    left: 110px;
  }
  .sendy {
    position: absolute;
    top: 10px;
    left: -10px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    .left1 {
      position: absolute;
      bottom: 130px;
      left: -50px;
      width: 150px;
    }
    .left2 {
      position: absolute;
      bottom: 40px;
      left: -50px;
      width: 150px;
    }
    .left3 {
      position: absolute;
      bottom: 120px;
      left: 40px;
      width: 80px;
    }
    .left4 {
      position: absolute;
      bottom: 180px;
      left: -60px;
      width: 150px;
    }
    .left5 {
      position: absolute;
      bottom: -10px;
      left: 40px;
      width: 150px;
    }
    .sendy {
      position: absolute;
      top: 10px;
      left: -10px;
      width: 100vw;
    }
  }
`;

export const RightImgBox = styled.div`
  .right1 {
    position: absolute;
    top: -20px;
    right: -50px;
  }
  .right2 {
    position: absolute;
    top: -70px;
    right: 55px;
  }
  .right3 {
    position: absolute;
    top: 200px;
    right: -30px;
  }
  .sendy {
    position: absolute;
    bottom: 70px;
    right: 0;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    .right1 {
      position: absolute;
      top: -10px;
      right: -40px;
      width: 110px;
    }
    .right2 {
      position: absolute;
      top: -40px;
      right: 15px;
      width: 150px;
    }
    .right3 {
      position: absolute;
      top: 120px;
      right: -30px;
      width: 90px;
    }
    .sendy {
      position: absolute;
      bottom: 70px;
      right: 0;
      width: 60vw;
    }
  }
`;

export const Intro = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover .high-light {
    width: 600px;
    transition: 3s;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    display: flex;
    flex-direction: column;
    &:hover .high-light {
      width: 310px;
      transition: 3s;
    }
  }
`;

export const IntroTextbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 4rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding-right: 0;
    padding-bottom: 10rem;
  }
`;

export const Title = styled.div`
  ${FONT_STYLE_V1.title.title_50_thin}
  strong {
    ${FONT_STYLE_V1.title.title_50_medium}
  }
  position: relative;
  overflow: hidden;
  .high-light {
    width: 30px;
    height: 20px;
    background-color: #ffcb12;
    opacity: 0.5;
    position: absolute;
    bottom: 5px;
    left: -10px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    font-size: 4rem;
    strong {
      font-size: 4rem;
    }
    .high-light {
      height: 10px;
    }
  }
`;

export const Contents = styled.div`
  ${FONT_STYLE_V1.title.title_30_thin}
  margin-top: 1rem;
  margin-bottom: 5rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 2.8rem;
    }
`;

export const Button = styled.div`
  ${FONT_STYLE_V1.title.title_14_medium}
  background-color: #feb950;
  width: 200px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 7px 7px 0px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 7px 7px 0px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 7px 0px -1px rgba(0, 0, 0, 0.75);
  &:active {
    transform: translate(3px, 3px);
    transition: transform 0s linear;
  }
  .button-icon {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 120px;
    height: 40px;
  }
`;

export const TextboxRight = styled.div`
  /* border: 1px solid black; */
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  margin-right: 3rem;
  text-align: right;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-right: 0;
    align-items: center;
    text-align: center;
    .flower {
      width: 50px;
      top: -25px;
      left: 40%;
    }
  }
`;

export const TextboxLeft = styled.div`
  /* border: 1px solid black; */
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  margin-left: 3rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-left: 0;
    align-items: center;
    text-align: center;
    .flower {
      width: 50px;
      top: -25px;
      left: 40%;
    }
  }
`;

export const SubTitle = styled.span`
  ${FONT_STYLE_V1.title.title_25_medium}
  margin-bottom: 2rem;
`;

export const SubContents = styled.div`
  ${FONT_STYLE_V1.body.body_18_light}
  margin-bottom: 3rem;
  .ex {
    margin-top: 2rem;
  }
`;

export const ImgboxOne = styled.div`
  width: 480px;
  height: 540px;
  background-color: #fff;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .main {
    width: 100%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin-bottom: 2rem;
  }
  .flower {
    width: 12rem;
    position: absolute;
    top: -5rem;
    right: -5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 280px;
    height: 320px;
    .flower {
      width: 9rem;
      top: -3rem;
      right: -4rem;
    }
  }
  @media screen and (max-height: 667px) {
    width: 250px;
    height: 280px;
  }
`;

export const ImgboxTwo = styled.div`
  width: 480px;
  height: 490px;
  background-color: #fff;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .main {
    width: 100%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin-bottom: 2rem;
  }
  .main-sticker1 {
    width: 300px;
    position: absolute;
    top: -5rem;
    left: -5rem;
  }
  .main-sticker2 {
    width: 200px;
    position: absolute;
    bottom: -5rem;
    left: -5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 260px;
    height: 270px;
    margin-top: ${(props) => (props.margin ? props.margin : "0")};
    .main-sticker1 {
      width: 180px;
      position: absolute;
      top: -5rem;
      left: -5rem;
    }
    .main-sticker2 {
      width: 100px;
      position: absolute;
      bottom: -3rem;
      left: -4rem;
    }
  }
`;

export const ImgboxThree = styled.div`
  width: 480px;
  height: 470px;
  background-color: #fff;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .main {
    width: 100%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin-bottom: 2rem;
  }
  .main-sticker3 {
    width: 120px;
    position: absolute;
    bottom: -6rem;
    right: -5rem;
  }
  .main-sticker4 {
    width: 250px;
    position: absolute;
    top: -8rem;
    left: -5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 260px;
    height: 260px;
    margin-top: ${(props) => (props.margin ? props.margin : "0")};
    .main-sticker3 {
      width: 70px;
      position: absolute;
      bottom: -5rem;
      right: -5rem;
    }
    .main-sticker4 {
      width: 150px;
      position: absolute;
      top: -7rem;
      left: -5rem;
    }
  }
`;

export const Last = styled.div`
  display: flex;
  justify-content: center;
`;

export const FakeLast = styled.div`
  min-height: 370px;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    min-height: 320px;
  }
`;

const flowAnimation = keyframes`
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translateX(-100%);
  }
`;

export const SendyTop = styled.div`
  width: 100vw;
  height: 65px;
  border-bottom: 1px solid black;
  overflow: hidden;
  position: relative;
  img {
    max-height: 55px;
  }
`;

export const SendyBottom = styled.div`
  width: 100vw;
  height: 65px;
  border-top: 1px solid black;
  overflow: hidden;
  position: relative;
  img {
    max-height: 55px;
  }
`;

export const Track = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  padding: 0.5rem 0;
  position: absolute;
  display: flex;
`;

export const TrackImg = styled.span`
  animation: ${flowAnimation} 5s linear infinite;
`;

export const TrackImgReverse = styled.span`
  animation: ${flowAnimation} 6s linear infinite reverse;
`;

export const LastTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LastTitle = styled.div`
  ${FONT_STYLE_V1.title.title_30_medium}
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 1px;
  line-height: 1.5;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    ${FONT_STYLE_V1.title.title_25_medium}
  }
`;

export const Footer = styled.footer`
  width: 100vw;
  height: 300px;
  background: #ffe49d;
  border-top: 1px solid #312f2b;
  padding: 0 6rem 3rem;
  display: flex;
  position: absolute;
  bottom: 0px;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    height: 250px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.span`
  ${FONT_STYLE_LOGO.title.title_35_medium}
  width: max-content;
  display: flex;
  position: relative;
  img {
    width: 25px;
    height: 25px;
    position: absolute;
    right: -30px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    img {
      width: 18px;
      height: 18px;
      right: -20px;
    }
  }
`;

export const Info = styled.ul`
  ${FONT_STYLE_V1.body.body_12_light}
  width: max-content;
  display: flex;
  flex-direction: column;
  line-height: 2;
  margin-top: 2.5rem;
`;
