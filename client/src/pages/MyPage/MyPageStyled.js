import styled from "styled-components";
import { PALETTE_V1 } from "../../style/color";
import { FONT_STYLE_V1 } from "../../style/fontStyle";
import sendme from "../../asset/myPage-sendme.png";
import pwd from "../../asset/pwd.png";
import {
  BREAKPOINTMOBILE,
  BREAKPOINTMOBILE2,
  BREAKPOINTTABLET,
} from "../../breakpoint";

export const MyPageContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;
export const FlexWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
`;
export const GNBWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-around;
  padding-left: 80px;
  padding-bottom: 50px;
  @media screen and (min-width: ${BREAKPOINTMOBILE2}px) and (max-width: ${BREAKPOINTMOBILE}px) {
    padding-left: 10vw;
    width: 70vw;
  }
  @media screen and (min-width: ${BREAKPOINTMOBILE2}px) and (max-width: 645px) {
    padding-left: 64.5px;
    width: 452.5px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE2}px) {
    width: 200px;
  }
`;
export const GNBMenu = styled.div`
  ${FONT_STYLE_V1.title.title_16_medium}
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${PALETTE_V1.text_primary};
  border-top: none;
  background-color: #ffffff;
  padding: 0.8rem 0.6rem;
  height: 37px;
  width: 135px;
  text-align: center;
  cursor: pointer;
  min-width: 125px;
  &.active {
    background-color: ${PALETTE_V1.yellow_primary};
    padding-top: 1rem;
    height: 50px;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE2}px) {
    border: 1px solid ${PALETTE_V1.text_primary};
    border-top: none;
    max-width: 80px;
    min-width: 80px;
    max-height: 30px;
    &.active {
      background-color: ${PALETTE_V1.yellow_primary};
      padding-top: 1rem;
      max-height: 40px;
    }
  }
`;
export const FlexWrapper3 = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`;
export const UserInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border: 2px solid ${PALETTE_V1.text_primary};
  aspect-ratio: 4/1;
  width: 100%;
  height: 100%;
  box-shadow: 15px 15px ${PALETTE_V1.yellow_primary},
    17px 17px ${PALETTE_V1.text_primary}, 13px 17px ${PALETTE_V1.text_primary},
    17px 13px ${PALETTE_V1.text_primary};
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    aspect-ratio: 1/4;
  }
`;
export const FlexWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const UserImage = styled.img`
  background-color: pink;
  border: 1px solid ${PALETTE_V1.text_primary};
  border-radius: 50%;
  width: 85%;
  height: 85%;
  margin-bottom: 5px;
  aspect-ratio: 1 / 1;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid ${PALETTE_V1.text_primary};
  width: 70%;
  height: 90%;
  @media screen and (max-width: 1023px) {
    border-left: none;
  }
`;
export const UserName = styled.div`
  ${FONT_STYLE_V1.title.title_20_medium}
  padding: 1rem 1rem;
`;
export const SignUpDate = styled.div`
  ${FONT_STYLE_V1.body.body_14_light}
  padding-right: 10px;
`;
export const NameDateWrapper = styled(FlexWrapper2)`
  border-bottom: 2px solid ${PALETTE_V1.text_primary};
  justify-content: space-between;
  align-items: center;
  width: 95%;
  @media screen and (max-width: 1023px) {
    /* border-bottom: none; */
  }
`;
export const UserEmail = styled.div`
  ${FONT_STYLE_V1.body.body_15_light}
  padding: 0.8rem 1rem;
`;
export const ReadletterLink = styled.a`
  ${FONT_STYLE_V1.body.body_13_light}
  border-bottom:1px solid ${PALETTE_V1.text_primary};
  margin-right: 10px;
  white-space: nowrap;
  cursor: pointer;
  margin: 0.8rem 1rem;
`;
export const EmailWrapper = styled(FlexWrapper2)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 95%;
`;
export const EditButton = styled.div`
  ${FONT_STYLE_V1.body.body_12_light}
  margin-bottom: 5px;
  margin-right: 3px;
  position: absolute;
  right: 5px;
  bottom: 5px;
  cursor: pointer;
  @media screen and (min-width: ${BREAKPOINTMOBILE2}px) and (max-width: ${BREAKPOINTMOBILE}px) {
    bottom: -13px;
  }
`;
export const Sticker = styled.img.attrs({ src: `${sendme}` })`
  position: absolute;
  width: 200px;
  z-index: 200;
  bottom: 90px;
  right: 160px;
  transform: rotate(-40deg);
  @media screen and (max-width: 1023px) {
    width: 180px;
    bottom: 10px;
    right: 110px;
    transform: rotate(-30deg);
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 100px;
    bottom: -55px;
    right: -40px;
    transform: rotate(-30deg);
  }
  /* @media screen and (min-width: ${BREAKPOINTMOBILE2}px) and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 170px;
    bottom: -70px;
  } */
`;
export const StickerWrapper = styled.div`
  width: 70%;
  height: 55%;
  max-width: 720px;
  /* @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    width: 70%;
    height: 45%;
  }
  @media screen and (max-width: ${BREAKPOINTMOBILE2}px) {
    width: 70%;
    height: 35%;
  } */
  @media screen and (max-width: 1023px) {
    width: 55%;
    height: 80%;
  }
`;
export const ResignationWrapper = styled.div`
  border-top: 2px solid ${PALETTE_V1.text_primary};
  margin-top: 100px;
  display: flex;
  justify-content: flex-end;
`;
export const ResignLink = styled(ReadletterLink)`
  border-bottom: none;
  margin-top: 20px;
  margin-right: 20px;
`;
export const ResignBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 300;
`;
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem 1rem 3rem;
  height: 90%;
  justify-content: space-evenly;
  .notice {
    ${FONT_STYLE_V1.body.body_14_light}
    text-align: center;
    p {
      padding-top: 5px;
    }
  }
  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ModalTitle = styled.div`
  ${FONT_STYLE_V1.title.title_25_medium}
`;
export const PwdInput = styled.input.attrs({ type: "password" })`
  outline: none;
  border: none;
  font-size: 1.8rem;
  background-image: url(${pwd});
  background-size: 1.5rem;
  background-repeat: no-repeat;
  border-bottom: 1px solid ${PALETTE_V1.text_primary};
  background-position: left center;
  padding: 0rem 3rem;
  height: 2.8rem;
  width: 15rem;
  &::placeholder {
    ${FONT_STYLE_V1.body.body_13_light}
    color: grey;
  }
`;
export const NextIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .active {
    cursor: pointer;
    padding: 4px;
    &:hover {
      background-color: #dbdbdb;
      border-radius: 50%;
    }
  }
`;
export const PwdError = styled.div`
  ${FONT_STYLE_V1.body.body_8_light}
  color: ${PALETTE_V1.red_modal_button};
  padding-top: 10px;
`;
