import styled, { keyframes } from "styled-components";
import { PALETTE_MAIN } from "../../style/color";
import { FONT_STYLE_V1, FONT_STYLE_LOGO } from "../../style/fontStyle";
import BREAKPOINTMOBILE from "../../breakpoint";

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
      bottom: 160px;
      left: -70px;
      width: 270px;
    }
    .left2 {
      position: absolute;
      bottom: 40px;
      left: -50px;
      width: 230px;
    }
    .left3 {
      position: absolute;
      bottom: 150px;
      left: 80px;
      width: 120px;
    }
    .left4 {
      position: absolute;
      bottom: 250px;
      left: -60px;
      width: 250px;
    }
    .left5 {
      position: absolute;
      bottom: -10px;
      left: 110px;
      width: 200px;
    }
    .sendy {
      position: absolute;
      top: 10px;
      left: -10px;
      width: 500px;
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
      top: 0;
      right: -40px;
      width: 150px;
    }
    .right2 {
      position: absolute;
      top: -50px;
      right: 40px;
      width: 200px;
    }
    .right3 {
      position: absolute;
      top: 170px;
      right: -15px;
      width: 130px;
    }
    .sendy {
      position: absolute;
      bottom: 70px;
      right: 0;
      width: 300px;
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
    width: 610px;
    transition: 3s;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    display: flex;
    flex-direction: column;
    &:hover .high-light {
      width: 470px;
      transition: 3s;
    }
  }
`;

export const IntroTextbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin-right: 0;
  }
`;
export const IntroImgbox = styled.div`
  background-color: #fff;
  width: 400px;
  height: 600px;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 250px;
    height: 400px;
    margin-top: 2rem;
  }
`;

export const Title = styled.div`
  ${FONT_STYLE_V1.title.title_40_thin}
  position: relative;
  strong {
    ${FONT_STYLE_V1.title.title_40_medium}
  }
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
    font-size: 3rem;
    strong {
      font-size: 3rem;
    }
  }
`;

export const Contents = styled.div`
  ${FONT_STYLE_V1.title.title_20_thin}
  margin-top: 1rem;
  margin-bottom: 3rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    font-size: 1.5rem;
  }
`;
export const Button = styled.div`
  ${FONT_STYLE_V1.title.title_12_medium}
  background-color: #feb950;
  width: 200px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  .button-icon {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    font-size: 1rem;
    width: 160px;
    height: 50px;
  }
`;

export const Textbox = styled.div`
  width: 650px;
  height: 500px;
  /* background-color: white;
  border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-left: 3rem;
  .flower {
    width: 100px;
    position: absolute;
    top: -50px;
    left: -20px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 550px;
    height: 350px;
    padding-left: 0;
    align-items: center;
    text-align: center;
  }
`;

export const SubTitle = styled.span`
  ${FONT_STYLE_V1.title.title_20_medium}
  margin-bottom: 1rem;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    font-size: 1.5rem;
  }
`;

export const SubContents = styled.div`
  ${FONT_STYLE_V1.body.body_15_light}
  margin-bottom: 3rem;
  .ex {
    margin-top: 2rem;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    font-size: 1.2rem;
  }
`;

export const Imgbox = styled.div`
  width: 600px;
  height: 500px;
  background-color: #ccc;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 550px;
    height: 400px;
  }
`;

export const Last = styled.div`
  display: flex;
  justify-content: center;
`;

export const FakeLast = styled.div`
  min-height: 370px;
  /* position: relative; */
  /* background-color: aquamarine; */
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
  height: 70px;
  border-bottom: 1px solid black;
  overflow: hidden;
  position: relative;
  img {
    max-height: 55px;
  }
`;

export const SendyBottom = styled.div`
  width: 100vw;
  height: 70px;
  border-top: 1px solid black;
  overflow: hidden;
  position: relative;
  img {
    max-height: 55px;
  }
`;

export const Track = styled.div`
  height: 100%;
	overflow: hidden;
	padding: 0.5rem 0;
	position: absolute;
`;

export const TrackImg = styled.span`
  animation: ${flowAnimation} 5s linear infinite;
  align-items: center;
  display: inline-flex;
  /* will-change: transform; */
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
    font-size: 2rem;
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
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.div`
  display: flex;
  ${FONT_STYLE_LOGO.title.title_25_medium}
  position: relative;
  img {
    width: 25px;
    height: 25px;
    position: absolute;
    left: 110px;
  } 
`;

export const Info = styled.ul`
  ${FONT_STYLE_V1.body.body_8_light}
  display: flex;
  flex-direction: column;
  line-height: 2;
  margin-top: 2.2rem;
`;
